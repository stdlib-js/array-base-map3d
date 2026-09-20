"use strict";var p=function(u,r){return function(){try{return r||u((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var d=p(function(w,y){
function O(u,r,e,x){var l,s,n,i,a,v,t,o,S,f,c;for(l=r[2],s=r[1],n=r[0],c=[],v=0;v<n;v++){for(S=u[v],f=[],a=0;a<s;a++){for(t=S[a],o=[],i=0;i<l;i++)o.push(e.call(x,t[i],[v,a,i],u));f.push(o)}c.push(f)}return c}y.exports=O
});var q=p(function(z,m){
function R(u,r,e,x,l){var s,n,i,a,v,t,o,S,f,c;if(s=e[2],n=e[1],i=e[0],s<=0||n<=0||i<=0)return r;for(t=0;t<i;t++)for(f=u[t],c=r[t],v=0;v<n;v++)for(o=f[v],S=c[v],a=0;a<s;a++)S[a]=x.call(l,o[a],[t,v,a],u);return r}m.exports=R
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=d(),j=q();b(g,"assign",j);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
