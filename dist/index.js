"use strict";var p=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var d=p(function(w,y){
function O(u,r,c,x){var l,e,s,i,a,v,t,n,S,o,f;for(l=r[2],e=r[1],s=r[0],f=[],v=0;v<s;v++){for(S=u[v],o=[],a=0;a<e;a++){for(t=S[a],n=[],i=0;i<l;i++)n.push(c.call(x,t[i],[v,a,i],u));o.push(n)}f.push(o)}return f}y.exports=O
});var q=p(function(z,m){
function R(u,r,c,x,l){var e,s,i,a,v,t,n,S,o,f;if(e=c[2],s=c[1],i=c[0],e<=0||s<=0||i<=0)return r;for(t=0;t<i;t++)for(o=u[t],f=r[t],v=0;v<s;v++)for(n=o[v],S=f[v],a=0;a<e;a++)S[a]=x.call(l,n[a],[t,v,a],u);return r}m.exports=R
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=d(),j=q();b(g,"assign",j);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
