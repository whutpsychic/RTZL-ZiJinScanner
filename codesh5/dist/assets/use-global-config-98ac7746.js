import{e as g,M as x,r as C,K as I,ap as _,aq as z,ar as y,as as b,at as K}from"./el-tag-56496b10.js";import{k as f}from"./objects-8d85df12.js";import{p as S,L as d,O as N,f as a,R as c,V as k}from"./index-7ad4752d.js";const p=Symbol(),i=S();function m(t,l=void 0){const n=d()?N(p,i):i;return t?a(()=>{var s,o;return(o=(s=n.value)==null?void 0:s[t])!=null?o:l}):n}function L(t,l){const n=m(),s=g(t,a(()=>{var e;return((e=n.value)==null?void 0:e.namespace)||x})),o=C(a(()=>{var e;return(e=n.value)==null?void 0:e.locale})),r=I(a(()=>{var e;return((e=n.value)==null?void 0:e.zIndex)||_})),u=a(()=>{var e;return c(l)||((e=n.value)==null?void 0:e.size)||""});return E(a(()=>c(n)||{})),{ns:s,locale:o,zIndex:r,size:u}}const E=(t,l,n=!1)=>{var s;const o=!!d(),r=o?m():void 0,u=(s=l==null?void 0:l.provide)!=null?s:o?k:void 0;if(!u)return;const e=a(()=>{const v=c(t);return r!=null&&r.value?G(r.value,v):v});return u(p,e),u(z,a(()=>e.value.locale)),u(y,a(()=>e.value.namespace)),u(b,a(()=>e.value.zIndex)),u(K,{size:a(()=>e.value.size||"")}),(n||!i.value)&&(i.value=e.value),e},G=(t,l)=>{var n;const s=[...new Set([...f(t),...f(l)])],o={};for(const r of s)o[r]=(n=l[r])!=null?n:t[r];return o};export{L as a,m as u};
