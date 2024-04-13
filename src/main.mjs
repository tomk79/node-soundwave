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
		this.#options = options || {};
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

		const analyserNode = this.#audioContext.createAnalyser();
		analyserNode.fftSize = 256;

		sourceNode.connect(analyserNode);
		if(this.#options.destination){		
			analyserNode.connect(this.#audioContext.destination);
		}

		const dataArray = new Uint8Array(analyserNode.frequencyBinCount);

		const getVolumeLevel = () => {
			analyserNode.getByteFrequencyData(dataArray);

			let sum = dataArray.reduce((a, b) => a + b, 0);
			let average = sum / dataArray.length;
			let per = Number(average/255) * 2;

			return per;
		};

		const updateVolumeLevel = () => {
			const volumeLevel = getVolumeLevel();
			this.#events['sound'].forEach((callback)=>{
				callback(volumeLevel);
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
