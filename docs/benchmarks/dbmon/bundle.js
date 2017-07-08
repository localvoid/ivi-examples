(function(){'use strict';var u,v="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function w(a,b){return Object.prototype.hasOwnProperty.call(a,b)}var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function x(a,b){if(b){var c=v;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}x("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var f in e)w(e,f)&&(a[f]=e[f])}return a}});function z(){z=function(){};v.Symbol||(v.Symbol=ba)}var ca=0;function ba(a){return"jscomp_symbol_"+(a||"")+ca++}
function A(){z();var a=v.Symbol.iterator;a||(a=v.Symbol.iterator=v.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return da(this)}});A=function(){}}function da(a){var b=0;return ea(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ea(a){A();a={next:a};a[v.Symbol.iterator]=function(){return this};return a}
function ha(a,b){A();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}x("Array.prototype.entries",function(a){return a?a:function(){return ha(this,function(a,c){return[a,c]})}});
x("String.prototype.repeat",function(a){return a?a:function(a){if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");var c=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var b="";a;)if(a&1&&(b+=c),a>>>=1)c+=c;return b}});x("Array.prototype.keys",function(a){return a?a:function(){return ha(this,function(a){return a})}});
x("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});function ia(a){A();var b=a[Symbol.iterator];return b?b.call(a):da(a)}
x("WeakMap",function(a){function b(a){this.J=(f+=Math.random()+1).toString();if(a){z();A();a=ia(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}function c(a){w(a,e)||aa(a,e,{value:{}})}function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}if(function(){if(!a||!Object.seal)return!1;try{var c=Object.seal({}),b=Object.seal({}),d=new a([[c,2],[b,3]]);if(2!=d.get(c)||3!=d.get(b))return!1;d.delete(c);d.set(b,4);return!d.has(c)&&4==d.get(b)}catch(k){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!w(a,e))throw Error("WeakMap key fail: "+a);a[e][this.J]=b;return this};b.prototype.get=function(a){return w(a,e)?a[e][this.J]:void 0};b.prototype.has=function(a){return w(a,e)&&w(a[e],this.J)};b.prototype.delete=function(a){return w(a,e)&&w(a[e],this.J)?delete a[e][this.J]:!1};return b});
x("Map",function(a){function b(){var a={};return a.s=a.next=a.head=a}function c(a,c){var b=a.o;return ea(function(){if(b){for(;b.head!=a.o;)b=b.s;for(;b.next!=b.head;)return b=b.next,{done:!1,value:c(b)};b=null}return{done:!0,value:void 0}})}function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.I[c];if(d&&w(a.I,c))for(a=0;a<d.length;a++){var e=d[a];if(b!==b&&e.key!==e.key||b===e.key)return{id:c,list:d,index:a,g:e}}return{id:c,list:d,
index:-1,g:void 0}}function e(a){this.I={};this.o=b();this.size=0;if(a){a=ia(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),b=new a(ia([[c,"s"]]));if("s"!=b.get(c)||1!=b.size||b.get({x:4})||b.set({x:4},"t")!=b||2!=b.size)return!1;var d=b.entries(),e=d.next();if(e.done||e.value[0]!=c||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?
!1:!0}catch(t){return!1}}())return a;z();A();var f=new WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.I[c.id]=[]);c.g?c.g.value=b:(c.g={next:this.o,s:this.o.s,head:this.o,key:a,value:b},c.list.push(c.g),this.o.s.next=c.g,this.o.s=c.g,this.size++);return this};e.prototype.delete=function(a){a=d(this,a);return a.g&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.I[a.id],a.g.s.next=a.g.next,a.g.next.s=a.g.s,a.g.head=null,this.size--,!0):!1};e.prototype.clear=function(){this.I=
{};this.o=this.o.s=b();this.size=0};e.prototype.has=function(a){return!!d(this,a).g};e.prototype.get=function(a){return(a=d(this,a).g)&&a.value};e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};e.prototype.keys=function(){return c(this,function(a){return a.key})};e.prototype.values=function(){return c(this,function(a){return a.value})};e.prototype.forEach=function(a,c){for(var b=this.entries(),d;!(d=b.next()).done;)d=d.value,a.call(c,d[1],d[0],this)};e.prototype[Symbol.iterator]=
e.prototype.entries;var g=0;return e});x("Object.setPrototypeOf",function(a){return a?a:"object"!=typeof"".__proto__?null:function(a,c){a.__proto__=c;if(a.__proto__!==c)throw new TypeError(a+" is not extensible");return a}});function ja(a,b){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=b(a[d],d);return c}function ka(){}function la(){this.F=[]}la.prototype.add=function(a){this.F.push(a)};
function ma(a){for(var b=0;b<a.F.length;b++)if(!0===(0,a.F[b])()){var c=a.F,d=b,e=c.length-1,f=c.pop();d!==e&&(c[d]=f)}}var na=navigator?navigator.userAgent:"",oa=0;!/iPad|iPhone|iPod/.test(na)||"MSStream"in window||(oa|="standalone"in navigator?3:1);-1<na.indexOf("Android")&&(oa|=4);var B=0;try{var pa=Object.defineProperty({},"passive",{get:function(){B|=1}});window.addEventListener("test",null,pa)}catch(a){}void 0!==document.createElementNS("http://www.w3.org/2000/svg","svg").innerHTML&&(B|=2);
"key"in KeyboardEvent.prototype&&(B|=4);"buttons"in MouseEvent.prototype&&(B|=8);"ontouchstart"in window&&(B|=16);"PointerEvent"in window&&(B|=32,0<navigator.maxTouchPoints&&(B|=64,1<navigator.maxTouchPoints&&(B|=128)));"sourceCapabilities"in UIEvent.prototype&&(B|=256);function C(){this.b=0;this.aa=this.G=this.H=null}C.prototype.update=function(){this.b|=1};C.prototype.write=function(a){this.b|=2;null===this.H&&(this.H=[]);this.H.push(a)};
C.prototype.read=function(a){this.b|=4;null===this.G&&(this.G=[]);this.G.push(a)};var qa=0,ra=!1,sa=[],ta,ua=0;if(!(oa&2)){var wa=new MutationObserver(va);ta=document.createTextNode("");wa.observe(ta,{characterData:!0})}function va(){for(;0<sa.length;){var a=sa;sa=[];for(var b=0;b<a.length;b++)a[b]();qa++}ra=!1}var za=[];window.addEventListener("message",Aa);function Aa(a){if(a.source===window&&"06526c5c-2dcc-4a4e-a86c-86f5dea6319d"===a.data){a=za;za=[];for(var b=0;b<a.length;b++)a[b]();qa++}}
var Ba=new la,Ca=!0,D,Da=[];function Ea(){var a=!D();if(Ca!==a)for(var b=0;b<Da.length;b++)Da[b](a)}"undefined"!==typeof document.hidden?(D=function(){return document.hidden},document.addEventListener("visibilitychange",Ea)):"undefined"!==typeof document.webkitHidden?(D=function(){return document.webkitHidden},document.addEventListener("webkitvisibilitychange",Ea)):D=function(){return!0};Ca=!D();var Fa=ka,Ga=!1,Ha=new C,Ia=new C,Ja=null;function Ka(){!0===Ga&&requestAnimationFrame(La)}
function Ma(){!1===Ga&&(Ga=!0,!1===ra&&(ra=!0,ua^=1,ta.nodeValue=ua?"1":"0"),sa.push(Ka))}function La(){var a;Ga=!1;var b=Ia;Ia=Ha;Ha=b;ma(Ba);do{for(;b.b&4;){b.b&=-5;var c=b.G;b.G=null;for(a=0;a<c.length;a++)c[a]()}for(;b.b&3;){if(b.b&2)for(b.b&=-3,c=b.H,b.H=null,a=0;a<c.length;a++)c[a]();b.b&1&&(b.b&=-2,Fa())}}while(b.b&7);for(Ca&&ma(Na);0!==(b.b&8);)for(b.b&=-9,c=b.aa,b.aa=null,a=0;a<c.length;a++)c[a]();null!==Ja&&(Ja.focus(),Ja=null);0<Na.F.length&&Ma();qa++}
Da.push(function(a){a&&0<Na.F.length&&Ma()});var Na=new la;function E(a,b,c,d,e){this.b=a;this.a=e;this.h=b;this.j=0;this.c=c;this.f=null;this.A=d}u=E.prototype;u.key=function(a){this.b|=256;this.j=a;return this};u.className=function(a){this.A=a;return this};u.style=function(a){null===this.c?(this.b|=512,this.c={w:null,style:a,i:null}):this.c.style=a;return this};u.i=function(a){null===this.c?(this.b|=512,this.c={w:null,style:null,i:a}):this.c.i=a;return this};
u.ra=function(a){null===this.c?(this.b|=512,this.c={w:a,style:null,i:null}):this.c.w=a;return this};
u.children=function(){var a=arguments,b=0,c=null;if(1===a.length)c=a[0],"object"===typeof c?null!==c&&(c.constructor===Array?1<c.length?b=64:1===c.length?(b=32,c=c[0]):c=null:b=32):b=16;else{var d,e=0,f=0;for(d=0;d<a.length;d++){var g=a[d];null!==g&&(g.constructor===Array?0<g.length&&(f+=g.length,e++,c=g):(f++,e++,c=g))}if(0<e)if(1===(e|f))"object"===typeof c?c.constructor===Array?1<f?b=64:(b=32,c=c[0]):b=32:b=16;else for(b=64,c=Array(f),d=f=0;d<a.length;d++)if(g=a[d],"object"===typeof g){if(null!==
g)if(g.constructor===Array)for(e=0;e<g.length;e++)c[f++]=g[e];else c[f++]=g,0===(g.b&256)&&(g.j=d)}else g=c[f++]=new E(1,null,null,null,g),g.j=d}this.b|=b;this.a=c;return this};u.value=function(a){this.a=a;return this};u.checked=function(a){this.a=a;return this};u.autofocus=function(a){!0===a&&(this.b|=262144);return this};function F(a){return 0!==(a.b&12)?F(a.a):a.f}
function Oa(a){return void 0===a.prototype.u?void 0===a.da?function(b){return new E(4,a,b,null,null)}:function(b){return new E(131076,a,b,null,null)}:function(b){return new E(8,a,b,null,null)}}var G=0!==(B&2)?function(a,b){a.innerHTML=b}:function(a,b,c){if(!1===c)a.innerHTML=b;else for(void 0===Pa&&(Pa=document.createElement("div")),a.textContent="",Pa.innerHTML="<svg>"+b+"</svg>",b=Pa.firstChild,c=b.firstChild;null!==c;)a.appendChild(c),c=b.firstChild},Pa;function H(a){a.source.addListener(a)}
function I(a){a.source.removeListener(a)}function Qa(a){if("function"===typeof a)H(a);else for(var b=0;b<a.length;b++){var c=a[b];null!==c&&H(c)}}function Ra(a){if("function"===typeof a)I(a);else for(var b=0;b<a.length;b++){var c=a[b];null!==c&&I(c)}}function Sa(a,b,c){null===c&&(c="");0===(b&8192)?a.className=c:a.setAttribute("class",c)}
function Ta(a,b,c){if(null===b){if(null!==c){var d=a.style;var e=Object.keys(c);for(a=0;a<e.length;a++){var f=e[a];d.setProperty(f,c[f])}}}else if(null===c)for(d=a.style,e=Object.keys(b),a=0;a<e.length;a++)d.removeProperty(e[a]);else{d=a.style;var g=0;e=Object.keys(b);for(a=0;a<e.length;a++){f=e[a];var l=c[f];void 0!==l?(b[f]!==l&&d.setProperty(f,l),g++):d.removeProperty(f)}e=Object.keys(c);for(a=0;g<e.length&&a<e.length;)f=e[a++],!1===b.hasOwnProperty(f)&&(d.setProperty(f,c[f]),g++)}}
function J(a,b,c,d){if(void 0===d){if(0===(b&8192)&&6<c.length)switch(c){case "acceptCharset":c="accept-charset";break;case "htmlFor":c="for"}a.removeAttribute(c)}else if(0!==(b&8192)){if(5<c.length&&120===c.charCodeAt(0)&&(58===c.charCodeAt(3)||58===c.charCodeAt(5))){if(109===c.charCodeAt(1)&&108===c.charCodeAt(2)){a.setAttributeNS("http://www.w3.org/XML/1998/namespace",c,d);return}if(108===c.charCodeAt(1)&&105===c.charCodeAt(2)&&110===c.charCodeAt(3)&&107===c.charCodeAt(4)){a.setAttributeNS("http://www.w3.org/1999/xlink",
c,d);return}}a.setAttribute(c,d)}else 5<c.length&&45===c.charCodeAt(4)?a.setAttribute(c,d):a[c]=d}
function Ua(a,b,c,d){var e;if(null===c){if(null!==d){var f=Object.keys(d);for(e=0;e<f.length;e++){var g=f[e];J(a,b,g,d[g])}}}else if(null===d)for(f=Object.keys(c),e=0;e<f.length;e++)J(a,b,f[e]);else{var l=0;f=Object.keys(c);for(e=0;e<f.length;e++){g=f[e];var n=d[g];void 0===n?J(a,b,g):(c[g]!==n&&J(a,b,g,n),l++)}f=Object.keys(d);for(e=0;l<f.length&&e<f.length;)g=f[e++],!1===c.hasOwnProperty(g)&&(J(a,b,g,d[g]),l++)}}
function K(a){var b=a.b;if(0!==(b&2)){if(0!==(b&96)){var c=a.a;if(0!==(b&64))for(var d=0;d<c.length;d++)K(c[d]);else K(c)}0!==(b&512)&&null!==a.c.i&&Qa(a.c.i)}else 0!==(b&12)&&(0!==(b&8)&&(b=a.f,b.l|=1,b.va()),K(a.a))}function M(a,b){var c=a.b;if(0!==(c&2)){if(0!==(c&96)){var d=a.a;0!==(c&64)?N(d,b):M(d,b)}0!==(c&512)&&null!==a.c.i&&Ra(a.c.i)}else 0!==(c&12)&&(0!==(c&65536)&&0!==(b&4)&&null!==a.h(a.a,a.c)?0!==(b&1)&&M(a.a,b^4):(M(a.a,b),0!==(c&8)&&0!==(b&1)&&(a=a.f,a.l&=-2,a.wa())))}
function N(a,b){for(var c=0;c<a.length;c++)M(a[c],b)}
function O(a,b,c,d){var e=b.b;if(0!==(e&108))if(0!==(e&96))if(a=b.f,b=b.a,0!==(e&64))for(e=0;e<b.length;e++)O(a,b[e],c,d);else O(a,b,c,d);else if(0!==(e&8)){e=b.f;var f=b.a;0!==(e.l&6|d&16)?(e.la(),b=b.a=e.u(),P(a,f,b,c,d),e.l&=-7,e.sa()):O(a,f,c,d)}else if(0!==(e&16384)){e=b.h;f=b.f;var g=e.select(f,b.c,c),l=b.a;f===g?O(a,l,c,d):(b.a=e.u(g.W),b.f=g,P(a,l,b.a,c,d))}else 0!==(e&32768)&&(0!==(d&32)&&(b.f=Object.assign({},c,b.c)),c=b.f),O(a,b.a,c,d)}function Q(a,b,c){a.removeChild(F(b));M(b,c|4)}
function R(a,b,c){var d=b.b,e=null;if(0!==(d&3)){if(0!==(d&1))a=document.createTextNode(b.a);else if(0!==(d&9216)?0!==(d&8192)?a=document.createElementNS("http://www.w3.org/2000/svg",b.h):0!==(d&2048)?a=document.createElement("textarea"):(a=document.createElement("input"),a.type=b.h):a=document.createElement(b.h),0!==(d&262144)&&(Ja=a),null!==b.A&&Sa(a,d,b.A),0!==(d&512)&&(e=b.c,null!==e.w&&Ua(a,d,null,e.w),null!==e.style&&Ta(a,null,e.style),null!==e.i&&(a.ja=e.i)),e=b.a,null!==e)if(0!==(d&80))if(0!==
(d&16))a.textContent=e;else for(d=0;d<e.length;d++){var f=e[d];f=R(a,f,c);a.insertBefore(f,null)}else 0!==(d&32)?(f=R(a,e,c),a.insertBefore(f,null)):0!==(d&1024)?(c=a,"string"===typeof e?c.value=e:c.checked=e):e&&G(a,e,0!==(d&8192));e=a}else 0!==(d&8)?(d=e=new b.h(b.c),d=b.a=d.u(),a=R(a,d,c)):0!==(d&65536)?(d=b.h,d=d(null,b.c),null!==d?(P(a,d,b.a,c,32),a=F(b.a)):a=R(a,b.a,c)):(0!==(d&49152)?0!==(d&16384)?(d=b.h,f=b.f=d.select(null,b.c,c),b.a=d.u(f.W)):c=e=Object.assign({},c,b.c):b.a=b.h(b.c),a=R(a,
b.a,c));b.f=e;return a}function S(a,b,c,d,e){d=R(a,c,d);a.insertBefore(d,b);0!==(e&1)&&K(c)}function T(a,b){return a.j===b.j&&0===((a.b^b.b)&256)}
function P(a,b,c,d,e){if(b===c)O(a,c,d,e);else{var f=c.b;if(!0===(0===((b.b^c.b)&130319)&&b.h===c.h&&b.j===c.j)){var g=c.f=b.f;if(0!==(f&3))if(0!==(f&1))b.a!==c.a&&(g.nodeValue=c.a);else{b.A!==c.A&&Sa(g,f,c.A);a=b.b;if(0!==((a|f)&512)){var l=null,n=null,k=null,q=null,t=null,h=null;if(0!==(a&512)){var p=b.c;l=p.w;k=p.style;t=p.i}0!==(f&512)&&(p=c.c,n=p.w,q=p.style,h=p.i);l!==n&&Ua(g,f,l,n);k!==q&&Ta(g,k,q);if(t!==h){if(0!==(e&1))if(p=t,l=h,null===p)null!==l&&Qa(l);else if(null===l)Ra(p);else if("function"===
typeof p)Qa(l),I(p);else if("function"===typeof l)for(H(l),n=0;n<p.length;n++)k=p[n],null!==k&&I(k);else{for(n=0;n<p.length&&n<l.length;)k=p[n],q=l[n++],k!==q&&(null!==q&&H(q),null!==k&&I(k));for(;n<l.length;)k=l[n++],null!==k&&H(k);for(;n<p.length;)k=p[n++],null!==k&&I(k)}g.ja=h}}if(b.a!==c.a){b=b.a;c=c.a;h=0;var r;if(null===b)if(0!==(f&80))if(0!==(f&16))g.textContent=c;else{do S(g,null,c[h++],d,e);while(h<c.length)}else 0!==(f&32)?S(g,null,c,d,e):0!==(f&1024)?"string"===typeof c?g.value=c:g.checked=
c:c&&G(g,c,0!==(f&8192));else if(null===c)0!==(a&144)?g.textContent="":0!==(a&64)?(g.textContent="",N(b,e|4)):0!==(a&32)&&Q(g,b,e);else if(0!==(a&144))if(0!==(f&144))if(0!==(f&16)){var m=g.firstChild;null!==m?m.nodeValue=c:g.textContent=c}else c?G(g,c,0!==(f&8192)):g.textContent="";else if(g.textContent="",0!==(f&64)){do S(g,null,c[h++],d,e);while(h<c.length)}else S(g,null,c,d,e);else if(0!==(a&64))if(0!==(f&144))0===(f&16)&&c?G(g,c,0!==(f&8192)):g.textContent=c,N(b,e|4);else if(0!==(f&64)){f=p=0;
l=b.length-1;n=c.length-1;h=b[p];a=c[f];k=b[l];q=c[n];a:for(;;){for(;T(h,a);){P(g,h,a,d,e);p++;f++;if(p>l||f>n)break a;h=b[p];a=c[f]}for(;T(k,q);){P(g,k,q,d,e);l--;n--;if(p>l||f>n)break a;k=b[l];q=c[n]}if(T(k,a))P(g,k,a,d,e),g.insertBefore(F(a),F(h)),l--,f++,k=b[l],a=c[f];else if(T(h,q))P(g,h,q,d,e),h=n+1,h=h<c.length?F(c[h]):null,g.insertBefore(F(q),h),p++,n--,h=b[p],q=c[n];else break}if(p>l){if(f<=n){h=n+1;h=h<c.length?F(c[h]):null;do S(g,h,c[f++],d,e);while(f<=n)}}else if(f>n){do Q(g,b[p++],e);
while(p<=l)}else{var xa=l-p+1;h=n-f+1;a=Array(h).fill(-1);var ya=!1,y=0,L=0;if(4>=h||16>=xa*h)for(k=p;k<=l;k++){if(t=b[k],L<h)for(q=f;q<=n;q++){var fa=c[q];if(T(t,fa)){a[q-f]=k;y>q?ya=!0:y=q;P(g,t,fa,d,e);L++;b[k]=null;break}}}else{for(k=f;k<=n;k++)t=c[k],0!==(t.b&256)?(void 0===m&&(m=new Map),m.set(t.j,k)):(void 0===r&&(r=new Map),r.set(t.j-p,k));for(k=p;k<=l;k++)t=b[k],L<h&&(q=0!==(t.b&256)?void 0!==m?m.get(t.j):void 0:void 0!==r?r.get(t.j-p):void 0,void 0!==q&&(fa=c[q],a[q-f]=k,y>q?ya=!0:y=q,P(g,
t,fa,d,e),L++,b[k]=null))}if(xa===b.length&&0===L)for(g.textContent="",N(b,e|4);f<h;)S(g,null,c[f++],d,e);else{for(k=xa-L;0<k;)t=b[p++],null!==t&&(Q(g,t,e),k--);if(!0===ya){r=a.slice(0);m=[];m.push(0);b=0;for(p=a.length;b<p;b++)if(-1!==a[b])if(l=m[m.length-1],a[l]<a[b])r[b]=l,m.push(b);else{l=0;for(n=m.length-1;l<n;)k=(l+n)/2|0,a[m[k]]<a[b]?l=k+1:n=k;a[b]<a[m[l]]&&(0<l&&(r[b]=m[l-1]),m[l]=b)}l=m.length;for(n=m[l-1];0<l--;)m[l]=n,n=r[n];q=m.length-1;for(k=h-1;0<=k;k--)-1===a[k]?(y=k+f,t=c[y],h=y+1,
h=h<c.length?F(c[h]):null,S(g,h,t,d,e)):0>q||k!==m[q]?(y=k+f,t=c[y],h=y+1,h=h<c.length?F(c[h]):null,g.insertBefore(F(t),h)):q--}else if(L!==h)for(k=h-1;0<=k;k--)-1===a[k]&&(y=k+f,t=c[y],h=y+1,h=h<c.length?F(c[h]):null,S(g,h,t,d,e))}}}else{m=-1;h=0;do{r=b[h];if(T(r,c)){P(g,r,c,d,e);m=h;break}h++}while(h<b.length);if(-1<m){for(h=0;h<m;h++)Q(g,b[h],e);for(h=m+1;h<b.length;h++)Q(g,b[h],e)}else g.textContent="",N(b,e|4),S(g,null,c,d,e)}else if(0!==(a&32))if(0!==(f&144))0===(f&16)&&c?G(g,c,0!==(f&8192)):
g.textContent=c,M(b,e|4);else if(0!==(f&64)){m=-1;h=0;do{r=c[h];if(T(b,r)){P(g,b,r,d,e);m=h;break}h++}while(h<c.length);if(-1<m){r=F(b);for(h=0;h<m;h++)S(g,r,c[h],d,e);h=m+1}else Q(g,b,e),h=0;for(;h<c.length;h++)S(g,null,c[h],d,e)}else P(g,b,c,d,e);else"string"===typeof c?g.value!==c&&(g.value=c):g.checked=c}}else 0!==(f&8)?(m=g,g=b.c,f=c.c,r=0,!0===m.da(g,f)&&(r=1,m.xa(g,f)),m.ra=f,g=b.a,0!==(r|m.l&6|e&16)?(m.la(),r=c.a=m.u(),P(a,g,r,d,e),m.l&=-7,m.sa()):(c.a=b.a,O(a,g,d,e))):(m=c.h,0!==(f&114688)?
0!==(f&16384)?(m=c.h,r=b.f,g=m.select(r,c.c,d),c.f=g,r===g?(c.a=b.a,O(a,c,d,e)):(c.a=m.u(g.W),P(a,b.a,c.a,d,e))):(0!==(f&32768)&&(0!==(e&32)||b.c!==c.c?(e|=32,d=c.f=Object.assign({},d,c.c)):d=c.f=b.f),P(a,b.a,c.a,d,e)):0!==(e&16)||0===(f&131072)&&b.c!==c.c||0!==(f&131072)&&!0===m.da(b.c,c.c)?(r=b.a,m=c.a=m(c.c),P(a,r,m,d,e)):(c.a=b.a,O(a,c.a,d,e)))}else g=R(a,c,d),a.replaceChild(g,F(b)),0!==(e&1)&&(M(b,e|4),K(c))}}var U=[],Va={},Wa=!1,Xa=0;
function Ya(){if(Wa){Wa=!1;for(var a=0;a<U.length;a++){var b=U[a],c=b.ba,d=b.ca,e=Xa|b.Y|1;if(b.U){var f=b.V;f?(f.constructor!==E&&(f=new E(1,null,null,null,"")),d?P(c,d,f,Va,e):(S(c,null,f,Va,1),oa&1&&(c.onclick=ka)),b.ca=f):d&&(c.removeChild(F(d)),M(d,5),c=U.pop(),c!==b&&U.length&&(U[U.indexOf(b)]=c));b.V=null;b.U=!1}else d&&O(c,d,Va,e|8);b.Y=0}}}
function Za(){var a=document.getElementById("app"),b=$a(ab),c=0;c=void 0===c?0:c;var d;a:{for(d=0;d<U.length;d++){var e=U[d];if(e.ba===a){d=e;break a}}d=void 0}d?(d.V=b,d.U=!0,d.Y=c):(d={ba:a,ca:null,V:b,U:!0,Y:c},U.push(d));bb();La()}function cb(a){bb(a);La()}function bb(a){Xa=void 0===a?0:a;Wa||(Wa=!0,Ma(),Ia.write(Ya))}Fa=cb;function db(a){return new E(2,"div",null,void 0===a?null:a,null)}function eb(a){return new E(2,"span",null,void 0===a?null:a,null)}
function fb(a){return new E(2,"td",null,void 0===a?null:a,null)}function gb(a,b){this.K=a;this.query=b}var hb=new gb(0,"***");function V(a){this.id=ib++;this.name=a;this.X=null;this.update()}V.prototype.update=function(){for(var a=[],b=Math.floor(10*Math.random()+1),c=0;c<b;c++)a.push(new gb(15*Math.random(),.1>Math.random()?"vacuum":.2>Math.random()?"<IDLE> in transaction":"SELECT blah FROM something"));this.X=a};
function jb(a){a=a.X.slice(0,5);for(a.sort(function(a,c){return a.K-c.K});5>a.length;)a.push(hb);return a}var ib=0;function kb(a){this.C=[];for(var b=0;b<a;b++)this.C.push(new V("cluster"+(b+1))),this.C.push(new V("cluster"+(b+1)+" slave"))}kb.prototype.update=function(){for(var a=this.C,b=0;b<a.length;b++)a[b]=new V(a[b].name)};function lb(a,b,c,d){this.min=a;this.max=b;this.fa=c;this.ea=d}
var mb=function(){function a(a){this.D=[];this.qa=a;this.v=-1}a.prototype.T=function(a){this.v=(this.v+1)%this.qa;this.D[this.v]=a};a.prototype.oa=function(a){for(var c=this.D,b=0;b<c.length;b++)a(c[(this.v+1+b)%c.length],b)};a.prototype.ma=function(){var a=this.D;if(0===a.length)return new lb(0,0,0,0);for(var c=a[(this.v+1)%a.length],d=c,e=0,f=0;f<a.length;f++){var g=a[(this.v+1+f)%a.length];g<c&&(c=g);g>d&&(d=g);e+=g}return new lb(c,d,e/a.length,a[this.v])};return a}(),nb=[],ob=-1;
function pb(a){nb.push(a);-1===ob&&requestAnimationFrame(function(){ob=-1;var a=nb;nb=[];for(var c=0;c<a.length;c++)a[c]()})}
var qb=function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return function(b,c){function d(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}(),rb=function(){function a(a){var c=this;this.ka=function(){c.sync();c.S=!1};this.name=a;this.element=document.createElement("div");this.element.style.cssText="padding: 2px;background-color: #020;font-family: monospace;font-size: 12px;color: #0f0";
this.S=!1;this.L()}a.prototype.L=function(){this.S||(this.S=!0,pb(this.ka))};a.prototype.sync=function(){throw Error("sync method not implemented");};return a}(),W,X=W||(W={});X[X.HideMin=1]="HideMin";X[X.HideMax=2]="HideMax";X[X.HideMean=4]="HideMean";X[X.HideLast=8]="HideLast";X[X.HideGraph=16]="HideGraph";X[X.RoundValues=32]="RoundValues";
var sb=function(a){function b(c,b,e,f){c=a.call(this,c)||this;c.l=b;c.R=e;c.D=f;e=document.createElement("div");e.style.cssText="text-align: center";e.textContent=c.name;f=document.createElement("div");0===(b&W.$)?(c.P=document.createElement("div"),f.appendChild(c.P)):c.P=null;0===(b&W.ha)?(c.N=document.createElement("div"),f.appendChild(c.N)):c.N=null;0===(b&W.Z)?(c.O=document.createElement("div"),f.appendChild(c.O)):c.O=null;0===(b&W.ua)?(c.M=document.createElement("div"),f.appendChild(c.M)):c.M=
null;c.element.appendChild(e);c.element.appendChild(f);0===(b&W.ta)?(c.canvas=document.createElement("canvas"),c.canvas.style.cssText="display: block; padding: 0; margin: 0",c.canvas.width=100,c.canvas.height=30,c.B=c.canvas.getContext("2d"),c.element.appendChild(c.canvas)):(c.canvas=null,c.B=null);return c}qb(b,a);b.prototype.sync=function(){var a=this,b=this.D.ma(),e=30/(1.2*b.max);if(0===(this.l&W.ia)){var f=b.min.toFixed(2);var g=b.max.toFixed(2);var l=b.fa.toFixed(2);b=b.ea.toFixed(2)}else f=
Math.round(b.min).toString(),g=Math.round(b.max).toString(),l=Math.round(b.fa).toString(),b=Math.round(b.ea).toString();null!==this.P&&(this.P.textContent="min: \u00a0"+f+this.R);null!==this.N&&(this.N.textContent="max: \u00a0"+g+this.R);null!==this.O&&(this.O.textContent="mean: "+l+this.R);null!==this.M&&(this.M.textContent="last: "+b+this.R);null!==this.B&&(this.B.fillStyle="#010",this.B.fillRect(0,0,100,30),this.B.fillStyle="#0f0",this.D.oa(function(c,b){a.B.fillRect(b,30,1,-(c*e))}))};return b}(rb);
(function(a){function b(c,b){c=a.call(this,c)||this;c.na=b;c.text=document.createElement("div");c.element.appendChild(c.text);return c}qb(b,a);b.prototype.sync=function(){this.text.textContent=this.name+": "+this.na.value};return b})(rb);var Y=null;function tb(){Y||(Y=document.createElement("div"),Y.style.cssText="position: fixed;opacity: 0.9;right: 0;bottom: 0",document.body.appendChild(Y))}
function ub(){var a;function b(a){0<f&&(g+=e*(1E3/(a-f)-g));f=a;c.T(g);d.L();requestAnimationFrame(b)}void 0===a&&(a=W.$|W.ha|W.Z|W.ia);tb();var c=new mb(100),d=new sb("FPS",a,"",c);Y.appendChild(d.element);var e=2/121,f=0,g=60;requestAnimationFrame(b)}
function vb(){var a;function b(){c.T(Math.round(performance.memory.usedJSHeapSize/1048576));d.L();setTimeout(b,30)}void 0===a&&(a=W.$|W.Z);tb();if(void 0!==performance.memory){var c=new mb(100),d=new sb("Memory",a,"MB",c);Y.appendChild(d.element);b()}}function wb(a){this.data=new mb(100);this.ga=new sb("view update",a,"ms",this.data);this.startTime=-1}var xb={};
function yb(){var a;void 0===a&&(a=0);tb();var b=xb["view update"];void 0===b&&(xb["view update"]=b=new wb(a),Y.appendChild(b.ga.element))}var Z=.5,zb=50,Ab;var Bb=window.location.search.substr(1).split("&");if(0===Bb.length)Ab={};else{for(var Cb={},Db=0;Db<Bb.length;++Db){var Eb=Bb[Db].split("=",2);Cb[Eb[0]]=1===Eb.length?"":decodeURIComponent(Eb[1].replace(/\+/g," "))}Ab=Cb}var Fb=Ab;void 0!==Fb.n&&(zb=parseInt(Fb.n,10));void 0!==Fb.m&&(Z=parseFloat(Fb.m));
var ab=new kb(zb),Gb=Oa(function(a){return db("popover left").children(db("popover-content").children(a),db("arrow"))}),Hb=function(a,b){var c={select:a,u:void 0!==b.prototype.u?function(a){return new E(8,b,a,null,null)}:b};return function(a){return new E(16388,c,a,null,null)}}(function(a,b){b=ab.C[b];return a&&a.pa===b?a:{pa:b,W:b}},function(a){var b=jb(a),c=a.X.length;return(new E(2,"tr",null,null,null)).children(fb("dbname").children(a.name),fb("query-count").children(eb(20<=c?"label label-important":
10<=c?"label label-warning":"label label-success").children(c)),ja(b,function(a,c){var b=a.K;if(0===b)b="";else if(60<b){var d=(b%60).toFixed(2).split(".");b=Math.floor(b/60)+":"+d[0]+"."+d[1]}else b=b.toFixed(2);d=a.K;return fb(0<d?10<=d?"Query elapsed warn_long":1<=d?"Query elapsed warn":"Query elapsed short":"").children(b,Gb(a.query)).key(c)}))}),$a=Oa(function(a){return(new E(2,"table",null,null,null)).className("table table-striped latest-data").children((new E(2,"tbody",null,null,null)).children(ja(a.C,
function(a,c){return Hb(c)})))});
document.addEventListener("DOMContentLoaded",function(){function a(){for(var b=Z,c=ab.C,d=0;d<c.length;d++)Math.random()<b&&(c[d]=new V(c[d].name));b=xb["view update"];void 0!==b&&(b.startTime=performance.now());cb();b=performance.now();c=xb["view update"];void 0!==c&&-1!==c.startTime&&(c.data.T(b-c.startTime),c.ga.L());setTimeout(a,0)}ub();vb();yb();var b=document.createElement("div");b.style.display="flex";var c=document.createElement("input");c.type="range";c.style.marginBottom="10px";c.style.marginTop=
"5px";var d=document.createElement("label");d.textContent="mutations : "+(100*Z).toFixed(0)+"%";c.addEventListener("change",function(a){Z=Number.parseFloat(a.target.value)/100;d.textContent="mutations : "+(100*Z).toFixed(0)+"%"});b.appendChild(d);b.appendChild(c);document.body.insertBefore(b,document.body.firstChild);Za();setTimeout(a,0)});}).call(this);

//# sourceMappingURL=bundle.js.map
