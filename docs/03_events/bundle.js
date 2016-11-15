(function(){'use strict';function t(a,c){function b(){}b.prototype=c.prototype;a.prototype=new b;a.prototype.constructor=a;for(var d in c)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(c,d);e&&Object.defineProperty(a,d,e)}else a[d]=c[d]}
var u="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){if(b.get||b.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[c]=b.value)};function w(){w=function(){};u.Symbol||(u.Symbol=ba)}var ca=0;function ba(a){return"jscomp_symbol_"+(a||"")+ca++}
function x(){w();var a=u.Symbol.iterator;a||(a=u.Symbol.iterator=u.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return da(this)}});x=function(){}}function da(a){var c=0;return ea(function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}})}function ea(a){x();a={next:a};a[u.Symbol.iterator]=function(){return this};return a}function y(a){x();var c=a[Symbol.iterator];return c?c.call(a):da(a)}
function fa(a){for(var c,b=[];!(c=a.next()).done;)b.push(c.value);return b}function z(a,c){if(c){var b=u;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in b||(b[e]={});b=b[e]}a=a[a.length-1];d=b[a];c=c(d);c!=d&&null!=c&&aa(b,a,{configurable:!0,writable:!0,value:c})}}z("Array.prototype.fill",function(a){return a?a:function(a,b,d){var c=this.length||0;0>b&&(b=Math.max(0,c+b));if(null==d||d>c)d=c;d=Number(d);0>d&&(d=Math.max(0,c+d));for(b=Number(b||0);b<d;b++)this[b]=a;return this}});
function A(a,c){return Object.prototype.hasOwnProperty.call(a,c)}
z("WeakMap",function(a){function c(a){this.L=(f+=Math.random()+1).toString();if(a){w();x();a=y(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}function b(a){A(a,e)||aa(a,e,{value:{}})}function d(a){var c=Object[a];c&&(Object[a]=function(a){b(a);return c(a)})}if(function(){if(!a||!Object.seal)return!1;try{var c=Object.seal({}),b=Object.seal({}),d=new a([[c,2],[b,3]]);if(2!=d.get(c)||3!=d.get(b))return!1;d.delete(c);d.set(b,4);return!d.has(c)&&4==d.get(b)}catch(m){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;c.prototype.set=function(a,c){b(a);if(!A(a,e))throw Error("WeakMap key fail: "+a);a[e][this.L]=c;return this};c.prototype.get=function(a){return A(a,e)?a[e][this.L]:void 0};c.prototype.has=function(a){return A(a,e)&&A(a[e],this.L)};c.prototype.delete=function(a){return A(a,e)&&A(a[e],this.L)?delete a[e][this.L]:!1};return c});
z("Map",function(a){function c(){var a={};return a.v=a.next=a.head=a}function b(a,c){var b=a.u;return ea(function(){if(b){for(;b.head!=a.u;)b=b.v;for(;b.next!=b.head;)return b=b.next,{done:!1,value:c(b)};b=null}return{done:!0,value:void 0}})}function d(a,c){var b;b=c&&typeof c;"object"==b||"function"==b?f.has(c)?b=f.get(c):(b=""+ ++g,f.set(c,b)):b="p_"+c;var d=a.K[b];if(d&&A(a.K,b))for(a=0;a<d.length;a++){var e=d[a];if(c!==c&&e.key!==e.key||c===e.key)return{id:b,list:d,index:a,i:e}}return{id:b,list:d,
index:-1,i:void 0}}function e(a){this.K={};this.u=c();this.size=0;if(a){a=y(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),b=new a(y([[c,"s"]]));if("s"!=b.get(c)||1!=b.size||b.get({x:4})||b.set({x:4},"t")!=b||2!=b.size)return!1;var d=b.entries(),e=d.next();if(e.done||e.value[0]!=c||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?
!1:!0}catch(k){return!1}}())return a;w();x();var f=new WeakMap;e.prototype.set=function(a,c){var b=d(this,a);b.list||(b.list=this.K[b.id]=[]);b.i?b.i.value=c:(b.i={next:this.u,v:this.u.v,head:this.u,key:a,value:c},b.list.push(b.i),this.u.v.next=b.i,this.u.v=b.i,this.size++);return this};e.prototype.delete=function(a){a=d(this,a);return a.i&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.K[a.id],a.i.v.next=a.i.next,a.i.next.v=a.i.v,a.i.head=null,this.size--,!0):!1};e.prototype.clear=function(){this.K=
{};this.u=this.u.v=c();this.size=0};e.prototype.has=function(a){return!!d(this,a).i};e.prototype.get=function(a){return(a=d(this,a).i)&&a.value};e.prototype.entries=function(){return b(this,function(a){return[a.key,a.value]})};e.prototype.keys=function(){return b(this,function(a){return a.key})};e.prototype.values=function(){return b(this,function(a){return a.value})};e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};e.prototype[Symbol.iterator]=
e.prototype.entries;var g=0;return e});z("String.prototype.repeat",function(a){return a?a:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c}});var ga=0;try{var ha=Object.defineProperty({},"passive",{get:function(){ga|=1}});window.addEventListener("test",null,ha)}catch(a){}var ia=0;
/iPad|iPhone|iPod/.test(navigator?navigator.userAgent:"")&&!window.fa&&(ia|=1);function ja(){}function ka(a){a=a.target||window;a.$&&(a=a.$);return 3===a.nodeType?a.parentNode:a}var la=ga&1?{capture:!0,passive:!0}:!0,ma=ga&1?{passive:!0}:!1;function na(a){return a&2?a&1?la:ma:a&1?!0:!1}var B,oa,pa;
function sa(a,c){if(!B){oa=document.body.style.margin;pa=document.body.style.padding;document.body.style.margin="0";document.body.style.padding="0";B=document.createElement("div");var b=B.style;b.zIndex="2147483647";b.backgroundColor="#600";b.position="absolute";b.width="100%";b.height="100%";b.boxSizing="border-box";b.padding="1em";B.innerHTML='<div style="color:#fff;font-family:monospace;font-weight:bold;font-size:2em;line-height:2em">'+(a+"</div>")+('<pre style="color:#fff;font-weight:bold;font-size:1.2em">'+
c+"</pre>")+'<div style="position:absolute;top:0;right:0;padding:1em;color:#fff;cursor:pointer;font-size:2em;line-height:1em;font-weight:bold" class="ivi-screen-of-death-close">x</div>';B.style.color="#fff";B.addEventListener("click",function(a){"ivi-screen-of-death-close"===ka(a).className&&B&&(document.body.style.margin=oa,document.body.style.padding=pa,document.body.removeChild(B),B=void 0)});document.body.appendChild(B)}}
window.addEventListener("error",function(a){sa("Global Error: "+a.error.message,a.error.stack)});function C(a,c,b,d,e){this.a=a;this.o=c;this.h=null;this.j=b;this.w=d;this.m=this.s=null;this.c=e;this.M=this.g=null}C.prototype.key=function(a){this.h=a;return this};C.prototype.className=function(a){this.w=a;return this};C.prototype.style=function(a){this.s=a;return this};
C.prototype.children=function(a){if(Array.isArray(a)){this.a|=64;a:for(var c=0;c<a.length;c++){var b=a[c];if(null===b||Array.isArray(b)){b=a.slice(0,c);ta(a,b,c);a=b;break a}"object"!==typeof b&&(a[c]=D(b))}}else this.a="object"===typeof a?this.a|32:this.a|16;this.c=a;return this};C.prototype.value=function(a){this.c=a;return this};C.prototype.checked=function(a){this.c=a;return this};function D(a){return new C(1,null,null,null,a)}
function ua(a){var c=a.a,b=a.c;if(null!==b&&c&64)for(var c=Array(b.length),d=0;0>d;d++)c[d]=ua(b[d]);b=new C(a.a,a.o,a.j,a.w,a.a&12?null:a.c);b.h=a.h;b.m=a.m;b.s=a.s;return b}function ta(a,c,b){for(;b<a.length;b++){var d=a[b];null!==d&&(Array.isArray(d)?ta(d,c,0):c.push("object"===typeof d?d:D(d)))}}function va(a,c){this.data=a;this.from=c}
va.prototype.get=function(a){var c=this,b;if("string"!==typeof a){for(var d=Object.keys(a),e=d.length;0<e&&c;){if(c.data)for(var f=0;f<d.length;f++){var g=d[f];if(g&&(b=c.data[g],void 0!==b)){a[g]=c.data[g];d[f]=null;e--;break}}c=c.from}return a}for(;c;){if(c.data&&(b=c.data[a],void 0!==b))return b;c=c.from}};var wa=new va(void 0);function xa(a,c,b){b||(b="");c&4096?a.setAttribute("class",b):a.className=b}
function ya(a,c,b){var d,e,f;if(null===c){if(null!==b)if(f=a.style,"string"===typeof b)f.cssText=b;else for(d=Object.keys(b),a=0;a<d.length;a++)e=d[a],f[e]=b[e]}else if(null===b)if(f=a.style,"string"===typeof c)f.cssText="";else for(d=Object.keys(c),a=0;a<d.length;a++)f[d[a]]=null;else if(f=a.style,"string"===typeof b)f.cssText=b;else if("string"===typeof c)for(f.cssText="",d=Object.keys(b),a=0;a<d.length;a++)e=d[a],f[e]=b[e];else{var g=0;d=Object.keys(c);for(a=0;a<d.length;a++){e=d[a];var h=b[e];
void 0!==h?(c[e]!==h&&(f[e]=h),g++):f[e]=null}d=Object.keys(b);for(a=0;g<d.length&&a<d.length;)e=d[a++],c.hasOwnProperty(e)||(f[e]=b[e],g++)}}
function F(a,c,b,d){if(c&2048&&"volume"===b)a.volume!==d&&(a.volume=void 0===d?null:d);else if(void 0===d)a.removeAttribute(b);else{if(5<b.length)if(120===b.charCodeAt(0)&&(58===b.charCodeAt(3)||58===b.charCodeAt(5))){if(109===b.charCodeAt(1)&&108===b.charCodeAt(2)){a.setAttributeNS("http://www.w3.org/XML/1998/namespace",b,d);return}if(108===b.charCodeAt(1)&&105===b.charCodeAt(2)&&110===b.charCodeAt(3)&&107===b.charCodeAt(4)){a.setAttributeNS("http://www.w3.org/1999/xlink",b,d);return}}else if(45===
b.charCodeAt(4)){a.setAttribute(b,d);return}a[b]=d}}function za(a,c,b,d){var e,f,g;if(null===b){if(null!==d)for(f=Object.keys(d),e=0;e<f.length;e++)g=f[e],F(a,c,g,d[g])}else if(null===d)for(f=Object.keys(b),e=0;e<f.length;e++)F(a,c,f[e]);else{var h=0;f=Object.keys(b);for(e=0;e<f.length;e++){g=f[e];var n=d[g];void 0===n?F(a,c,g):(b[g]!==n&&F(a,c,g,n),h++)}f=Object.keys(d);for(e=0;h<f.length&&e<f.length;)g=f[e++],b.hasOwnProperty(g)||(F(a,c,g,d[g]),h++)}}
function Aa(a,c,b){var d,e,f;if(null===c){if(null!==b)for(e=Object.keys(b),d=0;d<e.length;d++)Ba(b[e[d]].B)}else if(null===b)for(e=Object.keys(c),d=0;d<e.length;d++)Ca(c[e[d]].B);else{var g=0;e=Object.keys(c);for(d=0;d<e.length;d++){f=e[d];var h=c[f];f=b[f];void 0!==f?(h!==f&&(Ba(f.B),Ca(h.B)),g++):Ca(h.B)}e=Object.keys(b);for(d=0;g<e.length&&d<e.length;)f=e[d++],c.hasOwnProperty(f)||(Ba(b[f].B),g++)}a._ev=null===b?void 0:b}
function G(a){var c=a.b,b=a.R;if(c&8&&c&7){var d=a.root;c&4&&Da(a);c&35?(c=a.P,b=Ea(a),b=a.R=H(c,d,b,a.G),a.b&=-1032):d&&Fa(a.P,d,a.G,a)}return b}function Ga(a,c,b,d,e){var f=b.o;c=c.c;f=b.c=f(b.j,d)||D("");a=H(a,c,f,d,e);return b.g=a}function I(a){var c=a.a;if(c&12)if(c&8){var b=a.c;b.b|=8;I(b.root)}else I(a.c);else if(!(c&2560)&&(b=a.c,null!==b&&c&96))if(c&64)for(var d=0;d<b.length;d++)I(b[d]);else I(b);a.M&&a.M(c&12?a.c:a.g)}
function J(a){var c=a.a;if(c&12)if(c&8){var b=a.c;J(b.root);b.b&=-265}else J(a.c);else if(c&2){if(!(c&2560)&&(b=a.c,null!==b&&c&96))if(c&64)for(c=0;c<b.length;c++)J(b[c]);else J(b);a.m&&Aa(a.g,a.m,null)}a.M&&a.M(null)}function Ha(a){for(var c=0;c<a.length;c++)J(a[c])}
function Fa(a,c,b,d){var e=c.a;if(e&12)e&8?(a=c.c,a.H!==b&&(a.b|=4,a.H=b),G(a)):2>c.o.length?c.c&&Fa(a,c.c,b,d):Ga(a,c.c,c.c,b,d);else if(!(e&2560)&&(c=c.c,null!==c&&e&96))if(e&64)for(e=0;e<c.length;e++)Fa(a,c[e],b,d);else Fa(a,c,b,d)}function K(a,c){a.removeChild(c.g);J(c)}function Da(a){a.b&=-193;a.b|=(a.b&64)<<1;a.G=a.H}function Ea(a){a.b&=-49;var c=a.root=a.T()||D("");a.b|=(a.b&16)<<1;return c}
function L(a,c,b,d){c.g&&(c=ua(c));var e=c.a;if(e&3)if(e&1)a=document.createTextNode(c.c);else{e&512?e&1024?a=document.createElement("textarea"):(a=document.createElement("input"),a.type=c.o):a=e&4096?document.createElementNS("http://www.w3.org/2000/svg",c.o):document.createElement(c.o);c.j&&za(a,e,null,c.j);null!==c.w&&xa(a,e,c.w);null!==c.s&&ya(a,null,c.s);c.m&&Aa(a,null,c.m);var f=c.c;if(null!==f)if(e&80)if(e&16)a.textContent=f;else for(e=0;e<f.length;e++)a.insertBefore(L(a,f[e],b,d),null);else e&
32?a.insertBefore(L(a,f,b,d),null):e&512?(b=a,"string"===typeof f?b.value=f:b.checked=f):a.innerHTML=f}else e&8?(b=c.c=new c.o(c.j,b,d),b.P=a,Da(b),d=Ea(b),a=b.R=L(a,d,b.G,b)):(f=c.c=(0,c.o)(c.j,b)||D(""),a=c.g=L(a,f,b,d));return c.g=a}function M(a,c,b,d,e){a=a.insertBefore(L(a,b,d,e),c);I(b);return a}function Ia(a,c){return(a.a&7695)===(c.a&7695)&&a.o===c.o&&a.h===c.h}
function Ja(a,c,b,d,e){if(c===b)return b.g;b.g&&(b=ua(b));var f=c.a;if(f&3)if(a=b.g=c.g,f&1)c.c!==b.c&&(a.nodeValue=b.c);else{if(c.j!==b.j&&za(a,f,c.j,b.j),c.w!==b.w&&xa(a,f,b.w),c.s!==b.s&&ya(a,c.s,b.s),c.m!==b.m&&Aa(a,c.m,b.m),c.c!==b.c){var f=c.g,g=c.a,h=b.a;c=c.c;b=b.c;if(null===c)if(h&80)if(h&16)f.textContent=b;else for(g=0;g<b.length;g++)M(f,null,b[g],d,e);else h&32?M(f,null,b,d,e):h&512?"string"===typeof b?f.value=b:f.checked=b:f.innerHTML=b;else if(null===b)g&144?f.textContent="":g&64?(f.textContent=
"",Ha(c)):g&32?K(f,c):"string"===typeof c?f.value="":f.checked=!1;else if(g&144)if(h&144)h&16?(d=f.firstChild)?d.nodeValue=b:f.textContent=b:f.innerHTML=b;else if(f.textContent="",h&64)for(g=0;g<b.length;g++)M(f,null,b[g],d,e);else M(f,null,b,d,e);else if(g&64)if(h&144)h&16?f.textContent=b:f.innerHTML=b,Ha(c);else if(h&64)if(0===c.length)for(g=0;g<b.length;g++)M(f,null,b[g],d,e);else if(0===b.length)f.textContent="",Ha(c);else if(1===c.length&&1===b.length)H(f,c[0],b[0],d,e);else if(g&h&256){var n=
0,g=0,m=c.length-1,p=b.length-1,k=c[n],h=b[g],l=c[m],q=b[p],r,Q;a:for(;;){for(;k.h===h.h;){H(f,k,h,d,e);n++;g++;if(n>m||g>p)break a;k=c[n];h=b[g]}for(;l.h===q.h;){H(f,l,q,d,e);m--;p--;if(n>m||g>p)break a;l=c[m];q=b[p]}if(l.h===h.h)H(f,l,h,d,e),f.insertBefore(h.g,k.g),m--,g++,l=c[m],h=b[g];else if(k.h===q.h)H(f,k,q,d,e),k=p+1,k=k<b.length?b[k].g:null,f.insertBefore(q.g,k),n++,p--,k=c[n],q=b[p];else break}if(n>m)for(k=p+1,k=k<b.length?b[k].g:null;g<=p;)M(f,k,b[g++],d,e);else if(g>p)for(;n<=m;)K(f,c[n++]);
else{var qa=m-n+1,k=p-g+1,h=Array(k).fill(-1),ra=!1,v=0,E=0;if(4>=k||16>=qa*k)for(l=n;l<=m;l++){if(r=c[l],E<k)for(q=g;q<=p;q++)if(Q=b[q],r.h===Q.h){h[q-g]=l;v>q?ra=!0:v=q;H(f,r,Q,d,e);E++;c[l]=null;break}}else{for(var Oa=new Map,l=g;l<=p;l++)r=b[l],Oa.set(r.h,l);for(l=n;l<=m;l++)r=c[l],E<k&&(q=Oa.get(r.h),void 0!==q&&(Q=b[q],h[q-g]=l,v>q?ra=!0:v=q,H(f,r,Q,d,e),E++,c[l]=null))}if(qa===c.length&&0===E)for(f.textContent="",Ha(c);g<k;)M(f,null,b[g++],d,e);else{for(l=qa-E;0<l;)r=c[n++],null!==r&&(K(f,
r),l--);if(ra){n=h.slice(0);c=[];c.push(0);m=0;for(p=h.length;m<p;m++)if(-1!==h[m])if(l=c[c.length-1],h[l]<h[m])n[m]=l,c.push(m);else{l=0;for(q=c.length-1;l<q;)r=(l+q)/2|0,h[c[r]]<h[m]?l=r+1:q=r;h[m]<h[c[l]]&&(0<l&&(n[m]=c[l-1]),c[l]=m)}l=c.length;for(q=c[l-1];0<l--;)c[l]=q,q=n[q];q=c.length-1;for(l=k-1;0<=l;l--)-1===h[l]?(v=l+g,r=b[v],k=v+1,k=k<b.length?b[k].g:null,M(f,k,r,d,e)):0>q||l!==c[q]?(v=l+g,r=b[v],k=v+1,k=k<b.length?b[k].g:null,f.insertBefore(r.g,k)):q--}else if(E!==k)for(l=k-1;0<=l;l--)-1===
h[l]&&(v=l+g,r=b[v],k=v+1,k=k<b.length?b[k].g:null,M(f,k,r,d,e))}}}else{g=k=0;n=c.length-1;for(h=b.length-1;k<=n&&g<=h;){m=c[k];p=b[g];if(!Ia(m,p))break;k++;g++;Ja(f,m,p,d,e)}for(;k<=n&&g<=h;){m=c[n];p=b[h];if(!Ia(m,p))break;n--;h--;Ja(f,m,p,d,e)}for(;k<=n&&g<=h;)m=c[k++],p=b[g++],H(f,m,p,d,e);if(k<=n){do K(f,c[k++]);while(k<=n)}else if(g<=h){c=h+1;c=c<b.length?b[c].g:null;do M(f,c,b[g++],d,e);while(g<=h)}}else if(0<c.length)for(H(f,c[0],b,d,e),g=1;g<c.length;g++)K(f,c[g]);else M(f,null,b,d,e);else if(g&
32)if(h&144)h&16?f.textContent=b:f.innerHTML=b,J(c);else if(h&64)if(0<b.length)for(H(f,c,b[0],d,e),g=1;g<b.length;g++)M(f,null,b[g],d,e);else K(f,c);else H(f,c,b,d,e);else"string"===typeof b?f.value!==b&&(f.value=b):f.checked=b}}else f&8?(e=b.c=c.c,a=b.j,e.b|=1,e.j=a,e.b&128&&(e.b|=4),e.H!==d&&(e.b|=4,e.H=d),a=b.g=G(e)):a=b.g=Ga(a,c,b,d,e);return a}function H(a,c,b,d,e){if(Ia(c,b))return Ja(a,c,b,d,e);d=L(a,b,d,e);a.replaceChild(d,c.g);J(c);I(b);return d}
function Ka(){this.a=0;this.F=[];this.V=this.I=this.J=null}Ka.prototype.write=function(a){this.a|=2;null===this.J&&(this.J=[]);this.J.push(a)};Ka.prototype.read=function(a){this.a|=4;null===this.I&&(this.I=[]);this.I.push(a)};var N=0,La=0,Ma=[],Na=[],Pa=new Ka,Qa=new Ka,O=[],Ra=document.createTextNode(""),Sa="__ivi"+Math.random();(new MutationObserver(Ta)).observe(Ra,{characterData:!0});window.addEventListener("message",Ua);function Va(){0===(N&4)&&(N|=4,requestAnimationFrame(Wa))}
function Ua(a){if(a.source===window&&a.data===Sa){N&=-3;a=Na;Na=[];for(var c=0;c<a.length;c++)a[c]();La++}}
function Wa(){var a,c;N&=-5;N|=8;var b=Qa;Qa=Pa;Pa=b;for(c=0;c<O.length;c++)O[c].b|=2;do{for(;0!==(b.a&4);)for(b.a&=-5,a=b.I,b.I=null,c=0;c<a.length;c++)a[c]();for(;0!==(b.a&3);){if(0!==(b.a&1)){b.a&=-2;var d=b.F;for(c=0;c<d.length;c++){var e=d[c];if(null!==e)for(d[c]=null,a=0;a<e.length;a++)G(e[a])}}if(0!==(b.a&2))for(b.a&=-3,a=b.J,b.J=null,c=0;c<a.length;c++)a[c]()}c=0;for(a=O.length;c<a;)d=O[c++],0===(d.b&256)?(d.b&=-513,c===a?O.pop():O[--c]=O.pop()):G(d)}while(0!==(b.a&7));for(N&=-9;0!==(b.a&
8);)for(b.a&=-9,a=b.V,b.V=null,c=0;c<a.length;c++)a[c]();0<O.length&&Va();La++}function Ta(){for(;0<Ma.length;){var a=Ma;Ma=[];for(var c=0;c<a.length;c++)a[c]();La++}N&=-2}function Xa(a){0===(N&2)&&(N|=2,window.postMessage(Sa,"*"));Na.push(a)}function P(){this.A=0;this.l=this.D=null}P.prototype.S=function(){};P.prototype.N=function(){if(this.D)for(var a=0;this.D.length;a++){var c=this.D[a];0===c.A++&&c.N();null===c.l&&(c.l=[]);c.l.push(this)}};
P.prototype.O=function(){if(this.D)for(var a=0;this.D.length;a++){var c=this.D[a];0===--c.A&&c.O();1<c.l.length?c.l[c.l.indexOf(this)]=c.l.pop():c.l=null}};function Ba(a){0===a.A++&&a.N()}function Ca(a){0===--a.A&&a.O()}function Ya(a,c,b){c.currentTarget=a.target;for(var d=0;d<a.Y.length;d++){var e=a.Y[d];if(e.b&b&&(e.ba(c),c.a&2))break}}function R(a,c,b){P.call(this);this.b=a;this.name=c;this.aa=b;this.W=this.S.bind(this);this.C=!1}t(R,P);
R.prototype.S=function(a){for(var c=this.l,b=ka(a),d=[];b;){var e=b,f=e._ev;if(f){for(var g=void 0,h=Object.keys(f),n=0;n<h.length;n++){var m=f[h[n]];m.B===this&&(g?g.push(m):g=[m])}g&&d.push({target:e,Y:g})}b=b.parentElement}var p;if(d||c)p=new this.aa(0,a,ka(a));if(0<d.length)a:{a=p;c=!!(this.b&4);for(b=d.length-1;0<=b;)if(e=d[b],e.target!==a.target){if(Ya(d[b--],a,1),a.a&1)break a}else break;e=d[0];if(e.target===a.target){a.a|=64;Ya(e,a,3);if(a.a&1)break a;a.a&=-65;b=1}else b=0;if(c)for(a.a|=128;b<
d.length&&!(Ya(d[b++],a,2),a.a&1););}if(p&&(d=p)&&this.l)for(p=0;p<this.l.length;p++)this.l[p].S(d)};R.prototype.N=function(){this.C?this.C=!1:(P.prototype.N.call(this),document.addEventListener(this.name,this.W,na(this.b)))};R.prototype.O=function(){var a=this;this.C||(this.C=!0,Xa(function(){a.C&&(document.removeEventListener(a.name,a.W,na(a.b)),P.prototype.O.call(a),a.C=!1)}))};function S(a,c,b){this.a=a;this.f=c;this.currentTarget=this.target=b}S.prototype.stopPropagation=function(){this.a|=1};
S.prototype.stopImmediatePropagation=function(){this.a|=3};S.prototype.preventDefault=function(){this.a|=4};
u.Object.defineProperties(S.prototype,{defaultPrevented:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&4)}},bubbles:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&8)}},cancelable:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&16)}},isTrusted:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&32)}},eventPhase:{configurable:!0,enumerable:!0,get:function(){return this.a&64?2:this.a&128?3:1}}});function T(a){S.apply(this,arguments)}t(T,S);
T.prototype.preventDefault=function(){this.a|=4;this.f.preventDefault()};u.Object.defineProperties(T.prototype,{timeStamp:{configurable:!0,enumerable:!0,get:function(){return this.f.timeStamp}},type:{configurable:!0,enumerable:!0,get:function(){return this.f.type}},AT_TARGET:{configurable:!0,enumerable:!0,get:function(){return this.f.AT_TARGET}},BUBBLING_PHASE:{configurable:!0,enumerable:!0,get:function(){return this.f.BUBBLING_PHASE}},CAPTURING_PHASE:{configurable:!0,enumerable:!0,get:function(){return this.f.CAPTURING_PHASE}}});
function Za(a){T.apply(this,arguments)}t(Za,T);u.Object.defineProperties(Za.prototype,{detail:{configurable:!0,enumerable:!0,get:function(){return this.f.detail}},view:{configurable:!0,enumerable:!0,get:function(){return this.f.view}}});function $a(a){Za.apply(this,arguments)}t($a,Za);$a.prototype.getModifierState=function(a){return this.f.getModifierState(a)};
u.Object.defineProperties($a.prototype,{altKey:{configurable:!0,enumerable:!0,get:function(){return this.f.altKey}},button:{configurable:!0,enumerable:!0,get:function(){return this.f.button}},buttons:{configurable:!0,enumerable:!0,get:function(){return this.f.buttons}},clientX:{configurable:!0,enumerable:!0,get:function(){return this.f.clientX}},clientY:{configurable:!0,enumerable:!0,get:function(){return this.f.clientY}},ctrlKey:{configurable:!0,enumerable:!0,get:function(){return this.f.ctrlKey}},
fromElement:{configurable:!0,enumerable:!0,get:function(){return this.f.fromElement}},layerX:{configurable:!0,enumerable:!0,get:function(){return this.f.layerX}},layerY:{configurable:!0,enumerable:!0,get:function(){return this.f.layerY}},metaKey:{configurable:!0,enumerable:!0,get:function(){return this.f.metaKey}},ca:{configurable:!0,enumerable:!0,get:function(){return this.f.ca}},da:{configurable:!0,enumerable:!0,get:function(){return this.f.da}},offsetX:{configurable:!0,enumerable:!0,get:function(){return this.f.offsetX}},
offsetY:{configurable:!0,enumerable:!0,get:function(){return this.f.offsetY}},pageX:{configurable:!0,enumerable:!0,get:function(){return this.f.pageX}},pageY:{configurable:!0,enumerable:!0,get:function(){return this.f.pageY}},relatedTarget:{configurable:!0,enumerable:!0,get:function(){return this.f.relatedTarget}},screenX:{configurable:!0,enumerable:!0,get:function(){return this.f.screenX}},screenY:{configurable:!0,enumerable:!0,get:function(){return this.f.screenY}},shiftKey:{configurable:!0,enumerable:!0,
get:function(){return this.f.shiftKey}},toElement:{configurable:!0,enumerable:!0,get:function(){return this.f.toElement}},which:{configurable:!0,enumerable:!0,get:function(){return this.f.which}},x:{configurable:!0,enumerable:!0,get:function(){return this.f.x}},y:{configurable:!0,enumerable:!0,get:function(){return this.f.y}}});var ab=new R(5,"click",$a);function bb(a,c,b){this.b=0;this.depth=b?b.depth+1:0;this.j=a;this.G=this.H=c;this.R=this.P=this.root=null}bb.prototype.T=function(){};
u.Object.defineProperties(bb.prototype,{context:{configurable:!0,enumerable:!0,get:function(){this.b|=16;return this.G}}});var U=[];function cb(){var a=this;bb.apply(this,[].concat(arguments instanceof Array?arguments:fa(y(arguments))));this.A=0;this.ea={B:ab,b:2,ba:function(){a.A++;if(a.b&8&&(a.b|=2,!(a.b&1024))){var c;N&8?c=Pa:(Va(),c=Qa);if(0===(a.b&1024)){a.b|=1024;var b=a.depth;for(c.a|=1;b>=c.F.length;)c.F.push(null);var d=c.F[b];null===d?c.F[b]=[a]:d.push(a)}}}}}t(cb,bb);
cb.prototype.T=function(){var a=new C(2,"div",null,null,null);a.m={click:this.ea};return a.children("Clicks: "+this.A)};var V=new C(cb.prototype.T?8:4,cb,void 0,null,null),W=document.getElementById("app"),X=void 0,X=void 0===X?wa:X,Y,db;a:{for(var eb=0;eb<U.length;eb++){var fb=U[eb];if(fb.Z===W){db=fb;break a}}db=void 0}var Z=db;
if(V)Z?(Y=H(W,Z.U,V,X,void 0),Z.U=V,Z.X=Y):(Y=M(W,null,V,X,void 0),U.push({Z:W,U:V,X:Y}),ia&1&&(W.onclick=ja));else if(Z){var gb=Z.U;W.removeChild(gb.g);J(gb);var hb=U.pop();hb!==Z&&U.length&&(U[U.indexOf(Z)]=hb);Y=Z.X};}).call(this);

//# sourceMappingURL=bundle.js.map
