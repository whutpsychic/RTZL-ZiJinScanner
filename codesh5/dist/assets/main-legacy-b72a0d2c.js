System.register(["./el-tag-legacy-3c9cedb4.js","./el-overlay-legacy-aaac20d6.js","./index-legacy-d432f125.js","./index-legacy-5039dca1.js","./el-card-legacy-318bb744.js","./index-legacy-2f76a666.js","./qualityCheckingRecord-legacy-bb582ebe.js","./el-select-legacy-ca49c0db.js","./el-popper-legacy-cb65354b.js","./index-legacy-eda59a38.js","./gradeDetermination-legacy-b90226aa.js","./function-call-legacy-f9562467.js","./index-legacy-1388c7cd.js","./use-global-config-legacy-27224871.js","./objects-legacy-241eae9f.js","./index-legacy-3f3b008e.js"],(function(t,a){"use strict";var e,l,n,i,o,s,d,r,u,y,c,p,m,f,D,g,h,b,j,I,v,J,k,w,x,C,_,L,S,Y,V,H,F,z,M,N,U,A,R,B,E;return{setters:[null,t=>{e=t.E},t=>{l=t.a7,n=t.a8,i=t._,o=t.u,s=t.r,d=t.I,r=t.o,u=t.f,y=t.c,c=t.d,p=t.k,m=t.e,f=t.w,D=t.F,g=t.J,h=t.N,b=t.a9,j=t.aa,I=t.O,v=t.g,J=t.l,k=t.W,w=t.h,x=t.ab,C=t.ac,_=t.$,L=t.a0,S=t.a2,Y=t.V,V=t.a1,H=t.Z,F=t.S,z=t.p,M=t.j},null,t=>{N=t.E},null,t=>{U=t.q},t=>{A=t.a,R=t.E},null,null,t=>{B=t.f},t=>{E=t.s},null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent=".header[data-v-9d9bddc6]{width:100%;height:110px;line-height:110px;position:absolute;z-index:5;top:0}.content[data-v-9d9bddc6]{width:100%;overflow:scroll;top:110px;position:absolute;z-index:10;bottom:5px}\n",document.head.appendChild(a);const P={setup(){const t=o(),a=s(""),e=s(!1),i=s(""),y=s(""),c=s(!1),p=d({auditorListData:[],yjtJyInformationDetails:{},yjtJyInformationFileList:[],yjtJyInformationDecideData:{},filePathList:[]}),m=s(!1),f=s(!1),D=s(!1),h=s("0"),b=s(10),j=s(0);r((()=>{u.register("goback",(()=>{m.value?m.value=!1:t.push({path:"/home"})})),j.value=1,I({batchnumber:a.value,status:h.value})}));const I=t=>{f.value=!0;let a={},e={},i={};var o;i.limit=b.value,i.offset=j.value,i.blockId="paramBlock",i.data=t,e.paramBlock=i,a.blocks=e,(o=a,l({url:`${n.api_base_url}/mobileTerminalApi.do?method=auditorDataQuery`,method:"post",data:o})).then((t=>{p.auditorListData=[...p.auditorListData,...t.data.blocks.resultBlock.data],f.value=!1,p.auditorListData.length==t.data.blocks.resultBlock.total&&(D.value=!0);let a=document.body.scrollHeight-180;y.value="height:"+a+"px"})).catch((t=>{console.log(t)}))},v=t=>{let a={};a.yjtJyInformationDetailsId=t,B(a).then((t=>{p.yjtJyInformationFileList=t.data.data})).catch((t=>{console.log(t)}))},J=t=>{U(t).then((t=>{let a={},e=p.yjtJyInformationDetails.status;a="0"==e||"1"==e?t.data.data[0]:t.data.data[1],p.yjtJyInformationDecideData=a,m.value=!0})).catch((t=>{console.log(t)}))};return{elDialogHeight:y,state:c,listData:p,showImage:e,auditorContent:i,centerDialogVisible:m,searchValue:a,loading:f,finished:D,limit:b,offset:j,status:h,options:[{value:"0",label:"未审核"},{value:"1",label:"驳回"},{value:"2",label:"审核通过"}],listData:p,onClickLeft:()=>{t.back()},onLoad:()=>{j.value=j.value+1,I({batchnumber:a.value,status:h.value})},getFileQuery:v,getAuditorDataQuery:I,statusChange:t=>{p.auditorListData=[],j.value=1,D.value=!1,I({batchnumber:t,status:h.value})},dateFormat:(t,a)=>{let e,l=new Date(a);const n={"Y+":l.getFullYear().toString(),"m+":(l.getMonth()+1).toString(),"d+":l.getDate().toString(),"H+":l.getHours().toString(),"M+":l.getMinutes().toString(),"S+":l.getSeconds().toString()};for(let i in n)e=new RegExp("("+i+")").exec(t),e&&(t=t.replace(e[1],1==e[1].length?n[i]:n[i].padStart(e[1].length,"0")));return t},onSearch:t=>{p.auditorListData=[],j.value=1,D.value=!1,I({batchnumber:t,status:h.value})},auditingDetails:t=>{let a={yjtJyInformationId:t.yjtJyInformationId,status:"2"};J(a),p.yjtJyInformationDetails=t,"0"!=p.yjtJyInformationDetails.exterior&&v(p.yjtJyInformationDetails.yjtJyInformationDetailsId)},seeImg:t=>{p.filePathList=[],p.filePathList=t,e.value=!0},cathodeCopperAuditorClick:t=>{if(""==i.value)return g({message:"请填写审核内容",type:"fail",overlay:!0,className:"particulars-detail-popup"}),!1;let e={},o={},s={},d={};e.id=p.yjtJyInformationDetails.id,e.yjtJyInformationId=p.yjtJyInformationDetails.yjtJyInformationId,e.yjtJyInformationDetailsId=p.yjtJyInformationDetails.yjtJyInformationDetailsId,e.auditorContent=i.value,e.status=t,d.data=e,s.paramBlock=d,o.blocks=s;let r="";r="1"==t?"驳回":"通过",E({title:"提示",width:"600",allowHtml:!0,message:'<span style="font-size: 18px">是否'+r+"这条数据？</span>"}).then((()=>{var t;(t=o,l({url:`${n.api_base_url}/mobileTerminalApi.do?method=cathodeCopperAuditor`,method:"post",data:t})).then((t=>{"0"==t.data.status&&(g({message:t.data.returnMsg,type:"success",className:"particulars-detail-popup",overlay:!0}),p.auditorListData=[],m.value=!1,I({batchnumber:a.value,status:h.value}))})).catch((t=>{console.log(t)}))})).catch((t=>{console.log(t)}))},getQualityCheckingRecordDecide:J}}},Q=t=>(z("data-v-9d9bddc6"),t=t(),M(),t),q={class:"header"},$={style:{display:"flex","background-color":"#ffffff"}},O={class:"content"},T={style:{padding:"0px 5px 5px 5px"}},W=Q((()=>p("span",{style:{"font-weight":"bold"}},"编号：",-1))),Z=Q((()=>p("span",{style:{"font-weight":"bold"}},"重量：",-1))),G=Q((()=>p("span",{style:{"font-weight":"bold"}},"标准：",-1))),K=Q((()=>p("span",{style:{"font-weight":"bold"}},"品级分类：",-1))),X={key:0,style:{"font-weight":"bold"}},tt={style:{color:"#bbbbbb"}},at={style:{float:"right",color:"#bbbbbb"}},et=Q((()=>p("span",{style:{"font-weight":"bold"}},"编号：",-1))),lt=Q((()=>p("span",{style:{"font-weight":"bold"}},"重量：",-1))),nt=Q((()=>p("span",{style:{"font-weight":"bold"}},"标准：",-1))),it=Q((()=>p("span",{style:{"font-weight":"bold"}},"计量员：",-1))),ot=Q((()=>p("span",{style:{"font-weight":"bold"}},"扫描人：",-1))),st=Q((()=>p("span",{style:{"font-weight":"bold"}},"生产日期：",-1))),dt=Q((()=>p("span",{style:{"font-weight":"bold"}},"品级分类：",-1))),rt={key:3,style:{"font-weight":"bold"}},ut=Q((()=>p("span",{style:{"font-weight":"bold"}},"质检时间：",-1))),yt=Q((()=>p("span",{style:{"font-weight":"bold"}},"质检人：",-1))),ct={key:0},pt=Q((()=>p("span",{style:{"font-weight":"bold"}},"改判理由：",-1))),mt={key:1},ft=Q((()=>p("span",{style:{"font-weight":"bold"}},"备注：",-1))),Dt={key:2},gt=Q((()=>p("span",{style:{"font-weight":"bold"}},"品级分类：",-1))),ht={key:3,style:{"font-weight":"bold"}},bt=Q((()=>p("span",{style:{"font-weight":"bold"}},"质检时间：",-1))),jt=Q((()=>p("span",{style:{"font-weight":"bold"}},"质检人：",-1))),It=Q((()=>p("span",{style:{"font-weight":"bold"}},"改判理由：",-1))),vt={key:0},Jt=Q((()=>p("span",{style:{"font-weight":"bold"}},"备注：",-1))),kt={key:0,style:{"margin-top":"15px"}},wt=Q((()=>p("span",{style:{"font-weight":"bold"}},"状态：",-1))),xt=Q((()=>p("span",{style:{"font-weight":"bold"}},"审核人：",-1))),Ct=Q((()=>p("span",{style:{"font-weight":"bold"}},"审核时间：",-1))),_t=Q((()=>p("span",{style:{"font-weight":"bold"}},"审核内容：",-1))),Lt={key:1},St={key:0,style:{"margin-top":"30px"}};t("default",i(P,[["render",function(t,a,l,n,i,o){const s=h,d=b,r=R,u=A,g=C,z=_,M=N,U=j,B=L,E=S,P=Y,Q=V,Yt=H,Vt=F,Ht=e;return y(),c(D,null,[p("div",q,[m(s,{title:"审核列表",class:"page-nav-bar","left-arrow":"",onClickLeft:n.onClickLeft},null,8,["onClickLeft"]),p("div",$,[m(d,{style:{width:"68%"},modelValue:n.searchValue,"onUpdate:modelValue":a[0]||(a[0]=t=>n.searchValue=t),shape:"round",placeholder:"请输入编号搜索",onSearch:n.onSearch},null,8,["modelValue","onSearch"]),m(u,{modelValue:n.status,"onUpdate:modelValue":a[1]||(a[1]=t=>n.status=t),clearable:"",placeholder:"状态",style:{width:"31%",float:"right","margin-top":"0.8rem"},onChange:n.statusChange},{default:f((()=>[(y(!0),c(D,null,I(n.options,(t=>(y(),v(r,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])])]),p("div",O,[m(U,{loading:n.loading,"onUpdate:loading":a[2]||(a[2]=t=>n.loading=t),"immediate-check":!1,finished:n.finished,"finished-text":"没有更多了",onLoad:n.onLoad},{default:f((()=>[p("div",T,[(y(!0),c(D,null,I(n.listData.auditorListData,((t,a)=>(y(),v(M,{class:"box-card",shadow:"always",style:{"margin-top":"5px"},onClick:a=>n.auditingDetails(t)},{default:f((()=>[p("div",null,[p("p",null,[W,p("span",null,J(t.batchnumber),1)]),p("p",null,[Z,p("span",null,J(parseFloat(t.suttle))+J(t.unit),1)]),p("p",null,[G,p("span",null,J(t.standard),1)]),p("p",null,[K,p("span",null,J(t.exteriorName),1),k("    "),"0"!=t.exterior?(y(),c("span",X,"类型：")):w("",!0),p("span",null,J(t.dictName),1)]),p("p",null,["0"==t.status?(y(),v(g,{key:0,type:"primary",size:"large"},{default:f((()=>[k("未审核")])),_:1})):w("",!0),"1"==t.status?(y(),v(g,{key:1,type:"danger",size:"large"},{default:f((()=>[k("驳回")])),_:1})):w("",!0),"2"==t.status?(y(),v(g,{key:2,type:"success",size:"large"},{default:f((()=>[k("审核通过")])),_:1})):w("",!0)]),m(z,{style:{color:"#c8c8c8"}}),p("span",tt,J(n.dateFormat("YYYY-mm-dd HH:MM:SS",t.checkoutDate)),1),p("span",at,J(t.checkoutUser),1)])])),_:2},1032,["onClick"])))),256))])])),_:1},8,["loading","finished","onLoad"])]),m(Ht,{modelValue:n.centerDialogVisible,"onUpdate:modelValue":a[9]||(a[9]=t=>n.centerDialogVisible=t),"destroy-on-close":!0,title:"审核详情",width:"96%","align-center":""},{default:f((()=>[p("div",{style:x([{padding:"15px","overflow-y":"auto","overscroll-behavior-y":"contain"},n.elDialogHeight])},[p("div",null,[p("div",null,[m(z,{"content-position":"left"},{default:f((()=>[k("基本信息")])),_:1}),p("p",null,[et,p("span",null,J(n.listData.yjtJyInformationDetails.batchnumber),1)]),p("p",null,[lt,p("span",null,J(parseFloat(n.listData.yjtJyInformationDetails.suttle))+J(n.listData.yjtJyInformationDetails.unit),1)]),p("p",null,[nt,p("span",null,J(n.listData.yjtJyInformationDetails.standard),1)]),p("p",null,[it,p("span",null,J(n.listData.yjtJyInformationDetails.suttleperson),1),k("     "),ot,p("span",null,J(n.listData.yjtJyInformationDetails.scanUser),1)]),p("p",null,[st,p("span",null,J(n.dateFormat("YYYY-mm-dd HH:MM:SS",n.listData.yjtJyInformationDetails.proDate)),1)])]),p("div",null,[m(z,{"content-position":"left"},{default:f((()=>[k("历史质检信息")])),_:1}),p("div",null,[p("p",null,[dt,"优等品"==n.listData.yjtJyInformationDecideData.details.exteriorName?(y(),v(g,{key:0,type:"primary",size:"medium"},{default:f((()=>[k("优等品 ")])),_:1})):w("",!0),"合格"==n.listData.yjtJyInformationDecideData.details.exteriorName?(y(),v(g,{key:1,type:"warning",size:"medium"},{default:f((()=>[k("合格 ")])),_:1})):w("",!0),"不合格"==n.listData.yjtJyInformationDecideData.details.exteriorName?(y(),v(g,{key:2,type:"danger",size:"medium"},{default:f((()=>[k("不合格 ")])),_:1})):w("",!0),k("      "),"0"!=n.listData.yjtJyInformationDecideData.details.exterior?(y(),c("span",rt,"类型：")):w("",!0),p("span",null,J(n.listData.yjtJyInformationDecideData.details.dictName),1)]),p("p",null,[ut,p("span",null,J(n.dateFormat("YYYY-mm-dd HH:MM:SS",n.listData.yjtJyInformationDecideData.details.checkoutDate)),1)]),p("p",null,[yt,p("span",null,J(n.listData.yjtJyInformationDecideData.details.checkoutUser),1)]),n.listData.yjtJyInformationDecideData.details.alterReason?(y(),c("p",ct,[pt,p("span",null,J(n.listData.yjtJyInformationDecideData.details.alterReason),1)])):w("",!0),n.listData.yjtJyInformationDecideData.details.remarks?(y(),c("p",mt,[ft,p("span",null,J(n.listData.yjtJyInformationDecideData.details.remarks),1)])):w("",!0),"0"!=n.listData.yjtJyInformationDecideData.details.exterior?(y(),c("div",Dt,[(y(!0),c(D,null,I(n.listData.yjtJyInformationDecideData.fileList,((t,e)=>(y(),v(B,{style:{margin:"0 2%"},onClick:a[3]||(a[3]=t=>n.seeImg(n.listData.yjtJyInformationDecideData.fileList)),width:"45%",height:"8rem",fit:"cover",position:"left",src:t},null,8,["src"])))),256))])):w("",!0)])]),p("div",null,[m(z,{"content-position":"left"},{default:f((()=>[k("审核的质检信息")])),_:1}),p("p",null,[gt,"优等品"==n.listData.yjtJyInformationDetails.exteriorName?(y(),v(g,{key:0,type:"primary",size:"medium"},{default:f((()=>[k("优等品 ")])),_:1})):w("",!0),"合格"==n.listData.yjtJyInformationDetails.exteriorName?(y(),v(g,{key:1,type:"warning",size:"medium"},{default:f((()=>[k("合格 ")])),_:1})):w("",!0),"不合格"==n.listData.yjtJyInformationDetails.exteriorName?(y(),v(g,{key:2,type:"danger",size:"medium"},{default:f((()=>[k("不合格 ")])),_:1})):w("",!0),k("    "),"0"!=n.listData.yjtJyInformationDetails.exterior?(y(),c("span",ht,"类型：")):w("",!0),p("span",null,J(n.listData.yjtJyInformationDetails.dictName),1)]),p("p",null,[bt,p("span",null,J(n.dateFormat("YYYY-mm-dd HH:MM:SS",n.listData.yjtJyInformationDetails.checkoutDate)),1)]),p("p",null,[jt,p("span",null,J(n.listData.yjtJyInformationDetails.checkoutUser),1)]),p("p",null,[It,p("span",null,J(n.listData.yjtJyInformationDetails.alterReason),1)]),n.listData.yjtJyInformationDetails.remarks?(y(),c("p",vt,[Jt,p("span",null,J(n.listData.yjtJyInformationDetails.remarks),1)])):w("",!0)]),"0"!=n.listData.yjtJyInformationDetails.status?(y(),c("div",kt,[p("p",null,[wt,p("span",null,J("0"===n.listData.yjtJyInformationDetails.status?"未审核":"1"===n.listData.yjtJyInformationDetails.status?"驳回":"通过"),1),k("     "),xt,p("span",null,J(n.listData.yjtJyInformationDetails.auditorUserName),1)]),p("p",null,[Ct,p("span",null,J(n.dateFormat("YYYY-mm-dd HH:MM:SS",n.listData.yjtJyInformationDetails.auditorDate)),1)]),p("p",null,[_t,p("span",null,J(n.listData.yjtJyInformationDetails.auditorContent),1)])])):w("",!0),"0"!=n.listData.yjtJyInformationDetails.exterior?(y(),c("div",Lt,[(y(!0),c(D,null,I(n.listData.yjtJyInformationFileList,((t,e)=>(y(),v(B,{style:{margin:"0 2%"},onClick:a[4]||(a[4]=t=>n.seeImg(n.listData.yjtJyInformationFileList)),width:"45%",height:"8rem",fit:"cover",position:"left",src:t},null,8,["src"])))),256))])):w("",!0),"0"==n.listData.yjtJyInformationDetails.status?(y(),v(E,{key:2,modelValue:n.auditorContent,"onUpdate:modelValue":a[5]||(a[5]=t=>n.auditorContent=t),rows:"5",autosize:"",label:"审核内容",type:"textarea",maxlength:"50",placeholder:"请输入审核内容","show-word-limit":""},null,8,["modelValue"])):w("",!0)]),m(P,{show:n.showImage,"onUpdate:show":a[6]||(a[6]=t=>n.showImage=t),images:n.listData.filePathList,closeable:!0,loop:!1,closeOnPopstate:!0},null,8,["show","images"]),"0"==n.listData.yjtJyInformationDetails.status?(y(),c("div",St,[m(Vt,null,{default:f((()=>[m(Q,{span:"2"}),m(Q,{span:"10"},{default:f((()=>[m(Yt,{icon:"close",type:"danger",style:{width:"90%"},onClick:a[7]||(a[7]=t=>n.cathodeCopperAuditorClick("1"))},{default:f((()=>[k("驳回 ")])),_:1})])),_:1}),m(Q,{span:"10"},{default:f((()=>[m(Yt,{icon:"passed",type:"success",style:{width:"90%"},onClick:a[8]||(a[8]=t=>n.cathodeCopperAuditorClick("2"))},{default:f((()=>[k("通过 ")])),_:1})])),_:1}),m(Q,{span:"2"})])),_:1})])):w("",!0)],4)])),_:1},8,["modelValue"])],64)}],["__scopeId","data-v-9d9bddc6"]]))}}}));