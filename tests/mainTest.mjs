import assert from 'assert';
import SoundWave from '../src/main.mjs';

describe('SoundWave', function() {

	it('Initialize', function(done) {
		this.timeout(10000);

		var soundwave = new SoundWave();
		console.log(soundwave);

		assert.equal(1, 1);
		done();
	});

});
