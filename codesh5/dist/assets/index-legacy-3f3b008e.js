!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function n(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./index-legacy-d432f125.js","./el-tag-legacy-3c9cedb4.js"],(function(e,n){"use strict";var r,o,s,l,c,a,i,u,f,p,b,g,y,m,d,v,k,O,j,h,w,P,S;return{setters:[e=>{r=e.s,o=e.m,s=e.c,l=e.d,c=e.k,a=e.v,i=e.y,u=e.x,f=e.g,p=e.w,b=e.e,g=e.gb,y=e.h,m=e.ab,d=e.gm},e=>{v=e.b,k=e.h,O=e.u,j=e.e,h=e.r,w=e.E,P=e._,S=e.w}],execute:function(){const n=e("t",v({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:k,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean})),C={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},E=r({name:"ElTag"}),_=r(t(t({},E),{},{props:n,emits:C,setup(e,{emit:t}){const n=e,r=O(),v=j("tag"),k=o((()=>{const{type:e,hit:t,effect:o,closable:s,round:l}=n;return[v.b(),v.is("closable",s),v.m(e),v.m(r.value),v.m(o),v.is("hit",t),v.is("round",l)]})),P=e=>{t("close",e)},S=e=>{t("click",e)};return(e,t)=>e.disableTransitions?(s(),l("span",{key:0,class:i(u(k)),style:m({backgroundColor:e.color}),onClick:S},[c("span",{class:i(u(v).e("content"))},[a(e.$slots,"default")],2),e.closable?(s(),f(u(w),{key:0,class:i(u(v).e("close")),onClick:g(P,["stop"])},{default:p((()=>[b(u(h))])),_:1},8,["class","onClick"])):y("v-if",!0)],6)):(s(),f(d,{key:1,name:`${u(v).namespace.value}-zoom-in-center`,appear:""},{default:p((()=>[c("span",{class:i(u(k)),style:m({backgroundColor:e.color}),onClick:S},[c("span",{class:i(u(v).e("content"))},[a(e.$slots,"default")],2),e.closable?(s(),f(u(w),{key:0,class:i(u(v).e("close")),onClick:g(P,["stop"])},{default:p((()=>[b(u(h))])),_:1},8,["class","onClick"])):y("v-if",!0)],6)])),_:3},8,["name"]))}}));e("E",S(P(_,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]])))}}}))}();