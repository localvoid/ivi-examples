(function(){'use strict';var u;function v(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
var w="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ba(){ba=function(){};w.Symbol||(w.Symbol=ca)}var da=0;function ca(a){return"jscomp_symbol_"+(a||"")+da++}
function x(){ba();var a=w.Symbol.iterator;a||(a=w.Symbol.iterator=w.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(this)}});x=function(){}}function ea(a){var b=0;return fa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function fa(a){x();a={next:a};a[w.Symbol.iterator]=function(){return this};return a}function z(a){x();var b=a[Symbol.iterator];return b?b.call(a):ea(a)}
function ga(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}function A(a,b){if(b){var c=w;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
A("Promise",function(a){function b(a){this.K=0;this.T=void 0;this.J=[];var b=this.O();try{a(b.resolve,b.reject)}catch(n){b.reject(n)}}function c(){this.A=null}if(a)return a;c.prototype.X=function(a){null==this.A&&(this.A=[],this.fa());this.A.push(a)};c.prototype.fa=function(){var a=this;this.Y(function(){a.ja()})};var d=w.setTimeout;c.prototype.Y=function(a){d(a,0)};c.prototype.ja=function(){for(;this.A&&this.A.length;){var a=this.A;this.A=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(k){this.ga(k)}}}this.A=
null};c.prototype.ga=function(a){this.Y(function(){throw a;})};b.prototype.O=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.qa),reject:a(this.S)}};b.prototype.qa=function(a){if(a===this)this.S(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.ra(a);else{var c;a:switch(typeof a){case "object":c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.pa(a):this.ca(a)}};b.prototype.pa=function(a){var b=
void 0;try{b=a.then}catch(n){this.S(n);return}"function"==typeof b?this.sa(b,a):this.ca(a)};b.prototype.S=function(a){this.ea(2,a)};b.prototype.ca=function(a){this.ea(1,a)};b.prototype.ea=function(a,b){if(0!=this.K)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.K);this.K=a;this.T=b;this.ka()};b.prototype.ka=function(){if(null!=this.J){for(var a=this.J,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.J=null}};var e=new c;b.prototype.ra=function(a){var b=this.O();a.L(b.resolve,
b.reject)};b.prototype.sa=function(a,b){var c=this.O();try{a.call(b,c.resolve,c.reject)}catch(k){c.reject(k)}};b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(m){f(m)}}:b}var e,f,g=new b(function(a,b){e=a;f=b});this.L(d(a,e),d(c,f));return g};b.prototype.catch=function(a){return this.then(void 0,a)};b.prototype.L=function(a,b){function c(){switch(d.K){case 1:a(d.T);break;case 2:b(d.T);break;default:throw Error("Unexpected state: "+d.K);}}var d=
this;null==this.J?e.X(c):this.J.push(function(){e.X(c)})};b.resolve=function(a){return a instanceof b?a:new b(function(b){b(a)})};b.reject=function(a){return new b(function(b,c){c(a)})};b.race=function(a){return new b(function(c,d){for(var e=z(a),f=e.next();!f.done;f=e.next())b.resolve(f.value).L(c,d)})};b.all=function(a){var c=z(a),d=c.next();return d.done?b.resolve([]):new b(function(a,e){function f(b){return function(c){g[b]=c;n--;0==n&&a(g)}}var g=[],n=0;do g.push(void 0),n++,b.resolve(d.value).L(f(g.length-
1),e),d=c.next();while(!d.done)})};b.$jscomp$new$AsyncExecutor=function(){return new c};return b});function B(a,b){return Object.prototype.hasOwnProperty.call(a,b)}A("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var f in e)B(e,f)&&(a[f]=e[f])}return a}});
function ha(a,b){x();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}A("Array.prototype.keys",function(a){return a?a:function(){return ha(this,function(a){return a})}});
A("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});
A("WeakMap",function(a){function b(a){this.I=(f+=Math.random()+1).toString();if(a){ba();x();a=z(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}function c(a){B(a,e)||aa(a,e,{value:{}})}function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d.delete(b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(p){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!B(a,e))throw Error("WeakMap key fail: "+a);a[e][this.I]=b;return this};b.prototype.get=function(a){return B(a,e)?a[e][this.I]:void 0};b.prototype.has=function(a){return B(a,e)&&B(a[e],this.I)};b.prototype.delete=function(a){return B(a,e)&&B(a[e],this.I)?delete a[e][this.I]:!1};return b});
A("Map",function(a){function b(){var a={};return a.v=a.next=a.head=a}function c(a,b){var c=a.u;return fa(function(){if(c){for(;c.head!=a.u;)c=c.v;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}function d(a,b){var c;c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.H[c];if(d&&B(a.H,c))for(a=0;a<d.length;a++){var e=d[a];if(b!==b&&e.key!==e.key||b===e.key)return{id:c,list:d,index:a,j:e}}return{id:c,list:d,
index:-1,j:void 0}}function e(a){this.H={};this.u=b();this.size=0;if(a){a=z(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(z([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?
!1:!0}catch(q){return!1}}())return a;ba();x();var f=new WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.H[c.id]=[]);c.j?c.j.value=b:(c.j={next:this.u,v:this.u.v,head:this.u,key:a,value:b},c.list.push(c.j),this.u.v.next=c.j,this.u.v=c.j,this.size++);return this};e.prototype.delete=function(a){a=d(this,a);return a.j&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.H[a.id],a.j.v.next=a.j.next,a.j.next.v=a.j.v,a.j.head=null,this.size--,!0):!1};e.prototype.clear=
function(){this.H={};this.u=this.u.v=b();this.size=0};e.prototype.has=function(a){return!!d(this,a).j};e.prototype.get=function(a){return(a=d(this,a).j)&&a.value};e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};e.prototype.keys=function(){return c(this,function(a){return a.key})};e.prototype.values=function(){return c(this,function(a){return a.value})};e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});A("String.prototype.repeat",function(a){return a?a:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var d="";a;)if(a&1&&(d+=b),a>>>=1)b+=b;return d}});var C=0;try{var ia=Object.defineProperty({},"passive",{get:function(){C|=1}});window.addEventListener("test",null,ia)}catch(a){}
"innerHTML"in SVGElement.prototype&&(C|=4);"key"in KeyboardEvent.prototype&&(C|=8);"PointerEvent"in window?(C|=32,0<navigator.maxTouchPoints&&(C|=128,1<navigator.maxTouchPoints&&(C|=256))):"ontouchstart"in window&&(C|=64);"sourceCapabilities"in UIEvent.prototype&&(C|=512);"buttons"in MouseEvent.prototype&&(C|=1024);var ja=navigator?navigator.userAgent:"",D=0;!/iPad|iPhone|iPod/.test(ja)||"MSStream"in window||(D|="standalone"in navigator?3:1);-1<ja.indexOf("Android")&&(D|=4);
function ka(a){a=a.target||window;void 0!==a.ha&&(a=a.ha);return 3===a.nodeType?a.parentNode:a}function E(a,b,c){if(c&&0===(C&4))for(void 0===la&&(la=document.createElement("div")),la.innerHTML="<svg>"+b+"</svg>",b=la.firstChild,c=b.firstChild;null!==c;)a.appendChild(c),c=b.firstChild;else a.innerHTML=b}var la;function ma(){}var na=0,oa=!1,pa=[];window.addEventListener("message",qa);
function qa(a){if(a.source===window&&"06526c5c-2dcc-4a4e-a86c-86f5dea6319d"===a.data){oa=!1;a=pa;pa=[];for(var b=0;b<a.length;b++)a[b]();na++}}function ra(a){oa||(oa=!0,window.postMessage("06526c5c-2dcc-4a4e-a86c-86f5dea6319d","*"));pa.push(a)}var sa=!1,ta=[],ua,va=0;if(!(D&2)){var za=new MutationObserver(wa);ua=document.createTextNode("");za.observe(ua,{characterData:!0})}function Aa(){wa();ra(ma)}function wa(){for(;0<ta.length;){var a=ta;ta=[];for(var b=0;b<a.length;b++)a[b]();na++}sa=!1}
var Ba=!0,F,Ca=[];function Da(){var a=!F();if(Ba!==a)for(var b=0;b<Ca.length;b++)Ca[b](a)}"undefined"!==typeof document.hidden?(F=function(){return document.hidden},document.addEventListener("visibilitychange",Da)):"undefined"!==typeof document.webkitHidden?(F=function(){return document.webkitHidden},document.addEventListener("webkitvisibilitychange",Da)):F=function(){return!0};Ba=!F();function Ea(){this.b=0;this.V=this.F=this.G=null}
Ea.prototype.write=function(a){this.b|=2;null===this.G&&(this.G=[]);this.G.push(a)};Ea.prototype.read=function(a){this.b|=4;null===this.F&&(this.F=[]);this.F.push(a)};function Fa(){this.w=[]}Fa.prototype.add=function(a){this.w.push(a)};Fa.prototype.run=function(){for(var a=0;a<this.w.length;a++)!0===(0,this.w[a])()&&(a===this.w.length?this.w.pop():this.w[a--]=this.w.pop())};var Ga=new Fa;function G(a,b,c,d,e){this.b=a;this.a=e;this.m=b;this.s=0;this.c=c;this.i=null;this.C=d}u=G.prototype;
u.key=function(a){this.b|=256;this.s=a;return this};u.className=function(a){this.C=a;return this};u.style=function(a){null===this.c?(this.b|=512,this.c={B:null,style:a,o:null}):this.c.style=a;return this};u.o=function(a){null===this.c?(this.b|=512,this.c={B:null,style:null,o:a}):this.c.o=a;return this};u.h=function(a){null===this.c?(this.b|=512,this.c={B:a,style:null,o:null}):this.c.B=a;return this};
u.children=function(){var a=arguments,b=0,c=null;if(1===a.length)c=a[0],"object"===typeof c?null!==c&&(c.constructor===Array?1<c.length?b=64:1===c.length?(b=32,c=c[0]):c=null:b=32):b=16;else{var d,e=0,f=0,g;for(d=0;d<a.length;d++)g=a[d],null!==g&&(g.constructor===Array?0<g.length&&(f+=g.length,e++,c=g):(f++,e++,c=g));if(0<e)if(1===(e|f))"object"===typeof c?c.constructor===Array?1<f?b=64:(b=32,c=c[0]):b=32:b=16;else for(b=64,c=Array(f),d=f=0;d<a.length;d++)if(g=a[d],"object"===typeof g){if(null!==
g)if(g.constructor===Array)for(e=0;e<g.length;e++)c[f++]=g[e];else c[f++]=g,0===(g.b&256)&&(g.s=d)}else g=c[f++]=new G(1,null,null,null,g),g.s=d}this.b|=b;this.a=c;return this};u.value=function(a){this.a=a;return this};u.checked=function(a){this.a=a;return this};u.autofocus=function(a){!0===a&&(this.b|=524288);return this};function H(a,b){return new G(2,a,null,void 0===b?null:b,null)}function I(a){return 0!==(a.b&12)?I(a.a):a.i}
function Ha(a,b,c){null===c&&(c="");0===(b&8192)?a.className=c:a.setAttribute("class",c)}
function Ia(a,b,c){var d,e,f;if(null===b){if(null!==c)for(f=a.style,d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f.setProperty(e,c[e])}else if(null===c)for(f=a.style,d=Object.keys(b),a=0;a<d.length;a++)f.removeProperty(d[a]);else{f=a.style;var g=0;d=Object.keys(b);for(a=0;a<d.length;a++){e=d[a];var n=c[e];void 0!==n?(b[e]!==n&&f.setProperty(e,n),g++):f.removeProperty(e)}d=Object.keys(c);for(a=0;g<d.length&&a<d.length;)e=d[a++],!1===b.hasOwnProperty(e)&&(f.setProperty(e,c[e]),g++)}}
function J(a,b,c,d){if(void 0===d){if(0===(b&8192)&&6<c.length)switch(c){case "acceptCharset":c="accept-charset";break;case "htmlFor":c="for"}a.removeAttribute(c)}else if(0!==(b&8192)){if(5<c.length&&120===c.charCodeAt(0)&&(58===c.charCodeAt(3)||58===c.charCodeAt(5))){if(109===c.charCodeAt(1)&&108===c.charCodeAt(2)){a.setAttributeNS("http://www.w3.org/XML/1998/namespace",c,d);return}if(108===c.charCodeAt(1)&&105===c.charCodeAt(2)&&110===c.charCodeAt(3)&&107===c.charCodeAt(4)){a.setAttributeNS("http://www.w3.org/1999/xlink",
c,d);return}}a.setAttribute(c,d)}else 5<c.length&&45===c.charCodeAt(4)?a.setAttribute(c,d):a[c]=d}
function Ja(a,b,c,d){var e,f,g;if(null===c){if(null!==d)for(f=Object.keys(d),e=0;e<f.length;e++)g=f[e],J(a,b,g,d[g])}else if(null===d)for(f=Object.keys(c),e=0;e<f.length;e++)J(a,b,f[e]);else{var n=0;f=Object.keys(c);for(e=0;e<f.length;e++){g=f[e];var k=d[g];void 0===k?J(a,b,g):(c[g]!==k&&J(a,b,g,k),n++)}f=Object.keys(d);for(e=0;n<f.length&&e<f.length;)g=f[e++],!1===c.hasOwnProperty(g)&&(J(a,b,g,d[g]),n++)}}var Ka=0!==(C&1)?{capture:!0,passive:!0}:!0,La=0!==(C&1)?{passive:!0}:!1;
function Ma(a){return 0!==(a&2)?0!==(a&1)?Ka:La:0!==(a&1)?!0:!1}function K(a){a.source.addListener(a)}function L(a){a.source.removeListener(a)}function Na(a){if("function"===typeof a)K(a);else for(var b=0;b<a.length;b++){var c=a[b];null!==c&&K(c)}}function Oa(a){if("function"===typeof a)L(a);else for(var b=0;b<a.length;b++){var c=a[b];null!==c&&L(c)}}var Pa=null;
function N(a){var b=a.b;if(0!==(b&2)){if(0!==(b&96)){var c=a.a;if(0!==(b&64))for(var d=0;d<c.length;d++)N(c[d]);else N(c)}0!==(b&512)&&null!==a.c.o&&Na(a.c.o)}else 0!==(b&12)&&(0!==(b&8)&&(b=a.i,b.f|=1),N(a.a))}function O(a,b){var c=a.b;if(0!==(c&2)){if(0!==(c&96)){var d=a.a;0!==(c&64)?P(d,b):O(d,b)}0!==(c&512)&&null!==a.c.o&&Oa(a.c.o)}else 0!==(c&12)&&(0!==(c&262144)&&0!==(b&4)&&null!==a.m(a.a,a.c)?0!==(b&1)&&O(a.a,b^4):(O(a.a,b),0!==(c&8)&&0!==(b&1)&&(a=a.i,a.f&=-2)))}
function P(a,b){for(var c=0;c<a.length;c++)O(a[c],b)}function Q(a,b,c,d){var e=b.b;if(0!==(e&108))if(0!==(e&96))if(a=b.i,b=b.a,0!==(e&64))for(e=0;e<b.length;e++)Q(a,b[e],c,d);else Q(a,b,c,d);else if(0!==(e&8)){var e=b.i,f=b.a;0!==(e.f&6|d&16)?(b=b.a=e.l(),R(a,f,b,c,d),e.f&=-7):Q(a,f,c,d)}else if(0!==(e&65536)){var e=b.m,f=b.i,g=e.select(f,b.c,c),n=b.a;f===g?Q(a,n,c,d):(b.a=e.l(g.da),b.i=g,R(a,n,b.a,c,d))}else 0!==(e&131072)&&(0!==(d&32)&&(b.i=Object.assign({},c,b.c)),c=b.i),Q(a,b.a,c,d)}
function S(a,b,c){a.removeChild(I(b));O(b,c|4)}
function T(a,b,c){var d=b.b,e=null,f;if(0!==(d&3)){if(0!==(d&1))a=document.createTextNode(b.a);else if(0!==(d&25600)?0!==(d&16384)?a=b.m.createElement():0!==(d&8192)?a=document.createElementNS("http://www.w3.org/2000/svg",b.m):0!==(d&2048)?a=document.createElement("textarea"):(a=document.createElement("input"),a.type=b.m):a=document.createElement(b.m),0!==(d&524288)&&(Pa=a),null!==b.C&&Ha(a,d,b.C),0!==(d&512)&&(e=b.c,null!==e.B&&Ja(a,d,null,e.B),null!==e.style&&Ia(a,null,e.style),null!==e.o&&(a.W=
e.o)),e=b.a,null!==e)if(0!==(d&80))if(0!==(d&16))a.textContent=e;else for(d=0;d<e.length;d++)f=e[d],f=T(a,f,c),a.insertBefore(f,null);else 0!==(d&32)?(f=T(a,e,c),a.insertBefore(f,null)):0!==(d&1024)?(c=a,"string"===typeof e?c.value=e:c.checked=e):e&&E(a,e,0!==(d&8192));e=a}else 0!==(d&8)?(d=e=new b.m(b.c),d=b.a=d.l(),a=T(a,d,c)):0!==(d&262144)?(d=b.m,d=d(null,b.c),null!==d?(R(a,d,b.a,c,32),a=I(b.a)):a=T(a,b.a,c)):(0!==(d&196608)?0!==(d&65536)?(d=b.m,f=b.i=d.select(null,b.c,c),b.a=d.l(f.da)):c=e=Object.assign({},
c,b.c):b.a=b.m(b.c),a=T(a,b.a,c));b.i=e;return a}function U(a,b,c,d,e){d=T(a,c,d);a.insertBefore(d,b);0!==(e&1)&&N(c)}function V(a,b){return a.s===b.s&&0===((a.b^b.b)&256)}
function R(a,b,c,d,e){if(b===c)Q(a,c,d,e);else{var f,g=c.b;if(0===((b.b^c.b)&523535)&&b.m===c.m&&b.s===c.s)if(f=c.i=b.i,0!==(g&3))if(0!==(g&1))b.a!==c.a&&(f.nodeValue=c.a);else{b.C!==c.C&&Ha(f,g,c.C);a=b.b;if(0!==((a|g)&512)){var n,k=null,p=null,l=null,q=null,r=null,h=null;0!==(a&512)&&(n=b.c,k=n.B,l=n.style,r=n.o);0!==(g&512)&&(n=c.c,p=n.B,q=n.style,h=n.o);k!==p&&Ja(f,g,k,p);l!==q&&Ia(f,l,q);if(r!==h){if(0!==(e&1))if(n=r,k=h,null===n)null!==k&&Na(k);else if(null===k)Oa(n);else if("function"===typeof n)Na(k),
L(n);else if("function"===typeof k)for(K(k),p=0;p<n.length;p++)l=n[p],null!==l&&L(l);else{for(p=0;p<n.length&&p<k.length;)l=n[p],q=k[p++],l!==q&&(null!==q&&K(q),null!==l&&L(l));for(;p<k.length;)l=k[p++],null!==l&&K(l);for(;p<n.length;)l=n[p++],null!==l&&L(l)}f.W=h}}if(b.a!==c.a){b=b.a;c=c.a;var h=0,m,t;if(null===b)if(0!==(g&80))if(0!==(g&16))f.textContent=c;else{do U(f,null,c[h++],d,e);while(h<c.length)}else 0!==(g&32)?U(f,null,c,d,e):0!==(g&1024)?"string"===typeof c?f.value=c:f.checked=c:c&&E(f,
c,0!==(g&8192));else if(null===c)0!==(a&144)?f.textContent="":0!==(a&64)?(f.textContent="",P(b,e|4)):0!==(a&32)&&S(f,b,e);else if(0!==(a&144))if(0!==(g&144))0!==(g&16)?(m=f.firstChild,null!==m?m.nodeValue=c:f.textContent=c):c?E(f,c,0!==(g&8192)):f.textContent="";else if(f.textContent="",0!==(g&64)){do U(f,null,c[h++],d,e);while(h<c.length)}else U(f,null,c,d,e);else if(0!==(a&64))if(0!==(g&144))0===(g&16)&&c?E(f,c,0!==(g&8192)):f.textContent=c,P(b,e|4);else if(0!==(g&64)){g=n=0;k=b.length-1;p=c.length-
1;h=b[n];a=c[g];var l=b[k],q=c[p],Z;a:for(;;){for(;V(h,a);){R(f,h,a,d,e);n++;g++;if(n>k||g>p)break a;h=b[n];a=c[g]}for(;V(l,q);){R(f,l,q,d,e);k--;p--;if(n>k||g>p)break a;l=b[k];q=c[p]}if(V(l,a))R(f,l,a,d,e),f.insertBefore(I(a),I(h)),k--,g++,l=b[k],a=c[g];else if(V(h,q))R(f,h,q,d,e),h=p+1,h=h<c.length?I(c[h]):null,f.insertBefore(I(q),h),n++,p--,h=b[n],q=c[p];else break}if(n>k){if(g<=p){h=p+1;h=h<c.length?I(c[h]):null;do U(f,h,c[g++],d,e);while(g<=p)}}else if(g>p){do S(f,b[n++],e);while(n<=k)}else{var xa=
k-n+1,h=p-g+1;a=Array(h).fill(-1);var ya=!1,y=0,M=0;if(4>=h||16>=xa*h)for(l=n;l<=k;l++){if(r=b[l],M<h)for(q=g;q<=p;q++)if(Z=c[q],V(r,Z)){a[q-g]=l;y>q?ya=!0:y=q;R(f,r,Z,d,e);M++;b[l]=null;break}}else{for(l=g;l<=p;l++)r=c[l],0!==(r.b&256)?(void 0===m&&(m=new Map),m.set(r.s,l)):(void 0===t&&(t=new Map),t.set(r.s-n,l));for(l=n;l<=k;l++)r=b[l],M<h&&(q=0!==(r.b&256)?void 0!==m?m.get(r.s):void 0:void 0!==t?t.get(r.s-n):void 0,void 0!==q&&(Z=c[q],a[q-g]=l,y>q?ya=!0:y=q,R(f,r,Z,d,e),M++,b[l]=null))}if(xa===
b.length&&0===M)for(f.textContent="",P(b,e|4);g<h;)U(f,null,c[g++],d,e);else{for(l=xa-M;0<l;)r=b[n++],null!==r&&(S(f,r,e),l--);if(!0===ya){t=a.slice(0);m=[];m.push(0);b=0;for(n=a.length;b<n;b++)if(-1!==a[b])if(k=m[m.length-1],a[k]<a[b])t[b]=k,m.push(b);else{k=0;for(p=m.length-1;k<p;)l=(k+p)/2|0,a[m[l]]<a[b]?k=l+1:p=l;a[b]<a[m[k]]&&(0<k&&(t[b]=m[k-1]),m[k]=b)}k=m.length;for(p=m[k-1];0<k--;)m[k]=p,p=t[p];q=m.length-1;for(l=h-1;0<=l;l--)-1===a[l]?(y=l+g,r=c[y],h=y+1,h=h<c.length?I(c[h]):null,U(f,h,r,
d,e)):0>q||l!==m[q]?(y=l+g,r=c[y],h=y+1,h=h<c.length?I(c[h]):null,f.insertBefore(I(r),h)):q--}else if(M!==h)for(l=h-1;0<=l;l--)-1===a[l]&&(y=l+g,r=c[y],h=y+1,h=h<c.length?I(c[h]):null,U(f,h,r,d,e))}}}else{m=-1;h=0;do{t=b[h];if(V(t,c)){R(f,t,c,d,e);m=h;break}h++}while(h<b.length);if(-1<m){for(h=0;h<m;h++)S(f,b[h],e);for(h=m+1;h<b.length;h++)S(f,b[h],e)}else f.textContent="",P(b,e|4),U(f,null,c,d,e)}else if(0!==(a&32))if(0!==(g&144))0===(g&16)&&c?E(f,c,0!==(g&8192)):f.textContent=c,O(b,e|4);else if(0!==
(g&64)){m=-1;h=0;do{t=c[h];if(V(b,t)){R(f,b,t,d,e);m=h;break}h++}while(h<c.length);if(-1<m){t=I(b);for(h=0;h<m;h++)U(f,t,c[h],d,e);h=m+1}else S(f,b,e),h=0;for(;h<c.length;h++)U(f,null,c[h],d,e)}else R(f,b,c,d,e);else"string"===typeof c?f.value!==c&&(f.value=c):f.checked=c}}else 0!==(g&8)?(m=f,f=c.c,t=0,!0===m.N(b.c,f)&&(t=1),m.h=f,f=b.a,0!==(t|m.f&6|e&16)?(t=c.a=m.l(),R(a,f,t,d,e),m.f&=-7):(c.a=b.a,Q(a,f,d,e))):(m=c.m,0!==(g&458752)?0!==(g&65536)?(m=c.m,t=b.i,f=m.select(t,c.c,d),c.i=f,t===f?(c.a=
b.a,Q(a,c,d,e)):(c.a=m.l(f.da),R(a,b.a,c.a,d,e))):(0!==(g&131072)&&(0!==(e&32)||b.c!==c.c?(e|=32,d=c.i=Object.assign({},d,c.c)):d=c.i=b.i),R(a,b.a,c.a,d,e)):0!==(e&16)||b!==c&&(void 0===m.N&&b.c!==c.c||void 0!==m.N&&!0===m.N(b.c,c.c))?(t=b.a,m=c.a=m(c.c),R(a,t,m,d,e)):(c.a=b.a,Q(a,c.a,d,e)));else f=T(a,c,d),a.replaceChild(f,I(b)),0!==(e&1)&&(O(b,e|4),N(c))}}var W=[],Qa={},Ra=!1,Sa=0;
function Ta(){if(Ra){Ra=!1;for(var a=0;a<W.length;a++){var b=W[a],c=b.Z,d=b.$,e=Sa|b.U|1;if(b.M){var f=b.R;f?(f.constructor!==G&&(f=new G(1,null,null,null,"")),d?R(c,d,f,Qa,e):(U(c,null,f,Qa,1),D&1&&(c.onclick=ma)),b.$=f):d&&(c.removeChild(I(d)),O(d,5),c=W.pop(),c!==b&&W.length&&(W[W.indexOf(b)]=c));b.R=null;b.M=!1}else d&&Q(c,d,Qa,e|8);b.U=0}}}
function Ua(a,b){var c=0,c=void 0===c?0:c,d;a:{for(d=0;d<W.length;d++){var e=W[d];if(e.Z===b){d=e;break a}}d=void 0}d?(d.R=a,d.M=!0,d.U=c):(d={Z:b,$:null,R:a,M:!0,U:c},W.push(d));Va();Wa()}function Va(a){Sa=void 0===a?0:a;Ra||(Ra=!0,Xa(),Ya.write(Ta))}var Za=!1,$a=new Ea,Ya=new Ea;function ab(){!0===Za&&requestAnimationFrame(Wa)}function Xa(){if(!1===Za){Za=!0;var a=ab;sa||(sa=!0,D&2?Promise.resolve().then(Aa):(va^=1,ua.nodeValue=va?"1":"0"));ta.push(a)}}
function Wa(){var a,b;Za=!1;var c=Ya;Ya=$a;$a=c;Ga.run();do{for(;c.b&4;)for(c.b&=-5,a=c.F,c.F=null,b=0;b<a.length;b++)a[b]();for(;c.b&3;){if(c.b&2)for(c.b&=-3,a=c.G,c.G=null,b=0;b<a.length;b++)a[b]();c.b&1&&(c.b&=-2,Va(void 0),Wa())}}while(c.b&7);for(Ba&&bb.run();0!==(c.b&8);)for(c.b&=-9,a=c.V,c.V=null,b=0;b<a.length;b++)a[b]();a=Pa;Pa=null;null!==a&&a.focus();(0<cb||0<bb.w.length)&&Xa();na++}Ca.push(function(a){a&&(0<cb||0<bb.w.length)&&Xa()});var bb=new Fa,cb=0;
function db(a,b,c){a=a.la;if("function"===typeof a)0!==(a.f&c)&&a(b);else for(var d=0;d<a.length;d++){var e=a[d];0!==(e.f&c)&&e(b)}}function eb(a,b,c,d){this.source=a;this.f=b;this.target=c;this.timestamp=d}eb.prototype.stopPropagation=function(){this.f|=1};eb.prototype.preventDefault=function(){this.f|=2};function fb(a,b,c,d,e){eb.call(this,a,b,c,d);this.g=e}v(fb,eb);function gb(a){fb.apply(this,arguments)}v(gb,fb);
w.Object.defineProperties(gb.prototype,{detail:{configurable:!0,enumerable:!0,get:function(){return this.g.detail}},view:{configurable:!0,enumerable:!0,get:function(){return this.g.view}}});function hb(a){gb.apply(this,arguments)}v(hb,gb);hb.prototype.getModifierState=function(a){return this.g.getModifierState(a)};
w.Object.defineProperties(hb.prototype,{altKey:{configurable:!0,enumerable:!0,get:function(){return this.g.altKey}},button:{configurable:!0,enumerable:!0,get:function(){return this.g.button}},buttons:{configurable:!0,enumerable:!0,get:function(){return this.g.buttons}},clientX:{configurable:!0,enumerable:!0,get:function(){return this.g.clientX}},clientY:{configurable:!0,enumerable:!0,get:function(){return this.g.clientY}},ctrlKey:{configurable:!0,enumerable:!0,get:function(){return this.g.ctrlKey}},
fromElement:{configurable:!0,enumerable:!0,get:function(){return this.g.fromElement}},layerX:{configurable:!0,enumerable:!0,get:function(){return this.g.layerX}},layerY:{configurable:!0,enumerable:!0,get:function(){return this.g.layerY}},metaKey:{configurable:!0,enumerable:!0,get:function(){return this.g.metaKey}},ma:{configurable:!0,enumerable:!0,get:function(){return this.g.ma}},na:{configurable:!0,enumerable:!0,get:function(){return this.g.na}},offsetX:{configurable:!0,enumerable:!0,get:function(){return this.g.offsetX}},
offsetY:{configurable:!0,enumerable:!0,get:function(){return this.g.offsetY}},pageX:{configurable:!0,enumerable:!0,get:function(){return this.g.pageX}},pageY:{configurable:!0,enumerable:!0,get:function(){return this.g.pageY}},relatedTarget:{configurable:!0,enumerable:!0,get:function(){return this.g.relatedTarget}},screenX:{configurable:!0,enumerable:!0,get:function(){return this.g.screenX}},screenY:{configurable:!0,enumerable:!0,get:function(){return this.g.screenY}},shiftKey:{configurable:!0,enumerable:!0,
get:function(){return this.g.shiftKey}},toElement:{configurable:!0,enumerable:!0,get:function(){return this.g.toElement}},which:{configurable:!0,enumerable:!0,get:function(){return this.g.which}},x:{configurable:!0,enumerable:!0,get:function(){return this.g.x}},y:{configurable:!0,enumerable:!0,get:function(){return this.g.y}}});
var ib=new function(a,b,c){var d=this;this.ba=function(a){for(var b=[],c=ka(a),e=d.P;null!==c;){var k=void 0,p=c,l=e,q=p.W;if(null!==q&&void 0!==q){if("function"===typeof q)q.source===l&&(k=q);else for(var r=0,h=0;h<q.length;h++){var m=q[h];null!==m&&m.source===l&&(0===r?k=m:1===r?k=[k,m]:k.push(m),r++)}void 0!==k&&b.push({target:p,la:k})}c=c.parentElement}if(0<b.length){c=new d.ia(d.P,0,ka(a),a.timeStamp,a);a:{e=0!==(d.f&4);for(k=b.length-1;0<=k;)if(p=b[k--],db(p,c,1),0!==(c.f&1))break a;if(!0===
e)for(k=0,c.f|=32;k<b.length&&(db(b[k++],c,2),0===(c.f&1)););}0!==(c.f&2)&&a.preventDefault()}};this.P={addListener:function(){0===d.aa++&&(!0===d.D?d.D=!1:document.addEventListener(d.name,d.ba,Ma(d.f)))},removeListener:function(){0===--d.aa&&!1===d.D&&(d.D=!0,ra(function(){!0===d.D&&(document.removeEventListener(d.name,d.ba,Ma(d.f)),d.D=!1)}))}};this.aa=0;this.f=a;this.name=b;this.ia=c;this.D=!1}(5,"click",hb);function jb(a){a.source=ib.P;a.f=2;return a}function X(a){this.f=0;this.h=a}
X.prototype.N=function(a,b){return a!==b};X.prototype.M=function(){};function Y(a,b){return new G(void 0===a.prototype.l?4:8,a,b,null,null)}function kb(){X.apply(this,[].concat(arguments instanceof Array?arguments:ga(z(arguments))));var a=this;this.oa=jb(function(){console.log("Click",a.h)})}v(kb,X);kb.prototype.l=function(){return H("td","TableCell").o(this.oa).children(this.h)};function lb(a){X.apply(this,arguments)}v(lb,X);
lb.prototype.l=function(){var a=this.h.props,b=this.h.id,c=this.h.active,d=Array(a.length+1);d[0]=Y(kb,"#"+b);for(var e=0;e<a.length;e++)d[e+1]=Y(kb,a[e]);return H("tr",c?"TableRow active":"TableRow").h({"data-id":b}).children(d)};function mb(a){X.apply(this,arguments)}v(mb,X);mb.prototype.l=function(){for(var a=this.h.items,b=Array(a.length),c=0;c<a.length;c++){var d=a[c];b[c]=Y(lb,d).key(d.id)}return H("table","Table").children(H("tbody").children(b))};function nb(a){X.apply(this,arguments)}
v(nb,X);nb.prototype.l=function(){var a=this.h.time;return H("div","AnimBox").h({"data-id":this.h.id}).style({background:"rgba(0,0,0,"+(.5+a%10/10)+")","border-radius":a%10+"px"})};function ob(a){X.apply(this,arguments)}v(ob,X);ob.prototype.l=function(){for(var a=this.h.items,b=Array(a.length),c=0;c<a.length;c++){var d=a[c];b[c]=Y(nb,d).key(d.id)}return H("div","Anim").children(b)};function pb(a){X.apply(this,arguments)}v(pb,X);pb.prototype.l=function(){return H("li","TreeLeaf").children(this.h.id)};
function qb(a){X.apply(this,arguments)}v(qb,X);qb.prototype.l=function(){for(var a=this.h,b=Array(a.children.length),c=0;c<a.children.length;c++){var d=a.children[c];b[c]=(d.container?Y(qb,d):Y(pb,d)).key(d.id)}return H("ul","TreeNode").children(b)};function rb(a){X.apply(this,arguments)}v(rb,X);rb.prototype.l=function(){return H("div","Tree").children(Y(qb,this.h.root))};function sb(a){X.apply(this,arguments)}v(sb,X);
sb.prototype.l=function(){if(!this.h)return H("div","Main");switch(this.h.location){case "table":return H("div","Main").children(Y(mb,this.h.table));case "anim":return H("div","Main").children(Y(ob,this.h.anim));default:return H("div","Main").children(Y(rb,this.h.tree))}};uibench.init("ivi","0.7.0");
document.addEventListener("DOMContentLoaded",function(){var a=document.querySelector("#App");Ua(Y(sb,void 0),a);uibench.run(function(b){Ua(Y(sb,b),a)},function(b){Ua(H("pre").children(JSON.stringify(b,void 0,2)),a)})});}).call(this);

//# sourceMappingURL=bundle.js.map
