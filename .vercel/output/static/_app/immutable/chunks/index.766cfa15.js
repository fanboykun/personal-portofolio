function v(){}function ct(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function W(){return Object.create(null)}function E(t){t.forEach(U)}function O(t){return typeof t=="function"}function Nt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let M;function At(t,e){return M||(M=document.createElement("a")),M.href=e,t===M.href}function ot(t){return Object.keys(t).length===0}function ut(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Mt(t,e,n){t.$$.on_destroy.push(ut(e,n))}function St(t,e,n,i){if(t){const s=V(t,e,n,i);return t[0](s)}}function V(t,e,n,i){return t[1]&&i?ct(n.ctx.slice(),t[1](i(e))):n.ctx}function kt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let u=0;u<r;u+=1)o[u]=e.dirty[u]|s[u];return o}return e.dirty|s}return e.dirty}function Ht(t,e,n,i,s,o){if(s){const r=V(e,n,i,o);t.p(r,s)}}function Lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function jt(t){return t&&O(t.destroy)?t.destroy:v}let H=!1;function at(){H=!0}function ft(){H=!1}function dt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function _t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(s>0&&e[n[s]].claim_order<=c?s+1:dt(1,s,d=>e[n[d]].claim_order,c))-1;i[l]=n[f]+1;const _=f+1;n[_]=l,s=Math.max(_,s)}const o=[],r=[];let u=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);u>=l;u--)r.push(e[u]);u--}for(;u>=0;u--)r.push(e[u]);o.reverse(),r.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<r.length;l++){for(;c<o.length&&r[l].claim_order>=o[c].claim_order;)c++;const f=c<o.length?o[c]:null;t.insertBefore(r[l],f)}}function ht(t,e){if(H){for(_t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function mt(t,e,n){t.insertBefore(e,n||null)}function pt(t,e,n){H&&!n?ht(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function Ct(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Dt(){return G(" ")}function Pt(){return G("")}function qt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Bt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function yt(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,s=!1){Z(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const u=t[r];if(e(u)){const l=n(u);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),u}}for(let r=t.claim_info.last_index-1;r>=0;r--){const u=t[r];if(e(u)){const l=n(u);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function et(t,e,n,i){return tt(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const u=s.attributes[r];n[u.name]||o.push(u.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Gt(t,e,n){return et(t,e,n,X)}function Rt(t,e,n){return et(t,e,n,Y)}function gt(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function zt(t){return gt(t," ")}function I(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Ft(t,e){const n=I(t,"HTML_TAG_START",0),i=I(t,"HTML_TAG_END",n);if(n===i)return new J(void 0,e);Z(t);const s=t.splice(n,i-n+1);k(s[0]),k(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new J(o,e)}function Wt(t,e){e=""+e,t.data!==e&&(t.data=e)}function It(t,e){t.value=e??""}function Jt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Kt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class xt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Y(n.nodeName):this.e=X(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)mt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(k)}}class J extends xt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)pt(this.t,this.n[n],e)}}function Qt(t,e){return new t(e)}let T;function $(t){T=t}function nt(){if(!T)throw new Error("Function called outside component initialization");return T}function Ut(t){nt().$$.on_mount.push(t)}function Vt(t){nt().$$.after_update.push(t)}const w=[],K=[];let b=[];const Q=[],it=Promise.resolve();let q=!1;function st(){q||(q=!0,it.then(rt))}function Xt(){return st(),it}function B(t){b.push(t)}const P=new Set;let x=0;function rt(){if(x!==0)return;const t=T;do{try{for(;x<w.length;){const e=w[x];x++,$(e),wt(e.$$)}}catch(e){throw w.length=0,x=0,e}for($(null),w.length=0,x=0;K.length;)K.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];P.has(n)||(P.add(n),n())}b.length=0}while(w.length);for(;Q.length;)Q.pop()();q=!1,P.clear(),$(t)}function wt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}function bt(t){const e=[],n=[];b.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),b=e}const S=new Set;let g;function Yt(){g={r:0,c:[],p:g}}function Zt(){g.r||E(g.c),g=g.p}function lt(t,e){t&&t.i&&(S.delete(t),t.i(e))}function te(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),g.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function ee(t,e){t.d(1),e.delete(t.key)}function ne(t,e,n,i,s,o,r,u,l,c,f,_){let d=t.length,m=o.length,h=d;const L={};for(;h--;)L[t[h].key]=h;const N=[],j=new Map,C=new Map,R=[];for(h=m;h--;){const a=_(s,o,h),p=n(a);let y=r.get(p);y?i&&R.push(()=>y.p(a,e)):(y=c(p,a),y.c()),j.set(p,N[h]=y),p in L&&C.set(p,Math.abs(h-L[p]))}const z=new Set,F=new Set;function D(a){lt(a,1),a.m(u,f),r.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=N[m-1],p=t[d-1],y=a.key,A=p.key;a===p?(f=a.first,d--,m--):j.has(A)?!r.has(y)||z.has(y)?D(a):F.has(A)?d--:C.get(y)>C.get(A)?(F.add(y),D(a)):(z.add(A),d--):(l(p,r),d--)}for(;d--;){const a=t[d];j.has(a.key)||l(a,r)}for(;m;)D(N[m-1]);return E(R),N}const Et=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Et];function ie(t){t&&t.c()}function se(t,e){t&&t.l(e)}function $t(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||B(()=>{const r=t.$$.on_mount.map(U).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...r):E(r),t.$$.on_mount=[]}),o.forEach(B)}function vt(t,e){const n=t.$$;n.fragment!==null&&(bt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&(w.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function re(t,e,n,i,s,o,r,u=[-1]){const l=T;$(t);const c=t.$$={fragment:null,ctx:[],props:o,update:v,not_equal:s,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:W(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};r&&r(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return c.ctx&&s(c.ctx[_],c.ctx[_]=h)&&(!c.skip_bound&&c.bound[_]&&c.bound[_](h),f&&Tt(t,_)),d}):[],c.update(),f=!0,E(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){at();const _=yt(e.target);c.fragment&&c.fragment.l(_),_.forEach(k)}else c.fragment&&c.fragment.c();e.intro&&lt(t.$$.fragment),$t(t,e.target,e.anchor,e.customElement),ft(),rt()}$(l)}class le{$destroy(){vt(this,1),this.$destroy=v}$on(e,n){if(!O(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{$t as A,vt as B,Y as C,Rt as D,At as E,ht as F,qt as G,v as H,E as I,Mt as J,jt as K,St as L,Ht as M,Lt as N,kt as O,Ct as P,ne as Q,ee as R,le as S,Kt as T,It as U,Bt as V,J as W,Ft as X,Dt as a,pt as b,zt as c,te as d,Pt as e,Zt as f,lt as g,k as h,re as i,Vt as j,X as k,Gt as l,yt as m,Ot as n,Ut as o,Jt as p,G as q,gt as r,Nt as s,Xt as t,Wt as u,Yt as v,K as w,Qt as x,ie as y,se as z};