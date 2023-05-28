import{S as J,i as K,s as Q,k as u,q as j,a as D,l as m,m as f,r as q,h as o,c as S,n as s,b as H,F as r,M as X,N as Y,G as C,E as Z,p as ee,y as N,O as te,z as F,A as G,g as O,d as R,B as T}from"../chunks/index.2f21f5f0.js";import{s as B}from"../chunks/data.3cecfea6.js";import{H as ae}from"../chunks/Header.f0d4690d.js";function U(E,l,e){const n=E.slice();return n[0]=l[e],n[2]=e,n}function W(E,l){let e,n,a,_,t,d,b,x,p,h,y,$=l[0].name+"",A,i,c,v=l[0].description+"",P,z;return{key:E,first:null,c(){e=u("li"),n=u("div"),a=u("img"),t=D(),d=u("h2"),b=u("div"),x=D(),p=u("a"),h=u("span"),y=u("span"),A=j($),i=D(),c=u("p"),P=j(v),z=D(),this.h()},l(k){e=m(k,"LI",{class:!0});var g=f(e);n=m(g,"DIV",{class:!0});var V=f(n);a=m(V,"IMG",{alt:!0,loading:!0,width:!0,height:!0,decoding:!0,"data-nimg":!0,class:!0,src:!0,style:!0}),V.forEach(o),t=S(g),d=m(g,"H2",{class:!0});var w=f(d);b=m(w,"DIV",{class:!0}),f(b).forEach(o),x=S(w),p=m(w,"A",{href:!0});var I=f(p);h=m(I,"SPAN",{class:!0}),f(h).forEach(o),y=m(I,"SPAN",{class:!0});var L=f(y);A=q(L,$),L.forEach(o),I.forEach(o),w.forEach(o),i=S(g),c=m(g,"P",{class:!0});var M=f(c);P=q(M,v),M.forEach(o),z=S(g),g.forEach(o),this.h()},h(){s(a,"alt",""),s(a,"loading","lazy"),s(a,"width","32"),s(a,"height","32"),s(a,"decoding","async"),s(a,"data-nimg","1"),s(a,"class","rounded-full object-fit w-auto h-auto bg-transparent dark:bg-zinc-800"),Z(a.src,_=l[0].logo)||s(a,"src",_),ee(a,"color","transparent"),s(n,"class","relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"),s(b,"class","absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"),s(h,"class","absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"),s(y,"class","relative z-10"),s(p,"href","http://planetaria.tech"),s(d,"class","mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100"),s(c,"class","relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"),s(e,"class","group relative flex flex-col items-start"),this.first=e},m(k,g){H(k,e,g),r(e,n),r(n,a),r(e,t),r(e,d),r(d,b),r(d,x),r(d,p),r(p,h),r(p,y),r(y,A),r(e,i),r(e,c),r(c,P),r(e,z)},p(k,g){l=k},d(k){k&&o(e)}}}function se(E){let l,e,n,a,_,t,d,b,x,p,h=[],y=new Map,$=B;const A=i=>i[0].id;for(let i=0;i<$.length;i+=1){let c=U(E,$,i),v=A(c);y.set(v,h[i]=W(v,c))}return{c(){l=u("div"),e=u("div"),n=u("div"),a=u("div"),_=u("header"),t=u("h1"),d=j("Tech Stack"),b=D(),x=u("div"),p=u("ul");for(let i=0;i<h.length;i+=1)h[i].c();this.h()},l(i){l=m(i,"DIV",{class:!0});var c=f(l);e=m(c,"DIV",{class:!0});var v=f(e);n=m(v,"DIV",{class:!0});var P=f(n);a=m(P,"DIV",{class:!0});var z=f(a);_=m(z,"HEADER",{class:!0});var k=f(_);t=m(k,"H1",{class:!0});var g=f(t);d=q(g,"Tech Stack"),g.forEach(o),k.forEach(o),b=S(z),x=m(z,"DIV",{class:!0});var V=f(x);p=m(V,"UL",{class:!0});var w=f(p);for(let I=0;I<h.length;I+=1)h[I].l(w);w.forEach(o),V.forEach(o),z.forEach(o),P.forEach(o),v.forEach(o),c.forEach(o),this.h()},h(){s(t,"class","text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl"),s(_,"class","max-w-2xl mt-12"),s(p,"class","grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"),s(x,"class","mt-8 sm:mt-8"),s(a,"class","mx-auto max-w-2xl lg:max-w-5xl py-4"),s(n,"class","relative px-4 sm:px-8 lg:px-12"),s(e,"class","mx-auto max-w-7xl lg:px-8"),s(l,"class","sm:px-8 mt-16 md:mt-16")},m(i,c){H(i,l,c),r(l,e),r(e,n),r(n,a),r(a,_),r(_,t),r(t,d),r(a,b),r(a,x),r(x,p);for(let v=0;v<h.length;v+=1)h[v]&&h[v].m(p,null)},p(i,[c]){c&0&&($=B,h=X(h,c,A,1,i,$,y,p,Y,W,null,U))},i:C,o:C,d(i){i&&o(l);for(let c=0;c<h.length;c+=1)h[c].d()}}}class le extends J{constructor(l){super(),K(this,l,null,se,Q,{})}}function re(E){let l,e,n,a,_;return e=new ae({props:{main_header:ne,main_description:ie}}),a=new le({}),{c(){l=D(),N(e.$$.fragment),n=D(),N(a.$$.fragment),this.h()},l(t){te("svelte-1pfym9",document.head).forEach(o),l=S(t),F(e.$$.fragment,t),n=S(t),F(a.$$.fragment,t),this.h()},h(){document.title="Portofolio"},m(t,d){H(t,l,d),G(e,t,d),H(t,n,d),G(a,t,d),_=!0},p:C,i(t){_||(O(e.$$.fragment,t),O(a.$$.fragment,t),_=!0)},o(t){R(e.$$.fragment,t),R(a.$$.fragment,t),_=!1},d(t){t&&o(l),T(e,t),t&&o(n),T(a,t)}}}let ne="A Full Stack Web Developer, Irfan Ramadhan.",ie="I am an Adaptable, Detail-Oriented, Collaborative, Problem-Solver, Continous Learner, Innovative Person. I live in Indonesia, currently a college student with a major in Informatics Engineering.";class he extends J{constructor(l){super(),K(this,l,null,re,Q,{})}}export{he as default};
