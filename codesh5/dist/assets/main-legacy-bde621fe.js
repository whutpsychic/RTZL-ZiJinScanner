System.register(["./index-legacy-0cf7cbfd.js","./el-overlay-legacy-899cb864.js","./index-legacy-0d5e818d.js","./index-legacy-5039dca1.js","./el-card-legacy-0431da63.js","./index-legacy-d8cde682.js","./el-select-legacy-c5886c40.js","./el-popper-legacy-a84e047b.js","./index-legacy-eda59a38.js","./gradeDetermination-legacy-e66ef2bc.js","./function-call-legacy-d3e2b577.js"],(function(t,a){"use strict";var e,l,o,n,s,i,d,u,r,c,y,p,f,m,h,g,D,b,v,I,j,w,k,J,x,C,S,_,L,Y,V,F,H,M,U,N,A,B;return{setters:[null,t=>{e=t.E},t=>{l=t.a6,o=t.a7,n=t._,s=t.u,i=t.r,d=t.J,u=t.b,r=t.c,c=t.j,y=t.d,p=t.w,f=t.F,m=t.s,h=t.N,g=t.a8,D=t.a9,b=t.O,v=t.e,I=t.k,j=t.U,w=t.g,k=t.aa,J=t.ab,x=t.Y,C=t.Z,S=t.a0,_=t.S,L=t.$,Y=t.X,V=t.R,F=t.p,H=t.i},null,t=>{M=t.E},null,t=>{U=t.a,N=t.E},null,null,t=>{A=t.f},t=>{B=t.a}],execute:function(){var a=document.createElement("style");a.textContent=".header[data-v-1d8c30d6]{width:100%;height:95px;line-height:95px;position:absolute;z-index:5;top:0}.content[data-v-1d8c30d6]{width:100%;overflow:scroll;top:95px;position:absolute;z-index:10;bottom:5px}\n",document.head.appendChild(a);const E={setup(){const t=s(),a=i(""),e=i(!1),n=i(""),u=i(""),r=i(!1),c=d({auditorListData:[],yjtJyInformationDetails:{},yjtJyInformationFileList:[]}),y=i(!1),p=i(!1),f=i(!1),h=i("0"),g=i(10),D=i(0);function b(t){let a={},e={},n={};var s;n.limit=g.value,n.offset=D.value,n.blockId="paramBlock",n.data=t,e.paramBlock=n,a.blocks=e,(s=a,l({url:`${o.api_base_url}/mobileTerminalApi.do?method=auditorDataQuery`,method:"post",data:s})).then((t=>{c.auditorListData=[...c.auditorListData,...t.data.blocks.resultBlock.data],p.value=!1,c.auditorListData.length==t.data.blocks.resultBlock.total&&(f.value=!0);let a=document.body.scrollHeight-180;u.value="height:"+a+"px"})).catch((t=>{console.log(t)}))}return{elDialogHeight:u,state:r,listData:c,showImage:e,auditorContent:n,centerDialogVisible:y,searchValue:a,loading:p,finished:f,limit:g,offset:D,status:h,options:[{value:"0",label:"未审核"},{value:"1",label:"驳回"},{value:"2",label:"审核通过"}],listData:c,onClickLeft:()=>{t.push({path:"/home"})},onLoad:()=>{D.value=D.value+1,b({batchnumber:a.value,status:h.value})},statusChange:t=>{D.value=1,c.auditorListData=[],f.value=!1,b({batchnumber:t,status:h.value})},dateFormat:(t,a)=>{let e,l=new Date(a);const o={"Y+":l.getFullYear().toString(),"m+":(l.getMonth()+1).toString(),"d+":l.getDate().toString(),"H+":l.getHours().toString(),"M+":l.getMinutes().toString(),"S+":l.getSeconds().toString()};for(let n in o)e=new RegExp("("+n+")").exec(t),e&&(t=t.replace(e[1],1==e[1].length?o[n]:o[n].padStart(e[1].length,"0")));return t},onSearch:t=>{D.value=1,c.auditorListData=[],f.value=!1,b({batchnumber:t,status:h.value})},auditingDetails:t=>{c.yjtJyInformationDetails=t,y.value=!0,"0"!=c.yjtJyInformationDetails.exterior&&function(t){let a={};a.yjtJyInformationDetailsId=t,A(a).then((t=>{c.yjtJyInformationFileList=t.data.data})).catch((t=>{console.log(t)}))}(c.yjtJyInformationDetails.yjtJyInformationDetailsId)},seeImg:()=>{e.value=!0},cathodeCopperAuditorClick:t=>{if(""==n.value)return m({message:"请填写审核内容",type:"fail",className:"particulars-detail-popup"}),!1;let e={},s={},i={},d={};e.id=c.yjtJyInformationDetails.id,e.yjtJyInformationId=c.yjtJyInformationDetails.yjtJyInformationId,e.yjtJyInformationDetailsId=c.yjtJyInformationDetails.yjtJyInformationDetailsId,e.auditorContent=n.value,e.status=t,d.data=e,i.paramBlock=d,s.blocks=i;let u="";u="1"==t?"驳回":"通过",B({title:"提示",width:"600",message:"是否"+u+"这条数据？"}).then((()=>{var t;(t=s,l({url:`${o.api_base_url}/mobileTerminalApi.do?method=cathodeCopperAuditor`,method:"post",data:t})).then((t=>{"0"==t.data.status&&(m({message:t.data.returnMsg,type:"success",className:"particulars-detail-popup",overlay:!0}),c.auditorListData=[],y.value=!1,b({batchnumber:a.value,status:h.value}))})).catch((t=>{console.log(t)}))})).catch((t=>{console.log(t)}))}}}},z=t=>(F("data-v-1d8c30d6"),t=t(),H(),t),R={class:"header"},$={style:{display:"flex","background-color":"#ffffff"}},O={class:"content"},T={style:{padding:"0px 5px 5px 5px"}},P=z((()=>c("span",{style:{"font-weight":"bold"}},"编号：",-1))),Q=z((()=>c("span",{style:{"font-weight":"bold"}},"重量：",-1))),X=z((()=>c("span",{style:{"font-weight":"bold"}},"标准：",-1))),Z=z((()=>c("span",{style:{"font-weight":"bold"}},"品级分类：",-1))),q={key:0,style:{"font-weight":"bold"}},G={style:{color:"#bbbbbb"}},K={style:{float:"right",color:"#bbbbbb"}},W=z((()=>c("span",{style:{"font-weight":"bold"}},"编号：",-1))),tt=z((()=>c("span",{style:{"font-weight":"bold"}},"重量：",-1))),at=z((()=>c("span",{style:{"font-weight":"bold"}},"标准：",-1))),et=z((()=>c("span",{style:{"font-weight":"bold"}},"计量员：",-1))),lt=z((()=>c("span",{style:{"font-weight":"bold"}},"扫描人：",-1))),ot=z((()=>c("span",{style:{"font-weight":"bold"}},"生产日期：",-1))),nt=z((()=>c("span",{style:{"font-weight":"bold"}},"品级分类：",-1))),st={key:0,style:{"font-weight":"bold"}},it=z((()=>c("span",{style:{"font-weight":"bold"}},"质检时间：",-1))),dt=z((()=>c("span",{style:{"font-weight":"bold"}},"质检人：",-1))),ut=z((()=>c("span",{style:{"font-weight":"bold"}},"改判理由：",-1))),rt={key:0},ct={key:2},yt=z((()=>c("span",{style:{"font-weight":"bold"}},"状态：",-1))),pt=z((()=>c("span",{style:{"font-weight":"bold"}},"审核人：",-1))),ft=z((()=>c("span",{style:{"font-weight":"bold"}},"审核时间：",-1))),mt=z((()=>c("span",{style:{"font-weight":"bold"}},"审核内容：",-1))),ht={key:0,style:{"margin-top":"30px"}};t("default",n(E,[["render",function(t,a,l,o,n,s){const i=h,d=g,m=N,F=U,H=J,A=x,B=M,E=D,z=C,gt=S,Dt=_,bt=L,vt=Y,It=V,jt=e;return u(),r(f,null,[c("div",R,[y(i,{title:"审核列表",class:"page-nav-bar","left-arrow":"",onClickLeft:o.onClickLeft},null,8,["onClickLeft"]),c("div",$,[y(d,{style:{width:"68%"},modelValue:o.searchValue,"onUpdate:modelValue":a[0]||(a[0]=t=>o.searchValue=t),shape:"round",placeholder:"请输入编号搜索",onSearch:o.onSearch},null,8,["modelValue","onSearch"]),y(F,{modelValue:o.status,"onUpdate:modelValue":a[1]||(a[1]=t=>o.status=t),clearable:"",placeholder:"状态",style:{width:"31%",float:"right","margin-top":"0.8rem"},onChange:o.statusChange},{default:p((()=>[(u(!0),r(f,null,b(o.options,(t=>(u(),v(m,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])])]),c("div",O,[y(E,{loading:o.loading,"onUpdate:loading":a[2]||(a[2]=t=>o.loading=t),finished:o.finished,offset:"50","finished-text":"没有更多了",onLoad:o.onLoad},{default:p((()=>[c("div",T,[(u(!0),r(f,null,b(o.listData.auditorListData,((t,a)=>(u(),v(B,{class:"box-card",shadow:"always",style:{"margin-top":"5px"},onClick:a=>o.auditingDetails(t)},{default:p((()=>[c("div",null,[c("p",null,[P,c("span",null,I(t.batchnumber),1)]),c("p",null,[Q,c("span",null,I(parseFloat(t.suttle))+I(t.unit),1)]),c("p",null,[X,c("span",null,I(t.standard),1)]),c("p",null,[Z,c("span",null,I(t.exteriorName),1),j("     "),"0"!=t.exterior?(u(),r("span",q,"类型：")):w("",!0),c("span",null,I(t.dictName),1)]),c("p",null,["0"==t.status?(u(),v(H,{key:0,type:"primary"},{default:p((()=>[j("未审核")])),_:1})):w("",!0),"1"==t.status?(u(),v(H,{key:1,type:"danger"},{default:p((()=>[j("驳回")])),_:1})):w("",!0),"2"==t.status?(u(),v(H,{key:2,type:"success"},{default:p((()=>[j("审核通过")])),_:1})):w("",!0)]),y(A,{style:{color:"#c8c8c8"}}),c("span",G,I(o.dateFormat("YYYY-mm-dd HH:MM:SS",t.checkoutDate)),1),c("span",K,I(t.checkoutUser),1)])])),_:2},1032,["onClick"])))),256))])])),_:1},8,["loading","finished","onLoad"])]),y(jt,{modelValue:o.centerDialogVisible,"onUpdate:modelValue":a[7]||(a[7]=t=>o.centerDialogVisible=t),"destroy-on-close":!0,title:"审核详情",width:"96%","align-center":""},{default:p((()=>[c("div",{style:k([{"overflow-y":"auto","overscroll-behavior-y":"contain"},o.elDialogHeight])},[c("div",null,[y(A,{"content-position":"left"},{default:p((()=>[j("基本信息")])),_:1}),c("div",null,[c("p",null,[W,c("span",null,I(o.listData.yjtJyInformationDetails.batchnumber),1)]),c("p",null,[tt,c("span",null,I(parseFloat(o.listData.yjtJyInformationDetails.suttle))+I(o.listData.yjtJyInformationDetails.unit),1)]),c("p",null,[at,c("span",null,I(o.listData.yjtJyInformationDetails.standard),1)]),c("p",null,[et,c("span",null,I(o.listData.yjtJyInformationDetails.suttleperson),1),j("     "),lt,c("span",null,I(o.listData.yjtJyInformationDetails.scanUser),1)]),c("p",null,[ot,j(I(o.dateFormat("YYYY-mm-dd HH:MM:SS",o.listData.yjtJyInformationDetails.proDate)),1)])]),y(A,{"content-position":"left"},{default:p((()=>[j("质检信息")])),_:1}),c("div",null,[c("p",null,[nt,c("span",null,I(o.listData.yjtJyInformationDetails.exteriorName),1),j("     "),"0"!=o.listData.yjtJyInformationDetails.exterior?(u(),r("span",st,"类型：")):w("",!0),c("span",null,I(o.listData.yjtJyInformationDetails.dictName),1)]),c("p",null,[it,j(I(o.dateFormat("YYYY-mm-dd HH:MM:SS",o.listData.yjtJyInformationDetails.checkoutDate)),1)]),c("p",null,[dt,c("span",null,I(o.listData.yjtJyInformationDetails.checkoutUser),1)]),c("p",null,[ut,c("span",null,I(o.listData.yjtJyInformationDetails.alterReason),1)])]),"0"!=o.listData.yjtJyInformationDetails.exterior?(u(),r("div",rt,[(u(!0),r(f,null,b(o.listData.yjtJyInformationFileList,((t,a)=>(u(),v(z,{style:{margin:"0 2%"},onClick:o.seeImg,width:"45%",height:"8rem",fit:"cover",position:"left",src:t},null,8,["onClick","src"])))),256))])):w("",!0),"0"==o.listData.yjtJyInformationDetails.status?(u(),v(gt,{key:1,modelValue:o.auditorContent,"onUpdate:modelValue":a[3]||(a[3]=t=>o.auditorContent=t),rows:"5",autosize:"",label:"审核内容",type:"textarea",maxlength:"50",placeholder:"请输入审核内容","show-word-limit":""},null,8,["modelValue"])):w("",!0),"0"!=o.listData.yjtJyInformationDetails.status?(u(),r("div",ct,[y(A,{"content-position":"left"},{default:p((()=>[j("审核信息")])),_:1}),c("p",null,[yt,c("span",null,I("0"===o.listData.yjtJyInformationDetails.status?"未审核":"1"===o.listData.yjtJyInformationDetails.status?"驳回":"通过"),1),j("     "),pt,c("span",null,I(o.listData.yjtJyInformationDetails.auditorUserName),1)]),c("p",null,[ft,j(I(o.dateFormat("YYYY-mm-dd HH:MM:SS",o.listData.yjtJyInformationDetails.auditorDate)),1)]),c("p",null,[mt,c("span",null,I(o.listData.yjtJyInformationDetails.auditorContent),1)])])):w("",!0)]),y(Dt,{show:o.showImage,"onUpdate:show":a[4]||(a[4]=t=>o.showImage=t),images:o.listData.yjtJyInformationFileList,closeable:!0,loop:!1,closeOnPopstate:!0},null,8,["show","images"]),"0"==o.listData.yjtJyInformationDetails.status?(u(),r("div",ht,[y(It,null,{default:p((()=>[y(bt,{span:"2"}),y(bt,{span:"10"},{default:p((()=>[y(vt,{icon:"close",type:"danger",style:{width:"90%"},onClick:a[5]||(a[5]=t=>o.cathodeCopperAuditorClick("1"))},{default:p((()=>[j("驳回 ")])),_:1})])),_:1}),y(bt,{span:"10"},{default:p((()=>[y(vt,{icon:"passed",type:"success",style:{width:"90%"},onClick:a[6]||(a[6]=t=>o.cathodeCopperAuditorClick("2"))},{default:p((()=>[j("通过 ")])),_:1})])),_:1}),y(bt,{span:"2"})])),_:1})])):w("",!0)],4)])),_:1},8,["modelValue"])],64)}],["__scopeId","data-v-1d8c30d6"]]))}}}));
