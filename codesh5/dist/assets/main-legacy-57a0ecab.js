System.register(["./el-tag-legacy-9c5e3cae.js","./el-overlay-legacy-5eda7516.js","./index-legacy-89a34e7c.js","./el-card-legacy-0c33fc6e.js","./index-legacy-2f76a666.js","./qualityCheckingRecord-legacy-ebf9cf3f.js","./index-legacy-f3c1d55a.js","./index-legacy-a8b76193.js","./index-legacy-043578f0.js","./index-legacy-10513804.js","./index-legacy-11bfa915.js","./index-legacy-16ab7d77.js","./use-global-config-legacy-7d6044fa.js","./objects-legacy-05777e60.js","./mount-component-legacy-2eb7189b.js","./index-legacy-d7add2f9.js","./use-tab-status-legacy-81ed5cb1.js","./use-id-legacy-a10b8f4a.js","./request-legacy-e169870c.js"],(function(e,t){"use strict";var a,l,n,i,s,o,u,d,c,r,y,p,g,h,f,m,b,k,v,x,D,w,j,C,L,I,S,_,q,J,F,N,V;return{setters:[null,e=>{a=e.E},e=>{l=e._,n=e.k,i=e.p,s=e.Z,o=e.s,u=e.q,d=e.x,c=e.y,r=e.F,y=e.a,p=e.z,g=e.H,h=e.a1,f=e.A,m=e.G,b=e.N,k=e.C,v=e.I,x=e.D,D=e.E},e=>{w=e.E,j=e.D,C=e.I,L=e.a},null,e=>{I=e.a,S=e.q,_=e.S,q=e.L,J=e.T},null,null,e=>{F=e.N},e=>{N=e.E},e=>{V=e.s},null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".header[data-v-7496b192]{width:100%;height:110px;line-height:110px;position:absolute;z-index:5;top:0}.content[data-v-7496b192]{width:100%;overflow:scroll;top:110px;position:absolute;z-index:10;bottom:5px}\n",document.head.appendChild(t);const R={setup(){const e=n(),t=i(""),a=i(!1),l=s({qualityCheckingList:[],yjtJyInformationData:{},yjtJyInformationDecideDataList:[],filePathList:[]}),d=i(!1),c=i(!1),r=i(!1),y=i(10),p=i(0);o.await("scanner",(t=>{"/qualityCheckingRecord"==e.currentRoute.value.path&&("null"!=t?(l.qualityCheckingList=[],p.value=1,r.value=!0,h({batchnumber:"",barcode:t})):V({message:"数据获取失败",type:"fail",className:"particulars-detail-popup"}))})),u((()=>{o.register("goback",(()=>{a.value?a.value=!1:e.push({path:"/home"})})),p.value=1,h({batchnumber:t.value,barcode:""})}));const g=e=>{S(e).then((e=>{l.yjtJyInformationDecideDataList=e.data.data})).catch((e=>{console.log(e)}))},h=e=>{c.value=!0;let t={},a={},n={};n.limit=y.value,n.offset=p.value,n.blockId="paramBlock",n.data=e,a.paramBlock=n,t.blocks=a,I(t).then((e=>{l.qualityCheckingList=[...l.qualityCheckingList,...e.data.blocks.resultBlock.data],c.value=!1,l.qualityCheckingList.length==e.data.blocks.resultBlock.total&&(r.value=!0)})).catch((e=>{console.log(e)}))};return{showImage:d,centerDialogVisible:a,searchValue:t,loading:c,finished:r,limit:y,offset:p,listData:l,onClickLeft:()=>{e.push({path:"/home"})},onLoad:()=>{p.value=p.value+1,h({batchnumber:t.value,barcode:""})},statusChange:()=>{p.value=1,l.qualityCheckingList=[],r.value=!1,h({batchnumber:t.value,barcode:""})},dateFormat:(e,t)=>{let a,l=new Date(t);const n={"Y+":l.getFullYear().toString(),"m+":(l.getMonth()+1).toString(),"d+":l.getDate().toString(),"H+":l.getHours().toString(),"M+":l.getMinutes().toString(),"S+":l.getSeconds().toString()};for(let i in n)a=new RegExp("("+i+")").exec(e),a&&(e=e.replace(a[1],1==a[1].length?n[i]:n[i].padStart(a[1].length,"0")));return e},onSearch:()=>{p.value=1,l.qualityCheckingList=[],r.value=!1,h({batchnumber:t.value,barcode:""})},qualityCheckingRecordDetails:e=>{if(l.yjtJyInformationData=e,"1"==e.state){let t={yjtJyInformationId:e.id,status:"2"};g(t)}a.value=!0},scanClick:()=>{o.scan()},seeImg:e=>{l.filePathList=[],l.filePathList=e,d.value=!0},getQualityCheckingRecordDecide:g,getQualityCheckingRecord:h}}},Y=e=>(x("data-v-7496b192"),e=e(),D(),e),H={class:"header"},M={style:{display:"flex","background-color":"#ffffff"}},z={id:"content",class:"content"},E={style:{padding:"0px 5px 5px 5px"}},U=Y((()=>r("span",{style:{"font-weight":"bold"}},"编号：",-1))),P=Y((()=>r("span",{style:{"font-weight":"bold"}},"重量：",-1))),B={key:0,style:{"margin-left":"30px"}},G={key:0},Q={key:1},A={key:2},O={style:{padding:"15px","overflow-y":"auto","overscroll-behavior-y":"contain",height:"calc(100vh - 180px)"}},T=Y((()=>r("span",{style:{"font-weight":"bold"}},"编号：",-1))),Z=Y((()=>r("span",{style:{"font-weight":"bold"}},"重量：",-1))),K=Y((()=>r("span",{style:{"font-weight":"bold"}},"标准：",-1))),W=Y((()=>r("span",{style:{"font-weight":"bold"}},"计量员：",-1))),X=Y((()=>r("span",{style:{"font-weight":"bold"}},"扫描人：",-1))),$=Y((()=>r("span",{style:{"font-weight":"bold"}},"生产日期：",-1))),ee={key:0},te=Y((()=>r("span",{style:{"font-weight":"bold"}},"是否最新：",-1))),ae=Y((()=>r("span",{style:{"font-weight":"bold"}},"品级分类：",-1))),le={key:0,style:{"font-weight":"bold"}},ne=Y((()=>r("span",{style:{"font-weight":"bold"}},"质检时间：",-1))),ie=Y((()=>r("span",{style:{"font-weight":"bold"}},"质检人：",-1))),se={key:0},oe=Y((()=>r("span",{style:{"font-weight":"bold"}},"改判理由：",-1))),ue={key:1},de=Y((()=>r("span",{style:{"font-weight":"bold"}},"备注：",-1))),ce={key:2};e("default",l(R,[["render",function(e,t,l,n,i,s){const o=v,u=F,x=_,D=N,I=J,S=w,V=q,R=j,Y=L,re=C,ye=a;return d(),c("main",null,[r("div",H,[y(u,{title:"质检记录列表",class:"page-nav-bar","left-arrow":"",onClickLeft:n.onClickLeft},{right:p((()=>[y(o,{onClick:n.scanClick,style:{color:"#FFFFFF"},name:"scan",size:"40"},null,8,["onClick"])])),_:1},8,["onClickLeft"]),r("div",M,[y(x,{style:{width:"100%"},modelValue:n.searchValue,"onUpdate:modelValue":t[0]||(t[0]=e=>n.searchValue=e),shape:"round",placeholder:"请输入编号搜索",onSearch:n.onSearch},null,8,["modelValue","onSearch"])])]),r("div",z,[y(V,{loading:n.loading,"onUpdate:loading":t[1]||(t[1]=e=>n.loading=e),finished:n.finished,"immediate-check":!1,"finished-text":"没有更多了",onLoad:n.onLoad},{default:p((()=>[r("div",E,[(d(!0),c(g,null,h(n.listData.qualityCheckingList,((e,t)=>(d(),f(S,{class:"box-card",shadow:"always",style:{"margin-top":"5px"},onClick:t=>n.qualityCheckingRecordDetails(e)},{default:p((()=>[r("div",null,[r("p",null,[U,r("span",null,m(e.batchnumber),1)]),r("p",null,[P,r("span",null,m(parseFloat(e.suttle))+m(e.unit),1),e.exteriorName?(d(),c("span",B,["优等品"==e.exteriorName?(d(),c("span",G,[y(D,null,{default:p((()=>[b(m(e.exteriorName),1)])),_:2},1024)])):k("",!0),"合格"==e.exteriorName?(d(),c("span",Q,[y(D,{type:"warning"},{default:p((()=>[b(m(e.exteriorName),1)])),_:2},1024)])):k("",!0),"不合格"==e.exteriorName?(d(),c("span",A,[y(D,{type:"danger"},{default:p((()=>[b(m(e.exteriorName),1)])),_:2},1024)])):k("",!0)])):k("",!0)]),"0"==e.state?(d(),f(I,{key:0,type:"primary",size:"large"},{default:p((()=>[b("未质检")])),_:1})):k("",!0),"1"==e.state?(d(),f(I,{key:1,type:"success",size:"large"},{default:p((()=>[b("已质检")])),_:1})):k("",!0)])])),_:2},1032,["onClick"])))),256))])])),_:1},8,["loading","finished","onLoad"])]),y(ye,{modelValue:n.centerDialogVisible,"onUpdate:modelValue":t[3]||(t[3]=e=>n.centerDialogVisible=e),"destroy-on-close":!0,title:"质检记录详情",width:"96%","align-center":""},{default:p((()=>[r("div",O,[r("div",null,[y(R,{"content-position":"left"},{default:p((()=>[b("基本信息")])),_:1}),r("p",null,[T,r("span",null,m(n.listData.yjtJyInformationData.batchnumber),1)]),r("p",null,[Z,r("span",null,m(parseFloat(n.listData.yjtJyInformationData.suttle))+m(n.listData.yjtJyInformationData.unit),1)]),r("p",null,[K,r("span",null,m(n.listData.yjtJyInformationData.standard),1)]),r("p",null,[W,r("span",null,m(n.listData.yjtJyInformationData.suttleperson),1),b("      "),X,r("span",null,m(n.listData.yjtJyInformationData.scanUser),1)]),r("p",null,[$,r("span",null,m(n.dateFormat("YYYY-mm-dd HH:MM:SS",n.listData.yjtJyInformationData.proDate)),1)])]),"1"==n.listData.yjtJyInformationData.state?(d(),c("div",ee,[y(R,{"content-position":"left"},{default:p((()=>[b("质检信息")])),_:1}),(d(!0),c(g,null,h(n.listData.yjtJyInformationDecideDataList,((e,t)=>(d(),c("div",null,[r("div",null,[r("p",null,[te,"0"==e.details.isNew?(d(),f(D,{key:0,type:"success"},{default:p((()=>[b("是")])),_:1})):k("",!0),"1"==e.details.isNew?(d(),f(D,{key:1,type:"danger"},{default:p((()=>[b("否")])),_:1})):k("",!0)]),r("p",null,[ae,r("span",null,m(e.details.exteriorName),1),b("      "),"0"!=e.details.exterior?(d(),c("span",le,"类型：")):k("",!0),r("span",null,m(e.details.dictName),1)]),r("p",null,[ne,r("span",null,m(n.dateFormat("YYYY-mm-dd HH:MM:SS",e.details.checkoutDate)),1)]),r("p",null,[ie,r("span",null,m(e.details.checkoutUser),1)]),e.details.alterReason?(d(),c("p",se,[oe,r("span",null,m(e.details.alterReason),1)])):k("",!0),e.details.remarks?(d(),c("p",ue,[de,r("span",null,m(e.details.remarks),1)])):k("",!0),"0"!=e.details.exterior?(d(),c("div",ce,[(d(!0),c(g,null,h(e.fileList,((t,a)=>(d(),f(Y,{style:{margin:"0 2%"},onClick:t=>n.seeImg(e.fileList),width:"45%",height:"8rem",fit:"cover",position:"left",src:t},null,8,["onClick","src"])))),256))])):k("",!0),y(R)])])))),256))])):k("",!0)]),y(re,{show:n.showImage,"onUpdate:show":t[2]||(t[2]=e=>n.showImage=e),images:n.listData.filePathList,closeable:!0,loop:!1,closeOnPopstate:!0},null,8,["show","images"])])),_:1},8,["modelValue"])])}],["__scopeId","data-v-7496b192"]]))}}}));
