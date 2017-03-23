(function(){'use strict';var u;function aa(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
var v="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ca(){ca=function(){};v.Symbol||(v.Symbol=da)}var ea=0;function da(a){return"jscomp_symbol_"+(a||"")+ea++}
function w(){ca();var a=v.Symbol.iterator;a||(a=v.Symbol.iterator=v.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(this)}});w=function(){}}function fa(a){var b=0;return ga(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ga(a){w();a={next:a};a[v.Symbol.iterator]=function(){return this};return a}function y(a){w();var b=a[Symbol.iterator];return b?b.call(a):fa(a)}
function z(a,b){if(b){var c=v;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
z("Promise",function(a){function b(b){this.O=0;this.ea=void 0;this.N=[];var a=this.X();try{b(a.resolve,a.reject)}catch(k){a.reject(k)}}function c(){this.w=null}if(a)return a;c.prototype.ja=function(a){null==this.w&&(this.w=[],this.xa());this.w.push(a)};c.prototype.xa=function(){var a=this;this.ka(function(){a.Aa()})};var d=v.setTimeout;c.prototype.ka=function(a){d(a,0)};c.prototype.Aa=function(){for(;this.w&&this.w.length;){var a=this.w;this.w=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];
try{c()}catch(l){this.ya(l)}}}this.w=null};c.prototype.ya=function(a){this.ka(function(){throw a;})};b.prototype.X=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.Ga),reject:a(this.da)}};b.prototype.Ga=function(a){if(a===this)this.da(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.Ha(a);else{var c;a:switch(typeof a){case "object":c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.Fa(a):this.na(a)}};
b.prototype.Fa=function(a){var b=void 0;try{b=a.then}catch(k){this.da(k);return}"function"==typeof b?this.Ia(b,a):this.na(a)};b.prototype.da=function(a){this.qa(2,a)};b.prototype.na=function(a){this.qa(1,a)};b.prototype.qa=function(a,b){if(0!=this.O)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.O);this.O=a;this.ea=b;this.Ba()};b.prototype.Ba=function(){if(null!=this.N){for(var a=this.N,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.N=null}};var e=new c;b.prototype.Ha=
function(a){var b=this.X();a.P(b.resolve,b.reject)};b.prototype.Ia=function(a,b){var c=this.X();try{a.call(b,c.resolve,c.reject)}catch(l){c.reject(l)}};b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(n){f(n)}}:b}var e,f,g=new b(function(a,b){e=a;f=b});this.P(d(a,e),d(c,f));return g};b.prototype.catch=function(a){return this.then(void 0,a)};b.prototype.P=function(a,b){function c(){switch(d.O){case 1:a(d.ea);break;case 2:b(d.ea);break;default:throw Error("Unexpected state: "+
d.O);}}var d=this;null==this.N?e.ja(c):this.N.push(function(){e.ja(c)})};b.resolve=function(a){return a instanceof b?a:new b(function(b){b(a)})};b.reject=function(a){return new b(function(b,c){c(a)})};b.race=function(a){return new b(function(c,d){for(var e=y(a),f=e.next();!f.done;f=e.next())b.resolve(f.value).P(c,d)})};b.all=function(a){var c=y(a),d=c.next();return d.done?b.resolve([]):new b(function(a,e){function f(b){return function(c){g[b]=c;k--;0==k&&a(g)}}var g=[],k=0;do g.push(void 0),k++,b.resolve(d.value).P(f(g.length-
1),e),d=c.next();while(!d.done)})};b.$jscomp$new$AsyncExecutor=function(){return new c};return b});function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}z("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var f in e)A(e,f)&&(a[f]=e[f])}return a}});
function ha(a,b){w();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}z("Array.prototype.keys",function(a){return a?a:function(){return ha(this,function(a){return a})}});
z("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});
z("WeakMap",function(a){function b(a){this.M=(f+=Math.random()+1).toString();if(a){ca();w();a=y(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}function c(a){A(a,e)||ba(a,e,{value:{}})}function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d.delete(b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(p){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!A(a,e))throw Error("WeakMap key fail: "+a);a[e][this.M]=b;return this};b.prototype.get=function(a){return A(a,e)?a[e][this.M]:void 0};b.prototype.has=function(a){return A(a,e)&&A(a[e],this.M)};b.prototype.delete=function(a){return A(a,e)&&A(a[e],this.M)?delete a[e][this.M]:!1};return b});
z("Map",function(a){function b(){var a={};return a.v=a.next=a.head=a}function c(a,b){var c=a.u;return ga(function(){if(c){for(;c.head!=a.u;)c=c.v;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}function d(a,b){var c;c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.L[c];if(d&&A(a.L,c))for(a=0;a<d.length;a++){var e=d[a];if(b!==b&&e.key!==e.key||b===e.key)return{id:c,list:d,index:a,g:e}}return{id:c,list:d,
index:-1,g:void 0}}function e(a){this.L={};this.u=b();this.size=0;if(a){a=y(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(y([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?
!1:!0}catch(q){return!1}}())return a;ca();w();var f=new WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.L[c.id]=[]);c.g?c.g.value=b:(c.g={next:this.u,v:this.u.v,head:this.u,key:a,value:b},c.list.push(c.g),this.u.v.next=c.g,this.u.v=c.g,this.size++);return this};e.prototype.delete=function(a){a=d(this,a);return a.g&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.L[a.id],a.g.v.next=a.g.next,a.g.next.v=a.g.v,a.g.head=null,this.size--,!0):!1};e.prototype.clear=
function(){this.L={};this.u=this.u.v=b();this.size=0};e.prototype.has=function(a){return!!d(this,a).g};e.prototype.get=function(a){return(a=d(this,a).g)&&a.value};e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};e.prototype.keys=function(){return c(this,function(a){return a.key})};e.prototype.values=function(){return c(this,function(a){return a.value})};e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});z("String.prototype.repeat",function(a){return a?a:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var d="";a;)if(a&1&&(d+=b),a>>>=1)b+=b;return d}});var ia=0;try{var ja=Object.defineProperty({},"passive",{get:function(){ia|=1}});window.addEventListener("test",null,ja)}catch(a){}
"innerHTML"in SVGElement.prototype&&(ia|=4);"key"in KeyboardEvent.prototype&&(ia|=8);var ka=navigator?navigator.userAgent:"",B=0;!/iPad|iPhone|iPod/.test(ka)||"MSStream"in window||(B|="standalone"in navigator?3:1);-1<ka.indexOf("Android")&&(B|=4);function C(a,b,c){if(!c||ia&4)a.innerHTML=b;else for(la||(la=document.createElement("div")),la.innerHTML="<svg>"+b+"</svg>",b=la.firstChild;b.firstChild;)a.appendChild(b.firstChild)}var la;function ma(){}var na=0,oa=!1,pa=[];
window.addEventListener("message",qa);function qa(a){if(a.source===window&&"06526c5c-2dcc-4a4e-a86c-86f5dea6319d"===a.data){oa=!1;a=pa;pa=[];for(var b=0;b<a.length;b++)a[b]();na++}}var ra=!1,sa=[],ta,ua=0;if(!(B&2)){var wa=new MutationObserver(va);ta=document.createTextNode("");wa.observe(ta,{characterData:!0})}function za(){va();oa||(oa=!0,window.postMessage("06526c5c-2dcc-4a4e-a86c-86f5dea6319d","*"));pa.push(ma)}
function va(){for(;0<sa.length;){var a=sa;sa=[];for(var b=0;b<a.length;b++)a[b]();na++}ra=!1}var Aa=!0,D,Ba=[];function Ca(){var a=!D();if(Aa!==a)for(var b=0;b<Ba.length;b++)Ba[b](a)}"undefined"!==typeof document.hidden?(D=function(){return document.hidden},document.addEventListener("visibilitychange",Ca)):"undefined"!==typeof document.webkitHidden?(D=function(){return document.webkitHidden},document.addEventListener("webkitvisibilitychange",Ca)):D=function(){return!0};Aa=!D();
function Da(){this.b=0;this.ia=this.J=this.K=null}Da.prototype.write=function(a){this.b|=2;null===this.K&&(this.K=[]);this.K.push(a)};Da.prototype.read=function(a){this.b|=4;null===this.J&&(this.J=[]);this.J.push(a)};function Ea(){this.D=[]}Ea.prototype.add=function(a){this.D.push(a)};function Fa(a){for(var b=0;b<a.D.length;b++)if((0,a.D[b])()){var c=a.D.pop();c&&(a.D[b--]=c)}}var Ga=new Ea;function E(a,b,c,d,e){this.b=a;this.a=e;this.h=b;this.j=0;this.c=c;this.f=null;this.F=d}u=E.prototype;
u.key=function(a){this.b|=256;this.j=a;return this};u.className=function(a){this.F=a;return this};u.style=function(a){null===this.c?(this.b|=512,this.c={C:null,style:a,i:null}):this.c.style=a;return this};u.i=function(a){null===this.c?(this.b|=512,this.c={C:null,style:null,i:a}):this.c.i=a;return this};u.Ea=function(a){null===this.c?(this.b|=512,this.c={C:a,style:null,i:null}):this.c.C=a;return this};
u.children=function(){var a=arguments,b=0,c=null;if(1===a.length)c=a[0],"object"===typeof c?null!==c&&(c.constructor===Array?1<c.length?b=64:1===c.length?(b=32,c=c[0]):c=null:b=32):b=16;else{var d,e=0,f=0,g;for(d=0;d<a.length;d++)g=a[d],null!==g&&(g.constructor===Array?0<g.length&&(f+=g.length,e++,c=g):(f++,e++,c=g));if(0<e)if(1===(e|f))"object"===typeof c?c.constructor===Array?1<f?b=64:(b=32,c=c[0]):b=32:b=16;else for(b=64,c=Array(f),d=f=0;d<a.length;d++)if(g=a[d],"object"===typeof g){if(null!==
g)if(g.constructor===Array)for(e=0;e<g.length;e++)c[f++]=g[e];else c[f++]=g,g.b&256||(g.j=d)}else g=c[f++]=new E(1,null,null,null,g),g.j=d}this.b|=b;this.a=c;return this};u.value=function(a){this.a=a;return this};u.checked=function(a){this.a=a;return this};u.autofocus=function(a){a&&(this.b|=524288);return this};function F(a,b){return new E(2,a,null,void 0===b?null:b,null)}function G(a){return a.b&12?G(a.a):a.f}function Ha(a,b,c){c||(c="");b&8192?a.setAttribute("class",c):a.className=c}
function Ia(a,b,c){var d,e,f;if(null===b){if(null!==c)for(f=a.style,d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e]}else if(null===c)for(f=a.style,d=Object.keys(b),a=0;a<d.length;a++)f[d[a]]="";else{f=a.style;var g=0;d=Object.keys(b);for(a=0;a<d.length;a++){e=d[a];var k=c[e];void 0!==k?(b[e]!==k&&(f[e]=k),g++):f[e]=""}d=Object.keys(c);for(a=0;g<d.length&&a<d.length;)e=d[a++],b.hasOwnProperty(e)||(f[e]=c[e],g++)}}
function H(a,b,c,d){if(void 0===d){if(!(b&8192)&&6<c.length)switch(c){case "acceptCharset":c="accept-charset";break;case "htmlFor":c="for"}a.removeAttribute(c)}else if(b&8192){if(5<c.length&&120===c.charCodeAt(0)&&(58===c.charCodeAt(3)||58===c.charCodeAt(5))){if(109===c.charCodeAt(1)&&108===c.charCodeAt(2)){a.setAttributeNS("http://www.w3.org/XML/1998/namespace",c,d);return}if(108===c.charCodeAt(1)&&105===c.charCodeAt(2)&&110===c.charCodeAt(3)&&107===c.charCodeAt(4)){a.setAttributeNS("http://www.w3.org/1999/xlink",
c,d);return}}a.setAttribute(c,d)}else 5<c.length&&45===c.charCodeAt(4)?a.setAttribute(c,d):a[c]=d}
function Ja(a,b,c,d){var e,f,g;if(null===c){if(null!==d)for(f=Object.keys(d),e=0;e<f.length;e++)g=f[e],H(a,b,g,d[g])}else if(null===d)for(f=Object.keys(c),e=0;e<f.length;e++)H(a,b,f[e]);else{var k=0;f=Object.keys(c);for(e=0;e<f.length;e++){g=f[e];var l=d[g];void 0===l?H(a,b,g):(c[g]!==l&&H(a,b,g,l),k++)}f=Object.keys(d);for(e=0;k<f.length&&e<f.length;)g=f[e++],c.hasOwnProperty(g)||(H(a,b,g,d[g]),k++)}}
function Ka(a){if("function"===typeof a)a.s.o++;else for(var b=0;b<a.length;b++){var c=a[b];c&&c.s.o++}}function La(a){if("function"===typeof a)--a.s.o;else for(var b=0;b<a.length;b++){var c=a[b];c&&--c.s.o}}var Ma;function I(a){var b=a.b;if(b&2){if(b&96){var c=a.a;if(b&64)for(var d=0;d<c.length;d++)I(c[d]);else I(c)}b&512&&a.c.i&&Ka(a.c.i)}else b&12&&(b&8&&(b=a.f,b.l|=1,b.Ma()),I(a.a))}
function J(a,b){var c=a.b;if(c&2){if(c&96){var d=a.a;c&64?K(d,b):J(d,b)}c&512&&a.c.i&&La(a.c.i)}else c&12&&(c&262144&&b&4&&a.h(a.a,a.c)?b&1&&J(a.a,b&-5):(J(a.a,b),c&8&&b&1&&(a=a.f,a.l&=-2,a.Na())))}function K(a,b){for(var c=0;c<a.length;c++)J(a[c],b)}
function M(a,b,c,d){var e=b.b;if(e&108)if(e&96)if(a=b.f,b=b.a,e&64)for(e=0;e<b.length;e++)M(a,b[e],c,d);else M(a,b,c,d);else if(e&8){var e=b.f,f=b.a;e.l&6|d&16?(e.za(),b=b.a=e.A(),N(a,f,b,c,d),e.l&=-7,e.Ja()):M(a,f,c,d)}else if(e&65536){var e=b.h,f=b.f,g=e.select(f,b.c,c),k=b.a;f===g?M(a,k,c,d):(b.a=e.A(g.ba),b.f=g,N(a,k,b.a,c,d))}else e&131072&&(d&32&&(b.f=Object.assign({},c,b.c)),c=b.f),M(a,b.a,c,d)}function O(a,b,c){a.removeChild(G(b));J(b,c|4)}
function P(a,b,c){var d=b.b,e=null,f;if(d&3){if(d&1)a=document.createTextNode(b.a);else if(d&25600?d&16384?a=b.h.createElement():d&8192?a=document.createElementNS("http://www.w3.org/2000/svg",b.h):d&2048?a=document.createElement("textarea"):(a=document.createElement("input"),a.type=b.h):a=document.createElement(b.h),d&524288&&(Ma=a),null!==b.F&&Ha(a,d,b.F),d&512&&(e=b.c,null!==e.C&&Ja(a,d,null,e.C),null!==e.style&&Ia(a,null,e.style),null!==e.i&&(a.va=e.i)),e=b.a,null!==e)if(d&80)if(d&16)a.textContent=
e;else for(d=0;d<e.length;d++)f=e[d],f=P(a,f,c),a.insertBefore(f,null);else d&32?(f=P(a,e,c),a.insertBefore(f,null)):d&1024?(c=a,"string"===typeof e?c.value=e:c.checked=e):e&&C(a,e,!!(d&8192));e=a}else d&8?(d=e=new b.h(b.c),d=b.a=d.A(),a=P(a,d,c)):d&262144?(d=b.h,(d=d(null,b.c))?(N(a,d,b.a,c,32),a=G(b.a)):a=P(a,b.a,c)):(d&196608?d&65536?(d=b.h,f=b.f=d.select(null,b.c,c),b.a=d.A(f.ba)):c=e=Object.assign({},c,b.c):b.a=b.h(b.c),a=P(a,b.a,c));b.f=e;return a}
function Q(a,b,c,d,e){d=P(a,c,d);a.insertBefore(d,b);e&1&&I(c)}function R(a,b){return a.j===b.j&&!((a.b^b.b)&256)}
function N(a,b,c,d,e){if(b===c)M(a,c,d,e);else{var f,g=c.b;if(0===((b.b^c.b)&523535)&&b.h===c.h&&b.j===c.j)if(f=c.f=b.f,g&3)if(g&1)b.a!==c.a&&(f.nodeValue=c.a);else{b.F!==c.F&&Ha(f,g,c.F);a=b.b;if((a|g)&512){var k,l=null,p=null,m=null,q=null,t=null,h=null;a&512&&(k=b.c,l=k.C,m=k.style,t=k.i);g&512&&(k=c.c,p=k.C,q=k.style,h=k.i);l!==p&&Ja(f,g,l,p);m!==q&&Ia(f,m,q);if(t!==h){if(e&1)if(k=t,l=h,null===k)null!==l&&Ka(l);else if(null===l)La(k);else if("function"===typeof k)Ka(l),--k.s.o;else if("function"===
typeof l)for(l.s.o++,p=0;p<k.length;p++)(m=k[p])&&--m.s.o;else{for(p=0;p<k.length&&p<l.length;)m=k[p],q=l[p++],m!==q&&(q&&q.s.o++,m&&--m.s.o);for(;p<l.length;)(m=l[p++])&&m.s.o++;for(;p<k.length;)(m=k[p++])&&--m.s.o}f.va=h}}if(b.a!==c.a){b=b.a;c=c.a;var h=0,n,r;if(null===b)if(g&80)if(g&16)f.textContent=c;else{do Q(f,null,c[h++],d,e);while(h<c.length)}else g&32?Q(f,null,c,d,e):g&1024?"string"===typeof c?f.value=c:f.checked=c:c&&C(f,c,!!(g&8192));else if(null===c)a&144?f.textContent="":a&64?(f.textContent=
"",K(b,e|4)):a&32&&O(f,b,e);else if(a&144)if(g&144)g&16?(n=f.firstChild)?n.nodeValue=c:f.textContent=c:c?C(f,c,!!(g&8192)):f.textContent="";else if(f.textContent="",g&64){do Q(f,null,c[h++],d,e);while(h<c.length)}else Q(f,null,c,d,e);else if(a&64)if(g&144)g&16||!c?f.textContent=c:C(f,c,!!(g&8192)),K(b,e|4);else if(g&64){g=k=0;l=b.length-1;p=c.length-1;h=b[k];a=c[g];var m=b[l],q=c[p],W;a:for(;;){for(;R(h,a);){N(f,h,a,d,e);k++;g++;if(k>l||g>p)break a;h=b[k];a=c[g]}for(;R(m,q);){N(f,m,q,d,e);l--;p--;
if(k>l||g>p)break a;m=b[l];q=c[p]}if(R(m,a))N(f,m,a,d,e),f.insertBefore(G(a),G(h)),l--,g++,m=b[l],a=c[g];else if(R(h,q))N(f,h,q,d,e),h=p+1,h=h<c.length?G(c[h]):null,f.insertBefore(G(q),h),k++,p--,h=b[k],q=c[p];else break}if(k>l){if(g<=p){h=p+1;h=h<c.length?G(c[h]):null;do Q(f,h,c[g++],d,e);while(g<=p)}}else if(g>p){do O(f,b[k++],e);while(k<=l)}else{var xa=l-k+1,h=p-g+1;a=Array(h).fill(-1);var ya=!1,x=0,L=0;if(4>=h||16>=xa*h)for(m=k;m<=l;m++){if(t=b[m],L<h)for(q=g;q<=p;q++)if(W=c[q],R(t,W)){a[q-g]=
m;x>q?ya=!0:x=q;N(f,t,W,d,e);L++;b[m]=null;break}}else{for(m=g;m<=p;m++)t=c[m],t.b&256?(void 0===n&&(n=new Map),n.set(t.j,m)):(void 0===r&&(r=new Map),r.set(t.j-k,m));for(m=k;m<=l;m++)t=b[m],L<h&&(q=t.b&256?n?n.get(t.j):void 0:r?r.get(t.j-k):void 0,void 0!==q&&(W=c[q],a[q-g]=m,x>q?ya=!0:x=q,N(f,t,W,d,e),L++,b[m]=null))}if(xa===b.length&&0===L)for(f.textContent="",K(b,e|4);g<h;)Q(f,null,c[g++],d,e);else{for(m=xa-L;0<m;)t=b[k++],null!==t&&(O(f,t,e),m--);if(ya){r=a.slice(0);n=[];n.push(0);b=0;for(k=
a.length;b<k;b++)if(-1!==a[b])if(l=n[n.length-1],a[l]<a[b])r[b]=l,n.push(b);else{l=0;for(p=n.length-1;l<p;)m=(l+p)/2|0,a[n[m]]<a[b]?l=m+1:p=m;a[b]<a[n[l]]&&(0<l&&(r[b]=n[l-1]),n[l]=b)}l=n.length;for(p=n[l-1];0<l--;)n[l]=p,p=r[p];q=n.length-1;for(m=h-1;0<=m;m--)-1===a[m]?(x=m+g,t=c[x],h=x+1,h=h<c.length?G(c[h]):null,Q(f,h,t,d,e)):0>q||m!==n[q]?(x=m+g,t=c[x],h=x+1,h=h<c.length?G(c[h]):null,f.insertBefore(G(t),h)):q--}else if(L!==h)for(m=h-1;0<=m;m--)-1===a[m]&&(x=m+g,t=c[x],h=x+1,h=h<c.length?G(c[h]):
null,Q(f,h,t,d,e))}}}else{n=-1;h=0;do{r=b[h];if(R(r,c)){N(f,r,c,d,e);n=h;break}h++}while(h<b.length);if(-1<n){for(h=0;h<n;h++)O(f,b[h],e);for(h=n+1;h<b.length;h++)O(f,b[h],e)}else f.textContent="",K(b,e|4),Q(f,null,c,d,e)}else if(a&32)if(g&144)g&16||!c?f.textContent=c:C(f,c,!!(g&8192)),J(b,e|4);else if(g&64){n=-1;h=0;do{r=c[h];if(R(b,r)){N(f,b,r,d,e);n=h;break}h++}while(h<c.length);if(-1<n){r=G(b);for(h=0;h<n;h++)Q(f,r,c[h],d,e);h=n+1}else O(f,b,e),h=0;for(;h<c.length;h++)Q(f,null,c[h],d,e)}else N(f,
b,c,d,e);else"string"===typeof c?f.value!==c&&(f.value=c):f.checked=c}}else g&8?(n=f,f=b.c,g=c.c,r=0,n.$(f,g)&&(r=1,n.Oa(f,g)),n.Ea=g,f=b.a,r|n.l&6|e&16?(n.za(),r=c.a=n.A(),N(a,f,r,d,e),n.l&=-7,n.Ja()):(c.a=b.a,M(a,f,d,e))):(n=c.h,g&458752?g&65536?(n=c.h,r=b.f,f=n.select(r,c.c,d),c.f=f,r===f?(c.a=b.a,M(a,c,d,e)):(c.a=n.A(f.ba),N(a,b.a,c.a,d,e))):(g&131072&&(e&32||b.c!==c.c?(e|=32,d=c.f=Object.assign({},d,c.c)):d=c.f=b.f),N(a,b.a,c.a,d,e)):e&16||b!==c&&(!n.$&&b.c!==c.c||n.$&&n.$(b.c,c.c))?(r=b.a,n=
c.a=n(c.c),N(a,r,n,d,e)):(c.a=b.a,M(a,c.a,d,e)));else f=P(a,c,d),a.replaceChild(f,G(b)),e&1&&(J(b,e|4),I(c))}}var S=[],Na={},Oa=!1,Pa=0;function Qa(){if(Oa){Oa=!1;for(var a=0;a<S.length;a++){var b=S[a],c=b.la,d=b.ma,e=Pa|b.fa|1;if(b.Z){var f=b.aa;f?(f.constructor!==E&&(f=new E(1,null,null,null,"")),d?N(c,d,f,Na,e):(Q(c,null,f,Na,1),B&1&&(c.onclick=ma)),b.ma=f):d&&(c.removeChild(G(d)),J(d,5),c=S.pop(),c!==b&&S.length&&(S[S.indexOf(b)]=c));b.aa=null;b.Z=!1}else d&&M(c,d,Na,e|8);b.fa=0}}}
function Ra(){var a=Sa(Ta,Ua),b=document.getElementById("app"),c=0,c=void 0===c?0:c,d;a:{for(d=0;d<S.length;d++){var e=S[d];if(e.la===b){d=e;break a}}d=void 0}d?(d.aa=a,d.Z=!0,d.fa=c):(d={la:b,ma:null,aa:a,Z:!0,fa:c},S.push(d));Va();Wa()}function Va(a){Pa=void 0===a?0:a;Oa||(Oa=!0,Xa(),Ya.write(Qa))}var Za=!1,$a=new Da,Ya=new Da;function ab(){Za&&requestAnimationFrame(Wa)}function Xa(){if(!Za){Za=!0;var a=ab;ra||(ra=!0,B&2?Promise.resolve().then(za):(ua^=1,ta.nodeValue=ua?"1":"0"));sa.push(a)}}
function Wa(){var a,b;Za=!1;var c=Ya;Ya=$a;$a=c;Fa(Ga);do{for(;c.b&4;)for(c.b&=-5,a=c.J,c.J=null,b=0;b<a.length;b++)a[b]();for(;c.b&3;){if(c.b&2)for(c.b&=-3,a=c.K,c.K=null,b=0;b<a.length;b++)a[b]();c.b&1&&(c.b&=-2,Va(void 0),Wa())}}while(c.b&7);for(Aa&&Fa(bb);0!==(c.b&8);)for(c.b&=-9,a=c.ia,c.ia=null,b=0;b<a.length;b++)a[b]();a=Ma;Ma=null;a&&a.focus();(0<cb||0<bb.D.length)&&Xa();na++}Ba.push(function(a){a&&(0<cb||0<bb.D.length)&&Xa()});var bb=new Ea,cb=0;
function Sa(a,b){return new E(a.prototype.A?8:4,a,b,null,null)}function db(a,b){this.Y=a;this.query=b}var eb=new db(0,"***");function T(a){this.id=fb++;this.name=a;this.ca=null;this.update()}T.prototype.update=function(){for(var a=[],b=Math.floor(10*Math.random()+1),c=0;c<b;c++)a.push(new db(15*Math.random(),.1>Math.random()?"vacuum":.2>Math.random()?"<IDLE> in transaction":"SELECT blah FROM something"));this.ca=a};
function gb(a){a=a.ca.slice(0,5);for(a.sort(function(a,c){return a.Y-c.Y});5>a.length;)a.push(eb);return a}var fb=0;function hb(a){this.H=[];for(var b=0;b<a;b++)this.H.push(new T("cluster"+(b+1))),this.H.push(new T("cluster"+(b+1)+" slave"))}hb.prototype.update=function(){for(var a=this.H,b=0;b<a.length;b++)a[b]=new T(a[b].name)};function ib(a,b,c,d){this.min=a;this.max=b;this.pa=c;this.oa=d}function jb(){this.I=[];this.Da=100;this.B=-1}function kb(a,b){a.B=(a.B+1)%a.Da;a.I[a.B]=b}
function lb(a,b){for(var c=a.I,d=0;d<c.length;d++)b(c[(a.B+1+d)%c.length],d)}function mb(a){var b=a.I;if(0===b.length)return new ib(0,0,0,0);for(var c=b[(a.B+1)%b.length],d=c,e=0,f=0;f<b.length;f++){var g=b[(a.B+1+f)%b.length];g<c&&(c=g);g>d&&(d=g);e+=g}return new ib(c,d,e/b.length,b[a.B])}var nb=[],ob=-1;function pb(a){nb.push(a);-1===ob&&requestAnimationFrame(function(){ob=-1;var a=nb;nb=[];for(var c=0;c<a.length;c++)a[c]()})}
function qb(a){var b=this;this.wa=function(){b.ra();b.W=!1};this.name=a;this.element=document.createElement("div");this.element.style.cssText="padding: 2px;background-color: #020;font-family: monospace;font-size: 12px;color: #0f0";this.W=!1;rb(this)}function rb(a){a.W||(a.W=!0,pb(a.wa))}qb.prototype.ra=function(){throw Error("sync method not implemented");};var U,V=U||(U={});V[V.HideMin=1]="HideMin";V[V.HideMax=2]="HideMax";V[V.HideMean=4]="HideMean";V[V.HideLast=8]="HideLast";V[V.HideGraph=16]="HideGraph";
V[V.RoundValues=32]="RoundValues";
function X(a,b,c,d){qb.call(this,a);this.l=b;this.V=c;this.I=d;a=document.createElement("div");a.style.cssText="text-align: center";a.textContent=this.name;c=document.createElement("div");0===(b&U.ha)?(this.U=document.createElement("div"),c.appendChild(this.U)):this.U=null;0===(b&U.ta)?(this.S=document.createElement("div"),c.appendChild(this.S)):this.S=null;0===(b&U.ga)?(this.T=document.createElement("div"),c.appendChild(this.T)):this.T=null;0===(b&U.La)?(this.R=document.createElement("div"),c.appendChild(this.R)):
this.R=null;this.element.appendChild(a);this.element.appendChild(c);0===(b&U.Ka)?(this.canvas=document.createElement("canvas"),this.canvas.style.cssText="display: block; padding: 0; margin: 0",this.canvas.width=100,this.canvas.height=30,this.G=this.canvas.getContext("2d"),this.element.appendChild(this.canvas)):this.G=this.canvas=null}aa(X,qb);
X.prototype.ra=function(){var a=this,b=mb(this.I),c=30/(1.2*b.max),d,e,f;0===(this.l&U.ua)?(d=b.min.toFixed(2),e=b.max.toFixed(2),f=b.pa.toFixed(2),b=b.oa.toFixed(2)):(d=Math.round(b.min).toString(),e=Math.round(b.max).toString(),f=Math.round(b.pa).toString(),b=Math.round(b.oa).toString());null!==this.U&&(this.U.textContent="min: \u00a0"+d+this.V);null!==this.S&&(this.S.textContent="max: \u00a0"+e+this.V);null!==this.T&&(this.T.textContent="mean: "+f+this.V);null!==this.R&&(this.R.textContent="last: "+
b+this.V);null!==this.G&&(this.G.fillStyle="#010",this.G.fillRect(0,0,100,30),this.G.fillStyle="#0f0",lb(this.I,function(b,d){a.G.fillRect(d,30,1,-(b*c))}))};var Y=null;function sb(){Y||(Y=document.createElement("div"),Y.style.cssText="position: fixed;opacity: 0.9;right: 0;bottom: 0",document.body.appendChild(Y))}
function tb(){var a;function b(a){0<f&&(g+=e*(1E3/(a-f)-g));f=a;kb(c,g);rb(d);requestAnimationFrame(b)}a=void 0===a?U.ha|U.ta|U.ga|U.ua:a;sb();var c=new jb,d=new X("FPS",a,"",c);Y.appendChild(d.element);var e=2/121,f=0,g=60;requestAnimationFrame(b)}function ub(){var a;function b(){kb(c,Math.round(performance.memory.usedJSHeapSize/1048576));rb(d);setTimeout(b,30)}a=void 0===a?U.ha|U.ga:a;sb();if(void 0!==performance.memory){var c=new jb,d=new X("Memory",a,"MB",c);Y.appendChild(d.element);b()}}
function vb(a){this.data=new jb;this.sa=new X("view update",a,"ms",this.data);this.startTime=-1}var wb={};function xb(){var a;a=void 0===a?0:a;sb();var b=wb["view update"];void 0===b&&(wb["view update"]=b=new vb(a),Y.appendChild(b.sa.element))}var Z=.5,yb=50,zb;var Ab=window.location.search.substr(1).split("&");if(0===Ab.length)zb={};else{for(var Bb={},Cb=0;Cb<Ab.length;++Cb){var Db=Ab[Cb].split("=",2);Bb[Db[0]]=1===Db.length?"":decodeURIComponent(Db[1].replace(/\+/g," "))}zb=Bb}var Eb=zb;
void 0!==Eb.n&&(yb=parseInt(Eb.n,10));void 0!==Eb.m&&(Z=parseFloat(Eb.m));var Ua=new hb(yb);function Fb(a){return F("div","popover left").children(F("div","popover-content").children(a),F("div","arrow"))}
var Gb=function(a,b){var c;c={select:a,A:b.prototype.A?function(a){return Sa(b,a)}:b};return function(a){return new E(65540,c,a,null,null)}}(function(a,b){b=Ua.H[b];return a&&a.Ca===b?a:{Ca:b,ba:b}},function(a){for(var b=gb(a),c=a.ca.length,d=Array(5),e=0;5>e;e++){var f=b[e],g=f.Y,k=e;if(f!==eb){var l;g?60<g?(l=(g%60).toFixed(2).split("."),l=Math.floor(g/60)+":"+l[0]+"."+l[1]):l=g.toFixed(2):l="";f=F("td",10<=g?"Query elapsed warn_long":1<=g?"Query elapsed warn":"Query elapsed short").children(l,
Sa(Fb,f.query)).key(e)}else f=F("td","").children("",Sa(Fb,f.query)).key(e);d[k]=f}return F("tr").children(F("td","dbname").children(a.name),F("td","query-count").children(F("span",20<=c?"label label-important":10<=c?"label label-warning":"label label-success").children(c)),d)});function Ta(a){a=a.H;for(var b=Array(a.length),c=0;c<a.length;c++)b[c]=Gb(c);return F("table").className("table table-striped latest-data").children(F("tbody").children(b))}
document.addEventListener("DOMContentLoaded",function(){function a(){for(var b=Z,c=Ua.H,d=0;d<c.length;d++)Math.random()<b&&(c[d]=new T(c[d].name));b=wb["view update"];void 0!==b&&(b.startTime=performance.now());Va(void 0);Wa();b=performance.now();c=wb["view update"];void 0!==c&&-1!==c.startTime&&(kb(c.data,b-c.startTime),rb(c.sa));setTimeout(a,0)}tb();ub();xb();var b=document.createElement("div");b.style.display="flex";var c=document.createElement("input");c.type="range";c.style.marginBottom="10px";
c.style.marginTop="5px";var d=document.createElement("label");d.textContent="mutations : "+(100*Z).toFixed(0)+"%";c.addEventListener("change",function(a){Z=Number.parseFloat(a.target.value)/100;d.textContent="mutations : "+(100*Z).toFixed(0)+"%"});b.appendChild(d);b.appendChild(c);document.body.insertBefore(b,document.body.firstChild);Ra();setTimeout(a,0)});}).call(this);

//# sourceMappingURL=bundle.js.map
