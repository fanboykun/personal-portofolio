import{S as W,i as X,s as j,k as m,q as S,a as y,l as u,m as v,r as A,h,c as D,n as f,b as H,F as _,u as C,H as M,Q as B,R as G,W as J,X as K}from"./index.766cfa15.js";import{a as P}from"./data.62d7cfe3.js";function Q(o,a,t){const i=o.slice();return i[3]=a[t],i[5]=t,i}function R(o){let a,t=[],i=new Map,n=P;const s=e=>e[3].id;for(let e=0;e<n.length;e+=1){let l=Q(o,n,e),c=s(l);i.set(c,t[e]=T(c,l))}return{c(){a=m("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){a=u(e,"DIV",{class:!0});var l=v(a);for(let c=0;c<t.length;c+=1)t[c].l(l);l.forEach(h),this.h()},h(){f(a,"class","mt-6 flex gap-6")},m(e,l){H(e,a,l);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(a,null)},p(e,l){l&0&&(n=P,t=B(t,l,s,1,e,n,i,a,G,T,null,Q))},d(e){e&&h(a);for(let l=0;l<t.length;l+=1)t[l].d()}}}function T(o,a){let t,i,n=a[3].icon+"",s;return{key:o,first:null,c(){t=m("a"),i=new J(!1),s=y(),this.h()},l(e){t=u(e,"A",{class:!0,"aria-label":!0,href:!0});var l=v(t);i=K(l,!1),s=D(l),l.forEach(h),this.h()},h(){i.a=s,f(t,"class","group -m-1 p-1"),f(t,"aria-label","Follow"),f(t,"href",a[3].link),this.first=t},m(e,l){H(e,t,l),i.m(n,t),_(t,s)},p(e,l){a=e},d(e){e&&h(t)}}}function L(o){let a,t,i,n,s,e,l=(o[1]!=null?o[1]:"title")+"",c,E,x,k=(o[2]!=null?o[2]:"description")+"",b,w,r=o[0]&&R(o);return{c(){a=m("div"),t=m("div"),i=m("div"),n=m("div"),s=m("div"),e=m("h1"),c=S(l),E=y(),x=m("p"),b=S(k),w=y(),r&&r.c(),this.h()},l(d){a=u(d,"DIV",{class:!0});var p=v(a);t=u(p,"DIV",{class:!0});var I=v(t);i=u(I,"DIV",{class:!0});var V=v(i);n=u(V,"DIV",{class:!0});var z=v(n);s=u(z,"DIV",{class:!0});var g=v(s);e=u(g,"H1",{class:!0});var q=v(e);c=A(q,l),q.forEach(h),E=D(g),x=u(g,"P",{class:!0});var F=v(x);b=A(F,k),F.forEach(h),w=D(g),r&&r.l(g),g.forEach(h),z.forEach(h),V.forEach(h),I.forEach(h),p.forEach(h),this.h()},h(){f(e,"class","text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"),f(x,"class","mt-6 text-base text-zinc-600 dark:text-zinc-400"),f(s,"class","max-w-2xl"),f(n,"class","mx-auto max-w-2xl lg:max-w-5xl"),f(i,"class","relative px-4 sm:px-8 lg:px-12"),f(t,"class","mx-auto max-w-7xl lg:px-8"),f(a,"class","sm:px-8 mt-16 sm:mt-18")},m(d,p){H(d,a,p),_(a,t),_(t,i),_(i,n),_(n,s),_(s,e),_(e,c),_(s,E),_(s,x),_(x,b),_(s,w),r&&r.m(s,null)},p(d,[p]){p&2&&l!==(l=(d[1]!=null?d[1]:"title")+"")&&C(c,l),p&4&&k!==(k=(d[2]!=null?d[2]:"description")+"")&&C(b,k),d[0]?r?r.p(d,p):(r=R(d),r.c(),r.m(s,null)):r&&(r.d(1),r=null)},i:M,o:M,d(d){d&&h(a),r&&r.d()}}}function N(o,a,t){let{place_socials:i=!0}=a,{main_header:n}=a,{main_description:s}=a;return o.$$set=e=>{"place_socials"in e&&t(0,i=e.place_socials),"main_header"in e&&t(1,n=e.main_header),"main_description"in e&&t(2,s=e.main_description)},[i,n,s]}class Y extends W{constructor(a){super(),X(this,a,N,L,j,{place_socials:0,main_header:1,main_description:2})}}export{Y as H};