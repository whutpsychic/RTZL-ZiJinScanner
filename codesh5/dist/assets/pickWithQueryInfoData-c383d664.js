import{_ as D,B as m,E as p,u,a as R,o as I,t as v,b as L,c as S,d as T,i as t,j as n,F as k,N,p as Y,h as w}from"./index-17486206.js";/* empty css              */import{B as F}from"./bignumber-266e6c56.js";import{_ as M,a as b}from"./btn_chaxun1-383256eb.js";import{a as U}from"./function-call-7e0dafdb.js";const Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAWCAYAAAB64jRmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0E1NTJGNzIwNUU5MTFFQUIwMEZBNjkwMDg5OTE1MzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E1NTJGNzMwNUU5MTFFQUIwMEZBNjkwMDg5OTE1MzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQTU1MkY3MDA1RTkxMUVBQjAwRkE2OTAwODk5MTUzMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQTU1MkY3MTA1RTkxMUVBQjAwRkE2OTAwODk5MTUzMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvuT0QwAAAD9SURBVHjaYgzJqmQYymD11DaCapgYRgAY9eRwASykpG1kEJpdRVE+obY5o8kVhzgnEDcC8R0g/gmlG6HipABqmUORWSxYxLiAeDcQWyGJKQNxHRC7ALErEH8jwlHUModis7DFZAWaYcgAJF5GpMOoZQ7FZmHzZBQBC2OJdBi1zKHYLGyelCVgoAyRDqOWORSbhc2TjwkY+JRIh1HLHIrNwubJ5QQMXEykw6hlDsVmYfNkOxAfw6EeJN5JpMOoZQ7FZmHz5DdosdwExHeB+BeUboKKE1vsU8scis1iwSH+HYjroZgSQC1zKDKLcbQ/OdrVGvXkqCdHPUkDABBgAFw4UwCXTnC4AAAAAElFTkSuQmCC";const G={setup(){const a=m({F_DELIVERYNO:"",F_DELIVERYDATE:"",F_PLANSUTTLE:"",F_SUTTLE:"",yingjianshuliang:"",F_RECIVE:"",F_TRUCKNO:""});p();const e=u(),l=R(),s=()=>{e.push({path:"/pickWithQueryListData"})},A=()=>{e.push({name:"chooseWagonNumber"})},h=()=>{if(Object.getOwnPropertyNames(v(l.state.carInfo)).length==0)return U({title:"提示",width:"600",message:"您尚未选择车号"}).then(()=>{}),!1;e.push({name:"pickWith"})};return I(()=>{let o=v(l.state.chukudanListInfo);a.F_DELIVERYNO=o.F_DELIVERYNO,a.F_DELIVERYDATE=o.F_DELIVERYDATE,a.F_PLANSUTTLE=o.F_PLANSUTTLE,a.F_SUTTLE=o.F_SUTTLE,a.F_RECIVE=o.F_RECIVE,a.yingjianshuliang=new F(o.F_PLANSUTTLE).minus(o.F_SUTTLE).toFixed(4),l.state.carInfo&&(a.F_TRUCKNO=v(l.state.carInfo.chehao))}),{formData:a,onClickLeft:s,onScan:h,selectCarNo:A,dateFormat:(o,g)=>{let d,c=new Date(g);const _={"Y+":c.getFullYear().toString(),"m+":(c.getMonth()+1).toString(),"d+":c.getDate().toString(),"H+":c.getHours().toString(),"M+":c.getMinutes().toString(),"S+":c.getSeconds().toString()};for(let r in _)d=new RegExp("("+r+")").exec(o),d&&(o=o.replace(d[1],d[1].length==1?_[r]:_[r].padStart(d[1].length,"0")));return o}}}},i=a=>(Y("data-v-2e8e8d2a"),a=a(),w(),a),C={id:"content",class:"content"},V={class:"container"},y={class:"prop-value-div"},f=i(()=>t("div",{class:"label"},"发货单号",-1)),j={class:"value"},B={class:"prop-value-div"},H=i(()=>t("div",{class:"label"},"制单日期",-1)),O={class:"value"},Q={class:"prop-value-div"},W=i(()=>t("div",{class:"label"},"计划数量",-1)),J={class:"value"},z={class:"prop-value-div"},x=i(()=>t("div",{class:"label"},"已发数量",-1)),P={class:"value"},X={class:"prop-value-div"},K=i(()=>t("div",{class:"label"},"应拣数量",-1)),q={class:"value"},$={class:"prop-value-div"},tt=i(()=>t("div",{class:"label"},"收货单位",-1)),ot={class:"value"},st={class:"prop-value-div"},at=i(()=>t("div",{class:"label"},"车号",-1)),et={class:"showMoreDiv"},it={class:"value"},nt=i(()=>t("img",{src:Z,alt:""},null,-1)),ct=[nt],lt={class:"btn-area"},dt=i(()=>t("div",null,"返回",-1)),_t=i(()=>t("div",null,"扫描",-1));function rt(a,e,l,s,A,h){const E=N;return L(),S(k,null,[T(E,{title:"出库单内容",class:"page-nav-bar","left-arrow":"",onClickLeft:s.onClickLeft},null,8,["onClickLeft"]),t("div",C,[t("div",V,[t("div",y,[f,t("div",j,n(s.formData.F_DELIVERYNO),1)]),t("div",B,[H,t("div",O,n(s.dateFormat("YYYY-mm-dd HH:MM:SS",s.formData.F_DELIVERYDATE)),1)]),t("div",Q,[W,t("div",J,n(s.formData.F_PLANSUTTLE),1)]),t("div",z,[x,t("div",P,n(s.formData.F_SUTTLE),1)]),t("div",X,[K,t("div",q,n(s.formData.yingjianshuliang),1)]),t("div",$,[tt,t("div",ot,n(s.formData.F_RECIVE),1)]),t("div",st,[at,t("div",et,[t("div",it,n(s.formData.F_TRUCKNO),1),t("div",{class:"showMore",onClick:e[0]||(e[0]=(...o)=>s.selectCarNo&&s.selectCarNo(...o))},ct)])]),t("div",lt,[t("div",null,[t("img",{src:M,alt:"",onClick:e[1]||(e[1]=(...o)=>s.onClickLeft&&s.onClickLeft(...o))}),dt]),t("div",null,[t("img",{src:b,alt:"",type:"primary",onClick:e[2]||(e[2]=(...o)=>s.onScan&&s.onScan(...o))}),_t])])])])],64)}const Dt=D(G,[["render",rt],["__scopeId","data-v-2e8e8d2a"]]);export{Dt as default};
