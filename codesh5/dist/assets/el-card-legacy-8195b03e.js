!function(){function e(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,i)}return a}function r(r){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?e(Object(n),!0).forEach((function(e){a(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function a(e,r,a){return(r=function(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}System.register(["./el-tag-legacy-e961511b.js","./index-legacy-48e23aa3.js"],(function(e,a){"use strict";var i,n,o,v,t,d,l,c,g,m,s,p,h,w,b,f;return{setters:[e=>{i=e.b,n=e.d,o=e.e,v=e._,t=e.w},e=>{d=e.v,l=e.b,c=e.c,g=e.z,m=e.y,s=e.x,p=e.g,h=e.j,w=e.a9,b=e.U,f=e.k}],execute:function(){var a=document.createElement("style");a.textContent=':root{--van-image-placeholder-text-color: var(--van-text-color-2);--van-image-placeholder-font-size: var(--van-font-size-md);--van-image-placeholder-background: var(--van-background);--van-image-loading-icon-size: 32px;--van-image-loading-icon-color: var(--van-gray-4);--van-image-error-icon-size: 32px;--van-image-error-icon-color: var(--van-gray-4)}.van-image{position:relative;display:inline-block}.van-image--round{overflow:hidden;border-radius:var(--van-radius-max)}.van-image--round .van-image__img{border-radius:inherit}.van-image--block{display:block}.van-image__img,.van-image__error,.van-image__loading{display:block;width:100%;height:100%}.van-image__error,.van-image__loading{position:absolute;top:0;left:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--van-image-placeholder-text-color);font-size:var(--van-image-placeholder-font-size);background:var(--van-image-placeholder-background)}.van-image__loading-icon{color:var(--van-image-loading-icon-color);font-size:var(--van-image-loading-icon-size)}.van-image__error-icon{color:var(--van-image-error-icon-color);font-size:var(--van-image-error-icon-size)}:root{--van-image-preview-index-text-color: var(--van-white);--van-image-preview-index-font-size: var(--van-font-size-md);--van-image-preview-index-line-height: var(--van-line-height-md);--van-image-preview-index-text-shadow: 0 1px 1px var(--van-gray-8);--van-image-preview-overlay-background: rgba(0, 0, 0, .9);--van-image-preview-close-icon-size: 22px;--van-image-preview-close-icon-color: var(--van-gray-5);--van-image-preview-close-icon-margin: var(--van-padding-md);--van-image-preview-close-icon-z-index: 1}.van-image-preview{position:fixed;top:0;left:0;width:100%;height:100%;max-width:none;background-color:transparent;transform:none}.van-image-preview__swipe{height:100%}.van-image-preview__swipe-item{display:flex;align-items:center;justify-content:center;overflow:hidden}.van-image-preview__cover{position:absolute;top:0;left:0}.van-image-preview__image,.van-image-preview__image-wrap{width:100%;transition-property:transform}.van-image-preview__image--vertical,.van-image-preview__image-wrap--vertical{width:auto;height:100%}.van-image-preview__image img,.van-image-preview__image-wrap img,.van-image-preview__image video,.van-image-preview__image-wrap video{-webkit-user-drag:none}.van-image-preview__image .van-image__error,.van-image-preview__image-wrap .van-image__error{top:30%;height:40%}.van-image-preview__image .van-image__error-icon,.van-image-preview__image-wrap .van-image__error-icon{font-size:36px}.van-image-preview__image .van-image__loading,.van-image-preview__image-wrap .van-image__loading{background-color:transparent}.van-image-preview__index{position:absolute;top:var(--van-padding-md);left:50%;color:var(--van-image-preview-index-text-color);font-size:var(--van-image-preview-index-font-size);line-height:var(--van-image-preview-index-line-height);text-shadow:var(--van-image-preview-index-text-shadow);transform:translate(-50%)}.van-image-preview__overlay{background:var(--van-image-preview-overlay-background)}.van-image-preview__close-icon{position:absolute;z-index:var(--van-image-preview-close-icon-z-index);color:var(--van-image-preview-close-icon-color);font-size:var(--van-image-preview-close-icon-size)}.van-image-preview__close-icon--top-left{top:var(--van-image-preview-close-icon-margin);left:var(--van-image-preview-close-icon-margin)}.van-image-preview__close-icon--top-right{top:var(--van-image-preview-close-icon-margin);right:var(--van-image-preview-close-icon-margin)}.van-image-preview__close-icon--bottom-left{bottom:var(--van-image-preview-close-icon-margin);left:var(--van-image-preview-close-icon-margin)}.van-image-preview__close-icon--bottom-right{right:var(--van-image-preview-close-icon-margin);bottom:var(--van-image-preview-close-icon-margin)}:root{--van-divider-margin: var(--van-padding-md) 0;--van-divider-vertical-margin: 0 var(--van-padding-xs);--van-divider-text-color: var(--van-text-color-2);--van-divider-font-size: var(--van-font-size-md);--van-divider-line-height: 24px;--van-divider-border-color: var(--van-border-color);--van-divider-content-padding: var(--van-padding-md);--van-divider-content-left-width: 10%;--van-divider-content-right-width: 10%}.van-divider{display:flex;align-items:center;margin:var(--van-divider-margin);color:var(--van-divider-text-color);font-size:var(--van-divider-font-size);line-height:var(--van-divider-line-height);border-color:var(--van-divider-border-color);border-style:solid;border-width:0}.van-divider:before,.van-divider:after{display:block;flex:1;box-sizing:border-box;height:1px;border-color:inherit;border-style:inherit;border-width:var(--van-border-width) 0 0}.van-divider:before{content:""}.van-divider--hairline:before,.van-divider--hairline:after{transform:scaleY(.5)}.van-divider--dashed{border-style:dashed}.van-divider--content-center:before,.van-divider--content-left:before,.van-divider--content-right:before{margin-right:var(--van-divider-content-padding)}.van-divider--content-center:after,.van-divider--content-left:after,.van-divider--content-right:after{margin-left:var(--van-divider-content-padding);content:""}.van-divider--content-left:before{max-width:var(--van-divider-content-left-width)}.van-divider--content-right:after{max-width:var(--van-divider-content-right-width)}.van-divider--vertical{display:inline-block;width:var(--van-border-width);height:1em;margin:var(--van-divider-vertical-margin);vertical-align:middle}.van-divider--vertical:before{height:100%;border-width:0 0 0 var(--van-border-width)}.van-divider--vertical:after{display:none}.van-divider--vertical.van-divider--hairline:before{transform:scaleX(.5)}.el-card{--el-card-border-color:var(--el-border-color-light);--el-card-border-radius:4px;--el-card-padding:20px;--el-card-bg-color:var(--el-fill-color-blank)}.el-card{border-radius:var(--el-card-border-radius);border:1px solid var(--el-card-border-color);background-color:var(--el-card-bg-color);overflow:hidden;color:var(--el-text-color-primary);transition:var(--el-transition-duration)}.el-card.is-always-shadow{box-shadow:var(--el-box-shadow-light)}.el-card.is-hover-shadow:focus,.el-card.is-hover-shadow:hover{box-shadow:var(--el-box-shadow-light)}.el-card__header{padding:calc(var(--el-card-padding) - 2px) var(--el-card-padding);border-bottom:1px solid var(--el-card-border-color);box-sizing:border-box}.el-card__body{padding:var(--el-card-padding)}\n',document.head.appendChild(a);const _=i({header:{type:String,default:""},bodyStyle:{type:n([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),u=d({name:"ElCard"}),y=d(r(r({},u),{},{props:_,setup(e){const r=o("card");return(e,a)=>(l(),c("div",{class:g([m(r).b(),m(r).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(l(),c("div",{key:0,class:g(m(r).e("header"))},[s(e.$slots,"header",{},(()=>[b(f(e.header),1)]))],2)):p("v-if",!0),h("div",{class:g(m(r).e("body")),style:w(e.bodyStyle)},[s(e.$slots,"default")],6)],2))}}));e("E",t(v(y,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]])))}}}))}();
