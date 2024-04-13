document.addEventListener('DOMContentLoaded', function() {

	// --------------------------------------
	// 音声ファイルの音量を取得する
	(() => {
		const audioElement = new Audio();

		const volumeLevelDisplay = $('#volume-indicator__audio-element');
		const soundWave = new window.SoundWave(audioElement, {destination: true});

		soundWave.on('sound', function(volume){
			let volumePer = (volume * 100) + '%';
			if(audioElement.ended){
				volumePer = 0 + '%';
			}
			volumeLevelDisplay.text(`Level: ${volumePer}`);
			volumeLevelDisplay.css({width: volumePer});
		});

		audioElement.src = "./sounds/sample.m4a";
		audioElement.controls = true;
		$('#audio-container').append(audioElement);
	})();


	// --------------------------------------
	// マイクの音量を取得する
	navigator.mediaDevices.getUserMedia({ audio: true })
		.then((stream)=>{
			const volumeLevelDisplay = $('#volume-indicator__user-media');
			const soundWave = new window.SoundWave(stream, {destination: true});
			soundWave.on('sound', function(volume){
				let volumePer = (volume * 100) + '%';
				volumeLevelDisplay.text(`Level: ${volumePer}`);
				volumeLevelDisplay.css({width: volumePer});
			});
		});

});
