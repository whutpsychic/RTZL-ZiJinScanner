System.register(["./index-legacy-5b4d67d4.js","./el-overlay-legacy-5b124c1c.js","./index-legacy-f48602d5.js","./index-legacy-5039dca1.js","./el-card-legacy-c3f81bdb.js","./index-legacy-d8cde682.js","./el-select-legacy-bf1b66b5.js","./el-popper-legacy-25cfa5d3.js","./index-legacy-eda59a38.js","./gradeDetermination-legacy-e6160176.js","./function-call-legacy-a841d5d6.js"],(function(t,a){"use strict";var e,l,o,n,s,i,u,d,r,y,c,p,f,m,h,g,D,b,v,I,j,w,k,J,x,C,S,_,L,Y,V,F,H,M,U,N,A,B;return{setters:[null,t=>{e=t.E},t=>{l=t.a9,o=t.aa,n=t._,s=t.u,i=t.r,u=t.S,d=t.b,r=t.c,y=t.j,c=t.d,p=t.w,f=t.F,m=t.s,h=t.N,g=t.ab,D=t.ac,b=t.Z,v=t.O,I=t.k,j=t.g,w=t.e,k=t.ad,J=t.a1,x=t.a6,C=t.Y,S=t.a2,_=t.a0,L=t.W,Y=t.p,V=t.i,F=t.ae,H=t.a3},null,t=>{M=t.E},null,t=>{U=t.E,N=t.a},null,null,t=>{A=t.f},t=>{B=t.a}],execute:function(){var a=document.createElement("style");a.textContent=".header[data-v-b36808c1]{width:100%;height:95px;line-height:95px;position:absolute;z-index:5;top:0}.content[data-v-b36808c1]{width:100%;overflow:scroll;top:95px;position:absolute;z-index:10;bottom:5px}\n",document.head.appendChild(a);const E={setup(){const t=s(),a=i(""),e=i(!1),n=i(""),d=i(""),r=i(!1),y=u({auditorListData:[],yjtJyInformationDetails:{},yjtJyInformationFileList:[]}),c=i(!1),p=i(!1),f=i(!1),h=i("0"),g=i(10),D=i(0);function b(t){let a={},e={},n={};var s;n.limit=g.value,n.offset=D.value,n.blockId="paramBlock",n.data=t,e.paramBlock=n,a.blocks=e,(s=a,l({url:`${o.api_base_url}/mobileTerminalApi.do?method=auditorDataQuery`,method:"post",data:s})).then((t=>{y.auditorListData=[...y.auditorListData,...t.data.blocks.resultBlock.data],p.value=!1,y.auditorListData.length==t.data.blocks.resultBlock.total&&(f.value=!0);let a=document.body.scrollHeight-180;d.value="height:"+a+"px"})).catch((t=>{console.log(t)}))}return{elDialogHeight:d,state:r,listData:y,showImage:e,auditorContent:n,centerDialogVisible:c,searchValue:a,loading:p,finished:f,limit:g,offset:D,status:h,options:[{value:"0",label:"未审核"},{value:"1",label:"驳回"},{value:"2",label:"审核通过"}],listData:y,onClickLeft:()=>{t.push({path:"/home"})},onLoad:()=>{D.value=D.value+1,b({batchnumber:a.value,status:h.value})},statusChange:t=>{D.value=1,y.auditorListData=[],f.value=!1,b({batchnumber:t,status:h.value})},dateFormat:(t,a)=>{let e,l=new Date(a);const o={"Y+":l.getFullYear().toString(),"m+":(l.getMonth()+1).toString(),"d+":l.getDate().toString(),"H+":l.getHours().toString(),"M+":l.getMinutes().toString(),"S+":l.getSeconds().toString()};for(let n in o)e=new RegExp("("+n+")").exec(t),e&&(t=t.replace(e[1],1==e[1].length?o[n]:o[n].padStart(e[1].length,"0")));return t},onSearch:t=>{D.value=1,y.auditorListData=[],f.value=!1,b({batchnumber:t,status:h.value})},auditingDetails:t=>{y.yjtJyInformationDetails=t,c.value=!0,"0"!=y.yjtJyInformationDetails.exterior&&function(t){let a={};a.yjtJyInformationDetailsId=t,A(a).then((t=>{y.yjtJyInformationFileList=t.data.data})).catch((t=>{console.log(t)}))}(y.yjtJyInformationDetails.yjtJyInformationDetailsId)},seeImg:()=>{e.value=!0},cathodeCopperAuditorClick:t=>{if(""==n.value)return m({message:"请填写审核内容",type:"fail",className:"particulars-detail-popup"}),!1;let e={},s={},i={},u={};e.id=y.yjtJyInformationDetails.id,e.yjtJyInformationId=y.yjtJyInformationDetails.yjtJyInformationId,e.yjtJyInformationDetailsId=y.yjtJyInformationDetails.yjtJyInformationDetailsId,e.auditorContent=n.value,e.status=t,u.data=e,i.paramBlock=u,s.blocks=i;let d="";d="1"==t?"驳回":"通过",B({title:"提示",width:"600",message:"是否"+d+"这条数据？"}).then((()=>{var t;(t=s,l({url:`${o.api_base_url}/mobileTerminalApi.do?method=cathodeCopperAuditor`,method:"post",data:t})).then((t=>{"0"==t.data.status&&(m({message:t.data.returnMsg,type:"success",className:"particulars-detail-popup",overlay:!0}),y.auditorListData=[],c.value=!1,b({batchnumber:a.value,status:h.value}))})).catch((t=>{console.log(t)}))})).catch((t=>{console.log(t)}))}}}},z=t=>(Y("data-v-b36808c1"),t=t(),V(),t),O={class:"header"},R={style:{display:"flex","background-color":"#ffffff"}},T={class:"content"},$={style:{padding:"0px 5px 5px 5px"}},P=z((()=>y("span",{style:{"font-weight":"bold"}},"编号：",-1))),Q=z((()=>y("span",{style:{"font-weight":"bold"}},"重量：",-1))),W=z((()=>y("span",{style:{"font-weight":"bold"}},"标准：",-1))),Z=z((()=>y("span",{style:{"font-weight":"bold"}},"品级分类：",-1))),q={key:0,style:{"font-weight":"bold"}},G={style:{color:"#bbbbbb"}},K={style:{float:"right",color:"#bbbbbb"}},X=z((()=>y("span",{style:{"font-weight":"bold"}},"编号：",-1))),tt=z((()=>y("span",{style:{"font-weight":"bold"}},"重量：",-1))),at=z((()=>y("span",{style:{"font-weight":"bold"}},"标准：",-1))),et=z((()=>y("span",{style:{"font-weight":"bold"}},"计量员：",-1))),lt=z((()=>y("span",{style:{"font-weight":"bold"}},"扫描人：",-1))),ot=z((()=>y("span",{style:{"font-weight":"bold"}},"生产日期：",-1))),nt=z((()=>y("span",{style:{"font-weight":"bold"}},"品级分类：",-1))),st={key:0,style:{"font-weight":"bold"}},it=z((()=>y("span",{style:{"font-weight":"bold"}},"质检时间：",-1))),ut=z((()=>y("span",{style:{"font-weight":"bold"}},"质检人：",-1))),dt=z((()=>y("span",{style:{"font-weight":"bold"}},"改判理由：",-1))),rt={key:0},yt={key:2},ct=z((()=>y("span",{style:{"font-weight":"bold"}},"状态：",-1))),pt=z((()=>y("span",{style:{"font-weight":"bold"}},"审核人：",-1))),ft=z((()=>y("span",{style:{"font-weight":"bold"}},"审核时间：",-1))),mt=z((()=>y("span",{style:{"font-weight":"bold"}},"审核内容：",-1))),ht={key:0,style:{"margin-top":"30px"}};t("default",n(E,[["render",function(t,a,l,o,n,s){const i=h,u=g,m=N,Y=U,V=F,A=J,B=M,E=D,z=H,gt=x,Dt=C,bt=S,vt=_,It=L,jt=e;return d(),r(f,null,[y("div",O,[c(i,{title:"审核列表",class:"page-nav-bar","left-arrow":"",onClickLeft:o.onClickLeft},null,8,["onClickLeft"]),y("div",R,[c(u,{style:{width:"68%"},modelValue:o.searchValue,"onUpdate:modelValue":a[0]||(a[0]=t=>o.searchValue=t),shape:"round",placeholder:"请输入编号搜索",onSearch:o.onSearch},null,8,["modelValue","onSearch"]),c(Y,{modelValue:o.status,"onUpdate:modelValue":a[1]||(a[1]=t=>o.status=t),clearable:"",placeholder:"状态",style:{width:"31%",float:"right","margin-top":"0.8rem"},onChange:o.statusChange},{default:p((()=>[(d(!0),r(f,null,b(o.options,(t=>(d(),w(m,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])])]),y("div",T,[c(E,{loading:o.loading,"onUpdate:loading":a[2]||(a[2]=t=>o.loading=t),finished:o.finished,offset:"50","finished-text":"没有更多了",onLoad:o.onLoad},{default:p((()=>[y("div",$,[(d(!0),r(f,null,b(o.listData.auditorListData,((t,a)=>(d(),w(B,{class:"box-card",shadow:"always",style:{"margin-top":"5px"},onClick:a=>o.auditingDetails(t)},{default:p((()=>[y("div",null,[y("p",null,[P,y("span",null,I(t.batchnumber),1)]),y("p",null,[Q,y("span",null,I(parseFloat(t.suttle))+I(t.unit),1)]),y("p",null,[W,y("span",null,I(t.standard),1)]),y("p",null,[Z,y("span",null,I(t.exteriorName),1),v("     "),"0"!=t.exterior?(d(),r("span",q,"类型：")):j("",!0),y("span",null,I(t.dictName),1)]),y("p",null,["0"==t.status?(d(),w(V,{key:0,type:"primary"},{default:p((()=>[v("未审核")])),_:1})):j("",!0),"1"==t.status?(d(),w(V,{key:1,type:"danger"},{default:p((()=>[v("驳回")])),_:1})):j("",!0),"2"==t.status?(d(),w(V,{key:2,type:"success"},{default:p((()=>[v("审核通过")])),_:1})):j("",!0)]),c(A,{style:{color:"#c8c8c8"}}),y("span",G,I(o.dateFormat("YYYY-mm-dd HH:MM:SS",t.checkoutDate)),1),y("span",K,I(t.checkoutUser),1)])])),_:2},1032,["onClick"])))),256))])])),_:1},8,["loading","finished","onLoad"])]),c(jt,{modelValue:o.centerDialogVisible,"onUpdate:modelValue":a[7]||(a[7]=t=>o.centerDialogVisible=t),"destroy-on-close":!0,title:"审核详情",width:"96%","align-center":""},{default:p((()=>[y("div",{style:k([{"overflow-y":"auto","overscroll-behavior-y":"contain"},o.elDialogHeight])},[y("div",null,[c(A,{"content-position":"left"},{default:p((()=>[v("基本信息")])),_:1}),y("div",null,[y("p",null,[X,y("span",null,I(o.listData.yjtJyInformationDetails.batchnumber),1)]),y("p",null,[tt,y("span",null,I(parseFloat(o.listData.yjtJyInformationDetails.suttle))+I(o.listData.yjtJyInformationDetails.unit),1)]),y("p",null,[at,y("span",null,I(o.listData.yjtJyInformationDetails.standard),1)]),y("p",null,[et,y("span",null,I(o.listData.yjtJyInformationDetails.suttleperson),1),v("     "),lt,y("span",null,I(o.listData.yjtJyInformationDetails.scanUser),1)]),y("p",null,[ot,v(I(o.dateFormat("YYYY-mm-dd HH:MM:SS",o.listData.yjtJyInformationDetails.proDate)),1)])]),c(A,{"content-position":"left"},{default:p((()=>[v("质检信息")])),_:1}),y("div",null,[y("p",null,[nt,y("span",null,I(o.listData.yjtJyInformationDetails.exteriorName),1),v("     "),"0"!=o.listData.yjtJyInformationDetails.exterior?(d(),r("span",st,"类型：")):j("",!0),y("span",null,I(o.listData.yjtJyInformationDetails.dictName),1)]),y("p",null,[it,v(I(o.dateFormat("YYYY-mm-dd HH:MM:SS",o.listData.yjtJyInformationDetails.checkoutDate)),1)]),y("p",null,[ut,y("span",null,I(o.listData.yjtJyInformationDetails.checkoutUser),1)]),y("p",null,[dt,y("span",null,I(o.listData.yjtJyInformationDetails.alterReason),1)])]),"0"!=o.listData.yjtJyInformationDetails.exterior?(d(),r("div",rt,[(d(!0),r(f,null,b(o.listData.yjtJyInformationFileList,((t,a)=>(d(),w(z,{style:{margin:"0 2%"},onClick:o.seeImg,width:"45%",height:"8rem",fit:"cover",position:"left",src:t},null,8,["onClick","src"])))),256))])):j("",!0),"0"==o.listData.yjtJyInformationDetails.status?(d(),w(gt,{key:1,modelValue:o.auditorContent,"onUpdate:modelValue":a[3]||(a[3]=t=>o.auditorContent=t),rows:"5",autosize:"",label:"审核内容",type:"textarea",maxlength:"50",placeholder:"请输入审核内容","show-word-limit":""},null,8,["modelValue"])):j("",!0),"0"!=o.listData.yjtJyInformationDetails.status?(d(),r("div",yt,[c(A,{"content-position":"left"},{default:p((()=>[v("审核信息")])),_:1}),y("p",null,[ct,y("span",null,I("0"===o.listData.yjtJyInformationDetails.status?"未审核":"1"===o.listData.yjtJyInformationDetails.status?"驳回":"通过"),1),v("     "),pt,y("span",null,I(o.listData.yjtJyInformationDetails.auditorUserName),1)]),y("p",null,[ft,v(I(o.dateFormat("YYYY-mm-dd HH:MM:SS",o.listData.yjtJyInformationDetails.auditorDate)),1)]),y("p",null,[mt,y("span",null,I(o.listData.yjtJyInformationDetails.auditorContent),1)])])):j("",!0)]),c(Dt,{show:o.showImage,"onUpdate:show":a[4]||(a[4]=t=>o.showImage=t),images:o.listData.yjtJyInformationFileList,closeable:!0,loop:!1,closeOnPopstate:!0},null,8,["show","images"]),"0"==o.listData.yjtJyInformationDetails.status?(d(),r("div",ht,[c(It,null,{default:p((()=>[c(bt,{span:"5"}),c(bt,{span:"7"},{default:p((()=>[c(vt,{type:"danger",style:{width:"90%"},onClick:a[5]||(a[5]=t=>o.cathodeCopperAuditorClick("1"))},{default:p((()=>[v("驳回 ")])),_:1})])),_:1}),c(bt,{span:"7"},{default:p((()=>[c(vt,{type:"success",style:{width:"90%"},onClick:a[6]||(a[6]=t=>o.cathodeCopperAuditorClick("2"))},{default:p((()=>[v("通过 ")])),_:1})])),_:1}),c(bt,{span:"5"})])),_:1})])):j("",!0)],4)])),_:1},8,["modelValue"])],64)}],["__scopeId","data-v-b36808c1"]]))}}}));
