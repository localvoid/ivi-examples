(function(){'use strict';var u;function v(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
var x="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ba(){ba=function(){};x.Symbol||(x.Symbol=da)}var ea=0;function da(a){return"jscomp_symbol_"+(a||"")+ea++}
function y(){ba();var a=x.Symbol.iterator;a||(a=x.Symbol.iterator=x.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(this)}});y=function(){}}function fa(a){var b=0;return ga(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ga(a){y();a={next:a};a[x.Symbol.iterator]=function(){return this};return a}function z(a){y();var b=a[Symbol.iterator];return b?b.call(a):fa(a)}
function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}function A(a,b){if(b){var c=x;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
A("Promise",function(a){function b(a){this.R=0;this.da=void 0;this.P=[];var b=this.V();try{a(b.resolve,b.reject)}catch(k){b.reject(k)}}function c(){this.B=null}if(a)return a;c.prototype.ia=function(a){null==this.B&&(this.B=[],this.ra());this.B.push(a)};c.prototype.ra=function(){var a=this;this.ja(function(){a.va()})};var d=x.setTimeout;c.prototype.ja=function(a){d(a,0)};c.prototype.va=function(){for(;this.B&&this.B.length;){var a=this.B;this.B=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];
try{c()}catch(m){this.sa(m)}}}this.B=null};c.prototype.sa=function(a){this.ja(function(){throw a;})};b.prototype.V=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.Ha),reject:a(this.ca)}};b.prototype.Ha=function(a){if(a===this)this.ca(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.Ia(a);else{var c;a:switch(typeof a){case "object":c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.Ga(a):this.oa(a)}};
b.prototype.Ga=function(a){var b=void 0;try{b=a.then}catch(k){this.ca(k);return}"function"==typeof b?this.Ja(b,a):this.oa(a)};b.prototype.ca=function(a){this.qa(2,a)};b.prototype.oa=function(a){this.qa(1,a)};b.prototype.qa=function(a,b){if(0!=this.R)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.R);this.R=a;this.da=b;this.wa()};b.prototype.wa=function(){if(null!=this.P){for(var a=this.P,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.P=null}};var e=new c;b.prototype.Ia=
function(a){var b=this.V();a.S(b.resolve,b.reject)};b.prototype.Ja=function(a,b){var c=this.V();try{a.call(b,c.resolve,c.reject)}catch(m){c.reject(m)}};b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(n){f(n)}}:b}var e,f,g=new b(function(a,b){e=a;f=b});this.S(d(a,e),d(c,f));return g};b.prototype.catch=function(a){return this.then(void 0,a)};b.prototype.S=function(a,b){function c(){switch(d.R){case 1:a(d.da);break;case 2:b(d.da);break;default:throw Error("Unexpected state: "+
d.R);}}var d=this;null==this.P?e.ia(c):this.P.push(function(){e.ia(c)})};b.resolve=function(a){return a instanceof b?a:new b(function(b){b(a)})};b.reject=function(a){return new b(function(b,c){c(a)})};b.race=function(a){return new b(function(c,d){for(var e=z(a),f=e.next();!f.done;f=e.next())b.resolve(f.value).S(c,d)})};b.all=function(a){var c=z(a),d=c.next();return d.done?b.resolve([]):new b(function(a,e){function f(b){return function(c){g[b]=c;k--;0==k&&a(g)}}var g=[],k=0;do g.push(void 0),k++,b.resolve(d.value).S(f(g.length-
1),e),d=c.next();while(!d.done)})};b.$jscomp$new$AsyncExecutor=function(){return new c};return b});function B(a,b){return Object.prototype.hasOwnProperty.call(a,b)}A("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var f in e)B(e,f)&&(a[f]=e[f])}return a}});
function ia(a,b){y();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}A("Array.prototype.keys",function(a){return a?a:function(){return ia(this,function(a){return a})}});
A("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});
A("WeakMap",function(a){function b(a){this.N=(f+=Math.random()+1).toString();if(a){ba();y();a=z(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}function c(a){B(a,e)||aa(a,e,{value:{}})}function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d.delete(b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(p){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!B(a,e))throw Error("WeakMap key fail: "+a);a[e][this.N]=b;return this};b.prototype.get=function(a){return B(a,e)?a[e][this.N]:void 0};b.prototype.has=function(a){return B(a,e)&&B(a[e],this.N)};b.prototype.delete=function(a){return B(a,e)&&B(a[e],this.N)?delete a[e][this.N]:!1};return b});
A("Map",function(a){function b(){var a={};return a.u=a.next=a.head=a}function c(a,b){var c=a.s;return ga(function(){if(c){for(;c.head!=a.s;)c=c.u;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}function d(a,b){var c;c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.L[c];if(d&&B(a.L,c))for(a=0;a<d.length;a++){var e=d[a];if(b!==b&&e.key!==e.key||b===e.key)return{id:c,list:d,index:a,j:e}}return{id:c,list:d,
index:-1,j:void 0}}function e(a){this.L={};this.s=b();this.size=0;if(a){a=z(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(z([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?
!1:!0}catch(q){return!1}}())return a;ba();y();var f=new WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.L[c.id]=[]);c.j?c.j.value=b:(c.j={next:this.s,u:this.s.u,head:this.s,key:a,value:b},c.list.push(c.j),this.s.u.next=c.j,this.s.u=c.j,this.size++);return this};e.prototype.delete=function(a){a=d(this,a);return a.j&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.L[a.id],a.j.u.next=a.j.next,a.j.next.u=a.j.u,a.j.head=null,this.size--,!0):!1};e.prototype.clear=
function(){this.L={};this.s=this.s.u=b();this.size=0};e.prototype.has=function(a){return!!d(this,a).j};e.prototype.get=function(a){return(a=d(this,a).j)&&a.value};e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};e.prototype.keys=function(){return c(this,function(a){return a.key})};e.prototype.values=function(){return c(this,function(a){return a.value})};e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});A("String.prototype.repeat",function(a){return a?a:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var d="";a;)if(a&1&&(d+=b),a>>>=1)b+=b;return d}});var C=0;try{var ja=Object.defineProperty({},"passive",{get:function(){C|=1}});window.addEventListener("test",null,ja)}catch(a){}
"innerHTML"in SVGElement.prototype&&(C|=4);"key"in KeyboardEvent.prototype&&(C|=8);var ka=navigator?navigator.userAgent:"",D=0;!/iPad|iPhone|iPod/.test(ka)||"MSStream"in window||(D|="standalone"in navigator?3:1);-1<ka.indexOf("Android")&&(D|=4);function la(a){a=a.target||window;void 0!==a.ta&&(a=a.ta);return 3===a.nodeType?a.parentNode:a}
function E(a,b,c){if(c&&0===(C&4))for(void 0===ma&&(ma=document.createElement("div")),ma.innerHTML="<svg>"+b+"</svg>",b=ma.firstChild,c=b.firstChild;null!==c;)a.appendChild(c),c=b.firstChild;else a.innerHTML=b}var ma;function na(){}var oa=0,pa=!1,qa=[];window.addEventListener("message",ra);function ra(a){if(a.source===window&&"06526c5c-2dcc-4a4e-a86c-86f5dea6319d"===a.data){pa=!1;a=qa;qa=[];for(var b=0;b<a.length;b++)a[b]();oa++}}
function sa(a){pa||(pa=!0,window.postMessage("06526c5c-2dcc-4a4e-a86c-86f5dea6319d","*"));qa.push(a)}var ta=!1,ua=[],va,wa=0;if(!(D&2)){var ya=new MutationObserver(xa);va=document.createTextNode("");ya.observe(va,{characterData:!0})}function za(){xa();sa(na)}function xa(){for(;0<ua.length;){var a=ua;ua=[];for(var b=0;b<a.length;b++)a[b]();oa++}ta=!1}var Ca=!0,F,Da=[];function Ea(){var a=!F();if(Ca!==a)for(var b=0;b<Da.length;b++)Da[b](a)}
"undefined"!==typeof document.hidden?(F=function(){return document.hidden},document.addEventListener("visibilitychange",Ea)):"undefined"!==typeof document.webkitHidden?(F=function(){return document.webkitHidden},document.addEventListener("webkitvisibilitychange",Ea)):F=function(){return!0};Ca=!F();function Fa(){this.a=0;this.fa=this.I=this.J=null}Fa.prototype.write=function(a){this.a|=2;null===this.J&&(this.J=[]);this.J.push(a)};Fa.prototype.read=function(a){this.a|=4;null===this.I&&(this.I=[]);this.I.push(a)};
function Ga(){this.v=[]}Ga.prototype.add=function(a){this.v.push(a)};function Ha(a){for(var b=0;b<a.v.length;b++)!0===(0,a.v[b])()&&(b===a.v.length?a.v.pop():a.v[b--]=a.v.pop())}var Ia=new Ga;function G(a,b,c,d,e){this.a=a;this.b=e;this.l=b;this.o=0;this.g=c;this.h=null;this.F=d}u=G.prototype;u.key=function(a){this.a|=256;this.o=a;return this};u.className=function(a){this.F=a;return this};u.style=function(a){null===this.g?(this.a|=512,this.g={C:null,style:a,m:null}):this.g.style=a;return this};
u.m=function(a){null===this.g?(this.a|=512,this.g={C:null,style:null,m:a}):this.g.m=a;return this};u.ba=function(a){null===this.g?(this.a|=512,this.g={C:a,style:null,m:null}):this.g.C=a;return this};
u.children=function(){var a=arguments,b=0,c=null;if(1===a.length)c=a[0],"object"===typeof c?null!==c&&(c.constructor===Array?1<c.length?b=64:1===c.length?(b=32,c=c[0]):c=null:b=32):b=16;else{var d,e=0,f=0,g;for(d=0;d<a.length;d++)g=a[d],null!==g&&(g.constructor===Array?0<g.length&&(f+=g.length,e++,c=g):(f++,e++,c=g));if(0<e)if(1===(e|f))"object"===typeof c?c.constructor===Array?1<f?b=64:(b=32,c=c[0]):b=32:b=16;else for(b=64,c=Array(f),d=f=0;d<a.length;d++)if(g=a[d],"object"===typeof g){if(null!==
g)if(g.constructor===Array)for(e=0;e<g.length;e++)c[f++]=g[e];else c[f++]=g,0===(g.a&256)&&(g.o=d)}else g=c[f++]=new G(1,null,null,null,g),g.o=d}this.a|=b;this.b=c;return this};u.value=function(a){this.b=a;return this};u.checked=function(a){this.b=a;return this};u.autofocus=function(a){!0===a&&(this.a|=524288);return this};function Ja(a){return new G(2,"div",null,void 0===a?null:a,null)}function H(a){return 0!==(a.a&12)?H(a.b):a.h}
function Ka(a,b,c){null===c&&(c="");0===(b&8192)?a.className=c:a.setAttribute("class",c)}
function La(a,b,c){var d,e,f;if(null===b){if(null!==c)for(f=a.style,d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e]}else if(null===c)for(f=a.style,d=Object.keys(b),a=0;a<d.length;a++)f[d[a]]="";else{f=a.style;var g=0;d=Object.keys(b);for(a=0;a<d.length;a++){e=d[a];var k=c[e];void 0!==k?(b[e]!==k&&(f[e]=k),g++):f[e]=""}d=Object.keys(c);for(a=0;g<d.length&&a<d.length;)e=d[a++],!1===b.hasOwnProperty(e)&&(f[e]=c[e],g++)}}
function I(a,b,c,d){if(void 0===d){if(0===(b&8192)&&6<c.length)switch(c){case "acceptCharset":c="accept-charset";break;case "htmlFor":c="for"}a.removeAttribute(c)}else if(0!==(b&8192)){if(5<c.length&&120===c.charCodeAt(0)&&(58===c.charCodeAt(3)||58===c.charCodeAt(5))){if(109===c.charCodeAt(1)&&108===c.charCodeAt(2)){a.setAttributeNS("http://www.w3.org/XML/1998/namespace",c,d);return}if(108===c.charCodeAt(1)&&105===c.charCodeAt(2)&&110===c.charCodeAt(3)&&107===c.charCodeAt(4)){a.setAttributeNS("http://www.w3.org/1999/xlink",
c,d);return}}a.setAttribute(c,d)}else 5<c.length&&45===c.charCodeAt(4)?a.setAttribute(c,d):a[c]=d}
function Ma(a,b,c,d){var e,f,g;if(null===c){if(null!==d)for(f=Object.keys(d),e=0;e<f.length;e++)g=f[e],I(a,b,g,d[g])}else if(null===d)for(f=Object.keys(c),e=0;e<f.length;e++)I(a,b,f[e]);else{var k=0;f=Object.keys(c);for(e=0;e<f.length;e++){g=f[e];var m=d[g];void 0===m?I(a,b,g):(c[g]!==m&&I(a,b,g,m),k++)}f=Object.keys(d);for(e=0;k<f.length&&e<f.length;)g=f[e++],!1===c.hasOwnProperty(g)&&(I(a,b,g,d[g]),k++)}}var Na=0!==(C&1)?{capture:!0,passive:!0}:!0,Oa=0!==(C&1)?{passive:!0}:!1;
function Pa(a){return 0!==(a&2)?0!==(a&1)?Na:Oa:0!==(a&1)?!0:!1}function Qa(a){if("function"===typeof a)J(a.i);else for(var b=0;b<a.length;b++){var c=a[b];null!==c&&J(c.i)}}function Ra(a){if("function"===typeof a)K(a.i);else for(var b=0;b<a.length;b++){var c=a[b];null!==c&&K(c.i)}}var Sa;
function Ta(a){var b=a.a;if(0!==(b&2)){if(0!==(b&96)){var c=a.b;if(0!==(b&64))for(var d=0;d<c.length;d++)Ta(c[d]);else Ta(c)}0!==(b&512)&&null!==a.g.m&&Qa(a.g.m)}else 0!==(b&12)&&(0!==(b&8)&&(b=a.h,b.c|=1),Ta(a.b))}function L(a,b){var c=a.a;if(0!==(c&2)){if(0!==(c&96)){var d=a.b;0!==(c&64)?Ua(d,b):L(d,b)}0!==(c&512)&&null!==a.g.m&&Ra(a.g.m)}else 0!==(c&12)&&(0!==(c&262144)&&0!==(b&4)&&null!==a.l(a.b,a.g)?0!==(b&1)&&L(a.b,b^4):(L(a.b,b),0!==(c&8)&&0!==(b&1)&&(a=a.h,a.c&=-2)))}
function Ua(a,b){for(var c=0;c<a.length;c++)L(a[c],b)}function M(a,b,c,d){var e=b.a;if(0!==(e&108))if(0!==(e&96))if(a=b.h,b=b.b,0!==(e&64))for(e=0;e<b.length;e++)M(a,b[e],c,d);else M(a,b,c,d);else if(0!==(e&8)){var e=b.h,f=b.b;0!==(e.c&6|d&16)?(b=b.b=e.D(),O(a,f,b,c,d),e.c&=-7):M(a,f,c,d)}else if(0!==(e&65536)){var e=b.l,f=b.h,g=e.select(f,b.g,c),k=b.b;f===g?M(a,k,c,d):(b.b=e.D(),b.h=g,O(a,k,b.b,c,d))}else 0!==(e&131072)&&(0!==(d&32)&&(b.h=Object.assign({},c,b.g)),c=b.h),M(a,b.b,c,d)}
function P(a,b,c){a.removeChild(H(b));L(b,c|4)}
function Q(a,b,c){var d=b.a,e=null,f;if(0!==(d&3)){if(0!==(d&1))a=document.createTextNode(b.b);else if(0!==(d&25600)?0!==(d&16384)?a=b.l.createElement():0!==(d&8192)?a=document.createElementNS("http://www.w3.org/2000/svg",b.l):0!==(d&2048)?a=document.createElement("textarea"):(a=document.createElement("input"),a.type=b.l):a=document.createElement(b.l),0!==(d&524288)&&(Sa=a),null!==b.F&&Ka(a,d,b.F),0!==(d&512)&&(e=b.g,null!==e.C&&Ma(a,d,null,e.C),null!==e.style&&La(a,null,e.style),null!==e.m&&(a.ha=
e.m)),e=b.b,null!==e)if(0!==(d&80))if(0!==(d&16))a.textContent=e;else for(d=0;d<e.length;d++)f=e[d],f=Q(a,f,c),a.insertBefore(f,null);else 0!==(d&32)?(f=Q(a,e,c),a.insertBefore(f,null)):0!==(d&1024)?(c=a,"string"===typeof e?c.value=e:c.checked=e):e&&E(a,e,0!==(d&8192));e=a}else 0!==(d&8)?(d=e=new b.l(b.g),d=b.b=d.D(),a=Q(a,d,c)):0!==(d&262144)?(d=b.l,d=d(null,b.g),null!==d?(O(a,d,b.b,c,32),a=H(b.b)):a=Q(a,b.b,c)):(0!==(d&196608)?0!==(d&65536)?(d=b.l,b.h=d.select(null,b.g,c),b.b=d.D()):c=e=Object.assign({},
c,b.g):b.b=b.l(b.g),a=Q(a,b.b,c));b.h=e;return a}function R(a,b,c,d,e){d=Q(a,c,d);a.insertBefore(d,b);0!==(e&1)&&Ta(c)}function S(a,b){return a.o===b.o&&0===((a.a^b.a)&256)}
function O(a,b,c,d,e){if(b===c)M(a,c,d,e);else{var f,g=c.a;if(0===((b.a^c.a)&523535)&&b.l===c.l&&b.o===c.o)if(f=c.h=b.h,0!==(g&3))if(0!==(g&1))b.b!==c.b&&(f.nodeValue=c.b);else{b.F!==c.F&&Ka(f,g,c.F);a=b.a;if(0!==((a|g)&512)){var k,m=null,p=null,l=null,q=null,t=null,h=null;0!==(a&512)&&(k=b.g,m=k.C,l=k.style,t=k.m);0!==(g&512)&&(k=c.g,p=k.C,q=k.style,h=k.m);m!==p&&Ma(f,g,m,p);l!==q&&La(f,l,q);if(t!==h){if(0!==(e&1))if(k=t,m=h,null===k)null!==m&&Qa(m);else if(null===m)Ra(k);else if("function"===typeof k)Qa(m),
K(k.i);else if("function"===typeof m)for(J(m.i),p=0;p<k.length;p++)l=k[p],null!==l&&K(l.i);else{for(p=0;p<k.length&&p<m.length;)l=k[p],q=m[p++],l!==q&&(null!==q&&J(q.i),null!==l&&K(l.i));for(;p<m.length;)l=m[p++],null!==l&&J(l.i);for(;p<k.length;)l=k[p++],null!==l&&K(l.i)}f.ha=h}}if(b.b!==c.b){b=b.b;c=c.b;var h=0,n,r;if(null===b)if(0!==(g&80))if(0!==(g&16))f.textContent=c;else{do R(f,null,c[h++],d,e);while(h<c.length)}else 0!==(g&32)?R(f,null,c,d,e):0!==(g&1024)?"string"===typeof c?f.value=c:f.checked=
c:c&&E(f,c,0!==(g&8192));else if(null===c)0!==(a&144)?f.textContent="":0!==(a&64)?(f.textContent="",Ua(b,e|4)):0!==(a&32)&&P(f,b,e);else if(0!==(a&144))if(0!==(g&144))0!==(g&16)?(n=f.firstChild,null!==n?n.nodeValue=c:f.textContent=c):c?E(f,c,0!==(g&8192)):f.textContent="";else if(f.textContent="",0!==(g&64)){do R(f,null,c[h++],d,e);while(h<c.length)}else R(f,null,c,d,e);else if(0!==(a&64))if(0!==(g&144))0===(g&16)&&c?E(f,c,0!==(g&8192)):f.textContent=c,Ua(b,e|4);else if(0!==(g&64)){g=k=0;m=b.length-
1;p=c.length-1;h=b[k];a=c[g];var l=b[m],q=c[p],ca;a:for(;;){for(;S(h,a);){O(f,h,a,d,e);k++;g++;if(k>m||g>p)break a;h=b[k];a=c[g]}for(;S(l,q);){O(f,l,q,d,e);m--;p--;if(k>m||g>p)break a;l=b[m];q=c[p]}if(S(l,a))O(f,l,a,d,e),f.insertBefore(H(a),H(h)),m--,g++,l=b[m],a=c[g];else if(S(h,q))O(f,h,q,d,e),h=p+1,h=h<c.length?H(c[h]):null,f.insertBefore(H(q),h),k++,p--,h=b[k],q=c[p];else break}if(k>m){if(g<=p){h=p+1;h=h<c.length?H(c[h]):null;do R(f,h,c[g++],d,e);while(g<=p)}}else if(g>p){do P(f,b[k++],e);while(k<=
m)}else{var Aa=m-k+1,h=p-g+1;a=Array(h).fill(-1);var Ba=!1,w=0,N=0;if(4>=h||16>=Aa*h)for(l=k;l<=m;l++){if(t=b[l],N<h)for(q=g;q<=p;q++)if(ca=c[q],S(t,ca)){a[q-g]=l;w>q?Ba=!0:w=q;O(f,t,ca,d,e);N++;b[l]=null;break}}else{for(l=g;l<=p;l++)t=c[l],0!==(t.a&256)?(void 0===n&&(n=new Map),n.set(t.o,l)):(void 0===r&&(r=new Map),r.set(t.o-k,l));for(l=k;l<=m;l++)t=b[l],N<h&&(q=0!==(t.a&256)?void 0!==n?n.get(t.o):void 0:void 0!==r?r.get(t.o-k):void 0,void 0!==q&&(ca=c[q],a[q-g]=l,w>q?Ba=!0:w=q,O(f,t,ca,d,e),N++,
b[l]=null))}if(Aa===b.length&&0===N)for(f.textContent="",Ua(b,e|4);g<h;)R(f,null,c[g++],d,e);else{for(l=Aa-N;0<l;)t=b[k++],null!==t&&(P(f,t,e),l--);if(Ba){r=a.slice(0);n=[];n.push(0);b=0;for(k=a.length;b<k;b++)if(-1!==a[b])if(m=n[n.length-1],a[m]<a[b])r[b]=m,n.push(b);else{m=0;for(p=n.length-1;m<p;)l=(m+p)/2|0,a[n[l]]<a[b]?m=l+1:p=l;a[b]<a[n[m]]&&(0<m&&(r[b]=n[m-1]),n[m]=b)}m=n.length;for(p=n[m-1];0<m--;)n[m]=p,p=r[p];q=n.length-1;for(l=h-1;0<=l;l--)-1===a[l]?(w=l+g,t=c[w],h=w+1,h=h<c.length?H(c[h]):
null,R(f,h,t,d,e)):0>q||l!==n[q]?(w=l+g,t=c[w],h=w+1,h=h<c.length?H(c[h]):null,f.insertBefore(H(t),h)):q--}else if(N!==h)for(l=h-1;0<=l;l--)-1===a[l]&&(w=l+g,t=c[w],h=w+1,h=h<c.length?H(c[h]):null,R(f,h,t,d,e))}}}else{n=-1;h=0;do{r=b[h];if(S(r,c)){O(f,r,c,d,e);n=h;break}h++}while(h<b.length);if(-1<n){for(h=0;h<n;h++)P(f,b[h],e);for(h=n+1;h<b.length;h++)P(f,b[h],e)}else f.textContent="",Ua(b,e|4),R(f,null,c,d,e)}else if(0!==(a&32))if(0!==(g&144))0===(g&16)&&c?E(f,c,0!==(g&8192)):f.textContent=c,L(b,
e|4);else if(0!==(g&64)){n=-1;h=0;do{r=c[h];if(S(b,r)){O(f,b,r,d,e);n=h;break}h++}while(h<c.length);if(-1<n){r=H(b);for(h=0;h<n;h++)R(f,r,c[h],d,e);h=n+1}else P(f,b,e),h=0;for(;h<c.length;h++)R(f,null,c[h],d,e)}else O(f,b,c,d,e);else"string"===typeof c?f.value!==c&&(f.value=c):f.checked=c}}else 0!==(g&8)?(n=f,f=c.g,r=0,!0===n.U(b.g,f)&&(r=1),n.ba=f,f=b.b,0!==(r|n.c&6|e&16)?(r=c.b=n.D(),O(a,f,r,d,e),n.c&=-7):(c.b=b.b,M(a,f,d,e))):(n=c.l,0!==(g&458752)?0!==(g&65536)?(n=c.l,r=b.h,f=n.select(r,c.g,d),
c.h=f,r===f?(c.b=b.b,M(a,c,d,e)):(c.b=n.D(),O(a,b.b,c.b,d,e))):(0!==(g&131072)&&(0!==(e&32)||b.g!==c.g?(e|=32,d=c.h=Object.assign({},d,c.g)):d=c.h=b.h),O(a,b.b,c.b,d,e)):0!==(e&16)||b!==c&&(void 0===n.U&&b.g!==c.g||void 0!==n.U&&!0===n.U(b.g,c.g))?(r=b.b,n=c.b=n(c.g),O(a,r,n,d,e)):(c.b=b.b,M(a,c.b,d,e)));else f=Q(a,c,d),a.replaceChild(f,H(b)),0!==(e&1)&&(L(b,e|4),Ta(c))}}var T=[],Va={},Wa=!1,Xa=0;
function Ya(){if(Wa){Wa=!1;for(var a=0;a<T.length;a++){var b=T[a],c=b.la,d=b.ma,e=Xa|b.ea|1;if(b.O){var f=b.W;f?(f.constructor!==G&&(f=new G(1,null,null,null,"")),d?O(c,d,f,Va,e):(R(c,null,f,Va,1),D&1&&(c.onclick=na)),b.ma=f):d&&(c.removeChild(H(d)),L(d,5),c=T.pop(),c!==b&&T.length&&(T[T.indexOf(b)]=c));b.W=null;b.O=!1}else d&&M(c,d,Va,e|8);b.ea=0}}}function Za(a){Xa=void 0===a?0:a;Wa||(Wa=!0,$a().write(Ya))}var ab=!1,bb=!1,cb=new Fa,db=new Fa;function eb(){ab&&requestAnimationFrame(fb)}
function gb(){if(!ab){ab=!0;var a=eb;ta||(ta=!0,D&2?Promise.resolve().then(za):(wa^=1,va.nodeValue=wa?"1":"0"));ua.push(a)}}
function fb(){var a,b;ab=!1;bb=!0;var c=db;db=cb;cb=c;Ha(Ia);do{for(;c.a&4;)for(c.a&=-5,a=c.I,c.I=null,b=0;b<a.length;b++)a[b]();for(;c.a&3;){if(c.a&2)for(c.a&=-3,a=c.J,c.J=null,b=0;b<a.length;b++)a[b]();c.a&1&&(c.a&=-2,Za(void 0),fb())}}while(c.a&7);bb=!1;for(Ca&&Ha(hb);0!==(c.a&8);)for(c.a&=-9,a=c.fa,c.fa=null,b=0;b<a.length;b++)a[b]();a=Sa;Sa=null;a&&a.focus();(0<ib||0<hb.v.length)&&gb();oa++}function $a(){gb();return db}Da.push(function(a){a&&(0<ib||0<hb.v.length)&&gb()});var hb=new Ga,ib=0;
function jb(a,b,c,d){this.w=this.H=null;this.i=a;this.c=b;this.xa=c;this.filter=void 0===d?-1:d}jb.prototype.cancel=function(){0===(this.c&1)&&(this.c|=1,0===(this.c&2)&&kb(this))};function kb(a){null!==a.H?a.H.w=a.w:a.i.A=a.w;null!==a.w&&(a.w.H=a.H);0===--a.i.T&&a.i.M()}function U(){this.T=0;this.A=null}function lb(a,b,c){for(a=a.A;null!==a;){if(void 0===c||0!==(a.filter&c))a.c|=2,a.xa(b,c),a.c&=-3;if(0!==(a.c&1)){var d=a;a=a.w;kb(d)}else a=a.w}}U.prototype.K=function(){};U.prototype.M=function(){};
U.prototype.subscribe=function(a,b,c){a=new jb(this,void 0===c?0:c,a,b);null!==this.A&&(this.A.H=a,a.w=this.A);this.A=a;0===this.T++&&this.K();return a};function J(a){0===a.T++&&a.K()}function K(a){0===--a.T&&a.M()}
function mb(a,b){for(var c=[];null!==a;){var d=void 0,e=a,f=b,g=e.ha;if(null!==g&&void 0!==g){if("function"===typeof g)g.i===f&&(d=[g]);else for(var k=0;k<g.length;k++){var m=g[k];null!==m&&m.i===f&&(void 0===d?d=[m]:d.push(m))}void 0!==d&&c.push({target:e,pa:d})}a=a.parentElement}return c}function nb(a,b,c){b.currentTarget=a.target;for(var d=0;d<a.pa.length;d++){var e=a.pa[d];if(0!==(e.c&c)&&(e(b),0!==(b.a&2)))break}}
function ob(a,b,c){for(var d=a.length-1,e;0<=d;)if(e=a[d],e.target!==b.target){if(nb(a[d--],b,1),0!==(b.a&1))return}else break;e=a[0];if(e.target===b.target){b.a|=64;nb(e,b,3);if(0!==(b.a&1))return;b.a&=-65;d=1}else d=0;if(!0===c)for(b.a|=128;d<a.length&&(nb(a[d++],b,2),0===(b.a&1)););}function V(a,b,c){U.call(this);this.c=a;this.name=b;this.na=c;this.ga=this.ua.bind(this);this.G=!1}v(V,U);
V.prototype.ua=function(a){var b;null!==this.A&&(b=new this.na(this,0,a,la(a),a.timeStamp,a.type),lb(this,b));if(void 0===b||0===(b.a&3)){var c=mb(la(a),this);0<c.length&&(void 0===b&&(b=new this.na(this,0,a,la(a),a.timeStamp,a.type)),ob(c,b,0!==(this.c&4)));void 0!==b&&0!==(b.a&4)&&a.preventDefault()}};V.prototype.K=function(){!0===this.G?this.G=!1:(U.prototype.K.call(this),document.addEventListener(this.name,this.ga,Pa(this.c)))};
V.prototype.M=function(){var a=this;!1===this.G&&(this.G=!0,sa(function(){!0===a.G&&(document.removeEventListener(a.name,a.ga,Pa(a.c)),U.prototype.M.call(a),a.G=!1)}))};function W(a,b,c,d,e,f){this.i=a;this.a=b;this.f=c;this.currentTarget=this.target=d;this.timeStamp=e;this.type=f}W.prototype.stopPropagation=function(){this.a|=1};W.prototype.stopImmediatePropagation=function(){this.a|=3};W.prototype.preventDefault=function(){this.a|=4};
x.Object.defineProperties(W.prototype,{defaultPrevented:{configurable:!0,enumerable:!0,get:function(){return 0!==(this.a&4)}},bubbles:{configurable:!0,enumerable:!0,get:function(){return 0!==(this.a&8)}},cancelable:{configurable:!0,enumerable:!0,get:function(){return 0!==(this.a&16)}},isTrusted:{configurable:!0,enumerable:!0,get:function(){return 0!==(this.a&32)}},eventPhase:{configurable:!0,enumerable:!0,get:function(){return 0!==(this.a&64)?2:0!==(this.a&128)?3:1}}});
W.prototype.CAPTURING_PHASE=1;W.prototype.AT_TARGET=2;W.prototype.BUBBLING_PHASE=3;function X(a){W.apply(this,arguments)}v(X,W);x.Object.defineProperties(X.prototype,{detail:{configurable:!0,enumerable:!0,get:function(){return this.f.detail}},view:{configurable:!0,enumerable:!0,get:function(){return this.f.view}}});function Y(a){X.apply(this,arguments)}v(Y,X);Y.prototype.getModifierState=function(a){return this.f.getModifierState(a)};
x.Object.defineProperties(Y.prototype,{altKey:{configurable:!0,enumerable:!0,get:function(){return this.f.altKey}},button:{configurable:!0,enumerable:!0,get:function(){return this.f.button}},buttons:{configurable:!0,enumerable:!0,get:function(){return this.f.buttons}},clientX:{configurable:!0,enumerable:!0,get:function(){return this.f.clientX}},clientY:{configurable:!0,enumerable:!0,get:function(){return this.f.clientY}},ctrlKey:{configurable:!0,enumerable:!0,get:function(){return this.f.ctrlKey}},
fromElement:{configurable:!0,enumerable:!0,get:function(){return this.f.fromElement}},layerX:{configurable:!0,enumerable:!0,get:function(){return this.f.layerX}},layerY:{configurable:!0,enumerable:!0,get:function(){return this.f.layerY}},metaKey:{configurable:!0,enumerable:!0,get:function(){return this.f.metaKey}},ya:{configurable:!0,enumerable:!0,get:function(){return this.f.ya}},za:{configurable:!0,enumerable:!0,get:function(){return this.f.za}},offsetX:{configurable:!0,enumerable:!0,get:function(){return this.f.offsetX}},
offsetY:{configurable:!0,enumerable:!0,get:function(){return this.f.offsetY}},pageX:{configurable:!0,enumerable:!0,get:function(){return this.f.pageX}},pageY:{configurable:!0,enumerable:!0,get:function(){return this.f.pageY}},relatedTarget:{configurable:!0,enumerable:!0,get:function(){return this.f.relatedTarget}},screenX:{configurable:!0,enumerable:!0,get:function(){return this.f.screenX}},screenY:{configurable:!0,enumerable:!0,get:function(){return this.f.screenY}},shiftKey:{configurable:!0,enumerable:!0,
get:function(){return this.f.shiftKey}},toElement:{configurable:!0,enumerable:!0,get:function(){return this.f.toElement}},which:{configurable:!0,enumerable:!0,get:function(){return this.f.which}},x:{configurable:!0,enumerable:!0,get:function(){return this.f.x}},y:{configurable:!0,enumerable:!0,get:function(){return this.f.y}}});function pb(a){X.apply(this,arguments)}v(pb,X);
x.Object.defineProperties(pb.prototype,{altKey:{configurable:!0,enumerable:!0,get:function(){return this.f.altKey}},charCode:{configurable:!0,enumerable:!0,get:function(){return this.f.charCode}},changedTouches:{configurable:!0,enumerable:!0,get:function(){return this.f.changedTouches}},ctrlKey:{configurable:!0,enumerable:!0,get:function(){return this.f.ctrlKey}},keyCode:{configurable:!0,enumerable:!0,get:function(){return this.f.keyCode}},metaKey:{configurable:!0,enumerable:!0,get:function(){return this.f.metaKey}},
shiftKey:{configurable:!0,enumerable:!0,get:function(){return this.f.shiftKey}},targetTouches:{configurable:!0,enumerable:!0,get:function(){return this.f.targetTouches}},touches:{configurable:!0,enumerable:!0,get:function(){return this.f.touches}},which:{configurable:!0,enumerable:!0,get:function(){return this.f.which}}});var qb=new V(5,"click",Y),rb=new V(5,"mousedown",Y),sb=new V(5,"mouseup",Y),tb=new V(7,"touchend",pb),ub=new V(7,"touchstart",pb);function vb(a){this.c=0;this.ba=a}
vb.prototype.U=function(a,b){return a!==b};vb.prototype.O=function(){};function wb(a){var b=xb;return new G(void 0===b.prototype.D?4:8,b,a,null,null)}function yb(a){W.apply(this,arguments)}v(yb,W);
function zb(){U.apply(this,[].concat(arguments instanceof Array?arguments:ha(z(arguments))));var a=this;this.c=0;this.X=this.Z=this.Y=this.$=this.aa=null;this.Fa=function(){a.c|=17;a.$=tb.subscribe(a.Ea)};this.Ca=function(){a.c&17?a.c&=-17:(a.c|=2,a.Z=sb.subscribe(a.Da))};this.Ea=function(b){a.c|=32;a.c&=-2;a.$.cancel();a.$=null;Ab(a,b)};this.Da=function(b){a.c&2&&(a.c|=32,a.c&=-9,a.Z.cancel(),a.Z=null,Ab(a,b))};this.Aa=function(b){a.c&32?a.c&=-33:Ab(a,b)}}v(zb,U);
function Ab(a,b){var c=a.A,d=mb(b.target,a),e;if(d||c)e=new yb(a,0,null,b.target,Date.now(),0);0<d.length&&ob(d,e,!0);e&&lb(a,e,0)}zb.prototype.K=function(){this.Y=rb.subscribe(this.Ca);this.aa=ub.subscribe(this.Fa);this.X=qb.subscribe(this.Aa)};zb.prototype.M=function(){this.Y.cancel();this.aa.cancel();this.X.cancel();this.X=this.aa=this.Y=null};var Bb=new zb;function Cb(a){a.i=Bb;a.c=2;return a}
function xb(){vb.apply(this,[].concat(arguments instanceof Array?arguments:ha(z(arguments))));var a=this;this.ka=0;this.Ba=Cb(function(){a.ka++;a.c|=2;a.O();if(0!==(a.c&1)){var b=bb?cb:$a();b.a|=1}})}v(xb,vb);xb.prototype.D=function(){var a=this.ba.depth;return Ja("Box").m(this.Ba).children(Ja("ClickCounter").children("Clicks: "+this.ka),0<a?wb({depth:a-1}):null)};var Db=Ja().children([wb({depth:1})]),Eb=document.getElementById("app"),Fb=0,Fb=void 0===Fb?0:Fb,Z;
a:{for(var Gb=0;Gb<T.length;Gb++){var Hb=T[Gb];if(Hb.la===Eb){Z=Hb;break a}}Z=void 0}Z?(Z.W=Db,Z.O=!0,Z.ea=Fb):(Z={la:Eb,ma:null,W:Db,O:!0,ea:Fb},T.push(Z));Za();fb();}).call(this);

//# sourceMappingURL=bundle.js.map
