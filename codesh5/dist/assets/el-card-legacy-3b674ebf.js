!function(){function e(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,a)}return i}function r(r){for(var a=1;a<arguments.length;a++){var d=null!=arguments[a]?arguments[a]:{};a%2?e(Object(d),!0).forEach((function(e){i(r,e,d[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(d)):e(Object(d)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(d,e))}))}return r}function i(e,r,i){return(r=function(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,r||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}System.register(["./base-legacy-37854112.js","./index-legacy-ad668119.js"],(function(e,i){"use strict";var a,d,t,n,o,v,l,c,s,b,h,f,g,p,u,y;return{setters:[e=>{a=e.b,d=e.d,t=e.u,n=e._,o=e.w},e=>{v=e.a3,l=e.o,c=e.c,s=e.a9,b=e.a1,h=e.aa,f=e.A,g=e.d,p=e.af,u=e.H,y=e.e}],execute:function(){var i=document.createElement("style");i.textContent=':root{--van-divider-margin: var(--van-padding-md) 0;--van-divider-vertical-margin: 0 var(--van-padding-xs);--van-divider-text-color: var(--van-text-color-2);--van-divider-font-size: var(--van-font-size-md);--van-divider-line-height: 24px;--van-divider-border-color: var(--van-border-color);--van-divider-content-padding: var(--van-padding-md);--van-divider-content-left-width: 10%;--van-divider-content-right-width: 10%}.van-divider{display:flex;align-items:center;margin:var(--van-divider-margin);color:var(--van-divider-text-color);font-size:var(--van-divider-font-size);line-height:var(--van-divider-line-height);border-color:var(--van-divider-border-color);border-style:solid;border-width:0}.van-divider:before,.van-divider:after{display:block;flex:1;box-sizing:border-box;height:1px;border-color:inherit;border-style:inherit;border-width:var(--van-border-width) 0 0}.van-divider:before{content:""}.van-divider--hairline:before,.van-divider--hairline:after{transform:scaleY(.5)}.van-divider--dashed{border-style:dashed}.van-divider--content-center:before,.van-divider--content-left:before,.van-divider--content-right:before{margin-right:var(--van-divider-content-padding)}.van-divider--content-center:after,.van-divider--content-left:after,.van-divider--content-right:after{margin-left:var(--van-divider-content-padding);content:""}.van-divider--content-left:before{max-width:var(--van-divider-content-left-width)}.van-divider--content-right:after{max-width:var(--van-divider-content-right-width)}.van-divider--vertical{display:inline-block;width:var(--van-border-width);height:1em;margin:var(--van-divider-vertical-margin);vertical-align:middle}.van-divider--vertical:before{height:100%;border-width:0 0 0 var(--van-border-width)}.van-divider--vertical:after{display:none}.van-divider--vertical.van-divider--hairline:before{transform:scaleX(.5)}.el-card{--el-card-border-color:var(--el-border-color-light);--el-card-border-radius:4px;--el-card-padding:20px;--el-card-bg-color:var(--el-fill-color-blank)}.el-card{border-radius:var(--el-card-border-radius);border:1px solid var(--el-card-border-color);background-color:var(--el-card-bg-color);overflow:hidden;color:var(--el-text-color-primary);transition:var(--el-transition-duration)}.el-card.is-always-shadow{box-shadow:var(--el-box-shadow-light)}.el-card.is-hover-shadow:focus,.el-card.is-hover-shadow:hover{box-shadow:var(--el-box-shadow-light)}.el-card__header{padding:calc(var(--el-card-padding) - 2px) var(--el-card-padding);border-bottom:1px solid var(--el-card-border-color);box-sizing:border-box}.el-card__body{padding:var(--el-card-padding)}\n',document.head.appendChild(i);const m=a({header:{type:String,default:""},bodyStyle:{type:d([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),w=v({name:"ElCard"}),x=v(r(r({},w),{},{props:m,setup(e){const r=t("card");return(e,i)=>(l(),c("div",{class:s([b(r).b(),b(r).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(l(),c("div",{key:0,class:s(b(r).e("header"))},[h(e.$slots,"header",{},(()=>[u(y(e.header),1)]))],2)):f("v-if",!0),g("div",{class:s(b(r).e("body")),style:p(e.bodyStyle)},[h(e.$slots,"default")],6)],2))}}));e("E",o(n(x,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]])))}}}))}();
