(function(){'use strict';var u,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},v="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ba(){ba=function(){};v.Symbol||(v.Symbol=ca)}var da=0;function ca(a){return"jscomp_symbol_"+(a||"")+da++}
function w(){ba();var a=v.Symbol.iterator;a||(a=v.Symbol.iterator=v.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(this)}});w=function(){}}function ea(a){var b=0;return fa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function fa(a){w();a={next:a};a[v.Symbol.iterator]=function(){return this};return a}function y(a){w();var b=a[Symbol.iterator];return b?b.call(a):ea(a)}
function ga(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
function ia(a,b){w();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}function z(a,b){if(b){var c=v;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
z("Array.prototype.keys",function(a){return a?a:function(){return ia(this,function(a){return a})}});
z("Promise",function(a){function b(a){this.O=0;this.Z=void 0;this.N=[];var b=this.W();try{a(b.resolve,b.reject)}catch(k){b.reject(k)}}function c(){this.w=null}if(a)return a;c.prototype.da=function(a){null==this.w&&(this.w=[],this.la());this.w.push(a)};c.prototype.la=function(){var a=this;this.ea(function(){a.pa()})};var d=v.setTimeout;c.prototype.ea=function(a){d(a,0)};c.prototype.pa=function(){for(;this.w&&this.w.length;){var a=this.w;this.w=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];
try{c()}catch(m){this.ma(m)}}}this.w=null};c.prototype.ma=function(a){this.ea(function(){throw a;})};b.prototype.W=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.wa),reject:a(this.Y)}};b.prototype.wa=function(a){if(a===this)this.Y(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.xa(a);else{var c;a:switch(typeof a){case "object":c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.va(a):this.ia(a)}};
b.prototype.va=function(a){var b=void 0;try{b=a.then}catch(k){this.Y(k);return}"function"==typeof b?this.ya(b,a):this.ia(a)};b.prototype.Y=function(a){this.ka(2,a)};b.prototype.ia=function(a){this.ka(1,a)};b.prototype.ka=function(a,b){if(0!=this.O)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.O);this.O=a;this.Z=b;this.qa()};b.prototype.qa=function(){if(null!=this.N){for(var a=this.N,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.N=null}};var e=new c;b.prototype.xa=
function(a){var b=this.W();a.R(b.resolve,b.reject)};b.prototype.ya=function(a,b){var c=this.W();try{a.call(b,c.resolve,c.reject)}catch(m){c.reject(m)}};b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(n){f(n)}}:b}var e,f,g=new b(function(a,b){e=a;f=b});this.R(d(a,e),d(c,f));return g};b.prototype.catch=function(a){return this.then(void 0,a)};b.prototype.R=function(a,b){function c(){switch(d.O){case 1:a(d.Z);break;case 2:b(d.Z);break;default:throw Error("Unexpected state: "+
d.O);}}var d=this;null==this.N?e.da(c):this.N.push(function(){e.da(c)})};b.resolve=function(a){return a instanceof b?a:new b(function(b){b(a)})};b.reject=function(a){return new b(function(b,c){c(a)})};b.race=function(a){return new b(function(c,d){for(var e=y(a),f=e.next();!f.done;f=e.next())b.resolve(f.value).R(c,d)})};b.all=function(a){var c=y(a),d=c.next();return d.done?b.resolve([]):new b(function(a,e){function f(b){return function(c){g[b]=c;k--;0==k&&a(g)}}var g=[],k=0;do g.push(void 0),k++,b.resolve(d.value).R(f(g.length-
1),e),d=c.next();while(!d.done)})};b.$jscomp$new$AsyncExecutor=function(){return new c};return b});function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}z("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var f in e)A(e,f)&&(a[f]=e[f])}return a}});
z("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});
z("WeakMap",function(a){function b(a){this.M=(f+=Math.random()+1).toString();if(a){ba();w();a=y(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}function c(a){A(a,e)||aa(a,e,{value:{}})}function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d.delete(b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(p){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!A(a,e))throw Error("WeakMap key fail: "+a);a[e][this.M]=b;return this};b.prototype.get=function(a){return A(a,e)?a[e][this.M]:void 0};b.prototype.has=function(a){return A(a,e)&&A(a[e],this.M)};b.prototype.delete=function(a){return A(a,e)&&A(a[e],this.M)?delete a[e][this.M]:!1};return b});
z("Map",function(a){function b(){var a={};return a.u=a.next=a.head=a}function c(a,b){var c=a.s;return fa(function(){if(c){for(;c.head!=a.s;)c=c.u;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}function d(a,b){var c;c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.L[c];if(d&&A(a.L,c))for(a=0;a<d.length;a++){var e=d[a];if(b!==b&&e.key!==e.key||b===e.key)return{id:c,list:d,index:a,j:e}}return{id:c,list:d,
index:-1,j:void 0}}function e(a){this.L={};this.s=b();this.size=0;if(a){a=y(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(y([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?
!1:!0}catch(q){return!1}}())return a;ba();w();var f=new WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.L[c.id]=[]);c.j?c.j.value=b:(c.j={next:this.s,u:this.s.u,head:this.s,key:a,value:b},c.list.push(c.j),this.s.u.next=c.j,this.s.u=c.j,this.size++);return this};e.prototype.delete=function(a){a=d(this,a);return a.j&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.L[a.id],a.j.u.next=a.j.next,a.j.next.u=a.j.u,a.j.head=null,this.size--,!0):!1};e.prototype.clear=
function(){this.L={};this.s=this.s.u=b();this.size=0};e.prototype.has=function(a){return!!d(this,a).j};e.prototype.get=function(a){return(a=d(this,a).j)&&a.value};e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};e.prototype.keys=function(){return c(this,function(a){return a.key})};e.prototype.values=function(){return c(this,function(a){return a.value})};e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});z("String.prototype.repeat",function(a){return a?a:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var d="";a;)if(a&1&&(d+=b),a>>>=1)b+=b;return d}});var B=0;try{var ja=Object.defineProperty({},"passive",{get:function(){B|=1}});window.addEventListener("test",null,ja)}catch(a){}
"innerHTML"in SVGElement.prototype&&(B|=4);"key"in KeyboardEvent.prototype&&(B|=8);var ka=navigator?navigator.userAgent:"",C=0;!/iPad|iPhone|iPod/.test(ka)||"MSStream"in window||(C|="standalone"in navigator?3:1);-1<ka.indexOf("Android")&&(C|=4);function la(a){a=a.target||window;a.na&&(a=a.na);return 3===a.nodeType?a.parentNode:a}
function D(a,b,c){if(!c||B&4)a.innerHTML=b;else for(ma||(ma=document.createElement("div")),ma.innerHTML="<svg>"+b+"</svg>",b=ma.firstChild;b.firstChild;)a.appendChild(b.firstChild)}var ma;function na(){}var oa=0,pa=!1,qa=[];window.addEventListener("message",ra);function ra(a){if(a.source===window&&"06526c5c-2dcc-4a4e-a86c-86f5dea6319d"===a.data){pa=!1;a=qa;qa=[];for(var b=0;b<a.length;b++)a[b]();oa++}}
function sa(a){pa||(pa=!0,window.postMessage("06526c5c-2dcc-4a4e-a86c-86f5dea6319d","*"));qa.push(a)}var ta=!1,ua=[],va,wa=0;if(!(C&2)){var Aa=new MutationObserver(xa);va=document.createTextNode("");Aa.observe(va,{characterData:!0})}function Ba(){xa();sa(na)}function xa(){for(;0<ua.length;){var a=ua;ua=[];for(var b=0;b<a.length;b++)a[b]();oa++}ta=!1}var Ca=!0,E,Da=[];function Ea(){var a=!E();if(Ca!==a)for(var b=0;b<Da.length;b++)Da[b](a)}
"undefined"!==typeof document.hidden?(E=function(){return document.hidden},document.addEventListener("visibilitychange",Ea)):"undefined"!==typeof document.webkitHidden?(E=function(){return document.webkitHidden},document.addEventListener("webkitvisibilitychange",Ea)):E=function(){return!0};Ca=!E();function Fa(){this.a=0;this.aa=this.J=this.K=null}Fa.prototype.write=function(a){this.a|=2;null===this.K&&(this.K=[]);this.K.push(a)};Fa.prototype.read=function(a){this.a|=4;null===this.J&&(this.J=[]);this.J.push(a)};
function Ga(){this.D=[]}Ga.prototype.add=function(a){this.D.push(a)};Ga.prototype.run=function(){for(var a=0;a<this.D.length;a++)if((0,this.D[a])()){var b=this.D.pop();b&&(this.D[a--]=b)}};var Ha=new Ga;function F(a,b,c,d,e){this.a=a;this.b=e;this.l=b;this.o=0;this.c=c;this.h=null;this.F=d}u=F.prototype;u.key=function(a){this.a|=256;this.o=a;return this};u.className=function(a){this.F=a;return this};u.style=function(a){null===this.c?(this.a|=512,this.c={B:null,style:a,m:null}):this.c.style=a;return this};
u.m=function(a){null===this.c?(this.a|=512,this.c={B:null,style:null,m:a}):this.c.m=a;return this};u.H=function(a){null===this.c?(this.a|=512,this.c={B:a,style:null,m:null}):this.c.B=a;return this};
u.children=function(){var a=arguments,b=0,c=null;if(1===a.length)c=a[0],"object"===typeof c?null!==c&&(c.constructor===Array?1<c.length?b=64:1===c.length?(b=32,c=c[0]):c=null:b=32):b=16;else{var d,e=0,f=0,g;for(d=0;d<a.length;d++)g=a[d],null!==g&&(g.constructor===Array?0<g.length&&(f+=g.length,e++,c=g):(f++,e++,c=g));if(0<e)if(1===(e|f))"object"===typeof c?c.constructor===Array?1<f?b=64:(b=32,c=c[0]):b=32:b=16;else for(b=64,c=Array(f),d=f=0;d<a.length;d++)if(g=a[d],"object"===typeof g){if(null!==
g)if(g.constructor===Array)for(e=0;e<g.length;e++)c[f++]=g[e];else c[f++]=g,g.a&256||(g.o=d)}else g=c[f++]=new F(1,null,null,null,g),g.o=d}this.a|=b;this.b=c;return this};u.value=function(a){this.b=a;return this};u.checked=function(a){this.b=a;return this};u.autofocus=function(a){a&&(this.a|=524288);return this};function G(a,b){return new F(2,a,null,void 0===b?null:b,null)}function H(a){return a.a&12?H(a.b):a.h}function Ia(a,b,c){c||(c="");b&8192?a.setAttribute("class",c):a.className=c}
function Ja(a,b,c){var d,e,f;if(null===b){if(null!==c)for(f=a.style,d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e]}else if(null===c)for(f=a.style,d=Object.keys(b),a=0;a<d.length;a++)f[d[a]]="";else{f=a.style;var g=0;d=Object.keys(b);for(a=0;a<d.length;a++){e=d[a];var k=c[e];void 0!==k?(b[e]!==k&&(f[e]=k),g++):f[e]=""}d=Object.keys(c);for(a=0;g<d.length&&a<d.length;)e=d[a++],b.hasOwnProperty(e)||(f[e]=c[e],g++)}}
function I(a,b,c,d){if(void 0===d){if(!(b&8192)&&6<c.length)switch(c){case "acceptCharset":c="accept-charset";break;case "htmlFor":c="for"}a.removeAttribute(c)}else if(b&8192){if(5<c.length&&120===c.charCodeAt(0)&&(58===c.charCodeAt(3)||58===c.charCodeAt(5))){if(109===c.charCodeAt(1)&&108===c.charCodeAt(2)){a.setAttributeNS("http://www.w3.org/XML/1998/namespace",c,d);return}if(108===c.charCodeAt(1)&&105===c.charCodeAt(2)&&110===c.charCodeAt(3)&&107===c.charCodeAt(4)){a.setAttributeNS("http://www.w3.org/1999/xlink",
c,d);return}}a.setAttribute(c,d)}else 5<c.length&&45===c.charCodeAt(4)?a.setAttribute(c,d):a[c]=d}
function Ka(a,b,c,d){var e,f,g;if(null===c){if(null!==d)for(f=Object.keys(d),e=0;e<f.length;e++)g=f[e],I(a,b,g,d[g])}else if(null===d)for(f=Object.keys(c),e=0;e<f.length;e++)I(a,b,f[e]);else{var k=0;f=Object.keys(c);for(e=0;e<f.length;e++){g=f[e];var m=d[g];void 0===m?I(a,b,g):(c[g]!==m&&I(a,b,g,m),k++)}f=Object.keys(d);for(e=0;k<f.length&&e<f.length;)g=f[e++],c.hasOwnProperty(g)||(I(a,b,g,d[g]),k++)}}var La=B&1?{capture:!0,passive:!0}:!0,Ma=B&1?{passive:!0}:!1;
function Na(a){return a&2?a&1?La:Ma:a&1?!0:!1}function Oa(a){if("function"===typeof a)J(a.i);else for(var b=0;b<a.length;b++){var c=a[b];c&&J(c.i)}}function Pa(a){if("function"===typeof a)L(a.i);else for(var b=0;b<a.length;b++){var c=a[b];c&&L(c.i)}}var Qa;function M(a){var b=a.a;if(b&2){if(b&96){var c=a.b;if(b&64)for(var d=0;d<c.length;d++)M(c[d]);else M(c)}b&512&&a.c.m&&Oa(a.c.m)}else b&12&&(b&8&&(b=a.h,b.g|=1),M(a.b))}
function N(a,b){var c=a.a;if(c&2){if(c&96){var d=a.b;c&64?O(d,b):N(d,b)}c&512&&a.c.m&&Pa(a.c.m)}else c&12&&(c&262144&&b&4&&a.l(a.b,a.c)?b&1&&N(a.b,b&-5):(N(a.b,b),c&8&&b&1&&(a=a.h,a.g&=-2)))}function O(a,b){for(var c=0;c<a.length;c++)N(a[c],b)}
function P(a,b,c,d){var e=b.a;if(e&108)if(e&96)if(a=b.h,b=b.b,e&64)for(e=0;e<b.length;e++)P(a,b[e],c,d);else P(a,b,c,d);else if(e&8){var e=b.h,f=b.b;e.g&6|d&16?(b=b.b=e.C(),Q(a,f,b,c,d),e.g&=-7):P(a,f,c,d)}else if(e&65536){var e=b.l,f=b.h,g=e.select(f,b.c,c),k=b.b;f===g?P(a,k,c,d):(b.b=e.C(),b.h=g,Q(a,k,b.b,c,d))}else e&131072&&(d&32&&(b.h=Object.assign({},c,b.c)),c=b.h),P(a,b.b,c,d)}function R(a,b,c){a.removeChild(H(b));N(b,c|4)}
function S(a,b,c){var d=b.a,e=null,f;if(d&3){if(d&1)a=document.createTextNode(b.b);else if(d&25600?d&16384?a=b.l.createElement():d&8192?a=document.createElementNS("http://www.w3.org/2000/svg",b.l):d&2048?a=document.createElement("textarea"):(a=document.createElement("input"),a.type=b.l):a=document.createElement(b.l),d&524288&&(Qa=a),null!==b.F&&Ia(a,d,b.F),d&512&&(e=b.c,null!==e.B&&Ka(a,d,null,e.B),null!==e.style&&Ja(a,null,e.style),null!==e.m&&(a.ca=e.m)),e=b.b,null!==e)if(d&80)if(d&16)a.textContent=
e;else for(d=0;d<e.length;d++)f=e[d],f=S(a,f,c),a.insertBefore(f,null);else d&32?(f=S(a,e,c),a.insertBefore(f,null)):d&1024?(c=a,"string"===typeof e?c.value=e:c.checked=e):e&&D(a,e,!!(d&8192));e=a}else d&8?(d=e=new b.l(b.c),d=b.b=d.C(),a=S(a,d,c)):d&262144?(d=b.l,(d=d(null,b.c))?(Q(a,d,b.b,c,32),a=H(b.b)):a=S(a,b.b,c)):(d&196608?d&65536?(d=b.l,b.h=d.select(null,b.c,c),b.b=d.C()):c=e=Object.assign({},c,b.c):b.b=b.l(b.c),a=S(a,b.b,c));b.h=e;return a}
function T(a,b,c,d,e){d=S(a,c,d);a.insertBefore(d,b);e&1&&M(c)}function U(a,b){return a.o===b.o&&!((a.a^b.a)&256)}
function Q(a,b,c,d,e){if(b===c)P(a,c,d,e);else{var f,g=c.a;if(0===((b.a^c.a)&523535)&&b.l===c.l&&b.o===c.o)if(f=c.h=b.h,g&3)if(g&1)b.b!==c.b&&(f.nodeValue=c.b);else{b.F!==c.F&&Ia(f,g,c.F);a=b.a;if((a|g)&512){var k,m=null,p=null,l=null,q=null,t=null,h=null;a&512&&(k=b.c,m=k.B,l=k.style,t=k.m);g&512&&(k=c.c,p=k.B,q=k.style,h=k.m);m!==p&&Ka(f,g,m,p);l!==q&&Ja(f,l,q);if(t!==h){if(e&1)if(k=t,m=h,null===k)null!==m&&Oa(m);else if(null===m)Pa(k);else if("function"===typeof k)Oa(m),L(k.i);else if("function"===
typeof m)for(J(m.i),p=0;p<k.length;p++)(l=k[p])&&L(l.i);else{for(p=0;p<k.length&&p<m.length;)l=k[p],q=m[p++],l!==q&&(q&&J(q.i),l&&L(l.i));for(;p<m.length;)(l=m[p++])&&J(l.i);for(;p<k.length;)(l=k[p++])&&L(l.i)}f.ca=h}}if(b.b!==c.b){b=b.b;c=c.b;var h=0,n,r;if(null===b)if(g&80)if(g&16)f.textContent=c;else{do T(f,null,c[h++],d,e);while(h<c.length)}else g&32?T(f,null,c,d,e):g&1024?"string"===typeof c?f.value=c:f.checked=c:c&&D(f,c,!!(g&8192));else if(null===c)a&144?f.textContent="":a&64?(f.textContent=
"",O(b,e|4)):a&32&&R(f,b,e);else if(a&144)if(g&144)g&16?(n=f.firstChild)?n.nodeValue=c:f.textContent=c:c?D(f,c,!!(g&8192)):f.textContent="";else if(f.textContent="",g&64){do T(f,null,c[h++],d,e);while(h<c.length)}else T(f,null,c,d,e);else if(a&64)if(g&144)g&16||!c?f.textContent=c:D(f,c,!!(g&8192)),O(b,e|4);else if(g&64){g=k=0;m=b.length-1;p=c.length-1;h=b[k];a=c[g];var l=b[m],q=c[p],Z;a:for(;;){for(;U(h,a);){Q(f,h,a,d,e);k++;g++;if(k>m||g>p)break a;h=b[k];a=c[g]}for(;U(l,q);){Q(f,l,q,d,e);m--;p--;
if(k>m||g>p)break a;l=b[m];q=c[p]}if(U(l,a))Q(f,l,a,d,e),f.insertBefore(H(a),H(h)),m--,g++,l=b[m],a=c[g];else if(U(h,q))Q(f,h,q,d,e),h=p+1,h=h<c.length?H(c[h]):null,f.insertBefore(H(q),h),k++,p--,h=b[k],q=c[p];else break}if(k>m){if(g<=p){h=p+1;h=h<c.length?H(c[h]):null;do T(f,h,c[g++],d,e);while(g<=p)}}else if(g>p){do R(f,b[k++],e);while(k<=m)}else{var ya=m-k+1,h=p-g+1;a=Array(h).fill(-1);var za=!1,x=0,K=0;if(4>=h||16>=ya*h)for(l=k;l<=m;l++){if(t=b[l],K<h)for(q=g;q<=p;q++)if(Z=c[q],U(t,Z)){a[q-g]=
l;x>q?za=!0:x=q;Q(f,t,Z,d,e);K++;b[l]=null;break}}else{for(l=g;l<=p;l++)t=c[l],t.a&256?(void 0===n&&(n=new Map),n.set(t.o,l)):(void 0===r&&(r=new Map),r.set(t.o-k,l));for(l=k;l<=m;l++)t=b[l],K<h&&(q=t.a&256?n?n.get(t.o):void 0:r?r.get(t.o-k):void 0,void 0!==q&&(Z=c[q],a[q-g]=l,x>q?za=!0:x=q,Q(f,t,Z,d,e),K++,b[l]=null))}if(ya===b.length&&0===K)for(f.textContent="",O(b,e|4);g<h;)T(f,null,c[g++],d,e);else{for(l=ya-K;0<l;)t=b[k++],null!==t&&(R(f,t,e),l--);if(za){r=a.slice(0);n=[];n.push(0);b=0;for(k=
a.length;b<k;b++)if(-1!==a[b])if(m=n[n.length-1],a[m]<a[b])r[b]=m,n.push(b);else{m=0;for(p=n.length-1;m<p;)l=(m+p)/2|0,a[n[l]]<a[b]?m=l+1:p=l;a[b]<a[n[m]]&&(0<m&&(r[b]=n[m-1]),n[m]=b)}m=n.length;for(p=n[m-1];0<m--;)n[m]=p,p=r[p];q=n.length-1;for(l=h-1;0<=l;l--)-1===a[l]?(x=l+g,t=c[x],h=x+1,h=h<c.length?H(c[h]):null,T(f,h,t,d,e)):0>q||l!==n[q]?(x=l+g,t=c[x],h=x+1,h=h<c.length?H(c[h]):null,f.insertBefore(H(t),h)):q--}else if(K!==h)for(l=h-1;0<=l;l--)-1===a[l]&&(x=l+g,t=c[x],h=x+1,h=h<c.length?H(c[h]):
null,T(f,h,t,d,e))}}}else{n=-1;h=0;do{r=b[h];if(U(r,c)){Q(f,r,c,d,e);n=h;break}h++}while(h<b.length);if(-1<n){for(h=0;h<n;h++)R(f,b[h],e);for(h=n+1;h<b.length;h++)R(f,b[h],e)}else f.textContent="",O(b,e|4),T(f,null,c,d,e)}else if(a&32)if(g&144)g&16||!c?f.textContent=c:D(f,c,!!(g&8192)),N(b,e|4);else if(g&64){n=-1;h=0;do{r=c[h];if(U(b,r)){Q(f,b,r,d,e);n=h;break}h++}while(h<c.length);if(-1<n){r=H(b);for(h=0;h<n;h++)T(f,r,c[h],d,e);h=n+1}else R(f,b,e),h=0;for(;h<c.length;h++)T(f,null,c[h],d,e)}else Q(f,
b,c,d,e);else"string"===typeof c?f.value!==c&&(f.value=c):f.checked=c}}else g&8?(n=f,f=c.c,r=0,n.V(b.c,f)&&(r=1),n.H=f,f=b.b,r|n.g&6|e&16?(r=c.b=n.C(),Q(a,f,r,d,e),n.g&=-7):(c.b=b.b,P(a,f,d,e))):(n=c.l,g&458752?g&65536?(n=c.l,r=b.h,f=n.select(r,c.c,d),c.h=f,r===f?(c.b=b.b,P(a,c,d,e)):(c.b=n.C(),Q(a,b.b,c.b,d,e))):(g&131072&&(e&32||b.c!==c.c?(e|=32,d=c.h=Object.assign({},d,c.c)):d=c.h=b.h),Q(a,b.b,c.b,d,e)):e&16||b!==c&&(!n.V&&b.c!==c.c||n.V&&n.V(b.c,c.c))?(r=b.b,n=c.b=n(c.c),Q(a,r,n,d,e)):(c.b=b.b,
P(a,c.b,d,e)));else f=S(a,c,d),a.replaceChild(f,H(b)),e&1&&(N(b,e|4),M(c))}}var V=[],Ra={},Sa=!1,Ta=0;function Ua(){if(Sa){Sa=!1;for(var a=0;a<V.length;a++){var b=V[a],c=b.fa,d=b.ga,e=Ta|b.$|1;if(b.U){var f=b.X;f?(f.constructor!==F&&(f=new F(1,null,null,null,"")),d?Q(c,d,f,Ra,e):(T(c,null,f,Ra,1),C&1&&(c.onclick=na)),b.ga=f):d&&(c.removeChild(H(d)),N(d,5),c=V.pop(),c!==b&&V.length&&(V[V.indexOf(b)]=c));b.X=null;b.U=!1}else d&&P(c,d,Ra,e|8);b.$=0}}}
function Va(a,b){var c=0,c=void 0===c?0:c,d;a:{for(d=0;d<V.length;d++){var e=V[d];if(e.fa===b){d=e;break a}}d=void 0}d?(d.X=a,d.U=!0,d.$=c):(d={fa:b,ga:null,X:a,U:!0,$:c},V.push(d));Wa();Xa()}function Wa(a){Ta=void 0===a?0:a;Sa||(Sa=!0,Ya(),Za.write(Ua))}var $a=!1,ab=new Fa,Za=new Fa;function bb(){$a&&requestAnimationFrame(Xa)}function Ya(){if(!$a){$a=!0;var a=bb;ta||(ta=!0,C&2?Promise.resolve().then(Ba):(wa^=1,va.nodeValue=wa?"1":"0"));ua.push(a)}}
function Xa(){var a,b;$a=!1;var c=Za;Za=ab;ab=c;Ha.run();do{for(;c.a&4;)for(c.a&=-5,a=c.J,c.J=null,b=0;b<a.length;b++)a[b]();for(;c.a&3;){if(c.a&2)for(c.a&=-3,a=c.K,c.K=null,b=0;b<a.length;b++)a[b]();c.a&1&&(c.a&=-2,Wa(void 0),Xa())}}while(c.a&7);for(Ca&&cb.run();0!==(c.a&8);)for(c.a&=-9,a=c.aa,c.aa=null,b=0;b<a.length;b++)a[b]();a=Qa;Qa=null;a&&a.focus();(0<db||0<cb.D.length)&&Ya();oa++}Da.push(function(a){a&&(0<db||0<cb.D.length)&&Ya()});var cb=new Ga,db=0;
function eb(a,b,c,d){this.v=this.I=null;this.i=a;this.g=b;this.ra=c;this.filter=void 0===d?-1:d}eb.prototype.cancel=function(){this.g&1||(this.g|=1,this.g&2||fb(this))};function fb(a){a.I?a.I.v=a.v:a.i.A=a.v;a.v&&(a.v.I=a.I);0===--a.i.S&&a.i.T()}function W(){this.S=0;this.A=null}W.prototype.P=function(){};W.prototype.T=function(){};W.prototype.subscribe=function(a,b,c){a=new eb(this,void 0===c?0:c,a,b);this.A&&(this.A.I=a,a.v=this.A);this.A=a;0===this.S++&&this.P();return a};
function J(a){0===a.S++&&a.P()}function L(a){0===--a.S&&a.T()}function gb(a,b,c){b.currentTarget=a.target;for(var d=0;d<a.ja.length;d++){var e=a.ja[d];if(e.g&c&&(e(b),b.a&2))break}}function hb(a,b,c){W.call(this);this.g=a;this.name=b;this.ha=c;this.ba=this.oa.bind(this);this.G=!1}ga(hb,W);
hb.prototype.oa=function(a){var b;if(this.A)for(var c=b=new this.ha(this,0,a,la(a),a.timeStamp,a.type),d=this.A;d;)if(d.g|=2,d.ra(c,void 0),d.g&=-3,d.g&1){var e=d,d=d.v;fb(e)}else d=d.v;if(!(b&&b.a&3)){d=la(a);for(c=[];d;){var e=void 0,f=d,g=f.ca;if(g){if("function"===typeof g)g.i===this&&(e=[g]);else for(var k=0;k<g.length;k++){var m=g[k];m&&m.i===this&&(e?e.push(m):e=[m])}e&&c.push({target:f,ja:e})}d=d.parentElement}if(0<c.length)a:{b||(b=new this.ha(this,0,a,la(a),a.timeStamp,a.type)),d=b;e=!!(this.g&
4);for(f=c.length-1;0<=f;)if(g=c[f],g.target!==d.target){if(gb(c[f--],d,1),d.a&1)break a}else break;g=c[0];if(g.target===d.target){d.a|=64;gb(g,d,3);if(d.a&1)break a;d.a&=-65;f=1}else f=0;if(e)for(d.a|=128;f<c.length&&!(gb(c[f++],d,2),d.a&1););}b&&b.a&4&&a.preventDefault()}};hb.prototype.P=function(){this.G?this.G=!1:(W.prototype.P.call(this),document.addEventListener(this.name,this.ba,Na(this.g)))};
hb.prototype.T=function(){var a=this;this.G||(this.G=!0,sa(function(){a.G&&(document.removeEventListener(a.name,a.ba,Na(a.g)),W.prototype.T.call(a),a.G=!1)}))};function X(a,b,c,d,e,f){this.i=a;this.a=b;this.f=c;this.currentTarget=this.target=d;this.timeStamp=e;this.type=f}X.prototype.stopPropagation=function(){this.a|=1};X.prototype.stopImmediatePropagation=function(){this.a|=3};X.prototype.preventDefault=function(){this.a|=4};
v.Object.defineProperties(X.prototype,{defaultPrevented:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&4)}},bubbles:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&8)}},cancelable:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&16)}},isTrusted:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&32)}},eventPhase:{configurable:!0,enumerable:!0,get:function(){return this.a&64?2:this.a&128?3:1}}});X.prototype.CAPTURING_PHASE=1;
X.prototype.AT_TARGET=2;X.prototype.BUBBLING_PHASE=3;function ib(a){X.apply(this,arguments)}ga(ib,X);v.Object.defineProperties(ib.prototype,{detail:{configurable:!0,enumerable:!0,get:function(){return this.f.detail}},view:{configurable:!0,enumerable:!0,get:function(){return this.f.view}}});function jb(a){ib.apply(this,arguments)}ga(jb,ib);jb.prototype.getModifierState=function(a){return this.f.getModifierState(a)};
v.Object.defineProperties(jb.prototype,{altKey:{configurable:!0,enumerable:!0,get:function(){return this.f.altKey}},button:{configurable:!0,enumerable:!0,get:function(){return this.f.button}},buttons:{configurable:!0,enumerable:!0,get:function(){return this.f.buttons}},clientX:{configurable:!0,enumerable:!0,get:function(){return this.f.clientX}},clientY:{configurable:!0,enumerable:!0,get:function(){return this.f.clientY}},ctrlKey:{configurable:!0,enumerable:!0,get:function(){return this.f.ctrlKey}},
fromElement:{configurable:!0,enumerable:!0,get:function(){return this.f.fromElement}},layerX:{configurable:!0,enumerable:!0,get:function(){return this.f.layerX}},layerY:{configurable:!0,enumerable:!0,get:function(){return this.f.layerY}},metaKey:{configurable:!0,enumerable:!0,get:function(){return this.f.metaKey}},sa:{configurable:!0,enumerable:!0,get:function(){return this.f.sa}},ta:{configurable:!0,enumerable:!0,get:function(){return this.f.ta}},offsetX:{configurable:!0,enumerable:!0,get:function(){return this.f.offsetX}},
offsetY:{configurable:!0,enumerable:!0,get:function(){return this.f.offsetY}},pageX:{configurable:!0,enumerable:!0,get:function(){return this.f.pageX}},pageY:{configurable:!0,enumerable:!0,get:function(){return this.f.pageY}},relatedTarget:{configurable:!0,enumerable:!0,get:function(){return this.f.relatedTarget}},screenX:{configurable:!0,enumerable:!0,get:function(){return this.f.screenX}},screenY:{configurable:!0,enumerable:!0,get:function(){return this.f.screenY}},shiftKey:{configurable:!0,enumerable:!0,
get:function(){return this.f.shiftKey}},toElement:{configurable:!0,enumerable:!0,get:function(){return this.f.toElement}},which:{configurable:!0,enumerable:!0,get:function(){return this.f.which}},x:{configurable:!0,enumerable:!0,get:function(){return this.f.x}},y:{configurable:!0,enumerable:!0,get:function(){return this.f.y}}});var kb=new hb(5,"click",jb);function lb(a){a.i=kb;a.g=2;return a}function mb(a){this.g=0;this.H=a}mb.prototype.V=function(a,b){return a!==b};mb.prototype.U=function(){};
function Y(a,b){return new F(a.prototype.C?8:4,a,b,null,null)}function nb(){mb.apply(this,[].concat(arguments instanceof Array?arguments:ha(y(arguments))));var a=this;this.ua=lb(function(){console.log("Click",a.H)})}ga(nb,mb);nb.prototype.C=function(){return G("td","TableCell").m(this.ua).children(this.H)};
function ob(a){var b=a.props,c=a.id;a=a.active;var d=Array(b.length+1);d[0]=Y(nb,"#"+c);for(var e=0;e<b.length;e++)d[e+1]=Y(nb,b[e]);return G("tr",a?"TableRow active":"TableRow").H({"data-id":c}).children(d)}function pb(a){a=a.items;for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];b[c]=Y(ob,d).key(d.id)}return G("table","Table").children(G("tbody").children(b))}
function qb(a){var b=a.time;return G("div","AnimBox").H({"data-id":a.id}).style({background:"rgba(0,0,0,"+(.5+b%10/10)+")",borderRadius:b%10+"px"})}function rb(a){a=a.items;for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];b[c]=Y(qb,d).key(d.id)}return G("div","Anim").children(b)}function sb(a){return G("li","TreeLeaf").children(a.id)}
function tb(a){for(var b=Array(a.children.length),c=0;c<a.children.length;c++){var d=a.children[c];b[c]=(d.container?Y(tb,d):Y(sb,d)).key(d.id)}return G("ul","TreeNode").children(b)}function ub(a){return G("div","Tree").children(Y(tb,a.root))}function vb(a){if(!a)return G("div","Main");switch(a.location){case "table":return G("div","Main").children(Y(pb,a.table));case "anim":return G("div","Main").children(Y(rb,a.anim));default:return G("div","Main").children(Y(ub,a.tree))}}
uibench.init("ivi [fc]","0.7.0");document.addEventListener("DOMContentLoaded",function(){var a=document.querySelector("#App");Va(Y(vb,void 0),a);uibench.run(function(b){Va(Y(vb,b),a)},function(b){Va(G("pre").children(JSON.stringify(b,void 0,2)),a)})});}).call(this);

//# sourceMappingURL=bundle.js.map
