import"./el-tag-90aa5608.js";import{E as M}from"./el-overlay-2bc37db7.js";import{a5 as U,a6 as H,_ as P,u as T,r as b,H as A,I as E,J as O,b as n,c as i,i as t,d as u,w as r,F as L,N as Q,a7 as z,a8 as Z,O as Y,e as D,j as l,U as p,f as h,V as G,aa as K,Y as W,S as X,p as $,h as tt,Z as et}from"./index-17486206.js";import{E as at}from"./el-card-413c9cb9.js";/* empty css              *//* empty css              *//* empty css              */import{E as ot}from"./index-f8c8671e.js";import"./use-global-config-238b8e6e.js";import"./objects-ffb2921c.js";function nt(_){return U({url:`${H.api_base_url}/mobileTerminalApi.do?method=qualityCheckingRecord`,method:"post",data:_})}function lt(_){return U({url:`${H.api_base_url}/mobileTerminalApi.do?method=qualityCheckingRecordDecide`,method:"get",params:_})}const st={setup(){const _=T(),s=b(""),S=b(!1),e=A({qualityCheckingList:[],yjtJyInformationData:{},yjtJyInformationDecideDataList:[],filePathList:[]}),N=b(!1),V=b(!1),k=b(!1),C=b(10),g=b(0);E.await("scanner",o=>{_.currentRoute.value.path=="/qualityCheckingRecord"&&(o!="null"?(e.qualityCheckingList=[],g.value=1,k.value=!0,a({batchnumber:"",barcode:o})):O({message:"数据获取失败",type:"fail",className:"particulars-detail-popup"}))});const v=()=>{_.push({path:"/home"})},x=()=>{g.value=1,e.qualityCheckingList=[],k.value=!1,a({batchnumber:s.value,barcode:""})},j=()=>{g.value=1,e.qualityCheckingList=[],k.value=!1,a({batchnumber:s.value,barcode:""})},q=()=>{g.value=g.value+1,a({batchnumber:s.value,barcode:""})},w=()=>{E.scan()},F=o=>{e.filePathList=[],e.filePathList=o,N.value=!0},J=o=>{if(e.yjtJyInformationData=o,o.state=="1"){let f={yjtJyInformationId:o.id,status:"2"};I(f)}S.value=!0},I=o=>{lt(o).then(f=>{e.yjtJyInformationDecideDataList=f.data.data}).catch(f=>{console.log(f)})},a=o=>{let f={},y={},d={};d.limit=C.value,d.offset=g.value,d.blockId="paramBlock",d.data=o,y.paramBlock=d,f.blocks=y,nt(f).then(m=>{e.qualityCheckingList=[...e.qualityCheckingList,...m.data.blocks.resultBlock.data],V.value=!1,e.qualityCheckingList.length==m.data.blocks.resultBlock.total&&(k.value=!0)}).catch(m=>{console.log(m)})};return{showImage:N,centerDialogVisible:S,searchValue:s,loading:V,finished:k,limit:C,offset:g,listData:e,onClickLeft:v,onLoad:q,statusChange:x,dateFormat:(o,f)=>{let y,d=new Date(f);const m={"Y+":d.getFullYear().toString(),"m+":(d.getMonth()+1).toString(),"d+":d.getDate().toString(),"H+":d.getHours().toString(),"M+":d.getMinutes().toString(),"S+":d.getSeconds().toString()};for(let R in m)y=new RegExp("("+R+")").exec(o),y&&(o=o.replace(y[1],y[1].length==1?m[R]:m[R].padStart(y[1].length,"0")));return o},onSearch:j,qualityCheckingRecordDetails:J,scanClick:w,seeImg:F,getQualityCheckingRecordDecide:I,getQualityCheckingRecord:a}}},c=_=>($("data-v-df89f3fe"),_=_(),tt(),_),it={class:"header"},rt={style:{display:"flex","background-color":"#ffffff"}},ct={id:"content",class:"content"},dt={style:{padding:"0px 5px 5px 5px"}},ut=c(()=>t("span",{style:{"font-weight":"bold"}},"编号：",-1)),ht=c(()=>t("span",{style:{"font-weight":"bold"}},"重量：",-1)),_t={key:0,style:{"margin-left":"30px"}},ft={key:0},pt={key:1},gt={key:2},yt={style:{"overflow-y":"auto","overscroll-behavior-y":"contain",height:"calc(100vh - 180px)"}},mt=c(()=>t("span",{style:{"font-weight":"bold"}},"编号：",-1)),kt=c(()=>t("span",{style:{"font-weight":"bold"}},"重量：",-1)),vt=c(()=>t("span",{style:{"font-weight":"bold"}},"标准：",-1)),bt=c(()=>t("span",{style:{"font-weight":"bold"}},"计量员：",-1)),Dt=c(()=>t("span",{style:{"font-weight":"bold"}},"扫描人：",-1)),wt=c(()=>t("span",{style:{"font-weight":"bold"}},"生产日期：",-1)),Ct={key:0},xt=c(()=>t("span",{style:{"font-weight":"bold"}},"是否最新：",-1)),It=c(()=>t("span",{style:{"font-weight":"bold"}},"品级分类：",-1)),Lt={key:0,style:{"font-weight":"bold"}},St=c(()=>t("span",{style:{"font-weight":"bold"}},"质检时间：",-1)),Nt=c(()=>t("span",{style:{"font-weight":"bold"}},"质检人：",-1)),Vt={key:0},jt=c(()=>t("span",{style:{"font-weight":"bold"}},"改判理由：",-1)),qt={key:1};function Ft(_,s,S,e,N,V){const k=G,C=Q,g=z,v=ot,x=K,j=at,q=Z,w=W,F=et,J=X,I=M;return n(),i(L,null,[t("div",it,[u(C,{title:"质检记录列表",class:"page-nav-bar","left-arrow":"",onClickLeft:e.onClickLeft},{right:r(()=>[u(k,{onClick:e.scanClick,style:{color:"#FFFFFF"},name:"scan",size:"40"},null,8,["onClick"])]),_:1},8,["onClickLeft"]),t("div",rt,[u(g,{style:{width:"100%"},modelValue:e.searchValue,"onUpdate:modelValue":s[0]||(s[0]=a=>e.searchValue=a),shape:"round",placeholder:"请输入编号搜索",onSearch:e.onSearch},null,8,["modelValue","onSearch"])])]),t("div",ct,[u(q,{loading:e.loading,"onUpdate:loading":s[1]||(s[1]=a=>e.loading=a),finished:e.finished,offset:"50","finished-text":"没有更多了",onLoad:e.onLoad},{default:r(()=>[t("div",dt,[(n(!0),i(L,null,Y(e.listData.qualityCheckingList,(a,B)=>(n(),D(j,{class:"box-card",shadow:"always",style:{"margin-top":"5px"},onClick:o=>e.qualityCheckingRecordDetails(a)},{default:r(()=>[t("div",null,[t("p",null,[ut,t("span",null,l(a.batchnumber),1)]),t("p",null,[ht,t("span",null,l(parseFloat(a.suttle))+l(a.unit),1),a.exteriorName?(n(),i("span",_t,[a.exteriorName=="优等品"?(n(),i("span",ft,[u(v,null,{default:r(()=>[p(l(a.exteriorName),1)]),_:2},1024)])):h("",!0),a.exteriorName=="合格"?(n(),i("span",pt,[u(v,{type:"warning"},{default:r(()=>[p(l(a.exteriorName),1)]),_:2},1024)])):h("",!0),a.exteriorName=="不合格"?(n(),i("span",gt,[u(v,{type:"danger"},{default:r(()=>[p(l(a.exteriorName),1)]),_:2},1024)])):h("",!0)])):h("",!0)]),a.state=="0"?(n(),D(x,{key:0,type:"primary"},{default:r(()=>[p("未质检")]),_:1})):h("",!0),a.state=="1"?(n(),D(x,{key:1,type:"success"},{default:r(()=>[p("已质检")]),_:1})):h("",!0)])]),_:2},1032,["onClick"]))),256))])]),_:1},8,["loading","finished","onLoad"])]),u(I,{modelValue:e.centerDialogVisible,"onUpdate:modelValue":s[3]||(s[3]=a=>e.centerDialogVisible=a),"destroy-on-close":!0,title:"质检记录详情",width:"96%","align-center":""},{default:r(()=>[t("div",yt,[t("div",null,[u(w,{"content-position":"left"},{default:r(()=>[p("基本信息")]),_:1}),t("p",null,[mt,t("span",null,l(e.listData.yjtJyInformationData.batchnumber),1)]),t("p",null,[kt,t("span",null,l(parseFloat(e.listData.yjtJyInformationData.suttle))+l(e.listData.yjtJyInformationData.unit),1)]),t("p",null,[vt,t("span",null,l(e.listData.yjtJyInformationData.standard),1)]),t("p",null,[bt,t("span",null,l(e.listData.yjtJyInformationData.suttleperson),1),p("      "),Dt,t("span",null,l(e.listData.yjtJyInformationData.scanUser),1)]),t("p",null,[wt,t("span",null,l(e.dateFormat("YYYY-mm-dd HH:MM:SS",e.listData.yjtJyInformationData.proDate)),1)])]),e.listData.yjtJyInformationData.state=="1"?(n(),i("div",Ct,[u(w,{"content-position":"left"},{default:r(()=>[p("质检信息")]),_:1}),(n(!0),i(L,null,Y(e.listData.yjtJyInformationDecideDataList,(a,B)=>(n(),i("div",null,[t("div",null,[t("p",null,[xt,a.details.isNew=="0"?(n(),D(v,{key:0,type:"success"},{default:r(()=>[p("是")]),_:1})):h("",!0),a.details.isNew=="1"?(n(),D(v,{key:1,type:"danger"},{default:r(()=>[p("否")]),_:1})):h("",!0)]),t("p",null,[It,t("span",null,l(a.details.exteriorName),1),p("      "),a.details.exterior!="0"?(n(),i("span",Lt,"类型：")):h("",!0),t("span",null,l(a.details.dictName),1)]),t("p",null,[St,t("span",null,l(e.dateFormat("YYYY-mm-dd HH:MM:SS",a.details.checkoutDate)),1)]),t("p",null,[Nt,t("span",null,l(a.details.checkoutUser),1)]),a.details.alterReason?(n(),i("p",Vt,[jt,t("span",null,l(a.details.alterReason),1)])):h("",!0),a.details.exterior!="0"?(n(),i("div",qt,[(n(!0),i(L,null,Y(a.fileList,(o,f)=>(n(),D(F,{style:{margin:"0 2%"},onClick:y=>e.seeImg(a.fileList),width:"45%",height:"8rem",fit:"cover",position:"left",src:o},null,8,["onClick","src"]))),256))])):h("",!0),u(w)])]))),256))])):h("",!0)]),u(J,{show:e.showImage,"onUpdate:show":s[2]||(s[2]=a=>e.showImage=a),images:e.listData.filePathList,closeable:!0,loop:!1,closeOnPopstate:!0},null,8,["show","images"])]),_:1},8,["modelValue"])],64)}const At=P(st,[["render",Ft],["__scopeId","data-v-df89f3fe"]]);export{At as default};
