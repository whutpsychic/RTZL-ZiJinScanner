import{E as b,a as S}from"./el-table-column-acc952fe.js";import{_ as y,r as i,u as D,a as P,o as g,c as V,b as a,d as t,w as c,s as N,e as I,N as R,C as T,F as x,p as U,f as B,g as E,D as F,P as L}from"./index-2e96a112.js";/* empty css              *//* empty css              */import{c as Q}from"./chukudan-d785ebdf.js";import{_ as j}from"./btn_chaxun3-17dac2a0.js";import{_ as A}from"./btn_queren-a649dfc1.js";import{_ as G}from"./btn_shoudong-49ae805b.js";import"./request-00e20687.js";const H={setup(){const s=i(""),e=i(""),u=i(""),o=i(!1),h=i(!1),d=D(),f=P();let r=i([]);const _=({selectedValues:l})=>{s.value=l.join("-"),o.value=!1},p=({selectedValues:l})=>{e.value=l.join("-"),h.value=!1},v=()=>history.back(),C=()=>{Q({startTime:s.value.replaceAll("-","-")+" 00:00:00",endTime:e.value.replaceAll("-","-")+" 23:59:59"},0).then(l=>{debugger;r.value=l.data.value.records})},k=()=>{};let m="";return{startDate:s,endDate:e,showPicker:o,showPicker2:h,onClickLeft:v,onConfirm:_,onConfirm2:p,onSubmit:k,onQuery:C,tableData:r,selectRow:(l,Y,Z)=>{m=l.plateNo},confirmSelect:()=>{if(m){let l=d.state.chukudan;l.chehao=m,d.commit("setChukudan",l),f.push({name:"chukudanDetails"})}else N("请选择正确的行！")},handleConfirmSelect:()=>{if(u.value){let l=d.state.chukudan;l.chehao=u.value,d.commit("setChukudan",l),f.push({name:"chukudanDetails"})}else I({message:"请手工录入车号！",type:"fail"})},chehao:u}}},w=s=>(U("data-v-e5ae322f"),s=s(),B(),s),q={class:"table-content container"},z={class:"btn-area"},J=w(()=>t("div",null,"查询",-1)),K=w(()=>t("div",null,"确认",-1)),M=w(()=>t("div",null,"手动确认",-1));function O(s,e,u,o,h,d){const f=R,r=E,_=F,p=L,v=T,C=x,k=S,m=b;return g(),V("main",null,[a(f,{title:"选择车号",class:"page-nav-bar","left-arrow":"",onClickLeft:o.onClickLeft},null,8,["onClickLeft"]),t("div",q,[a(C,{onSubmit:o.onSubmit,id:"form-area"},{default:c(()=>[a(v,{inset:""},{default:c(()=>[a(r,{modelValue:o.startDate,"onUpdate:modelValue":e[0]||(e[0]=n=>o.startDate=n),"is-link":"",readonly:"",name:"startDate",label:"开始日期",placeholder:"点击选择时间",onClick:e[1]||(e[1]=n=>o.showPicker=!0)},null,8,["modelValue"]),a(p,{show:o.showPicker,"onUpdate:show":e[3]||(e[3]=n=>o.showPicker=n),position:"bottom"},{default:c(()=>[a(_,{onConfirm:o.onConfirm,onCancel:e[2]||(e[2]=n=>o.showPicker=!1)},null,8,["onConfirm"])]),_:1},8,["show"]),a(r,{modelValue:o.endDate,"onUpdate:modelValue":e[4]||(e[4]=n=>o.endDate=n),"is-link":"",readonly:"",name:"endDate",label:"结束日期",placeholder:"点击选择时间",onClick:e[5]||(e[5]=n=>o.showPicker2=!0)},null,8,["modelValue"]),a(p,{show:o.showPicker2,"onUpdate:show":e[7]||(e[7]=n=>o.showPicker2=n),position:"bottom"},{default:c(()=>[a(_,{onConfirm:o.onConfirm2,onCancel:e[6]||(e[6]=n=>o.showPicker2=!1)},null,8,["onConfirm"])]),_:1},8,["show"])]),_:1})]),_:1},8,["onSubmit"]),a(m,{data:o.tableData,border:"",id:"data-area",onRowClick:o.selectRow},{default:c(()=>[a(k,{prop:"plateNo",label:"车号"}),a(k,{prop:"contractNo",label:"单据号"})]),_:1},8,["data","onRowClick"]),t("div",null,[a(v,{inset:""},{default:c(()=>[a(r,{modelValue:o.chehao,"onUpdate:modelValue":e[8]||(e[8]=n=>o.chehao=n),label:"车号",placeholder:"请输入车号"},null,8,["modelValue"])]),_:1}),t("div",z,[t("div",null,[t("img",{src:j,alt:"",onClick:e[9]||(e[9]=(...n)=>o.onQuery&&o.onQuery(...n))}),J]),t("div",null,[t("img",{src:A,alt:"",type:"primary",onClick:e[10]||(e[10]=(...n)=>o.confirmSelect&&o.confirmSelect(...n))}),K]),t("div",null,[t("img",{src:G,alt:"",type:"primary",onClick:e[11]||(e[11]=(...n)=>o.handleConfirmSelect&&o.handleConfirmSelect(...n))}),M])])])])])}const io=y(H,[["render",O],["__scopeId","data-v-e5ae322f"]]);export{io as default};
