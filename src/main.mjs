export default class Soundwave {
	#audioInput = null;
	#audioInputType = null;
	#options = {};

	#audioContext = null;
	#events = {
		sound: [],
	};

	constructor (audioInput, options) {
		this.#audioInput = audioInput;
		options = options || {};
		options.destination = !!options.destination;
		options.channels = options.channels || 1;
		this.#options = options;
		this.#audioInputType = (()=>{
			if(this.#audioInput instanceof HTMLElement){
				return 'element';
			}
			if(this.#audioInput instanceof MediaStream){
				return 'stream';
			}
			return null;
		})();

		this.#audioContext = new (window.AudioContext || window.webkitAudioContext)();
		const sourceNode = (()=>{
			if(this.#audioInputType == 'element'){
				this.#audioInput.addEventListener('play', ()=>{
					this.resume();
				});
				return this.#audioContext.createMediaElementSource(this.#audioInput);
			}
			if(this.#audioInputType == 'stream'){
				return this.#audioContext.createMediaStreamSource(this.#audioInput);
			}
		})();

	    const splitter = this.#audioContext.createChannelSplitter(this.#options.channels);
	    const merger = this.#audioContext.createChannelMerger(this.#options.channels);
		const analyserNodes = [];
		const pannerNodes = [];

		sourceNode.connect(splitter);

		for(let i = 0; i < this.#options.channels; i ++){
			analyserNodes[i] = this.#audioContext.createAnalyser();
			analyserNodes[i].fftSize = 256;
			pannerNodes[i] = this.#audioContext.createStereoPanner();
			pannerNodes[i].connect(analyserNodes[i]);
			pannerNodes[i].pan.value = (options.channels == 1 ? 0 : (i === 0 ? -1 : 1)); // TODO: ステレオ再生はされるが、pan設定は効いてない
			splitter.connect(pannerNodes[i], i);
			pannerNodes[i].connect(merger, 0, i);
		}

		if(this.#options.destination){		
			merger.connect(this.#audioContext.destination);
		}

		const dataArrays = [];
		for(let i = 0; i < this.#options.channels; i ++){
			dataArrays[i] = new Uint8Array(analyserNodes[i].frequencyBinCount);
		}

		const getVolumeLevel = (analyserNode, dataArray) => {
			analyserNode.getByteFrequencyData(dataArray);

			let sum = dataArray.reduce((a, b) => a + b, 0);
			let average = sum / dataArray.length;
			let per = Number(average/255) * 2;
			if(per > 100){ per = 100; }

			return per;
		};

		const updateVolumeLevel = () => {
			const volumeLevels = [];
			for(let i = 0; i < this.#options.channels; i ++){
				volumeLevels[i] = getVolumeLevel(analyserNodes[i], dataArrays[i]);
			}

			this.#events['sound'].forEach((callback)=>{
				callback(volumeLevels);
			});
			requestAnimationFrame(updateVolumeLevel);
		};
		updateVolumeLevel();
	}

	on (eventName, callback) {
		this.#events[eventName].push(callback);
	}

	off (eventName) {
		this.#events[eventName] = [];
	}

	resume() {
		this.#audioContext.resume();
	}
}
