!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}({2:function(t,e,n){"use strict";n.r(e);const o=(t,e)=>({f:t,d:e}),i=(o(16,null),o(128,null),o(32,null),o(8,null)),l=(t,e)=>({t:t,d:e}),r=(t,e)=>({k:t,v:e}),s=t=>l(i,t);function c(t,e){const n=o(e,t);return(t,e,o=null)=>l(n,{n:t,a:e,c:o})}const a=t=>c(t,2),u=void 0;let f={};function d(t){const e=f;return f=t,e}function p(t){f=t}function h(){return f}const m=[];function v(t){return function(){try{return t.apply(void 0,arguments)}catch(e){throw m.forEach(t=>{t(e)}),e}}}const y=()=>{};function x(t,e){const n=t.length-1,o=t.pop();e!==n&&(t[e]=o)}function g(t,e){const n=t.indexOf(e);x(t,n)}function b(t){for(let e=0;e<t.length;++e)!0===t[e]()&&x(t,e--)}(()=>{let t=!1;try{const n=Object.defineProperty({},"passive",{get(){t=!0}});window.addEventListener("test",null,n)}catch(e){}})(),KeyboardEvent.prototype.hasOwnProperty("key"),MouseEvent.prototype.hasOwnProperty("buttons"),window,window,window;const w="GestureEvent"in window,M=Node.prototype,T=Element.prototype,C=Object.prototype.hasOwnProperty,_=M.insertBefore,E=M.removeChild,O=(M.replaceChild,M.cloneNode),S=T.setAttribute,j=(T.setAttributeNS,T.removeAttribute),H="http://www.w3.org/2000/svg",P=t=>({o:t,f:0,c:null,s:null});let k,A,F;function N(){const t=A;return A=0,t}function q(t,e){const n=e|A;return A|=t,n}function L(t){const e=t.f;if(0===(3&e)){const n=t.c;if(0!==(264&e)){for(let t=0;t<n.length;t++){const e=n[t];if(null!==e)return L(e)}return null}return null===n?null:L(n)}return t.s}function R(t,e,n,o){const{f:i,c:l}=e;let r,s,c;if(0!==(4&i)){const r=e.s;s=N(),0!==(512&i)&&(0!==(2048&i)||null!==r.s&&!0===r.s(h()))?e.c=W(t,l,r.r(e.o.d),n,o):0!==(16384&i)?R(t,l,n,o):n?B(t,e):k=L(e),e.f=30719&e.f|A,A|=s|(12288&e.f)<<2}else if(0!==(16384&i)){if(s=N(),0!==(3&i))r=e.s,!0===n&&_.call(t,r,k),null!==l&&R(r,l,!1,!0),k=r;else if(0!==(264&i))for(c=l.length;--c>=0;)null!==(r=l[c])&&R(t,r,n,!1);else if(0!==(144&i))R(t,e.c,n,o);else{!0===F&&(e.s=Object.assign({},h(),e.o.d.v));const i=d(e.s);R(t,e.c,n,o),p(i)}e.f=q(s,e.f)}else n?B(t,e):k=L(e)}function B(t,e){const n=e.f;if(0!==(3&n)){const n=e.s;_.call(t,n,k),k=n}else{const o=e.c;if(0!==(264&n)){let e=o.length;for(;--e>=0;){const n=o[e];null!==n&&B(t,n)}}else null!==o&&B(t,o)}}function V(t){const e=t.f;let n,o;if(0!==(32768&e)){const i=t.c;if(null!==i)if(0!==(264&e))for(n=0;n<i.length;n++)null!==(o=i[n])&&V(o);else V(i)}if(0!==(8192&e)&&null!==(o=t.s.u))if("function"===typeof o)o();else for(n=0;n<o.length;n++)o[n](!0)}function G(t,e,n){const o=e.f;let i;if(0!==(3&o))i=e.s,E.call(t,i);else if(0!==(264&o))if(!0===n)t.textContent="";else{i=e.c;for(let e=0;e<i.length;++e){const n=i[e];null!==n&&G(t,n,!1)}}else null!==(i=e.c)&&G(t,i,n)}function I(t,e,n){G(t,e,n),V(e)}function Q(t,e,n){const o=document.createTextNode(n);_.call(t,o,k),k=o,e.s=o,e.f=1}function z(t,e){const n=e.t,o=0!==(1024&n.f);if(void 0===t){const e=n.d;t=o?document.createElementNS(H,e):document.createElement(e)}const{n:i,a:l}=e.d;return i&&(o?S.call(t,"class",i):t.className=i),void 0!==l&&tt(t,void 0,l),t}function D(t,e,n){const{t:o,d:i}=n,l=o.f;let r,s;if(0!==(4&l))r=N(),s=0!==(512&l)?(e.s={r:null,s:null,u:null}).r=n.t.d.c(e):n.t.d.c,e.c=K(t,s(i)),e.f=30719&e.f|l|A,A|=r|(12288&e.f)<<2;else{let c;if(r=N(),0!==(2&l)){let r;const a=o.d;0!==(64&l)&&(null===(r=a.n)&&(a.n=r=z(void 0,a.p)),r=O.call(r,!1)),e.s=r=z(r,n),c=k,k=null,null!==(s=i.c)&&(e.c=K(r,s)),_.call(t,r,c),k=r}else if(0!==(176&l))0!==(32&l)?(c=d(e.s=Object.assign({},h(),i.v)),e.c=K(t,i.c),p(c)):(0!==(128&l)&&(i.v.v=e),e.c=K(t,i.c));else{let n=i.length;for(e.c=s=Array(n);--n>=0;)s[n]=K(t,i[n].v)}e.f=q(r,l)}}function J(t,e,n){const o=N();let i=n.length;const l=Array(i);for(;--i>=0;)l[i]=K(t,n[i]);e.c=l,e.f=q(o,256)}function K(t,e){if(null!==e){const n=P(e);return"object"===typeof e?e instanceof Array?J(t,n,e):D(t,n,e):Q(t,n,e),n}return null}function U(t,e){if("object"!==typeof e)return!0;if(t instanceof Array){if(!(e instanceof Array))return!0}else if(e instanceof Array||t.t!==e.t)return!0;return!1}function W(t,e,n,o,i){if(null===n)return null!==e&&I(t,e,i),null;if(null===e)return K(t,n);const{o:l,s:r}=e;let s=e.f;if(0!==(1&s)){if("object"===typeof n)return E.call(t,r),K(t,n);e.o=n,l!==n&&(r.nodeValue=n),!0===o&&_.call(t,r,k),k=r}else{if(l===n)return R(t,e,o,i),e;if(!0===U(l,n))return I(t,e,i),K(t,n);e.o=n;const c=e.c;let a,u,f,m;if(0!==(4&s)){u=l.d,f=n.d;const r=n.t.d;0!==(2048&s)||u!==f&&(void 0===r.su||!0===r.su(u,f))?(a=N(),e.c=W(t,c,0!==(512&s)?e.s.r(f):r.c(f),o,i),s=e.f,e.f=30719&s|A,A|=a|(12288&s)<<2):R(t,e,o,i)}else{if(a=N(),0!==(2&s))u=l.d,f=n.d,!0===o&&_.call(t,r,k),m=f.n,u.n!==m&&(void 0===m&&(m=""),0!==(1024&s)?S.call(r,"class",m):r.className=m),m=f.a,u.a!==m&&tt(r,u.a,m),m=f.c,u.c!==m&&(k=null,e.c=W(r,c,m,!1,!0)),k=r;else if(0!==(264&s))if(0!==(256&s)){let l=n.length;if(c.length===l)for(;--l>=0;)c[l]=W(t,c[l],n[l],o,!1);else I(t,e,i),J(t,e,n)}else X(t,e,l.d,n.d,o,i);else if(0!==(144&s))f=n.d,e.c=W(t,c,f.c,o,i);else{u=l.d,f=n.d;const r=F;m=f.v,u.v===m&&!0!==F||(e.s=Object.assign({},h(),m),F=!0),m=d(e.s),W(t,c,f.c,o,i),p(m),F=r}e.f=q(a,e.f)}}return e}function X(t,e,n,o,i,l){const r=e.c,s=Array(o.length);let c=o.length;if(0===c)r.length>0&&I(t,e,l);else if(0===r.length)for(;--c>=0;)s[c]=K(t,o[c].v);else{let a,u,f=n[0],d=o[0],p=n.length-1,h=o.length-1,m=n[p],v=o[h],y=0;t:for(;;){for(;m.k===v.k;){if(s[h]=W(t,r[p--],v.v,i,!1),y>--h||y>p)break t;m=n[p],v=o[h]}for(;f.k===d.k;){if(++y>p||y>h)break t;f=n[y],d=o[y]}break}if(y>p)for(;h>=y;)s[h]=K(t,o[h--].v);else if(y>h){c=y;do{null!==(u=r[c++])&&I(t,u,!1)}while(c<=p)}else{const f=p-y+1,d=h-y+1,m=Array(d);for(c=0;c<d;++c)m[c]=-1;let v=0,x=0;const g=new Map;for(a=y;a<=h;++a)g.set(o[a].k,a);for(c=y;c<=p&&x<d;++c)void 0!==(a=g.get(n[c].k))&&(v=v>a?1e6:a,++x,m[a-y]=c,s[a]=r[c],r[c]=null);if(f===n.length&&0===x)for(I(t,e,l);h>=0;)s[h]=K(t,o[h--].v);else{for(c=y;c<=p;c++)null!==(u=r[c])&&I(t,u,!1);let e;if(c=d,!0===i||1e6!==v)for(;--c>=0;)e=o[v=y+c].v,s[v]=-1===m[c]?K(t,e):W(t,s[v],e,i,!1);else{const n=Y(m);for(a=n.length-1;--c>=0;)e=o[v=y+c].v,-1===m[c]?s[v]=K(t,e):(u=s[v],a<0||c!==n[a]?i=!0:--a,s[v]=W(t,u,e,i,!1),i=!1)}}}for(;--y>=0;)s[y]=W(t,r[y],o[y].v,i,!1)}e.c=s}function Y(t){const e=t.slice(),n=[];n[0]=0;let o,i,l,r=0;for(let s=0;s<t.length;++s){const c=t[s];if(-1!==c)if(t[l=n[r]]<c)e[s]=l,n[++r]=s;else{for(o=0,i=r;o<i;)t[n[l=(o+i)/2|0]]<c?o=l+1:i=l;c<t[n[o]]&&(o>0&&(e[s]=n[o-1]),n[o]=s)}}for(i=n[r];r>=0;)n[r--]=i,i=e[i];return n}function Z(t,e,n){const o=t.style;let i,l;if(void 0===e)for(i in n)void 0!==(l=n[i])&&o.setProperty(i,l);else if(void 0===n)for(i in e)o.removeProperty(i);else{let t=0;for(i in e)l=void 0,!0===C.call(n,i)&&(l=n[i],t++),e[i]!==l&&(void 0!==l?o.setProperty(i,l):o.removeProperty(i));const r=Object.keys(n);for(let l=0;t<r.length&&l<r.length;++l)i=r[l],!1===C.call(e,i)&&(o.setProperty(i,n[i]),++t)}}function $(t,e,n,o){"style"!==e?"object"===typeof o?o.u(t,e,void 0===n?void 0:n.v,o.v):n!==o&&("object"===typeof n?n.u(t,e,n.v,void 0):("boolean"===typeof o&&(o=o?"":void 0),void 0===o?j.call(t,e):S.call(t,e,o))):n!==o&&Z(t,n,o)}function tt(t,e,n){let o;if(void 0===e)for(o in n)$(t,o,void 0,n[o]);else if(void 0===n)for(o in e)$(t,o,e[o],void 0);else{let i=0;for(o in e){let l=void 0;!0===C.call(n,o)&&(l=n[o],i++),$(t,o,e[o],l)}const l=Object.keys(n);for(let r=0;i<l.length&&r<l.length;++r)o=l[r],!1===C.call(e,o)&&($(t,o,void 0,n[o]),++i)}}const et=[],nt=t=>et.find(e=>e.container===t);function ot(){for(let t=0;t<et.length;++t){const e=et[t],{container:n,state:o,next:i}=e;e.next=void 0,k=null,A=0,F=!1,i?o?e.state=W(n,o,i,!1,!0):(e.state=K(n,i),w&&(n.onclick=y)):o&&(null===i?(I(n,o,!0),g(et,e),--t):R(n,o,!1,!0))}}function it(t){for(;t.v.length>0;){const e=t.v;let n=0;t.v=[];do{e[n++]()}while(n<e.length)}}let lt=0,rt=1;const st={v:[]},ct={v:[]},at={v:[]},ut=[],ft=[];let dt=0;const pt=t=>v(function(){lt|=1,t.apply(void 0,arguments),it(st),lt&=-4,++rt}),ht=pt(y),mt=()=>rt;function vt(t){var e;st.v.push(t),0===(3&lt)&&(lt|=2,e=ht,Promise.resolve().then(e))}const yt=t=>pt(e=>{lt|=16,t(e),0!==(4&lt)&&(dt=void 0===e?performance.now():e,b(ut),0!==(32&lt)&&ot(),it(ct),b(ft),it(at)),lt&=-61}),xt=yt(y);function gt(t){void 0!==t&&0!==(1&t)&&0===(8&lt)?0===(16&(lt|=12))&&vt(xt):0===(4&lt)&&0===(16&(lt|=4))&&requestAnimationFrame(xt)}function bt(t){lt|=32,gt(t)}function wt(t,e,n){const o=nt(e);o?o.next=t:et.push({container:e,next:t,state:null}),bt(n)}function Mt(t,e,n){const o=t.s.s;let i,l,r=0;return t.s.s=(t=>{if(null!==o&&!0===o(t))return!0;if(void 0!==i){const n=e(l,t,i);if(r=mt(),i!==n)return i=n,!0}return!1}),t=>(void 0!==i&&(void 0!==n&&!0===n(l,t)||l!==t)&&(i=void 0),(void 0===i||r<mt())&&(i=e(t,h(),i)),l=t,i)}const Tt=a("div"),Ct=a("span"),_t=a("table"),Et=a("tbody"),Ot=a("td"),St=a("tr");var jt,Ht,Pt=100,kt=function(t,e,n,o){this.min=t,this.max=e,this.mean=n,this.last=o},At=function(){function t(t){this.samples=[],this.maxSamples=t,this._i=-1}return t.prototype.addSample=function(t){this._i=(this._i+1)%this.maxSamples,this.samples[this._i]=t},t.prototype.each=function(t){for(var e=this.samples,n=0;n<e.length;n++)t(e[(this._i+1+n)%e.length],n)},t.prototype.calc=function(){var t=this.samples;if(0===t.length)return new kt(0,0,0,0);for(var e=t[(this._i+1)%t.length],n=e,o=0,i=0;i<t.length;i++){var l=t[(this._i+1+i)%t.length];l<e&&(e=l),l>n&&(n=l),o+=l}var r=t[this._i],s=o/t.length;return new kt(e,n,s,r)},t}(),Ft=[],Nt=-1,qt=(jt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}jt(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),Lt=30,Rt=Pt,Bt=function(){function t(t){var e=this;this._sync=function(){e.sync(),e._dirty=!1},this.name=t,this.element=document.createElement("div"),this.element.style.cssText="padding: 2px;background-color: #020;font-family: monospace;font-size: 12px;color: #0f0",this._dirty=!1,this.invalidate()}return t.prototype.invalidate=function(){var t;this._dirty||(this._dirty=!0,t=this._sync,Ft.push(t),-1===Nt&&requestAnimationFrame(function(t){Nt=-1;var e=Ft;Ft=[];for(var n=0;n<e.length;n++)e[n]()}))},t.prototype.sync=function(){throw new Error("sync method not implemented")},t}();!function(t){t[t.HideMin=1]="HideMin",t[t.HideMax=2]="HideMax",t[t.HideMean=4]="HideMean",t[t.HideLast=8]="HideLast",t[t.HideGraph=16]="HideGraph",t[t.RoundValues=32]="RoundValues"}(Ht||(Ht={}));var Vt=function(t){function e(e,n,o,i){var l=t.call(this,e)||this;l.flags=n,l.unitName=o,l.samples=i;var r=document.createElement("div");r.style.cssText="text-align: center",r.textContent=l.name;var s=document.createElement("div");return 0===(n&Ht.HideMin)?(l.minText=document.createElement("div"),s.appendChild(l.minText)):l.minText=null,0===(n&Ht.HideMax)?(l.maxText=document.createElement("div"),s.appendChild(l.maxText)):l.maxText=null,0===(n&Ht.HideMean)?(l.meanText=document.createElement("div"),s.appendChild(l.meanText)):l.meanText=null,0===(n&Ht.HideLast)?(l.lastText=document.createElement("div"),s.appendChild(l.lastText)):l.lastText=null,l.element.appendChild(r),l.element.appendChild(s),0===(n&Ht.HideGraph)?(l.canvas=document.createElement("canvas"),l.canvas.style.cssText="display: block; padding: 0; margin: 0",l.canvas.width=Rt,l.canvas.height=Lt,l.ctx=l.canvas.getContext("2d"),l.element.appendChild(l.canvas)):(l.canvas=null,l.ctx=null),l}return qt(e,t),e.prototype.sync=function(){var t,e,n,o,i=this,l=this.samples.calc(),r=Lt/(1.2*l.max);0===(this.flags&Ht.RoundValues)?(t=l.min.toFixed(2),e=l.max.toFixed(2),n=l.mean.toFixed(2),o=l.last.toFixed(2)):(t=Math.round(l.min).toString(),e=Math.round(l.max).toString(),n=Math.round(l.mean).toString(),o=Math.round(l.last).toString()),null!==this.minText&&(this.minText.textContent="min:  "+t+this.unitName),null!==this.maxText&&(this.maxText.textContent="max:  "+e+this.unitName),null!==this.meanText&&(this.meanText.textContent="mean: "+n+this.unitName),null!==this.lastText&&(this.lastText.textContent="last: "+o+this.unitName),null!==this.ctx&&(this.ctx.fillStyle="#010",this.ctx.fillRect(0,0,Rt,Lt),this.ctx.fillStyle="#0f0",this.samples.each(function(t,e){i.ctx.fillRect(e,Lt,1,-t*r)}))},e}(Bt),Gt=(function(t){function e(e,n){var o=t.call(this,e)||this;return o.counter=n,o.text=document.createElement("div"),o.element.appendChild(o.text),o}qt(e,t),e.prototype.sync=function(){this.text.textContent=this.name+": "+this.counter.value}}(Bt),null);function It(){Gt||((Gt=document.createElement("div")).style.cssText="position: fixed;opacity: 0.9;right: 0;bottom: 0",document.body.appendChild(Gt))}function Qt(t){void 0===t&&(t=Ht.HideMin|Ht.HideMax|Ht.HideMean|Ht.RoundValues),It();var e=new At(Pt),n=new Vt("FPS",t,"",e);Gt.appendChild(n.element);var o=0,i=60;requestAnimationFrame(function t(l){o>0&&(i+=2/121*(1e3/(l-o)-i)),o=l,e.addSample(i),n.invalidate(),requestAnimationFrame(t)})}function zt(t){if(void 0===t&&(t=Ht.HideMin|Ht.HideMean),It(),void 0!==performance.memory){var e=new At(Pt),n=new Vt("Memory",t,"MB",e);Gt.appendChild(n.element),function t(){e.addSample(Math.round(performance.memory.usedJSHeapSize/1048576)),n.invalidate(),setTimeout(t,30)}()}}var Dt=function(t,e,n){this.data=new At(Pt),this.widget=new Vt(t,n,e,this.data),this.startTime=-1},Jt={};function Kt(t,e){void 0===e&&(e=0),It();var n=Jt[t];void 0===n&&(Jt[t]=n=new Dt(t,"ms",e),Gt.appendChild(n.widget.element))}function Ut(t){var e=performance.now(),n=Jt[t];void 0!==n&&-1!==n.startTime&&(n.data.addSample(e-n.startTime),n.widget.invalidate())}function Wt(t){return t>0?t>=10?"Query elapsed warn_long":t>=1?"Query elapsed warn":"Query elapsed short":""}function Xt(t){return t>=20?"label label-important":t>=10?"label label-warning":"label label-success"}let Yt=.5,Zt=50;function $t(t){if(0===t.length)return{};const e={};for(let n=0;n<t.length;++n){const o=t[n].split("=",2);1===o.length?e[o[0]]="":e[o[0]]=decodeURIComponent(o[1].replace(/\+/g," "))}return e}function te(){let t;return{elapsed:15*Math.random(),query:t=Math.random()<.1?"vacuum":Math.random()<.2?"<IDLE> in transaction":"SELECT blah FROM something"}}function ee(){const t=[],e=Math.floor(10*Math.random()+1);for(let n=0;n<e;n++)t.push(te());return t}const ne={elapsed:0,query:"***"};let oe=0;function ie(t,e){return void 0===e&&(e=oe++),{id:e,name:t,queries:ee()}}function le(t){const e=t.queries.slice(0,5);for(e.sort((t,e)=>t.elapsed-e.elapsed);e.length<5;)e.push(ne);return e}function re(t,e){for(let n=0;n<t.length;n++)if(Math.random()<e){const{id:e,name:o}=t[n];t[n]=ie(o,e)}}function se(t){if(0===t)return"";if(t>60){const e=Math.floor(t/60),n=(t%60).toFixed(2).split(".");return e+":"+n[0]+"."+n[1]}return t.toFixed(2)}!function(){const t=$t(window.location.search.substr(1).split("&"));void 0!==t.n&&(Zt=parseInt(t.n,10)),void 0!==t.m&&(Yt=parseFloat(t.m)),document.addEventListener("DOMContentLoaded",()=>{Qt(),zt(),Kt("view update");const t=document.createElement("div");t.style.display="flex";const e=document.createElement("input");e.type="range",e.style.marginBottom="10px",e.style.marginTop="5px";const n=document.createElement("label");n.textContent="mutations : "+(100*Yt).toFixed(0)+"%",e.addEventListener("change",t=>{Yt=Number.parseFloat(t.target.value)/100,n.textContent="mutations : "+(100*Yt).toFixed(0)+"%"}),t.appendChild(n),t.appendChild(e),document.body.insertBefore(t,document.body.firstChild)})}();const ce=function(t){const e=[];for(let n=0;n<t;n++)e.push(ie("cluster"+(n+1))),e.push(ie("cluster"+(n+1)+" slave"));return e}(Zt),ae=Tt("arrow"),ue=function(t,e){const n=o(4,{c:t=>Tt("popover left",u,[Tt("popover-content",u,t),ae]),su:void 0});return t=>l(n,t)}(),fe=function(t,e){const n=o(4612,{c:t=>{const e=Mt(t,t=>ce[t]);return t=>{const n=e(t),o=le(n),i=n.queries.length;return St(u,u,[Ot("dbname",u,n.name),Ot("query-count",u,Ct(Xt(i),u,i)),o.map(t=>Ot(Wt(t.elapsed),u,[se(t.elapsed),ue(t.query)]))])}},su:void 0});return t=>l(n,t)}(),de=t=>_t("table table-striped latest-data",u,[Et(u,u,s(t.map((t,e)=>r(t.id,fe(e)))))]),pe=document.getElementById("app");yt(()=>{wt(de(ce),pe)})(),setTimeout(function t(){var e;re(ce,Yt),void 0!==(e=Jt["view update"])&&(e.startTime=performance.now()),yt(bt)(),Ut("view update"),setTimeout(t,0)},0)}});