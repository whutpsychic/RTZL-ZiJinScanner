import{_ as r,j as v,k as _,a as A,u as m,l as u,m as g,o as b,c as p,b as k,d as a,t as l,N as w,p as D,i as N}from"./index-36f8c2b2.js";import{_ as Z,a as M}from"./btn_chaxun1-383256eb.js";const G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAWCAYAAAB64jRmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0E1NTJGNzIwNUU5MTFFQUIwMEZBNjkwMDg5OTE1MzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E1NTJGNzMwNUU5MTFFQUIwMEZBNjkwMDg5OTE1MzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQTU1MkY3MDA1RTkxMUVBQjAwRkE2OTAwODk5MTUzMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQTU1MkY3MTA1RTkxMUVBQjAwRkE2OTAwODk5MTUzMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvuT0QwAAAD9SURBVHjaYgzJqmQYymD11DaCapgYRgAY9eRwASykpG1kEJpdRVE+obY5o8kVhzgnEDcC8R0g/gmlG6HipABqmUORWSxYxLiAeDcQWyGJKQNxHRC7ALErEH8jwlHUModis7DFZAWaYcgAJF5GpMOoZQ7FZmHzZBQBC2OJdBi1zKHYLGyelCVgoAyRDqOWORSbhc2TjwkY+JRIh1HLHIrNwubJ5QQMXEykw6hlDsVmYfNkOxAfw6EeJN5JpMOoZQ7FZmHz5DdosdwExHeB+BeUboKKE1vsU8scis1iwSH+HYjroZgSQC1zKDKLcbQ/OdrVGvXkqCdHPUkDABBgAFw4UwCXTnC4AAAAAElFTkSuQmCC";const I={setup(){let i=v({billNo:"",zhidanriqi:"",jihuashuliang:"",yifashuliang:"",yingjianshuliang:"",shouhuodanwei:"",chehao:""});_();const n=A(),t=m(),o=()=>history.back(),d=()=>{n.push({name:"chooseCarNumber"})};u.await("scanner",s=>{n.push({name:"jianpeiScannedResult",query:{barcode:s}})});const h=()=>{u.scan()};return g(()=>{let s="";t.state.chukudan&&(s=t.state.chukudan,i.billNo=s.billNo,i.zhidanriqi=s.zhidanriqi,i.jihuashuliang=s.jihuashuliang,i.yifashuliang=s.yifashuliang,i.yingjianshuliang=s.yingjianshuliang,i.shouhuodanwei=s.shouhuodanwei),t.state.chukudanListInfo&&(s=t.state.chukudanListInfo,i.billNo=s.billNo,i.zhidanriqi=s.deliveryDate,i.jihuashuliang=s.planNum,i.yifashuliang=s.actualNum,i.yingjianshuliang=parseInt(s.planNum)-parseInt(s.actualNum),i.shouhuodanwei=s.receiveUnit),t.state.carInfo&&(i.chehao=t.state.carInfo.plateNo),t.commit("setChukudan",i)}),{formData:i,onClickLeft:o,onScan:h,selectCarNo:d}}},e=i=>(D("data-v-81be35ef"),i=i(),N(),i),y={class:"container"},j={class:"prop-value-div"},R=e(()=>a("div",{class:"label"},"发货单号",-1)),f={class:"value"},Y={class:"prop-value-div"},C=e(()=>a("div",{class:"label"},"制单日期",-1)),S={class:"value"},U={class:"prop-value-div"},E=e(()=>a("div",{class:"label"},"计划数量",-1)),L={class:"value"},z={class:"prop-value-div"},B=e(()=>a("div",{class:"label"},"已发数量",-1)),V={class:"value"},J={class:"prop-value-div"},Q=e(()=>a("div",{class:"label"},"应捡数量",-1)),T={class:"value"},H={class:"prop-value-div"},W=e(()=>a("div",{class:"label"},"收货单位",-1)),O={class:"value"},F={class:"prop-value-div"},x=e(()=>a("div",{class:"label"},"车号",-1)),X={class:"showMoreDiv"},P={class:"value"},q=e(()=>a("img",{src:G,alt:""},null,-1)),K=[q],$={class:"btn-area"},aa=e(()=>a("div",null,"返回",-1)),ia=e(()=>a("div",null,"扫描",-1));function sa(i,n,t,o,d,h){const s=w;return b(),p("main",null,[k(s,{title:"出库单内容",class:"page-nav-bar","left-arrow":"",onClickLeft:o.onClickLeft},null,8,["onClickLeft"]),a("div",y,[a("div",j,[R,a("div",f,l(o.formData.billNo),1)]),a("div",Y,[C,a("div",S,l(o.formData.zhidanriqi.substr(0,10)),1)]),a("div",U,[E,a("div",L,l(o.formData.jihuashuliang),1)]),a("div",z,[B,a("div",V,l(o.formData.yifashuliang),1)]),a("div",J,[Q,a("div",T,l(o.formData.yingjianshuliang),1)]),a("div",H,[W,a("div",O,l(o.formData.shouhuodanwei),1)]),a("div",F,[x,a("div",X,[a("div",P,l(o.formData.chehao),1),a("div",{class:"showMore",onClick:n[0]||(n[0]=(...c)=>o.selectCarNo&&o.selectCarNo(...c))},K)])]),a("div",$,[a("div",null,[a("img",{src:Z,alt:"",onClick:n[1]||(n[1]=(...c)=>o.onClickLeft&&o.onClickLeft(...c))}),aa]),a("div",null,[a("img",{src:M,alt:"",type:"primary",onClick:n[2]||(n[2]=(...c)=>o.onScan&&o.onScan(...c))}),ia])])])])}const na=r(I,[["render",sa],["__scopeId","data-v-81be35ef"]]);export{na as default};