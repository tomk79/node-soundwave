(()=>{"use strict";var e,n={58:()=>{},79:()=>{function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,t(o.key),o)}}function t(n){var t=function(n,t){if("object"!=e(n)||!n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var o=r.call(n,t||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"==e(t)?t:t+""}function r(e,n,t){!function(e,n){if(n.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,n),n.set(e,t)}function o(e,n){return e.get(a(e,n))}function i(e,n,t){return e.set(a(e,n),t),t}function a(e,n,t){if("function"==typeof e?e===n:e.has(n))return arguments.length<3?n:t;throw new TypeError("Private element is not present on this object")}var u=new WeakMap,s=new WeakMap,c=new WeakMap,l=new WeakMap,f=new WeakMap,h=function(){return e=function e(n,t){var a=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,u,null),r(this,s,null),r(this,c,{}),r(this,l,null),r(this,f,{sound:[]}),i(u,this,n),(t=t||{}).destination=!!t.destination,t.channels=t.channels||1,i(c,this,t),i(s,this,o(u,a)instanceof HTMLElement?"element":o(u,a)instanceof MediaStream?"stream":null),i(l,this,new(window.AudioContext||window.webkitAudioContext));var h="element"==o(s,a)?(o(u,a).addEventListener("play",(function(){a.resume()})),o(l,a).createMediaElementSource(o(u,a))):"stream"==o(s,a)?o(l,a).createMediaStreamSource(o(u,a)):void 0,v=o(l,this).createChannelSplitter(o(c,this).channels),p=o(l,this).createChannelMerger(o(c,this).channels),m=[],y=[];h.connect(v);for(var d=0;d<o(c,this).channels;d++)m[d]=o(l,this).createAnalyser(),m[d].fftSize=256,y[d]=o(l,this).createStereoPanner(),y[d].connect(m[d]),y[d].pan.value=1==t.channels?0:0===d?-1:1,v.connect(y[d],d),y[d].connect(p,0,d);o(c,this).destination&&p.connect(o(l,this).destination);for(var b=[],w=0;w<o(c,this).channels;w++)b[w]=new Uint8Array(m[w].frequencyBinCount);var k=function(e,n){e.getByteFrequencyData(n);var t=n.reduce((function(e,n){return e+n}),0)/n.length,r=2*Number(t/255);return r>100&&(r=100),r};!function e(){for(var n=[],t=0;t<o(c,a).channels;t++)n[t]=k(m[t],b[t]);o(f,a).sound.forEach((function(e){e(n)})),requestAnimationFrame(e)}()},(t=[{key:"on",value:function(e,n){o(f,this)[e].push(n)}},{key:"off",value:function(e){o(f,this)[e]=[]}},{key:"resume",value:function(){o(l,this).resume()}}])&&n(e.prototype,t),a&&n(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,a}();window.SoundWave=h}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,e=[],r.O=(n,t,o,i)=>{if(!t){var a=1/0;for(l=0;l<e.length;l++){for(var[t,o,i]=e[l],u=!0,s=0;s<t.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](t[s])))?t.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[t,o,i]},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={549:0,974:0};r.O.j=n=>0===e[n];var n=(n,t)=>{var o,i,[a,u,s]=t,c=0;if(a.some((n=>0!==e[n]))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(s)var l=s(r)}for(n&&n(t);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},t=self.webpackChunk_tomk79_soundwave=self.webpackChunk_tomk79_soundwave||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),r.O(void 0,[974],(()=>r(79)));var o=r.O(void 0,[974],(()=>r(58)));o=r.O(o)})();