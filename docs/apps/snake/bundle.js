!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([,function(t,e,n){"use strict";n.r(e);class i{constructor(t,e,n,i,o){this._f=t,this._l=this,this._r=null,this._c=null,this._t=e,this._k=0,this._p=n,this._i=null,this._s=o,this._cs=i,this._e=null}k(t){return this._f|=64,this._k=t,this}e(t){return null!==t&&(this._f|=256,this._e=t),this}t(t){return this._f|=-2147483616,this._c=t,this}c(){const t=arguments;let e=null,n=null;for(let i=0,l=0;i<t.length;++i,++l){let r=t[i];if(null!==r){"object"!==typeof r&&(r=o(r));const t=r._l,i=r._f;if(t===r)0===(64&i)&&(r._k=l);else if(0===(128&i)){let t=r;do{0===(64&t._f)&&(t._k=l),++l,t=t._r}while(null!==t);--l}null!==n?(r._l=n,n._r=r):e=r,n=t}}return null!==e&&(e._l=n,this._f|=16,this._c=e),this}}const o=t=>new i(1,null,t,"",void 0);function l(t){return 0!==(1032&t._f)?l(t._c):t._i}function r(t,e){const n=t.length-1,i=t.pop();e!==n&&(t[e]=i)}function s(t,e){const n=t.indexOf(e);r(t,n)}const c=requestAnimationFrame,u=t=>{Promise.resolve().then(t)};function f(t){for(let e=0;e<t.length;++e)!0===t[e]()&&r(t,e--)}const a=()=>{},d=[];function h(t){return function(){try{return t.apply(void 0,arguments)}catch(e){throw d.forEach(t=>{t(e)}),e}}}(()=>{let t=!1;try{const n=Object.defineProperty({},"passive",{get(){t=!0}});window.addEventListener("test",null,n)}catch(e){}})(),KeyboardEvent.prototype.hasOwnProperty("key"),MouseEvent.prototype.hasOwnProperty("buttons"),window,window,window;const _="GestureEvent"in window,p=Node.prototype,v=Element.prototype,g=(Object.prototype.hasOwnProperty,p.insertBefore),y=p.removeChild,m=p.replaceChild,w=p.cloneNode,b=v.setAttribute,k=(v.setAttributeNS,v.removeAttribute),x="http://www.w3.org/2000/svg";function O(t,e){let n,i,o;if(null===t)A(e);else if(null===e)j(t);else if(t instanceof Array)if(e instanceof Array){for(n=0;n<t.length&&n<e.length;)(i=t[n])!==(o=e[n++])&&(null!==o&&N(o),null!==i&&P(i));for(;n<e.length;)null!==(i=e[n++])&&N(i);for(;n<t.length;)null!==(i=t[n++])&&P(i)}else for(N(e),n=0;n<t.length;++n)null!==(i=t[n])&&P(i);else A(e),P(t)}function A(t){if(t instanceof Array)for(let e=0;e<t.length;++e){const n=t[e];null!==n&&N(n)}else N(t)}function j(t){if(t instanceof Array)for(let e=0;e<t.length;++e){const n=t[e];null!==n&&P(n)}else P(t)}function N(t){t.src.add(t)}function P(t){t.src.remove(t)}let D={};function E(t){const e=D;return D=t,e}function S(t){D=t}function T(){return D}function C(t,e){y.call(t,l(e)),I(e)}function I(t){const e=t._f;if(0!==(1048&e)){let n=t._c;for(;null!==n;)I(n),n=n._r;if(0!==(8&e)){const e=t._i.detached;if(null!==e)if("function"===typeof e)e();else for(let t=0;t<e.length;t++)e[t](!0)}}0!==(256&e)&&j(t._e)}function M(t,e,n){const i=e._f;if((-2147482600&i)>0){const o=e._i;let l=e._c;if(0!==(16&i))for(;null!==l;)M(o,l,n),l=l._r;else if(0!==(8&i)){const i=o.select;!0===o.dirty||null!==i&&!0===i(T())?L(t,l,e._c=o.update(e._p),n):M(t,l,n)}else{!0===n&&(e._i=Object.assign({},T(),e._p));const i=E(e._i);M(t,l,n),S(i)}}}function F(t,e){t.textContent="";do{I(e),e=e._r}while(null!==e)}function B(t,e){const n=e._f,i=e._p;let o,l=null;if(0!==(1&n))l=o=document.createTextNode(i);else{const r=e._t;if(0!==(256&n)&&A(e._e),0!==(2&n)){const s=0!==(512&n);0===(4&n)?o=s?document.createElementNS(x,r):document.createElement(r):(null===r._i&&B(t,r),o=w.call(r._i,!0)),l=o;const c=e._cs;if(c&&(!0===s?b.call(o,"class",c):o.className=c),void 0!==i&&K(o,void 0,i),void 0!==e._s&&q(o,void 0,e._s),0!==(16&n)){let t=e._c;for(;null!==t;)G(o,null,t),t=t._r}else 0!==(32&n)&&""!==e._c&&(o.textContent=e._c)}else if(0!==(8&n)){l={dirty:!1,update:null,select:null,detached:null};const n=r.c(l);l.update=n,o=B(t,e._c=n(i))}else{const n=E(l=Object.assign({},T(),i));o=B(t,e._c),S(n)}}return e._i=l,o}function G(t,e,n){g.call(t,B(t,n),e)}function L(t,e,n,i){if(e===n)return void M(t,n,i);let o;const r=e._f,s=n._f;if(0!==(523887&(r^s))||0!==(12&r)&&e._t!==n._t||e._k!==n._k)m.call(t,B(t,n),l(e)),I(e);else{const l=e._p,c=n._p;if(n._i=o=e._i,0!==(1&s))l!==c&&(o.data=c);else{const u=e._c;let f=n._c;if(e._e!==n._e&&O(e._e,n._e),0!==(2&s)){let t=n._cs;if(e._cs!==t&&(void 0===t&&(t=""),0!==(512&s)?b.call(o,"class",t):o.className=t),l!==c&&K(o,l,c),e._s!==n._s&&q(o,e._s,n._s),u!==f)if(0===(32&r))if(null===u)do{G(o,null,f),f=f._r}while(null!==f);else null===f?F(o,u):R(o,u,f,i);else{const t=o.firstChild;null!==t?t.nodeValue=f:o.textContent=f}}else if(0!==(8&s)){const e=n._t;!0===o.dirty||l!==c&&(void 0===e.shouldUpdate||!0===e.shouldUpdate(l,c))?(L(t,u,n._c=o.update(c),i),o.dirty=!1):(n._c=u,M(t,n,i))}else{l===c&&!0!==i||(o=Object.assign({},T(),c),i=!0),n._i=o;const e=E(o);L(t,u,f,i),S(e)}}}}function R(t,e,n,i){let o=e._l,r=n._l,s=0,c=0;t:for(;;){for(;e._k===n._k&&0===(64&(e._f^n._f));){if(L(t,e,n,i),c++,e===o?s=1:e=e._r,n===r){s|=2;break t}if(n=n._r,s)break t}for(;o._k===r._k&&0===(64&(o._f^r._f));){if(L(t,o,r,i),c++,e===o?s=1:o=o._l,n===r){s|=2;break t}if(r=r._l,s)break t}break}if(s){if(s<3)if(s<2){const e=U(r);for(;G(t,e,n),n!==r;)n=n._r}else for(;C(t,e),e!==o;)e=e._r}else{let u=0,f=0,a=0;const d=[];let h,_,p,v=n;for(;p=v._k,64&v._f?(void 0===h&&(h=new Map),h.set(p,f)):(void 0===_&&(_=new Map),_.set(p,f)),d[f++]=v,v!==r;)v=v._r;const y=new Array(f).fill(-1);let m=0;for(v=e;p=v._k,void 0===(s=0!==(64&v._f)?void 0===h?void 0:h.get(p):void 0===_?void 0:_.get(p))?v._k=null:(a=a>s?1e9:s,y[s]=u,L(t,v,d[s],i),m++),u++,v!==o;)v=v._r;if(c||m){for(s=u-m;s>0;)null===e._k&&(C(t,e),s--),e=e._r;if(1e9===a){const e=$(y);for(s=e.length-1;f>0;)y[--f]<0?G(t,U(r),r):s<0||f!==e[s]?g.call(t,l(r),U(r)):s--,r=r._l}else if(m!==f)for(;f>0;)y[--f]<0&&G(t,U(r),r),r=r._l}else{F(t,e);do{G(t,null,n),n=n._r}while(null!==n)}}}function U(t){const e=t._r;return null===e?null:l(e)}function $(t){const e=t.slice(),n=[];n[0]=0;let i,o,l,r=0;for(let s=0;s<t.length;++s){const c=t[s];if(-1!==c)if(t[l=n[r]]<c)e[s]=l,n[++r]=s;else{for(i=0,o=r;i<o;)t[n[l=(i+o)/2|0]]<c?i=l+1:o=l;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(o=n[r];r>=0;)n[r--]=o,o=e[o];return n}function q(t,e,n){const i=t.style;let o,l;if(void 0===e)for(o in n)void 0!==(l=n[o])&&i.setProperty(o,l);else if(void 0!==n)for(o in n)l=n[o],e[o]!==l&&(void 0!==l?i.setProperty(o,l):i.removeProperty(o))}function H(t,e,n,i){n!==i&&("object"===typeof i?i.u(t,e,void 0===n?void 0:n.v,i.v):("boolean"===typeof i&&(i=i?"":void 0),void 0===i?k.call(t,e):b.call(t,e,i)))}function K(t,e,n){let i;if(void 0===e)for(i in n)H(t,i,void 0,n[i]);else if(void 0!==n)for(i in n)H(t,i,e[i],n[i])}const V=[],z=t=>V.find(e=>e.container===t);function J(){for(let t=0;t<V.length;++t){const e=V[t],{container:n,current:i,next:o}=e;e.next=void 0,o?(i?L(n,i,o,!1):(G(n,null,o),_&&(n.onclick=a)),e.current=o):i&&(null===o?(C(n,i),s(V,e),--t):M(n,i,!1))}}function Q(t){for(;t.v.length>0;){const e=t.v;let n=0;t.v=[];do{e[n++]()}while(n<e.length)}}let W=0;const X={v:[]},Y={v:[]},Z={v:[]},tt=[],et=[];let nt=0;const it=t=>h(function(){W|=1,t.apply(void 0,arguments),Q(X),W&=-4}),ot=it(a),lt=(t=>it(e=>{W|=16,t(e),0!==(4&W)&&(nt=void 0===e?performance.now():e,f(tt),0!==(32&W)&&J(),Q(Y),f(et),Q(Z)),W&=-61}))(a);function rt(t){var e;void 0!==t&&0!==(1&t)&&0===(8&W)?0===(16&(W|=12))&&(e=lt,X.v.push(e),0===(3&W)&&(W|=2,u(ot))):0===(4&W)&&0===(16&(W|=4))&&c(lt)}function st(t){W|=32,rt(t)}function ct(t,e,n){const i=z(e);i?i.next=t:V.push({container:e,next:t,current:null}),st(n)}function ut(t,e,n){for(let i=0;i<V.length;i++){const{container:o,current:l}=V[i];if(o.contains(e)){ft(t,n,e,o,l);break}}}function ft(t,e,n,i,o){const l=n.parentNode;if(l!==i){if(null!==(o=ft(t,e,l,i,o))&&0!==(1048&o._f)){let i=o._c;for(;null!==i;){const o=at(t,e,n,i);if(o)return o;i=i._r}}return null}return at(t,e,n,o)}function at(t,e,n,i){const o=i._f;let l;if(0!==(2&o)){if(i._i===n)return dt(t,i,e),i}else if(0!==(1032&o)&&(l=at(t,e,n,i._c)))return dt(t,i,e),l;return null}function dt(t,e,n){const i=e._e;if(null!==i){let o;if(i instanceof Array){let t=0;for(let e=0;e<i.length;e++){const l=i[e];null!==l&&!0===n(l)&&(0===t?o=l:1===t?o=[o,l]:o.push(l),++t)}}else!0===n(i)&&(o=i);void 0!==o&&t.push({target:e,handlers:o})}}function ht(t,e,n,i){let o=t.length;for(;--o>=0;)if(_t(t[o],e,1,i),2&e.flags)return;if(n)for(;++o<t.length;)if(_t(t[o],e,2,i),2&e.flags)return}function _t(t,e,n,i){const o=t.handlers;let l=0;if(o instanceof Array)for(const r of o)r.flags&n&&(l|=pt(r,i,e));else o.flags&n&&(l=pt(o,i,e));e.flags|=l}function pt(t,e,n){const i=void 0===e?t.handler(n):e(t,n);return void 0===i?0:i}class vt{constructor(t,e){this.flags=t,this.timestamp=e}}class gt extends vt{constructor(t,e,n,i){super(t,n),this.target=e,this.native=i}}function yt(t,e,n){const i={src:{add(){++i.listeners,mt(i)},remove(){--i.listeners,wt(i)}},deps:0,listeners:0,flags:t,options:void 0===n||n,name:e,before:null,after:null,dispatch:null},o=t=>t.src===i.src;return i.dispatch=it(t=>{const e=t.target,n=[];if(i.listeners&&ut(n,e,o),n.length||i.before||i.after){const o=new gt(0,e,t.timeStamp,t);bt(i.before,o),n.length&&ht(n,o,0!==(4&i.flags)),bt(i.after,o),1&o.flags&&t.preventDefault()}}),i}function mt(t){0===t.deps++&&document.addEventListener(t.name,t.dispatch,t.options)}function wt(t){0===--t.deps&&document.removeEventListener(t.name,t.dispatch,t.options)}function bt(t,e){if(null!==t){const n=t.slice();for(let t=0;t<n.length;t++)n[t](e)}}const kt=yt(5,"keydown");function xt(t,e,n){return{src:t,flags:!0===n?1:2,handler:e,listeners:0,props:null,state:null}}function Ot(t,e=!1){return xt(kt.src,t,e)}const At={v:void 0,u:a};function jt(t,e,n,i){var o;void 0===n&&i&&(o=(()=>{t.focus()}),Y.v.push(o),rt(void 0))}const Nt={v:!1,u:jt},Pt={v:!0,u:jt},Dt=t=>void 0===t?At:t?Pt:Nt;function Et(t,e){let n=null,i=null;for(let o=0;o<t.length;++o){const l=e(t[o],o);null!==l&&(null!==i?(l._l=i,i._r=l):n=l,i=l)}return null!==n?(n._l=i,n._f|=128,n):null}const St=(t,e,n)=>new i(47106,"div",e,t,n),Tt={x:-1,y:0},Ct={x:1,y:0},It={x:0,y:-1},Mt={x:0,y:1};class Ft{constructor(t={x:0,y:0}){this.body=[],this.grow=4,this.body.push(t)}get head(){return this.body[this.body.length-1]}move(t){if(this.body.push(t),this.grow)return this.grow--,null;{const t=this.body[0];return this.body=this.body.splice(1),t}}}class Bt{constructor(t=20,e=20){this.rows=t,this.cols=e,this.cells=new Array(t*e).fill(0)}pointToIndex(t){return this.cols*t.y+t.x}mark(t,e){this.cells[this.pointToIndex(t)]|=e}unmark(t,e){this.cells[this.pointToIndex(t)]&=~e}createRandomFood(){let t=0;do{t=Math.random()*this.cells.length|0}while(0!==this.cells[t]);this.cells[t]|=4}isBodyAt(t){return!!(1&this.cells[this.pointToIndex(t)])}isHeadAt(t){return!!(2&this.cells[this.pointToIndex(t)])}isFoodAt(t){return!!(4&this.cells[this.pointToIndex(t)])}}function Gt(t,e){return{x:t.x+e.x,y:t.y+e.y}}function Lt(t,e){return(t%e+e)%e}function Rt(t){return 1&t?2&t?"Cell body head":"Cell body":4&t?"Cell food":"Cell"}const Ut=function(t,e){const n={c:()=>{let t;const e=Ot(e=>{switch(e.native.keyCode){case 37:return t.setNewDirection(Tt),1;case 38:return t.setNewDirection(It),1;case 39:return t.setNewDirection(Ct),1;case 40:return t.setNewDirection(Mt),1}});return n=>(t=n.value,St(t.gameOver?"SnakeGame gameOver":"SnakeGame").c(St("Grid",{tabIndex:0,autofocus:Dt(!0)},{width:`${30*t.grid.cols}px`,height:`${30*t.grid.rows}px`}).e(e).c(Et(t.grid.cells,(t,e)=>St(Rt(t)).k(e)))))},shouldUpdate:void 0};return t=>new i(8,n,t,"",void 0)}(),$t=document.getElementById("app"),qt=new class{constructor(){this.gameOver=!1,this.startTime=0,this.currentTime=0,this.direction={x:1,y:0},this.grid=new Bt,this.snake=new Ft,this.newDirection=null,this.snake.body.forEach(t=>{this.grid.mark(t,1)}),this.grid.mark(this.snake.head,2),this.grid.createRandomFood()}setNewDirection(t){this.newDirection=t}updateState(){if(!this.gameOver){this.newDirection&&(e={x:0,y:0},((t=Gt(this.direction,this.newDirection)).x!==e.x||t.y!==e.y)&&(this.direction=this.newDirection),this.newDirection=null);let n=Gt(this.snake.head,this.direction);n={x:Lt(n.x,this.grid.cols),y:Lt(n.y,this.grid.rows)},this.grid.unmark(this.snake.head,2);const i=this.snake.move(n);i&&this.grid.unmark(i,1),this.grid.mark(n,2),this.grid.isBodyAt(n)?this.gameOver=!0:this.grid.isFoodAt(n)&&(this.snake.grow=3,this.grid.unmark(n,4),this.grid.createRandomFood()),this.grid.mark(n,1)}var t,e}};!function t(){qt.updateState(),ct(Ut({value:qt}),$t),setTimeout(t,100)}()}]);