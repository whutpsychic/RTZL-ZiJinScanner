System.register(["./index-legacy-f48602d5.js","./index-legacy-eda59a38.js","./gradeDetermination-legacy-e6160176.js","./function-call-legacy-a841d5d6.js"],(function(e,t){"use strict";var n,a,i,r,o,d,l,c,v,g,s,u,m,p,h,f,_,b,x,y,k,w;return{setters:[e=>{n=e._,a=e.u,i=e.a,r=e.t,o=e.r,d=e.f,l=e.s,c=e.o,v=e.b,g=e.c,s=e.d,u=e.w,m=e.G,p=e.e,h=e.g,f=e.N,_=e.h,b=e.p,x=e.i,y=e.j},null,e=>{k=e.j},e=>{w=e.s}],execute:function(){var z=document.createElement("style");z.textContent=".van-grid{display:flex;flex-wrap:wrap}:root{--van-grid-item-content-padding: var(--van-padding-md) var(--van-padding-xs);--van-grid-item-content-background: var(--van-background-2);--van-grid-item-content-active-color: var(--van-active-color);--van-grid-item-icon-size: 28px;--van-grid-item-text-color: var(--van-text-color);--van-grid-item-text-font-size: var(--van-font-size-sm)}.van-grid-item{position:relative;box-sizing:border-box}.van-grid-item--square{height:0}.van-grid-item__icon{font-size:var(--van-grid-item-icon-size)}.van-grid-item__text{color:var(--van-grid-item-text-color);font-size:var(--van-grid-item-text-font-size);line-height:1.5;word-break:break-all}.van-grid-item__icon+.van-grid-item__text{margin-top:var(--van-padding-xs)}.van-grid-item__content{display:flex;flex-direction:column;box-sizing:border-box;height:100%;padding:var(--van-grid-item-content-padding);background:var(--van-grid-item-content-background)}.van-grid-item__content:after{z-index:1;border-width:0 var(--van-border-width) var(--van-border-width) 0}.van-grid-item__content--square{position:absolute;top:0;right:0;left:0}.van-grid-item__content--center{align-items:center;justify-content:center}.van-grid-item__content--horizontal{flex-direction:row}.van-grid-item__content--horizontal .van-grid-item__text{margin:0 0 0 var(--van-padding-xs)}.van-grid-item__content--reverse{flex-direction:column-reverse}.van-grid-item__content--reverse .van-grid-item__text{margin:0 0 var(--van-padding-xs)}.van-grid-item__content--horizontal.van-grid-item__content--reverse{flex-direction:row-reverse}.van-grid-item__content--horizontal.van-grid-item__content--reverse .van-grid-item__text{margin:0 var(--van-padding-xs) 0 0}.van-grid-item__content--surround:after{border-width:var(--van-border-width)}.van-grid-item__content--clickable{cursor:pointer}.van-grid-item__content--clickable:active{background-color:var(--van-grid-item-content-active-color)}.btns[data-v-6fce5f41]{height:calc(100vh - var(--van-nav-bar-height));display:flex;flex-direction:column;align-items:center}.van-button[data-v-6fce5f41]{width:80%;height:20%;border-radius:25px;font-size:30px;cursor:pointer}.van-button[data-v-6fce5f41]:nth-child(1){margin-top:8%;background-color:var(--btn-color1)}.van-button[data-v-6fce5f41]:nth-child(2){margin-top:8%;background-color:var(--btn-color2)}.van-button[data-v-6fce5f41]:nth-child(3){margin-top:8%}\n",document.head.appendChild(z);const R=""+new URL("../image/pjpd.png",t.meta.url).href,C=""+new URL("../image/baobiao.png",t.meta.url).href,j=""+new URL("../image/shenhe.png",t.meta.url).href,L={setup(){const e=a(),t=i(),n=r(t.state.user),v=o(!1),g=o(!1),s=o(!1),u=o(!1);function m(){let e=n.groupNames.split(",");for(let t=0;t<e.length;t++){if("admingroup"==e[t]){v.value=!0,g.value=!0,u.value=!0,s.value=!0;break}if("yjtzj_admin"==e[t]){v.value=!0,g.value=!0,u.value=!0,s.value=!0;break}if("yjtzj_user"==e[t]){v.value=!0,g.value=!0,s.value=!0;break}}}return d.await("scanner",(t=>{if(s.value)if("null"!=t){let n={};n.fBarcode=t,k(n).then((n=>{n.data.code&&(200!=n.data.code?w({title:"提示",width:"600",message:n.data.message}).then((()=>{})):e.push({path:"/gradeDetermination",query:{barcode:t,tabState:n.data.data}}))})).catch((e=>{console.log(e)}))}else l({message:"数据获取失败",type:"fail",className:"particulars-detail-popup"})})),history.pushState(null,null,document.URL),window.addEventListener("popstate",(function(e){history.pushState(null,null,document.URL)}),!1),c((()=>{m()})),{scannerShow:s,qualityCheckingRecordRole:v,reportFormStatisticsRole:g,auditingListRole:u,userData:n,scanCode:()=>{e.push({path:"/qualityCheckingRecord"})},auditingClick:()=>{e.push({path:"/auditingList"})},roleJudgement:m}}},S=e=>(b("data-v-6fce5f41"),e=e(),x(),e),q=S((()=>y("img",{src:R,style:{width:"50%"}},null,-1))),U=S((()=>y("span",{style:{"margin-top":"10px"}},"品级质检",-1))),D=S((()=>y("img",{src:C,style:{width:"50%"}},null,-1))),F=S((()=>y("span",{style:{"margin-top":"10px"}},"报表查询",-1))),N=S((()=>y("img",{src:j,style:{width:"50%"}},null,-1))),E=S((()=>y("span",{style:{"margin-top":"10px"}},"品级质检审核",-1)));e("default",n(L,[["render",function(e,t,n,a,i,r){const o=f,d=_,l=m;return v(),g("main",null,[s(o,{title:"主菜单",style:{background:"#1989fa"}}),s(l,{gutter:10,"column-num":2,style:{"margin-top":"20px","font-size":"18px","font-weight":"bold"}},{default:u((()=>[a.qualityCheckingRecordRole?(v(),p(d,{key:0,onClick:a.scanCode},{default:u((()=>[q,U])),_:1},8,["onClick"])):h("",!0),a.reportFormStatisticsRole?(v(),p(d,{key:1,to:"/reportFormStatistics"},{default:u((()=>[D,F])),_:1})):h("",!0),a.auditingListRole?(v(),p(d,{key:2,onClick:a.auditingClick},{default:u((()=>[N,E])),_:1},8,["onClick"])):h("",!0)])),_:1})])}],["__scopeId","data-v-6fce5f41"]]))}}}));
