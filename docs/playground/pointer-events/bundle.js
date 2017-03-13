(function(){'use strict';var u,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},v="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ba(){ba=function(){};v.Symbol||(v.Symbol=ca)}var da=0;function ca(a){return"jscomp_symbol_"+(a||"")+da++}
function w(){ba();var a=v.Symbol.iterator;a||(a=v.Symbol.iterator=v.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(this)}});w=function(){}}function ea(a){var b=0;return fa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function fa(a){w();a={next:a};a[v.Symbol.iterator]=function(){return this};return a}function x(a){w();var b=a[Symbol.iterator];return b?b.call(a):ea(a)}
function z(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}function ga(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
function ha(a,b){w();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}function A(a,b){if(b){var c=v;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
A("Array.prototype.keys",function(a){return a?a:function(){return ha(this,function(a){return a})}});
A("Promise",function(a){function b(a){this.Y=0;this.ia=void 0;this.X=[];var b=this.da();try{a(b.resolve,b.reject)}catch(h){b.reject(h)}}function c(){this.C=null}if(a)return a;c.prototype.ma=function(a){null==this.C&&(this.C=[],this.wa());this.C.push(a)};c.prototype.wa=function(){var a=this;this.na(function(){a.Ba()})};var d=v.setTimeout;c.prototype.na=function(a){d(a,0)};c.prototype.Ba=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];
try{c()}catch(k){this.xa(k)}}}this.C=null};c.prototype.xa=function(a){this.na(function(){throw a;})};b.prototype.da=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.Ia),reject:a(this.ha)}};b.prototype.Ia=function(a){if(a===this)this.ha(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.Ja(a);else{var c;a:switch(typeof a){case "object":c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.Ha(a):this.sa(a)}};
b.prototype.Ha=function(a){var b=void 0;try{b=a.then}catch(h){this.ha(h);return}"function"==typeof b?this.Ka(b,a):this.sa(a)};b.prototype.ha=function(a){this.va(2,a)};b.prototype.sa=function(a){this.va(1,a)};b.prototype.va=function(a,b){if(0!=this.Y)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.Y);this.Y=a;this.ia=b;this.Ca()};b.prototype.Ca=function(){if(null!=this.X){for(var a=this.X,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.X=null}};var e=new c;b.prototype.Ja=
function(a){var b=this.da();a.$(b.resolve,b.reject)};b.prototype.Ka=function(a,b){var c=this.da();try{a.call(b,c.resolve,c.reject)}catch(k){c.reject(k)}};b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(P){f(P)}}:b}var e,f,g=new b(function(a,b){e=a;f=b});this.$(d(a,e),d(c,f));return g};b.prototype.catch=function(a){return this.then(void 0,a)};b.prototype.$=function(a,b){function c(){switch(d.Y){case 1:a(d.ia);break;case 2:b(d.ia);break;default:throw Error("Unexpected state: "+
d.Y);}}var d=this;null==this.X?e.ma(c):this.X.push(function(){e.ma(c)})};b.resolve=function(a){return a instanceof b?a:new b(function(b){b(a)})};b.reject=function(a){return new b(function(b,c){c(a)})};b.race=function(a){return new b(function(c,d){for(var e=x(a),f=e.next();!f.done;f=e.next())b.resolve(f.value).$(c,d)})};b.all=function(a){var c=x(a),d=c.next();return d.done?b.resolve([]):new b(function(a,e){function f(b){return function(c){h[b]=c;g--;0==g&&a(h)}}var h=[],g=0;do h.push(void 0),g++,b.resolve(d.value).$(f(h.length-
1),e),d=c.next();while(!d.done)})};b.$jscomp$new$AsyncExecutor=function(){return new c};return b});function B(a,b){return Object.prototype.hasOwnProperty.call(a,b)}A("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var f in e)B(e,f)&&(a[f]=e[f])}return a}});
A("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});
A("WeakMap",function(a){function b(a){this.S=(f+=Math.random()+1).toString();if(a){ba();w();a=x(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}function c(a){B(a,e)||aa(a,e,{value:{}})}function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d.delete(b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(n){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!B(a,e))throw Error("WeakMap key fail: "+a);a[e][this.S]=b;return this};b.prototype.get=function(a){return B(a,e)?a[e][this.S]:void 0};b.prototype.has=function(a){return B(a,e)&&B(a[e],this.S)};b.prototype.delete=function(a){return B(a,e)&&B(a[e],this.S)?delete a[e][this.S]:!1};return b});
A("Map",function(a){function b(){var a={};return a.w=a.next=a.head=a}function c(a,b){var c=a.v;return fa(function(){if(c){for(;c.head!=a.v;)c=c.w;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}function d(a,b){var c;c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.R[c];if(d&&B(a.R,c))for(a=0;a<d.length;a++){var e=d[a];if(b!==b&&e.key!==e.key||b===e.key)return{id:c,list:d,index:a,l:e}}return{id:c,list:d,
index:-1,l:void 0}}function e(a){this.R={};this.v=b();this.size=0;if(a){a=x(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(x([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?
!1:!0}catch(l){return!1}}())return a;ba();w();var f=new WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.R[c.id]=[]);c.l?c.l.value=b:(c.l={next:this.v,w:this.v.w,head:this.v,key:a,value:b},c.list.push(c.l),this.v.w.next=c.l,this.v.w=c.l,this.size++);return this};e.prototype.delete=function(a){a=d(this,a);return a.l&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.R[a.id],a.l.w.next=a.l.next,a.l.next.w=a.l.w,a.l.head=null,this.size--,!0):!1};e.prototype.clear=
function(){this.R={};this.v=this.v.w=b();this.size=0};e.prototype.has=function(a){return!!d(this,a).l};e.prototype.get=function(a){return(a=d(this,a).l)&&a.value};e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};e.prototype.keys=function(){return c(this,function(a){return a.key})};e.prototype.values=function(){return c(this,function(a){return a.value})};e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});A("String.prototype.repeat",function(a){return a?a:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var d="";a;)if(a&1&&(d+=b),a>>>=1)b+=b;return d}});var C=0;try{var ia=Object.defineProperty({},"passive",{get:function(){C|=1}});window.addEventListener("test",null,ia)}catch(a){}
"innerHTML"in SVGElement.prototype&&(C|=4);"key"in KeyboardEvent.prototype&&(C|=8);var ja=navigator?navigator.userAgent:"",ka=0;!/iPad|iPhone|iPod/.test(ja)||"MSStream"in window||(ka|="standalone"in navigator?3:1);-1<ja.indexOf("Android")&&(ka|=4);function la(a){a=a.target||window;a.ya&&(a=a.ya);return 3===a.nodeType?a.parentNode:a}
function ma(a,b,c){if(!c||C&4)a.innerHTML=b;else for(na||(na=document.createElement("div")),na.innerHTML="<svg>"+b+"</svg>",b=na.firstChild;b.firstChild;)a.appendChild(b.firstChild)}var na;function oa(){}var pa=0,qa=!1,ra=[];window.addEventListener("message",sa);function sa(a){if(a.source===window&&"06526c5c-2dcc-4a4e-a86c-86f5dea6319d"===a.data){qa=!1;a=ra;ra=[];for(var b=0;b<a.length;b++)a[b]();pa++}}
function ta(a){qa||(qa=!0,window.postMessage("06526c5c-2dcc-4a4e-a86c-86f5dea6319d","*"));ra.push(a)}var ua=!1,va=[],wa,xa=0;if(!(ka&2)){var za=new MutationObserver(ya);wa=document.createTextNode("");za.observe(wa,{characterData:!0})}function Aa(){ya();ta(oa)}function ya(){for(;0<va.length;){var a=va;va=[];for(var b=0;b<a.length;b++)a[b]();pa++}ua=!1}var Ba=!0,Ca,Da=[];function Ga(){var a=!Ca();if(Ba!==a)for(var b=0;b<Da.length;b++)Da[b](a)}
"undefined"!==typeof document.hidden?(Ca=function(){return document.hidden},document.addEventListener("visibilitychange",Ga)):"undefined"!==typeof document.webkitHidden?(Ca=function(){return document.webkitHidden},document.addEventListener("webkitvisibilitychange",Ga)):Ca=function(){return!0};Ba=!Ca();function Ha(){this.a=0;this.ka=this.N=this.O=null}Ha.prototype.write=function(a){this.a|=2;null===this.O&&(this.O=[]);this.O.push(a)};
Ha.prototype.read=function(a){this.a|=4;null===this.N&&(this.N=[]);this.N.push(a)};function Ia(){this.A=[]}Ia.prototype.add=function(a){this.A.push(a)};function Ja(a){for(var b=0;b<a.A.length;b++)(0,a.A[b])()&&(b===a.A.length?a.A.pop():a.A[b--]=a.A.pop())}var Ka=new Ia;function D(a,b,c,d,e){this.a=a;this.s=b;this.o=0;this.h=c;this.J=d;this.u=this.G=null;this.b=e;this.j=null}u=D.prototype;u.key=function(a){this.a=null===a?this.a&-257:this.a|256;this.o=a;return this};
u.className=function(a){this.J=a;return this};u.style=function(a){this.G=a;return this};u.L=function(a){this.u=a;return this};u.g=function(a){this.h=a;return this};
u.children=function(a){if("object"===typeof a){if(null!==a)if(a.constructor===Array){this.a|=64;a:for(var b=0;b<a.length;b++){var c=a[b];if("object"===typeof c){if(null===c||c.constructor===Array){a=La(a,b);break a}c.constructor!==D&&(c=Ma(""),a[b]=c);c.a&256||(c.o=b)}else if("string"===typeof c||"number"===typeof c)c=Ma(c),c.o=b,a[b]=c;else{a=La(a,b);break a}}}else a.constructor===D?(this.a|=32,a.a&256||(a.o=0)):(this.a|=16,a="")}else this.a|=16;this.b=a;return this};
u.value=function(a){this.b=a;return this};u.checked=function(a){this.b=a;return this};u.autofocus=function(a){a&&(this.a|=262144);return this};function Ma(a){return new D(1,null,null,null,a)}function E(a,b){return new D(2,a,null,void 0===b?null:b,null)}function F(a,b){return new D(a.prototype.D?8:4,a,b,null,null)}
function La(a,b){for(var c=a.slice(0,b);b<a.length;b++){var d=a[b];if("object"===typeof d){if(null!==d)if(d.constructor===Array)for(var e=0;e<d.length;e++)c.push(d[e]);else d.constructor===D||(d=Ma("")),d.a&256||(d.o=b),c.push(d)}else d=Ma(d),d.o=b,c.push(d)}return c}function G(a){return a.a&12?G(a.b):a.j}function Na(a,b,c){c||(c="");b&4096?a.setAttribute("class",c):a.className=c}
function Oa(a,b,c){var d,e,f;if(null===b){if(null!==c)for(f=a.style,d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e]}else if(null===c)for(f=a.style,d=Object.keys(b),a=0;a<d.length;a++)f[d[a]]="";else{f=a.style;var g=0;d=Object.keys(b);for(a=0;a<d.length;a++){e=d[a];var h=c[e];void 0!==h?(b[e]!==h&&(f[e]=h),g++):f[e]=""}d=Object.keys(c);for(a=0;g<d.length&&a<d.length;)e=d[a++],b.hasOwnProperty(e)||(f[e]=c[e],g++)}}
function Pa(a,b,c,d){if(void 0===d){if(!(b&4096)&&6<c.length)switch(c){case "acceptCharset":c="accept-charset";break;case "htmlFor":c="for"}a.removeAttribute(c)}else if(b&4096){if(5<c.length&&120===c.charCodeAt(0)&&(58===c.charCodeAt(3)||58===c.charCodeAt(5))){if(109===c.charCodeAt(1)&&108===c.charCodeAt(2)){a.setAttributeNS("http://www.w3.org/XML/1998/namespace",c,d);return}if(108===c.charCodeAt(1)&&105===c.charCodeAt(2)&&110===c.charCodeAt(3)&&107===c.charCodeAt(4)){a.setAttributeNS("http://www.w3.org/1999/xlink",
c,d);return}}a.setAttribute(c,d)}else 5<c.length&&45===c.charCodeAt(4)?a.setAttribute(c,d):a[c]=d}
function Qa(a,b,c,d){var e,f,g;if(null===c){if(null!==d)for(f=Object.keys(d),e=0;e<f.length;e++)g=f[e],Pa(a,b,g,d[g])}else if(null===d)for(f=Object.keys(c),e=0;e<f.length;e++)Pa(a,b,f[e]);else{var h=0;f=Object.keys(c);for(e=0;e<f.length;e++){g=f[e];var k=d[g];void 0===k?Pa(a,b,g):(c[g]!==k&&Pa(a,b,g,k),h++)}f=Object.keys(d);for(e=0;h<f.length&&e<f.length;)g=f[e++],c.hasOwnProperty(g)||(Pa(a,b,g,d[g]),h++)}}var Ra=C&1?{capture:!0,passive:!0}:!0,Sa=C&1?{passive:!0}:!1;
function Ta(a){return a&2?a&1?Ra:Sa:a&1?!0:!1}
function Ua(a,b,c){var d,e,f;if(null===b){if(null!==c)if("function"===typeof c)H(c.i);else for(e=Object.keys(c),d=0;d<e.length;d++)H(c[e[d]].i)}else if(null===c)if("function"===typeof b)I(b.i);else for(e=Object.keys(b),d=0;d<e.length;d++)I(b[e[d]].i);else if("function"===typeof b)"function"===typeof c&&(H(c.i),I(b.i));else if("function"===typeof c)for(H(c.i),e=Object.keys(b),d=0;d<e.length;d++)I(b[e[d]].i);else{var g=0;e=Object.keys(b);for(d=0;d<e.length;d++){f=e[d];var h=b[f];f=c[f];void 0!==f?(h!==
f&&(H(f.i),I(h.i)),g++):I(h.i)}e=Object.keys(c);for(d=0;g<e.length&&d<e.length;)f=e[d++],b.hasOwnProperty(f)||(H(c[f].i),g++)}a._ev=c}var Va;function Wa(a){var b=a.a;if(b&96)if(a=a.b,b&64)for(b=0;b<a.length;b++)Wa(a[b]);else Wa(a);else b&12&&(b&8&&(b=a.j,b.f|=1,b.oa()),Wa(a.b))}function J(a){var b=a.a;if(b&2){if(b&96){var c=a.b;b&64?Xa(c):J(c)}if(a.u)if(a=a.u,"function"===typeof a)I(a.i);else for(b=Object.keys(a),c=0;c<b.length;c++)I(a[b[c]].i)}else b&12&&(J(a.b),b&8&&(a=a.j,a.f&=-2))}
function Xa(a){for(var b=0;b<a.length;b++)J(a[b])}function K(a,b,c,d){var e=b.a;if(e&96)if(a=b.j,b=b.b,e&64)for(e=0;e<b.length;e++)K(a,b[e],c,d);else K(a,b,c,d);else if(e&12)if(e&8){var e=b.j,f=b.b;e.f&6||d&2?(b=b.b=e.D(),L(a,f,b,c,d),e.f&=-7):K(a,f,c,d)}else if(e&98304)if(e&32768){var e=b.s,f=b.j,g=e.select(f,b.h,c),h=b.b;b.b=f===g?b.b:e.D(g.ua);b.j=g;L(a,h,b.b,c,d)}else d&4&&(b.j=Object.assign({},c,b.h)),K(a,b.b,b.j,d);else K(a,b.b,c,d)}function M(a,b){a.removeChild(G(b));J(b)}
function Ya(a,b,c){var d=b.a,e=null,f;if(d&3){if(d&1)a=document.createTextNode(b.b);else if(d&8192?a=b.s.createElement():d&512?d&1024?a=document.createElement("textarea"):(a=document.createElement("input"),a.type=b.s):a=d&4096?document.createElementNS("http://www.w3.org/2000/svg",b.s):document.createElement(b.s),d&262144&&(Va=a),b.h&&Qa(a,d,null,b.h),null!==b.J&&Na(a,d,b.J),null!==b.G&&Oa(a,null,b.G),b.u&&Ua(a,null,b.u),e=b.b,null!==e)if(d&80)if(d&16)a.textContent=e;else for(d=0;d<e.length;d++)f=
e[d],f=Ya(a,f,c),a.insertBefore(f,null);else d&32?(f=Ya(a,e,c),a.insertBefore(f,null)):d&512?(c=a,"string"===typeof e?c.value=e:c.checked=e):e&&ma(a,e,!!(d&4096));e=a}else d&8?(d=e=new b.s(b.h),d=b.b=d.D(),a=Ya(a,d,c)):(d&98304?d&32768?(d=b.s,f=b.j=d.select(null,b.h,c),b.b=d.D(f.ua)):c=e=Object.assign({},c,b.h):b.b=(0,b.s)(b.h),a=Ya(a,b.b,c));b.j=e;return a}function N(a,b,c,d){d=Ya(a,c,d);a.insertBefore(d,b);Wa(c)}function O(a,b){return a.o===b.o&&(a.a&256)===(b.a&256)}
function L(a,b,c,d,e){if(b===c)K(a,c,d,e);else{var f,g=c.a;if((b.a&130831)===(c.a&130831)&&b.s===c.s&&b.o===c.o)if(f=c.j=b.j,g&3)if(g&1)b.b!==c.b&&(f.nodeValue=c.b);else{if(b.h!==c.h&&Qa(f,g,b.h,c.h),b.J!==c.J&&Na(f,g,c.J),b.G!==c.G&&Oa(f,b.G,c.G),b.u!==c.u&&Ua(f,b.u,c.u),b.b!==c.b){a=f;var h=b.a;f=b.b;c=c.b;if(null===f)if(g&80)if(g&16)a.textContent=c;else for(b=0;b<c.length;b++)N(a,null,c[b],d);else g&32?N(a,null,c,d):g&512?"string"===typeof c?a.value=c:a.checked=c:c&&ma(a,c,!!(g&4096));else if(null===
c)h&144?a.textContent="":h&64?(a.textContent="",Xa(f)):h&32&&M(a,f);else if(h&144)if(g&144)g&16||!c?(d=a.firstChild)?d.nodeValue=c:a.textContent=c:ma(a,c,!!(g&4096));else if(a.textContent="",g&64)for(b=0;b<c.length;b++)N(a,null,c[b],d);else N(a,null,c,d);else if(h&64)if(g&144)g&16||!c?a.textContent=c:ma(a,c,!!(g&4096)),Xa(f);else if(g&64)if(0===f.length)for(b=0;b<c.length;b++)N(a,null,c[b],d);else if(0===c.length)a.textContent="",Xa(f);else if(1===f.length&&1===c.length)L(a,f[0],c[0],d,e);else{var k=
0;b=0;var n=f.length-1,t=c.length-1,h=f[k],g=c[b],l=f[n],p=c[t],q,P;a:for(;;){for(;O(h,g);){L(a,h,g,d,e);k++;b++;if(k>n||b>t)break a;h=f[k];g=c[b]}for(;O(l,p);){L(a,l,p,d,e);n--;t--;if(k>n||b>t)break a;l=f[n];p=c[t]}if(O(l,g))L(a,l,g,d,e),a.insertBefore(G(g),G(h)),n--,b++,l=f[n],g=c[b];else if(O(h,p))L(a,h,p,d,e),h=t+1,h=h<c.length?G(c[h]):null,a.insertBefore(G(p),h),k++,t--,h=f[k],p=c[t];else break}if(k>n)for(h=t+1,h=h<c.length?G(c[h]):null;b<=t;)N(a,h,c[b++],d);else if(b>t)for(;k<=n;)M(a,f[k++]);
else{var Ea=n-k+1,h=t-b+1,g=Array(h).fill(-1),Fa=!1,y=0,T=0;if(4>=h||16>=Ea*h)for(l=k;l<=n;l++){if(q=f[l],T<h)for(p=b;p<=t;p++)if(P=c[p],O(q,P)){g[p-b]=l;y>p?Fa=!0:y=p;L(a,q,P,d,e);T++;f[l]=null;break}}else{for(var m,r,l=b;l<=t;l++)q=c[l],q.a&256?(void 0===m&&(m=new Map),m.set(q.o,l)):(void 0===r&&(r=[]),r[q.o-k]=l);for(l=k;l<=n;l++)q=f[l],T<h&&(p=q.a&256?m?m.get(q.o):void 0:r?r[q.o-k]:void 0,void 0!==p&&(P=c[p],g[p-b]=l,y>p?Fa=!0:y=p,L(a,q,P,d,e),T++,f[l]=null))}if(Ea===f.length&&0===T)for(a.textContent=
"",Xa(f);b<h;)N(a,null,c[b++],d);else{for(l=Ea-T;0<l;)q=f[k++],null!==q&&(M(a,q),l--);if(Fa){f=g.slice(0);e=[];e.push(0);m=0;for(r=g.length;m<r;m++)if(-1!==g[m])if(k=e[e.length-1],g[k]<g[m])f[m]=k,e.push(m);else{k=0;for(n=e.length-1;k<n;)t=(k+n)/2|0,g[e[t]]<g[m]?k=t+1:n=t;g[m]<g[e[k]]&&(0<k&&(f[m]=e[k-1]),e[k]=m)}k=e.length;for(n=e[k-1];0<k--;)e[k]=n,n=f[n];p=e.length-1;for(l=h-1;0<=l;l--)-1===g[l]?(y=l+b,q=c[y],h=y+1,h=h<c.length?G(c[h]):null,N(a,h,q,d)):0>p||l!==e[p]?(y=l+b,q=c[y],h=y+1,h=h<c.length?
G(c[h]):null,a.insertBefore(G(q),h)):p--}else if(T!==h)for(l=h-1;0<=l;l--)-1===g[l]&&(y=l+b,q=c[y],h=y+1,h=h<c.length?G(c[h]):null,N(a,h,q,d))}}}else if(0<f.length){for(b=0;b<f.length;)if(m=f[b++],O(m,c)){L(a,m,c,d,e);break}else M(a,m);if(b<f.length)for(;b<f.length;)M(a,f[b++]);else N(a,null,c,d)}else N(a,null,c,d);else if(h&32)if(g&144)g&16||!c?a.textContent=c:ma(a,c,!!(g&4096)),J(f);else if(g&64)if(0<c.length){b=0;for(m=G(f);b<c.length;)if(r=c[b++],O(f,r)){L(a,f,r,d,e);break}else N(a,m,c[b],d);
if(b<c.length)for(;b<c.length;)N(a,null,c[b++],d);else M(a,f)}else M(a,f);else L(a,f,c,d,e);else"string"===typeof c?a.value!==c&&(a.value=c):a.checked=c}}else g&8?(r=c.h,m=!1,f.ca(b.h,r)&&(m=!0),f.g=r,r=b.b,m||f.f&6||e&2?(c=c.b=f.D(),L(a,r,c,d,e),f.f&=-7):(c.b=b.b,K(a,r,d,e))):(m=c.a,f=c.s,m&98304?(m&32768?(f=c.s,m=b.j,r=f.select(m,c.h,d),c.b=m===r?b.b:f.D(r.ua),c.j=r):e&4||b.h!==c.h?(e|=4,d=c.j=Object.assign({},d,c.h)):d=c.j=b.j,L(a,b.b,c.b,d,e)):e&2||b!==c&&(!f.ca&&b.h!==c.h||f.ca&&f.ca(b.h,c.h))?
(b=b.b,c=c.b=f(c.h),L(a,b,c,d,e)):(c.b=b.b,K(a,c.b,d,e)));else f=Ya(a,c,d),a.replaceChild(f,G(b)),J(b),Wa(c)}}var Q=[],Za={},$a=!1,ab=0;function bb(){if($a){$a=!1;for(var a=0;a<Q.length;a++){var b=Q[a],c=b.pa,d=b.qa,e=ab|b.ja;if(b.T){var f=b.ea;f?(f.constructor!==D&&(f=Ma("")),d?L(c,d,f,Za,e):(N(c,null,f,Za),ka&1&&(c.onclick=oa)),b.qa=f):d&&(c.removeChild(G(d)),J(d),c=Q.pop(),c!==b&&Q.length&&(Q[Q.indexOf(b)]=c));b.ea=null;b.T=!1}else d&&K(c,d,Za,e|1);b.ja=0}}}
function cb(a){ab=void 0===a?0:a;$a||($a=!0,db().write(bb))}var eb=!1,fb=!1,gb=new Ha,hb=new Ha;function ib(){eb&&requestAnimationFrame(jb)}function kb(){if(!eb){eb=!0;var a=ib;ua||(ua=!0,ka&2?Promise.resolve().then(Aa):(xa^=1,wa.nodeValue=xa?"1":"0"));va.push(a)}}
function jb(){var a,b;eb=!1;fb=!0;var c=hb;hb=gb;gb=c;Ja(Ka);do{for(;c.a&4;)for(c.a&=-5,a=c.N,c.N=null,b=0;b<a.length;b++)a[b]();for(;c.a&3;){if(c.a&2)for(c.a&=-3,a=c.O,c.O=null,b=0;b<a.length;b++)a[b]();c.a&1&&(c.a&=-2,cb(void 0),jb())}}while(c.a&7);fb=!1;for(Ba&&Ja(lb);0!==(c.a&8);)for(c.a&=-9,a=c.ka,c.ka=null,b=0;b<a.length;b++)a[b]();a=Va;Va=null;a&&a.focus();(0<mb||0<lb.A.length)&&kb();pa++}function db(){kb();return hb}Da.push(function(a){a&&(0<mb||0<lb.A.length)&&kb()});var lb=new Ia,mb=0;
function nb(a,b,c,d){this.B=this.M=null;this.i=a;this.f=b;this.Da=c;this.filter=void 0===d?-1:d}nb.prototype.cancel=function(){this.f&1||(this.f|=1,this.f&2||ob(this))};function ob(a){a.M?a.M.B=a.B:a.i.F=a.B;a.B&&(a.B.M=a.M);0===--a.i.aa&&a.i.ba()}function R(){this.aa=0;this.F=null}R.prototype.Z=function(){};R.prototype.ba=function(){};R.prototype.subscribe=function(a,b,c){a=new nb(this,void 0===c?0:c,a,b);this.F&&(this.F.M=a,a.B=this.F);this.F=a;0===this.aa++&&this.Z();return a};
function H(a){0===a.aa++&&a.Z()}function I(a){0===--a.aa&&a.ba()}function pb(a,b,c){b.currentTarget=a.target;for(var d=0;d<a.ta.length;d++){var e=a.ta[d];if(e.f&c&&(e(b),b.a&2))break}}function S(a,b,c){R.call(this);this.f=a;this.name=b;this.ra=c;this.la=this.za.bind(this);this.K=!1}z(S,R);
S.prototype.za=function(a){var b;if(this.F)for(var c=b=new this.ra(this,0,a,la(a),a.timeStamp,a.type),d=this.F;d;)if(d.f|=2,d.Da(c,void 0),d.f&=-3,d.f&1){var e=d,d=d.B;ob(e)}else d=d.B;if(!(b&&b.a&3)){d=la(a);for(c=[];d;){var e=void 0,f=d,g=f._ev;if(g){if("function"===typeof g)g.i===this&&(e=[g]);else for(var h=Object.keys(g),k=0;k<h.length;k++){var n=g[h[k]];n.i===this&&(e?e.push(n):e=[n])}e&&c.push({target:f,ta:e})}d=d.parentElement}if(0<c.length)a:{b||(b=new this.ra(this,0,a,la(a),a.timeStamp,
a.type)),d=b;e=!!(this.f&4);for(f=c.length-1;0<=f;)if(g=c[f],g.target!==d.target){if(pb(c[f--],d,1),d.a&1)break a}else break;g=c[0];if(g.target===d.target){d.a|=64;pb(g,d,3);if(d.a&1)break a;d.a&=-65;f=1}else f=0;if(e)for(d.a|=128;f<c.length&&!(pb(c[f++],d,2),d.a&1););}b&&b.a&4&&a.preventDefault()}};S.prototype.Z=function(){this.K?this.K=!1:(R.prototype.Z.call(this),document.addEventListener(this.name,this.la,Ta(this.f)))};
S.prototype.ba=function(){var a=this;this.K||(this.K=!0,ta(function(){a.K&&(document.removeEventListener(a.name,a.la,Ta(a.f)),R.prototype.ba.call(a),a.K=!1)}))};function U(a,b,c,d,e,f){this.i=a;this.a=b;this.c=c;this.currentTarget=this.target=d;this.timeStamp=e;this.type=f}U.prototype.stopPropagation=function(){this.a|=1};U.prototype.stopImmediatePropagation=function(){this.a|=3};U.prototype.preventDefault=function(){this.a|=4};
v.Object.defineProperties(U.prototype,{defaultPrevented:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&4)}},bubbles:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&8)}},cancelable:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&16)}},isTrusted:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&32)}},eventPhase:{configurable:!0,enumerable:!0,get:function(){return this.a&64?2:this.a&128?3:1}}});U.prototype.CAPTURING_PHASE=1;
U.prototype.AT_TARGET=2;U.prototype.BUBBLING_PHASE=3;function qb(a){U.apply(this,arguments)}z(qb,U);v.Object.defineProperties(qb.prototype,{detail:{configurable:!0,enumerable:!0,get:function(){return this.c.detail}},view:{configurable:!0,enumerable:!0,get:function(){return this.c.view}}});function rb(a){qb.apply(this,arguments)}z(rb,qb);rb.prototype.getModifierState=function(a){return this.c.getModifierState(a)};
v.Object.defineProperties(rb.prototype,{altKey:{configurable:!0,enumerable:!0,get:function(){return this.c.altKey}},button:{configurable:!0,enumerable:!0,get:function(){return this.c.button}},buttons:{configurable:!0,enumerable:!0,get:function(){return this.c.buttons}},clientX:{configurable:!0,enumerable:!0,get:function(){return this.c.clientX}},clientY:{configurable:!0,enumerable:!0,get:function(){return this.c.clientY}},ctrlKey:{configurable:!0,enumerable:!0,get:function(){return this.c.ctrlKey}},
fromElement:{configurable:!0,enumerable:!0,get:function(){return this.c.fromElement}},layerX:{configurable:!0,enumerable:!0,get:function(){return this.c.layerX}},layerY:{configurable:!0,enumerable:!0,get:function(){return this.c.layerY}},metaKey:{configurable:!0,enumerable:!0,get:function(){return this.c.metaKey}},Fa:{configurable:!0,enumerable:!0,get:function(){return this.c.Fa}},Ga:{configurable:!0,enumerable:!0,get:function(){return this.c.Ga}},offsetX:{configurable:!0,enumerable:!0,get:function(){return this.c.offsetX}},
offsetY:{configurable:!0,enumerable:!0,get:function(){return this.c.offsetY}},pageX:{configurable:!0,enumerable:!0,get:function(){return this.c.pageX}},pageY:{configurable:!0,enumerable:!0,get:function(){return this.c.pageY}},relatedTarget:{configurable:!0,enumerable:!0,get:function(){return this.c.relatedTarget}},screenX:{configurable:!0,enumerable:!0,get:function(){return this.c.screenX}},screenY:{configurable:!0,enumerable:!0,get:function(){return this.c.screenY}},shiftKey:{configurable:!0,enumerable:!0,
get:function(){return this.c.shiftKey}},toElement:{configurable:!0,enumerable:!0,get:function(){return this.c.toElement}},which:{configurable:!0,enumerable:!0,get:function(){return this.c.which}},x:{configurable:!0,enumerable:!0,get:function(){return this.c.x}},y:{configurable:!0,enumerable:!0,get:function(){return this.c.y}}});function sb(a){qb.apply(this,arguments)}z(sb,qb);
v.Object.defineProperties(sb.prototype,{altKey:{configurable:!0,enumerable:!0,get:function(){return this.c.altKey}},charCode:{configurable:!0,enumerable:!0,get:function(){return this.c.charCode}},changedTouches:{configurable:!0,enumerable:!0,get:function(){return this.c.changedTouches}},ctrlKey:{configurable:!0,enumerable:!0,get:function(){return this.c.ctrlKey}},keyCode:{configurable:!0,enumerable:!0,get:function(){return this.c.keyCode}},metaKey:{configurable:!0,enumerable:!0,get:function(){return this.c.metaKey}},
shiftKey:{configurable:!0,enumerable:!0,get:function(){return this.c.shiftKey}},targetTouches:{configurable:!0,enumerable:!0,get:function(){return this.c.targetTouches}},touches:{configurable:!0,enumerable:!0,get:function(){return this.c.touches}},which:{configurable:!0,enumerable:!0,get:function(){return this.c.which}}});function tb(a,b,c){b.i=a;b.f=c?1:2;return b}
var ub=new S(5,"click",rb),vb=new S(1,"mouseenter",rb),wb=new S(1,"mouseleave",rb),xb=new S(7,"touchend",sb),yb=new S(7,"touchstart",sb);function zb(a,b){return tb(ub,a,void 0===b?!1:b)}function Ab(a,b){return tb(vb,a,void 0===b?!1:b)}function Bb(a,b){return tb(wb,a,void 0===b?!1:b)}function Cb(a,b){return tb(xb,a,void 0===b?!1:b)}function Db(a,b){return tb(yb,a,void 0===b?!1:b)}function V(a){this.f=0;this.g=a}V.prototype.ca=function(a,b){return a!==b};V.prototype.oa=function(){};V.prototype.T=function(){};
function W(a){a.f|=2;a.T();a.f&1&&(a=fb?gb:db(),a.a|=1)}
function X(){V.apply(this,[].concat(arguments instanceof Array?arguments:ga(x(arguments))));var a=this;this.P=0;this.I=this.H=!1;this.root=null;this.U=function(b){a.P++;W(a);a.g.stopPropagation&&b.stopPropagation()};this.V=function(b){a.H=!0;W(a);a.g.stopPropagation&&b.stopPropagation()};this.W=function(b){a.H=!1;W(a);a.g.stopPropagation&&b.stopPropagation()};this.ga=function(b){a.I=!0;W(a);a.g.stopPropagation&&b.stopPropagation()};this.fa=function(b){a.I=!1;W(a);a.g.stopPropagation&&b.stopPropagation()};
this.L=this.g.m?{click:this.U,mouseenter:this.V,mouseleave:this.W,touchstart:this.ga,touchend:this.fa}:{click:this.U,mouseenter:this.V,mouseleave:this.W}}z(X,V);X.prototype.D=function(){var a=this.g.depth;return this.root=E("div","Box"+(this.H?" entered":"")+(this.I?" touched":"")).children([E("div","ClickCounter").children("Clicks: "+this.P),0<a?F(X,{depth:a-1,m:this.g.m,stopPropagation:this.g.stopPropagation,capture:this.g.capture}):null])};
X.prototype.oa=function(){for(var a=G(this.root),b=Object.keys(this.L),c=0;c<b.length;c++){var d=b[c];a.addEventListener(d,this.L[d],this.g.capture)}};
function Y(){V.apply(this,[].concat(arguments instanceof Array?arguments:ga(x(arguments))));var a=this;this.P=0;this.I=this.H=!1;this.U=zb(function(b){a.P++;W(a);a.g.stopPropagation&&b.stopPropagation()},this.g.capture);this.V=Ab(function(b){a.H=!0;W(a);a.g.stopPropagation&&b.stopPropagation()},this.g.capture);this.W=Bb(function(b){a.H=!1;W(a);a.g.stopPropagation&&b.stopPropagation()},this.g.capture);this.ga=Db(function(b){a.I=!0;W(a);a.g.stopPropagation&&b.stopPropagation()},this.g.capture);this.fa=
Cb(function(b){a.I=!1;W(a);a.g.stopPropagation&&b.stopPropagation()},this.g.capture);this.L=this.g.m?{click:this.U,Aa:this.V,Ea:this.W,Ma:this.ga,La:this.fa}:{click:this.U,Aa:this.V,Ea:this.W}}z(Y,V);Y.prototype.D=function(){var a=this.g.depth;return E("div","Box"+(this.H?" entered":"")+(this.I?" touched":"")).L(this.L).children([E("div","ClickCounter").children("Clicks: "+this.P),0<a?F(Y,{depth:a-1,m:this.g.m,stopPropagation:this.g.stopPropagation,capture:this.g.capture}):null])};
var Eb=E("div").children([E("h1").children("Native Events:"),E("h2").children("Touch disabled:"),F(X,{depth:3,m:!1,stopPropagation:!1,capture:!1}),E("h2").children("Touch enabled:"),F(X,{depth:3,m:!0,stopPropagation:!1,capture:!1}),E("h2").children("Touch enabled / Capture:"),F(X,{depth:3,m:!0,stopPropagation:!1,capture:!0}),E("h2").children("Touch enabled / Stop propagation:"),F(X,{depth:3,m:!0,stopPropagation:!0,capture:!1}),E("h2").children("Touch enabled / Stop propagation / Capture:"),F(X,{depth:3,
m:!0,stopPropagation:!0,capture:!0}),E("h1").children("Synthetic Events:"),E("h2").children("Touch disabled:"),F(Y,{depth:3,m:!1,stopPropagation:!1,capture:!1}),E("h2").children("Touch enabled:"),F(Y,{depth:3,m:!0,stopPropagation:!1,capture:!1}),E("h2").children("Touch enabled / Capture:"),F(Y,{depth:3,m:!0,stopPropagation:!1,capture:!0}),E("h2").children("Touch enabled / Stop propagation:"),F(Y,{depth:3,m:!0,stopPropagation:!0,capture:!1}),E("h2").children("Touch enabled / Stop propagation / Capture:"),
F(Y,{depth:3,m:!0,stopPropagation:!0,capture:!0})]),Fb=document.getElementById("app"),Gb=0,Gb=void 0===Gb?0:Gb,Z;a:{for(var Hb=0;Hb<Q.length;Hb++){var Ib=Q[Hb];if(Ib.pa===Fb){Z=Ib;break a}}Z=void 0}Z?(Z.ea=Eb,Z.T=!0,Z.ja=Gb):(Z={pa:Fb,qa:null,ea:Eb,T:!0,ja:Gb},Q.push(Z));cb();jb();}).call(this);

//# sourceMappingURL=bundle.js.map
