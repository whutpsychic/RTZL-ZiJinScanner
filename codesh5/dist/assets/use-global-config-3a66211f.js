import{e as p,x,o as C,s as I,Z as _,$ as z,a0 as y,a1 as b,a2 as K}from"./el-tag-acf0ed7e.js";import{k as f}from"./objects-1d7d6bfe.js";import{r as S,g1 as d,l as k,k as o,s as c,z as N}from"./index-703aaad1.js";const m=Symbol(),i=S();function g(t,l=void 0){const n=d()?k(m,i):i;return t?o(()=>{var s,a;return(a=(s=n.value)==null?void 0:s[t])!=null?a:l}):n}function w(t,l){const n=g(),s=p(t,o(()=>{var e;return((e=n.value)==null?void 0:e.namespace)||x})),a=C(o(()=>{var e;return(e=n.value)==null?void 0:e.locale})),r=I(o(()=>{var e;return((e=n.value)==null?void 0:e.zIndex)||_})),u=o(()=>{var e;return c(l)||((e=n.value)==null?void 0:e.size)||""});return Z(o(()=>c(n)||{})),{ns:s,locale:a,zIndex:r,size:u}}const Z=(t,l,n=!1)=>{var s;const a=!!d(),r=a?g():void 0,u=(s=l==null?void 0:l.provide)!=null?s:a?N:void 0;if(!u)return;const e=o(()=>{const v=c(t);return r!=null&&r.value?E(r.value,v):v});return u(m,e),u(z,o(()=>e.value.locale)),u(y,o(()=>e.value.namespace)),u(b,o(()=>e.value.zIndex)),u(K,{size:o(()=>e.value.size||"")}),(n||!i.value)&&(i.value=e.value),e},E=(t,l)=>{var n;const s=[...new Set([...f(t),...f(l)])],a={};for(const r of s)a[r]=(n=l[r])!=null?n:t[r];return a};export{w as a,g as u};
