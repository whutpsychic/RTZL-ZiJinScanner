import{_ as u,g as m,u as f,h as k,o as C,c as h,a as e,b as r,w as t,N as v,B as y,d as c}from"./index-ed9c978e.js";import{E as w,a as R}from"./el-table-column-c2a84828.js";const x={setup(){const p=m(),i=f(),_=()=>history.back(),o=()=>{};let s="";const b=(n,l,g)=>{s=n.id},d=()=>{s?(alert(s),i.push({name:"chukudanDetails",query:{id:s}})):alert("请选择正确的行")},a=[{id:"1",name:"asds",address:"222"},{id:"2",name:"asd",address:"333"},{id:"3",name:"asdf",address:"444"},{id:"4",name:"dsdf",address:"5"}];return k(()=>{p.query}),{onClickLeft:_,selectRow:b,tableData:a,showDetail:d,onRefresh:o}}},B={class:"table-content"},D={style:{margin:"16px"}},L={class:"btn-area"};function N(p,i,_,o,s,b){const d=v,a=R,n=w,l=y;return C(),h("main",null,[e(d,{title:"查看出库单",class:"page-nav-bar","left-arrow":"",onClickLeft:o.onClickLeft},null,8,["onClickLeft"]),r("div",B,[e(n,{data:o.tableData,border:"",id:"data-area",onRowClick:o.selectRow},{default:t(()=>[e(a,{prop:"id",label:"发货单号"}),e(a,{prop:"name",label:"收货单号"}),e(a,{prop:"address",label:"计划重量"}),e(a,{prop:"address",label:"已发数量"}),e(a,{prop:"address",label:"发货单日期"}),e(a,{prop:"address",label:"计划日期"}),e(a,{prop:"address",label:"订单号"}),e(a,{prop:"address",label:"序号"}),e(a,{prop:"address",label:"产品编码"}),e(a,{prop:"address",label:"产品名称"}),e(a,{prop:"address",label:"批次号"}),e(a,{prop:"address",label:"计量单位"}),e(a,{prop:"address",label:"库房名称"}),e(a,{prop:"address",label:"运输区分"}),e(a,{prop:"address",label:"车号"}),e(a,{prop:"address",label:"计划类型"})]),_:1},8,["data","onRowClick"]),r("div",D,[r("div",L,[e(l,{round:"",block:"",type:"primary",onClick:o.onClickLeft},{default:t(()=>[c(" 返回 ")]),_:1},8,["onClick"]),e(l,{round:"",block:"",type:"primary",onClick:o.onRefresh},{default:t(()=>[c(" 刷新 ")]),_:1},8,["onClick"]),e(l,{round:"",block:"",type:"primary",onClick:o.showDetail},{default:t(()=>[c(" 查询 ")]),_:1},8,["onClick"])])])])])}const V=u(x,[["render",N],["__scopeId","data-v-d0346e05"]]);export{V as default};
