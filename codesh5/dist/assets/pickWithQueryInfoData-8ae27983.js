import{_ as D,E as m,I as p,u,a as R,f as I,o as L,t as v,b as S,c as T,d as k,j as t,k as n,F as Y,N as w,p as F,i as N}from"./index-8b63aa92.js";/* empty css              */import{B as M}from"./bignumber-266e6c56.js";import{_ as b,a as U}from"./btn_chaxun1-383256eb.js";import{s as Z}from"./function-call-21129ae9.js";const G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAWCAYAAAB64jRmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0E1NTJGNzIwNUU5MTFFQUIwMEZBNjkwMDg5OTE1MzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E1NTJGNzMwNUU5MTFFQUIwMEZBNjkwMDg5OTE1MzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQTU1MkY3MDA1RTkxMUVBQjAwRkE2OTAwODk5MTUzMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQTU1MkY3MTA1RTkxMUVBQjAwRkE2OTAwODk5MTUzMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvuT0QwAAAD9SURBVHjaYgzJqmQYymD11DaCapgYRgAY9eRwASykpG1kEJpdRVE+obY5o8kVhzgnEDcC8R0g/gmlG6HipABqmUORWSxYxLiAeDcQWyGJKQNxHRC7ALErEH8jwlHUModis7DFZAWaYcgAJF5GpMOoZQ7FZmHzZBQBC2OJdBi1zKHYLGyelCVgoAyRDqOWORSbhc2TjwkY+JRIh1HLHIrNwubJ5QQMXEykw6hlDsVmYfNkOxAfw6EeJN5JpMOoZQ7FZmHz5DdosdwExHeB+BeUboKKE1vsU8scis1iwSH+HYjroZgSQC1zKDKLcbQ/OdrVGvXkqCdHPUkDABBgAFw4UwCXTnC4AAAAAElFTkSuQmCC";const C={setup(){const a=m({F_DELIVERYNO:"",F_DELIVERYDATE:"",F_PLANSUTTLE:"",F_SUTTLE:"",yingjianshuliang:"",F_RECIVE:"",F_TRUCKNO:""});p();const i=u(),l=R(),o=()=>{i.push({path:"/pickWithQueryListData"})},A=()=>{i.push({name:"chooseWagonNumber"})};I.await("scanner",s=>{i.push({name:"jianpeiScannedResult",query:{barcode:s}})});const h=()=>{if(v(l.state.carInfo)=="")return Z({title:"提示",width:"600",message:"您尚未选择车号"}).then(()=>{}),!1;i.push({name:"pickWith"})};return L(()=>{let s=v(l.state.chukudanListInfo);a.F_DELIVERYNO=s.F_DELIVERYNO,a.F_DELIVERYDATE=s.F_DELIVERYDATE,a.F_PLANSUTTLE=s.F_PLANSUTTLE,a.F_SUTTLE=s.F_SUTTLE,a.F_RECIVE=s.F_RECIVE,a.yingjianshuliang=new M(s.F_PLANSUTTLE).minus(s.F_SUTTLE).toFixed(4),l.state.carInfo&&(a.F_TRUCKNO=v(l.state.carInfo.chehao))}),{formData:a,onClickLeft:o,onScan:h,selectCarNo:A,dateFormat:(s,g)=>{let d,c=new Date(g);const _={"Y+":c.getFullYear().toString(),"m+":(c.getMonth()+1).toString(),"d+":c.getDate().toString(),"H+":c.getHours().toString(),"M+":c.getMinutes().toString(),"S+":c.getSeconds().toString()};for(let r in _)d=new RegExp("("+r+")").exec(s),d&&(s=s.replace(d[1],d[1].length==1?_[r]:_[r].padStart(d[1].length,"0")));return s}}}},e=a=>(F("data-v-da6115fd"),a=a(),N(),a),V={id:"content",class:"content"},f={class:"container"},y={class:"prop-value-div"},j=e(()=>t("div",{class:"label"},"发货单号",-1)),B={class:"value"},H={class:"prop-value-div"},Q=e(()=>t("div",{class:"label"},"制单日期",-1)),W={class:"value"},O={class:"prop-value-div"},J=e(()=>t("div",{class:"label"},"计划数量",-1)),z={class:"value"},x={class:"prop-value-div"},P=e(()=>t("div",{class:"label"},"已发数量",-1)),X={class:"value"},K={class:"prop-value-div"},q=e(()=>t("div",{class:"label"},"应拣数量",-1)),$={class:"value"},tt={class:"prop-value-div"},st=e(()=>t("div",{class:"label"},"收货单位",-1)),ot={class:"value"},at={class:"prop-value-div"},it=e(()=>t("div",{class:"label"},"车号",-1)),et={class:"showMoreDiv"},nt={class:"value"},ct=e(()=>t("img",{src:G,alt:""},null,-1)),lt=[ct],dt={class:"btn-area"},_t=e(()=>t("div",null,"返回",-1)),rt=e(()=>t("div",null,"扫描",-1));function vt(a,i,l,o,A,h){const E=w;return S(),T(Y,null,[k(E,{title:"出库单内容",class:"page-nav-bar","left-arrow":"",onClickLeft:o.onClickLeft},null,8,["onClickLeft"]),t("div",V,[t("div",f,[t("div",y,[j,t("div",B,n(o.formData.F_DELIVERYNO),1)]),t("div",H,[Q,t("div",W,n(o.dateFormat("YYYY-mm-dd HH:MM:SS",o.formData.F_DELIVERYDATE)),1)]),t("div",O,[J,t("div",z,n(o.formData.F_PLANSUTTLE),1)]),t("div",x,[P,t("div",X,n(o.formData.F_SUTTLE),1)]),t("div",K,[q,t("div",$,n(o.formData.yingjianshuliang),1)]),t("div",tt,[st,t("div",ot,n(o.formData.F_RECIVE),1)]),t("div",at,[it,t("div",et,[t("div",nt,n(o.formData.F_TRUCKNO),1),t("div",{class:"showMore",onClick:i[0]||(i[0]=(...s)=>o.selectCarNo&&o.selectCarNo(...s))},lt)])]),t("div",dt,[t("div",null,[t("img",{src:b,alt:"",onClick:i[1]||(i[1]=(...s)=>o.onClickLeft&&o.onClickLeft(...s))}),_t]),t("div",null,[t("img",{src:U,alt:"",type:"primary",onClick:i[2]||(i[2]=(...s)=>o.onScan&&o.onScan(...s))}),rt])])])])],64)}const mt=D(C,[["render",vt],["__scopeId","data-v-da6115fd"]]);export{mt as default};
