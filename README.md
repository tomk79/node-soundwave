# @tomk79/soundwave

Capture the volume of audio data.

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
        destination: true, // Whether to output audio
        channels: 2, // Number of audio channels
    });
soundWave.on('sound', function(volume){
    console.log(volume[0]);
});
</script>
```


## Change log

### @tomk79/soundwave v0.1.0 (2024-04-14)

- Initial release.


## License

MIT License.


## Author

Tomoya Koyanagi (@tomk79)
