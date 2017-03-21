(function(){'use strict';var u,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},v="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ca(){ca=function(){};v.Symbol||(v.Symbol=da)}var ea=0;function da(a){return"jscomp_symbol_"+(a||"")+ea++}
function w(){ca();var a=v.Symbol.iterator;a||(a=v.Symbol.iterator=v.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(this)}});w=function(){}}function fa(a){var b=0;return ga(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ga(a){w();a={next:a};a[v.Symbol.iterator]=function(){return this};return a}function x(a){w();var b=a[Symbol.iterator];return b?b.call(a):fa(a)}
function y(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
function ia(a,b){w();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}function A(a,b){if(b){var c=v;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
A("Array.prototype.keys",function(a){return a?a:function(){return ia(this,function(a){return a})}});
A("Promise",function(a){function b(a){this.O=0;this.Z=void 0;this.N=[];var b=this.W();try{a(b.resolve,b.reject)}catch(k){b.reject(k)}}function c(){this.B=null}if(a)return a;c.prototype.da=function(a){null==this.B&&(this.B=[],this.ma());this.B.push(a)};c.prototype.ma=function(){var a=this;this.ea(function(){a.qa()})};var d=v.setTimeout;c.prototype.ea=function(a){d(a,0)};c.prototype.qa=function(){for(;this.B&&this.B.length;){var a=this.B;this.B=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];
try{c()}catch(m){this.na(m)}}}this.B=null};c.prototype.na=function(a){this.ea(function(){throw a;})};b.prototype.W=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.xa),reject:a(this.Y)}};b.prototype.xa=function(a){if(a===this)this.Y(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.ya(a);else{var c;a:switch(typeof a){case "object":c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.wa(a):this.ia(a)}};
b.prototype.wa=function(a){var b=void 0;try{b=a.then}catch(k){this.Y(k);return}"function"==typeof b?this.za(b,a):this.ia(a)};b.prototype.Y=function(a){this.la(2,a)};b.prototype.ia=function(a){this.la(1,a)};b.prototype.la=function(a,b){if(0!=this.O)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.O);this.O=a;this.Z=b;this.ra()};b.prototype.ra=function(){if(null!=this.N){for(var a=this.N,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.N=null}};var e=new c;b.prototype.ya=
function(a){var b=this.W();a.R(b.resolve,b.reject)};b.prototype.za=function(a,b){var c=this.W();try{a.call(b,c.resolve,c.reject)}catch(m){c.reject(m)}};b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(h){f(h)}}:b}var e,f,g=new b(function(a,b){e=a;f=b});this.R(d(a,e),d(c,f));return g};b.prototype.catch=function(a){return this.then(void 0,a)};b.prototype.R=function(a,b){function c(){switch(d.O){case 1:a(d.Z);break;case 2:b(d.Z);break;default:throw Error("Unexpected state: "+
d.O);}}var d=this;null==this.N?e.da(c):this.N.push(function(){e.da(c)})};b.resolve=function(a){return a instanceof b?a:new b(function(b){b(a)})};b.reject=function(a){return new b(function(b,c){c(a)})};b.race=function(a){return new b(function(c,d){for(var e=x(a),f=e.next();!f.done;f=e.next())b.resolve(f.value).R(c,d)})};b.all=function(a){var c=x(a),d=c.next();return d.done?b.resolve([]):new b(function(a,e){function f(b){return function(c){k[b]=c;g--;0==g&&a(k)}}var k=[],g=0;do k.push(void 0),g++,b.resolve(d.value).R(f(k.length-
1),e),d=c.next();while(!d.done)})};b.$jscomp$new$AsyncExecutor=function(){return new c};return b});function B(a,b){return Object.prototype.hasOwnProperty.call(a,b)}A("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var f in e)B(e,f)&&(a[f]=e[f])}return a}});
A("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});
A("WeakMap",function(a){function b(a){this.M=(f+=Math.random()+1).toString();if(a){ca();w();a=x(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}function c(a){B(a,e)||aa(a,e,{value:{}})}function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d.delete(b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(p){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!B(a,e))throw Error("WeakMap key fail: "+a);a[e][this.M]=b;return this};b.prototype.get=function(a){return B(a,e)?a[e][this.M]:void 0};b.prototype.has=function(a){return B(a,e)&&B(a[e],this.M)};b.prototype.delete=function(a){return B(a,e)&&B(a[e],this.M)?delete a[e][this.M]:!1};return b});
A("Map",function(a){function b(){var a={};return a.w=a.next=a.head=a}function c(a,b){var c=a.v;return ga(function(){if(c){for(;c.head!=a.v;)c=c.w;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}function d(a,b){var c;c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.L[c];if(d&&B(a.L,c))for(a=0;a<d.length;a++){var e=d[a];if(b!==b&&e.key!==e.key||b===e.key)return{id:c,list:d,index:a,l:e}}return{id:c,list:d,
index:-1,l:void 0}}function e(a){this.L={};this.v=b();this.size=0;if(a){a=x(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(x([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?
!1:!0}catch(q){return!1}}())return a;ca();w();var f=new WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.L[c.id]=[]);c.l?c.l.value=b:(c.l={next:this.v,w:this.v.w,head:this.v,key:a,value:b},c.list.push(c.l),this.v.w.next=c.l,this.v.w=c.l,this.size++);return this};e.prototype.delete=function(a){a=d(this,a);return a.l&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.L[a.id],a.l.w.next=a.l.next,a.l.next.w=a.l.w,a.l.head=null,this.size--,!0):!1};e.prototype.clear=
function(){this.L={};this.v=this.v.w=b();this.size=0};e.prototype.has=function(a){return!!d(this,a).l};e.prototype.get=function(a){return(a=d(this,a).l)&&a.value};e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};e.prototype.keys=function(){return c(this,function(a){return a.key})};e.prototype.values=function(){return c(this,function(a){return a.value})};e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});A("String.prototype.repeat",function(a){return a?a:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var d="";a;)if(a&1&&(d+=b),a>>>=1)b+=b;return d}});var C=0;try{var ja=Object.defineProperty({},"passive",{get:function(){C|=1}});window.addEventListener("test",null,ja)}catch(a){}
"innerHTML"in SVGElement.prototype&&(C|=4);"key"in KeyboardEvent.prototype&&(C|=8);var ka=navigator?navigator.userAgent:"",D=0;!/iPad|iPhone|iPod/.test(ka)||"MSStream"in window||(D|="standalone"in navigator?3:1);-1<ka.indexOf("Android")&&(D|=4);function la(a){a=a.target||window;a.oa&&(a=a.oa);return 3===a.nodeType?a.parentNode:a}
function E(a,b,c){if(!c||C&4)a.innerHTML=b;else for(ma||(ma=document.createElement("div")),ma.innerHTML="<svg>"+b+"</svg>",b=ma.firstChild;b.firstChild;)a.appendChild(b.firstChild)}var ma;function na(){}var oa=0,pa=!1,qa=[];window.addEventListener("message",ra);function ra(a){if(a.source===window&&"06526c5c-2dcc-4a4e-a86c-86f5dea6319d"===a.data){pa=!1;a=qa;qa=[];for(var b=0;b<a.length;b++)a[b]();oa++}}
function sa(a){pa||(pa=!0,window.postMessage("06526c5c-2dcc-4a4e-a86c-86f5dea6319d","*"));qa.push(a)}var ta=!1,ua=[],va,wa=0;if(!(D&2)){var ya=new MutationObserver(xa);va=document.createTextNode("");ya.observe(va,{characterData:!0})}function za(){xa();sa(na)}function xa(){for(;0<ua.length;){var a=ua;ua=[];for(var b=0;b<a.length;b++)a[b]();oa++}ta=!1}var Ca=!0,F,Da=[];function Ea(){var a=!F();if(Ca!==a)for(var b=0;b<Da.length;b++)Da[b](a)}
"undefined"!==typeof document.hidden?(F=function(){return document.hidden},document.addEventListener("visibilitychange",Ea)):"undefined"!==typeof document.webkitHidden?(F=function(){return document.webkitHidden},document.addEventListener("webkitvisibilitychange",Ea)):F=function(){return!0};Ca=!F();function Fa(){this.a=0;this.aa=this.J=this.K=null}Fa.prototype.write=function(a){this.a|=2;null===this.K&&(this.K=[]);this.K.push(a)};Fa.prototype.read=function(a){this.a|=4;null===this.J&&(this.J=[]);this.J.push(a)};
function Ga(){this.F=[]}Ga.prototype.add=function(a){this.F.push(a)};Ga.prototype.run=function(){for(var a=0;a<this.F.length;a++)if((0,this.F[a])()){var b=this.F.pop();b&&(this.F[a--]=b)}};var Ha=new Ga;function G(a,b,c,d,e){this.a=a;this.b=e;this.o=b;this.s=0;this.c=c;this.i=null;this.G=d}u=G.prototype;u.key=function(a){this.a|=256;this.s=a;return this};u.className=function(a){this.G=a;return this};u.style=function(a){null===this.c?(this.a|=512,this.c={D:null,style:a,u:null}):this.c.style=a;return this};
u.u=function(a){null===this.c?(this.a|=512,this.c={D:null,style:null,u:a}):this.c.u=a;return this};u.h=function(a){null===this.c?(this.a|=512,this.c={D:a,style:null,u:null}):this.c.D=a;return this};
u.children=function(a){if("object"===typeof a){if(null!==a)if(a.constructor===Array){this.a|=64;a:for(var b=0;b<a.length;b++){var c=a[b];if("object"===typeof c){if(null===c||c.constructor===Array){for(c=a.slice(0,b);b<a.length;b++){var d=a[b];if("object"===typeof d){if(null!==d)if(d.constructor===Array)for(var e=0;e<d.length;e++)c.push(d[e]);else d.constructor===G||(d=new G(1,null,null,null,"")),d.a&256||(d.s=b),c.push(d)}else d=new G(1,null,null,null,d),d.s=b,c.push(d)}a=c;break a}c.constructor!==
G&&(c=new G(1,null,null,null,""),a[b]=c);c.a&256||(c.s=b)}else c=new G(1,null,null,null,c),c.s=b,a[b]=c}}else a.constructor===G?this.a|=32:(this.a|=16,a="")}else this.a|=16;this.b=a;return this};u.value=function(a){this.b=a;return this};u.checked=function(a){this.b=a;return this};u.autofocus=function(a){a&&(this.a|=524288);return this};function H(a,b){return new G(2,a,null,void 0===b?null:b,null)}function I(a){return a.a&12?I(a.b):a.i}
function Ia(a,b,c){c||(c="");b&8192?a.setAttribute("class",c):a.className=c}function Ja(a,b,c){var d,e,f;if(null===b){if(null!==c)for(f=a.style,d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e]}else if(null===c)for(f=a.style,d=Object.keys(b),a=0;a<d.length;a++)f[d[a]]="";else{f=a.style;var g=0;d=Object.keys(b);for(a=0;a<d.length;a++){e=d[a];var k=c[e];void 0!==k?(b[e]!==k&&(f[e]=k),g++):f[e]=""}d=Object.keys(c);for(a=0;g<d.length&&a<d.length;)e=d[a++],b.hasOwnProperty(e)||(f[e]=c[e],g++)}}
function J(a,b,c,d){if(void 0===d){if(!(b&8192)&&6<c.length)switch(c){case "acceptCharset":c="accept-charset";break;case "htmlFor":c="for"}a.removeAttribute(c)}else if(b&8192){if(5<c.length&&120===c.charCodeAt(0)&&(58===c.charCodeAt(3)||58===c.charCodeAt(5))){if(109===c.charCodeAt(1)&&108===c.charCodeAt(2)){a.setAttributeNS("http://www.w3.org/XML/1998/namespace",c,d);return}if(108===c.charCodeAt(1)&&105===c.charCodeAt(2)&&110===c.charCodeAt(3)&&107===c.charCodeAt(4)){a.setAttributeNS("http://www.w3.org/1999/xlink",
c,d);return}}a.setAttribute(c,d)}else 5<c.length&&45===c.charCodeAt(4)?a.setAttribute(c,d):a[c]=d}
function Ka(a,b,c,d){var e,f,g;if(null===c){if(null!==d)for(f=Object.keys(d),e=0;e<f.length;e++)g=f[e],J(a,b,g,d[g])}else if(null===d)for(f=Object.keys(c),e=0;e<f.length;e++)J(a,b,f[e]);else{var k=0;f=Object.keys(c);for(e=0;e<f.length;e++){g=f[e];var m=d[g];void 0===m?J(a,b,g):(c[g]!==m&&J(a,b,g,m),k++)}f=Object.keys(d);for(e=0;k<f.length&&e<f.length;)g=f[e++],c.hasOwnProperty(g)||(J(a,b,g,d[g]),k++)}}var La=C&1?{capture:!0,passive:!0}:!0,Ma=C&1?{passive:!0}:!1;
function Na(a){return a&2?a&1?La:Ma:a&1?!0:!1}function Oa(a){if("function"===typeof a)K(a.j);else for(var b=0;b<a.length;b++){var c=a[b];c&&K(c.j)}}function Pa(a){if("function"===typeof a)L(a.j);else for(var b=0;b<a.length;b++){var c=a[b];c&&L(c.j)}}var Qa;function M(a){var b=a.a;if(b&2){if(b&96){var c=a.b;if(b&64)for(var d=0;d<c.length;d++)M(c[d]);else M(c)}b&512&&a.c.u&&Oa(a.c.u)}else b&12&&(b&8&&(b=a.i,b.g|=1),M(a.b))}
function N(a,b){var c=a.a;if(c&2){if(c&96){var d=a.b;c&64?Ra(d,b):N(d,b)}c&512&&a.c.u&&Pa(a.c.u)}else c&12&&(c&262144&&b&4&&a.o(a.b,a.c)?b&1&&N(a.b,b&-5):(N(a.b,b),c&8&&b&1&&(a=a.i,a.g&=-2)))}function Ra(a,b){for(var c=0;c<a.length;c++)N(a[c],b)}
function P(a,b,c,d){var e=b.a;if(e&108)if(e&96)if(a=b.i,b=b.b,e&64)for(e=0;e<b.length;e++)P(a,b[e],c,d);else P(a,b,c,d);else if(e&8){var e=b.i,f=b.b;e.g&6|d&16?(b=b.b=e.m(),Q(a,f,b,c,d),e.g&=-7):P(a,f,c,d)}else if(e&65536){var e=b.o,f=b.i,g=e.select(f,b.c,c),k=b.b;f===g?P(a,k,c,d):(b.b=e.m(g.ka),b.i=g,Q(a,k,b.b,c,d))}else e&131072&&(d&32&&(b.i=Object.assign({},c,b.c)),c=b.i),P(a,b.b,c,d)}function R(a,b,c){a.removeChild(I(b));N(b,c|4)}
function S(a,b,c){var d=b.a,e=null,f;if(d&3){if(d&1)a=document.createTextNode(b.b);else if(d&25600?d&16384?a=b.o.createElement():d&8192?a=document.createElementNS("http://www.w3.org/2000/svg",b.o):d&2048?a=document.createElement("textarea"):(a=document.createElement("input"),a.type=b.o):a=document.createElement(b.o),d&524288&&(Qa=a),null!==b.G&&Ia(a,d,b.G),d&512&&(e=b.c,null!==e.D&&Ka(a,d,null,e.D),null!==e.style&&Ja(a,null,e.style),null!==e.u&&(a.ca=e.u)),e=b.b,null!==e)if(d&80)if(d&16)a.textContent=
e;else for(d=0;d<e.length;d++)f=e[d],f=S(a,f,c),a.insertBefore(f,null);else d&32?(f=S(a,e,c),a.insertBefore(f,null)):d&1024?(c=a,"string"===typeof e?c.value=e:c.checked=e):e&&E(a,e,!!(d&8192));e=a}else d&8?(d=e=new b.o(b.c),d=b.b=d.m(),a=S(a,d,c)):d&262144?(d=b.o,(d=d(null,b.c))?(Q(a,d,b.b,c,32),a=I(b.b)):a=S(a,b.b,c)):(d&196608?d&65536?(d=b.o,f=b.i=d.select(null,b.c,c),b.b=d.m(f.ka)):c=e=Object.assign({},c,b.c):b.b=b.o(b.c),a=S(a,b.b,c));b.i=e;return a}
function T(a,b,c,d,e){d=S(a,c,d);a.insertBefore(d,b);e&1&&M(c)}function U(a,b){return a.s===b.s&&!((a.a^b.a)&256)}
function Q(a,b,c,d,e){if(b===c)P(a,c,d,e);else{var f,g=c.a;if(0===((b.a^c.a)&523535)&&b.o===c.o&&b.s===c.s)if(f=c.i=b.i,g&3)if(g&1)b.b!==c.b&&(f.nodeValue=c.b);else{b.G!==c.G&&Ia(f,g,c.G);a=b.a;if((a|g)&512){var k,m=null,p=null,l=null,q=null,t=null,n=null;a&512&&(k=b.c,m=k.D,l=k.style,t=k.u);g&512&&(k=c.c,p=k.D,q=k.style,n=k.u);m!==p&&Ka(f,g,m,p);l!==q&&Ja(f,l,q);if(t!==n){if(e&1)if(k=t,m=n,null===k)null!==m&&Oa(m);else if(null===m)Pa(k);else if("function"===typeof k)Oa(m),L(k.j);else if("function"===
typeof m)for(K(m.j),p=0;p<k.length;p++)(l=k[p])&&L(l.j);else{for(p=0;p<k.length&&p<m.length;)l=k[p],q=m[p++],l!==q&&(q&&K(q.j),l&&L(l.j));for(;p<m.length;)(l=m[p++])&&K(l.j);for(;p<k.length;)(l=k[p++])&&L(l.j)}f.ca=n}}if(b.b!==c.b){b=b.b;c=c.b;var h;if(null===b)if(g&80)if(g&16)f.textContent=c;else for(h=0;h<c.length;h++)T(f,null,c[h],d,e);else g&32?T(f,null,c,d,e):g&1024?"string"===typeof c?f.value=c:f.checked=c:c&&E(f,c,!!(g&8192));else if(null===c)a&144?f.textContent="":a&64?(f.textContent="",Ra(b,
e|4)):a&32&&R(f,b,e);else if(a&144)if(g&144)g&16?(h=f.firstChild)?h.nodeValue=c:f.textContent=c:c?E(f,c,!!(g&8192)):f.textContent="";else if(f.textContent="",g&64)for(h=0;h<c.length;h++)T(f,null,c[h],d,e);else T(f,null,c,d,e);else if(a&64)if(g&144)g&16||!c?f.textContent=c:E(f,c,!!(g&8192)),Ra(b,e|4);else if(g&64)if(0===b.length)for(h=0;h<c.length;h++)T(f,null,c[h],d,e);else if(0===c.length)f.textContent="",Ra(b,e|4);else if(1===b.length&&1===c.length)Q(f,b[0],c[0],d,e);else{g=k=0;m=b.length-1;p=c.length-
1;n=b[k];a=c[g];var l=b[m],q=c[p],ba;a:for(;;){for(;U(n,a);){Q(f,n,a,d,e);k++;g++;if(k>m||g>p)break a;n=b[k];a=c[g]}for(;U(l,q);){Q(f,l,q,d,e);m--;p--;if(k>m||g>p)break a;l=b[m];q=c[p]}if(U(l,a))Q(f,l,a,d,e),f.insertBefore(I(a),I(n)),m--,g++,l=b[m],a=c[g];else if(U(n,q))Q(f,n,q,d,e),n=p+1,n=n<c.length?I(c[n]):null,f.insertBefore(I(q),n),k++,p--,n=b[k],q=c[p];else break}if(k>m){if(g<=p){n=p+1;n=n<c.length?I(c[n]):null;do T(f,n,c[g++],d,e);while(g<=p)}}else if(g>p){do R(f,b[k++],e);while(k<=m)}else{var Aa=
m-k+1,n=p-g+1;a=Array(n).fill(-1);var Ba=!1,z=0,O=0;if(4>=n||16>=Aa*n)for(l=k;l<=m;l++){if(t=b[l],O<n)for(q=g;q<=p;q++)if(ba=c[q],U(t,ba)){a[q-g]=l;z>q?Ba=!0:z=q;Q(f,t,ba,d,e);O++;b[l]=null;break}}else{for(var r,l=g;l<=p;l++)t=c[l],t.a&256?(void 0===h&&(h=new Map),h.set(t.s,l)):(void 0===r&&(r=new Map),r.set(t.s-k,l));for(l=k;l<=m;l++)t=b[l],O<n&&(q=t.a&256?h?h.get(t.s):void 0:r?r.get(t.s-k):void 0,void 0!==q&&(ba=c[q],a[q-g]=l,z>q?Ba=!0:z=q,Q(f,t,ba,d,e),O++,b[l]=null))}if(Aa===b.length&&0===O)for(f.textContent=
"",Ra(b,e|4);g<n;)T(f,null,c[g++],d,e);else{for(l=Aa-O;0<l;)t=b[k++],null!==t&&(R(f,t,e),l--);if(Ba){r=a.slice(0);h=[];h.push(0);b=0;for(k=a.length;b<k;b++)if(-1!==a[b])if(m=h[h.length-1],a[m]<a[b])r[b]=m,h.push(b);else{m=0;for(p=h.length-1;m<p;)l=(m+p)/2|0,a[h[l]]<a[b]?m=l+1:p=l;a[b]<a[h[m]]&&(0<m&&(r[b]=h[m-1]),h[m]=b)}m=h.length;for(p=h[m-1];0<m--;)h[m]=p,p=r[p];q=h.length-1;for(l=n-1;0<=l;l--)-1===a[l]?(z=l+g,t=c[z],n=z+1,n=n<c.length?I(c[n]):null,T(f,n,t,d,e)):0>q||l!==h[q]?(z=l+g,t=c[z],n=z+
1,n=n<c.length?I(c[n]):null,f.insertBefore(I(t),n)):q--}else if(O!==n)for(l=n-1;0<=l;l--)-1===a[l]&&(z=l+g,t=c[z],n=z+1,n=n<c.length?I(c[n]):null,T(f,n,t,d,e))}}}else if(0<b.length){for(h=0;h<b.length;)if(r=b[h++],U(r,c)){Q(f,r,c,d,e);break}else R(f,r,e);if(h<b.length)for(;h<b.length;)R(f,b[h++],e);else T(f,null,c,d,e)}else T(f,null,c,d,e);else if(a&32)if(g&144)g&16||!c?f.textContent=c:E(f,c,!!(g&8192)),N(b,e|4);else if(g&64)if(0<c.length){h=0;for(r=I(b);h<c.length;)if(g=c[h++],U(b,g)){Q(f,b,g,d,
e);break}else T(f,r,c[h],d,e);if(h<c.length)for(;h<c.length;)T(f,null,c[h++],d,e);else R(f,b,e)}else R(f,b,e);else Q(f,b,c,d,e);else"string"===typeof c?f.value!==c&&(f.value=c):f.checked=c}}else g&8?(h=f,f=c.c,r=0,h.V(b.c,f)&&(r=1),h.h=f,f=b.b,r|h.g&6|e&16?(r=c.b=h.m(),Q(a,f,r,d,e),h.g&=-7):(c.b=b.b,P(a,f,d,e))):(h=c.o,g&458752?g&65536?(h=c.o,r=b.i,f=h.select(r,c.c,d),c.i=f,r===f?(c.b=b.b,P(a,c,d,e)):(c.b=h.m(f.ka),Q(a,b.b,c.b,d,e))):(g&131072&&(e&32||b.c!==c.c?(e|=32,d=c.i=Object.assign({},d,c.c)):
d=c.i=b.i),Q(a,b.b,c.b,d,e)):e&16||b!==c&&(!h.V&&b.c!==c.c||h.V&&h.V(b.c,c.c))?(r=b.b,h=c.b=h(c.c),Q(a,r,h,d,e)):(c.b=b.b,P(a,c.b,d,e)));else f=S(a,c,d),a.replaceChild(f,I(b)),e&1&&(N(b,e|4),M(c))}}var V=[],Sa={},Ta=!1,Ua=0;
function Va(){if(Ta){Ta=!1;for(var a=0;a<V.length;a++){var b=V[a],c=b.fa,d=b.ga,e=Ua|b.$|1;if(b.U){var f=b.X;f?(f.constructor!==G&&(f=new G(1,null,null,null,"")),d?Q(c,d,f,Sa,e):(T(c,null,f,Sa,1),D&1&&(c.onclick=na)),b.ga=f):d&&(c.removeChild(I(d)),N(d,5),c=V.pop(),c!==b&&V.length&&(V[V.indexOf(b)]=c));b.X=null;b.U=!1}else d&&P(c,d,Sa,e|8);b.$=0}}}
function Wa(a,b){var c=0,c=void 0===c?0:c,d;a:{for(d=0;d<V.length;d++){var e=V[d];if(e.fa===b){d=e;break a}}d=void 0}d?(d.X=a,d.U=!0,d.$=c):(d={fa:b,ga:null,X:a,U:!0,$:c},V.push(d));Xa();Ya()}function Xa(a){Ua=void 0===a?0:a;Ta||(Ta=!0,Za(),$a.write(Va))}var ab=!1,bb=new Fa,$a=new Fa;function cb(){ab&&requestAnimationFrame(Ya)}function Za(){if(!ab){ab=!0;var a=cb;ta||(ta=!0,D&2?Promise.resolve().then(za):(wa^=1,va.nodeValue=wa?"1":"0"));ua.push(a)}}
function Ya(){var a,b;ab=!1;var c=$a;$a=bb;bb=c;Ha.run();do{for(;c.a&4;)for(c.a&=-5,a=c.J,c.J=null,b=0;b<a.length;b++)a[b]();for(;c.a&3;){if(c.a&2)for(c.a&=-3,a=c.K,c.K=null,b=0;b<a.length;b++)a[b]();c.a&1&&(c.a&=-2,Xa(void 0),Ya())}}while(c.a&7);for(Ca&&db.run();0!==(c.a&8);)for(c.a&=-9,a=c.aa,c.aa=null,b=0;b<a.length;b++)a[b]();a=Qa;Qa=null;a&&a.focus();(0<eb||0<db.F.length)&&Za();oa++}Da.push(function(a){a&&(0<eb||0<db.F.length)&&Za()});var db=new Ga,eb=0;
function fb(a,b,c,d){this.A=this.I=null;this.j=a;this.g=b;this.sa=c;this.filter=void 0===d?-1:d}fb.prototype.cancel=function(){this.g&1||(this.g|=1,this.g&2||gb(this))};function gb(a){a.I?a.I.A=a.A:a.j.C=a.A;a.A&&(a.A.I=a.I);0===--a.j.S&&a.j.T()}function W(){this.S=0;this.C=null}W.prototype.P=function(){};W.prototype.T=function(){};W.prototype.subscribe=function(a,b,c){a=new fb(this,void 0===c?0:c,a,b);this.C&&(this.C.I=a,a.A=this.C);this.C=a;0===this.S++&&this.P();return a};
function K(a){0===a.S++&&a.P()}function L(a){0===--a.S&&a.T()}function hb(a,b,c){b.currentTarget=a.target;for(var d=0;d<a.ja.length;d++){var e=a.ja[d];if(e.g&c&&(e(b),b.a&2))break}}function ib(a,b,c){W.call(this);this.g=a;this.name=b;this.ha=c;this.ba=this.pa.bind(this);this.H=!1}y(ib,W);
ib.prototype.pa=function(a){var b;if(this.C)for(var c=b=new this.ha(this,0,a,la(a),a.timeStamp,a.type),d=this.C;d;)if(d.g|=2,d.sa(c,void 0),d.g&=-3,d.g&1){var e=d,d=d.A;gb(e)}else d=d.A;if(!(b&&b.a&3)){d=la(a);for(c=[];d;){var e=void 0,f=d,g=f.ca;if(g){if("function"===typeof g)g.j===this&&(e=[g]);else for(var k=0;k<g.length;k++){var m=g[k];m&&m.j===this&&(e?e.push(m):e=[m])}e&&c.push({target:f,ja:e})}d=d.parentElement}if(0<c.length)a:{b||(b=new this.ha(this,0,a,la(a),a.timeStamp,a.type)),d=b;e=!!(this.g&
4);for(f=c.length-1;0<=f;)if(g=c[f],g.target!==d.target){if(hb(c[f--],d,1),d.a&1)break a}else break;g=c[0];if(g.target===d.target){d.a|=64;hb(g,d,3);if(d.a&1)break a;d.a&=-65;f=1}else f=0;if(e)for(d.a|=128;f<c.length&&!(hb(c[f++],d,2),d.a&1););}b&&b.a&4&&a.preventDefault()}};ib.prototype.P=function(){this.H?this.H=!1:(W.prototype.P.call(this),document.addEventListener(this.name,this.ba,Na(this.g)))};
ib.prototype.T=function(){var a=this;this.H||(this.H=!0,sa(function(){a.H&&(document.removeEventListener(a.name,a.ba,Na(a.g)),W.prototype.T.call(a),a.H=!1)}))};function X(a,b,c,d,e,f){this.j=a;this.a=b;this.f=c;this.currentTarget=this.target=d;this.timeStamp=e;this.type=f}X.prototype.stopPropagation=function(){this.a|=1};X.prototype.stopImmediatePropagation=function(){this.a|=3};X.prototype.preventDefault=function(){this.a|=4};
v.Object.defineProperties(X.prototype,{defaultPrevented:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&4)}},bubbles:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&8)}},cancelable:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&16)}},isTrusted:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&32)}},eventPhase:{configurable:!0,enumerable:!0,get:function(){return this.a&64?2:this.a&128?3:1}}});X.prototype.CAPTURING_PHASE=1;
X.prototype.AT_TARGET=2;X.prototype.BUBBLING_PHASE=3;function jb(a){X.apply(this,arguments)}y(jb,X);v.Object.defineProperties(jb.prototype,{detail:{configurable:!0,enumerable:!0,get:function(){return this.f.detail}},view:{configurable:!0,enumerable:!0,get:function(){return this.f.view}}});function kb(a){jb.apply(this,arguments)}y(kb,jb);kb.prototype.getModifierState=function(a){return this.f.getModifierState(a)};
v.Object.defineProperties(kb.prototype,{altKey:{configurable:!0,enumerable:!0,get:function(){return this.f.altKey}},button:{configurable:!0,enumerable:!0,get:function(){return this.f.button}},buttons:{configurable:!0,enumerable:!0,get:function(){return this.f.buttons}},clientX:{configurable:!0,enumerable:!0,get:function(){return this.f.clientX}},clientY:{configurable:!0,enumerable:!0,get:function(){return this.f.clientY}},ctrlKey:{configurable:!0,enumerable:!0,get:function(){return this.f.ctrlKey}},
fromElement:{configurable:!0,enumerable:!0,get:function(){return this.f.fromElement}},layerX:{configurable:!0,enumerable:!0,get:function(){return this.f.layerX}},layerY:{configurable:!0,enumerable:!0,get:function(){return this.f.layerY}},metaKey:{configurable:!0,enumerable:!0,get:function(){return this.f.metaKey}},ta:{configurable:!0,enumerable:!0,get:function(){return this.f.ta}},ua:{configurable:!0,enumerable:!0,get:function(){return this.f.ua}},offsetX:{configurable:!0,enumerable:!0,get:function(){return this.f.offsetX}},
offsetY:{configurable:!0,enumerable:!0,get:function(){return this.f.offsetY}},pageX:{configurable:!0,enumerable:!0,get:function(){return this.f.pageX}},pageY:{configurable:!0,enumerable:!0,get:function(){return this.f.pageY}},relatedTarget:{configurable:!0,enumerable:!0,get:function(){return this.f.relatedTarget}},screenX:{configurable:!0,enumerable:!0,get:function(){return this.f.screenX}},screenY:{configurable:!0,enumerable:!0,get:function(){return this.f.screenY}},shiftKey:{configurable:!0,enumerable:!0,
get:function(){return this.f.shiftKey}},toElement:{configurable:!0,enumerable:!0,get:function(){return this.f.toElement}},which:{configurable:!0,enumerable:!0,get:function(){return this.f.which}},x:{configurable:!0,enumerable:!0,get:function(){return this.f.x}},y:{configurable:!0,enumerable:!0,get:function(){return this.f.y}}});var lb=new ib(5,"click",kb);function mb(a){a.j=lb;a.g=2;return a}function Y(a){this.g=0;this.h=a}Y.prototype.V=function(a,b){return a!==b};Y.prototype.U=function(){};
function Z(a,b){return new G(a.prototype.m?8:4,a,b,null,null)}function nb(){Y.apply(this,[].concat(arguments instanceof Array?arguments:ha(x(arguments))));var a=this;this.va=mb(function(){console.log("Click",a.h)})}y(nb,Y);nb.prototype.m=function(){return H("td","TableCell").u(this.va).children(this.h)};function ob(a){Y.apply(this,arguments)}y(ob,Y);
ob.prototype.m=function(){var a=this.h.props,b=this.h.id,c=this.h.active,d=Array(a.length+1);d[0]=Z(nb,"#"+b);for(var e=0;e<a.length;e++)d[e+1]=Z(nb,a[e]);return H("tr",c?"TableRow active":"TableRow").h({"data-id":b}).children(d)};function pb(a){Y.apply(this,arguments)}y(pb,Y);pb.prototype.m=function(){for(var a=this.h.items,b=Array(a.length),c=0;c<a.length;c++){var d=a[c];b[c]=Z(ob,d).key(d.id)}return H("table","Table").children(H("tbody").children([b]))};function qb(a){Y.apply(this,arguments)}
y(qb,Y);qb.prototype.m=function(){var a=this.h.time;return H("div","AnimBox").h({"data-id":this.h.id}).style({background:"rgba(0,0,0,"+(.5+a%10/10)+")",borderRadius:a%10+"px"})};function rb(a){Y.apply(this,arguments)}y(rb,Y);rb.prototype.m=function(){for(var a=this.h.items,b=Array(a.length),c=0;c<a.length;c++){var d=a[c];b[c]=Z(qb,d).key(d.id)}return H("div","Anim").children([b])};function sb(a){Y.apply(this,arguments)}y(sb,Y);sb.prototype.m=function(){return H("li","TreeLeaf").children(this.h.id)};
function tb(a){Y.apply(this,arguments)}y(tb,Y);tb.prototype.m=function(){for(var a=this.h,b=Array(a.children.length),c=0;c<a.children.length;c++){var d=a.children[c];b[c]=(d.container?Z(tb,d):Z(sb,d)).key(d.id)}return H("ul","TreeNode").children([b])};function ub(a){Y.apply(this,arguments)}y(ub,Y);ub.prototype.m=function(){return H("div","Tree").children(Z(tb,this.h.root))};function vb(a){Y.apply(this,arguments)}y(vb,Y);
vb.prototype.m=function(){if(!this.h)return H("div","Main");switch(this.h.location){case "table":return H("div","Main").children(Z(pb,this.h.table));case "anim":return H("div","Main").children(Z(rb,this.h.anim));default:return H("div","Main").children(Z(ub,this.h.tree))}};uibench.init("ivi","0.5.0");
document.addEventListener("DOMContentLoaded",function(){var a=document.querySelector("#App");Wa(Z(vb,void 0),a);uibench.run(function(b){Wa(Z(vb,b),a)},function(b){Wa(H("pre").children(JSON.stringify(b,void 0,2)),a)})});}).call(this);

//# sourceMappingURL=bundle.js.map
