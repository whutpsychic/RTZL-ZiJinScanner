import{_ as A,g as T,j as Q,h as _,i as F,k as G,a as K,r as k,m as O,n as W,q as X,v as Z,o as h,c as g,d as t,b as o,w as r,x as z,y as E,F as H,z as P,A as x,s as $,B as tt,D as at,E as et,N as ot,T as nt,R as st,P as it,I as lt,G as V,e as d,H as u,J as rt,K as dt,L as ct,M as yt,O as ft,p as mt,f as pt}from"./index-470148df.js";/* empty css              *//* empty css              *//* empty css              */import{E as ut}from"./el-card-8f9ea37c.js";import"./base-0aae9690.js";/* empty css              */const ht=""+new URL("../image/delete.png",import.meta.url).href,_t=""+new URL("../image/yijianyan.png",import.meta.url).href,gt=""+new URL("../image/shenhezhong.png",import.meta.url).href;const Dt={setup(){T.await("scanner",e=>{if(e!="null"){let s={};s.fBarcode=e,Q(s).then(i=>{i.data.code!=200?_({title:"提示",message:i.data.message}).then(()=>{}):(f.push({path:"/gradeDetermination",query:{barcode:e,tabState:i.data.data}}),b.value=e,y.value=Number(i.data.data),y.value==0?C():J())}).catch(i=>{console.log(i)})}else F({message:"数据获取失败",type:"fail",className:"particulars-detail-popup"})});const D=G(),f=K(),y=k(0),a=k(""),m=k(!1),U=k(!1),n=O({yjtJyInformationListData:[],yjtJyInformationData:{batchnumber:"",suttle:"",unit:"",standard:"",suttleperson:"",scanUser:"",proDate:""},yjtJyInformationDetailsData:{exteriorName:"",dictName:"",checkoutDate:"",checkoutUser:"",exterior:""},yjtJyInformationFileList:[],isAuditing:""}),v=O({data:[]}),b=k(D.query.barcode);y.value=Number(D.query.tabState),W(()=>{y.value==0?C():J()});const I=()=>{y.value==0?C():J()},S=(e,s)=>{a.value=e,e==0&&(v.data=s),m.value=!0},N=()=>{T.scan()},Y=()=>{let e={data:[],active:"",exterior:"0"};if(e.active=y.value,y.value==0)a.value=="1"?e.data=n.yjtJyInformationListData:e.data.push(v.data),e.data.length>0?(m.value=!1,L(e)):(m.value=!1,F({message:"当前没有要质检的数据",type:"fail",className:"particulars-detail-popup"}));else{if(n.yjtJyInformationDetailsData.status=="0")return m.value=!1,_({title:"提示",width:"600",message:"审核中的数据不允许质检"}).then(()=>{}),!1;n.yjtJyInformationDetailsData.exterior=="0"?(m.value=!1,_({title:"提示",width:"600",message:"当前质检信息为优等品，不能再质检为优等品"}).then(()=>{})):(m.value=!1,e.data.push(n.yjtJyInformationData),L(e))}},p=()=>{if(y.value==0){let e=encodeURIComponent(JSON.stringify(v.data));a.value=="1"?(m.value=!1,_({title:"提示",width:"600",message:"合格品不支持批量质检，请单个质检"}).then(()=>{})):f.push({path:"/decide",query:{yjtJyInformation:e,exterior:"1",tabIndex:y.value}})}else{if(n.yjtJyInformationDetailsData.status=="0")return m.value=!1,_({title:"提示",width:"600",message:"审核中的数据不允许质检"}).then(()=>{}),!1;if(n.yjtJyInformationDetailsData.exterior=="1")m.value=!1,_({title:"提示",width:"600",message:"当前质检信息为合格品，不能再质检为合格品"}).then(()=>{});else{let e=encodeURIComponent(JSON.stringify(n.yjtJyInformationData));f.push({path:"/decide",query:{yjtJyInformation:e,exterior:"1",tabIndex:y.value}})}}},w=()=>{if(y.value==0){let e=encodeURIComponent(JSON.stringify(v.data));a.value=="1"?(m.value=!1,_({title:"提示",width:"600",message:"不合格品不支持批量质检，请单个质检"}).then(()=>{})):f.push({path:"/decide",query:{yjtJyInformation:e,exterior:"2",tabIndex:y.value}})}else{if(n.yjtJyInformationDetailsData.status=="0")return m.value=!1,_({title:"提示",width:"600",message:"审核中的数据不允许质检"}).then(()=>{}),!1;if(n.yjtJyInformationDetailsData.exterior=="2")m.value=!1,_({title:"提示",width:"600",message:"当前质检信息为不合格品，不能再质检为不合格品"}).then(()=>{});else{let e=encodeURIComponent(JSON.stringify(n.yjtJyInformationData));f.push({path:"/decide",query:{yjtJyInformation:e,exterior:"2",tabIndex:y.value}})}}},R=e=>{$({title:"提示",width:"600",message:"是否删除当前数据？"}).then(()=>{let s={};s.id=e.id,tt(s).then(i=>{F({message:i.data.message,type:"success",className:"particulars-detail-popup",overlay:!0}),i.data.code==200&&C()}).catch(i=>{console.log(i)})}).catch(s=>{console.log(s)})};function L(e){at(e).then(s=>{s.data.code==200&&(F({message:"质检成功",type:"success",className:"particulars-detail-popup",overlay:!0}),y.value==0?C():J())}).catch(s=>{m.value=!1,console.log(s)})}const l=()=>{U.value=!0};function q(e){let s={};s.yjtJyInformationDetailsId=e,et(s).then(i=>{console.log(i),n.yjtJyInformationFileList=i.data.data}).catch(i=>{console.log(i)})}function J(){let e={};e.fBarcode=b.value,n.yjtJyInformationData={},n.yjtJyInformationDetailsData={},n.yjtJyInformationFileList=[],X(e).then(s=>{s.data.data.yjtJyInformationData&&(n.yjtJyInformationData=s.data.data.yjtJyInformationData,n.yjtJyInformationDetailsData=s.data.data.yjtJyInformationDetailsData,n.yjtJyInformationDetailsData.exterior!="0"&&q(n.yjtJyInformationDetailsData.id)),console.log(n.yjtJyInformationData)}).catch(s=>{console.log(s)})}function C(){n.yjtJyInformationListData=[],Z().then(e=>{n.yjtJyInformationListData=e.data.data.yjtJyInformationListData}).catch(e=>{console.log(e)})}return{active:y,barcode:b,listData:n,buttonShow:m,distinguish:a,showImage:U,seeImg:l,onClickTab:I,onClickLeft:()=>{f.push({path:"/home"})},dateFormat:(e,s)=>{let i,j=new Date(s);const M={"Y+":j.getFullYear().toString(),"m+":(j.getMonth()+1).toString(),"d+":j.getDate().toString(),"H+":j.getHours().toString(),"M+":j.getMinutes().toString(),"S+":j.getSeconds().toString()};for(let B in M)i=new RegExp("("+B+")").exec(e),i&&(e=e.replace(i[1],i[1].length==1?M[B]:M[B].padStart(i[1].length,"0")));return e},deleteData:R,identifyClick:S,outstandingClick:Y,qualifiedClick:p,unqualifiedClick:w,scanCode:N}}},c=D=>(mt("data-v-3e5897ca"),D=D(),pt(),D),vt={class:"header"},It={class:"content"},wt={style:{padding:"0px 5px 5px 5px"}},Jt={class:"card-header"},jt=["onClick"],bt=c(()=>t("span",{style:{"font-weight":"bold"}},"编号：",-1)),Ct=c(()=>t("span",{style:{"font-weight":"bold"}},"重量：",-1)),kt=c(()=>t("span",{style:{"font-weight":"bold"}},"标准：",-1)),xt=c(()=>t("span",{style:{"font-weight":"bold"}},"计量员：",-1)),St=c(()=>t("span",{style:{"font-weight":"bold"}},"扫描人：",-1)),Nt=c(()=>t("span",{style:{"font-weight":"bold"}},"生产日期：",-1)),Lt={key:0},Ft={style:{position:"relative"}},Ut={style:{position:"relative"}},Yt=c(()=>t("span",{style:{"font-weight":"bold"}},"编号：",-1)),Rt=c(()=>t("span",{style:{"font-weight":"bold"}},"重量：",-1)),qt=c(()=>t("span",{style:{"font-weight":"bold"}},"标准：",-1)),Mt=c(()=>t("span",{style:{"font-weight":"bold"}},"计量员：",-1)),Bt=c(()=>t("span",{style:{"font-weight":"bold"}},"扫描人：",-1)),Ht=c(()=>t("span",{style:{"font-weight":"bold"}},"生产日期：",-1)),Tt={key:0,class:"yijianyan",style:{position:"absolute"}},Ot=c(()=>t("img",{src:_t},null,-1)),zt=[Ot],Et={key:1,class:"yijianyan",style:{position:"absolute"}},Pt=c(()=>t("img",{src:gt},null,-1)),Vt=[Pt],At=c(()=>t("span",{style:{"font-weight":"bold"}},"品级分类：",-1)),Qt={key:0,style:{"font-weight":"bold"}},Gt=c(()=>t("span",{style:{"font-weight":"bold"}},"质检时间：",-1)),Kt=c(()=>t("span",{style:{"font-weight":"bold"}},"质检人：",-1)),Wt={key:0},Xt={class:"empennage"},Zt={style:{"margin-top":"15%"}};function $t(D,f,y,a,m,U){const n=ot,v=rt,b=nt,I=dt,S=ut,N=ct,Y=yt,p=ft,w=st,R=it,L=lt;return h(),g(H,null,[t("div",vt,[o(n,{title:"品级质检列表",class:"page-nav-bar","left-arrow":"",onClickLeft:a.onClickLeft},null,8,["onClickLeft"]),o(b,{active:a.active,"onUpdate:active":f[0]||(f[0]=l=>a.active=l),onClickTab:a.onClickTab},{default:r(()=>[o(v,{title:"未质检"}),o(v,{title:" 已质检"})]),_:1},8,["active","onClickTab"])]),t("div",It,[z(t("div",wt,[(h(!0),g(H,null,P(a.listData.yjtJyInformationListData,(l,q)=>(h(),V(S,{class:"box-card",shadow:"always",style:{"margin-top":"5px"}},{header:r(()=>[t("div",Jt,[t("img",{src:ht,class:"delete",onClick:J=>a.deleteData(l)},null,8,jt)])]),default:r(()=>[t("div",null,[t("p",null,[bt,t("span",null,d(l.batchnumber),1)]),t("p",null,[Ct,t("span",null,d(parseFloat(l.suttle))+d(l.unit),1)]),t("p",null,[kt,t("span",null,d(l.standard),1)]),t("p",null,[xt,t("span",null,d(l.suttleperson),1),u("     "),St,t("span",null,d(l.scanUser),1)]),t("p",null,[Nt,u(d(a.dateFormat("YYYY-mm-dd HH:MM:SS",l.proDate)),1)])]),o(I,{type:"primary",size:"small",style:{float:"right"},onClick:J=>a.identifyClick("0",l)},{default:r(()=>[u("品级鉴定 ")]),_:2},1032,["onClick"])]),_:2},1024))),256))],512),[[E,a.active==0]]),z(t("div",null,[JSON.stringify(a.listData.yjtJyInformationData)!=="{}"?(h(),g("div",Lt,[t("div",Ft,[o(S,{class:"box-card",shadow:"always",style:{"margin-top":"5px"}},{default:r(()=>[o(N,{"content-position":"left"},{default:r(()=>[u("基本信息")]),_:1}),t("div",Ut,[t("p",null,[Yt,t("span",null,d(a.listData.yjtJyInformationData.batchnumber),1)]),t("p",null,[Rt,t("span",null,d(parseFloat(a.listData.yjtJyInformationData.suttle))+d(a.listData.yjtJyInformationData.unit),1)]),t("p",null,[qt,t("span",null,d(a.listData.yjtJyInformationData.standard),1)]),t("p",null,[Mt,t("span",null,d(a.listData.yjtJyInformationData.suttleperson),1),u("     "),Bt,t("span",null,d(a.listData.yjtJyInformationData.scanUser),1)]),t("p",null,[Ht,u(d(a.dateFormat("YYYY-mm-dd HH:MM:SS",a.listData.yjtJyInformationData.proDate)),1)]),a.listData.yjtJyInformationDetailsData.status=="2"?(h(),g("div",Tt,zt)):x("",!0),a.listData.yjtJyInformationDetailsData.status=="0"?(h(),g("div",Et,Vt)):x("",!0)]),o(N,{"content-position":"left"},{default:r(()=>[u("质检信息")]),_:1}),t("div",null,[t("p",null,[At,t("span",null,d(a.listData.yjtJyInformationDetailsData.exteriorName),1),u("     "),a.listData.yjtJyInformationDetailsData.exterior!="0"?(h(),g("span",Qt,"类型：")):x("",!0),t("span",null,d(a.listData.yjtJyInformationDetailsData.dictName),1)]),t("p",null,[Gt,u(d(a.dateFormat("YYYY-mm-dd HH:MM:SS",a.listData.yjtJyInformationDetailsData.checkoutDate)),1)]),t("p",null,[Kt,t("span",null,d(a.listData.yjtJyInformationDetailsData.checkoutUser),1)])]),a.listData.yjtJyInformationDetailsData.exterior!="0"?(h(),g("div",Wt,[(h(!0),g(H,null,P(a.listData.yjtJyInformationFileList,(l,q)=>(h(),V(Y,{style:{margin:"0 2%"},onClick:a.seeImg,width:"45%",height:"8rem",fit:"cover",position:"left",src:l},null,8,["onClick","src"]))),256))])):x("",!0)]),_:1})])])):x("",!0)],512),[[E,a.active==1]])]),t("div",Xt,[o(w,null,{default:r(()=>[o(p,{span:"8"}),o(p,{span:"8"},{default:r(()=>[o(I,{type:"primary",onClick:f[1]||(f[1]=l=>a.identifyClick("1"))},{default:r(()=>[u("品级鉴定")]),_:1})]),_:1}),o(p,{span:"8"})]),_:1})]),o(R,{show:a.buttonShow,"onUpdate:show":f[2]||(f[2]=l=>a.buttonShow=l),closeable:"","close-icon":"close",position:"bottom",style:{height:"50%"}},{default:r(()=>[t("div",Zt,[o(w,null,{default:r(()=>[o(p,{span:"3"}),o(p,{span:"18"},{default:r(()=>[o(I,{type:"primary",size:"large",onClick:a.outstandingClick},{default:r(()=>[u("优等品")]),_:1},8,["onClick"])]),_:1}),o(p,{span:"3"})]),_:1}),o(w,{style:{"margin-top":"15px"}},{default:r(()=>[o(p,{span:"3"}),o(p,{span:"18"},{default:r(()=>[o(I,{type:"warning",size:"large",onClick:a.qualifiedClick},{default:r(()=>[u("合格")]),_:1},8,["onClick"])]),_:1}),o(p,{span:"3"})]),_:1}),o(w,{style:{"margin-top":"15px"}},{default:r(()=>[o(p,{span:"3"}),o(p,{span:"18"},{default:r(()=>[o(I,{type:"danger",size:"large",onClick:a.unqualifiedClick},{default:r(()=>[u("不合格")]),_:1},8,["onClick"])]),_:1}),o(p,{span:"3"})]),_:1})])]),_:1},8,["show"]),o(L,{show:a.showImage,"onUpdate:show":f[3]||(f[3]=l=>a.showImage=l),images:a.listData.yjtJyInformationFileList,closeable:!0,loop:!1,closeOnPopstate:!0},null,8,["show","images"])],64)}const da=A(Dt,[["render",$t],["__scopeId","data-v-3e5897ca"]]);export{da as default};
