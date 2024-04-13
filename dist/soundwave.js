(()=>{"use strict";var e,t={58:()=>{},79:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function n(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}function r(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function o(e,t){return e.get(a(e,t))}function i(e,t,n){return e.set(a(e,t),n),n}function a(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}var u=new WeakMap,s=new WeakMap,f=new WeakMap,c=new WeakMap,l=new WeakMap,v=function(){return e=function e(t,n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,u,null),r(this,s,null),r(this,f,{}),r(this,c,null),r(this,l,{sound:[]}),i(u,this,t),i(f,this,n||{}),i(s,this,o(u,a)instanceof HTMLElement?"element":o(u,a)instanceof MediaStream?"stream":null),i(c,this,new(window.AudioContext||window.webkitAudioContext));var v="element"==o(s,a)?(o(u,a).addEventListener("play",(function(){a.resume()})),o(c,a).createMediaElementSource(o(u,a))):"stream"==o(s,a)?o(c,a).createMediaStreamSource(o(u,a)):void 0,p=o(c,this).createAnalyser();p.fftSize=256,v.connect(p),o(f,this).destination&&p.connect(o(c,this).destination);var h=new Uint8Array(p.frequencyBinCount);!function e(){var t=function(){p.getByteFrequencyData(h);var e=h.reduce((function(e,t){return e+t}),0)/h.length;return 2*Number(e/255)}();o(l,a).sound.forEach((function(e){e(t)})),requestAnimationFrame(e)}()},(n=[{key:"on",value:function(e,t){o(l,this)[e].push(t)}},{key:"off",value:function(e){o(l,this)[e]=[]}},{key:"resume",value:function(){o(c,this).resume()}}])&&t(e.prototype,n),a&&t(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n,a}();window.SoundWave=v}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,o,i]=e[c],u=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(c--,1);var f=o();void 0!==f&&(t=f)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={549:0,762:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,u,s]=n,f=0;if(a.some((t=>0!==e[t]))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(s)var c=s(r)}for(t&&t(n);f<a.length;f++)i=a[f],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},n=self.webpackChunk_tomk79_soundwave=self.webpackChunk_tomk79_soundwave||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.O(void 0,[762],(()=>r(79)));var o=r.O(void 0,[762],(()=>r(58)));o=r.O(o)})();