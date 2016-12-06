(function(){'use strict';var t="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function aa(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function da(){da=function(){};t.Symbol||(t.Symbol=ea)}var fa=0;function ea(a){return"jscomp_symbol_"+(a||"")+fa++}
function w(){da();var a=t.Symbol.iterator;a||(a=t.Symbol.iterator=t.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ca(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ga(this)}});w=function(){}}function ga(a){var b=0;return ha(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ha(a){w();a={next:a};a[t.Symbol.iterator]=function(){return this};return a}function y(a){w();var b=a[Symbol.iterator];return b?b.call(a):ga(a)}
function ia(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}function z(a,b){if(b){var c=t;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
z("Promise",function(a){function b(a){this.S=0;this.ca=void 0;this.R=[];var b=this.Z();try{a(b.resolve,b.reject)}catch(k){b.reject(k)}}function c(){this.w=null}if(a)return a;c.prototype.fa=function(a){null==this.w&&(this.w=[],this.ma());this.w.push(a)};c.prototype.ma=function(){var a=this;this.ga(function(){a.sa()})};var d=t.setTimeout;c.prototype.ga=function(a){d(a,0)};c.prototype.sa=function(){for(;this.w&&this.w.length;){var a=this.w;this.w=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];
try{c()}catch(l){this.na(l)}}}this.w=null};c.prototype.na=function(a){this.ga(function(){throw a;})};b.prototype.Z=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.Aa),reject:a(this.aa)}};b.prototype.Aa=function(a){if(a===this)this.aa(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.Ba(a);else{var c;a:switch(typeof a){case "object":c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.za(a):this.ja(a)}};
b.prototype.za=function(a){var b=void 0;try{b=a.then}catch(k){this.aa(k);return}"function"==typeof b?this.Ca(b,a):this.ja(a)};b.prototype.aa=function(a){this.la(2,a)};b.prototype.ja=function(a){this.la(1,a)};b.prototype.la=function(a,b){if(0!=this.S)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.S);this.S=a;this.ca=b;this.ta()};b.prototype.ta=function(){if(null!=this.R){for(var a=this.R,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.R=null}};var e=new c;b.prototype.Ba=
function(a){var b=this.Z();a.W(b.resolve,b.reject)};b.prototype.Ca=function(a,b){var c=this.Z();try{a.call(b,c.resolve,c.reject)}catch(l){c.reject(l)}};b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(p){f(p)}}:b}var e,f,g=new b(function(a,b){e=a;f=b});this.W(d(a,e),d(c,f));return g};b.prototype.catch=function(a){return this.then(void 0,a)};b.prototype.W=function(a,b){function c(){switch(d.S){case 1:a(d.ca);break;case 2:b(d.ca);break;default:throw Error("Unexpected state: "+
d.S);}}var d=this;null==this.R?e.fa(c):this.R.push(function(){e.fa(c)})};b.resolve=function(a){return a instanceof b?a:new b(function(b){b(a)})};b.reject=function(a){return new b(function(b,c){c(a)})};b.race=function(a){return new b(function(c,d){for(var e=y(a),f=e.next();!f.done;f=e.next())b.resolve(f.value).W(c,d)})};b.all=function(a){var c=y(a),d=c.next();return d.done?b.resolve([]):new b(function(a,e){function f(b){return function(c){g[b]=c;k--;0==k&&a(g)}}var g=[],k=0;do g.push(void 0),k++,b.resolve(d.value).W(f(g.length-
1),e),d=c.next();while(!d.done)})};b.$jscomp$new$AsyncExecutor=function(){return new c};return b});function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}z("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var f in e)A(e,f)&&(a[f]=e[f])}return a}});
z("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});
z("WeakMap",function(a){function b(a){this.O=(f+=Math.random()+1).toString();if(a){da();w();a=y(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}function c(a){A(a,e)||ca(a,e,{value:{}})}function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d.delete(b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(h){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!A(a,e))throw Error("WeakMap key fail: "+a);a[e][this.O]=b;return this};b.prototype.get=function(a){return A(a,e)?a[e][this.O]:void 0};b.prototype.has=function(a){return A(a,e)&&A(a[e],this.O)};b.prototype.delete=function(a){return A(a,e)&&A(a[e],this.O)?delete a[e][this.O]:!1};return b});
z("Map",function(a){function b(){var a={};return a.u=a.next=a.head=a}function c(a,b){var c=a.s;return ha(function(){if(c){for(;c.head!=a.s;)c=c.u;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}function d(a,b){var c;c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.N[c];if(d&&A(a.N,c))for(a=0;a<d.length;a++){var e=d[a];if(b!==b&&e.key!==e.key||b===e.key)return{id:c,list:d,index:a,g:e}}return{id:c,list:d,
index:-1,g:void 0}}function e(a){this.N={};this.s=b();this.size=0;if(a){a=y(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(y([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?
!1:!0}catch(q){return!1}}())return a;da();w();var f=new WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.N[c.id]=[]);c.g?c.g.value=b:(c.g={next:this.s,u:this.s.u,head:this.s,key:a,value:b},c.list.push(c.g),this.s.u.next=c.g,this.s.u=c.g,this.size++);return this};e.prototype.delete=function(a){a=d(this,a);return a.g&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.N[a.id],a.g.u.next=a.g.next,a.g.next.u=a.g.u,a.g.head=null,this.size--,!0):!1};e.prototype.clear=
function(){this.N={};this.s=this.s.u=b();this.size=0};e.prototype.has=function(a){return!!d(this,a).g};e.prototype.get=function(a){return(a=d(this,a).g)&&a.value};e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};e.prototype.keys=function(){return c(this,function(a){return a.key})};e.prototype.values=function(){return c(this,function(a){return a.value})};e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});z("String.prototype.repeat",function(a){return a?a:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var d="";a;)if(a&1&&(d+=b),a>>>=1)b+=b;return d}});var B=0;try{var ja=Object.defineProperty({},"passive",{get:function(){B|=1}});window.addEventListener("test",null,ja)}catch(a){}
"innerHTML"in SVGElement.prototype&&(B|=4);"key"in KeyboardEvent.prototype&&(B|=8);var ka=navigator?navigator.userAgent:"",C=0;!/iPad|iPhone|iPod/.test(ka)||"MSStream"in window||(C|="standalone"in navigator?3:1);-1<ka.indexOf("Android")&&(C|=4);function la(a){a=a.target||window;a.oa&&(a=a.oa);return 3===a.nodeType?a.parentNode:a}
function D(a,b,c){if(!c||B&4)a.innerHTML=b;else for(ma||(ma=document.createElement("div")),ma.innerHTML="<svg>"+b+"</svg>",b=ma.firstChild;b.firstChild;)a.appendChild(b.firstChild)}var ma;function na(){}var oa=0,pa=!1,qa=[],ra="__ivi"+Math.random();window.addEventListener("message",sa);function sa(a){if(a.source===window&&a.data===ra){pa=!1;a=qa;qa=[];for(var b=0;b<a.length;b++)a[b]();oa++}}function ta(a){pa||(pa=!0,window.postMessage(ra,"*"));qa.push(a)}var ua=!1,va=[],wa,xa=0;
if(!(C&2)){var za=new MutationObserver(ya);wa=document.createTextNode("");za.observe(wa,{characterData:!0})}function Aa(){ya();ta(na)}function ya(){for(;0<va.length;){var a=va;va=[];for(var b=0;b<a.length;b++)a[b]();oa++}ua=!1}var F=!0,G,Ba=[];function Ca(){var a=!G();if(F!==a)for(var b=0;b<Ba.length;b++)Ba[b](a)}
"undefined"!==typeof document.hidden?(G=function(){return document.hidden},document.addEventListener("visibilitychange",Ca)):"undefined"!==typeof document.webkitHidden?(G=function(){return document.webkitHidden},document.addEventListener("webkitvisibilitychange",Ca)):G=function(){return!0};F=!G();function Fa(){this.a=0;this.I=[];this.da=this.K=this.L=null}Fa.prototype.write=function(a){this.a|=2;null===this.L&&(this.L=[]);this.L.push(a)};
Fa.prototype.read=function(a){this.a|=4;null===this.K&&(this.K=[]);this.K.push(a)};var I=[];function J(a){return a.a&12?a.a&8?J(a.l.root):J(a.c):a.l}function K(a,b,c,d,e){this.a=a;this.m=b;this.h=null;this.j=c;this.D=d;this.o=this.B=null;this.c=e;this.U=this.l=null}K.prototype.key=function(a){null===a?this.a&=-257:(this.a|=256,this.h=a);return this};K.prototype.className=function(a){this.D=a;return this};K.prototype.style=function(a){this.B=a;return this};
K.prototype.children=function(a){if(Array.isArray(a)){this.a|=64;a:for(var b=0,c=0;c<a.length;c++){var d=a[c];if("object"===typeof d){if(null===d||Array.isArray(d)){d=a.slice(0,c);Ga(a,d,c,0,b);a=d;break a}d.a&256||(d.h=b++)}else d=L(d),d.h=b++,a[c]=d}}else null===a?this.a&=-81:"object"===typeof a?(this.a|=32,a.a&256||(a.h=0)):this.a|=16;this.c=a;return this};K.prototype.value=function(a){this.c=a;return this};K.prototype.checked=function(a){this.c=a;return this};
function L(a){return new K(1,null,null,null,a)}function Ga(a,b,c,d,e){for(;c<a.length;c++){var f=a[c];"object"===typeof f?Array.isArray(f)?e+=Ga(f,b,0,d+e,0)+1:null===f?e++:(f.a&256||(f.h=d+e++),b.push(f)):(f=L(f),f.h=d+e++,b.push(f))}return e}var Ha=!1,Ia=!1,Ja=new Fa,Ka=new Fa;function La(){Ha&&requestAnimationFrame(Ma)}function Na(){Ha||(Ha=!0,ua||(ua=!0,C&2?Promise.resolve().then(Aa):(xa^=1,wa.nodeValue=xa?"1":"0")),va.push(La))}
function Ma(){var a,b;Ha=!1;Ia=!0;var c=Ka;Ka=Ja;Ja=c;if(F)for(b=0;b<M.length;b++)M[b].b|=2;for(b=0;b<I.length;b++)(0,I[b])()&&(b===I.length?I.pop():I[b--]=I.pop());do{for(;c.a&4;)for(c.a&=-5,a=c.K,c.K=null,b=0;b<a.length;b++)a[b]();for(;c.a&3;){if(c.a&2)for(c.a&=-3,a=c.L,c.L=null,b=0;b<a.length;b++)a[b]();if(c.a&1)for(c.a&=-2,a=c.I,b=0;b<a.length;b++){var d=a[b];if(null!==d){a[b]=null;for(var e=0;e<d.length;e++)Oa(d[e],0)}}}if(F)for(b=0;b<M.length;b++)a=M[b],a.b&512?Oa(a,0):(a.b&=-1025,b===M.length?
M.pop():M[b--]=M.pop())}while(c.a&7);Ia=!1;if(F)for(b=0;b<N.length;b++)(0,N[b])()&&(b===N.length?N.pop():N[b--]=N.pop());for(;0!==(c.a&8);)for(c.a&=-9,a=c.da,c.da=null,b=0;b<a.length;b++)a[b]();(0<M.length||0<N.length)&&Na();oa++}function Pa(){Na();return Ka}Ba.push(function(a){a&&(0<M.length||0<N.length)&&Na()});function O(a,b,c){this.b=0;this.depth=c?c.depth+1:0;this.j=a;this.T=this.G=b;this.Y=this.root=null}O.prototype.H=function(){};O.prototype.ba=function(){};
t.Object.defineProperties(O.prototype,{context:{configurable:!0,enumerable:!0,get:function(){this.b|=32;return this.G}}});function Qa(a,b){this.data=a;this.from=b}Qa.prototype.get=function(a){var b=this,c;if("string"!==typeof a){for(var d=Object.keys(a),e=d.length;0<e&&b;){if(b.data)for(var f=0;f<d.length;f++){var g=d[f];if(g&&(c=b.data[g],void 0!==c)){a[g]=b.data[g];d[f]=null;e--;break}}b=b.from}return a}for(;b;){if(b.data&&(c=b.data[a],void 0!==c))return c;b=b.from}};var Ra=new Qa(void 0);
function Sa(a,b,c){c||(c="");b&4096?a.setAttribute("class",c):a.className=c}function Ta(a,b,c){var d,e,f;if(null===b){if(null!==c)for(f=a.style,d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e]}else if(null===c)for(f=a.style,d=Object.keys(b),a=0;a<d.length;a++)f[d[a]]="";else{f=a.style;var g=0;d=Object.keys(b);for(a=0;a<d.length;a++){e=d[a];var k=c[e];void 0!==k?(b[e]!==k&&(f[e]=k),g++):f[e]=""}d=Object.keys(c);for(a=0;g<d.length&&a<d.length;)e=d[a++],b.hasOwnProperty(e)||(f[e]=c[e],g++)}}
function P(a,b,c,d){if(void 0===d){if(!(b&4096)&&6<c.length)switch(c){case "acceptCharset":c="accept-charset";break;case "htmlFor":c="for"}a.removeAttribute(c)}else if(b&4096){if(5<c.length&&120===c.charCodeAt(0)&&(58===c.charCodeAt(3)||58===c.charCodeAt(5))){if(109===c.charCodeAt(1)&&108===c.charCodeAt(2)){a.setAttributeNS("http://www.w3.org/XML/1998/namespace",c,d);return}if(108===c.charCodeAt(1)&&105===c.charCodeAt(2)&&110===c.charCodeAt(3)&&107===c.charCodeAt(4)){a.setAttributeNS("http://www.w3.org/1999/xlink",
c,d);return}}a.setAttribute(c,d)}else 5<c.length&&45===c.charCodeAt(4)?a.setAttribute(c,d):a[c]=d}
function Ua(a,b,c,d){var e,f,g;if(null===c){if(null!==d)for(f=Object.keys(d),e=0;e<f.length;e++)g=f[e],P(a,b,g,d[g])}else if(null===d)for(f=Object.keys(c),e=0;e<f.length;e++)P(a,b,f[e]);else{var k=0;f=Object.keys(c);for(e=0;e<f.length;e++){g=f[e];var l=d[g];void 0===l?P(a,b,g):(c[g]!==l&&P(a,b,g,l),k++)}f=Object.keys(d);for(e=0;k<f.length&&e<f.length;)g=f[e++],c.hasOwnProperty(g)||(P(a,b,g,d[g]),k++)}}var Va=B&1?{capture:!0,passive:!0}:!0,Wa=B&1?{passive:!0}:!1;
function Xa(a){return a&2?a&1?Va:Wa:a&1?!0:!1}function Ya(a,b,c){var d,e,f;if(null===b){if(null!==c)for(e=Object.keys(c),d=0;d<e.length;d++)Za(c[e[d]].i)}else if(null===c)for(e=Object.keys(b),d=0;d<e.length;d++)$a(b[e[d]].i);else{var g=0;e=Object.keys(b);for(d=0;d<e.length;d++){f=e[d];var k=b[f];f=c[f];void 0!==f?(k!==f&&(Za(f.i),$a(k.i)),g++):$a(k.i)}e=Object.keys(c);for(d=0;g<e.length&&d<e.length;)f=e[d++],b.hasOwnProperty(f)||(Za(c[f].i),g++)}a._ev=null===c?void 0:c}
function Oa(a,b){var c=a.b;if(c&16&&(c&15||b&2)){var d=a.root;c&12&&(ab(a),b|=1);if(c&3||72===(c&72)||b&2){var c=a.Y,e=bb(a);Q(c,d,e,a.T,b,a);a.b&=-2064}else d&&R(a.Y,d,a.T,b,a)}}function cb(a,b,c,d,e,f){var g;g=c.m;b!==c?(b=b.c,g=c.c=g(c.j,d)||L(""),g=Q(a,b,g,d,e,f)):(c.c=b.c,g=b.l,e&1&&R(a,c.c,d,e,f));return c.l=g}function S(a){var b=a.a;if(b&12)b&8?(b=a.l,b.b|=16,S(b.root)):S(a.c);else if(!(b&2560)&&(a=a.c,null!==a&&b&96))if(b&64)for(b=0;b<a.length;b++)S(a[b]);else S(a)}
function T(a){var b=a.a;if(b&12)if(b&8){var c=a.l;T(c.root);c.b&=-529}else T(a.c);else if(b&2){if(!(b&2560)&&(c=a.c,null!==c&&b&96))if(b&64)for(b=0;b<c.length;b++)T(c[b]);else T(c);if(a.o)for(var c=a.o,b=Object.keys(c),d=0;d<b.length;d++)$a(c[b[d]].i)}a.U&&a.U(null)}function db(a){for(var b=0;b<a.length;b++)T(a[b])}
function R(a,b,c,d,e){var f=b.a;if(f&12)f&8?(a=b.l,a.G!==c&&(a.b|=8,a.G=c),Oa(a,d)):2>b.m.length?R(a,b.c,c,d,e):cb(a,b.c,b.c,c,d,e);else if(!(f&2560)&&(b=b.c,null!==b&&f&96))if(f&64)for(f=0;f<b.length;f++)R(a,b[f],c,d,e);else R(a,b,c,d,e)}function U(a,b){a.removeChild(J(b));T(b)}function ab(a){a.b&=-385;a.b|=(a.b&128)<<1;a.T=a.G}function bb(a){a.b&=-97;var b=a.root=a.ba()||L("");a.b|=(a.b&32)<<1;return b}
function V(a,b,c,d){var e=b.a,f,g,k;if(e&3)if(e&1)f=document.createTextNode(b.c);else{if(e&8192?f=b.m.createElement():e&512?e&1024?f=document.createElement("textarea"):(f=document.createElement("input"),f.type=b.m):f=e&4096?document.createElementNS("http://www.w3.org/2000/svg",b.m):document.createElement(b.m),b.j&&Ua(f,e,null,b.j),null!==b.D&&Sa(f,e,b.D),null!==b.B&&Ta(f,null,b.B),b.o&&Ya(f,null,b.o),a=b.c,null!==a)if(e&80)if(e&16)f.textContent=a;else for(g=0;g<a.length;g++)k=a[g],e=V(f,k,c,d),f.insertBefore(k.a&
8?J(e.root):e,null);else e&32?(k=a,e=V(f,k,c,d),f.insertBefore(k.a&8?J(e.root):e,null)):e&512?(c=f,"string"===typeof a?c.value=a:c.checked=a):D(f,a,!!(e&4096))}else e&8?(c=f=new b.m(b.j,c,d),c.Y=a,ab(c),d=bb(c),V(a,d,c.T,c)):(f=b.c=(0,b.m)(b.j,c)||L(""),f=V(a,f,c,d));b.l=f;b.U&&b.U(f);return f}function W(a,b,c,d,e){d=V(a,c,d,e);a.insertBefore(J(c),b);S(c);return d}function eb(a,b){return a.h===b.h&&(a.a&256)===(b.a&256)}
function Q(a,b,c,d,e,f){if((b.a&32527)===(c.a&32527)&&b.m===c.m&&b.h===c.h){var g=b.a,k=c.l=b.l;if(g&3)if(g&1)b.c!==c.c&&(k.nodeValue=c.c);else{if(b.j!==c.j&&Ua(k,g,b.j,c.j),b.D!==c.D&&Sa(k,g,c.D),b.B!==c.B&&Ta(k,b.B,c.B),b.o!==c.o&&Ya(k,b.o,c.o),b.c!==c.c){a=k;var l=b.a,h=c.a,g=b.c;c=c.c;if(null===g)if(h&80)if(h&16)a.textContent=c;else for(e=0;e<c.length;e++)W(a,null,c[e],d,f);else h&32?W(a,null,c,d,f):h&512?"string"===typeof c?a.value=c:a.checked=c:D(a,c,!!(h&4096));else if(null===c)l&144?a.textContent=
"":l&64?(a.textContent="",db(g)):l&32&&U(a,g);else if(l&144)if(h&144)h&16?(d=a.firstChild)?d.nodeValue=c:a.textContent=c:D(a,c,!!(h&4096));else if(a.textContent="",h&64)for(e=0;e<c.length;e++)W(a,null,c[e],d,f);else W(a,null,c,d,f);else if(l&64)if(h&144)h&16?a.textContent=c:D(a,c,!!(h&4096)),db(g);else if(h&64)if(0===g.length)for(e=0;e<c.length;e++)W(a,null,c[e],d,f);else if(0===c.length)a.textContent="",db(g);else if(1===g.length&&1===c.length)Q(a,g[0],c[0],d,e,f);else{var n=0;b=0;var q=g.length-
1,u=c.length-1,h=g[n],l=c[b],m=g[q],p=c[u],r,ba;a:for(;;){for(;eb(h,l);){Q(a,h,l,d,e,f);n++;b++;if(n>q||b>u)break a;h=g[n];l=c[b]}for(;eb(m,p);){Q(a,m,p,d,e,f);q--;u--;if(n>q||b>u)break a;m=g[q];p=c[u]}if(eb(m,l))Q(a,m,l,d,e,f),a.insertBefore(J(l),J(h)),q--,b++,m=g[q],l=c[b];else if(eb(h,p))Q(a,h,p,d,e,f),h=u+1,h=h<c.length?J(c[h]):null,a.insertBefore(J(p),h),n++,u--,h=g[n],p=c[u];else break}if(n>q)for(h=u+1,h=h<c.length?J(c[h]):null;b<=u;)W(a,h,c[b++],d,f);else if(b>u)for(;n<=q;)U(a,g[n++]);else{var Da=
q-n+1,h=u-b+1,l=Array(h).fill(-1),Ea=!1,x=0,H=0;if(4>=h||16>=Da*h)for(m=n;m<=q;m++){if(r=g[m],H<h)for(p=b;p<=u;p++)if(ba=c[p],eb(r,ba)){l[p-b]=m;x>p?Ea=!0:x=p;Q(a,r,ba,d,e,f);H++;g[m]=null;break}}else{for(var E,v,m=b;m<=u;m++)r=c[m],r.a&256?(void 0===E&&(E=new Map),E.set(r.h,m)):(void 0===v&&(v=new Map),v.set(r.h,m));for(m=n;m<=q;m++)r=g[m],H<h&&(p=void 0!==E&&r.a&256?E.get(r.h):void 0!==v?v.get(r.h):void 0,void 0!==p&&(ba=c[p],l[p-b]=m,x>p?Ea=!0:x=p,Q(a,r,ba,d,e,f),H++,g[m]=null))}if(Da===g.length&&
0===H)for(a.textContent="",db(g);b<h;)W(a,null,c[b++],d,f);else{for(m=Da-H;0<m;)r=g[n++],null!==r&&(U(a,r),m--);if(Ea){E=l.slice(0);e=[];e.push(0);v=0;for(g=l.length;v<g;v++)if(-1!==l[v])if(n=e[e.length-1],l[n]<l[v])E[v]=n,e.push(v);else{n=0;for(q=e.length-1;n<q;)u=(n+q)/2|0,l[e[u]]<l[v]?n=u+1:q=u;l[v]<l[e[n]]&&(0<n&&(E[v]=e[n-1]),e[n]=v)}n=e.length;for(q=e[n-1];0<n--;)e[n]=q,q=E[q];p=e.length-1;for(m=h-1;0<=m;m--)-1===l[m]?(x=m+b,r=c[x],h=x+1,h=h<c.length?J(c[h]):null,W(a,h,r,d,f)):0>p||m!==e[p]?
(x=m+b,r=c[x],h=x+1,h=h<c.length?J(c[h]):null,a.insertBefore(J(r),h)):p--}else if(H!==h)for(m=h-1;0<=m;m--)-1===l[m]&&(x=m+b,r=c[x],h=x+1,h=h<c.length?J(c[h]):null,W(a,h,r,d,f))}}}else if(0<g.length)for(Q(a,g[0],c,d,e,f),e=1;e<g.length;e++)U(a,g[e]);else W(a,null,c,d,f);else if(l&32)if(h&144)h&16?a.textContent=c:D(a,c,!!(h&4096)),T(g);else if(h&64)if(0<c.length)for(Q(a,g,c[0],d,e,f),e=1;e<c.length;e++)W(a,null,c[e],d,f);else U(a,g);else Q(a,g,c,d,e,f);else"string"===typeof c?a.value!==c&&(a.value=
c):a.checked=c}}else g&8?(f=k,a=c.j,f.b|=1,f.j=a,f.b&256&&(f.b|=4),f.G!==d&&(f.b|=8,f.G=d),Oa(f,e)):k=c.l=cb(a,b,c,d,e,f);return k}k=V(a,c,d,f);a.replaceChild(c.a&8?J(k.root):k,J(b));T(b);S(c);return k}var N=[],M=[];function fb(a,b,c,d){this.v=this.J=null;this.i=a;this.b=b;this.va=c;this.filter=d}fb.prototype.cancel=function(){this.b&1||(this.b|=1,this.b&2||gb(this))};function gb(a){a.J?a.J.v=a.v:a.i.A=a.v;a.v&&(a.v.J=a.J);0===--a.i.C&&a.i.X()}function X(){this.C=0;this.A=null}X.prototype.V=function(){};
X.prototype.X=function(){};X.prototype.subscribe=function(a,b,c){a=new fb(this,void 0===c?0:c,a,b);this.A&&(this.A.J=a,a.v=this.A);this.A=a;0===this.C++&&this.V();return a};function Za(a){0===a.C++&&a.V()}function $a(a){0===--a.C&&a.X()}function hb(a,b,c){b.currentTarget=a.target;for(var d=0;d<a.ka.length;d++){var e=a.ka[d];if(e.b&c&&(e.ua(b),b.a&2))break}}function ib(a,b,c){X.call(this);this.b=a;this.name=b;this.ia=c;this.ea=this.qa.bind(this);this.F=!1}aa(ib,X);
ib.prototype.qa=function(a){var b;if(this.A)for(var c=b=new this.ia(this,0,a,la(a),a.timeStamp,a.type),d=this.A;d;)if(d.b|=2,d.va(c,void 0),d.b&=-3,d.b&1){var e=d,d=d.v;gb(e)}else d=d.v;if(!(b&&b.a&3)){d=la(a);for(c=[];d;){var e=d,f=e._ev;if(f){for(var g=void 0,k=Object.keys(f),l=0;l<k.length;l++){var h=f[k[l]];h.i===this&&(g?g.push(h):g=[h])}g&&c.push({target:e,ka:g})}d=d.parentElement}if(0<c.length)a:{b||(b=new this.ia(this,0,a,la(a),a.timeStamp,a.type)),d=b;e=!!(this.b&4);for(f=c.length-1;0<=f;)if(g=
c[f],g.target!==d.target){if(hb(c[f--],d,1),d.a&1)break a}else break;g=c[0];if(g.target===d.target){d.a|=64;hb(g,d,3);if(d.a&1)break a;d.a&=-65;f=1}else f=0;if(e)for(d.a|=128;f<c.length&&!(hb(c[f++],d,2),d.a&1););}b&&b.a&4&&a.preventDefault()}};ib.prototype.V=function(){this.F?this.F=!1:(X.prototype.V.call(this),document.addEventListener(this.name,this.ea,Xa(this.b)))};
ib.prototype.X=function(){var a=this;this.F||(this.F=!0,ta(function(){a.F&&(document.removeEventListener(a.name,a.ea,Xa(a.b)),X.prototype.X.call(a),a.F=!1)}))};function Y(a,b,c,d,e,f){this.i=a;this.a=b;this.f=c;this.currentTarget=this.target=d;this.timeStamp=e;this.type=f}Y.prototype.stopPropagation=function(){this.a|=1};Y.prototype.stopImmediatePropagation=function(){this.a|=3};Y.prototype.preventDefault=function(){this.a|=4};
t.Object.defineProperties(Y.prototype,{defaultPrevented:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&4)}},bubbles:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&8)}},cancelable:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&16)}},isTrusted:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&32)}},eventPhase:{configurable:!0,enumerable:!0,get:function(){return this.a&64?2:this.a&128?3:1}}});Y.prototype.CAPTURING_PHASE=1;
Y.prototype.AT_TARGET=2;Y.prototype.BUBBLING_PHASE=3;function jb(a){Y.apply(this,arguments)}aa(jb,Y);t.Object.defineProperties(jb.prototype,{detail:{configurable:!0,enumerable:!0,get:function(){return this.f.detail}},view:{configurable:!0,enumerable:!0,get:function(){return this.f.view}}});function kb(a){jb.apply(this,arguments)}aa(kb,jb);kb.prototype.getModifierState=function(a){return this.f.getModifierState(a)};
t.Object.defineProperties(kb.prototype,{altKey:{configurable:!0,enumerable:!0,get:function(){return this.f.altKey}},button:{configurable:!0,enumerable:!0,get:function(){return this.f.button}},buttons:{configurable:!0,enumerable:!0,get:function(){return this.f.buttons}},clientX:{configurable:!0,enumerable:!0,get:function(){return this.f.clientX}},clientY:{configurable:!0,enumerable:!0,get:function(){return this.f.clientY}},ctrlKey:{configurable:!0,enumerable:!0,get:function(){return this.f.ctrlKey}},
fromElement:{configurable:!0,enumerable:!0,get:function(){return this.f.fromElement}},layerX:{configurable:!0,enumerable:!0,get:function(){return this.f.layerX}},layerY:{configurable:!0,enumerable:!0,get:function(){return this.f.layerY}},metaKey:{configurable:!0,enumerable:!0,get:function(){return this.f.metaKey}},wa:{configurable:!0,enumerable:!0,get:function(){return this.f.wa}},xa:{configurable:!0,enumerable:!0,get:function(){return this.f.xa}},offsetX:{configurable:!0,enumerable:!0,get:function(){return this.f.offsetX}},
offsetY:{configurable:!0,enumerable:!0,get:function(){return this.f.offsetY}},pageX:{configurable:!0,enumerable:!0,get:function(){return this.f.pageX}},pageY:{configurable:!0,enumerable:!0,get:function(){return this.f.pageY}},relatedTarget:{configurable:!0,enumerable:!0,get:function(){return this.f.relatedTarget}},screenX:{configurable:!0,enumerable:!0,get:function(){return this.f.screenX}},screenY:{configurable:!0,enumerable:!0,get:function(){return this.f.screenY}},shiftKey:{configurable:!0,enumerable:!0,
get:function(){return this.f.shiftKey}},toElement:{configurable:!0,enumerable:!0,get:function(){return this.f.toElement}},which:{configurable:!0,enumerable:!0,get:function(){return this.f.which}},x:{configurable:!0,enumerable:!0,get:function(){return this.f.x}},y:{configurable:!0,enumerable:!0,get:function(){return this.f.y}}});var lb=new ib(5,"click",kb),Z=[];function mb(a){for(var b=0;b<Z.length;b++){var c=Z[b];if(c.M===a)return c}}
function nb(){var a=this;O.apply(this,[].concat(arguments instanceof Array?arguments:ia(y(arguments))));this.C=0;this.ya={i:lb,b:2,ua:function(){a.C++;if(a.b&16&&(a.b|=2,a.H(),!(a.b&2048))){var b=Ia?Ja:Pa();if(!(a.b&2048)){a.b|=2048;var c=a.depth;for(b.a|=1;c>=b.I.length;)b.I.push(null);var d=b.I[c];null===d?b.I[c]=[a]:d.push(a)}}}}}aa(nb,O);
nb.prototype.ba=function(){var a=new K(2,"div",null,null,null);a.o={click:this.ya};return a.style({display:"inline-block",border:"1px solid #333",padding:"20px",cursor:"pointer",userSelect:"none"}).children("Click me: "+this.C)};var ob=new K(nb.prototype.ba?8:4,nb,void 0,null,null),pb=void 0,pb=void 0===pb?Ra:pb;
(function(a,b,c,d){c=void 0===c?0:c;d=void 0===d?Ra:d;var e=mb(b);e?(e.$=a,e.P=d):(e={M:b,ha:null,pa:null,$:a,P:d,ra:null,H:!1,Da:c},Z.push(e));e.H||(e.H=!0,Pa().write(function(){if(e.H){var a=e,b=a.ha,c=a.$,d=a.P;c?(b?b=Q(a.M,b,c,a.P,0,void 0):(b=W(a.M,null,c,a.P,void 0),C&1&&(a.M.onclick=na)),a.ha=c,a.pa=d,a.ra=c.a&8?J(b.root):b):b&&(a.M.removeChild(J(b)),T(b),c=Z.pop(),c!==a&&Z.length&&(Z[Z.indexOf(a)]=c));a.$=null;a.P=null;a.H=!1;a.Da=0}}))})(ob,document.getElementById("app"),0,pb);Ma();}).call(this);

//# sourceMappingURL=bundle.js.map
