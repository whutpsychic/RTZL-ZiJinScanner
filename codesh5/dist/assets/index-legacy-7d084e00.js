System.register(["./index-legacy-06067943.js","./index-legacy-f215077d.js","./mount-component-legacy-6fd7a7c6.js","./index-legacy-6b403277.js","./index-legacy-3d9e51f4.js"],(function(e,a){"use strict";var t,n,o,r,l,i,s,c,d,v,u,p,m,g,f,h,b,k,y,w,x,_,D,z,S,T,O,C,H,M,B,A,I,P,R,j,N,F,V;return{setters:[e=>{t=e.c,n=e.ap,o=e.e,r=e.aA,l=e.d,i=e.n,s=e.an,c=e.aC,d=e.p,v=e.f,u=e.i,p=e.ab,m=e.a,g=e.ay,f=e.av,h=e.m,b=e.t,k=e.a8,y=e.aj,w=e.a3,x=e.aO,_=e.ax,D=e.ae,z=e.a5,S=e.h,T=e.aP,O=e.aQ,C=e.b,H=e.ag,M=e.aR,B=e.af,A=e.a2,I=e.w},e=>{P=e.u},e=>{R=e.a,j=e.u,N=e.P},e=>{F=e.s},e=>{V=e.a}],execute:function(){var a=document.createElement("style");a.textContent=':root{--van-toast-max-width: 70%;--van-toast-font-size: var(--van-font-size-md);--van-toast-text-color: var(--van-white);--van-toast-loading-icon-color: var(--van-white);--van-toast-line-height: var(--van-line-height-md);--van-toast-radius: var(--van-radius-lg);--van-toast-background: rgba(0, 0, 0, .7);--van-toast-icon-size: 36px;--van-toast-text-min-width: 96px;--van-toast-text-padding: var(--van-padding-xs) var(--van-padding-sm);--van-toast-default-padding: var(--van-padding-md);--van-toast-default-width: 88px;--van-toast-default-min-height: 88px;--van-toast-position-top-distance: 20%;--van-toast-position-bottom-distance: 20%}.van-toast{display:flex;flex-direction:column;align-items:center;justify-content:center;box-sizing:content-box;transition:all var(--van-duration-fast);width:var(--van-toast-default-width);max-width:var(--van-toast-max-width);min-height:var(--van-toast-default-min-height);padding:var(--van-toast-default-padding);color:var(--van-toast-text-color);font-size:var(--van-toast-font-size);line-height:var(--van-toast-line-height);white-space:pre-wrap;word-break:break-all;text-align:center;background:var(--van-toast-background);border-radius:var(--van-toast-radius)}.van-toast--break-normal{word-break:normal;word-wrap:normal}.van-toast--break-word{word-break:normal;word-wrap:break-word}.van-toast--unclickable{overflow:hidden;cursor:not-allowed}.van-toast--unclickable *{pointer-events:none}.van-toast--text,.van-toast--html{width:-webkit-fit-content;width:fit-content;min-width:var(--van-toast-text-min-width);min-height:0;padding:var(--van-toast-text-padding)}.van-toast--text .van-toast__text,.van-toast--html .van-toast__text{margin-top:0}.van-toast--top{top:var(--van-toast-position-top-distance)}.van-toast--bottom{top:auto;bottom:var(--van-toast-position-bottom-distance)}.van-toast__icon{font-size:var(--van-toast-icon-size)}.van-toast__loading{padding:var(--van-padding-base);color:var(--van-toast-loading-icon-color)}.van-toast__text{margin-top:var(--van-padding-xs)}:root{--van-picker-background: var(--van-background-2);--van-picker-toolbar-height: 44px;--van-picker-title-font-size: var(--van-font-size-lg);--van-picker-title-line-height: var(--van-line-height-md);--van-picker-action-padding: 0 var(--van-padding-md);--van-picker-action-font-size: var(--van-font-size-md);--van-picker-confirm-action-color: var(--van-primary-color);--van-picker-cancel-action-color: var(--van-text-color-2);--van-picker-option-font-size: var(--van-font-size-lg);--van-picker-option-padding: 0 var(--van-padding-base);--van-picker-option-text-color: var(--van-text-color);--van-picker-option-disabled-opacity: .3;--van-picker-loading-icon-color: var(--van-primary-color);--van-picker-loading-mask-color: rgba(255, 255, 255, .9);--van-picker-mask-color: linear-gradient(180deg, rgba(255, 255, 255, .9), rgba(255, 255, 255, .4)), linear-gradient(0deg, rgba(255, 255, 255, .9), rgba(255, 255, 255, .4))}.van-theme-dark{--van-picker-loading-mask-color: rgba(0, 0, 0, .6);--van-picker-mask-color: linear-gradient(180deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, .1)), linear-gradient(0deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, .1))}.van-picker{position:relative;background:var(--van-picker-background);-webkit-user-select:none;user-select:none}.van-picker__toolbar{position:relative;display:flex;align-items:center;justify-content:space-between;height:var(--van-picker-toolbar-height)}.van-picker__cancel,.van-picker__confirm{height:100%;padding:var(--van-picker-action-padding);font-size:var(--van-picker-action-font-size);background-color:transparent;border:none}.van-picker__confirm{color:var(--van-picker-confirm-action-color)}.van-picker__cancel{color:var(--van-picker-cancel-action-color)}.van-picker__title{position:absolute;left:50%;color:var(--van-text-color);max-width:50%;font-weight:var(--van-font-bold);font-size:var(--van-picker-title-font-size);line-height:var(--van-picker-title-line-height);text-align:center;transform:translate(-50%)}.van-picker__columns{position:relative;display:flex;cursor:-webkit-grab;cursor:grab}.van-picker__loading{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:flex;align-items:center;justify-content:center;color:var(--van-picker-loading-icon-color);background:var(--van-picker-loading-mask-color)}.van-picker__frame{position:absolute;top:50%;right:var(--van-padding-md);left:var(--van-padding-md);z-index:2;transform:translateY(-50%);pointer-events:none}.van-picker__mask{position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;background-image:var(--van-picker-mask-color);background-repeat:no-repeat;background-position:top,bottom;transform:translateZ(0);pointer-events:none}.van-picker-column{flex:1;overflow:hidden;font-size:var(--van-picker-option-font-size)}.van-picker-column__wrapper{transition-timing-function:cubic-bezier(.23,1,.68,1)}.van-picker-column__item{display:flex;align-items:center;justify-content:center;padding:var(--van-picker-option-padding);color:var(--van-picker-option-text-color)}.van-picker-column__item--disabled{cursor:not-allowed;opacity:var(--van-picker-option-disabled-opacity)}:root{--van-picker-group-background: var(--van-background-2)}.van-picker-group{background:var(--van-picker-group-background)}.van-picker-group__tabs{margin-top:var(--van-padding-base)}.van-picker-group__tab-title{margin-right:16px}:root{--van-calendar-background: var(--van-background-2);--van-calendar-popup-height: 80%;--van-calendar-header-shadow: 0 2px 10px rgba(125, 126, 128, .16);--van-calendar-header-title-height: 44px;--van-calendar-header-title-font-size: var(--van-font-size-lg);--van-calendar-header-subtitle-font-size: var(--van-font-size-md);--van-calendar-weekdays-height: 30px;--van-calendar-weekdays-font-size: var(--van-font-size-sm);--van-calendar-month-title-font-size: var(--van-font-size-md);--van-calendar-month-mark-color: rgba(242, 243, 245, .8);--van-calendar-month-mark-font-size: 160px;--van-calendar-day-height: 64px;--van-calendar-day-font-size: var(--van-font-size-lg);--van-calendar-day-margin-bottom: 4px;--van-calendar-range-edge-color: var(--van-white);--van-calendar-range-edge-background: var(--van-primary-color);--van-calendar-range-middle-color: var(--van-primary-color);--van-calendar-range-middle-background-opacity: .1;--van-calendar-selected-day-size: 54px;--van-calendar-selected-day-color: var(--van-white);--van-calendar-info-font-size: var(--van-font-size-xs);--van-calendar-info-line-height: var(--van-line-height-xs);--van-calendar-selected-day-background: var(--van-primary-color);--van-calendar-day-disabled-color: var(--van-text-color-3);--van-calendar-confirm-button-height: 36px;--van-calendar-confirm-button-margin: 7px 0}.van-theme-dark{--van-calendar-month-mark-color: rgba(100, 101, 102, .2);--van-calendar-day-disabled-color: var(--van-gray-7)}.van-calendar{display:flex;flex-direction:column;height:100%;background:var(--van-calendar-background)}.van-calendar__popup.van-popup--top,.van-calendar__popup.van-popup--bottom{height:var(--van-calendar-popup-height)}.van-calendar__popup.van-popup--left,.van-calendar__popup.van-popup--right{height:100%}.van-calendar__popup .van-popup__close-icon{top:11px}.van-calendar__header{flex-shrink:0;box-shadow:var(--van-calendar-header-shadow)}.van-calendar__month-title,.van-calendar__header-title,.van-calendar__header-subtitle{color:var(--van-text-color);height:var(--van-calendar-header-title-height);font-weight:var(--van-font-bold);line-height:var(--van-calendar-header-title-height);text-align:center}.van-calendar__header-title{font-size:var(--van-calendar-header-title-font-size)}.van-calendar__header-subtitle{font-size:var(--van-calendar-header-subtitle-font-size)}.van-calendar__month-title{font-size:var(--van-calendar-month-title-font-size)}.van-calendar__weekdays{display:flex}.van-calendar__weekday{flex:1;font-size:var(--van-calendar-weekdays-font-size);line-height:var(--van-calendar-weekdays-height);text-align:center}.van-calendar__body{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.van-calendar__days{position:relative;display:flex;flex-wrap:wrap;-webkit-user-select:none;user-select:none}.van-calendar__month-mark{position:absolute;top:50%;left:50%;z-index:0;color:var(--van-calendar-month-mark-color);font-size:var(--van-calendar-month-mark-font-size);transform:translate(-50%,-50%);pointer-events:none}.van-calendar__day,.van-calendar__selected-day{display:flex;align-items:center;justify-content:center;text-align:center}.van-calendar__day{position:relative;width:14.285%;height:var(--van-calendar-day-height);font-size:var(--van-calendar-day-font-size);margin-bottom:var(--van-calendar-day-margin-bottom);cursor:pointer}.van-calendar__day--end,.van-calendar__day--start,.van-calendar__day--start-end,.van-calendar__day--multiple-middle,.van-calendar__day--multiple-selected{color:var(--van-calendar-range-edge-color);background:var(--van-calendar-range-edge-background)}.van-calendar__day--start{border-radius:var(--van-radius-md) 0 0 var(--van-radius-md)}.van-calendar__day--end{border-radius:0 var(--van-radius-md) var(--van-radius-md) 0}.van-calendar__day--start-end,.van-calendar__day--multiple-selected{border-radius:var(--van-radius-md)}.van-calendar__day--middle{color:var(--van-calendar-range-middle-color)}.van-calendar__day--middle:after{position:absolute;top:0;right:0;bottom:0;left:0;background-color:currentColor;opacity:var(--van-calendar-range-middle-background-opacity);content:""}.van-calendar__day--disabled{color:var(--van-calendar-day-disabled-color);cursor:default}.van-calendar__top-info,.van-calendar__bottom-info{position:absolute;right:0;left:0;font-size:var(--van-calendar-info-font-size);line-height:var(--van-calendar-info-line-height)}@media (max-width: 350px){.van-calendar__top-info,.van-calendar__bottom-info{font-size:9px}}.van-calendar__top-info{top:6px}.van-calendar__bottom-info{bottom:6px}.van-calendar__selected-day{width:var(--van-calendar-selected-day-size);height:var(--van-calendar-selected-day-size);color:var(--van-calendar-selected-day-color);background:var(--van-calendar-selected-day-background);border-radius:var(--van-radius-md)}.van-calendar__footer{flex-shrink:0;padding-left:var(--van-padding-md);padding-right:var(--van-padding-md)}.van-calendar__confirm{height:var(--van-calendar-confirm-button-height);margin:var(--van-calendar-confirm-button-margin)}\n',document.head.appendChild(a);const[W,Y,$]=t("picker"),E=e=>e.find((e=>!e.disabled))||e[0];function L(e,a){for(let t=a=r(a,0,e.length);t<e.length;t++)if(!e[t].disabled)return t;for(let t=a-1;t>=0;t--)if(!e[t].disabled)return t;return 0}const Q=(e,a,t)=>void 0!==a&&!!e.find((e=>e[t.value]===a));function U(e,a,t){const n=e.findIndex((e=>e[t.value]===a));return e[L(e,n)]}const[Z,q]=t("picker-column"),G=Symbol(Z);var J=l({name:Z,props:{value:i,fields:s(Object),options:c(),readonly:Boolean,allowHtml:Boolean,optionHeight:s(Number),swipeDuration:s(i),visibleOptionNum:s(i)},emits:["change","clickOption","scrollInto"],setup(e,{emit:a,slots:t}){let n,o,l,i,s;const c=d(),f=d(),h=d(0),b=d(0),k=R(),y=()=>e.options.length,w=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,x=t=>{const o=L(e.options,t),r=-o*e.optionHeight,l=()=>{const t=e.options[o][e.fields.value];t!==e.value&&a("change",t)};n&&r!==h.value?s=l:l(),h.value=r},_=()=>e.readonly||!e.options.length,D=a=>r(Math.round(-a/e.optionHeight),0,y()-1),z=v((()=>D(h.value))),S=()=>{n=!1,b.value=0,s&&(s(),s=null)},T=e=>{if(!_()){if(k.start(e),n){const e=function(e){const{transform:a}=window.getComputedStyle(e),t=a.slice(7,a.length-1).split(", ")[5];return Number(t)}(f.value);h.value=Math.min(0,e-w())}b.value=0,o=h.value,l=Date.now(),i=o,s=null}},O=()=>{if(_())return;const a=h.value-i,t=Date.now()-l;if(t<300&&Math.abs(a)>15)return void((a,t)=>{const n=Math.abs(a/t);a=h.value+n/.003*(a<0?-1:1);const o=D(a);b.value=+e.swipeDuration,x(o)})(a,t);const o=D(h.value);b.value=200,x(o),setTimeout((()=>{n=!1}),0)},C=()=>{const o={height:`${e.optionHeight}px`};return e.options.map(((r,l)=>{const i=r[e.fields.text],{disabled:c}=r,d=r[e.fields.value],v={role:"button",style:o,tabindex:c?-1:0,class:[q("item",{disabled:c,selected:d===e.value}),r.className],onClick:()=>(t=>{n||_()||(s=null,b.value=200,x(t),a("clickOption",e.options[t]))})(l)},u={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:i};return m("li",v,[t.option?t.option(r,l):m("div",u,null)])}))};return u.useParent(G),j({stopMomentum:S}),p((()=>{const a=e.options.findIndex((a=>a[e.fields.value]===e.value)),t=-L(e.options,a)*e.optionHeight;h.value=t})),u.useEventListener("touchmove",(t=>{if(_())return;k.move(t),k.isVertical()&&(n=!0,g(t,!0));const s=r(o+k.deltaY.value,-y()*e.optionHeight,e.optionHeight),c=D(s);c!==z.value&&a("scrollInto",e.options[c]),h.value=s;const d=Date.now();d-l>300&&(l=d,i=s)}),{target:c}),()=>m("div",{ref:c,class:q(),onTouchstartPassive:T,onTouchend:O,onTouchcancel:O},[m("ul",{ref:f,style:{transform:`translate3d(0, ${h.value+w()}px, 0)`,transitionDuration:`${b.value}ms`,transitionProperty:b.value?"all":"none"},class:q("wrapper"),onTransitionend:S},[C()])])}});const[K]=t("picker-toolbar"),X={title:String,cancelButtonText:String,confirmButtonText:String},ee=["cancel","confirm","title","toolbar"],ae=Object.keys(X);var te=l({name:K,props:X,emits:["confirm","cancel"],setup(e,{emit:a,slots:t}){const n=()=>a("cancel"),o=()=>a("confirm"),r=()=>{const a=e.cancelButtonText||$("cancel");return m("button",{type:"button",class:[Y("cancel"),f],onClick:n},[t.cancel?t.cancel():a])},l=()=>{const a=e.confirmButtonText||$("confirm");return m("button",{type:"button",class:[Y("confirm"),f],onClick:o},[t.confirm?t.confirm():a])};return()=>m("div",{class:Y("toolbar")},[t.toolbar?t.toolbar():[r(),t.title?t.title():e.title?m("div",{class:[Y("title"),"van-ellipsis"]},[e.title]):void 0,l()]])}});const[ne,oe]=t("picker-group"),re=Symbol(ne);o({tabs:c(),activeTab:h(0),nextStepText:String},X);const le=o({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:h(44),showToolbar:b,swipeDuration:h(1e3),visibleOptionNum:h(6)},X),ie=o({},le,{columns:c(),modelValue:c(),toolbarPosition:k("top"),columnsFieldNames:Object});e("s",l({name:W,props:ie,emits:["confirm","cancel","change","scrollInto","clickOption","update:modelValue"],setup(e,{emit:a,slots:t}){const r=d(),l=d(e.modelValue.slice(0)),{parent:i}=u.useParent(re),{children:s,linkChildren:c}=u.useChildren(G);c();const p=v((()=>function(e){return o({text:"text",value:"value",children:"children"},e)}(e.columnsFieldNames))),f=v((()=>y(e.optionHeight))),h=v((()=>function(e,a){const t=e[0];if(t){if(Array.isArray(t))return"multiple";if(a.children in t)return"cascade"}return"default"}(e.columns,p.value))),b=v((()=>{const{columns:a}=e;switch(h.value){case"multiple":return a;case"cascade":return function(e,a,t){const o=[];let r={[a.children]:e},l=0;for(;r&&r[a.children];){const e=r[a.children],i=t.value[l];r=n(i)?U(e,i,a):void 0,!r&&e.length&&(r=U(e,E(e)[a.value],a)),l++,o.push(e)}return o}(a,p.value,l);default:return[a]}})),k=v((()=>b.value.some((e=>e.length)))),O=v((()=>b.value.map(((e,a)=>U(e,l.value[a],p.value))))),C=v((()=>b.value.map(((e,a)=>e.findIndex((e=>e[p.value.value]===l.value[a])))))),H=(e,a)=>{if(l.value[e]!==a){const t=l.value.slice(0);t[e]=a,l.value=t}},M=()=>({selectedValues:l.value.slice(0),selectedOptions:O.value,selectedIndexes:C.value}),B=()=>{s.forEach((e=>e.stopMomentum()));const e=M();return D((()=>{a("confirm",e)})),e},A=()=>a("cancel",M()),I=()=>b.value.map(((n,r)=>m(J,{value:l.value[r],fields:p.value,options:n,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:f.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:e=>((e,t)=>{H(t,e),"cascade"===h.value&&l.value.forEach(((e,a)=>{const t=b.value[a];Q(t,e,p.value)||H(a,t.length?t[0][p.value.value]:void 0)})),D((()=>{a("change",o({columnIndex:t},M()))}))})(e,r),onClickOption:e=>((e,t)=>{const n={columnIndex:t,currentOption:e};a("clickOption",o(M(),n)),a("scrollInto",n)})(e,r),onScrollInto:e=>{a("scrollInto",{currentOption:e,columnIndex:r})}},{option:t.option}))),P=e=>{if(k.value){const a={height:`${f.value}px`},t={backgroundSize:`100% ${(e-f.value)/2}px`};return[m("div",{class:Y("mask"),style:t},null),m("div",{class:[T,Y("frame")],style:a},null)]}},R=()=>{const a=f.value*+e.visibleOptionNum,t={height:`${a}px`};return m("div",{ref:r,class:Y("columns"),style:t},[I(),P(a)])},N=()=>{if(e.showToolbar&&!i)return m(te,S(z(e,ae),{onConfirm:B,onCancel:A}),z(t,ee))};let F;return w(b,(e=>{e.forEach(((e,a)=>{e.length&&!Q(e,l.value[a],p.value)&&H(a,E(e)[p.value.value])}))}),{immediate:!0}),w((()=>e.modelValue),(e=>{x(e,l.value)||x(e,F)||(l.value=e.slice(0),F=e.slice(0))}),{deep:!0}),w(l,(t=>{x(t,e.modelValue)||(F=t.slice(0),a("update:modelValue",F))}),{immediate:!0}),u.useEventListener("touchmove",g,{target:r}),j({confirm:B,getSelectedOptions:()=>O.value}),()=>{var a,n;return m("div",{class:Y()},["top"===e.toolbarPosition?N():null,e.loading?m(_,{class:Y("loading")},null):null,null==(a=t["columns-top"])?void 0:a.call(t),R(),null==(n=t["columns-bottom"])?void 0:n.call(t),"bottom"===e.toolbarPosition?N():null])}}}));const[se,ce,de]=t("calendar");function ve(e,a){const t=e.getFullYear(),n=a.getFullYear();if(t===n){const t=e.getMonth(),n=a.getMonth();return t===n?0:t>n?1:-1}return t>n?1:-1}function ue(e,a){const t=ve(e,a);if(0===t){const t=e.getDate(),n=a.getDate();return t===n?0:t>n?1:-1}return t}const pe=e=>new Date(e),me=e=>Array.isArray(e)?e.map(pe):pe(e);function ge(e,a){const t=pe(e);return t.setDate(t.getDate()+a),t}const fe=e=>ge(e,-1),he=e=>ge(e,1),be=()=>{const e=new Date;return e.setHours(0,0,0,0),e};o({},le,{modelValue:c(),filter:Function,formatter:{type:Function,default:(e,a)=>a}});const[ke]=t("calendar-day");var ye=l({name:ke,props:{item:s(Object),color:String,index:Number,offset:O(0),rowHeight:String},emits:["click"],setup(e,{emit:a,slots:t}){const n=v((()=>{var a;const{item:t,index:n,color:o,offset:r,rowHeight:l}=e,i={height:l};if("placeholder"===t.type)return i.width="100%",i;if(0===n&&(i.marginLeft=100*r/7+"%"),o)switch(t.type){case"end":case"start":case"start-end":case"multiple-middle":case"multiple-selected":i.background=o;break;case"middle":i.color=o}return r+((null==(a=t.date)?void 0:a.getDate())||1)>28&&(i.marginBottom=0),i})),o=()=>{"disabled"!==e.item.type&&a("click",e.item)},r=()=>{const{topInfo:a}=e.item;if(a||t["top-info"])return m("div",{class:ce("top-info")},[t["top-info"]?t["top-info"](e.item):a])},l=()=>{const{bottomInfo:a}=e.item;if(a||t["bottom-info"])return m("div",{class:ce("bottom-info")},[t["bottom-info"]?t["bottom-info"](e.item):a])},i=()=>{const{item:a,color:t,rowHeight:n}=e,{type:o,text:i}=a,s=[r(),i,l()];return"selected"===o?m("div",{class:ce("selected-day"),style:{width:n,height:n,background:t}},[s]):s};return()=>{const{type:a,className:t}=e.item;return"placeholder"===a?m("div",{class:ce("day"),style:n.value},null):m("div",{role:"gridcell",style:n.value,class:[ce("day",a),t],tabindex:"disabled"===a?void 0:-1,onClick:o},[i()])}}});const[we]=t("calendar-month"),xe={date:s(Date),type:String,color:String,minDate:s(Date),maxDate:s(Date),showMark:Boolean,rowHeight:i,formatter:Function,lazyRender:Boolean,currentDate:[Date,Array],allowSameDay:Boolean,showSubtitle:Boolean,showMonthTitle:Boolean,firstDayOfWeek:Number};var _e=l({name:we,props:xe,emits:["click"],setup(e,{emit:a,slots:t}){const[n,o]=u.useToggle(),r=d(),l=d(),i=V(l),s=v((()=>{return a=e.date,de("monthTitle",a.getFullYear(),a.getMonth()+1);var a})),c=v((()=>C(e.rowHeight))),p=v((()=>{const a=e.date.getDay();return e.firstDayOfWeek?(a+7-e.firstDayOfWeek)%7:a})),g=v((()=>{return a=e.date.getFullYear(),t=e.date.getMonth()+1,32-new Date(a,t-1,32).getDate();var a,t})),f=v((()=>n.value||!e.lazyRender)),h=a=>{const{type:t,minDate:n,maxDate:o,currentDate:r}=e;if(ue(a,n)<0||ue(a,o)>0)return"disabled";if(null===r)return"";if(Array.isArray(r)){if("multiple"===t)return(a=>{const t=a=>e.currentDate.some((e=>0===ue(e,a)));if(t(a)){const e=fe(a),n=he(a),o=t(e),r=t(n);return o&&r?"multiple-middle":o?"end":r?"start":"multiple-selected"}return""})(a);if("range"===t)return(a=>{const[t,n]=e.currentDate;if(!t)return"";const o=ue(a,t);if(!n)return 0===o?"start":"";const r=ue(a,n);return e.allowSameDay&&0===o&&0===r?"start-end":0===o?"start":0===r?"end":o>0&&r<0?"middle":""})(a)}else if("single"===t)return 0===ue(a,r)?"selected":"";return""},b=a=>{if("range"===e.type){if("start"===a||"end"===a)return de(a);if("start-end"===a)return`${de("start")}/${de("end")}`}},k=()=>{if(e.showMonthTitle)return m("div",{class:ce("month-title")},[t["month-title"]?t["month-title"]({date:e.date,text:s.value}):s.value])},y=()=>{if(e.showMark&&f.value)return m("div",{class:ce("month-mark")},[e.date.getMonth()+1])},w=v((()=>{const e=Math.ceil((g.value+p.value)/7);return Array(e).fill({type:"placeholder"})})),x=v((()=>{const a=[],t=e.date.getFullYear(),n=e.date.getMonth();for(let o=1;o<=g.value;o++){const r=new Date(t,n,o),l=h(r);let i={date:r,type:l,text:o,bottomInfo:b(l)};e.formatter&&(i=e.formatter(i)),a.push(i)}return a})),_=v((()=>x.value.filter((e=>"disabled"===e.type)))),D=(n,o)=>m(ye,{item:n,index:o,color:e.color,offset:p.value,rowHeight:c.value,onClick:e=>a("click",e)},z(t,["top-info","bottom-info"]));return j({getTitle:()=>s.value,getHeight:()=>i.value,setVisible:o,scrollToDate:(e,a)=>{if(r.value){const t=u.useRect(r.value),n=w.value.length,o=(Math.ceil((a.getDate()+p.value)/7)-1)*t.height/n;H(e,t.top+o+e.scrollTop-u.useRect(e).top)}},disabledDays:_}),()=>m("div",{class:ce("month"),ref:l},[k(),m("div",{ref:r,role:"grid",class:ce("days")},[y(),(f.value?x:w).value.map(D)])])}});const[De]=t("calendar-header");var ze=l({name:De,props:{date:Date,title:String,subtitle:String,showTitle:Boolean,showSubtitle:Boolean,firstDayOfWeek:Number},emits:["clickSubtitle"],setup(e,{slots:a,emit:t}){const n=()=>{if(e.showTitle){const t=e.title||de("title"),n=a.title?a.title():t;return m("div",{class:ce("header-title")},[n])}},o=e=>t("clickSubtitle",e),r=()=>{if(e.showSubtitle){const t=a.subtitle?a.subtitle({date:e.date,text:e.subtitle}):e.subtitle;return m("div",{class:ce("header-subtitle"),onClick:o},[t])}},l=()=>{const{firstDayOfWeek:a}=e,t=de("weekdays"),n=[...t.slice(a,7),...t.slice(0,a)];return m("div",{class:ce("weekdays")},[n.map((e=>m("span",{class:ce("weekday")},[e])))])};return()=>m("div",{class:ce("header")},[n(),r(),l()])}});const Se={show:Boolean,type:k("single"),title:String,color:String,round:b,readonly:Boolean,poppable:b,maxRange:h(null),position:k("bottom"),teleport:[String,Object],showMark:b,showTitle:b,formatter:Function,rowHeight:i,confirmText:String,rangePrompt:String,lazyRender:b,showConfirm:b,defaultDate:[Date,Array],allowSameDay:Boolean,showSubtitle:b,closeOnPopstate:b,showRangePrompt:b,confirmDisabledText:String,closeOnClickOverlay:b,safeAreaInsetTop:Boolean,safeAreaInsetBottom:b,minDate:{type:Date,validator:M,default:be},maxDate:{type:Date,validator:M,default:()=>{const e=be();return new Date(e.getFullYear(),e.getMonth()+6,e.getDate())}},firstDayOfWeek:{type:i,default:0,validator:e=>e>=0&&e<=6}};var Te=l({name:se,props:Se,emits:["select","confirm","unselect","monthShow","overRange","update:show","clickSubtitle"],setup(e,{emit:a,slots:t}){const n=(a,t=e.minDate,n=e.maxDate)=>-1===ue(a,t)?t:1===ue(a,n)?n:a,o=(a=e.defaultDate)=>{const{type:t,minDate:o,maxDate:r,allowSameDay:l}=e;if(null===a)return a;const i=be();return"range"===t?(Array.isArray(a)||(a=[]),[n(a[0]||i,o,l?r:fe(r)),n(a[1]||i,l?o:he(o))]):"multiple"===t?Array.isArray(a)?a.map((e=>n(e))):[n(i)]:(a&&!Array.isArray(a)||(a=i),n(a))};let r;const l=d(),i=d({text:"",date:void 0}),s=d(o()),[c,p]=P(),g=v((()=>e.firstDayOfWeek?+e.firstDayOfWeek%7:0)),f=v((()=>{const a=[],t=new Date(e.minDate);t.setDate(1);do{a.push(new Date(t)),t.setMonth(t.getMonth()+1)}while(1!==ve(t,e.maxDate));return a})),h=v((()=>{if(s.value){if("range"===e.type)return!s.value[0]||!s.value[1];if("multiple"===e.type)return!s.value.length}return!s.value})),b=()=>{const e=B(l.value),t=e+r,n=f.value.map(((e,a)=>c.value[a].getHeight()));if(t>n.reduce(((e,a)=>e+a),0)&&e>0)return;let o,s=0;const d=[-1,-1];for(let r=0;r<f.value.length;r++){const l=c.value[r];s<=t&&s+n[r]>=e&&(d[1]=r,o||(o=l,d[0]=r),c.value[r].showed||(c.value[r].showed=!0,a("monthShow",{date:l.date,title:l.getTitle()}))),s+=n[r]}f.value.forEach(((e,a)=>{const t=a>=d[0]-1&&a<=d[1]+1;c.value[a].setVisible(t)})),o&&(i.value={text:o.getTitle(),date:o.date})},k=e=>{u.raf((()=>{f.value.some(((a,t)=>0===ve(a,e)&&(l.value&&c.value[t].scrollToDate(l.value,e),!0))),b()}))},y=()=>{if(!e.poppable||e.show)if(s.value){const a="single"===e.type?s.value:s.value[0];M(a)&&k(a)}else u.raf(b)},x=()=>{e.poppable&&!e.show||(u.raf((()=>{r=Math.floor(u.useRect(l).height)})),y())},_=(e=o())=>{s.value=e,y()},D=()=>{var e;return a("confirm",null!=(e=s.value)?e:me(s.value))},T=(t,n)=>{const o=e=>{s.value=e,a("select",me(e))};if(n&&"range"===e.type){const n=(t=>{const{maxRange:n,rangePrompt:o,showRangePrompt:r}=e;return!(n&&function(e){const a=e[0].getTime();return(e[1].getTime()-a)/864e5+1}(t)>+n&&(r&&F(o||de("rangePrompt",n)),a("overRange"),1))})(t);if(!n)return void o([t[0],ge(t[0],+e.maxRange-1)])}o(t),n&&!e.showConfirm&&D()},O=v((()=>c.value.reduce(((e,a)=>{var t,n;return e.push(...null!=(n=null==(t=a.disabledDays)?void 0:t.value)?n:[]),e}),[]))),C=t=>{if(e.readonly||!t.date)return;const{date:n}=t,{type:o}=e;if("range"===o){if(!s.value)return void T([n]);const[a,t]=s.value;if(a&&!t){const t=ue(n,a);if(1===t){const e=((e,a,t)=>{var n;return null==(n=e.find((e=>-1===ue(a,e.date)&&-1===ue(e.date,t))))?void 0:n.date})(O.value,a,n);if(e){const t=fe(e);-1===ue(a,t)?T([a,t]):T([n])}else T([a,n],!0)}else-1===t?T([n]):e.allowSameDay&&T([n,n],!0)}else T([n])}else if("multiple"===o){if(!s.value)return void T([n]);const t=s.value,o=t.findIndex((e=>0===ue(e,n)));if(-1!==o){const[e]=t.splice(o,1);a("unselect",pe(e))}else e.maxRange&&t.length>=+e.maxRange?F(e.rangePrompt||de("rangePrompt",e.maxRange)):T([...t,n])}else T(n,!0)},H=e=>a("update:show",e),I=(a,n)=>{const o=0!==n||!e.showSubtitle;return m(_e,S({ref:p(n),date:a,currentDate:s.value,showMonthTitle:o,firstDayOfWeek:g.value},z(e,["type","color","minDate","maxDate","showMark","formatter","rowHeight","lazyRender","showSubtitle","allowSameDay"]),{onClick:C}),z(t,["top-info","bottom-info","month-title"]))},R=()=>{if(t.footer)return t.footer();if(e.showConfirm){const a=t["confirm-text"],n=h.value,o=n?e.confirmDisabledText:e.confirmText;return m(A,{round:!0,block:!0,type:"primary",color:e.color,class:ce("confirm"),disabled:n,nativeType:"button",onClick:D},{default:()=>[a?a({disabled:n}):o||de("confirm")]})}},V=()=>m("div",{class:ce()},[m(ze,{date:i.value.date,title:e.title,subtitle:i.value.text,showTitle:e.showTitle,showSubtitle:e.showSubtitle,firstDayOfWeek:g.value,onClickSubtitle:e=>a("clickSubtitle",e)},z(t,["title","subtitle"])),m("div",{ref:l,class:ce("body"),onScroll:b},[f.value.map(I)]),m("div",{class:[ce("footer"),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[R()])]);return w((()=>e.show),x),w((()=>[e.type,e.minDate,e.maxDate]),(()=>_(o(s.value)))),w((()=>e.defaultDate),((e=null)=>{s.value=e,y()})),j({reset:_,scrollToDate:k,getSelectedDate:()=>s.value}),u.onMountedOrActivated(x),()=>e.poppable?m(N,{show:e.show,class:ce("popup"),round:e.round,position:e.position,closeable:e.showTitle||e.showSubtitle,teleport:e.teleport,closeOnPopstate:e.closeOnPopstate,safeAreaInsetTop:e.safeAreaInsetTop,closeOnClickOverlay:e.closeOnClickOverlay,"onUpdate:show":H},{default:V}):V()}});e("C",I(Te))}}}));