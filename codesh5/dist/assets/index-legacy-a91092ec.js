System.register(["./index-legacy-06067943.js"],(function(l,e){"use strict";var a,n,r,i,t,o,c,v,s,d,g,b,u;return{setters:[l=>{a=l.c,n=l.e,r=l.r,i=l.d,t=l.u,o=l.a,c=l.a8,v=l.n,s=l.t,d=l.a4,g=l.ap,b=l.I,u=l.w}],execute:function(){var e=document.createElement("style");e.textContent=':root{--van-cell-font-size: var(--van-font-size-md);--van-cell-line-height: 24px;--van-cell-vertical-padding: 10px;--van-cell-horizontal-padding: var(--van-padding-md);--van-cell-text-color: var(--van-text-color);--van-cell-background: var(--van-background-2);--van-cell-border-color: var(--van-border-color);--van-cell-active-color: var(--van-active-color);--van-cell-required-color: var(--van-danger-color);--van-cell-label-color: var(--van-text-color-2);--van-cell-label-font-size: var(--van-font-size-sm);--van-cell-label-line-height: var(--van-line-height-sm);--van-cell-label-margin-top: var(--van-padding-base);--van-cell-value-color: var(--van-text-color-2);--van-cell-icon-size: 16px;--van-cell-right-icon-color: var(--van-gray-6);--van-cell-large-vertical-padding: var(--van-padding-sm);--van-cell-large-title-font-size: var(--van-font-size-lg);--van-cell-large-label-font-size: var(--van-font-size-md)}.van-cell{position:relative;display:flex;box-sizing:border-box;width:100%;padding:var(--van-cell-vertical-padding) var(--van-cell-horizontal-padding);overflow:hidden;color:var(--van-cell-text-color);font-size:var(--van-cell-font-size);line-height:var(--van-cell-line-height);background:var(--van-cell-background)}.van-cell:after{position:absolute;box-sizing:border-box;content:" ";pointer-events:none;right:var(--van-padding-md);bottom:0;left:var(--van-padding-md);border-bottom:1px solid var(--van-cell-border-color);transform:scaleY(.5)}.van-cell:last-child:after,.van-cell--borderless:after{display:none}.van-cell__label{margin-top:var(--van-cell-label-margin-top);color:var(--van-cell-label-color);font-size:var(--van-cell-label-font-size);line-height:var(--van-cell-label-line-height)}.van-cell__title,.van-cell__value{flex:1}.van-cell__value{position:relative;overflow:hidden;color:var(--van-cell-value-color);text-align:right;vertical-align:middle;word-wrap:break-word}.van-cell__left-icon,.van-cell__right-icon{height:var(--van-cell-line-height);font-size:var(--van-cell-icon-size);line-height:var(--van-cell-line-height)}.van-cell__left-icon{margin-right:var(--van-padding-base)}.van-cell__right-icon{margin-left:var(--van-padding-base);color:var(--van-cell-right-icon-color)}.van-cell--clickable{cursor:pointer}.van-cell--clickable:active{background-color:var(--van-cell-active-color)}.van-cell--required{overflow:visible}.van-cell--required:before{position:absolute;left:var(--van-padding-xs);color:var(--van-cell-required-color);font-size:var(--van-cell-font-size);content:"*"}.van-cell--center{align-items:center}.van-cell--large{padding-top:var(--van-cell-large-vertical-padding);padding-bottom:var(--van-cell-large-vertical-padding)}.van-cell--large .van-cell__title{font-size:var(--van-cell-large-title-font-size)}.van-cell--large .van-cell__label{font-size:var(--van-cell-large-label-font-size)}\n',document.head.appendChild(e);const[f,p]=a("cell"),h=l("c",{tag:c("div"),icon:String,size:String,title:v,value:v,label:v,center:Boolean,isLink:Boolean,border:s,required:Boolean,iconPrefix:String,valueClass:d,labelClass:d,titleClass:d,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}}),z=n({},h,r);var m=i({name:f,props:z,setup(l,{slots:e}){const a=t(),n=()=>{if(e.label||g(l.label))return o("div",{class:[p("label"),l.labelClass]},[e.label?e.label():l.label])},r=()=>{var a;if(e.title||g(l.title)){const r=null==(a=e.title)?void 0:a.call(e);if(Array.isArray(r)&&0===r.length)return;return o("div",{class:[p("title"),l.titleClass],style:l.titleStyle},[r||o("span",null,[l.title]),n()])}},i=()=>{const a=e.value||e.default;if(a||g(l.value))return o("div",{class:[p("value"),l.valueClass]},[a?a():o("span",null,[l.value])])},c=()=>{if(e["right-icon"])return e["right-icon"]();if(l.isLink){const e=l.arrowDirection&&"right"!==l.arrowDirection?`arrow-${l.arrowDirection}`:"arrow";return o(b,{name:e,class:p("right-icon")},null)}};return()=>{var n;const{tag:t,size:v,center:s,border:d,isLink:g,required:u}=l,f=null!=(n=l.clickable)?n:g,h={center:s,required:u,clickable:f,borderless:!d};return v&&(h[v]=!!v),o(t,{class:p(h),role:f?"button":void 0,tabindex:f?0:void 0,onClick:a},{default:()=>{var a;return[e.icon?e.icon():l.icon?o(b,{name:l.icon,class:p("left-icon"),classPrefix:l.iconPrefix},null):void 0,r(),i(),c(),null==(a=e.extra)?void 0:a.call(e)]}})}}});l("C",u(m))}}}));