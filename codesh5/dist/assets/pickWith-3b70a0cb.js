import"./el-tag-917e96a8.js";import{E as ne}from"./el-overlay-2ed05ea2.js";import{_ as se,u as ie,E as ce,r as u,a as de,H as re,I as X,t as g,o as ue,b as N,c as G,d as i,w as p,i as o,e as W,j as E,F as K,J as me,f$ as he,g0 as Q,N as _e,U as P,O as pe,p as ge,h as fe,V as ve,a0 as be,a1 as we,X as Ce,$ as Fe,R as ke,a2 as ye}from"./index-7129c5de.js";/* empty css              */import{E as Be,a as Te}from"./el-select-ead7431d.js";import"./el-popper-08cae5f5.js";import{E as De,a as Re}from"./el-table-column-ca63614e.js";/* empty css              */import{B as w}from"./bignumber-266e6c56.js";import{c as Y,b as Ee,s as xe}from"./pickWith-e453961e.js";import{_ as Le,a as Se}from"./btn_shoudong-07961c15.js";import{_ as je}from"./btn_tichu-bca5bbb8.js";import{a as m,s as J}from"./function-call-82e7a3c0.js";import"./index-f8f57c5f.js";import"./use-global-config-f89850f5.js";import"./objects-7d31d301.js";const Ie={setup(){const f=ie();ce();const l=u([]),d=de(),a=u(""),j=u(""),_=u("0"),C=u(""),D=u("0"),v=u("0"),B=u("0"),T=u(!1),R=u(""),F=u(""),V=u(""),U=u(""),k=re({barCodeSelectList:[]});console.log(f.currentRoute.value.path),X.await("scanner",e=>{if(f.currentRoute.value.path=="/pickWith")if(e!="null"){let t=e;if(new RegExp(/^124010[1-9][0-9]{2}(0[1-9]|1[0-2])((0[1-9])|((1|2)[0-9])|30|31)[0-9]{12}$/).test(t)&&t.length===25){let r={};r.fBarcode=t,Y(r).then(b=>{if(b.data.data)return O(t).then(y=>{let x=y.shengchanriqi,L=y.kunxuhao,S=y.barcode,I=y.kunjingzhong,le={date:x,number:L,barcode:S,weight:I};q(g(l.value),le)});m({title:"提示",width:"600",message:b.data.message}).then(()=>{})})}else m({title:"提示",width:"600",message:"对不起，此条码不符合规范"}).then(()=>{})}else m({title:"提示",width:"600",message:"数据获取失败"}).then(()=>{})});const A=()=>{f.push({path:"/pickWithQueryInfoData"})},H=()=>{T.value=!1},M=()=>{T.value=!0};let n="";const Z=(e,t,s)=>{n=g(e)},$=()=>{X.scan()};ue(()=>{let e=g(d.state.chukudanListInfo);g(d.state.carInfo.pizhong)&&(D.value=g(d.state.carInfo.pizhong).toFixed(4)),j.value=new w(e.F_PLANSUTTLE).minus(e.F_SUTTLE).toFixed(4),l.value=g(d.state.scandList);let t=g(d.state.scandCalculateData);Object.getOwnPropertyNames(t).length==0?(C.value=new w(e.F_PLANSUTTLE).minus(e.F_SUTTLE).toFixed(4),B.value=new w(D.value).plus(_.value).toFixed(4)):(_.value=t.yij1,C.value=t.ques,B.value=t.pz,v.value=t.yij2)});const ee=()=>{if(F.value=="")return m({title:"提示",width:"600",message:"请选择条形码"}).then(()=>{}),!1;T.value=!1;let e=F.value;if(new RegExp(/^124010[1-9][0-9]{2}(0[1-9]|1[0-2])((0[1-9])|((1|2)[0-9])|30|31)[0-9]{12}$/).test(e)&&e.length===25){let c={};c.fBarcode=e,Y(c).then(r=>{if(r.data.data)return O(e).then(b=>{let y=b.shengchanriqi,x=b.kunxuhao,L=b.barcode,S=b.kunjingzhong,I={date:y,number:x,barcode:L,weight:S};q(g(l.value),I)});m({title:"提示",width:"600",message:r.data.message}).then(()=>{})})}else m({title:"提示",width:"600",message:"对不起，此条码不符合规范"}).then(()=>{})},te=e=>{F.value="";let s={strBatchno:e.F_BATCHNUMBER+"-"+e.F_BATCHGROUP};Ee(s).then(c=>{k.barCodeSelectList=c.data.data,k.barCodeSelectList.length>0?me({message:"数据查询成功",type:"success",className:"particulars-detail-popup",overlay:!0}):m({title:"提示",width:"600",message:"没有查询到对应的条码数据"}).then(()=>{})}).catch(c=>{console.log(c)})},ae=()=>{n?J({title:"提示",width:"600",message:"是否要剔除当前所选数据？"}).then(()=>{let e=l.value.filter(t=>t.barcode!=n.barcode);l.value=e,R.value="edit",z(e,n),n=""}).catch(e=>{console.log(e)}):m({title:"提示",width:"600",message:"请选择要剔除的的数据"}).then(()=>{})},oe=()=>{if(l.value.length==0)return m({title:"提示",width:"600",message:"没有要处理的数据"}).then(()=>{}),!1;J({title:"提示",width:"600",message:"是否已完成扫描？"}).then(()=>{he({duration:0,forbidClick:!0,message:"拣配中..."});let e=g(d.state.chukudanListInfo),t=g(d.state.carInfo),s={};s.F_DELIVERYNO=e.F_DELIVERYNO,s.strSuttle=_.value,s.strTruckNo=t.chehao,s.weighthousename=t.chengfang,s.id=t.danjuhao,s.strDataId=t.DataId;let c=g(l.value).map(r=>r.barcode+",").join("");s.strBarcodes=c.substring(0,c.length-1),xe(s).then(r=>{Q(),r.data.code=="200"?(l.value=[],m({title:"提示",width:"600",message:r.data.message}).then(()=>{d.commit("setPickWithScroll",0),d.commit("setChukudanListInfo",{}),d.commit("setCarInfo",{}),d.commit("setScandList",[]),d.commit("setScandCalculateData",{}),f.push({path:"/pickWithQueryListData"})})):m({title:"提示",width:"600",message:r.data.message}).then(()=>{})})}).catch(e=>{Q(),console.log(e)})},z=(e,t)=>{R.value=="add"?_.value=new w(_.value).plus(new w(t.weight).dividedBy(1e3).toNumber()).toFixed(4):_.value=new w(_.value).minus(new w(t.weight).dividedBy(1e3).toNumber()).toFixed(4),C.value=new w(j.value).minus(_.value).toFixed(4),B.value=new w(D.value).plus(_.value).toFixed(4),v.value=e.length,l.value=e,a.value=Math.random();let s={};s.yij1=_.value,s.ques=C.value,s.pz=B.value,s.yij2=v.value,d.commit("setScandCalculateData",s),d.commit("setScandList",l.value),C.value<0&&m({title:"提示",width:"600",message:"缺少数值已为负数"}).then(()=>{})},O=e=>{let t=e.split("");const s=t.slice(0,3).join(""),c=t.slice(3,5).join(""),r=t.slice(5,7).join(""),b=t.slice(7,13).join(""),y=t.slice(13,17).join(""),x=t.slice(17,20).join(""),L=t.slice(20,24).join("")+"."+t[24];return new Promise((S,I)=>{S({barcode:e,qiyedaima:s,chanpinleibie:c,chanpindengji:r,shengchanriqi:b,chanpinpihao:y,kunxuhao:x,kunjingzhong:L})})},q=(e,t)=>{if(e.find(c=>c.barcode===t.barcode))m({title:"提示",width:"600",message:"该批次已经选择，请勿重复选择"}).then(()=>{});else{let c=[];e.unshift(t),c=e,R.value="add",z(c,t)}};return{typeName:R,barCodeSelect:F,F_BATCHGROUP:V,F_BATCHNUMBER:U,listData:k,itemKey:a,yingj:j,yij1:_,ques:C,pizhong:D,yij2:v,pz:B,tableData:l,centerDialogVisibleTXM:T,passedTXMClick:ee,onSubmit:te,closeTXMClick:H,checkIfExist:q,decode:O,scanCode:$,onClickLeft:A,onHandle:M,onConfirm:oe,selectRow:Z,onDelete:ae}}},h=f=>(ge("data-v-ae884a4e"),f=f(),fe(),f),Ne={class:"container"},Ve={class:"info-container"},Ue=h(()=>o("span",{class:"title"},"应拣",-1)),Ae=h(()=>o("span",{class:"title"},"已拣",-1)),He=h(()=>o("span",{class:"title"},"缺少",-1)),Me=h(()=>o("span",{class:"title"},"皮重",-1)),Oe=h(()=>o("span",{class:"title"},"捆数",-1)),qe=h(()=>o("span",{class:"title"},"合计",-1)),Pe={class:"btn-area"},ze=h(()=>o("img",{src:Le,alt:""},null,-1)),Xe=h(()=>o("div",null,"确认",-1)),Ge=[ze,Xe],We=h(()=>o("img",{src:Se,alt:"",type:"primary"},null,-1)),Ke=h(()=>o("div",null,"手动",-1)),Qe=[We,Ke],Ye=h(()=>o("img",{src:je,alt:"",type:"primary"},null,-1)),Je=h(()=>o("div",null,"剔除",-1)),Ze=[Ye,Je],$e={style:{margin:"16px"}},et={style:{"margin-top":"10px"}},tt=h(()=>o("p",null,"条形码",-1));function at(f,l,d,a,j,_){const C=ve,D=_e,v=Re,B=De,T=be,R=we,F=Ce,V=Be,U=Te,k=Fe,A=ke,H=ye,M=ne;return N(),G(K,null,[i(D,{title:"拣配",class:"page-nav-bar","left-arrow":"",onClickLeft:a.onClickLeft},{right:p(()=>[i(C,{onClick:a.scanCode,style:{color:"#FFFFFF"},name:"scan",size:"40"},null,8,["onClick"])]),_:1},8,["onClickLeft"]),o("div",Ne,[(N(),W(B,{data:a.tableData,style:{height:"260px"},id:"data-area1",key:a.itemKey,"highlight-current-row":"",onRowClick:a.selectRow},{default:p(()=>[i(v,{fixed:"",prop:"date",label:"日期"}),i(v,{prop:"number",label:"包号"}),i(v,{prop:"weight",label:"重量"}),i(v,{prop:"barcode",label:"条码",width:"250"})]),_:1},8,["data","onRowClick"])),o("div",Ve,[Ue,Ae,He,o("span",null,E(a.yingj),1),o("span",null,E(a.yij1),1),o("span",null,E(a.ques),1),Me,Oe,qe,o("span",null,E(a.pizhong),1),o("span",null,E(a.yij2),1),o("span",null,E(a.pz),1)]),o("div",Pe,[o("div",{onClick:l[0]||(l[0]=(...n)=>a.onConfirm&&a.onConfirm(...n))},Ge),o("div",{onClick:l[1]||(l[1]=(...n)=>a.onHandle&&a.onHandle(...n))},Qe),o("div",{onClick:l[2]||(l[2]=(...n)=>a.onDelete&&a.onDelete(...n))},Ze)])]),i(M,{modelValue:a.centerDialogVisibleTXM,"onUpdate:modelValue":l[6]||(l[6]=n=>a.centerDialogVisibleTXM=n),title:"手动不合格条码",width:"96%","align-center":""},{default:p(()=>[i(H,{onSubmit:a.onSubmit},{default:p(()=>[i(R,{inset:""},{default:p(()=>[i(T,{modelValue:a.F_BATCHGROUP,"onUpdate:modelValue":l[3]||(l[3]=n=>a.F_BATCHGROUP=n),name:"F_BATCHGROUP",label:"批次号",placeholder:"批次号(四位)",rules:[{required:!0,message:"请填写批次号"}]},null,8,["modelValue"]),i(T,{modelValue:a.F_BATCHNUMBER,"onUpdate:modelValue":l[4]||(l[4]=n=>a.F_BATCHNUMBER=n),name:"F_BATCHNUMBER",label:"编号",placeholder:"编号(三位)",rules:[{required:!0,message:"请填写编号"}]},null,8,["modelValue"])]),_:1}),o("div",$e,[i(F,{square:"",icon:"search",block:"",type:"primary","native-type":"submit",style:{"background-color":"#003363",color:"#FFFFFF"}},{default:p(()=>[P(" 查询 ")]),_:1}),o("div",et,[tt,i(U,{modelValue:a.barCodeSelect,"onUpdate:modelValue":l[5]||(l[5]=n=>a.barCodeSelect=n),placeholder:"条形码",style:{width:"100%"}},{default:p(()=>[(N(!0),G(K,null,pe(a.listData.barCodeSelectList,n=>(N(),W(V,{key:n.F_BARCODE,label:n.F_BARCODE,value:n.F_BARCODE},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),i(A,{style:{"margin-top":"15px"}},{default:p(()=>[i(k,{span:"2"}),i(k,{span:"10"},{default:p(()=>[i(F,{icon:"passed",style:{"background-color":"#003363",color:"#FFFFFF"},onClick:a.passedTXMClick},{default:p(()=>[P("确定 ")]),_:1},8,["onClick"])]),_:1}),i(k,{span:"10",style:{"text-align":"center"}},{default:p(()=>[i(F,{icon:"close",style:{"background-color":"red",color:"#FFFFFF"},onClick:a.closeTXMClick},{default:p(()=>[P("退出 ")]),_:1},8,["onClick"])]),_:1}),i(k,{span:"2"})]),_:1})])]),_:1},8,["onSubmit"])]),_:1},8,["modelValue"])],64)}const bt=se(Ie,[["render",at],["__scopeId","data-v-ae884a4e"]]);export{bt as default};
