!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},l=function(){function e(e,t,n,r,i){this._f=e,this._l=this,this._r=null,this._c=i,this._t=t,this._k=0,this._p=n,this._i=null,this._cs=r,this._s=null,this._e=null}return e.prototype.k=function(e){return this._f|=128,this._k=e,this},e.prototype.s=function(e){return this._s=e,this},e.prototype.e=function(e){return this._f|=512,this._e=e,this},e.prototype.a=function(e){return this._p=e,this},e.prototype.c=function(){for(var t=arguments,n=null,r=null,i=0,o=0;i<t.length;++i,++o){var l=t[i];if(null!==l){"object"!=typeof l&&(l=new e(1,null,null,void 0,l));var a=l._l,s=l._f;if(a===l)0==(128&s)&&(l._k=o);else if(0==(256&s)){var u=l;do{0==(128&u._f)&&(u._k=o),++o,u=u._r}while(null!==u);--o}null!==r?(l._l=r,r._r=l):n=l,r=a}}return null!==n&&(n._l=r,this._f|=32,this._c=n),this},e.prototype.unsafeHTML=function(e){return this._f|=64,this._c=e,this},e.prototype.value=function(e){return this._c=e,this},e}();function a(e){return 0!=(49176&e._f)?a(e._c):e._i}var s=navigator.userAgent,u=/iPad|iPhone|iPod/.test(s)&&!("MSStream"in window);function f(){}function c(e,t){var n=e.length-1,r=e.pop();t!==n&&(e[t]=r)}var d=[];function h(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return e.apply(void 0,t)}catch(e){for(var r=0,i=d;r<i.length;r++)(0,i[r])(e);throw e}}}function p(e){for(var t=0;t<e.length;++t)!0===e[t]()&&c(e,t--)}function v(e){var t=e.a;e.a=[];for(var n=0,r=t;n<r.length;n++)(0,r[n])()}var _,g=0,y={a:[]},w={a:[]},m=[],k=[],b=[],x=f,A={f:0,w:{a:[]},r:{a:[]},a:{a:[]}},O={f:0,w:{a:[]},r:{a:[]},a:{a:[]}},P=null,N=h(function(){for(;y.a.length>0;)v(y);g^=4});(new MessageChannel).port1.onmessage=h(function(e){g^=8,v(w)});var E=h(function(){var e=_();if(0!=(1&g)!==e){g^=3,!e&&k.length>0&&C();for(var t=m,n=0;n<t.length;++n)t[n](e);g^=2}});function D(e){e instanceof Element&&(P=e)}function T(){16&g&&requestAnimationFrame(M)}function C(){var e;16&g||(e=T,4&(g|=16)||(g|=4,Promise.resolve().then(N)),y.a.push(e))}void 0!==document.hidden?(_=function(){return document.hidden},document.addEventListener("visibilitychange",E)):void 0!==document.webkitHidden?(_=function(){return document.webkitHidden},document.addEventListener("webkitvisibilitychange",E)):_=function(){return!1},_()&&(g|=1);var M=h(function(e){g^=48;var t=O;O=A,A=t,p(b);do{for(;4&t.f;)t.f^=4,v(t.r);for(;3&t.f;)2&t.f&&(t.f^=2,v(t.w)),1&t.f&&(t.f^=1,x())}while(7&t.f);for(1&(g^=32)||p(k);8&t.f;)t.f^=8,v(t.a);null!==P&&(P.focus(),P=null),k.length&&C()});function j(e){e.f|=1}function L(e,t){e.f|=2,e.w.a.push(t)}function S(){16&g&&M(performance.now())}var I=Node.prototype,H=Element.prototype,V=(Object.prototype.hasOwnProperty,I.insertBefore),F=I.removeChild,R=I.replaceChild,U=I.cloneNode,B=H.setAttribute,G=H.setAttributeNS,K=H.removeAttribute,W="http://www.w3.org/2000/svg",q="http://www.w3.org/1999/xlink",X="http://www.w3.org/XML/1998/namespace";function z(e){e.src.add(e)}function J(e){e.src.remove(e)}function Q(e,t){var n,r,i;if(null===e)Y(t);else if(null===t)Z(e);else if(e instanceof Array)if(t instanceof Array){for(n=0;n<e.length&&n<t.length;)(r=e[n])!==(i=t[n++])&&(null!==i&&z(i),null!==r&&J(r));for(;n<t.length;)null!==(r=t[n++])&&z(r);for(;n<e.length;)null!==(r=e[n++])&&J(r)}else for(z(t),n=0;n<e.length;++n)null!==(r=e[n])&&J(r);else Y(t),J(e)}function Y(e){if(e instanceof Array)for(var t=0;t<e.length;++t){var n=e[t];null!==n&&z(n)}else z(e)}function Z(e){if(e instanceof Array)for(var t=0;t<e.length;++t){var n=e[t];null!==n&&J(n)}else J(e)}function $(e,t,n){var r,i,o=e.style;if(null===t)for(r in n)void 0!==(i=n[r])&&o.setProperty(r,i);else if(null!==n)for(r in n)i=n[r],t[r]!==i&&(void 0!==i?o.setProperty(r,i):o.removeProperty(r))}function ee(e,t,n,r){if("boolean"==typeof r){if(!r)return;r=""}if(!0===t&&n.length>5&&120===n.charCodeAt(0)&&(58===n.charCodeAt(3)||58===n.charCodeAt(5))){if(n.startsWith("xml:"))return void G.call(e,X,n,r);if(n.startsWith("xlink:"))return void G.call(e,q,n,r)}B.call(e,n,r)}function te(e,t,n,r){var i,o;if(null===n)for(i in r)void 0!==(o=r[i])&&ee(e,t,i,o);else if(null!==r)for(i in r)o=r[i],n[i]!==o&&(void 0!==o?ee(e,t,i,o):K.call(e,i))}function ne(e,t){F.call(e,a(t)),ie(t)}function re(e){var t=e._f;if(0!=(544&t)){if(0!=(32&t)){var n=e._c;do{re(n),n=n._r}while(null!==n)}0!=(512&t)&&null!==e._e&&Y(e._e)}else 0!=(49176&t)&&(0!=(16&t)&&e._i.attached(),re(e._c))}function ie(e){var t=e._f;if(0!=(544&t)){if(0!=(32&t)){var n=e._c;do{ie(n),n=n._r}while(null!==n)}0!=(512&t)&&null!==e._e&&Z(e._e)}else if(0!=(49176&t)&&(ie(e._c),0!=(16&t))){var r=e._i;r.flags|=1,r.detached()}}function oe(e,t,n,r){var i,l,a=t._f,s=0;if((-2147434440&a)>0)if(i=t._c,0!=(32&a)){l=t._i;do{s|=oe(l,i,n,r),i=i._r}while(null!==i)}else if(0!=(16&a))0!=(6&(l=t._i).flags)?(fe(e,i,t._c=l.render(),n,r),l.flags&=-7,l.updated(!0),s=1):0!==(s=oe(e,i,n,r))&&l.updated(!1);else if(0!=(16384&a)){var u=t._t;l=t._i;var f=u.select(l,t._p,n);l===f?s=oe(e,i,n,r):(s=1,t._i=f,fe(e,i,t._c=u.render(f),n,r))}else 0!=(32768&a)&&(!0===r&&(t._i=o({},n,t._p)),n=t._i),s=oe(e,i,n,r);return s}function le(e,t){e.textContent="";var n=t;do{ie(n),n=n._r}while(null!==n)}function ae(e,t){"string"==typeof t?e.value=t:e.checked=t}function se(e,t,n){var r,i=t._f,l=null;if(0!=(1&i))l=r=document.createTextNode(t._c);else{var a=t._t;if(0!=(18&i))if(0!=(2&i)){var s=0!=(8192&i);0==(4&i)?r=s?document.createElementNS(W,a):document.createElement(a):(null===a._i&&se(e,a,n),r=U.call(a._i,!1)),void 0!==t._cs&&(!0===s?B.call(r,"class",t._cs):r.className=t._cs),null!==t._p&&te(r,s,null,t._p),null!==t._s&&$(r,null,t._s),null!==t._e&&(r._ev=t._e);var u=t._c;if(null!==u)if(0!=(32&i)){u=u;do{V.call(r,se(r,u,n),null),u=u._r}while(null!==u)}else 0!=(3072&i)?ae(r,u):r.innerHTML=u;l=r}else{var f=l=new a(t._p);r=se(e,t._c=f.render(),n)}else{if(0!=(49152&i))if(0!=(16384&i)){var c=a,d=l=c.select(null,t._p,n);t._c=c.render(d)}else n=l=o({},n,t._p);else t._c=a.render(t._p);r=se(e,t._c,n)}0!=(131072&i)&&D(r)}return t._i=l,r}function ue(e,t,n,r){var i=se(e,n,r);return V.call(e,i,t),re(n),i}function fe(e,t,n,r,i){if(t!==n){var l,s=t._f,u=n._f;if(0!=(134020319&(s^u))||0!=(16412&s)&&t._t!==n._t||t._k!==n._k)l=se(e,n,r),R.call(e,l,a(t)),ie(t),re(n);else if(n._i=l=t._i,0!=(3&u)){var f=t._c,c=n._c;if(0!=(1&u))f!==c&&(l.data=c);else{var d=0!=(8192&u);if(t._cs!==n._cs){var h=void 0===n._cs?"":n._cs;!0===d?B.call(l,"class",h):l.className=h}if(t._p!==n._p&&te(l,d,t._p,n._p),t._s!==n._s&&$(l,t._s,n._s),t._e!==n._e&&(Q(t._e,n._e),l._ev=n._e),f!==c)if(null===f)if(0!=(32&u)){c=c;do{ue(l,null,c,r),c=c._r}while(null!==c)}else 0!=(3072&u)?ae(l,c):l.innerHTML=c;else null===c?0!=(32&s)?le(l,f):0!=(64&s)&&(l.textContent=""):0!=(32&s)?ce(l,f,c,r,i):0!=(64&s)?l.innerHTML=c:"string"==typeof c?l.value!==c&&(l.value=c):l.checked=c}}else if(0!=(16&u)){var p=l,v=t._p,_=n._p;v!==_&&p.newPropsReceived(v,_),p.props=_,0!=(6&p.flags)||!0===p.shouldUpdate(v,_)?(fe(e,t._c,n._c=p.render(),r,i),p.flags&=-7,p.updated(!0)):0!==oe(e,n._c=t._c,r,i)&&p.updated(!1)}else if(0!=(49152&u))if(0!=(16384&u)){var g=n._t,y=l,w=n._i=g.select(y,n._p,r);y===w?oe(e,n._c=t._c,r,i):fe(e,t._c,n._c=g.render(w),r,i)}else t._p!==n._p&&(i=!0),n._i=r=!0===i?o({},r,n._p):l,fe(e,t._c,n._c,r,i);else{var m=n._t;t._p===n._p||0!=(65536&u)&&!0!==m.shouldUpdate(t._p,n._p)?oe(e,n._c=t._c,r,i):fe(e,t._c,n._c=m.render(n._p),r,i)}}else oe(e,n,r,i)}function ce(e,t,n,r,i){var o=t._l,l=n._l,s=0,u=0;e:for(;;){for(;t._k===n._k&&0==(128&(t._f^n._f));)if(fe(e,t,n,r,i),u++,t===o?s=1:t=t._r,n===l?s|=2:n=n._r,s)break e;for(;o._k===l._k&&0==(128&(o._f^l._f));)if(fe(e,o,l,r,i),u++,t===o?s=1:o=o._l,n===l?s|=2:l=l._l,s)break e;break}if(s){if(s<3)if(s<2)for(var f=de(l);ue(e,f,n,r),n!==l;)n=n._r;else for(;ne(e,t),t!==o;)t=t._r}else{for(var c=0,d=0,h=0,p=[],v=void 0,_=void 0,g=void 0,y=n;g=y._k,128&y._f?(void 0===v&&(v=new Map),v.set(g,d)):(void 0===_&&(_=new Map),_.set(g,d)),p[d++]=y,y!==l;)y=y._r;var w=new Array(d).fill(-1),m=0;for(y=t;g=y._k,void 0===(s=128&y._f?v?v.get(g):void 0:_?_.get(g):void 0)?y._k=null:(h=h>s?1e9:s,w[s]=c,fe(e,y,p[s],r,i),m++),c++,y!==o;)y=y._r;if(u||m){for(s=c-m;s>0;)null===t._k&&(ne(e,t),s--),t=t._r;if(1e9===h){var k=he(w);for(s=k.length-1;d>0;)w[--d]<0?ue(e,de(l),l,r):s<0||d!==k[s]?V.call(e,a(l),de(l)):s--,l=l._l}else if(m!==d)for(;d>0;)w[--d]<0&&ue(e,de(l),l,r),l=l._l}else{le(e,t);do{ue(e,null,n,r),n=n._r}while(null!==n)}}}function de(e){var t=e._r;return null===t?null:a(t)}function he(e){var t,n,r,i=e.slice(),o=[];o.push(0);for(var l=0;l<e.length;++l){var a=e[l];if(-1!==a)if(e[r=o[o.length-1]]<a)i[l]=r,o.push(l);else{for(t=0,n=o.length-1;t<n;)e[o[r=(t+n)/2|0]]<a?t=r+1:n=r;a<e[o[t]]&&(t>0&&(i[l]=o[t-1]),o[t]=l)}}for(n=o[(t=o.length)-1];t-- >0;)o[t]=n,n=i[n];return o}var pe=[],ve={},_e=0;function ge(e){for(var t=0,n=pe;t<n.length;t++){var r=n[t];if(r.container===e)return r}}function ye(){if(_e){_e=0,x=we;for(var e=0;e<pe.length;++e){var t=pe[e],n=t.container,r=t.currentVNode;if(t.invalidated){var i=t.newVNode;i?(r?fe(n,r,i,ve,!1):(ue(n,null,i,ve),u&&(n.onclick=f)),t.currentVNode=i):r&&(ne(n,r),c(pe,pe.indexOf(t)),--e),t.newVNode=null,t.invalidated=!1}else r&&oe(n,r,ve,!1)}}}function we(){me(),S()}function me(){var e;_e||(_e=1,e=ye,C(),L(O,e))}var ke=function(){function e(e){this.flags=0,this.props=e}return e.prototype.newPropsReceived=function(e,t){},e.prototype.attached=function(){},e.prototype.detached=function(){},e.prototype.shouldUpdate=function(e,t){return e!==t},e.prototype.updated=function(e){},e.prototype.invalidated=function(){},e.prototype.invalidate=function(){this.flags|=2,this.invalidated(),0==(1&this.flags)&&(32&g?j(A):(C(),j(O)))},e}();function be(e,t){for(var n=null,r=null,i=0;i<e.length;++i){var o=t(e[i],i);null!==o&&(null!==r?(o._l=r,r._r=o):n=o,r=o)}return null!==n?(n._l=r,n._f|=256,n):null}var xe=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}();function Ae(e){var t=e.target||window;return void 0!==t.correspondingUseElement&&(t=t.correspondingUseElement),t}KeyboardEvent.prototype.hasOwnProperty("key"),MouseEvent.prototype.hasOwnProperty("buttons"),window,window,window;var Oe=!xe||{capture:!0,passive:!0},Pe=!!xe&&{passive:!0};function Ne(e){return 0!=(2&e)?0!=(1&e)?Oe:Pe:0!=(1&e)}var Ee=function(e){function t(t,n,r,i){var o=e.call(this,t,r)||this;return o.target=n,o.native=i,o}return i(t,e),t}(function(e,t){this.flags=e,this.timestamp=t});function De(e,t,n){var r=t._ev;if(r){var i=void 0;if(Array.isArray(r))for(var o=0,l=0,a=r;l<a.length;l++){var s=a[l];null!==s&&!0===n(s)&&(0===o?i=s:1===o?i=[i,s]:i.push(s),++o)}else!0===n(r)&&(i=r);void 0!==i&&e.push({target:t,handlers:i})}}function Te(e,t,n){for(;null!==t;)De(e,t,n),t=t.parentElement}function Ce(e,t,n){var r=void 0===t?e.handler(n):t(e,n);return void 0===r?0:r}function Me(e,t,n,r){var i=e.handlers,o=0;if(Array.isArray(i))for(var l=0,a=i;l<a.length;l++){var s=a[l];s.flags&n&&(o|=Ce(s,r,t))}else i.flags&n&&(o=Ce(i,r,t));t.flags|=o}function je(e,t,n,r){for(var i=e.length-1;i>=0;)if(Me(e[i--],t,1,r),2&t.flags)return;if(n)for(t.flags|=32,i=0;i<e.length;++i)if(Me(e[i],t,2,r),2&t.flags)return}function Le(e){0==e.deps++&&document.addEventListener(e.name,e.dispatch,Ne(e.flags))}function Se(e){0==--e.deps&&document.removeEventListener(e.name,e.dispatch,Ne(e.flags))}function Ie(e,t){if(null!==e)for(var n=0,r=e.slice();n<r.length;n++)(0,r[n])(t)}var He=function(e,t){var n={src:{add:function(){++n.listeners,Le(n)},remove:function(){--n.listeners,Se(n)}},deps:0,listeners:0,flags:5,name:"keydown",before:null,after:null,dispatch:null},r=function(e){return e.src===n.src};return n.dispatch=h(function(e){var t=[];if(n.listeners>0&&Te(t,Ae(e),r),t.length||null!==n.before||null!==n.after){var i=new Ee(0,Ae(e),e.timeStamp,e);Ie(n.before,i),t.length&&je(t,i,0!=(4&n.flags)),Ie(n.after,i),0!=(1&i.flags)&&e.preventDefault()}}),n}();function Ve(e,t,n){return{src:e,flags:!0===n?1:2,handler:t,listeners:0,props:null,state:null}}function Fe(e){return new l(15728642,"div",null,e,null)}var Re={x:-1,y:0},Ue={x:1,y:0},Be={x:0,y:-1},Ge={x:0,y:1},Ke=function(){function e(e){void 0===e&&(e={x:0,y:0}),this.body=[],this.grow=4,this.body.push(e)}return Object.defineProperty(e.prototype,"head",{get:function(){return this.body[this.body.length-1]},enumerable:!0,configurable:!0}),e.prototype.move=function(e){if(this.body.push(e),this.grow)return this.grow--,null;var t=this.body[0];return this.body=this.body.splice(1),t},e}(),We=function(){function e(e,t){void 0===e&&(e=20),void 0===t&&(t=20),this.rows=e,this.cols=t,this.cells=new Array(e*t).fill(0)}return e.prototype.pointToIndex=function(e){return this.cols*e.y+e.x},e.prototype.mark=function(e,t){this.cells[this.pointToIndex(e)]|=t},e.prototype.unmark=function(e,t){this.cells[this.pointToIndex(e)]&=~t},e.prototype.createRandomFood=function(){var e=0;do{e=Math.random()*this.cells.length|0}while(0!==this.cells[e]);this.cells[e]|=4},e.prototype.isBodyAt=function(e){return!!(1&this.cells[this.pointToIndex(e)])},e.prototype.isHeadAt=function(e){return!!(2&this.cells[this.pointToIndex(e)])},e.prototype.isFoodAt=function(e){return!!(4&this.cells[this.pointToIndex(e)])},e}();function qe(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Xe(e,t){return(e%t+t)%t}var ze,Je=function(){function e(){var e=this;this.gameOver=!1,this.startTime=0,this.currentTime=0,this.direction={x:1,y:0},this.grid=new We,this.snake=new Ke,this.newDirection=null,this.snake.body.forEach(function(t){e.grid.mark(t,1)}),this.grid.mark(this.snake.head,2),this.grid.createRandomFood()}return e.prototype.setNewDirection=function(e){this.newDirection=e},e.prototype.updateState=function(){if(!this.gameOver){this.newDirection&&(r={x:0,y:0},((n=qe(this.direction,this.newDirection)).x!==r.x||n.y!==r.y)&&(this.direction=this.newDirection),this.newDirection=null);var e=qe(this.snake.head,this.direction);e={x:Xe(e.x,this.grid.cols),y:Xe(e.y,this.grid.rows)},this.grid.unmark(this.snake.head,2);var t=this.snake.move(e);t&&this.grid.unmark(t,1),this.grid.mark(e,2),this.grid.isBodyAt(e)?this.gameOver=!0:this.grid.isFoodAt(e)&&(this.snake.grow=3,this.grid.unmark(e,4),this.grid.createRandomFood()),this.grid.mark(e,1)}var n,r},e}(),Qe=(ze=function(e){function t(){var t,n,r=null!==e&&e.apply(this,arguments)||this;return r.onKeyDown=(t=function(e){switch(e.native.keyCode){case 37:return r.props.value.setNewDirection(Re),1;case 38:return r.props.value.setNewDirection(Be),1;case 39:return r.props.value.setNewDirection(Ue),1;case 40:return r.props.value.setNewDirection(Ge),1}},void 0===n&&(n=!1),Ve(He.src,t,n)),r}return i(t,e),t.prototype.render=function(){var e,t=this.props.value.grid,n=0;return Fe(this.props.value.gameOver?"SnakeGame gameOver":"SnakeGame").c(((e=Fe("Grid").a({tabIndex:0}).s({width:30*t.cols+"px",height:30*t.rows+"px"}).e(this.onKeyDown).c(be(t.cells,function(e){return Fe((t=e,1&t?2&t?"Cell body head":"Cell body":4&t?"Cell food":"Cell")).k(n++);var t})))._f|=131072,e))},t}(ke),function(e){return new l(16,ze,e,void 0,null)}),Ye=document.getElementById("app"),Ze=new Je;!function e(){var t,n,r;Ze.updateState(),t=Qe({value:Ze}),(r=ge(n=Ye))?(r.newVNode=t,r.invalidated=!0):pe.push({container:n,currentVNode:null,newVNode:t,invalidated:!0}),me(),S(),setTimeout(e,100)}()}]);