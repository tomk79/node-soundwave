# @tomk79/soundwave

## Demo

https://tomk79.github.io/node-soundwave/demo/

## Install

```bash
$ npm install --save @tomk79/soundwave
```

## Usage

```html
<script src="path/to/soundwave/dist/soundwave.js"></script>

<audio src="path/to/sound.mp3" controls id="audio-element"></audio>
<script>
const soundWave = new SoundWave(
    document.getElementById("audio-element"), {
        destination: true, // 音声を出力するか
        channels: 2, // オーディオのチャンネル数
    });
soundWave.on('sound', function(volume){
    console.log(volume[0]);
});
</script>
```


## Change log

### @tomk79/soundwave@0.1.0 (リリース日未定)

- initial release.


## License

MIT License.


## Author

Tomoya Koyanagi (@tomk79)
