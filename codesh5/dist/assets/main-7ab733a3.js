import{E as b,a as f}from"./el-table-column-acc952fe.js";import{_ as u,a as h,r as c,o as y,c as g,b as o,d as a,w as _,N as v,p as k,f as w}from"./index-2e96a112.js";import{_ as C}from"./btn_queren-a649dfc1.js";import{_ as q}from"./btn_shoudong-49ae805b.js";import{_ as L}from"./btn_tichu-bca5bbb8.js";const j={setup(){const e=h();let n=c([{riqi:1,baohao:2,yiweima:3,zhongliang:4},{riqi:1,baohao:2,yiweima:3,zhongliang:4},{riqi:1,baohao:2,yiweima:3,zhongliang:4}]),s=c([{yingjian:1,yijian:2,queshao:3},{yingjian:"",yijian:2,queshao:""}]);return{onClickLeft:()=>history.back(),tableData1:n,tableData2:s,onHandle:()=>{e.push({name:"manualUnqualifiedBarcodes"})}}}},r=e=>(k("data-v-1efddced"),e=e(),w(),e),D={class:"container"},B={class:"btn-area"},z=r(()=>a("div",null,"确认",-1)),E=r(()=>a("div",null,"手动",-1)),H=r(()=>a("div",null,"剔除",-1));function I(e,n,s,i,p,N){const m=v,l=f,d=b;return y(),g("main",null,[o(m,{title:"拣配",class:"page-nav-bar","left-arrow":"",onClickLeft:i.onClickLeft},null,8,["onClickLeft"]),a("div",D,[o(d,{data:i.tableData1,border:"",id:"data-area1",onRowClick:e.selectRow},{default:_(()=>[o(l,{prop:"riqi",label:"日期"}),o(l,{prop:"baohao",label:"包号"}),o(l,{prop:"yiweima",label:"一维码",width:"110px"}),o(l,{prop:"zhongliang",label:"重量"})]),_:1},8,["data","onRowClick"]),o(d,{data:i.tableData2,border:"",id:"data-area2"},{default:_(()=>[o(l,{prop:"yingjian",label:"应拣"}),o(l,{prop:"yijian",label:"已拣"}),o(l,{prop:"queshao",label:"缺少"})]),_:1},8,["data"]),a("div",B,[a("div",null,[a("img",{src:C,alt:"",onClick:n[0]||(n[0]=(...t)=>i.onClickLeft&&i.onClickLeft(...t))}),z]),a("div",null,[a("img",{src:q,alt:"",type:"primary",onClick:n[1]||(n[1]=(...t)=>i.onHandle&&i.onHandle(...t))}),E]),a("div",null,[a("img",{src:L,alt:"",type:"primary",onClick:n[2]||(n[2]=(...t)=>e.showDetail&&e.showDetail(...t))}),H])])])])}const U=u(j,[["render",I],["__scopeId","data-v-1efddced"]]);export{U as default};
