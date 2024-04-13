document.addEventListener('DOMContentLoaded', function() {

	// --------------------------------------
	// 音声ファイルの音量を取得する
	(() => {
		const audioElement = document.getElementById('audio-sample');

		const $volumeLevelDisplayLeft = $('#volume-indicator__audio-element-left');
		const $volumeLevelDisplayRight = $('#volume-indicator__audio-element-right');
		const soundWave = new SoundWave(audioElement, {
			destination: true,
			channels: 2,
		});

		soundWave.on('sound', function(volume){
			let volumePerL = (volume[0] * 100) + '%';
			let volumePerR = (volume[1] * 100) + '%';
			if(audioElement.ended){
				volumePerL = 0 + '%';
				volumePerR = 0 + '%';
			}
			$volumeLevelDisplayLeft.text(`Level: ${volumePerL}`);
			$volumeLevelDisplayLeft.css({width: volumePerL});
			$volumeLevelDisplayRight.text(`Level: ${volumePerR}`);
			$volumeLevelDisplayRight.css({width: volumePerR});
		});
	})();


	// --------------------------------------
	// マイクの音量を取得する
	navigator.mediaDevices.getUserMedia({ audio: true })
		.then((stream)=>{
			const $volumeLevelDisplay = $('#volume-indicator__user-media');
			const soundWave = new SoundWave(stream, {destination: true});
			soundWave.on('sound', function(volume){
				let volumePerL = (volume[0] * 100) + '%';
				$volumeLevelDisplay.text(`Level: ${volumePerL}`);
				$volumeLevelDisplay.css({width: volumePerL});
			});
		});

});
