var e=["attr"],l=[4];const t=Object,n=Array,r=n.isArray,a=Map,s=Int32Array,o=Node.prototype,p=Element.prototype,i=document,u=i.createElement("template"),c=u.content;i.createElement("template").content.firstChild;const f=o.insertBefore,d=o.removeChild,v=o.cloneNode,h=p.setAttribute,m=p.removeAttribute,g=p.addEventListener,y=p.removeEventListener,b=(e,l)=>t.getOwnPropertyDescriptor(e,l),w=b(o,"firstChild").get,N=b(o,"nextSibling").get,E=b(o,"textContent").set,q=b(p,"className").set,M=b(HTMLElement.prototype,"style").get,A=b(SVGElement.prototype,"style").get,L=t.seal({p:null,n:null,si:0}),k=(e,l,t,n,r)=>({f:e,v:l,c:t,s:n,p:r}),x=e=>{var l,t;if(null!==e)if(r(e))for(t=0;t<e.length;t++)null!==(l=e[t])&&K(l,true);else K(e,true)},C=(e,l,t,n,r,a,s)=>{for(var o,p,i,u,c,f,d,v,b=0;b<l.length;b++)c=(f=l[b])>>3&1023,0===(i=7&f)?(e=n[c],o=void 0):(u=f>>13,null!==r&&(d=r[u]),d===(v=a[u])&&4!==i||(1===i?0===c?q.call(e,v):void 0===d?E.call(e,v):w.call(e).nodeValue=v:7===i?v(e):(p=t[c],2===i?void 0!==v?h.call(e,p,v):m.call(e,p):3===i?e[p]=v:4===i?e[p]!==v&&(e[p]=v):5===i?(void 0===o&&(o=false===s?M.call(e):A.call(e)),o.setProperty(p,v)):(void 0!==d&&y.call(e,p,d),g.call(e,p,v)))))},F=(e,l,t,n,r)=>{for(var a,s,o=L;t<n;)4&(s=l[t++])&&(r[++o.si]=e),2&s?(a=s>>3)?F(w.call(e),l,t,t+=a,r):(a=e,r[++o.si]=e=N.call(e),a.remove()):e=N.call(e)},S=(e,l)=>{var t,r,a,s,o,p=null,i=L,u=i.p,c=i.n,d=l.d,v=l.p,h=d.p1,m=d.p2(),g=h.s,y=h.f,b=n(1023&y);if(b[0]=m,i.n=null,g.length>0&&(i.si=0,F(w.call(m),g,0,g.length,b)),C(m,h.p,h.d,b,null,v,!!(1048576&h.f)),r=0,s=y>>10,t=k(1,l,p,b,e),s>0)for(i.p=m,t.c=p=n(s),g=h.c,y=0;y<g.length;y++)a=(s=g[y])>>2,0===(o=3&s)?p[r++]=J(t,v[a]):1===o?i.n=b[a]:(i.p=b[a],i.n=null);return f.call(u,m,c),i.p=u,i.n=m,t},I=(e,l,t)=>{var n,r,a,s,o,p=L,i=p.p,u=e.c,c=e.v.p,d=e.s,v=l.p,h=l.d.p1,m=d[0],g=h.c;for(512&t&&(t^=512,f.call(i,m,p.n)),C(m,h.p,h.d,d,c,v,!!(1048576&h.f)),p.p=m,p.n=null,s=0,o=0;o<g.length;o++)n=(r=g[o])>>2,0===(a=3&r)?u[s]=z(e,u[s++],v[n],t):1===a?p.n=d[n]:(p.p=d[n],p.n=null);p.p=i,p.n=m},T=(e,l,t,r)=>{for(var a=t.length,s=n(a),o=k(l,r,s,null,e);a>0;)s[--a]=J(o,t[a]);return o},j=(e,l,t,n)=>{var r,a=L,s=l.s;return"object"!==typeof t?(r=l.v,l.v=t,r!==t&&(s.nodeValue=t),512&n&&f.call(a.p,s,a.n),l):(d.call(a.p,s),J(e,t))},O=(e,l,t)=>{var n=e.c,r=e.v.p,a=l.d,s=l.p;320&(e.f|t)||r!==s&&(void 0===a.p2||true!==a.p2(r,s))?e.c=z(e,n,e.s.r(s),t):null!==n&&_(n,t)},Q=(e,l,t)=>{var r,a,s,o,p=l.length;if(0===p)x(e);else{if(p!==(o=(s=e.c).length)){for(e.c=r=n(p);o>p;)null!==(a=s[--o])&&x(a);for(;p>o;)r[--p]=J(e,l[p])}for(;p>0;)s[--p]=z(e,s[p],l[p],t)}},V=(e,l,t,n)=>{var r=l.k,o=t.k,p=t.v,i=o.length,u=r.length,c=Array(i);if(0===i)u>0&&x(e);else if(0===u)for(;i>0;)c[--i]=J(e,p[i]);else{var f=e.c,d=u-1,v=i-1,h=0,m=o[v];e:for(;;){for(;r[d]===m;){if(c[v]=z(e,f[d--],p[v],n),h>--v||h>d)break e;m=o[v]}for(;r[h]===o[h]&&++h<=d&&h<=v;);break}if(h>d)for(;v>=h;)c[v]=J(e,p[v--]);else if(h>v){i=h;do{x(f[i++])}while(i<=d)}else{var g=0,y=v-h+1,b=new s(y),w=new a;for(i=0;i<y;++i)b[i]=-1,u=i+h,w.set(o[u],u);for(i=h;i<=d;++i)m=f[i],void 0!==(u=w.get(r[i]))?(g=g<u?u:1073741823,b[u-h]=i,c[u]=m):x(m);for(512&n||1073741823!==g||B(b);y-- >0;)m=p[v=y+h],u=b[y],c[v]=-1===u?J(e,m):z(e,c[v],m,n|(1073741823===g&&-2!==u?512:0))}for(;h>0;)c[--h]=z(e,f[h],p[h],n)}e.c=c},B=e=>{for(var l,t,n,r,a=e.length,o=new s(a),p=new s(a),i=0,u=0;-1===e[u];u++);for(p[0]=u++;u<a;u++)if(-1!==(t=e[u]))if(e[l=p[i]]<t)o[u]=l,p[++i]=u;else{for(n=0,r=i;n<r;)e[p[l=n+r>>1]]<t?n=l+1:r=l;t<e[p[n]]&&(n>0&&(o[u]=p[n-1]),p[n]=u)}for(l=p[i];i-- >=0;)e[l]=-2,l=o[l]},D=e=>()=>("string"===typeof e&&(u.innerHTML=e,e=c.firstChild),v.call(e,true)),H=(e,l,t,n,r,a)=>({f:1,p1:{f:l,p:t,c:n,s:r,d:a},p2:e}),P=(e,l)=>({d:e,p:l}),G={f:4,p1:null,p2:null},R=(e,l,t)=>({d:G,p:{k:e.map(l),v:e.map(t)}}),_=(e,l)=>{var t,n,r,a,s,o,p,i,u,c,d=L,v=e.c,h=e.f;if(1&h){if(u=e.s[0],512&l&&(l^=512,f.call(d.p,u,d.n)),128&h){for(p=0,i=d.p,d.p=u,d.n=null,t=e.s,c=e.v.d.p1.c,o=0;o<c.length;o++)a=(n=c[o])>>2,0===(r=3&n)?null!==(s=v[p++])&&_(s,l):1===r?d.n=t[a]:(d.p=t[a],d.n=null);d.p=i}d.n=u}else if(16&h)512&l&&f.call(d.p,e.s,d.n),d.n=e.s;else if(2&h)320&(h|l)?e.c=z(e,v,e.s.r(e.v.p),l):null!==v&&_(v,l);else for(o=v.length;--o>=0;)null!==(t=v[o])&&_(t,l);e.f&=63},z=(e,l,t,n)=>{var a,s;return null===t?(x(l),null):null===l?J(e,t):16&(a=l.f)?j(e,l,t,n):(s=l.v)===t?(_(l,n),l):8&a&&!r(t)||s.d!==t.d?(x(l),J(e,t)):(2===(a&=11)?O(l,t,n):1===a?I(l,t,n):8===a?Q(l,t,n):V(l,s.p,t.p,n),l.f&=63,l.v=t,l)},J=(e,l)=>{var t,n,a,s,o;return null!==l?"object"===typeof l?r(l)?T(e,8,l,l):1===(t=3&(s=l.d).f)?S(e,l):2===t?(a=k(2,l,null,o={r:null,u:null},e),o.r=n=s.p1(a),a.c=J(a,n(l.p)),a):T(e,4,l.p.v,l):(n=L,o=i.createTextNode(l),f.call(n.p,o,n.n),n.n=o,k(16,l,null,o,e)):null},K=(e,l)=>{var t,n,a,s=e.f;if(true===l&&17&s&&(l=false,d.call(L.p,1&s?e.s[0]:e.s)),null!==(t=e.c))if(r(t))for(n=0;n<t.length;n++)null!==(a=t[n])&&K(a,l);else K(t,l);if(2&s&&null!==(t=e.s.u))if("function"===typeof t)t();else for(n=0;n<t.length;n++)t[n]()},U=(e=.016666666666666666)=>({type:"ema",alpha:e,avg:NaN,std:0,var:0,min:0}),W=Number.isNaN,X=Math.sqrt,Y=(e,l)=>{if(W(e.avg))return e.avg=l,void(e.min=l);var t=e.alpha,n=1-t;e.var=n*(e.var+t*(l-e.avg)**2),e.avg=n*e.avg+t*l,e.std=X(e.var),l<e.min&&(e.min=l)},Z=queueMicrotask,$={f:32,p1:e=>{Z((()=>{var l=e.v.p;L.p=l.p,L.n=l.n,_(e.c,0),e.f=32}))},p2:null},ee=(e,l=null)=>k(32,{d:$,p:{p:e,n:l}},null,null,null),le=(e,l,t=false)=>{var n=e.v.p;L.p=n.p,L.n=n.n,e.c=null===e.c?J(e,l):z(e,e.c,l,true===t?256:0),e.f=32};let te=.5,ne=50;function re(){const e=location.hash.substring(1).split(",");for(const l of e){const[e,t]=l.split("=");if("m"===e){const e=Number.parseFloat(t);isNaN(e)||(te=e)}else if("n"===e){const e=Number.parseInt(t,10);e>0&&(ne=e)}}}addEventListener("hashchange",re),re();const ae=Math.random,se=Math.floor,oe=()=>{const e=15*ae();let l;return l=ae()<.1?"vacuum":ae()<.2?"<IDLE> in transaction":"SELECT blah FROM something",{elapsed:e,query:l}};function pe(){const e=[],l=se(10*ae()+1);for(let t=0;t<l;t++)e.push(oe());return e}const ie={elapsed:0,query:"***"};let ue=0;const ce=(e,l)=>(void 0===l&&(l=ue++),{id:l,name:e,queries:pe()}),fe=(e,l)=>e.elapsed-l.elapsed,de=e=>{var l=e.queries.slice(0,5);for(l.sort(fe);l.length<5;)l.push(ie);return l};function ve(e){for(var l=[],t=0;t<e;t++)l.push(ce("cluster"+(t+1))),l.push(ce("cluster"+(t+1)+" slave"));return l}const he=(e,l)=>{for(let t=0;t<e.length;t++)if(Math.random()<l){const{id:l,name:n}=e[t];e[t]=ce(n,l)}},me=e=>{if(0===e)return"";if(e>60){const l=(e%60).toFixed(2).split(".");return se(e/60)+":"+l[0].padStart(2,"0")+"."+l[1]}return e.toFixed(2)},ge=e=>e>=10?"Query elapsed warn_long":e>=1?"Query elapsed warn":e>0?"Query elapsed short":"",ye=e=>e>=20?"label label-important":e>=10?"label label-warning":"label label-success",be=H(D('<td><div class="popover left"><div class="popover-content"></div><div class="arrow"></div></div></td>'),1027,[1,16,16393],[5,4],[14,4],e),we=({elapsed:e,query:l})=>P(be,[ge(e),me(e),l]),Ne=H(D('<tr><td class="dbname"></td><td class="query-count"><span></span></td></tr>'),5123,[16,8193,16393,8,9],[28,24,20,16,12],[5,10,4],e),Ee=e=>{var l=de(e),t=e.queries.length;return P(Ne,[e.name,ye(t),t,we(l[0]),we(l[1]),we(l[2]),we(l[3]),we(l[4])])},qe=e=>e.id,Me=H(D('<table class="table table-striped latest-data"><tbody></tbody></table>'),1026,[],[7,0],l,e),Ae=e=>P(Me,[R(e,qe,Ee)]),Le=H(D("<div><span></span></div>"),1026,[2],[7,4],l,e),ke=(e,l)=>P(Le,[e,l]),xe=ve(ne),Ce=ee(document.getElementById("app"),null);le(Ce,Ae(xe));const Fe=U();document.querySelector("perf-monitor").observe("view update",Fe);const Se=performance,Ie=()=>{he(xe,te);let e=Se.now();le(Ce,Ae(xe)),Y(Fe,Se.now()-e),requestAnimationFrame(Ie)};Ie();export{ke as Test};
//# sourceMappingURL=bundle.js.map
