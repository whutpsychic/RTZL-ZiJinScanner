import{d as v,f as w,x as t,y as T,F as l,Q as m,S as o,R as a,A as c,z as r,a as k,aF as g,C as y,a6 as C,au as N}from"./index-ce976914.js";import{b as F,h as M,u as V,e as $,y as h,E as b,_ as I,w as P}from"./el-tag-7aa21aa3.js";const A=F({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:M,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),K={close:n=>n instanceof MouseEvent,click:n=>n instanceof MouseEvent},Q=v({name:"ElTag"}),R=v({...Q,props:A,emits:K,setup(n,{emit:i}){const S=n,_=V(),s=$("tag"),u=w(()=>{const{type:e,hit:f,effect:E,closable:z,round:B}=S;return[s.b(),s.is("closable",z),s.m(e),s.m(_.value),s.m(E),s.is("hit",f),s.is("round",B)]}),p=e=>{i("close",e)},d=e=>{i("click",e)};return(e,f)=>e.disableTransitions?(t(),T("span",{key:0,class:o(a(u)),style:C({backgroundColor:e.color}),onClick:d},[l("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(t(),c(a(b),{key:0,class:o(a(s).e("close")),onClick:g(p,["stop"])},{default:r(()=>[k(a(h))]),_:1},8,["class","onClick"])):y("v-if",!0)],6)):(t(),c(N,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:""},{default:r(()=>[l("span",{class:o(a(u)),style:C({backgroundColor:e.color}),onClick:d},[l("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(t(),c(a(b),{key:0,class:o(a(s).e("close")),onClick:g(p,["stop"])},{default:r(()=>[k(a(h))]),_:1},8,["class","onClick"])):y("v-if",!0)],6)]),_:3},8,["name"]))}});var j=I(R,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const G=P(j);export{G as E,A as t};