import"./el-tag-acf0ed7e.js";import{E as M}from"./el-overlay-d38babd4.js";import{_ as H,u as U,r as b,E as P,H as E,I as T,o as z,b as n,c as i,i as t,d as h,w as c,F as S,N as Q,a8 as O,a9 as W,M as B,e as D,j as l,V as p,f as d,W as Z,ab as A,Z as G,U as K,p as X,h as $,$ as tt}from"./index-703aaad1.js";import{E as et}from"./el-card-601eac3e.js";/* empty css              */import{a as at,q as ot}from"./qualityCheckingRecord-5eaa745f.js";/* empty css              */import{E as nt}from"./index-8e66d421.js";import"./index-5f02ee64.js";import"./use-global-config-3a66211f.js";import"./objects-1d7d6bfe.js";const lt={setup(){const m=U(),s=b(""),N=b(!1),a=P({qualityCheckingList:[],yjtJyInformationData:{},yjtJyInformationDecideDataList:[],filePathList:[]}),V=b(!1),x=b(!1),k=b(!1),C=b(10),f=b(0);E.await("scanner",o=>{m.currentRoute.value.path=="/qualityCheckingRecord"&&(o!="null"?(a.qualityCheckingList=[],f.value=1,k.value=!0,e({batchnumber:"",barcode:o})):T({message:"数据获取失败",type:"fail",className:"particulars-detail-popup"}))}),z(()=>{f.value=1,e({batchnumber:s.value,barcode:""})});const v=()=>{m.push({path:"/home"})},I=()=>{f.value=1,a.qualityCheckingList=[],k.value=!1,e({batchnumber:s.value,barcode:""})},j=()=>{f.value=1,a.qualityCheckingList=[],k.value=!1,e({batchnumber:s.value,barcode:""})},F=()=>{f.value=f.value+1,e({batchnumber:s.value,barcode:""})},w=()=>{E.scan()},q=o=>{a.filePathList=[],a.filePathList=o,V.value=!0},J=o=>{if(a.yjtJyInformationData=o,o.state=="1"){let _={yjtJyInformationId:o.id,status:"2"};L(_)}N.value=!0},L=o=>{ot(o).then(_=>{a.yjtJyInformationDecideDataList=_.data.data}).catch(_=>{console.log(_)})},e=o=>{x.value=!0;let _={},g={},u={};u.limit=C.value,u.offset=f.value,u.blockId="paramBlock",u.data=o,g.paramBlock=u,_.blocks=g,at(_).then(y=>{a.qualityCheckingList=[...a.qualityCheckingList,...y.data.blocks.resultBlock.data],x.value=!1,a.qualityCheckingList.length==y.data.blocks.resultBlock.total&&(k.value=!0)}).catch(y=>{console.log(y)})};return{showImage:V,centerDialogVisible:N,searchValue:s,loading:x,finished:k,limit:C,offset:f,listData:a,onClickLeft:v,onLoad:F,statusChange:I,dateFormat:(o,_)=>{let g,u=new Date(_);const y={"Y+":u.getFullYear().toString(),"m+":(u.getMonth()+1).toString(),"d+":u.getDate().toString(),"H+":u.getHours().toString(),"M+":u.getMinutes().toString(),"S+":u.getSeconds().toString()};for(let R in y)g=new RegExp("("+R+")").exec(o),g&&(o=o.replace(g[1],g[1].length==1?y[R]:y[R].padStart(g[1].length,"0")));return o},onSearch:j,qualityCheckingRecordDetails:J,scanClick:w,seeImg:q,getQualityCheckingRecordDecide:L,getQualityCheckingRecord:e}}},r=m=>(X("data-v-e026a30a"),m=m(),$(),m),st={class:"header"},it={style:{display:"flex","background-color":"#ffffff"}},rt={id:"content",class:"content"},ct={style:{padding:"0px 5px 5px 5px"}},dt=r(()=>t("span",{style:{"font-weight":"bold"}},"编号：",-1)),ut=r(()=>t("span",{style:{"font-weight":"bold"}},"重量：",-1)),ht={key:0,style:{"margin-left":"30px"}},_t={key:0},pt={key:1},ft={key:2},gt={style:{padding:"15px","overflow-y":"auto","overscroll-behavior-y":"contain",height:"calc(100vh - 180px)"}},yt=r(()=>t("span",{style:{"font-weight":"bold"}},"编号：",-1)),mt=r(()=>t("span",{style:{"font-weight":"bold"}},"重量：",-1)),kt=r(()=>t("span",{style:{"font-weight":"bold"}},"标准：",-1)),vt=r(()=>t("span",{style:{"font-weight":"bold"}},"计量员：",-1)),bt=r(()=>t("span",{style:{"font-weight":"bold"}},"扫描人：",-1)),Dt=r(()=>t("span",{style:{"font-weight":"bold"}},"生产日期：",-1)),wt={key:0},xt=r(()=>t("span",{style:{"font-weight":"bold"}},"是否最新：",-1)),Ct=r(()=>t("span",{style:{"font-weight":"bold"}},"品级分类：",-1)),It={key:0,style:{"font-weight":"bold"}},Lt=r(()=>t("span",{style:{"font-weight":"bold"}},"质检时间：",-1)),St=r(()=>t("span",{style:{"font-weight":"bold"}},"质检人：",-1)),Nt={key:0},Vt=r(()=>t("span",{style:{"font-weight":"bold"}},"改判理由：",-1)),jt={key:1},Ft=r(()=>t("span",{style:{"font-weight":"bold"}},"备注：",-1)),qt={key:2};function Jt(m,s,N,a,V,x){const k=Z,C=Q,f=O,v=nt,I=A,j=et,F=W,w=G,q=tt,J=K,L=M;return n(),i(S,null,[t("div",st,[h(C,{title:"质检记录列表",class:"page-nav-bar","left-arrow":"",onClickLeft:a.onClickLeft},{right:c(()=>[h(k,{onClick:a.scanClick,style:{color:"#FFFFFF"},name:"scan",size:"40"},null,8,["onClick"])]),_:1},8,["onClickLeft"]),t("div",it,[h(f,{style:{width:"100%"},modelValue:a.searchValue,"onUpdate:modelValue":s[0]||(s[0]=e=>a.searchValue=e),shape:"round",placeholder:"请输入编号搜索",onSearch:a.onSearch},null,8,["modelValue","onSearch"])])]),t("div",rt,[h(F,{loading:a.loading,"onUpdate:loading":s[1]||(s[1]=e=>a.loading=e),finished:a.finished,"immediate-check":!1,"finished-text":"没有更多了",onLoad:a.onLoad},{default:c(()=>[t("div",ct,[(n(!0),i(S,null,B(a.listData.qualityCheckingList,(e,Y)=>(n(),D(j,{class:"box-card",shadow:"always",style:{"margin-top":"5px"},onClick:o=>a.qualityCheckingRecordDetails(e)},{default:c(()=>[t("div",null,[t("p",null,[dt,t("span",null,l(e.batchnumber),1)]),t("p",null,[ut,t("span",null,l(parseFloat(e.suttle))+l(e.unit),1),e.exteriorName?(n(),i("span",ht,[e.exteriorName=="优等品"?(n(),i("span",_t,[h(v,null,{default:c(()=>[p(l(e.exteriorName),1)]),_:2},1024)])):d("",!0),e.exteriorName=="合格"?(n(),i("span",pt,[h(v,{type:"warning"},{default:c(()=>[p(l(e.exteriorName),1)]),_:2},1024)])):d("",!0),e.exteriorName=="不合格"?(n(),i("span",ft,[h(v,{type:"danger"},{default:c(()=>[p(l(e.exteriorName),1)]),_:2},1024)])):d("",!0)])):d("",!0)]),e.state=="0"?(n(),D(I,{key:0,type:"primary",size:"large"},{default:c(()=>[p("未质检")]),_:1})):d("",!0),e.state=="1"?(n(),D(I,{key:1,type:"success",size:"large"},{default:c(()=>[p("已质检")]),_:1})):d("",!0)])]),_:2},1032,["onClick"]))),256))])]),_:1},8,["loading","finished","onLoad"])]),h(L,{modelValue:a.centerDialogVisible,"onUpdate:modelValue":s[3]||(s[3]=e=>a.centerDialogVisible=e),"destroy-on-close":!0,title:"质检记录详情",width:"96%","align-center":""},{default:c(()=>[t("div",gt,[t("div",null,[h(w,{"content-position":"left"},{default:c(()=>[p("基本信息")]),_:1}),t("p",null,[yt,t("span",null,l(a.listData.yjtJyInformationData.batchnumber),1)]),t("p",null,[mt,t("span",null,l(parseFloat(a.listData.yjtJyInformationData.suttle))+l(a.listData.yjtJyInformationData.unit),1)]),t("p",null,[kt,t("span",null,l(a.listData.yjtJyInformationData.standard),1)]),t("p",null,[vt,t("span",null,l(a.listData.yjtJyInformationData.suttleperson),1),p("      "),bt,t("span",null,l(a.listData.yjtJyInformationData.scanUser),1)]),t("p",null,[Dt,t("span",null,l(a.dateFormat("YYYY-mm-dd HH:MM:SS",a.listData.yjtJyInformationData.proDate)),1)])]),a.listData.yjtJyInformationData.state=="1"?(n(),i("div",wt,[h(w,{"content-position":"left"},{default:c(()=>[p("质检信息")]),_:1}),(n(!0),i(S,null,B(a.listData.yjtJyInformationDecideDataList,(e,Y)=>(n(),i("div",null,[t("div",null,[t("p",null,[xt,e.details.isNew=="0"?(n(),D(v,{key:0,type:"success"},{default:c(()=>[p("是")]),_:1})):d("",!0),e.details.isNew=="1"?(n(),D(v,{key:1,type:"danger"},{default:c(()=>[p("否")]),_:1})):d("",!0)]),t("p",null,[Ct,t("span",null,l(e.details.exteriorName),1),p("      "),e.details.exterior!="0"?(n(),i("span",It,"类型：")):d("",!0),t("span",null,l(e.details.dictName),1)]),t("p",null,[Lt,t("span",null,l(a.dateFormat("YYYY-mm-dd HH:MM:SS",e.details.checkoutDate)),1)]),t("p",null,[St,t("span",null,l(e.details.checkoutUser),1)]),e.details.alterReason?(n(),i("p",Nt,[Vt,t("span",null,l(e.details.alterReason),1)])):d("",!0),e.details.remarks?(n(),i("p",jt,[Ft,t("span",null,l(e.details.remarks),1)])):d("",!0),e.details.exterior!="0"?(n(),i("div",qt,[(n(!0),i(S,null,B(e.fileList,(o,_)=>(n(),D(q,{style:{margin:"0 2%"},onClick:g=>a.seeImg(e.fileList),width:"45%",height:"8rem",fit:"cover",position:"left",src:o},null,8,["onClick","src"]))),256))])):d("",!0),h(w)])]))),256))])):d("",!0)]),h(J,{show:a.showImage,"onUpdate:show":s[2]||(s[2]=e=>a.showImage=e),images:a.listData.filePathList,closeable:!0,loop:!1,closeOnPopstate:!0},null,8,["show","images"])]),_:1},8,["modelValue"])],64)}const Ot=H(lt,[["render",Jt],["__scopeId","data-v-e026a30a"]]);export{Ot as default};
