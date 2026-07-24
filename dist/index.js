"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var s=v(function(C,f){
var l=require('@stdlib/strided-base-reinterpret-complex128/dist'),c=require('@stdlib/math-base-assert-is-nan/dist');function R(e,r,a,m){var n,t,i,q,u;if(e<=0)return 0;for(t=l(r,0),i=m*2,q=a*2,n=0,u=0;u<e;u++)!c(t[i])&&!c(t[i+1])&&(n+=1),i+=q;return n}f.exports=R
});var x=v(function(D,p){
var _=require('@stdlib/strided-base-stride2offset/dist'),w=s();function E(e,r,a){return w(e,r,a,_(e,a))}p.exports=E
});var z=v(function(F,y){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=x(),b=s();O(d,"ndarray",b);y.exports=d
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),A=z(),o,j=h(g(__dirname,"./native.js"));k(j)?o=A:o=j;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
