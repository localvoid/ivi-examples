!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}({2:function(t,e,n){n.r(e);const o=(t,e)=>({f:t,d:e}),i=(o(16,null),o(1056,null),o(8,null)),l=t=>function(t,e){const n=o(2,t);return(t,e,o=null)=>((t,e,n,o)=>({t:t,v:e,c:n,n:o}))(n,e,o,t)}(t);function r(t,e,n){return function(t,e,n){const i=o(4,{c:t,e1:e,e2:n});return(t,e)=>((t,e,n)=>({t:t,v:e,c:n}))(i,t,e)}(e=>t,e,n)}const a=void 0;let c=1;function s(){return c}function u(){c++}const d={},f={},p={};let m=null;const v=t=>({t:s(),v:t});function h(){const t=m;return m=null,t}const y=t=>({v:t}),x=[];let g=!1;const b=()=>{},w=(t,e)=>Object.getOwnPropertyDescriptor(t,e),T=Node.prototype,M=Element.prototype,C=document,_=Object.prototype.hasOwnProperty,E=T.insertBefore,S=T.removeChild,H=(T.replaceChild,T.cloneNode),O=M.setAttribute,j=(M.setAttributeNS,M.removeAttribute),A=w(M,"className").set,F=w(HTMLElement.prototype,"style").get,P=w(SVGElement.prototype,"style").get;let k,q=null;function N(t){return q=t}function L(t,e,n){const o=e.f,i=e.c;let l,r,a;if(0!=(3&o))l=e.s,!0===n&&E.call(t,l,k),null!==i&&(k=null,L(l,i,!1)),k=l;else if(0!=(4&o))l=e.s,0!=(512&o)||null!==l.d&&!0===function(t){const e=t[0];for(let n=1;n<t.length;n++){const o=t[n];if("object"==typeof o){if(o.t>e)return!0}else if(!0===o(f,e))return!0}return!1}(l.d)?(a=e.o,a=l.r(a.v,a.c),l.d=h(),e.c=B(t,i,a,n)):null!==i&&L(t,i,n);else if(0!=(136&o))for(r=i.length;r>0;)null!==(l=i[--r])&&L(t,l,n);else 0!=(16&o)?L(t,i,n):(l=N(e.s),L(t,i,n),N(l))}function R(t,e){!function t(e,n){let o,i=n.f;if(0!=(3&i))S.call(e,n.s);else if(n=n.c,0!=(136&i))for(i=0;i<n.length;++i)null!==(o=n[i])&&t(e,o);else null!==n&&t(e,n)}(t,e),function t(e){const n=e.f;let o,i,l;if(null!==(o=e.c))if(0!=(136&n))for(i=0;i<o.length;i++)null!==(l=o[i])&&t(l);else t(o);if(0!=(4&n)&&null!==(l=e.s.u))if("function"==typeof l)l(p);else for(i=0;i<l.length;i++)l[i](p)}(e)}function I(t,e){const{t:n,v:o,n:i}=e,l=0!=(256&n.f);if(void 0===t){const e=n.d;t=l?C.createElementNS("http://www.w3.org/2000/svg",e):C.createElement(e)}return i&&G(t,i,l),void 0!==o&&D(t,void 0,o,l),t}function V(t,e){return null!==e?"object"==typeof e?e instanceof Array?function(t,e){let n=e.length;const o=Array(n);for(;n>0;)o[--n]=V(t,e[n]);return{f:128,o:e,c:o,s:null}}(t,e):function(t,e){const n=e.t,o=n.f,i={f:o,o:e,c:null,s:null};let l,r,a,c;if(0!=(4&o))i.s=l={r:null,d:null,u:null},l.r=r=n.d.c(i),a=r(e.v,e.c),l.d=h(),i.c=V(t,a);else if(0!=(2&o))r=n.d,0!=(64&o)&&(a=r.n,null===a&&(r.n=a=I(void 0,r.p)),a=H.call(a,!1)),i.s=a=I(a,e),l=k,null!==(r=e.c)&&(k=null,i.c=V(a,r)),k=a,E.call(t,a,l);else if(0!=(48&o))0!=(32&o)?(i.s=l=0!=(1024&o)?N(e.v):(s=n.d,u=e.v,q={n:q,d:s,v:v(u)}),i.c=V(t,e.c),N(l)):i.c=V(t,e.c);else for(a=e.v,c=a.length,i.c=r=Array(c);c>0;)r[--c]=V(t,a[c].v);var s,u;return i}(t,e):function(t,e){const n=C.createTextNode(e);return E.call(t,n,k),k=n,{f:1,o:e,c:null,s:n}}(t,e):null}function B(t,e,n,o){if(null===n)return null!==e&&R(t,e),null;if(null===e)return V(t,n);const{f:i,o:l,s:r}=e;if(0!=(1&i)){if("object"==typeof n)return S.call(t,r),V(t,n);e.o=n,l!==n&&(r.nodeValue=n),!0===o&&E.call(t,r,k),k=r}else{if(l===n)return L(t,e,o),e;if(0!=(128&i)?!(n instanceof Array):n instanceof Array||l.t!==n.t)return R(t,e),V(t,n);e.o=n;const u=e.c;let d,f,p,m,v,y;if(0!=(4&i))d=l.v,p=l.c,f=n.v,m=n.c,v=n.t.d,p!==m&&(void 0===v.e2||!0!==v.e2(p,m))||d!==f&&(void 0===v.e1||!0!==v.e1(d,f))?(f=r.r(f,m),r.d=h(),e.c=B(t,u,f,o)):L(t,e,o);else if(0!=(2&i))y=0!=(256&i),l.n!==(v=n.n)&&(void 0===v&&(v=""),G(r,v,y)),l.v!==(v=n.v)&&D(r,l.v,v,y),!0===o&&E.call(t,r,k),k=null,e.c=B(r,u,n.c,!1),k=r;else if(0!=(136&i))if(0!=(128&i))if(y=n.length,0===y)R(t,e);else{if(d=u.length,y!==d){for(e.c=v=Array(y);d>y;)f=u[--d],null!==f&&R(t,f);for(;y>d;)v[--y]=V(t,n[y])}else v=u;for(;y>0;)v[--y]=B(t,u[y],n[y],o)}else!function(t,e,n,o,i){let l=o.length,r=n.length,a=Array(l);if(0===l)r>0&&R(t,e);else if(0===r)for(;l>0;)a[--l]=V(t,o[l].v);else{let c=e.c,s=r-1,u=l-1,d=0,f=o[u];t:for(;;){for(;n[s].k===f.k;){if(a[u]=B(t,c[s--],f.v,i),d>--u||d>s)break t;f=o[u]}for(;n[d].k===o[d].k&&++d<=s&&d<=u;);break}if(d>s)for(;u>=d;)a[u]=V(t,o[u--].v);else if(d>u){l=d;do{null!==(f=c[l++])&&R(t,f)}while(l<=s)}else{let e=0,p=u-d+1,m=new Int32Array(p),v=new Map;for(l=0;l<p;++l)r=l+d,m[l]=-1,v.set(o[r].k,r);for(l=d;l<=s;++l)r=v.get(n[l].k),f=c[l],void 0!==r?(e=e<r?r:99999999,m[r-d]=l,a[r]=f):null!==f&&R(t,f);for(!1===i&&99999999===e&&function(t){let e,n,o,i,l=t.length,r=new Int32Array(l),a=new Int32Array(l),c=0,s=0;for(;-1===t[s];++s);for(a[0]=s++;s<l;++s)if(n=t[s],-1!==n)if(e=a[c],t[e]<n)r[s]=e,a[++c]=s;else{for(o=0,i=c;o<i;)e=o+i>>1,t[a[e]]<n?o=e+1:i=e;n<t[a[o]]&&(o>0&&(r[s]=a[o-1]),a[o]=s)}for(e=a[c];c-- >=0;)t[e]=-2,e=r[e]}(m);p-- >0;)u=p+d,f=o[u].v,r=m[p],a[u]=-1===r?V(t,f):B(t,a[u],f,i||99999999===e&&-2!==r)}for(;d>0;)a[--d]=B(t,c[d],o[d].v,i)}e.c=a}(t,e,l.v,n.v,o);else 0!=(16&i)?e.c=B(t,u,n.c,o):(f=n.v,0!=(1024&i)?e.s=f:(v=r.v,v.v!==f&&(c=f,(a=v).t=s(),a.v=c)),v=N(e.s),e.c=B(t,u,n.c,o),N(v))}var a,c;return e}function G(t,e,n){!0===n?O.call(t,"class",e):A.call(t,e)}function D(t,e,n,o){let i;if(void 0===e)for(i in n)Q(t,i,void 0,n[i],o);else if(void 0===n)for(i in e)Q(t,i,e[i],void 0,o);else{let l=0,r=0;for(i in e)Q(t,i,e[i],!0===_.call(n,i)?(l++,n[i]):void 0,o);const a=Object.keys(n);for(;l<a.length&&r<a.length;++r)i=a[r],!1===_.call(e,i)&&(Q(t,i,void 0,n[i],o),++l)}}function Q(t,e,n,o,i){"style"!==e?"object"==typeof o?o.u(t,e,void 0===n?void 0:n.v,o.v):"object"==typeof n?n.u(t,e,n.v,void 0):n!==o&&(void 0===o?j.call(t,e):O.call(t,e,o)):n!==o&&function(t,e,n,o){const i=!0===o?P.call(t):F.call(t);let l,r;if(void 0===e)for(l in n)r=n[l],void 0!==r&&i.setProperty(l,r);else if(void 0===n)for(l in e)void 0!==e[l]&&i.removeProperty(l);else{let t=0,o=0;for(l in e){const o=e[l];r=!0===_.call(n,l)?(t++,n[l]):void 0,o!==r&&(void 0!==r?i.setProperty(l,r):i.removeProperty(l))}const a=Object.keys(n);for(;t<a.length&&o<a.length;++o)l=a[o],!1===_.call(e,l)&&(r=n[l],++t,void 0!==r&&i.setProperty(l,n[l]))}}(t,n,o,i)}const z=[];function J(t){for(;t.v.length>0;){const e=t.v;t.v=[];for(let t=0;t<e.length;++t)e[t](d)}}let U=0,K=0;Promise.resolve();const W=y([]),X=y([]),Y=y([]),Z=t=>{return e=function(){U|=1,t.apply(void 0,arguments),J(W),U&=-4,u()},function(){if(!g)try{return e.apply(void 0,arguments)}catch(t){throw g=!0,x.forEach(e=>{e(t)}),t}};var e};Z(b);const $=t=>Z(e=>{U|=8,t(e),0!=(4&U)&&(void 0!==e&&(K=e),0!=(16&U)&&function(){for(let t=0;t<z.length;++t){const e=z[t],{container:n,state:o,next:i}=e;k=null,void 0!==i?(e.next=void 0,e.state=B(n,o,i,!1)):null!==o&&L(n,o,!1)}}(),J(X),J(Y)),U&=-29}),tt=$(b);function et(){U|=16,0==(4&U)&&(U|=4,0==(8&U)&&requestAnimationFrame(tt))}const nt=l("div"),ot=l("span"),it=l("table"),lt=l("tbody"),rt=l("td"),at=l("tr");var ct,st,ut=function(t,e,n,o){this.min=t,this.max=e,this.mean=n,this.last=o},dt=function(){function t(t){this.samples=[],this.maxSamples=t,this._i=-1}return t.prototype.addSample=function(t){this._i=(this._i+1)%this.maxSamples,this.samples[this._i]=t},t.prototype.each=function(t){for(var e=this.samples,n=0;n<e.length;n++)t(e[(this._i+1+n)%e.length],n)},t.prototype.calc=function(){var t=this.samples;if(0===t.length)return new ut(0,0,0,0);for(var e=t[(this._i+1)%t.length],n=e,o=0,i=0;i<t.length;i++){var l=t[(this._i+1+i)%t.length];l<e&&(e=l),l>n&&(n=l),o+=l}var r=t[this._i],a=o/t.length;return new ut(e,n,a,r)},t}(),ft=[],pt=-1,mt=(ct=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}ct(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),vt=function(){function t(t){var e=this;this._sync=function(){e.sync(),e._dirty=!1},this.name=t,this.element=document.createElement("div"),this.element.style.cssText="padding: 2px;background-color: #020;font-family: monospace;font-size: 12px;color: #0f0",this._dirty=!1,this.invalidate()}return t.prototype.invalidate=function(){var t;this._dirty||(this._dirty=!0,t=this._sync,ft.push(t),-1===pt&&requestAnimationFrame((function(t){pt=-1;var e=ft;ft=[];for(var n=0;n<e.length;n++)e[n]()})))},t.prototype.sync=function(){throw new Error("sync method not implemented")},t}();!function(t){t[t.HideMin=1]="HideMin",t[t.HideMax=2]="HideMax",t[t.HideMean=4]="HideMean",t[t.HideLast=8]="HideLast",t[t.HideGraph=16]="HideGraph",t[t.RoundValues=32]="RoundValues"}(st||(st={}));var ht=function(t){function e(e,n,o,i){var l=t.call(this,e)||this;l.flags=n,l.unitName=o,l.samples=i;var r=document.createElement("div");r.style.cssText="text-align: center",r.textContent=l.name;var a=document.createElement("div");return 0==(n&st.HideMin)?(l.minText=document.createElement("div"),a.appendChild(l.minText)):l.minText=null,0==(n&st.HideMax)?(l.maxText=document.createElement("div"),a.appendChild(l.maxText)):l.maxText=null,0==(n&st.HideMean)?(l.meanText=document.createElement("div"),a.appendChild(l.meanText)):l.meanText=null,0==(n&st.HideLast)?(l.lastText=document.createElement("div"),a.appendChild(l.lastText)):l.lastText=null,l.element.appendChild(r),l.element.appendChild(a),0==(n&st.HideGraph)?(l.canvas=document.createElement("canvas"),l.canvas.style.cssText="display: block; padding: 0; margin: 0",l.canvas.width=100,l.canvas.height=30,l.ctx=l.canvas.getContext("2d"),l.element.appendChild(l.canvas)):(l.canvas=null,l.ctx=null),l}return mt(e,t),e.prototype.sync=function(){var t,e,n,o,i=this,l=this.samples.calc(),r=30/(1.2*l.max);0==(this.flags&st.RoundValues)?(t=l.min.toFixed(2),e=l.max.toFixed(2),n=l.mean.toFixed(2),o=l.last.toFixed(2)):(t=Math.round(l.min).toString(),e=Math.round(l.max).toString(),n=Math.round(l.mean).toString(),o=Math.round(l.last).toString()),null!==this.minText&&(this.minText.textContent="min:  "+t+this.unitName),null!==this.maxText&&(this.maxText.textContent="max:  "+e+this.unitName),null!==this.meanText&&(this.meanText.textContent="mean: "+n+this.unitName),null!==this.lastText&&(this.lastText.textContent="last: "+o+this.unitName),null!==this.ctx&&(this.ctx.fillStyle="#010",this.ctx.fillRect(0,0,100,30),this.ctx.fillStyle="#0f0",this.samples.each((function(t,e){i.ctx.fillRect(e,30,1,-t*r)})))},e}(vt),yt=(function(t){function e(e,n){var o=t.call(this,e)||this;return o.counter=n,o.text=document.createElement("div"),o.element.appendChild(o.text),o}mt(e,t),e.prototype.sync=function(){this.text.textContent=this.name+": "+this.counter.value}}(vt),null);function xt(){yt||((yt=document.createElement("div")).style.cssText="position: fixed;opacity: 0.9;right: 0;bottom: 0",document.body.appendChild(yt))}var gt=function(t,e,n){this.data=new dt(100),this.widget=new ht(t,n,e,this.data),this.startTime=-1},bt={};let wt=.5,Tt=50;function Mt(){const t=15*Math.random();let e;return e=Math.random()<.1?"vacuum":Math.random()<.2?"<IDLE> in transaction":"SELECT blah FROM something",{elapsed:t,query:e}}function Ct(){const t=[],e=Math.floor(10*Math.random()+1);for(let n=0;n<e;n++)t.push(Mt());return t}const _t={elapsed:0,query:"***"};let Et=0;function St(t,e){return void 0===e&&(e=Et++),v({id:e,name:t,queries:Ct()})}function Ht(t){const e=t.queries.slice(0,5);for(e.sort((t,e)=>t.elapsed-e.elapsed);e.length<5;)e.push(_t);return e}function Ot(t){if(0===t)return"";if(t>60){const e=Math.floor(t/60),n=(t%60).toFixed(2).split(".");return e+":"+n[0].padStart(2,"0")+"."+n[1]}return t.toFixed(2)}!function(){const t=function(t){if(0===t.length)return{};const e={};for(let n=0;n<t.length;++n){const o=t[n].split("=",2);1===o.length?e[o[0]]="":e[o[0]]=decodeURIComponent(o[1].replace(/\+/g," "))}return e}(window.location.search.substr(1).split("&"));void 0!==t.n&&(Tt=parseInt(t.n,10)),void 0!==t.m&&(wt=parseFloat(t.m)),document.addEventListener("DOMContentLoaded",()=>{!function(t){void 0===t&&(t=st.HideMin|st.HideMax|st.HideMean|st.RoundValues),xt();var e=new dt(100),n=new ht("FPS",t,"",e);yt.appendChild(n.element);var o=0,i=60;requestAnimationFrame((function t(l){o>0&&(i+=2/121*(1e3/(l-o)-i)),o=l,e.addSample(i),n.invalidate(),requestAnimationFrame(t)}))}(),function(t){if(void 0===t&&(t=st.HideMin|st.HideMean),xt(),void 0!==performance.memory){var e=new dt(100),n=new ht("Memory",t,"MB",e);yt.appendChild(n.element),function t(){e.addSample(Math.round(performance.memory.usedJSHeapSize/1048576)),n.invalidate(),setTimeout(t,30)}()}}(),function(t,e){void 0===e&&(e=0),xt();var n=bt[t];void 0===n&&(bt[t]=n=new gt(t,"ms",e),yt.appendChild(n.widget.element))}("view update");const t=document.createElement("div");t.style.display="flex";const e=document.createElement("input");e.type="range",e.style.marginBottom="10px",e.style.marginTop="5px";const n=document.createElement("label");n.textContent="mutations : "+(100*wt).toFixed(0)+"%",e.addEventListener("change",t=>{wt=Number.parseFloat(t.target.value)/100,n.textContent="mutations : "+(100*wt).toFixed(0)+"%"}),t.appendChild(n),t.appendChild(e),document.body.insertBefore(t,document.body.firstChild)})}();const jt=function(t){const e=[];for(let n=0;n<t;n++)e.push(St("cluster"+(n+1))),e.push(St("cluster"+(n+1)+" slave"));return e}(Tt),At=nt("arrow"),Ft=r(t=>nt("popover left",a,[nt("popover-content",a,t),At])),Pt=({elapsed:t,query:e})=>rt(t>=10?"Query elapsed warn_long":t>=1?"Query elapsed warn":"Query elapsed short",a,[Ot(t),Ft(e)]),kt=r(t=>{const e=(o=t,null===m?m=[s(),o]:m.push(o),"function"==typeof o?o:o.v),n=e.queries.length;var o;return at(a,a,[rt("dbname",a,e.name),rt("query-count",a,ot(n>=20?"label label-important":n>=10?"label label-warning":"label label-success",a,n)),Ht(e).map(Pt)])}),qt=document.getElementById("app");$(()=>{var t;!function(t,e){const n=(o=t=>t.container===e,z.find(o));var o;n?n.next=t:z.push({container:e,state:null,next:t}),et()}(it("table table-striped latest-data",a,[lt(a,a,(t=jt.map(t=>({k:t.v.id,v:kt(t)})),{t:i,v:t}))]),qt)})(),setTimeout((function t(){var e;!function(t,e){for(let o=0;o<t.length;o++)Math.random()<e&&((n=t[o],n.t=s(),n.v).queries=Ct());var n}(jt,wt),void 0!==(e=bt["view update"])&&(e.startTime=performance.now()),$(et)(),function(t){var e=performance.now(),n=bt["view update"];void 0!==n&&-1!==n.startTime&&(n.data.addSample(e-n.startTime),n.widget.invalidate())}(),setTimeout(t,0)}),0)}});