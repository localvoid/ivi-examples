(function(){'use strict';var n,r="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function aa(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ca(){ca=function(){};r.Symbol||(r.Symbol=da)}var fa=0;function da(a){return"jscomp_symbol_"+(a||"")+fa++}
function v(){ca();var a=r.Symbol.iterator;a||(a=r.Symbol.iterator=r.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ga(this)}});v=function(){}}function ga(a){var b=0;return ha(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ha(a){v();a={next:a};a[r.Symbol.iterator]=function(){return this};return a}function y(a){v();var b=a[Symbol.iterator];return b?b.call(a):ga(a)}
function ia(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}function z(a,b){if(b){var c=r;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
z("Promise",function(a){function b(a){this.V=0;this.ha=void 0;this.U=[];var b=this.ba();try{a(b.resolve,b.reject)}catch(k){b.reject(k)}}function c(){this.A=null}if(a)return a;c.prototype.ka=function(a){null==this.A&&(this.A=[],this.ya());this.A.push(a)};c.prototype.ya=function(){var a=this;this.la(function(){a.Ea()})};var d=r.setTimeout;c.prototype.la=function(a){d(a,0)};c.prototype.Ea=function(){for(;this.A&&this.A.length;){var a=this.A;this.A=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];
try{c()}catch(l){this.za(l)}}}this.A=null};c.prototype.za=function(a){this.la(function(){throw a;})};b.prototype.ba=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.Ka),reject:a(this.fa)}};b.prototype.Ka=function(a){if(a===this)this.fa(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.La(a);else{var c;a:switch(typeof a){case "object":c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.Ja(a):this.oa(a)}};
b.prototype.Ja=function(a){var b=void 0;try{b=a.then}catch(k){this.fa(k);return}"function"==typeof b?this.Ma(b,a):this.oa(a)};b.prototype.fa=function(a){this.qa(2,a)};b.prototype.oa=function(a){this.qa(1,a)};b.prototype.qa=function(a,b){if(0!=this.V)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.V);this.V=a;this.ha=b;this.Fa()};b.prototype.Fa=function(){if(null!=this.U){for(var a=this.U,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.U=null}};var e=new c;b.prototype.La=
function(a){var b=this.ba();a.Y(b.resolve,b.reject)};b.prototype.Ma=function(a,b){var c=this.ba();try{a.call(b,c.resolve,c.reject)}catch(l){c.reject(l)}};b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(q){f(q)}}:b}var e,f,g=new b(function(a,b){e=a;f=b});this.Y(d(a,e),d(c,f));return g};b.prototype.catch=function(a){return this.then(void 0,a)};b.prototype.Y=function(a,b){function c(){switch(d.V){case 1:a(d.ha);break;case 2:b(d.ha);break;default:throw Error("Unexpected state: "+
d.V);}}var d=this;null==this.U?e.ka(c):this.U.push(function(){e.ka(c)})};b.resolve=function(a){return a instanceof b?a:new b(function(b){b(a)})};b.reject=function(a){return new b(function(b,c){c(a)})};b.race=function(a){return new b(function(c,d){for(var e=y(a),f=e.next();!f.done;f=e.next())b.resolve(f.value).Y(c,d)})};b.all=function(a){var c=y(a),d=c.next();return d.done?b.resolve([]):new b(function(a,e){function f(b){return function(c){g[b]=c;k--;0==k&&a(g)}}var g=[],k=0;do g.push(void 0),k++,b.resolve(d.value).Y(f(g.length-
1),e),d=c.next();while(!d.done)})};b.$jscomp$new$AsyncExecutor=function(){return new c};return b});function B(a,b){return Object.prototype.hasOwnProperty.call(a,b)}z("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var f in e)B(e,f)&&(a[f]=e[f])}return a}});
z("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});
z("WeakMap",function(a){function b(a){this.R=(f+=Math.random()+1).toString();if(a){ca();v();a=y(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}function c(a){B(a,e)||ba(a,e,{value:{}})}function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d.delete(b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(h){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!B(a,e))throw Error("WeakMap key fail: "+a);a[e][this.R]=b;return this};b.prototype.get=function(a){return B(a,e)?a[e][this.R]:void 0};b.prototype.has=function(a){return B(a,e)&&B(a[e],this.R)};b.prototype.delete=function(a){return B(a,e)&&B(a[e],this.R)?delete a[e][this.R]:!1};return b});
z("Map",function(a){function b(){var a={};return a.v=a.next=a.head=a}function c(a,b){var c=a.u;return ha(function(){if(c){for(;c.head!=a.u;)c=c.v;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}function d(a,b){var c;c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.P[c];if(d&&B(a.P,c))for(a=0;a<d.length;a++){var e=d[a];if(b!==b&&e.key!==e.key||b===e.key)return{id:c,list:d,index:a,g:e}}return{id:c,list:d,
index:-1,g:void 0}}function e(a){this.P={};this.u=b();this.size=0;if(a){a=y(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(y([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?
!1:!0}catch(t){return!1}}())return a;ca();v();var f=new WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.P[c.id]=[]);c.g?c.g.value=b:(c.g={next:this.u,v:this.u.v,head:this.u,key:a,value:b},c.list.push(c.g),this.u.v.next=c.g,this.u.v=c.g,this.size++);return this};e.prototype.delete=function(a){a=d(this,a);return a.g&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.P[a.id],a.g.v.next=a.g.next,a.g.next.v=a.g.v,a.g.head=null,this.size--,!0):!1};e.prototype.clear=
function(){this.P={};this.u=this.u.v=b();this.size=0};e.prototype.has=function(a){return!!d(this,a).g};e.prototype.get=function(a){return(a=d(this,a).g)&&a.value};e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};e.prototype.keys=function(){return c(this,function(a){return a.key})};e.prototype.values=function(){return c(this,function(a){return a.value})};e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});z("String.prototype.repeat",function(a){return a?a:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var d="";a;)if(a&1&&(d+=b),a>>>=1)b+=b;return d}});var C=0;try{var ja=Object.defineProperty({},"passive",{get:function(){C|=1}});window.addEventListener("test",null,ja)}catch(a){}
"innerHTML"in SVGElement.prototype&&(C|=4);"key"in KeyboardEvent.prototype&&(C|=8);var ka=navigator?navigator.userAgent:"",D=0;!/iPad|iPhone|iPod/.test(ka)||"MSStream"in window||(D|="standalone"in navigator?3:1);-1<ka.indexOf("Android")&&(D|=4);function la(a){a=a.target||window;a.Aa&&(a=a.Aa);return 3===a.nodeType?a.parentNode:a}
var E={},ma=(E[8]="Backspace",E[9]="Tab",E[12]="Clear",E[13]="Enter",E[16]="Shift",E[17]="Control",E[18]="Alt",E[19]="Pause",E[20]="CapsLock",E[27]="Escape",E[32]=" ",E[33]="PageUp",E[34]="PageDown",E[35]="End",E[36]="Home",E[37]="ArrowLeft",E[38]="ArrowUp",E[39]="ArrowRight",E[40]="ArrowDown",E[44]="PrintScreen",E[45]="Insert",E[46]="Delete",E[91]="Meta",E[112]="F1",E[113]="F2",E[114]="F3",E[115]="F4",E[116]="F5",E[117]="F6",E[118]="F7",E[119]="F8",E[120]="F9",E[121]="F10",E[122]="F11",E[123]="F12",
E[144]="NumLock",E[145]="ScrollLock",E[224]="Win",E);function na(a){var b=a.keyCode;a=a.charCode;0===a&&13===b&&(a=13);return 32<=a||13===a?a:0}function G(a,b,c){if(!c||C&4)a.innerHTML=b;else for(oa||(oa=document.createElement("div")),oa.innerHTML="<svg>"+b+"</svg>",b=oa.firstChild;b.firstChild;)a.appendChild(b.firstChild)}var oa;function pa(){}var qa=0,ra=!1,sa=[],ta="__ivi"+Math.random();window.addEventListener("message",ua);
function ua(a){if(a.source===window&&a.data===ta){ra=!1;a=sa;sa=[];for(var b=0;b<a.length;b++)a[b]();qa++}}function va(a){ra||(ra=!0,window.postMessage(ta,"*"));sa.push(a)}var wa=!1,xa=[],ya,za=0;if(!(D&2)){var Ba=new MutationObserver(Aa);ya=document.createTextNode("");Ba.observe(ya,{characterData:!0})}function Ca(){Aa();va(pa)}function Aa(){for(;0<xa.length;){var a=xa;xa=[];for(var b=0;b<a.length;b++)a[b]();qa++}wa=!1}var H=!0,I,Da=[];
function Ea(){var a=!I();if(H!==a)for(var b=0;b<Da.length;b++)Da[b](a)}"undefined"!==typeof document.hidden?(I=function(){return document.hidden},document.addEventListener("visibilitychange",Ea)):"undefined"!==typeof document.webkitHidden?(I=function(){return document.webkitHidden},document.addEventListener("webkitvisibilitychange",Ea)):I=function(){return!0};H=!I();function Fa(){this.a=0;this.xa=[];this.ia=this.L=this.N=null}Fa.prototype.write=function(a){this.a|=2;null===this.N&&(this.N=[]);this.N.push(a)};
Fa.prototype.read=function(a){this.a|=4;null===this.L&&(this.L=[]);this.L.push(a)};var K=[];function L(a){return a.a&12?a.a&8?L(a.m.root):L(a.c):a.m}function Ia(a,b,c,d,e){this.a=a;this.o=b;this.h=null;this.i=c;this.G=d;this.s=this.F=null;this.c=e;this.M=this.m=null}n=Ia.prototype;n.key=function(a){null===a?this.a&=-257:(this.a|=256,this.h=a);return this};n.className=function(a){this.G=a;return this};n.style=function(a){this.F=a;return this};function Ja(a,b){a.s=b;return a}
n.C=function(a){this.i=a;return this};n.children=function(a){if(Array.isArray(a)){this.a|=64;a:for(var b=0,c=0;c<a.length;c++){var d=a[c];if("object"===typeof d){if(null===d||Array.isArray(d)){d=a.slice(0,c);Ka(a,d,c,0,b);a=d;break a}d.a&256||(d.h=b++)}else d=M(d),d.h=b++,a[c]=d}}else null===a?this.a&=-81:"object"===typeof a?(this.a|=32,a.a&256||(a.h=0)):this.a|=16;this.c=a;return this};n.value=function(a){this.c=a;return this};n.checked=function(a){this.c=a;return this};
function La(a,b){a.M=b;return a}function M(a){return new Ia(1,null,null,null,a)}function Ma(a){return new Ia(2,"div",null,void 0===a?null:a,null)}function Ka(a,b,c,d,e){for(;c<a.length;c++){var f=a[c];"object"===typeof f?Array.isArray(f)?e+=Ka(f,b,0,d+e,0)+1:null===f?e++:(f.a&256||(f.h=d+e++),b.push(f)):(f=M(f),f.h=d+e++,b.push(f))}return e}var Na=!1,Oa=new Fa,Pa=new Fa;function Qa(){Na&&requestAnimationFrame(Ra)}
function Sa(){Na||(Na=!0,wa||(wa=!0,D&2?Promise.resolve().then(Ca):(za^=1,ya.nodeValue=za?"1":"0")),xa.push(Qa))}
function Ra(){var a,b;Na=!1;var c=Pa;Pa=Oa;Oa=c;if(H)for(b=0;b<N.length;b++)N[b].b|=2;for(b=0;b<K.length;b++)(0,K[b])()&&(b===K.length?K.pop():K[b--]=K.pop());do{for(;c.a&4;)for(c.a&=-5,a=c.L,c.L=null,b=0;b<a.length;b++)a[b]();for(;c.a&3;){if(c.a&2)for(c.a&=-3,a=c.N,c.N=null,b=0;b<a.length;b++)a[b]();if(c.a&1)for(c.a&=-2,a=c.xa,b=0;b<a.length;b++){var d=a[b];if(null!==d){a[b]=null;for(var e=0;e<d.length;e++)Ta(d[e],0)}}}if(H)for(b=0;b<N.length;b++)a=N[b],a.b&512?Ta(a,0):(a.b&=-1025,b===N.length?N.pop():
N[b--]=N.pop())}while(c.a&7);if(H)for(b=0;b<O.length;b++)(0,O[b])()&&(b===O.length?O.pop():O[b--]=O.pop());for(;0!==(c.a&8);)for(c.a&=-9,a=c.ia,c.ia=null,b=0;b<a.length;b++)a[b]();(0<N.length||0<O.length)&&Sa();qa++}Da.push(function(a){a&&(0<N.length||0<O.length)&&Sa()});function P(a,b,c){this.b=0;this.depth=c?c.depth+1:0;this.i=a;this.W=this.I=b;this.aa=this.root=null}P.prototype.S=function(){};P.prototype.ga=function(){};
r.Object.defineProperties(P.prototype,{context:{configurable:!0,enumerable:!0,get:function(){this.b|=32;return this.I}},C:{configurable:!0,enumerable:!0,get:function(){this.b|=128;return this.i}}});function Ua(a,b){this.data=a;this.from=b}
Ua.prototype.get=function(a){var b=this,c;if("string"!==typeof a){for(var d=Object.keys(a),e=d.length;0<e&&b;){if(b.data)for(var f=0;f<d.length;f++){var g=d[f];if(g&&(c=b.data[g],void 0!==c)){a[g]=b.data[g];d[f]=null;e--;break}}b=b.from}return a}for(;b;){if(b.data&&(c=b.data[a],void 0!==c))return c;b=b.from}};var Va=new Ua(void 0);function Wa(a,b,c){c||(c="");b&4096?a.setAttribute("class",c):a.className=c}
function Xa(a,b,c){var d,e,f;if(null===b){if(null!==c)for(f=a.style,d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e]}else if(null===c)for(f=a.style,d=Object.keys(b),a=0;a<d.length;a++)f[d[a]]="";else{f=a.style;var g=0;d=Object.keys(b);for(a=0;a<d.length;a++){e=d[a];var k=c[e];void 0!==k?(b[e]!==k&&(f[e]=k),g++):f[e]=""}d=Object.keys(c);for(a=0;g<d.length&&a<d.length;)e=d[a++],b.hasOwnProperty(e)||(f[e]=c[e],g++)}}
function Ya(a,b,c,d){if(void 0===d){if(!(b&4096)&&6<c.length)switch(c){case "acceptCharset":c="accept-charset";break;case "htmlFor":c="for"}a.removeAttribute(c)}else if(b&4096){if(5<c.length&&120===c.charCodeAt(0)&&(58===c.charCodeAt(3)||58===c.charCodeAt(5))){if(109===c.charCodeAt(1)&&108===c.charCodeAt(2)){a.setAttributeNS("http://www.w3.org/XML/1998/namespace",c,d);return}if(108===c.charCodeAt(1)&&105===c.charCodeAt(2)&&110===c.charCodeAt(3)&&107===c.charCodeAt(4)){a.setAttributeNS("http://www.w3.org/1999/xlink",
c,d);return}}a.setAttribute(c,d)}else 5<c.length&&45===c.charCodeAt(4)?a.setAttribute(c,d):a[c]=d}
function Za(a,b,c,d){var e,f,g;if(null===c){if(null!==d)for(f=Object.keys(d),e=0;e<f.length;e++)g=f[e],Ya(a,b,g,d[g])}else if(null===d)for(f=Object.keys(c),e=0;e<f.length;e++)Ya(a,b,f[e]);else{var k=0;f=Object.keys(c);for(e=0;e<f.length;e++){g=f[e];var l=d[g];void 0===l?Ya(a,b,g):(c[g]!==l&&Ya(a,b,g,l),k++)}f=Object.keys(d);for(e=0;k<f.length&&e<f.length;)g=f[e++],c.hasOwnProperty(g)||(Ya(a,b,g,d[g]),k++)}}var $a=C&1?{capture:!0,passive:!0}:!0,ab=C&1?{passive:!0}:!1;
function bb(a){return a&2?a&1?$a:ab:a&1?!0:!1}function cb(a,b,c){var d,e,f;if(null===b){if(null!==c)for(e=Object.keys(c),d=0;d<e.length;d++)db(c[e[d]].j)}else if(null===c)for(e=Object.keys(b),d=0;d<e.length;d++)eb(b[e[d]].j);else{var g=0;e=Object.keys(b);for(d=0;d<e.length;d++){f=e[d];var k=b[f];f=c[f];void 0!==f?(k!==f&&(db(f.j),eb(k.j)),g++):eb(k.j)}e=Object.keys(c);for(d=0;g<e.length&&d<e.length;)f=e[d++],b.hasOwnProperty(f)||(db(c[f].j),g++)}a._ev=null===c?void 0:c}
function Ta(a,b){var c=a.b;if(c&16&&(c&15||b&2)){var d=a.root;c&12&&(fb(a),b|=1);if(c&3||72===(c&72)||b&2){var c=a.aa,e=gb(a);Q(c,d,e,a.W,b,a);a.b&=-2064}else d&&hb(a.aa,d,a.W,b,a)}}function ib(a,b,c,d,e,f){var g;g=c.o;b!==c?(b=b.c,g=c.c=g(c.i,d)||M(""),g=Q(a,b,g,d,e,f)):(c.c=b.c,g=b.m,e&1&&hb(a,c.c,d,e,f));return c.m=g}function R(a){var b=a.a;if(b&12)b&8?(b=a.m,b.b|=16,R(b.root)):R(a.c);else if(!(b&2560)&&(a=a.c,null!==a&&b&96))if(b&64)for(b=0;b<a.length;b++)R(a[b]);else R(a)}
function S(a){var b=a.a;if(b&12)if(b&8){var c=a.m;S(c.root);c.b&=-529}else S(a.c);else if(b&2){if(!(b&2560)&&(c=a.c,null!==c&&b&96))if(b&64)for(b=0;b<c.length;b++)S(c[b]);else S(c);if(a.s)for(var c=a.s,b=Object.keys(c),d=0;d<b.length;d++)eb(c[b[d]].j)}a.M&&a.M(null)}function jb(a){for(var b=0;b<a.length;b++)S(a[b])}
function hb(a,b,c,d,e){var f=b.a;if(f&12)f&8?(a=b.m,a.I!==c&&(a.b|=8,a.I=c),Ta(a,d)):2>b.o.length?hb(a,b.c,c,d,e):ib(a,b.c,b.c,c,d,e);else if(!(f&2560)&&(b=b.c,null!==b&&f&96))if(f&64)for(f=0;f<b.length;f++)hb(a,b[f],c,d,e);else hb(a,b,c,d,e)}function kb(a,b){a.removeChild(L(b));S(b)}function fb(a){a.b&=-385;a.b|=(a.b&128)<<1;a.W=a.I}function gb(a){a.b&=-97;var b=a.root=a.ga()||M("");a.b|=(a.b&32)<<1;return b}
function T(a,b,c,d){var e=b.a,f,g,k;if(e&3)if(e&1)f=document.createTextNode(b.c);else{if(e&8192?f=b.o.createElement():e&512?e&1024?f=document.createElement("textarea"):(f=document.createElement("input"),f.type=b.o):f=e&4096?document.createElementNS("http://www.w3.org/2000/svg",b.o):document.createElement(b.o),b.i&&Za(f,e,null,b.i),null!==b.G&&Wa(f,e,b.G),null!==b.F&&Xa(f,null,b.F),b.s&&cb(f,null,b.s),a=b.c,null!==a)if(e&80)if(e&16)f.textContent=a;else for(g=0;g<a.length;g++)k=a[g],e=T(f,k,c,d),f.insertBefore(k.a&
8?L(e.root):e,null);else e&32?(k=a,e=T(f,k,c,d),f.insertBefore(k.a&8?L(e.root):e,null)):e&512?(c=f,"string"===typeof a?c.value=a:c.checked=a):G(f,a,!!(e&4096))}else e&8?(c=f=new b.o(b.i,c,d),c.aa=a,fb(c),d=gb(c),T(a,d,c.W,c)):(f=b.c=(0,b.o)(b.i,c)||M(""),f=T(a,f,c,d));b.m=f;b.M&&b.M(f);return f}function U(a,b,c,d,e){d=T(a,c,d,e);a.insertBefore(L(c),b);R(c);return d}function lb(a,b){return a.h===b.h&&(a.a&256)===(b.a&256)}
function Q(a,b,c,d,e,f){if((b.a&32527)===(c.a&32527)&&b.o===c.o&&b.h===c.h){var g=b.a,k=c.m=b.m;if(g&3)if(g&1)b.c!==c.c&&(k.nodeValue=c.c);else{if(b.i!==c.i&&Za(k,g,b.i,c.i),b.G!==c.G&&Wa(k,g,c.G),b.F!==c.F&&Xa(k,b.F,c.F),b.s!==c.s&&cb(k,b.s,c.s),b.c!==c.c){a=k;var l=b.a,h=c.a,g=b.c;c=c.c;if(null===g)if(h&80)if(h&16)a.textContent=c;else for(e=0;e<c.length;e++)U(a,null,c[e],d,f);else h&32?U(a,null,c,d,f):h&512?"string"===typeof c?a.value=c:a.checked=c:G(a,c,!!(h&4096));else if(null===c)l&144?a.textContent=
"":l&64?(a.textContent="",jb(g)):l&32&&kb(a,g);else if(l&144)if(h&144)h&16?(d=a.firstChild)?d.nodeValue=c:a.textContent=c:G(a,c,!!(h&4096));else if(a.textContent="",h&64)for(e=0;e<c.length;e++)U(a,null,c[e],d,f);else U(a,null,c,d,f);else if(l&64)if(h&144)h&16?a.textContent=c:G(a,c,!!(h&4096)),jb(g);else if(h&64)if(0===g.length)for(e=0;e<c.length;e++)U(a,null,c[e],d,f);else if(0===c.length)a.textContent="",jb(g);else if(1===g.length&&1===c.length)Q(a,g[0],c[0],d,e,f);else{var p=0;b=0;var t=g.length-
1,w=c.length-1,h=g[p],l=c[b],m=g[t],q=c[w],u,ea;a:for(;;){for(;lb(h,l);){Q(a,h,l,d,e,f);p++;b++;if(p>t||b>w)break a;h=g[p];l=c[b]}for(;lb(m,q);){Q(a,m,q,d,e,f);t--;w--;if(p>t||b>w)break a;m=g[t];q=c[w]}if(lb(m,l))Q(a,m,l,d,e,f),a.insertBefore(L(l),L(h)),t--,b++,m=g[t],l=c[b];else if(lb(h,q))Q(a,h,q,d,e,f),h=w+1,h=h<c.length?L(c[h]):null,a.insertBefore(L(q),h),p++,w--,h=g[p],q=c[w];else break}if(p>t)for(h=w+1,h=h<c.length?L(c[h]):null;b<=w;)U(a,h,c[b++],d,f);else if(b>w)for(;p<=t;)kb(a,g[p++]);else{var Ga=
t-p+1,h=w-b+1,l=Array(h).fill(-1),Ha=!1,A=0,J=0;if(4>=h||16>=Ga*h)for(m=p;m<=t;m++){if(u=g[m],J<h)for(q=b;q<=w;q++)if(ea=c[q],lb(u,ea)){l[q-b]=m;A>q?Ha=!0:A=q;Q(a,u,ea,d,e,f);J++;g[m]=null;break}}else{for(var F,x,m=b;m<=w;m++)u=c[m],u.a&256?(void 0===F&&(F=new Map),F.set(u.h,m)):(void 0===x&&(x=new Map),x.set(u.h,m));for(m=p;m<=t;m++)u=g[m],J<h&&(q=void 0!==F&&u.a&256?F.get(u.h):void 0!==x?x.get(u.h):void 0,void 0!==q&&(ea=c[q],l[q-b]=m,A>q?Ha=!0:A=q,Q(a,u,ea,d,e,f),J++,g[m]=null))}if(Ga===g.length&&
0===J)for(a.textContent="",jb(g);b<h;)U(a,null,c[b++],d,f);else{for(m=Ga-J;0<m;)u=g[p++],null!==u&&(kb(a,u),m--);if(Ha){F=l.slice(0);e=[];e.push(0);x=0;for(g=l.length;x<g;x++)if(-1!==l[x])if(p=e[e.length-1],l[p]<l[x])F[x]=p,e.push(x);else{p=0;for(t=e.length-1;p<t;)w=(p+t)/2|0,l[e[w]]<l[x]?p=w+1:t=w;l[x]<l[e[p]]&&(0<p&&(F[x]=e[p-1]),e[p]=x)}p=e.length;for(t=e[p-1];0<p--;)e[p]=t,t=F[t];q=e.length-1;for(m=h-1;0<=m;m--)-1===l[m]?(A=m+b,u=c[A],h=A+1,h=h<c.length?L(c[h]):null,U(a,h,u,d,f)):0>q||m!==e[q]?
(A=m+b,u=c[A],h=A+1,h=h<c.length?L(c[h]):null,a.insertBefore(L(u),h)):q--}else if(J!==h)for(m=h-1;0<=m;m--)-1===l[m]&&(A=m+b,u=c[A],h=A+1,h=h<c.length?L(c[h]):null,U(a,h,u,d,f))}}}else if(0<g.length)for(Q(a,g[0],c,d,e,f),e=1;e<g.length;e++)kb(a,g[e]);else U(a,null,c,d,f);else if(l&32)if(h&144)h&16?a.textContent=c:G(a,c,!!(h&4096)),S(g);else if(h&64)if(0<c.length)for(Q(a,g,c[0],d,e,f),e=1;e<c.length;e++)U(a,null,c[e],d,f);else kb(a,g);else Q(a,g,c,d,e,f);else"string"===typeof c?a.value!==c&&(a.value=
c):a.checked=c}}else g&8?(f=k,a=c.i,f.b|=1,f.i=a,f.b&256&&(f.b|=4),f.I!==d&&(f.b|=8,f.I=d),Ta(f,e)):k=c.m=ib(a,b,c,d,e,f);return k}k=T(a,c,d,f);a.replaceChild(c.a&8?L(k.root):k,L(b));S(b);R(c);return k}var O=[],N=[];function mb(a,b,c,d){this.w=this.K=null;this.j=a;this.b=b;this.Ha=c;this.filter=d}mb.prototype.cancel=function(){this.b&1||(this.b|=1,this.b&2||nb(this))};function nb(a){a.K?a.K.w=a.w:a.j.D=a.w;a.w&&(a.w.K=a.K);0===--a.j.Z&&a.j.$()}function V(){this.Z=0;this.D=null}V.prototype.X=function(){};
V.prototype.$=function(){};V.prototype.subscribe=function(a,b,c){a=new mb(this,void 0===c?0:c,a,b);this.D&&(this.D.K=a,a.w=this.D);this.D=a;0===this.Z++&&this.X();return a};function db(a){0===a.Z++&&a.X()}function eb(a){0===--a.Z&&a.$()}function ob(a,b,c){b.currentTarget=a.target;for(var d=0;d<a.pa.length;d++){var e=a.pa[d];if(e.b&c&&(e.Ga(b),b.a&2))break}}function pb(a,b,c){V.call(this);this.b=a;this.name=b;this.na=c;this.ja=this.Ca.bind(this);this.H=!1}aa(pb,V);
pb.prototype.Ca=function(a){var b;if(this.D)for(var c=b=new this.na(this,0,a,la(a),a.timeStamp,a.type),d=this.D;d;)if(d.b|=2,d.Ha(c,void 0),d.b&=-3,d.b&1){var e=d,d=d.w;nb(e)}else d=d.w;if(!(b&&b.a&3)){d=la(a);for(c=[];d;){var e=d,f=e._ev;if(f){for(var g=void 0,k=Object.keys(f),l=0;l<k.length;l++){var h=f[k[l]];h.j===this&&(g?g.push(h):g=[h])}g&&c.push({target:e,pa:g})}d=d.parentElement}if(0<c.length)a:{b||(b=new this.na(this,0,a,la(a),a.timeStamp,a.type)),d=b;e=!!(this.b&4);for(f=c.length-1;0<=f;)if(g=
c[f],g.target!==d.target){if(ob(c[f--],d,1),d.a&1)break a}else break;g=c[0];if(g.target===d.target){d.a|=64;ob(g,d,3);if(d.a&1)break a;d.a&=-65;f=1}else f=0;if(e)for(d.a|=128;f<c.length&&!(ob(c[f++],d,2),d.a&1););}b&&b.a&4&&a.preventDefault()}};pb.prototype.X=function(){this.H?this.H=!1:(V.prototype.X.call(this),document.addEventListener(this.name,this.ja,bb(this.b)))};
pb.prototype.$=function(){var a=this;this.H||(this.H=!0,va(function(){a.H&&(document.removeEventListener(a.name,a.ja,bb(a.b)),V.prototype.$.call(a),a.H=!1)}))};function W(a,b,c,d,e,f){this.j=a;this.a=b;this.f=c;this.currentTarget=this.target=d;this.timeStamp=e;this.type=f}W.prototype.stopPropagation=function(){this.a|=1};W.prototype.stopImmediatePropagation=function(){this.a|=3};W.prototype.preventDefault=function(){this.a|=4};
r.Object.defineProperties(W.prototype,{defaultPrevented:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&4)}},bubbles:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&8)}},cancelable:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&16)}},isTrusted:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&32)}},eventPhase:{configurable:!0,enumerable:!0,get:function(){return this.a&64?2:this.a&128?3:1}}});W.prototype.CAPTURING_PHASE=1;
W.prototype.AT_TARGET=2;W.prototype.BUBBLING_PHASE=3;function qb(a){W.apply(this,arguments)}aa(qb,W);r.Object.defineProperties(qb.prototype,{detail:{configurable:!0,enumerable:!0,get:function(){return this.f.detail}},view:{configurable:!0,enumerable:!0,get:function(){return this.f.view}}});function rb(a){qb.apply(this,arguments)}aa(rb,qb);rb.prototype.getModifierState=function(a){return this.f.getModifierState(a)};
r.Object.defineProperties(rb.prototype,{altKey:{configurable:!0,enumerable:!0,get:function(){return this.f.altKey}},char:{configurable:!0,enumerable:!0,get:function(){return this.f.char}},charCode:{configurable:!0,enumerable:!0,get:function(){return"keypress"===this.f.type?na(this.f):0}},ctrlKey:{configurable:!0,enumerable:!0,get:function(){return this.f.ctrlKey}},key:{configurable:!0,enumerable:!0,get:function(){var a;a:if(a=this.f,"keypress"===a.type)a=na(a),a=13===a?"Enter":String.fromCharCode(a);
else{if("keydown"===a.type||"keyup"===a.type)if(a=ma[a.keyCode],void 0!==a)break a;a="Unidentified"}return a}},keyCode:{configurable:!0,enumerable:!0,get:function(){switch(this.f.type){case "keydown":case "keyup":return this.f.keyCode}return 0}},locale:{configurable:!0,enumerable:!0,get:function(){return this.f.locale}},location:{configurable:!0,enumerable:!0,get:function(){return this.f.location}},metaKey:{configurable:!0,enumerable:!0,get:function(){return this.f.metaKey}},repeat:{configurable:!0,
enumerable:!0,get:function(){return this.f.repeat}},shiftKey:{configurable:!0,enumerable:!0,get:function(){return this.f.shiftKey}},which:{configurable:!0,enumerable:!0,get:function(){switch(this.f.type){case "keypress":return na(this.f);case "keydown":case "keyup":return this.f.keyCode}return 0}},code:{configurable:!0,enumerable:!0,get:function(){return this.f.code}},ra:{configurable:!0,enumerable:!0,get:function(){return this.f.ra}},sa:{configurable:!0,enumerable:!0,get:function(){return this.f.sa}},
ta:{configurable:!0,enumerable:!0,get:function(){return this.f.ta}},ua:{configurable:!0,enumerable:!0,get:function(){return this.f.ua}},va:{configurable:!0,enumerable:!0,get:function(){return this.f.va}},wa:{configurable:!0,enumerable:!0,get:function(){return this.f.wa}}});var sb=new pb(5,"keydown",rb),X=[];function tb(a){for(var b=0;b<X.length;b++){var c=X[b];if(c.O===a)return c}}
function ub(a,b){var c=vb,d=0,d=void 0===d?0:d;b=void 0===b?Va:b;var e=tb(c);e?(e.ea=a,e.T=b):(e={O:c,ma:null,Ba:null,ea:a,T:b,Da:null,S:!1,Na:d},X.push(e));e.S||(e.S=!0,Sa(),Pa.write(function(){if(e.S){var a=e,b=a.ma,c=a.ea,d=a.T;c?(b?b=Q(a.O,b,c,a.T,0,void 0):(b=U(a.O,null,c,a.T,void 0),D&1&&(a.O.onclick=pa)),a.ma=c,a.Ba=d,a.Da=c.a&8?L(b.root):b):b&&(a.O.removeChild(L(b)),S(b),c=X.pop(),c!==a&&X.length&&(X[X.indexOf(a)]=c));a.ea=null;a.T=null;a.S=!1;a.Na=0}}))}
var wb={x:-1,y:0},xb={x:1,y:0},yb={x:0,y:-1},zb={x:0,y:1};function Ab(a){a=void 0===a?{x:0,y:0}:a;this.body=[];this.da=4;this.body.push(a)}Ab.prototype.move=function(a){this.body.push(a);if(this.da)return this.da--,null;a=this.body[0];this.body=this.body.splice(1);return a};r.Object.defineProperties(Ab.prototype,{head:{configurable:!0,enumerable:!0,get:function(){return this.body[this.body.length-1]}}});
function Bb(a,b){a=void 0===a?20:a;b=void 0===b?20:b;this.rows=a;this.cols=b;this.cells=Array(a*b).fill(0)}function Y(a,b){return a.cols*b.y+b.x}Bb.prototype.mark=function(a,b){this.cells[Y(this,a)]|=b};function Cb(a,b){var c=Z.l;c.cells[Y(c,a)]&=~b}function Db(a){var b;do b=Math.random()*a.cells.length|0;while(0!==a.cells[b]);a.cells[b]|=4}function Eb(a,b){return{x:a.x+b.x,y:a.y+b.y}}
function Fb(){var a=this;P.apply(this,[].concat(arguments instanceof Array?arguments:ia(y(arguments))));this.Ia={j:sb,b:2,Ga:function(b){switch(b.keyCode){case 37:b.preventDefault();a.C.B=wb;break;case 38:b.preventDefault();a.C.B=yb;break;case 39:b.preventDefault();a.C.B=xb;break;case 40:b.preventDefault(),a.C.B=zb}}}}aa(Fb,P);
Fb.prototype.ga=function(){var a=this.C.l;return Ma(this.C.ca?"SnakeGame gameOver":"SnakeGame").children(La(Ja(Ma("Grid").C({tabIndex:0}).style({width:30*a.cols+"px",height:30*a.rows+"px"}),{keys:this.Ia}),function(a){a&&a.focus()}).children(a.cells.map(function(a){return Ma(a&1?a&2?"Cell body head":"Cell body":a&4?"Cell food":"Cell")})))};
var vb=document.getElementById("app"),Z=new function(){var a=this;this.ca=!1;this.currentTime=this.startTime=0;this.direction={x:1,y:0};this.l=new Bb;this.J=new Ab;this.B=null;this.J.body.forEach(function(b){a.l.mark(b,1)});this.l.mark(this.J.head,2);Db(this.l)};
function Gb(){if(!Z.ca){if(Z.B){var a=Eb(Z.direction,Z.B);if(0!==a.x||0!==a.y)Z.direction=Z.B;Z.B=null}var a=Eb(Z.J.head,Z.direction),b=Z.l.cols,c=Z.l.rows,a={x:(a.x%b+b)%b,y:(a.y%c+c)%c};Cb(Z.J.head,2);(b=Z.J.move(a))&&Cb(b,1);Z.l.mark(a,2);b=Z.l;b.cells[Y(b,a)]&1?Z.ca=!0:(b=Z.l,b.cells[Y(b,a)]&4&&(Z.J.da=3,Cb(a,4),Db(Z.l)));Z.l.mark(a,1)}var d,a=new Ia(Fb.prototype.ga?8:4,Fb,Z,null,null);d=void 0===d?Va:d;ub(a,d);Ra();setTimeout(Gb,100)}Gb();}).call(this);

//# sourceMappingURL=bundle.js.map
