function k(){}const et=t=>t;function bt(t,e){for(const n in e)t[n]=e[n];return t}function nt(t){return t()}function Y(){return Object.create(null)}function N(t){t.forEach(nt)}function T(t){return typeof t=="function"}function It(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let B;function Jt(t,e){return B||(B=document.createElement("a")),B.href=e,t===B.href}function xt(t){return Object.keys(t).length===0}function $t(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Kt(t,e,n){t.$$.on_destroy.push($t(e,n))}function Qt(t,e,n,i){if(t){const r=it(t,e,n,i);return t[0](r)}}function it(t,e,n,i){return t[1]&&i?bt(n.ctx.slice(),t[1](i(e))):n.ctx}function Ut(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)c[o]=e.dirty[o]|r[o];return c}return e.dirty|r}return e.dirty}function Vt(t,e,n,i,r,c){if(r){const s=it(e,n,i,c);t.p(s,r)}}function Xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Yt(t){return t&&T(t.destroy)?t.destroy:k}function Zt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const rt=typeof window<"u";let st=rt?()=>window.performance.now():()=>Date.now(),U=rt?t=>requestAnimationFrame(t):k;const C=new Set;function ot(t){C.forEach(e=>{e.c(t)||(C.delete(e),e.f())}),C.size!==0&&U(ot)}function lt(t){let e;return C.size===0&&U(ot),{promise:new Promise(n=>{C.add(e={c:t,f:n})}),abort(){C.delete(e)}}}let W=!1;function vt(){W=!0}function Et(){W=!1}function kt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&l.push(d)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,d=(r>0&&e[n[r]].claim_order<=a?r+1:kt(1,r,h=>e[n[h]].claim_order,a))-1;i[l]=n[d]+1;const f=d+1;n[f]=l,r=Math.max(f,r)}const c=[],s=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);c.reverse(),s.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<s.length;l++){for(;a<c.length&&s[l].claim_order>=c[a].claim_order;)a++;const d=a<c.length?c[a]:null;t.insertBefore(s[l],d)}}function St(t,e){t.appendChild(e)}function ct(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function At(t){const e=ut("style");return Ct(ct(t),e),e.sheet}function Ct(t,e){return St(t.head||t,e),e.sheet}function Mt(t,e){if(W){for(Nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function te(t,e,n){W&&!n?Mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function at(t){t.parentNode&&t.parentNode.removeChild(t)}function ee(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ut(t){return document.createElement(t)}function Dt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function V(t){return document.createTextNode(t)}function ne(){return V(" ")}function ie(){return V("")}function re(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function se(t){return function(e){return e.preventDefault(),t.call(this,e)}}function oe(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function jt(t){return Array.from(t.childNodes)}function qt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ft(t,e,n,i,r=!1){qt(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function dt(t,e,n,i){return ft(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||c.push(o.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function le(t,e,n){return dt(t,e,n,ut)}function ce(t,e,n){return dt(t,e,n,Dt)}function Ot(t,e){return ft(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>V(e),!0)}function ae(t){return Ot(t," ")}function ue(t,e){e=""+e,t.data!==e&&(t.data=e)}function fe(t,e){t.value=e??""}function de(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function _t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function _e(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(r)):c===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function he(t,e){return new t(e)}const H=new Map;let L=0;function Pt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Tt(t,e){const n={stylesheet:At(e),rules:{}};return H.set(t,n),n}function J(t,e,n,i,r,c,s,o=0){const l=16.666/i;let a=`{
`;for(let y=0;y<=1;y+=l){const g=e+(n-e)*c(y);a+=y*100+`%{${s(g,1-g)}}
`}const d=a+`100% {${s(n,1-n)}}
}`,f=`__svelte_${Pt(d)}_${o}`,h=ct(t),{stylesheet:u,rules:_}=H.get(h)||Tt(h,t);_[f]||(_[f]=!0,u.insertRule(`@keyframes ${f} ${d}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${r}ms 1 both`,L+=1,f}function K(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),L-=r,L||Rt())}function Rt(){U(()=>{L||(H.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&at(e)}),H.clear())})}let O;function j(t){O=t}function X(){if(!O)throw new Error("Function called outside component initialization");return O}function me(t){X().$$.on_mount.push(t)}function pe(t){X().$$.after_update.push(t)}function ye(){const t=X();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=_t(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,c)}),!c.defaultPrevented}return!0}}const A=[],Z=[];let M=[];const tt=[],ht=Promise.resolve();let Q=!1;function mt(){Q||(Q=!0,ht.then(pt))}function ge(){return mt(),ht}function P(t){M.push(t)}const I=new Set;let S=0;function pt(){if(S!==0)return;const t=O;do{try{for(;S<A.length;){const e=A[S];S++,j(e),zt(e.$$)}}catch(e){throw A.length=0,S=0,e}for(j(null),A.length=0,S=0;Z.length;)Z.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];I.has(n)||(I.add(n),n())}M.length=0}while(A.length);for(;tt.length;)tt.pop()();Q=!1,I.clear(),j(t)}function zt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}function Bt(t){const e=[],n=[];M.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),M=e}let D;function yt(){return D||(D=Promise.resolve(),D.then(()=>{D=null})),D}function q(t,e,n){t.dispatchEvent(_t(`${e?"intro":"outro"}${n}`))}const F=new Set;let E;function we(){E={r:0,c:[],p:E}}function be(){E.r||N(E.c),E=E.p}function gt(t,e){t&&t.i&&(F.delete(t),t.i(e))}function Ft(t,e,n,i){if(t&&t.o){if(F.has(t))return;F.add(t),E.c.push(()=>{F.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const wt={duration:0};function xe(t,e,n){const i={direction:"in"};let r=e(t,n,i),c=!1,s,o,l=0;function a(){s&&K(t,s)}function d(){const{delay:h=0,duration:u=300,easing:_=et,tick:p=k,css:y}=r||wt;y&&(s=J(t,0,1,u,h,_,y,l++)),p(0,1);const g=st()+h,v=g+u;o&&o.abort(),c=!0,P(()=>q(t,!0,"start")),o=lt(w=>{if(c){if(w>=v)return p(1,0),q(t,!0,"end"),a(),c=!1;if(w>=g){const b=_((w-g)/u);p(b,1-b)}}return c})}let f=!1;return{start(){f||(f=!0,K(t),T(r)?(r=r(i),yt().then(d)):d())},invalidate(){f=!1},end(){c&&(a(),c=!1)}}}function $e(t,e,n,i){const r={direction:"both"};let c=e(t,n,r),s=i?0:1,o=null,l=null,a=null;function d(){a&&K(t,a)}function f(u,_){const p=u.b-s;return _*=Math.abs(p),{a:s,b:u.b,d:p,duration:_,start:u.start,end:u.start+_,group:u.group}}function h(u){const{delay:_=0,duration:p=300,easing:y=et,tick:g=k,css:v}=c||wt,w={start:st()+_,b:u};u||(w.group=E,E.r+=1),o||l?l=w:(v&&(d(),a=J(t,s,u,p,_,y,v)),u&&g(0,1),o=f(w,p),P(()=>q(t,u,"start")),lt(b=>{if(l&&b>l.start&&(o=f(l,p),l=null,q(t,o.b,"start"),v&&(d(),a=J(t,s,o.b,o.duration,0,y,c.css))),o){if(b>=o.end)g(s=o.b,1-s),q(t,o.b,"end"),l||(o.b?d():--o.group.r||N(o.group.c)),o=null;else if(b>=o.start){const R=b-o.start;s=o.a+o.d*y(R/o.duration),g(s,1-s)}}return!!(o||l)}))}return{run(u){T(c)?yt().then(()=>{c=c(r),h(u)}):h(u)},end(){d(),o=l=null}}}function ve(t,e){t.d(1),e.delete(t.key)}function Ee(t,e){Ft(t,1,1,()=>{e.delete(t.key)})}function ke(t,e,n,i,r,c,s,o,l,a,d,f){let h=t.length,u=c.length,_=h;const p={};for(;_--;)p[t[_].key]=_;const y=[],g=new Map,v=new Map,w=[];for(_=u;_--;){const m=f(r,c,_),x=n(m);let $=s.get(x);$?i&&w.push(()=>$.p(m,e)):($=a(x,m),$.c()),g.set(x,y[_]=$),x in p&&v.set(x,Math.abs(_-p[x]))}const b=new Set,R=new Set;function G(m){gt(m,1),m.m(o,d),s.set(m.key,m),d=m.first,u--}for(;h&&u;){const m=y[u-1],x=t[h-1],$=m.key,z=x.key;m===x?(d=m.first,h--,u--):g.has(z)?!s.has($)||b.has($)?G(m):R.has(z)?h--:v.get($)>v.get(z)?(R.add($),G(m)):(b.add(z),h--):(l(x,s),h--)}for(;h--;){const m=t[h];g.has(m.key)||l(m,s)}for(;u;)G(y[u-1]);return N(w),y}const Ht=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Ht];function Ne(t){t&&t.c()}function Se(t,e){t&&t.l(e)}function Lt(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||P(()=>{const s=t.$$.on_mount.map(nt).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...s):N(s),t.$$.on_mount=[]}),c.forEach(P)}function Wt(t,e){const n=t.$$;n.fragment!==null&&(Bt(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Gt(t,e){t.$$.dirty[0]===-1&&(A.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ae(t,e,n,i,r,c,s,o=[-1]){const l=O;j(t);const a=t.$$={fragment:null,ctx:[],props:c,update:k,not_equal:r,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Y(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(f,h,...u)=>{const _=u.length?u[0]:h;return a.ctx&&r(a.ctx[f],a.ctx[f]=_)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](_),d&&Gt(t,f)),h}):[],a.update(),d=!0,N(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){vt();const f=jt(e.target);a.fragment&&a.fragment.l(f),f.forEach(at)}else a.fragment&&a.fragment.c();e.intro&&gt(t.$$.fragment),Lt(t,e.target,e.anchor,e.customElement),Et(),pt()}j(l)}class Ce{$destroy(){Wt(this,1),this.$destroy=k}$on(e,n){if(!T(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ve as $,Lt as A,Wt as B,Dt as C,ce as D,Jt as E,Mt as F,re as G,k as H,N as I,Kt as J,Yt as K,Qt as L,Vt as M,Xt as N,Ut as O,P,$e as Q,ee as R,Ce as S,ke as T,Ee as U,_e as V,et as W,Zt as X,fe as Y,se as Z,xe as _,ne as a,ye as a0,te as b,ae as c,Ft as d,ie as e,be as f,gt as g,at as h,Ae as i,pe as j,ut as k,le as l,jt as m,oe as n,me as o,de as p,V as q,Ot as r,It as s,ge as t,ue as u,we as v,Z as w,he as x,Ne as y,Se as z};
