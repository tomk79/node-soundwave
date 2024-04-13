const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
	.webpackConfig({
		module: {
			rules:[
				{
					test: /\.txt$/i,
					use: ['raw-loader'],
				}
			]
		},
		resolve: {
			fallback: {
				"fs": false,
				"path": false,
				"crypto": false,
				"stream": false,
			}
		}
	})


	// --------------------------------------
	// soundwave.js
	.js('src/soundwave.mjs', 'dist/soundwave.js')

	// --------------------------------------
	// demo
	.js('tests/app/src/contents.js', 'docs/demo/index_files/contents.js')
	.sass('tests/app/src/contents.scss', 'docs/demo/index_files/contents.css')
	.copy('dist/soundwave.js', 'docs/demo/index_files/')
;
