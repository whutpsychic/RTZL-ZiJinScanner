import{_ as z,u as A,D as G,r as i,E as Q,H as Y,o as K,b as C,c as R,i as t,d as r,w as p,I as V,O as W,P as O,N as X,Y as $,U as ee,V as I,j as v,F as B,M as P,e as T,f as te,Z as ae,a4 as oe,a5 as le,a1 as ne,a2 as se,p as ie,h as re}from"./index-703aaad1.js";import{E as de}from"./el-card-601eac3e.js";/* empty css              */import"./el-tag-acf0ed7e.js";import{E as ce,a as pe}from"./el-select-e167463c.js";import"./el-popper-8f138f0c.js";/* empty css              *//* empty css              */import{d as ue,g as _e,b as me,e as ve}from"./gradeDetermination-7b5d8aec.js";import"./index-5f02ee64.js";import"./index-8e66d421.js";function fe(_){let n=_.split(","),f=n[0].match(/:(.*?);/)[1],e=atob(n[1]),h=e.length,D=new Uint8Array(h);for(;h--;)D[h]=e.charCodeAt(h);let x=Math.random().toString(36).slice(-8),m=f.split("/")[1];return new File([D],x+"."+m,{type:f})}const he={setup(){const _=A(),n=G(),f=i(""),e=i(""),h=i(""),D=i(""),x=i(""),m=i(""),y=i([]),S=i([]),g=i([]),J=i(!1),N=i(!1),j=i([]),c=Q({yjtJyInformationData:{},typeCodeList:[],alterReasonList:[]}),b=i(!1);c.yjtJyInformationData=JSON.parse(decodeURIComponent(n.query.yjtJyInformation));const L=i(JSON.parse(decodeURIComponent(n.query.exterior))),l=i(JSON.parse(decodeURIComponent(n.query.tabIndex)));Y.await("takePhoto",o=>{if(o!="null"){let s={};s.index=y.value.length+1,s.base64Img=o,y.value.push(s),S.value.push(o);let a=new FormData,d="/cathodeCopper/"+c.yjtJyInformationData.batchgroup+"/"+c.yjtJyInformationData.batchnumber;a.append("file",fe(o)),a.append("path",d),ue(a).then(k=>{let w={};w.fileName=k.data.fileName,w.fileUrl=k.data.fileUrl,w.index=y.value.length,g.value.push(w)}).catch(k=>{console.log(k)})}});const U=()=>{Y.takePhoto()},F=(o,s)=>{g.value=g.value.filter(a=>a.index!=o),y.value=y.value.filter(a=>a.index!=o),S.value=S.value.filter(a=>a!=s)},q=()=>{j.value=S.value,J.value=!0};L.value=="1"?(f.value="qualified",e.value="合格品类型"):L.value=="2"&&(f.value="unqualified",e.value="不合格品类型"),K(()=>{M(f.value),E()});const H=()=>{_.back()},Z=()=>{if(b.value=!0,g.value.length==0)return V({message:"请上传质检照片",type:"fail",overlay:!0,className:"particulars-detail-popup"}),b.value=!1,!1;if(l.value==1&&!D.value)return V({message:"请选择或者填写改判理由",type:"fail",overlay:!0,className:"particulars-detail-popup"}),b.value=!1,!1;W({duration:0,forbidClick:!0,className:"particulars-detail-popup",overlay:!0,message:"正在质检..."});let o={data:[],active:"",exterior:"",remarks:"",alterReason:"",typeCodeChecked:"",fileList:[],labelFileList:[]},s=[];s.push(c.yjtJyInformationData),o.data=s,o.typeCodeChecked=x.value,o.active=l.value,o.exterior=L.value,o.remarks=h.value,o.alterReason=D.value,o.fileList=g.value,ve(o).then(a=>{O(),a.data.code==200&&(V({message:"质检成功",type:"success",className:"particulars-detail-popup",overlay:!0}),b.value=!1,_.push({path:"/gradeDetermination",query:{barcode:c.yjtJyInformationData.barcode,tabState:"1"}}))}).catch(a=>{console.log(a),b.value=!1,O()})},M=o=>{let s={};s.typeCode=o,_e(s).then(a=>{a.data.code==200&&(c.typeCodeList=a.data.data,x.value=String(c.typeCodeList[0].id))}).catch(a=>{console.log(a)})},E=()=>{let o={},s={},a={};a.limit=9999,a.offset=1,a.blockId="paramBlock",a.data={},s.paramBlock=a,o.blocks=s,me(o).then(d=>{c.alterReasonList=d.data.blocks.resultBlock.data}).catch(d=>{console.log(d)})};return{imgList:j,showImage:J,showLabelImage:N,fileList:y,base64ImgList:S,imagePath:g,takePhotoState:m,alterReason:D,remarks:h,typeCode:f,typeCodeText:e,listData:c,exterior:L,tabIndex:l,typeCodeChecked:x,disabled:b,seeImg:q,takePhotoZJ:U,onClickLeft:H,dateFormat:(o,s)=>{let a,d=new Date(s);const k={"Y+":d.getFullYear().toString(),"m+":(d.getMonth()+1).toString(),"d+":d.getDate().toString(),"H+":d.getHours().toString(),"M+":d.getMinutes().toString(),"S+":d.getSeconds().toString()};for(let w in k)a=new RegExp("("+w+")").exec(o),a&&(o=o.replace(a[1],a[1].length==1?k[w]:k[w].padStart(a[1].length,"0")));return o},beforeDelete:F,conservation:Z,getTypeCodeData:M,getAlterReasonQuery:E}}},u=_=>(ie("data-v-d05b5414"),_=_(),re(),_),ye={class:"container"},ge={class:"header"},be={class:"content"},ke=u(()=>t("span",{style:{"font-weight":"bold"}},"编号：",-1)),we=u(()=>t("span",{style:{"font-weight":"bold"}},"重量：",-1)),Ce=u(()=>t("span",{style:{"font-weight":"bold"}},"标准：",-1)),Ie=u(()=>t("span",{style:{"font-weight":"bold"}},"计量员：",-1)),De=u(()=>t("span",{style:{"font-weight":"bold"}},"扫描人：",-1)),xe=u(()=>t("span",{style:{"font-weight":"bold"}},"生产日期：",-1)),Se=u(()=>t("span",{style:{color:"red"}},"*",-1)),Le=u(()=>t("span",{style:{color:"red"}},"*",-1)),Re={class:"van-uploader"},Je={class:"van-uploader__wrapper"},je={class:"van-image van-uploader__preview-image"},Fe=["src"],Ne=["onClick"],Ue=u(()=>t("i",{class:"van-badge__wrapper van-icon van-icon-cross van-uploader__preview-delete-icon"},null,-1)),Ve=[Ue],Be=u(()=>t("i",{class:"van-badge__wrapper van-icon van-icon-photograph van-uploader__upload-icon"},null,-1)),Pe=[Be],Me={key:0},Ee=u(()=>t("span",{style:{color:"red"}},"*",-1));function Ye(_,n,f,e,h,D){const x=X,m=ae,y=oe,S=le,g=ce,J=pe,N=ne,j=se,c=de,b=$,L=ee;return C(),R("div",ye,[t("div",ge,[r(x,{title:"品级质检",class:"page-nav-bar","left-arrow":"",onClickLeft:e.onClickLeft},null,8,["onClickLeft"])]),t("div",be,[r(c,{class:"box-card",shadow:"always"},{default:p(()=>[r(m,{"content-position":"left"},{default:p(()=>[I("基本信息")]),_:1}),t("div",null,[t("p",null,[ke,t("span",null,v(e.listData.yjtJyInformationData.batchnumber),1)]),t("p",null,[we,t("span",null,v(parseFloat(e.listData.yjtJyInformationData.suttle))+v(e.listData.yjtJyInformationData.unit),1)]),t("p",null,[Ce,t("span",null,v(e.listData.yjtJyInformationData.standard),1)]),t("p",null,[Ie,t("span",null,v(e.listData.yjtJyInformationData.suttleperson),1),I("      "),De,t("span",null,v(e.listData.yjtJyInformationData.scanUser),1)]),t("p",null,[xe,t("span",null,v(e.dateFormat("YYYY-mm-dd HH:MM:SS",e.listData.yjtJyInformationData.proDate)),1)])]),t("div",null,[r(m,{"content-position":"left"},{default:p(()=>[Se,I(v(e.typeCodeText),1)]),_:1}),r(S,{modelValue:e.typeCodeChecked,"onUpdate:modelValue":n[0]||(n[0]=l=>e.typeCodeChecked=l),direction:"horizontal"},{default:p(()=>[(C(!0),R(B,null,P(e.listData.typeCodeList,(l,U)=>(C(),T(y,{name:String(l.id)},{default:p(()=>[I(v(l.name),1)]),_:2},1032,["name"]))),256))]),_:1},8,["modelValue"])]),t("div",null,[r(m,{"content-position":"left"},{default:p(()=>[Le,I(" 质检照片")]),_:1}),t("div",Re,[t("div",Je,[(C(!0),R(B,null,P(e.fileList,(l,U)=>(C(),R("div",{class:"van-uploader__preview",key:l.index},[t("div",je,[t("img",{class:"van-image__img",src:l.base64Img,style:{"object-fit":"cover"},onClick:n[1]||(n[1]=(...F)=>e.seeImg&&e.seeImg(...F))},null,8,Fe)]),t("div",{role:"button",class:"van-uploader__preview-delete van-uploader__preview-delete--shadow",tabindex:"0","aria-label":"删除",onClick:F=>e.beforeDelete(l.index,l.base64Img)},Ve,8,Ne)]))),128)),t("div",{class:"van-uploader__upload",onClick:n[2]||(n[2]=(...l)=>e.takePhotoZJ&&e.takePhotoZJ(...l))},Pe)])])]),e.tabIndex==1?(C(),R("div",Me,[r(m,{"content-position":"left"},{default:p(()=>[Ee,I("改判理由")]),_:1}),r(J,{modelValue:e.alterReason,"onUpdate:modelValue":n[3]||(n[3]=l=>e.alterReason=l),filterable:"",clearable:"","allow-create":"",placeholder:"改判理由",style:{width:"100%"}},{default:p(()=>[(C(!0),R(B,null,P(e.listData.alterReasonList,l=>(C(),T(g,{key:l.alterReason,label:l.alterReason,value:l.alterReason},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])):te("",!0),t("div",null,[r(m,{"content-position":"left"},{default:p(()=>[I("备注")]),_:1}),r(j,{inset:""},{default:p(()=>[r(N,{modelValue:e.remarks,"onUpdate:modelValue":n[4]||(n[4]=l=>e.remarks=l),rows:"1",autosize:"",label:"备注",type:"textarea",placeholder:"请输入备注"},null,8,["modelValue"])]),_:1})])]),_:1}),r(b,{type:"primary",size:"large",disabled:e.disabled,style:{width:"80%",position:"absolute",left:"10%","margin-top":"15px","background-color":"#003363",color:"#FFFFFF"},onClick:e.conservation},{default:p(()=>[I("提交 ")]),_:1},8,["disabled","onClick"]),r(L,{show:e.showImage,"onUpdate:show":n[5]||(n[5]=l=>e.showImage=l),images:e.imgList,closeable:!0,loop:!1,closeOnPopstate:!0},null,8,["show","images"])])])}const $e=z(he,[["render",Ye],["__scopeId","data-v-d05b5414"]]);export{$e as default};
