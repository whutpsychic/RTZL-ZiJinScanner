import{_ as R,u as k,a as b,t as C,r as d,f as y,s as x,o as S,b as p,c as j,d as w,w as m,G as L,e as g,g as h,N,h as B,p as U,i as D,j as s}from"./index-1104ee59.js";/* empty css              */import{j as I}from"./gradeDetermination-c6c56c5b.js";import{s as q}from"./function-call-19bfcff4.js";const z=""+new URL("../image/pjpd.png",import.meta.url).href,F=""+new URL("../image/baobiao.png",import.meta.url).href,G=""+new URL("../image/shenhe.png",import.meta.url).href,V=""+new URL("../image/zjjl.png",import.meta.url).href;const E={setup(){const i=k(),v=b(),f=C(v.state.user),e=d(!1),c=d(!1),u=d(!1),r=d(!1),a=d(!1);y.await("scanner",t=>{if(r.value)if(t!="null"){let o={};o.fBarcode=t,I(o).then(l=>{l.data.code&&(l.data.code!=200?q({title:"提示",width:"600",message:l.data.message}).then(()=>{}):i.push({path:"/gradeDetermination",query:{barcode:t,tabState:l.data.data}}))}).catch(l=>{console.log(l)})}else x({message:"数据获取失败",type:"fail",className:"particulars-detail-popup"})}),history.pushState(null,null,document.URL),window.addEventListener("popstate",function(t){history.pushState(null,null,document.URL)},!1),S(()=>{_()});function _(){let t=f.groupNames.split(",");for(let o=0;o<t.length;o++){if(t[o]=="admingroup"){e.value=!0,c.value=!0,u.value=!0,a.value=!0,r.value=!0;break}if(t[o]=="yjtzj_admin"){e.value=!0,c.value=!0,u.value=!0,a.value=!0,r.value=!0;break}if(t[o]=="yjtzj_user"){e.value=!0,c.value=!0,u.value=!0,r.value=!0;break}}}return{gradeDeterminationRole:e,scannerShow:r,qualityCheckingRecordRole:c,reportFormStatisticsRole:u,auditingListRole:a,userData:f,scanCode:()=>{y.scan()},roleJudgement:_}}},n=i=>(U("data-v-b70a2500"),i=i(),D(),i),J=n(()=>s("img",{src:z,style:{width:"50%"}},null,-1)),M=n(()=>s("span",{style:{"margin-top":"10px"}},"品级质检",-1)),T=n(()=>s("img",{src:F,style:{width:"50%"}},null,-1)),A=n(()=>s("span",{style:{"margin-top":"10px"}},"报表查询",-1)),H=n(()=>s("img",{src:G,style:{width:"50%"}},null,-1)),K=n(()=>s("span",{style:{"margin-top":"10px"}},"品级质检审核",-1)),O=n(()=>s("img",{src:V,style:{width:"50%"}},null,-1)),P=n(()=>s("span",{style:{"margin-top":"10px"}},"质检记录",-1));function Q(i,v,f,e,c,u){const r=N,a=B,_=L;return p(),j("main",null,[w(r,{title:"主菜单",style:{background:"#1989fa"}}),w(_,{gutter:10,"column-num":2,style:{"margin-top":"20px","font-size":"18px","font-weight":"bold"}},{default:m(()=>[e.gradeDeterminationRole?(p(),g(a,{key:0,onClick:e.scanCode},{default:m(()=>[J,M]),_:1},8,["onClick"])):h("",!0),e.reportFormStatisticsRole?(p(),g(a,{key:1,to:"/reportFormStatistics"},{default:m(()=>[T,A]),_:1})):h("",!0),e.auditingListRole?(p(),g(a,{key:2,to:"/auditingList"},{default:m(()=>[H,K]),_:1})):h("",!0),e.qualityCheckingRecordRole?(p(),g(a,{key:3,to:"/qualityCheckingRecord"},{default:m(()=>[O,P]),_:1})):h("",!0)]),_:1})])}const ee=R(E,[["render",Q],["__scopeId","data-v-b70a2500"]]);export{ee as default};
