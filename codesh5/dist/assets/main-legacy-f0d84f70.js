System.register(["./el-tag-legacy-38e8d59c.js","./el-overlay-legacy-238ce5bc.js","./index-legacy-f518dbe5.js","./index-legacy-5039dca1.js","./el-card-legacy-308d4694.js","./index-legacy-2f76a666.js","./index-legacy-d8cde682.js","./el-select-legacy-4b271e54.js","./el-popper-legacy-4f465adc.js","./index-legacy-eda59a38.js","./gradeDetermination-legacy-148e5032.js","./function-call-legacy-1cf1052b.js","./index-legacy-71659244.js","./use-global-config-legacy-d8e84f88.js","./objects-legacy-c6b9ae50.js"],(function(t,a){"use strict";var e,l,o,n,s,i,u,r,d,y,p,c,m,f,h,g,D,b,j,v,I,w,J,k,x,C,S,_,L,Y,V,F,H,M,U,N,A,B;return{setters:[null,t=>{e=t.E},t=>{l=t.a5,o=t.a6,n=t._,s=t.u,i=t.r,u=t.H,r=t.b,d=t.c,y=t.i,p=t.d,c=t.w,m=t.F,f=t.J,h=t.N,g=t.a7,D=t.a8,b=t.O,j=t.e,v=t.j,I=t.U,w=t.f,J=t.a9,k=t.aa,x=t.Y,C=t.Z,S=t.a0,_=t.S,L=t.$,Y=t.X,V=t.R,F=t.p,H=t.h},null,t=>{M=t.E},null,null,t=>{U=t.a,N=t.E},null,null,t=>{A=t.f},t=>{B=t.s},null,null,null],execute:function(){var a=document.createElement("style");a.textContent=".header[data-v-1a3e7e27]{width:100%;height:95px;line-height:95px;position:absolute;z-index:5;top:0}.content[data-v-1a3e7e27]{width:100%;overflow:scroll;top:95px;position:absolute;z-index:10;bottom:5px}\n",document.head.appendChild(a);const E={setup(){const t=s(),a=i(""),e=i(!1),n=i(""),r=i(""),d=i(!1),y=u({auditorListData:[],yjtJyInformationDetails:{},yjtJyInformationFileList:[]}),p=i(!1),c=i(!1),m=i(!1),h=i("0"),g=i(10),D=i(0),b=t=>{let a={},e={},n={};var s;n.limit=g.value,n.offset=D.value,n.blockId="paramBlock",n.data=t,e.paramBlock=n,a.blocks=e,(s=a,l({url:`${o.api_base_url}/mobileTerminalApi.do?method=auditorDataQuery`,method:"post",data:s})).then((t=>{y.auditorListData=[...y.auditorListData,...t.data.blocks.resultBlock.data],c.value=!1,y.auditorListData.length==t.data.blocks.resultBlock.total&&(m.value=!0);let a=document.body.scrollHeight-180;r.value="height:"+a+"px"})).catch((t=>{console.log(t)}))},j=t=>{let a={};a.yjtJyInformationDetailsId=t,A(a).then((t=>{y.yjtJyInformationFileList=t.data.data})).catch((t=>{console.log(t)}))};return{elDialogHeight:r,state:d,listData:y,showImage:e,auditorContent:n,centerDialogVisible:p,searchValue:a,loading:c,finished:m,limit:g,offset:D,status:h,options:[{value:"0",label:"未审核"},{value:"1",label:"驳回"},{value:"2",label:"审核通过"}],listData:y,onClickLeft:()=>{t.push({path:"/home"})},onLoad:()=>{D.value=D.value+1,b({batchnumber:a.value,status:h.value})},getFileQuery:j,getAuditorDataQuery:b,statusChange:t=>{D.value=1,y.auditorListData=[],m.value=!1,b({batchnumber:t,status:h.value})},dateFormat:(t,a)=>{let e,l=new Date(a);const o={"Y+":l.getFullYear().toString(),"m+":(l.getMonth()+1).toString(),"d+":l.getDate().toString(),"H+":l.getHours().toString(),"M+":l.getMinutes().toString(),"S+":l.getSeconds().toString()};for(let n in o)e=new RegExp("("+n+")").exec(t),e&&(t=t.replace(e[1],1==e[1].length?o[n]:o[n].padStart(e[1].length,"0")));return t},onSearch:t=>{D.value=1,y.auditorListData=[],m.value=!1,b({batchnumber:t,status:h.value})},auditingDetails:t=>{y.yjtJyInformationDetails=t,p.value=!0,"0"!=y.yjtJyInformationDetails.exterior&&j(y.yjtJyInformationDetails.yjtJyInformationDetailsId)},seeImg:()=>{e.value=!0},cathodeCopperAuditorClick:t=>{if(""==n.value)return f({message:"请填写审核内容",type:"fail",className:"particulars-detail-popup"}),!1;let e={},s={},i={},u={};e.id=y.yjtJyInformationDetails.id,e.yjtJyInformationId=y.yjtJyInformationDetails.yjtJyInformationId,e.yjtJyInformationDetailsId=y.yjtJyInformationDetails.yjtJyInformationDetailsId,e.auditorContent=n.value,e.status=t,u.data=e,i.paramBlock=u,s.blocks=i;let r="";r="1"==t?"驳回":"通过",B({title:"提示",width:"600",message:"是否"+r+"这条数据？"}).then((()=>{var t;(t=s,l({url:`${o.api_base_url}/mobileTerminalApi.do?method=cathodeCopperAuditor`,method:"post",data:t})).then((t=>{"0"==t.data.status&&(f({message:t.data.returnMsg,type:"success",className:"particulars-detail-popup",overlay:!0}),y.auditorListData=[],p.value=!1,b({batchnumber:a.value,status:h.value}))})).catch((t=>{console.log(t)}))})).catch((t=>{console.log(t)}))}}}},z=t=>(F("data-v-1a3e7e27"),t=t(),H(),t),Q={class:"header"},R={style:{display:"flex","background-color":"#ffffff"}},$={class:"content"},O={style:{padding:"0px 5px 5px 5px"}},T=z((()=>y("span",{style:{"font-weight":"bold"}},"编号：",-1))),P=z((()=>y("span",{style:{"font-weight":"bold"}},"重量：",-1))),X=z((()=>y("span",{style:{"font-weight":"bold"}},"标准：",-1))),Z=z((()=>y("span",{style:{"font-weight":"bold"}},"品级分类：",-1))),q={key:0,style:{"font-weight":"bold"}},G={style:{color:"#bbbbbb"}},K={style:{float:"right",color:"#bbbbbb"}},W=z((()=>y("span",{style:{"font-weight":"bold"}},"编号：",-1))),tt=z((()=>y("span",{style:{"font-weight":"bold"}},"重量：",-1))),at=z((()=>y("span",{style:{"font-weight":"bold"}},"标准：",-1))),et=z((()=>y("span",{style:{"font-weight":"bold"}},"计量员：",-1))),lt=z((()=>y("span",{style:{"font-weight":"bold"}},"扫描人：",-1))),ot=z((()=>y("span",{style:{"font-weight":"bold"}},"生产日期：",-1))),nt=z((()=>y("span",{style:{"font-weight":"bold"}},"品级分类：",-1))),st={key:0,style:{"font-weight":"bold"}},it=z((()=>y("span",{style:{"font-weight":"bold"}},"质检时间：",-1))),ut=z((()=>y("span",{style:{"font-weight":"bold"}},"质检人：",-1))),rt=z((()=>y("span",{style:{"font-weight":"bold"}},"改判理由：",-1))),dt={key:0},yt={key:2},pt=z((()=>y("span",{style:{"font-weight":"bold"}},"状态：",-1))),ct=z((()=>y("span",{style:{"font-weight":"bold"}},"审核人：",-1))),mt=z((()=>y("span",{style:{"font-weight":"bold"}},"审核时间：",-1))),ft=z((()=>y("span",{style:{"font-weight":"bold"}},"审核内容：",-1))),ht={key:0,style:{"margin-top":"30px"}};t("default",n(E,[["render",function(t,a,l,o,n,s){const i=h,u=g,f=N,F=U,H=k,A=x,B=M,E=D,z=C,gt=S,Dt=_,bt=L,jt=Y,vt=V,It=e;return r(),d(m,null,[y("div",Q,[p(i,{title:"审核列表",class:"page-nav-bar","left-arrow":"",onClickLeft:o.onClickLeft},null,8,["onClickLeft"]),y("div",R,[p(u,{style:{width:"68%"},modelValue:o.searchValue,"onUpdate:modelValue":a[0]||(a[0]=t=>o.searchValue=t),shape:"round",placeholder:"请输入编号搜索",onSearch:o.onSearch},null,8,["modelValue","onSearch"]),p(F,{modelValue:o.status,"onUpdate:modelValue":a[1]||(a[1]=t=>o.status=t),clearable:"",placeholder:"状态",style:{width:"31%",float:"right","margin-top":"0.8rem"},onChange:o.statusChange},{default:c((()=>[(r(!0),d(m,null,b(o.options,(t=>(r(),j(f,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])])]),y("div",$,[p(E,{loading:o.loading,"onUpdate:loading":a[2]||(a[2]=t=>o.loading=t),finished:o.finished,offset:"50","finished-text":"没有更多了",onLoad:o.onLoad},{default:c((()=>[y("div",O,[(r(!0),d(m,null,b(o.listData.auditorListData,((t,a)=>(r(),j(B,{class:"box-card",shadow:"always",style:{"margin-top":"5px"},onClick:a=>o.auditingDetails(t)},{default:c((()=>[y("div",null,[y("p",null,[T,y("span",null,v(t.batchnumber),1)]),y("p",null,[P,y("span",null,v(parseFloat(t.suttle))+v(t.unit),1)]),y("p",null,[X,y("span",null,v(t.standard),1)]),y("p",null,[Z,y("span",null,v(t.exteriorName),1),I("    "),"0"!=t.exterior?(r(),d("span",q,"类型：")):w("",!0),y("span",null,v(t.dictName),1)]),y("p",null,["0"==t.status?(r(),j(H,{key:0,type:"primary"},{default:c((()=>[I("未审核")])),_:1})):w("",!0),"1"==t.status?(r(),j(H,{key:1,type:"danger"},{default:c((()=>[I("驳回")])),_:1})):w("",!0),"2"==t.status?(r(),j(H,{key:2,type:"success"},{default:c((()=>[I("审核通过")])),_:1})):w("",!0)]),p(A,{style:{color:"#c8c8c8"}}),y("span",G,v(o.dateFormat("YYYY-mm-dd HH:MM:SS",t.checkoutDate)),1),y("span",K,v(t.checkoutUser),1)])])),_:2},1032,["onClick"])))),256))])])),_:1},8,["loading","finished","onLoad"])]),p(It,{modelValue:o.centerDialogVisible,"onUpdate:modelValue":a[7]||(a[7]=t=>o.centerDialogVisible=t),"destroy-on-close":!0,title:"审核详情",width:"96%","align-center":""},{default:c((()=>[y("div",{style:J([{"overflow-y":"auto","overscroll-behavior-y":"contain"},o.elDialogHeight])},[y("div",null,[p(A,{"content-position":"left"},{default:c((()=>[I("基本信息")])),_:1}),y("div",null,[y("p",null,[W,y("span",null,v(o.listData.yjtJyInformationDetails.batchnumber),1)]),y("p",null,[tt,y("span",null,v(parseFloat(o.listData.yjtJyInformationDetails.suttle))+v(o.listData.yjtJyInformationDetails.unit),1)]),y("p",null,[at,y("span",null,v(o.listData.yjtJyInformationDetails.standard),1)]),y("p",null,[et,y("span",null,v(o.listData.yjtJyInformationDetails.suttleperson),1),I("     "),lt,y("span",null,v(o.listData.yjtJyInformationDetails.scanUser),1)]),y("p",null,[ot,y("span",null,v(o.dateFormat("YYYY-mm-dd HH:MM:SS",o.listData.yjtJyInformationDetails.proDate)),1)])]),p(A,{"content-position":"left"},{default:c((()=>[I("质检信息")])),_:1}),y("div",null,[y("p",null,[nt,y("span",null,v(o.listData.yjtJyInformationDetails.exteriorName),1),I("    "),"0"!=o.listData.yjtJyInformationDetails.exterior?(r(),d("span",st,"类型：")):w("",!0),y("span",null,v(o.listData.yjtJyInformationDetails.dictName),1)]),y("p",null,[it,y("span",null,v(o.dateFormat("YYYY-mm-dd HH:MM:SS",o.listData.yjtJyInformationDetails.checkoutDate)),1)]),y("p",null,[ut,y("span",null,v(o.listData.yjtJyInformationDetails.checkoutUser),1)]),y("p",null,[rt,y("span",null,v(o.listData.yjtJyInformationDetails.alterReason),1)])]),"0"!=o.listData.yjtJyInformationDetails.exterior?(r(),d("div",dt,[(r(!0),d(m,null,b(o.listData.yjtJyInformationFileList,((t,a)=>(r(),j(z,{style:{margin:"0 2%"},onClick:o.seeImg,width:"45%",height:"8rem",fit:"cover",position:"left",src:t},null,8,["onClick","src"])))),256))])):w("",!0),"0"==o.listData.yjtJyInformationDetails.status?(r(),j(gt,{key:1,modelValue:o.auditorContent,"onUpdate:modelValue":a[3]||(a[3]=t=>o.auditorContent=t),rows:"5",autosize:"",label:"审核内容",type:"textarea",maxlength:"50",placeholder:"请输入审核内容","show-word-limit":""},null,8,["modelValue"])):w("",!0),"0"!=o.listData.yjtJyInformationDetails.status?(r(),d("div",yt,[p(A,{"content-position":"left"},{default:c((()=>[I("审核信息")])),_:1}),y("p",null,[pt,y("span",null,v("0"===o.listData.yjtJyInformationDetails.status?"未审核":"1"===o.listData.yjtJyInformationDetails.status?"驳回":"通过"),1),I("     "),ct,y("span",null,v(o.listData.yjtJyInformationDetails.auditorUserName),1)]),y("p",null,[mt,y("span",null,v(o.dateFormat("YYYY-mm-dd HH:MM:SS",o.listData.yjtJyInformationDetails.auditorDate)),1)]),y("p",null,[ft,y("span",null,v(o.listData.yjtJyInformationDetails.auditorContent),1)])])):w("",!0)]),p(Dt,{show:o.showImage,"onUpdate:show":a[4]||(a[4]=t=>o.showImage=t),images:o.listData.yjtJyInformationFileList,closeable:!0,loop:!1,closeOnPopstate:!0},null,8,["show","images"]),"0"==o.listData.yjtJyInformationDetails.status?(r(),d("div",ht,[p(vt,null,{default:c((()=>[p(bt,{span:"2"}),p(bt,{span:"10"},{default:c((()=>[p(jt,{icon:"close",type:"danger",style:{width:"90%"},onClick:a[5]||(a[5]=t=>o.cathodeCopperAuditorClick("1"))},{default:c((()=>[I("驳回 ")])),_:1})])),_:1}),p(bt,{span:"10"},{default:c((()=>[p(jt,{icon:"passed",type:"success",style:{width:"90%"},onClick:a[6]||(a[6]=t=>o.cathodeCopperAuditorClick("2"))},{default:c((()=>[I("通过 ")])),_:1})])),_:1}),p(bt,{span:"2"})])),_:1})])):w("",!0)],4)])),_:1},8,["modelValue"])],64)}],["__scopeId","data-v-1a3e7e27"]]))}}}));
