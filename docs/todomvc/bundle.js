(function(){'use strict';var t;function u(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
var v="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ba(){ba=function(){};v.Symbol||(v.Symbol=ca)}var da=0;function ca(a){return"jscomp_symbol_"+(a||"")+da++}
function ea(){ba();var a=v.Symbol.iterator;a||(a=v.Symbol.iterator=v.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(this)}});ea=function(){}}function fa(a){var b=0;return ga(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ga(a){ea();a={next:a};a[v.Symbol.iterator]=function(){return this};return a}
function w(a){if(!(a instanceof Array)){ea();var b=a[Symbol.iterator];a=b?b.call(a):fa(a);for(var c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var ha=0;try{var ia=Object.defineProperty({},"passive",{get:function(){ha|=1}});window.addEventListener("test",null,ia)}catch(a){}var ja=0;/iPad|iPhone|iPod/.test(navigator?navigator.userAgent:"")&&!window.Ga&&(ja|=1);function ka(){}
function x(a,b,c,d,e){this.a=a;this.s=b;this.i=null;this.j=c;this.B=d;this.o=this.w=null;this.g=e;this.N=this.h=null}t=x.prototype;t.key=function(a){this.i=a;return this};t.className=function(a){this.B=a;return this};t.style=function(a){this.w=a;return this};function z(a,b){a.o=b;return a}t.f=function(a){this.j=a;return this};t.children=function(a){Array.isArray(a)?(this.a|=64,this.g=la(a)):(this.a="object"===typeof a?this.a|32:this.a|16,this.g=a);return this};
function ma(a,b){a.a|=320;b&&(a.g=la(b));return a}t.value=function(a){this.g=a;return this};t.checked=function(a){this.g=a;return this};function na(a,b){a.N=b;return a}function A(a){return new x(1,null,null,null,a)}function B(a,b){return new x(2,a,null,void 0===b?null:b,null)}function C(a,b){return new x("textarea"===a?1538:514,a,null,void 0===b?null:b,null)}function D(a,b){return new x(a.prototype.A?8:4,a,b,null,null)}
function qa(a){var b=a.a,c=a.g;if(null!==c&&b&64)for(var b=Array(c.length),d=0;0>d;d++)b[d]=qa(c[d]);c=new x(a.a,a.s,a.j,a.B,a.a&12?null:a.g);c.i=a.i;c.o=a.o;c.w=a.w;return c}function ra(a,b,c){for(;c<a.length;c++){var d=a[c];null!==d&&(Array.isArray(d)?ra(d,b,0):b.push("object"===typeof d?d:A(d)))}}function la(a){for(var b=0;b<a.length;b++){var c=a[b];if(null===c||Array.isArray(c))return c=a.slice(0,b),ra(a,c,b),c;"object"!==typeof c&&(a[b]=A(c))}return a}
function sa(a,b){this.data=a;this.from=b}sa.prototype.get=function(a){var b=this,c;if("string"!==typeof a){for(var d=Object.keys(a),e=d.length;0<e&&b;){if(b.data)for(var f=0;f<d.length;f++){var g=d[f];if(g&&(c=b.data[g],void 0!==c)){a[g]=b.data[g];d[f]=null;e--;break}}b=b.from}return a}for(;b;){if(b.data&&(c=b.data[a],void 0!==c))return c;b=b.from}};var ta=new sa(void 0);function ua(a,b,c){c||(c="");b&4096?a.setAttribute("class",c):a.className=c}
function va(a,b,c){var d,e,f;if(null===b){if(null!==c)if(f=a.style,"string"===typeof c)f.cssText=c;else for(d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e]}else if(null===c)if(f=a.style,"string"===typeof b)f.cssText="";else for(d=Object.keys(b),a=0;a<d.length;a++)f[d[a]]=null;else if(f=a.style,"string"===typeof c)f.cssText=c;else if("string"===typeof b)for(f.cssText="",d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e];else{var g=0;d=Object.keys(b);for(a=0;a<d.length;a++){e=d[a];var h=c[e];
void 0!==h?(b[e]!==h&&(f[e]=h),g++):f[e]=null}d=Object.keys(c);for(a=0;g<d.length&&a<d.length;)e=d[a++],b.hasOwnProperty(e)||(f[e]=c[e],g++)}}
function E(a,b,c,d){if(b&2048&&"volume"===c)a.volume!==d&&(a.volume=void 0===d?null:d);else if(void 0===d)a.removeAttribute(c);else{if(5<c.length)if(120===c.charCodeAt(0)&&(58===c.charCodeAt(3)||58===c.charCodeAt(5))){if(109===c.charCodeAt(1)&&108===c.charCodeAt(2)){a.setAttributeNS("http://www.w3.org/XML/1998/namespace",c,d);return}if(108===c.charCodeAt(1)&&105===c.charCodeAt(2)&&110===c.charCodeAt(3)&&107===c.charCodeAt(4)){a.setAttributeNS("http://www.w3.org/1999/xlink",c,d);return}}else if(45===
c.charCodeAt(4)){a.setAttribute(c,d);return}a[c]=d}}function wa(a,b,c,d){var e,f,g;if(null===c){if(null!==d)for(f=Object.keys(d),e=0;e<f.length;e++)g=f[e],E(a,b,g,d[g])}else if(null===d)for(f=Object.keys(c),e=0;e<f.length;e++)E(a,b,f[e]);else{var h=0;f=Object.keys(c);for(e=0;e<f.length;e++){g=f[e];var n=d[g];void 0===n?E(a,b,g):(c[g]!==n&&E(a,b,g,n),h++)}f=Object.keys(d);for(e=0;h<f.length&&e<f.length;)g=f[e++],c.hasOwnProperty(g)||(E(a,b,g,d[g]),h++)}}
function xa(a){a=a.target||window;a.sa&&(a=a.sa);return 3===a.nodeType?a.parentNode:a}var ya=ha&1?{capture:!0,passive:!0}:!0,za=ha&1?{passive:!0}:!1;function Aa(a){return a&2?a&1?ya:za:a&1?!0:!1}
function Ba(a,b,c){var d,e,f;if(null===b){if(null!==c)for(e=Object.keys(c),d=0;d<e.length;d++)Ca(c[e[d]].D)}else if(null===c)for(e=Object.keys(b),d=0;d<e.length;d++)Da(b[e[d]].D);else{var g=0;e=Object.keys(b);for(d=0;d<e.length;d++){f=e[d];var h=b[f];f=c[f];void 0!==f?(h!==f&&(Ca(f.D),Da(h.D)),g++):Da(h.D)}e=Object.keys(c);for(d=0;g<e.length&&d<e.length;)f=e[d++],b.hasOwnProperty(f)||(Ca(c[f].D),g++)}a._ev=null===c?void 0:c}
function F(a){var b=a.a;if(b&12)if(b&8){var c=a.g;c.c|=8;F(c.root)}else F(a.g);else if(!(b&2560)&&(c=a.g,null!==c&&b&96))if(b&64)for(var d=0;d<c.length;d++)F(c[d]);else F(c);a.N&&a.N(b&12?a.g:a.h)}function G(a){var b=a.a;if(b&12)if(b&8){var c=a.g;G(c.root);c.c&=-265}else G(a.g);else if(b&2){if(!(b&2560)&&(c=a.g,null!==c&&b&96))if(b&64)for(b=0;b<c.length;b++)G(c[b]);else G(c);a.o&&Ba(a.h,a.o,null)}a.N&&a.N(null)}function H(a){for(var b=0;b<a.length;b++)G(a[b])}
function Ea(a,b,c,d){var e=b.a;if(e&12)e&8?(a=b.g,a.L!==c&&(a.c|=4,a.L=c),Fa(a)):2>b.s.length?b.g&&Ea(a,b.g,c,d):Ga(a,b.g,b.g,c,d);else if(!(e&2560)&&(b=b.g,null!==b&&e&96))if(e&64)for(e=0;e<b.length;e++)Ea(a,b[e],c,d);else Ea(a,b,c,d)}function I(a,b){a.removeChild(b.h);G(b)}function Ha(a){a.c&=-193;a.c|=(a.c&64)<<1;a.K=a.L}function Ia(a){a.c&=-49;var b=a.root=a.A()||A("");a.c|=(a.c&16)<<1;return b}
function Fa(a){var b=a.c,c=a.Z;if(b&8&&b&7){var d=a.root;b&4&&Ha(a);b&35?(b=a.Y,c=Ia(a),c=a.Z=J(b,d,c,a.K),a.c&=-1032):d&&Ea(a.Y,d,a.K,a)}return c}function Ga(a,b,c,d,e){var f=c.s;b=b.g;f=c.g=f(c.j,d)||A("");a=J(a,b,f,d,e);return c.h=a}
function L(a,b,c,d){b.h&&(b=qa(b));var e=b.a;if(e&3)if(e&1)a=document.createTextNode(b.g);else{e&512?e&1024?a=document.createElement("textarea"):(a=document.createElement("input"),a.type=b.s):a=e&4096?document.createElementNS("http://www.w3.org/2000/svg",b.s):document.createElement(b.s);b.j&&wa(a,e,null,b.j);null!==b.B&&ua(a,e,b.B);null!==b.w&&va(a,null,b.w);b.o&&Ba(a,null,b.o);var f=b.g;if(null!==f)if(e&80)if(e&16)a.textContent=f;else for(e=0;e<f.length;e++)a.insertBefore(L(a,f[e],c,d),null);else e&
32?a.insertBefore(L(a,f,c,d),null):e&512?(c=a,"string"===typeof f?c.value=f:c.checked=f):a.innerHTML=f}else e&8?(c=b.g=new b.s(b.j,c,d),c.Y=a,Ha(c),d=Ia(c),a=c.Z=L(a,d,c.K,c)):(f=b.g=(0,b.s)(b.j,c)||A(""),a=b.h=L(a,f,c,d));return b.h=a}function M(a,b,c,d,e){a=a.insertBefore(L(a,c,d,e),b);F(c);return a}function Ja(a,b){return(a.a&7695)===(b.a&7695)&&a.s===b.s&&a.i===b.i}
function Ka(a,b,c,d,e){if(b===c)return c.h;c.h&&(c=qa(c));var f=b.a;if(f&3)if(a=c.h=b.h,f&1)b.g!==c.g&&(a.nodeValue=c.g);else{if(b.j!==c.j&&wa(a,f,b.j,c.j),b.B!==c.B&&ua(a,f,c.B),b.w!==c.w&&va(a,b.w,c.w),b.o!==c.o&&Ba(a,b.o,c.o),b.g!==c.g){var f=b.h,g=b.a,h=c.a;b=b.g;c=c.g;if(null===b)if(h&80)if(h&16)f.textContent=c;else for(g=0;g<c.length;g++)M(f,null,c[g],d,e);else h&32?M(f,null,c,d,e):h&512?"string"===typeof c?f.value=c:f.checked=c:f.innerHTML=c;else if(null===c)g&144?f.textContent="":g&64?(f.textContent=
"",H(b)):g&32?I(f,b):"string"===typeof b?f.value="":f.checked=!1;else if(g&144)if(h&144)h&16?(d=f.firstChild)?d.nodeValue=c:f.textContent=c:f.innerHTML=c;else if(f.textContent="",h&64)for(g=0;g<c.length;g++)M(f,null,c[g],d,e);else M(f,null,c,d,e);else if(g&64)if(h&144)h&16?f.textContent=c:f.innerHTML=c,H(b);else if(h&64)if(0===b.length)for(g=0;g<c.length;g++)M(f,null,c[g],d,e);else if(0===c.length)f.textContent="",H(b);else if(1===b.length&&1===c.length)J(f,b[0],c[0],d,e);else if(g&h&256){var n=0,
g=0,m=b.length-1,p=c.length-1,l=b[n],h=c[g],k=b[m],q=c[p],r,V;a:for(;;){for(;l.i===h.i;){J(f,l,h,d,e);n++;g++;if(n>m||g>p)break a;l=b[n];h=c[g]}for(;k.i===q.i;){J(f,k,q,d,e);m--;p--;if(n>m||g>p)break a;k=b[m];q=c[p]}if(k.i===h.i){J(f,k,h,d,e);f.insertBefore(h.h,l.h);m--;g++;if(n>m||g>p)break;k=b[m];h=c[g]}else if(l.i===q.i){J(f,l,q,d,e);l=p+1;l=l<c.length?c[l].h:null;f.insertBefore(q.h,l);n++;p--;if(n>m||g>p)break;l=b[n];q=c[p]}else break}if(n>m)for(l=p+1,l=l<c.length?c[l].h:null;g<=p;)M(f,l,c[g++],
d,e);else if(g>p)for(;n<=m;)I(f,b[n++]);else{var oa=m-n+1,l=p-g+1,h=Array(l).fill(-1),pa=!1,y=0,K=0;if(4>=l||16>=oa*l)for(k=n;k<=m;k++){if(r=b[k],K<l)for(q=g;q<=p;q++)if(V=c[q],r.i===V.i){h[q-g]=k;y>q?pa=!0:y=q;J(f,r,V,d,e);K++;b[k]=null;break}}else{for(var Ra=new Map,k=g;k<=p;k++)r=c[k],Ra.set(r.i,k);for(k=n;k<=m;k++)r=b[k],K<l&&(q=Ra.get(r.i),void 0!==q&&(V=c[q],h[q-g]=k,y>q?pa=!0:y=q,J(f,r,V,d,e),K++,b[k]=null))}if(oa===b.length&&0===K)for(f.textContent="",H(b);g<l;)M(f,null,c[g++],d,e);else{for(k=
oa-K;0<k;)r=b[n++],null!==r&&(I(f,r),k--);if(pa){n=h.slice(0);b=[];b.push(0);m=0;for(p=h.length;m<p;m++)if(-1!==h[m])if(k=b[b.length-1],h[k]<h[m])n[m]=k,b.push(m);else{k=0;for(q=b.length-1;k<q;)r=(k+q)/2|0,h[b[r]]<h[m]?k=r+1:q=r;h[m]<h[b[k]]&&(0<k&&(n[m]=b[k-1]),b[k]=m)}k=b.length;for(q=b[k-1];0<k--;)b[k]=q,q=n[q];q=b.length-1;for(k=l-1;0<=k;k--)-1===h[k]?(y=k+g,r=c[y],l=y+1,l=l<c.length?c[l].h:null,M(f,l,r,d,e)):0>q||k!==b[q]?(y=k+g,r=c[y],l=y+1,l=l<c.length?c[l].h:null,f.insertBefore(r.h,l)):q--}else if(K!==
l)for(k=l-1;0<=k;k--)-1===h[k]&&(y=k+g,r=c[y],l=y+1,l=l<c.length?c[l].h:null,M(f,l,r,d,e))}}}else{g=l=0;n=b.length-1;for(h=c.length-1;l<=n&&g<=h;){m=b[l];p=c[g];if(!Ja(m,p))break;l++;g++;Ka(f,m,p,d,e)}for(;l<=n&&g<=h;){m=b[n];p=c[h];if(!Ja(m,p))break;n--;h--;Ka(f,m,p,d,e)}for(;l<=n&&g<=h;)m=b[l++],p=c[g++],J(f,m,p,d,e);if(l<=n){do I(f,b[l++]);while(l<=n)}else if(g<=h){b=h+1;b=b<c.length?c[b].h:null;do M(f,b,c[g++],d,e);while(g<=h)}}else if(0<b.length)for(J(f,b[0],c,d,e),g=1;g<b.length;g++)I(f,b[g]);
else M(f,null,c,d,e);else if(g&32)if(h&144)h&16?f.textContent=c:f.innerHTML=c,G(b);else if(h&64)if(0<c.length)for(J(f,b,c[0],d,e),g=1;g<c.length;g++)M(f,null,c[g],d,e);else I(f,b);else J(f,b,c,d,e);else"string"===typeof c?f.value!==c&&(f.value=c):f.checked=c}}else f&8?(e=c.g=b.g,a=c.j,e.c|=1,e.j=a,e.c&128&&(e.c|=4),e.L!==d&&(e.c|=4,e.L=d),a=c.h=Fa(e)):a=c.h=Ga(a,b,c,d,e);return a}function J(a,b,c,d,e){if(Ja(b,c))return Ka(a,b,c,d,e);d=L(a,c,d,e);a.replaceChild(d,b.h);G(b);F(c);return d}
function La(){this.a=0;this.J=[];this.fa=this.M=this.O=null}La.prototype.write=function(a){this.a|=2;null===this.O&&(this.O=[]);this.O.push(a)};La.prototype.read=function(a){this.a|=4;null===this.M&&(this.M=[]);this.M.push(a)};var N=0,Ma=0,Na=[],Oa=[],Pa=new La,Qa=new La,O=[],Sa=document.createTextNode(""),Ta=0,Ua="__ivi"+Math.random();(new MutationObserver(Va)).observe(Sa,{characterData:!0});window.addEventListener("message",Wa);function Xa(){0===(N&4)&&(N|=4,requestAnimationFrame(Ya))}
function Wa(a){if(a.source===window&&a.data===Ua){N&=-3;a=Oa;Oa=[];for(var b=0;b<a.length;b++)a[b]();Ma++}}
function Ya(){var a,b;N&=-5;N|=8;var c=Qa;Qa=Pa;Pa=c;for(b=0;b<O.length;b++)O[b].c|=2;do{for(;0!==(c.a&4);)for(c.a&=-5,a=c.M,c.M=null,b=0;b<a.length;b++)a[b]();for(;0!==(c.a&3);){if(0!==(c.a&1)){c.a&=-2;var d=c.J;for(b=0;b<d.length;b++){var e=d[b];if(null!==e)for(d[b]=null,a=0;a<e.length;a++)Fa(e[a])}}if(0!==(c.a&2))for(c.a&=-3,a=c.O,c.O=null,b=0;b<a.length;b++)a[b]()}b=0;for(a=O.length;b<a;)d=O[b++],0===(d.c&256)?(d.c&=-513,b===a?O.pop():O[--b]=O.pop()):Fa(d)}while(0!==(c.a&7));for(N&=-9;0!==(c.a&
8);)for(c.a&=-9,a=c.fa,c.fa=null,b=0;b<a.length;b++)a[b]();0<O.length&&Xa();Ma++}function Va(){for(;0<Na.length;){var a=Na;Na=[];for(var b=0;b<a.length;b++)a[b]();Ma++}N&=-2}function Za(a){0===(N&1)&&(N|=1,Ta^=1,Sa.nodeValue=Ta?"1":"0");Na.push(a)}function $a(a){0===(N&2)&&(N|=2,window.postMessage(Ua,"*"));Oa.push(a)}function P(){this.U=0;this.m=this.I=null}P.prototype.$=function(){};
P.prototype.S=function(){if(this.I)for(var a=0;this.I.length;a++){var b=this.I[a];0===b.U++&&b.S();null===b.m&&(b.m=[]);b.m.push(this)}};P.prototype.V=function(){if(this.I)for(var a=0;this.I.length;a++){var b=this.I[a];0===--b.U&&b.V();1<b.m.length?b.m[b.m.indexOf(this)]=b.m.pop():b.m=null}};function Ca(a){0===a.U++&&a.S()}function Da(a){0===--a.U&&a.V()}
function ab(a,b,c){b.currentTarget=a.target;b.a=b.target===a.target?b.a|64:b.a&-65;for(var d=0;d<a.ha.length;d++){var e=a.ha[d],f=e.c&1;if(c&&f||!c&&!f)if(e.va(b),b.a&2)break}}function Q(a,b,c){P.call(this);this.c=a;this.name=b;this.ua=c;this.ga=this.$.bind(this);this.H=!1}u(Q,P);
Q.prototype.$=function(a){for(var b=this.m,c=xa(a),d=[];c;){var e=c,f=e._ev;if(f){for(var g=void 0,h=Object.keys(f),n=0;n<h.length;n++){var m=f[h[n]];m.D===this&&(g?g.push(m):g=[m])}g&&d.push({target:e,ha:g})}c=c.parentElement}var p;if(d||b)p=new this.ua(0,a,xa(a));if(0<d.length)a:for(a=p,b=!!(this.c&4),c=d.length-1;;){for(;0<=c;)if(ab(d[c--],a,!0),a.a&1)break a;a.a|=128;a.currentTarget===d[0].target&&ab(d[0],a,!1);if(b)for(c=1;c<d.length;)if(ab(d[c++],a,!1),a.a&1)break a;break}if(p&&(d=p)&&this.m)for(p=
0;p<this.m.length;p++)this.m[p].$(d)};Q.prototype.S=function(){this.H?this.H=!1:(P.prototype.S.call(this),document.addEventListener(this.name,this.ga,Aa(this.c)))};Q.prototype.V=function(){var a=this;this.H||(this.H=!0,$a(function(){a.H&&(document.removeEventListener(a.name,a.ga,Aa(a.c)),P.prototype.V.call(a),a.H=!1)}))};function R(a,b,c){this.a=a;this.b=b;this.currentTarget=this.target=c}R.prototype.stopPropagation=function(){this.a|=1};R.prototype.stopImmediatePropagation=function(){this.a|=3};
R.prototype.preventDefault=function(){this.a|=4};v.Object.defineProperties(R.prototype,{defaultPrevented:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&4)}},bubbles:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&8)}},cancelable:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&16)}},isTrusted:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&32)}},eventPhase:{configurable:!0,enumerable:!0,get:function(){return this.a&64?2:this.a&128?3:1}}});
function S(a){R.apply(this,arguments)}u(S,R);S.prototype.preventDefault=function(){this.a|=4;this.b.preventDefault()};
v.Object.defineProperties(S.prototype,{timeStamp:{configurable:!0,enumerable:!0,get:function(){return this.b.timeStamp}},type:{configurable:!0,enumerable:!0,get:function(){return this.b.type}},AT_TARGET:{configurable:!0,enumerable:!0,get:function(){return this.b.AT_TARGET}},BUBBLING_PHASE:{configurable:!0,enumerable:!0,get:function(){return this.b.BUBBLING_PHASE}},CAPTURING_PHASE:{configurable:!0,enumerable:!0,get:function(){return this.b.CAPTURING_PHASE}}});
function T(a){S.apply(this,arguments)}u(T,S);v.Object.defineProperties(T.prototype,{detail:{configurable:!0,enumerable:!0,get:function(){return this.b.detail}},view:{configurable:!0,enumerable:!0,get:function(){return this.b.view}}});function bb(a){T.apply(this,arguments)}u(bb,T);bb.prototype.getModifierState=function(a){return this.b.getModifierState(a)};
v.Object.defineProperties(bb.prototype,{altKey:{configurable:!0,enumerable:!0,get:function(){return this.b.altKey}},char:{configurable:!0,enumerable:!0,get:function(){return this.b.char}},charCode:{configurable:!0,enumerable:!0,get:function(){return this.b.charCode}},ctrlKey:{configurable:!0,enumerable:!0,get:function(){return this.b.ctrlKey}},key:{configurable:!0,enumerable:!0,get:function(){return this.b.key}},keyCode:{configurable:!0,enumerable:!0,get:function(){return this.b.keyCode}},locale:{configurable:!0,
enumerable:!0,get:function(){return this.b.locale}},location:{configurable:!0,enumerable:!0,get:function(){return this.b.location}},metaKey:{configurable:!0,enumerable:!0,get:function(){return this.b.metaKey}},repeat:{configurable:!0,enumerable:!0,get:function(){return this.b.repeat}},shiftKey:{configurable:!0,enumerable:!0,get:function(){return this.b.shiftKey}},which:{configurable:!0,enumerable:!0,get:function(){return this.b.which}},code:{configurable:!0,enumerable:!0,get:function(){return this.b.code}},
ja:{configurable:!0,enumerable:!0,get:function(){return this.b.ja}},ka:{configurable:!0,enumerable:!0,get:function(){return this.b.ka}},la:{configurable:!0,enumerable:!0,get:function(){return this.b.la}},ma:{configurable:!0,enumerable:!0,get:function(){return this.b.ma}},na:{configurable:!0,enumerable:!0,get:function(){return this.b.na}},oa:{configurable:!0,enumerable:!0,get:function(){return this.b.oa}}});function U(a){T.apply(this,arguments)}u(U,T);U.prototype.getModifierState=function(a){return this.b.getModifierState(a)};
v.Object.defineProperties(U.prototype,{altKey:{configurable:!0,enumerable:!0,get:function(){return this.b.altKey}},button:{configurable:!0,enumerable:!0,get:function(){return this.b.button}},buttons:{configurable:!0,enumerable:!0,get:function(){return this.b.buttons}},clientX:{configurable:!0,enumerable:!0,get:function(){return this.b.clientX}},clientY:{configurable:!0,enumerable:!0,get:function(){return this.b.clientY}},ctrlKey:{configurable:!0,enumerable:!0,get:function(){return this.b.ctrlKey}},
fromElement:{configurable:!0,enumerable:!0,get:function(){return this.b.fromElement}},layerX:{configurable:!0,enumerable:!0,get:function(){return this.b.layerX}},layerY:{configurable:!0,enumerable:!0,get:function(){return this.b.layerY}},metaKey:{configurable:!0,enumerable:!0,get:function(){return this.b.metaKey}},xa:{configurable:!0,enumerable:!0,get:function(){return this.b.xa}},ya:{configurable:!0,enumerable:!0,get:function(){return this.b.ya}},offsetX:{configurable:!0,enumerable:!0,get:function(){return this.b.offsetX}},
offsetY:{configurable:!0,enumerable:!0,get:function(){return this.b.offsetY}},pageX:{configurable:!0,enumerable:!0,get:function(){return this.b.pageX}},pageY:{configurable:!0,enumerable:!0,get:function(){return this.b.pageY}},relatedTarget:{configurable:!0,enumerable:!0,get:function(){return this.b.relatedTarget}},screenX:{configurable:!0,enumerable:!0,get:function(){return this.b.screenX}},screenY:{configurable:!0,enumerable:!0,get:function(){return this.b.screenY}},shiftKey:{configurable:!0,enumerable:!0,
get:function(){return this.b.shiftKey}},toElement:{configurable:!0,enumerable:!0,get:function(){return this.b.toElement}},which:{configurable:!0,enumerable:!0,get:function(){return this.b.which}},x:{configurable:!0,enumerable:!0,get:function(){return this.b.x}},y:{configurable:!0,enumerable:!0,get:function(){return this.b.y}}});function cb(a){T.apply(this,arguments)}u(cb,T);v.Object.defineProperties(cb.prototype,{relatedTarget:{configurable:!0,enumerable:!0,get:function(){return this.b.relatedTarget}}});
function W(a,b){return{D:a,c:0,va:b}}var db=new Q(1,"blur",cb),eb=new Q(5,"change",S),fb=new Q(5,"click",U),gb=new Q(5,"dblclick",U),hb=new Q(5,"input",S),ib=new Q(5,"keydown",bb);function X(a,b,c){this.c=0;this.depth=c?c.depth+1:0;this.j=a;this.K=this.L=b;this.Z=this.Y=this.root=null}X.prototype.A=function(){};
X.prototype.l=function(){if(this.c&8&&(this.c|=2,!(this.c&1024))){var a;N&8?a=Pa:(Xa(),a=Qa);if(0===(this.c&1024)){this.c|=1024;var b=this.depth;for(a.a|=1;b>=a.J.length;)a.J.push(null);var c=a.J[b];null===c?a.J[b]=[this]:c.push(this)}}};v.Object.defineProperties(X.prototype,{context:{configurable:!0,enumerable:!0,get:function(){this.c|=16;return this.K}},f:{configurable:!0,enumerable:!0,get:function(){this.c|=64;return this.j}}});var Y=[];
function jb(){var a,b=D(kb,lb),c=mb;a=void 0===a?ta:a;var d;a:{for(d=0;d<Y.length;d++){var e=Y[d];if(e.ra===c){d=e;break a}}d=void 0}b?d?(a=J(c,d.ea,b,a),d.ea=b,d.ta=a):(a=M(c,null,b,a),Y.push({ra:c,ea:b,ta:a}),ja&1&&(c.onclick=ka)):d&&(I(c,d.ea),b=Y.pop(),b!==d&&Y.length&&(Y[Y.indexOf(d)]=b))}function nb(a,b){this.id=a.toString();this.title=b;this.v=!1}function ob(a){this.location=0;this.entries=[];this.pa=0;this.X=!1;this.ba=a}
ob.prototype.l=function(){var a=this;this.X||(this.X=!0,Za(function(){a.ba();a.X=!1}))};function pb(a){var b=lb;b.location=a;b.l()}ob.prototype.T=function(a){a=a.trim();""!==a&&(this.entries.push(new nb(this.pa++,a)),this.l())};function qb(a,b){for(var c=a.entries,d=0;d<c.length;d++)if(c[d]===b){c.splice(d,1);a.l();break}}function rb(a,b){a.entries.forEach(function(a){a.v=b});a.l()}
function sb(){var a=this;X.apply(this,[].concat(w(arguments)));this.W="";this.da=W(ib,function(b){13===b.keyCode&&(a.f.T(a.W),a.W="",a.l())});this.Da=W(hb,function(b){a.W=b.target.value;a.l()})}u(sb,X);sb.prototype.A=function(){return B("header").children([B("h1").children("todos"),z(C("text").f({id:"new-todo",placeholder:"What needs to be done",autofocus:!0}),{wa:this.da,input:this.Da}).value(this.W)])};
function tb(){var a=this;X.apply(this,[].concat(w(arguments)));this.Ba=W(fb,function(b){b.preventDefault();a.f.ca()})}u(tb,X);
tb.prototype.A=function(){var a=this.f,b=a.location,c=a.P,a=a.C;return B("footer").f({id:"footer"}).children([B("ul").f({id:"filters"}).children([B("li").children(B("a",0===b?"selected":void 0).f({href:"#!/"}).children("All"))," ",B("li").children(B("a",1===b?"selected":void 0).f({href:"#!/active"}).children("Active"))," ",B("li").children(B("a",2===b?"selected":void 0).f({href:"#!/completed"}).children("Completed"))]),B("span").f({id:"todo-count"}).children([B("strong").children(c),1<c?" items left":
" item left"]),0<a?z(B("button").f({id:"clear-completed"}),{click:this.Ba}).children("Clear completed ("+a+")"):null])};
function Z(){var a=this;X.apply(this,[].concat(w(arguments)));this.F="";this.R=!1;this.Ca=W(fb,function(b){qb(a.f.u,a.f.G);b.preventDefault()});this.Aa=W(eb,function(b){var c=a.f.u,d=a.f.G;d.v=!d.v;c.l();b.preventDefault()});this.Ea=W(gb,function(){a.F=a.f.G.title;a.R=!0;a.l()});this.Fa=W(hb,function(b){a.F=b.target.value});this.za=W(db,function(){a.F="";a.R=!1;a.l()});this.da=W(ib,function(b){if(13===b.keyCode){b=a.f.u;var c=a.f.G,d=a.F,d=d.trim();""===d?qb(b,c):c.title=d;b.l();a.F="";a.R=!1;a.l()}else 27===
b.keyCode&&(a.F="",a.R=!1,a.l())})}u(Z,X);Z.prototype.A=function(){var a=this.f.G,b=B("div","view").children([z(C("checkbox","toggle"),{qa:this.Aa}).checked(a.v),z(B("label"),{Ha:this.Ea}).children(a.title),z(B("button","destroy"),{click:this.Ca})]),c;this.R?(c=a.v?"editing completed":"editing",a=na(z(C("text","edit"),{input:this.Fa,blur:this.za,wa:this.da}),function(a){a&&a.focus()}).value(this.F),b=[b,a]):(a.v&&(c="completed"),b=[b]);return B("li",c).children(b)};
function ub(a){X.apply(this,arguments)}u(ub,X);ub.prototype.A=function(){var a=this.f,b=a.u,c=a.P,d=a.C,a=a.entries;switch(b.location){case 1:c=0===c?null:a.map(function(a){return a.v?null:D(Z,{u:b,G:a}).key(a.id)});break;case 2:c=0===d?null:a.map(function(a){return a.v?D(Z,{u:b,G:a}).key(a.id):null});break;default:c=a.map(function(a){return D(Z,{u:b,G:a}).key(a.id)})}return ma(B("ul").f({id:"todo-list"}),c)};
function vb(){var a=this;X.apply(this,[].concat(w(arguments)));this.ba=W(eb,function(b){b.preventDefault();rb(a.f.u,a.f.C!==a.f.entries.length)})}u(vb,X);vb.prototype.A=function(){return B("section").f({id:"main"}).children([z(C("checkbox").f({id:"toggle-all"}),{qa:this.ba}).checked(this.f.C===this.f.entries.length),D(ub,{u:this.f.u,P:this.f.P,C:this.f.C,entries:this.f.entries})])};
function kb(){var a=this;X.apply(this,[].concat(w(arguments)));this.ia=function(b){a.f.T(b)};this.ca=function(){for(var b=a.f,c=b.entries,d=[],e=0;e<c.length;e++){var f=c[e];f.v||d.push(f)}b.entries=d;b.l()}}u(kb,X);kb.prototype.A=function(){var a=this.f.entries,b=0;a.forEach(function(a){a.v&&b++});var c=a.length-b;return B("section").children(0<a.length?[D(sb,{T:this.ia}),D(vb,{u:this.f,P:c,C:b,entries:a}),D(tb,{location:this.f.location,P:c,C:b,ca:this.ca})]:[D(sb,{T:this.ia})])};
function wb(a,b){this.path=a;this.aa=b}function xb(a,b){if(""!==b&&"#"===b[0])if("!"===b[1])b=b.substr(2);else return!1;for(var c=0;c<a.length;c++){var d=a[c],e=d.path;if("string"===typeof e){if(b===e)return d.aa(),!0}else if(e=b.match(e))return 1<e.length?d.aa(e.slice(1)):d.aa(),!0}return!1}var mb=document.getElementById("todoapp"),lb=new ob(yb);
(function(a,b,c){b=void 0===b?"":b;var d=location,e=decodeURIComponent(d.hash);""===e&&(d.hash=e="#!"+b);window.addEventListener("hashchange",function(){var f=decodeURIComponent(d.hash);""===f&&(d.hash=e="#!"+b);e!==f&&(e=f,xb(a,f)||void 0!==c&&c())});xb(a,e)||void 0!==c&&c()})([new wb("/completed",function(){pb(2)}),new wb("/active",function(){pb(1)}),new wb("/",function(){pb(0)})]);function yb(){jb()}jb();}).call(this);
