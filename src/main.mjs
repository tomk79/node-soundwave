export default class Soundwave {
	#audioInput = null;
	#audioInputType = null;
	#options = {};
	#events = {
		sound: [],
	};

	constructor (audioInput, options) {
		this.#audioInput = audioInput;
		this.#options = options || {};
		this.#audioInputType = (()=>{
			if(audioInput instanceof HTMLElement){
				return 'element';
			}
			if(audioInput instanceof MediaStream){
				return 'stream';
			}
			return null;
		})();

		const audioContext = new (window.AudioContext || window.webkitAudioContext)();
		const sourceNode = (()=>{
			if(this.#audioInputType == 'element'){
				return audioContext.createMediaElementSource(audioInput);
			}
			if(this.#audioInputType == 'stream'){
				return audioContext.createMediaStreamSource(audioInput);
			}
		})();

		const analyserNode = audioContext.createAnalyser();
		analyserNode.fftSize = 256;

		sourceNode.connect(analyserNode);
		if(this.#options.destination){		
			analyserNode.connect(audioContext.destination);
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
}
