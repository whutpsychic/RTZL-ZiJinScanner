System.register(["./index-legacy-d432f125.js","./index-legacy-eda59a38.js","./user-legacy-bbfc6b7f.js","./function-call-legacy-f9562467.js"],(function(e,t){"use strict";var n,i,a,r,o,d,l,c,g,s,v,u,m,p,h,_,f,x,b,y,k,R,w;return{setters:[e=>{n=e._,i=e.u,a=e.a,r=e.t,o=e.r,d=e.o,l=e.f,c=e.b,g=e.c,s=e.d,v=e.e,u=e.w,m=e.F,p=e.G,h=e.g,_=e.h,f=e.N,x=e.i,b=e.p,y=e.j,k=e.k},null,e=>{R=e.l},e=>{w=e.s}],execute:function(){var z=document.createElement("style");z.textContent=".van-grid{display:flex;flex-wrap:wrap}:root{--van-grid-item-content-padding: var(--van-padding-md) var(--van-padding-xs);--van-grid-item-content-background: var(--van-background-2);--van-grid-item-content-active-color: var(--van-active-color);--van-grid-item-icon-size: 28px;--van-grid-item-text-color: var(--van-text-color);--van-grid-item-text-font-size: var(--van-font-size-sm)}.van-grid-item{position:relative;box-sizing:border-box}.van-grid-item--square{height:0}.van-grid-item__icon{font-size:var(--van-grid-item-icon-size)}.van-grid-item__text{color:var(--van-grid-item-text-color);font-size:var(--van-grid-item-text-font-size);line-height:1.5;word-break:break-all}.van-grid-item__icon+.van-grid-item__text{margin-top:var(--van-padding-xs)}.van-grid-item__content{display:flex;flex-direction:column;box-sizing:border-box;height:100%;padding:var(--van-grid-item-content-padding);background:var(--van-grid-item-content-background)}.van-grid-item__content:after{z-index:1;border-width:0 var(--van-border-width) var(--van-border-width) 0}.van-grid-item__content--square{position:absolute;top:0;right:0;left:0}.van-grid-item__content--center{align-items:center;justify-content:center}.van-grid-item__content--horizontal{flex-direction:row}.van-grid-item__content--horizontal .van-grid-item__text{margin:0 0 0 var(--van-padding-xs)}.van-grid-item__content--reverse{flex-direction:column-reverse}.van-grid-item__content--reverse .van-grid-item__text{margin:0 0 var(--van-padding-xs)}.van-grid-item__content--horizontal.van-grid-item__content--reverse{flex-direction:row-reverse}.van-grid-item__content--horizontal.van-grid-item__content--reverse .van-grid-item__text{margin:0 var(--van-padding-xs) 0 0}.van-grid-item__content--surround:after{border-width:var(--van-border-width)}.van-grid-item__content--clickable{cursor:pointer}.van-grid-item__content--clickable:active{background-color:var(--van-grid-item-content-active-color)}.btns[data-v-c140645d]{height:calc(100vh - var(--van-nav-bar-height));display:flex;flex-direction:column;align-items:center}.van-button[data-v-c140645d]{width:80%;height:20%;border-radius:25px;font-size:30px;cursor:pointer}.van-button[data-v-c140645d]:nth-child(1){margin-top:8%;background-color:var(--btn-color1)}.van-button[data-v-c140645d]:nth-child(2){margin-top:8%;background-color:var(--btn-color2)}.van-button[data-v-c140645d]:nth-child(3){margin-top:8%}\n",document.head.appendChild(z);const j=""+new URL("../image/pjpd.png",t.meta.url).href,C=""+new URL("../image/baobiao.png",t.meta.url).href,L=""+new URL("../image/shenhe.png",t.meta.url).href,q=""+new URL("../image/zjjl.png",t.meta.url).href,Q=""+new URL("../image/jianpei.png",t.meta.url).href,U=""+new URL("../image/jianpeidan.png",t.meta.url).href,W={setup(){const e=i(),t=a(),n=r(t.state.user),g=o(!1),s=o(!1),v=o(!1),u=o(!1),m=o(!1),p=o(!1);d((()=>{l.register("goback",(()=>{const t=window.location.href;c.isRootRouter(t)?w({title:"提示",width:"600",allowHtml:!0,message:'<span style="font-size: 18px">是否退出当前程序？</span>'}).then((()=>{R().then((()=>{e.push({path:"/login"})})).catch((e=>{console.log(e)}))})).catch((e=>{console.log(e)})):e.back()})),h()}));const h=()=>{let e=n.groupNames.split(",");for(let t=0;t<e.length;t++){if("admingroup"==e[t]){g.value=!0,s.value=!0,v.value=!0,u.value=!0,m.value=!0,p.value=!0;break}if("yjtzj_admin"==e[t]){g.value=!0,s.value=!0,v.value=!0,u.value=!0;break}if("yjtzj_user"==e[t]){g.value=!0,s.value=!0,v.value=!0;break}if("yjtjp_app"==e[t]){m.value=!0,p.value=!0;break}}};return{pickWithQueryRecordRole:m,pickWithRecordQueryRecordRole:p,gradeDeterminationRole:g,qualityCheckingRecordRole:s,reportFormStatisticsRole:v,auditingListRole:u,userData:n,scanCode:()=>{e.push({path:"/gradeDetermination",query:{barcode:"",tabState:"0"}})},roleJudgement:h}}},S=e=>(b("data-v-c140645d"),e=e(),y(),e),D=S((()=>k("img",{src:j,style:{width:"40%"}},null,-1))),F=S((()=>k("span",{style:{"margin-top":"8px"}},"品级质检",-1))),N=S((()=>k("img",{src:C,style:{width:"40%"}},null,-1))),E=S((()=>k("span",{style:{"margin-top":"8px"}},"报表查询",-1))),G=S((()=>k("img",{src:L,style:{width:"40%"}},null,-1))),H=S((()=>k("span",{style:{"margin-top":"8px"}},"品级质检审核",-1))),I=S((()=>k("img",{src:q,style:{width:"40%"}},null,-1))),J=S((()=>k("span",{style:{"margin-top":"8px"}},"质检记录",-1))),A=S((()=>k("img",{src:Q,style:{width:"40%"}},null,-1))),B=S((()=>k("span",{style:{"margin-top":"8px"}},"拣配",-1))),K=S((()=>k("img",{src:U,style:{width:"40%"}},null,-1))),M=S((()=>k("span",{style:{"margin-top":"8px"}},"查询拣配单",-1)));e("default",n(W,[["render",function(e,t,n,i,a,r){const o=f,d=x,l=p;return g(),s(m,null,[v(o,{title:"主菜单"}),v(l,{gutter:5,"column-num":2,style:{"margin-top":"6px","font-size":"18px","font-weight":"bold"}},{default:u((()=>[i.gradeDeterminationRole?(g(),h(d,{key:0,onClick:i.scanCode},{default:u((()=>[D,F])),_:1},8,["onClick"])):_("",!0),i.reportFormStatisticsRole?(g(),h(d,{key:1,to:"/reportFormStatistics"},{default:u((()=>[N,E])),_:1})):_("",!0),i.auditingListRole?(g(),h(d,{key:2,to:"/auditingList"},{default:u((()=>[G,H])),_:1})):_("",!0),i.qualityCheckingRecordRole?(g(),h(d,{key:3,to:"/qualityCheckingRecord"},{default:u((()=>[I,J])),_:1})):_("",!0),i.pickWithQueryRecordRole?(g(),h(d,{key:4,to:"/pickWithQuery"},{default:u((()=>[A,B])),_:1})):_("",!0),i.pickWithRecordQueryRecordRole?(g(),h(d,{key:5,to:"/pickWithRecordQuery"},{default:u((()=>[K,M])),_:1})):_("",!0)])),_:1})],64)}],["__scopeId","data-v-c140645d"]]))}}}));
