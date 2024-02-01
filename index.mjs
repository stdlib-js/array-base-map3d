// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function n(r,n,e,s){var o,t,f,a,i,u,l,p,d,c,h;for(o=n[2],t=n[1],f=n[0],h=[],u=0;u<f;u++){for(d=r[u],c=[],i=0;i<t;i++){for(l=d[i],p=[],a=0;a<o;a++)p.push(e.call(s,l[a],[u,i,a],r));c.push(p)}h.push(c)}return h}function e(r,n,e,s,o){var t,f,a,i,u,l,p,d,c,h;if(t=e[2],f=e[1],a=e[0],t<=0||f<=0||a<=0)return n;for(l=0;l<a;l++)for(c=r[l],h=n[l],u=0;u<f;u++)for(p=c[u],d=h[u],i=0;i<t;i++)d[i]=s.call(o,p[i],[l,u,i],r);return n}r(n,"assign",e);export{e as assign,n as default};
//# sourceMappingURL=index.mjs.map
