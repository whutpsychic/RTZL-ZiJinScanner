!function(){function e(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function o(o){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?e(Object(l),!0).forEach((function(e){t(o,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(l)):e(Object(l)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(l,e))}))}return o}function t(e,o,t){return(o=function(e){var o=function(e,o){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,o||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(e)}(e,"string");return"symbol"==typeof o?o:String(o)}(o))in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}System.register(["./index-legacy-f9152eff.js","./el-tag-legacy-cf3cc70f.js","./index-legacy-c3f1f91b.js","./use-global-config-legacy-03ba079a.js"],(function(e,t){"use strict";var a,l,n,i,r,s,d,u,c,p,f,g,m,v,y,b,h,k,w,x,E,C,_,S,A,O,M,T,L,R,D,P,z,I,F,B,j,N,$,Y,H,X,U,q,G,K,V,Z,W,J,Q,ee,oe,te,ae,le,ne,ie,re,se,de,ue,ce,pe;return{setters:[e=>{a=e.gd,l=e.o,n=e.go,i=e.fX,r=e.gp,s=e.gq,d=e.gr,u=e.gs,c=e.g0,p=e.gt,f=e.g6,g=e.gu,m=e.gv,v=e.gw,y=e.gx,b=e.gy,h=e.ga,k=e.n,w=e.d,x=e.q,E=e.gz,C=e.l,_=e.k,S=e.b,A=e.c,O=e.i,M=e.v,T=e.s,L=e.j,R=e.w,D=e.e,P=e.x,z=e.f,I=e.aa,F=e.gA,B=e.g1,j=e.r,N=e.g7,$=e.gB,Y=e.m,H=e.z,X=e.K,U=e.y,q=e.gn,G=e.L,K=e.gk,V=e.gC},e=>{Z=e.e,W=e.b,J=e.d,Q=e.o,ee=e.F,oe=e.E,te=e._,ae=e.U,le=e.s,ne=e.t,ie=e.x,re=e.y,se=e.w},e=>{de=e.i,ue=e.C,ce=e.u},e=>{pe=e.u}],execute:function(){var t=document.createElement("style");t.textContent=":root{--el-popup-modal-bg-color:var(--el-color-black);--el-popup-modal-opacity:.5}.v-modal-enter{-webkit-animation:v-modal-in var(--el-transition-duration-fast) ease;animation:v-modal-in var(--el-transition-duration-fast) ease}.v-modal-leave{-webkit-animation:v-modal-out var(--el-transition-duration-fast) ease forwards;animation:v-modal-out var(--el-transition-duration-fast) ease forwards}@-webkit-keyframes v-modal-in{0%{opacity:0}}@keyframes v-modal-in{0%{opacity:0}}@-webkit-keyframes v-modal-out{to{opacity:0}}@keyframes v-modal-out{to{opacity:0}}.v-modal{position:fixed;left:0;top:0;width:100%;height:100%;opacity:var(--el-popup-modal-opacity);background:var(--el-popup-modal-bg-color)}.el-popup-parent--hidden{overflow:hidden}.el-dialog{--el-dialog-width:50%;--el-dialog-margin-top:15vh;--el-dialog-bg-color:var(--el-bg-color);--el-dialog-box-shadow:var(--el-box-shadow);--el-dialog-title-font-size:var(--el-font-size-large);--el-dialog-content-font-size:14px;--el-dialog-font-line-height:var(--el-font-line-height-primary);--el-dialog-padding-primary:20px;--el-dialog-border-radius:var(--el-border-radius-small);position:relative;margin:var(--el-dialog-margin-top,15vh) auto 50px;background:var(--el-dialog-bg-color);border-radius:var(--el-dialog-border-radius);box-shadow:var(--el-dialog-box-shadow);box-sizing:border-box;width:var(--el-dialog-width,50%)}.el-dialog:focus{outline:0!important}.el-dialog.is-align-center{margin:auto}.el-dialog.is-fullscreen{--el-dialog-width:100%;--el-dialog-margin-top:0;margin-bottom:0;height:100%;overflow:auto}.el-dialog__wrapper{position:fixed;top:0;right:0;bottom:0;left:0;overflow:auto;margin:0}.el-dialog.is-draggable .el-dialog__header{cursor:move;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.el-dialog__header{padding:var(--el-dialog-padding-primary);padding-bottom:10px;margin-right:16px}.el-dialog__headerbtn{position:absolute;top:6px;right:0;padding:0;width:54px;height:54px;background:0 0;border:none;outline:0;cursor:pointer;font-size:var(--el-message-close-size,16px)}.el-dialog__headerbtn .el-dialog__close{color:var(--el-color-info);font-size:inherit}.el-dialog__headerbtn:focus .el-dialog__close,.el-dialog__headerbtn:hover .el-dialog__close{color:var(--el-color-primary)}.el-dialog__title{line-height:var(--el-dialog-font-line-height);font-size:var(--el-dialog-title-font-size);color:var(--el-text-color-primary)}.el-dialog__body{padding:calc(var(--el-dialog-padding-primary) + 10px) var(--el-dialog-padding-primary);color:var(--el-text-color-regular);font-size:var(--el-dialog-content-font-size)}.el-dialog__footer{padding:var(--el-dialog-padding-primary);padding-top:10px;text-align:right;box-sizing:border-box}.el-dialog--center{text-align:center}.el-dialog--center .el-dialog__body{text-align:initial;padding:25px calc(var(--el-dialog-padding-primary) + 5px) 30px}.el-dialog--center .el-dialog__footer{text-align:inherit}.el-overlay-dialog{position:fixed;top:0;right:0;bottom:0;left:0;overflow:auto}.dialog-fade-enter-active{-webkit-animation:modal-fade-in var(--el-transition-duration);animation:modal-fade-in var(--el-transition-duration)}.dialog-fade-enter-active .el-overlay-dialog{-webkit-animation:dialog-fade-in var(--el-transition-duration);animation:dialog-fade-in var(--el-transition-duration)}.dialog-fade-leave-active{-webkit-animation:modal-fade-out var(--el-transition-duration);animation:modal-fade-out var(--el-transition-duration)}.dialog-fade-leave-active .el-overlay-dialog{-webkit-animation:dialog-fade-out var(--el-transition-duration);animation:dialog-fade-out var(--el-transition-duration)}@-webkit-keyframes dialog-fade-in{0%{transform:translate3d(0,-20px,0);opacity:0}to{transform:translateZ(0);opacity:1}}@keyframes dialog-fade-in{0%{transform:translate3d(0,-20px,0);opacity:0}to{transform:translateZ(0);opacity:1}}@-webkit-keyframes dialog-fade-out{0%{transform:translateZ(0);opacity:1}to{transform:translate3d(0,-20px,0);opacity:0}}@keyframes dialog-fade-out{0%{transform:translateZ(0);opacity:1}to{transform:translate3d(0,-20px,0);opacity:0}}@-webkit-keyframes modal-fade-in{0%{opacity:0}to{opacity:1}}@keyframes modal-fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes modal-fade-out{0%{opacity:1}to{opacity:0}}@keyframes modal-fade-out{0%{opacity:1}to{opacity:0}}.el-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2000;height:100%;background-color:var(--el-overlay-color-lighter);overflow:auto}.el-overlay .el-overlay-root{height:0}\n",document.head.appendChild(t);var fe=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(fe||{});const ge=(e,o,t)=>{let a={offsetX:0,offsetY:0};const s=o=>{const t=o.clientX,l=o.clientY,{offsetX:n,offsetY:i}=a,s=e.value.getBoundingClientRect(),d=s.left,u=s.top,c=s.width,p=s.height,f=document.documentElement.clientWidth,g=document.documentElement.clientHeight,m=-d+n,v=-u+i,y=f-d-c+n,b=g-u-p+i,h=o=>{const s=Math.min(Math.max(n+o.clientX-t,m),y),d=Math.min(Math.max(i+o.clientY-l,v),b);a={offsetX:s,offsetY:d},e.value.style.transform=`translate(${r(s)}, ${r(d)})`},k=()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",k)},d=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",s)};l((()=>{n((()=>{t.value?o.value&&e.value&&o.value.addEventListener("mousedown",s):d()}))})),i((()=>{d()}))},me=e=>{if(!e)return{onClick:h,onMousedown:h,onMouseup:h};let o=!1,t=!1;return{onClick:a=>{o&&t&&e(a),o=t=!1},onMousedown:e=>{o=e.target===e.currentTarget},onMouseup:e=>{t=e.target===e.currentTarget}}},ve=W({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:J([String,Array,Object])},zIndex:{type:J([String,Number])}});const ye=k({name:"ElOverlay",props:ve,emits:{click:e=>e instanceof MouseEvent},setup(e,{slots:o,emit:t}){const a=Z("overlay"),{onClick:l,onMousedown:n,onMouseup:i}=me(e.customMaskEvent?void 0:e=>{t("click",e)});return()=>e.mask?w("div",{class:[a.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:l,onMousedown:n,onMouseup:i},[x(o,"default")],fe.STYLE|fe.CLASS|fe.PROPS,["onClick","onMouseup","onMousedown"]):E("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[x(o,"default")])}}),be=Symbol("dialogInjectionKey"),he=W({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:de},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),ke=["aria-label"],we=["id"],xe=k({name:"ElDialogContent"}),Ee=k(o(o({},xe),{},{props:he,emits:{close:()=>!0},setup(e){const o=e,{t:t}=Q(),{Close:l}=ue,{dialogRef:n,headerRef:i,bodyId:r,ns:s,style:d}=C(be),{focusTrapRef:u}=C(ee),c=((...e)=>o=>{e.forEach((e=>{a(e)?e(o):e.value=o}))})(u,n),p=_((()=>o.draggable));return ge(n,i,p),(e,o)=>(S(),A("div",{ref:T(c),class:M([T(s).b(),T(s).is("fullscreen",e.fullscreen),T(s).is("draggable",T(p)),T(s).is("align-center",e.alignCenter),{[T(s).m("center")]:e.center},e.customClass]),style:I(T(d)),tabindex:"-1"},[O("header",{ref_key:"headerRef",ref:i,class:M(T(s).e("header"))},[x(e.$slots,"header",{},(()=>[O("span",{role:"heading",class:M(T(s).e("title"))},L(e.title),3)])),e.showClose?(S(),A("button",{key:0,"aria-label":T(t)("el.dialog.close"),class:M(T(s).e("headerbtn")),type:"button",onClick:o[0]||(o[0]=o=>e.$emit("close"))},[w(T(oe),{class:M(T(s).e("close"))},{default:R((()=>[(S(),D(P(e.closeIcon||T(l))))])),_:1},8,["class"])],10,ke)):z("v-if",!0)],2),O("div",{id:T(r),class:M(T(s).e("body"))},[x(e.$slots,"default")],10,we),e.$slots.footer?(S(),A("footer",{key:0,class:M(T(s).e("footer"))},[x(e.$slots,"footer")],2)):z("v-if",!0)],6))}}));var Ce=te(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const _e=W(o(o({},he),{},{appendToBody:{type:Boolean,default:!1},beforeClose:{type:J(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}})),Se={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ae]:e=>F(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ae=(e,o)=>{const t=B().emit,{nextZIndex:a}=le();let n="";const i=ne(),h=ne(),k=j(!1),w=j(!1),x=j(!1),E=j(e.zIndex||a());let C,S;const A=pe("namespace",ie),O=_((()=>{const o={},t=`--${A.value}-dialog`;return e.fullscreen||(e.top&&(o[`${t}-margin-top`]=e.top),e.width&&(o[`${t}-width`]=r(e.width))),o})),M=_((()=>e.alignCenter?{display:"flex"}:{}));function T(){null==S||S(),null==C||C(),e.openDelay&&e.openDelay>0?({stop:C}=$((()=>D()),e.openDelay)):D()}function L(){null==C||C(),null==S||S(),e.closeDelay&&e.closeDelay>0?({stop:S}=$((()=>P()),e.closeDelay)):P()}function R(){e.beforeClose?e.beforeClose((function(e){e||(w.value=!0,k.value=!1)})):L()}function D(){c&&(k.value=!0)}function P(){k.value=!1}return e.lockScroll&&((e,o={})=>{s(e)||d("[useLockscreen]","You need to pass a ref param to this function");const t=o.ns||Z("popup"),a=u((()=>t.bm("parent","hidden")));if(!c||p(document.body,a.value))return;let l=0,n=!1,i="0";const r=()=>{setTimeout((()=>{b(null==document?void 0:document.body,a.value),n&&document&&(document.body.style.width=i)}),200)};f(e,(e=>{if(!e)return void r();n=!p(document.body,a.value),n&&(i=document.body.style.width),l=g(t.namespace.value);const o=document.documentElement.clientHeight<document.body.scrollHeight,s=m(document.body,"overflowY");l>0&&(o||"scroll"===s)&&n&&(document.body.style.width=`calc(100% - ${l}px)`),v(document.body,a.value)})),y((()=>r()))})(k),f((()=>e.modelValue),(l=>{l?(w.value=!1,T(),x.value=!0,E.value=e.zIndex?E.value++:a(),N((()=>{t("open"),o.value&&(o.value.scrollTop=0)}))):k.value&&L()})),f((()=>e.fullscreen),(e=>{o.value&&(e?(n=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=n)})),l((()=>{e.modelValue&&(k.value=!0,x.value=!0,T())})),{afterEnter:function(){t("opened")},afterLeave:function(){t("closed"),t(ae,!1),e.destroyOnClose&&(x.value=!1)},beforeLeave:function(){t("close")},handleClose:R,onModalClick:function(){e.closeOnClickModal&&R()},close:L,doClose:P,onOpenAutoFocus:function(){t("openAutoFocus")},onCloseAutoFocus:function(){t("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&R()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:i,bodyId:h,closed:w,style:O,overlayDialogStyle:M,rendered:x,visible:k,zIndex:E}},Oe=["aria-label","aria-labelledby","aria-describedby"],Me=k({name:"ElDialog",inheritAttrs:!1}),Te=k(o(o({},Me),{},{props:_e,emits:Se,setup(e,{expose:o}){const t=e,a=Y();ce({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},_((()=>!!a.title))),ce({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},_((()=>!!t.customClass)));const l=Z("dialog"),n=j(),i=j(),r=j(),{visible:s,titleId:d,bodyId:u,style:c,overlayDialogStyle:p,rendered:f,zIndex:g,afterEnter:m,afterLeave:v,beforeLeave:y,handleClose:b,onModalClick:h,onOpenAutoFocus:k,onCloseAutoFocus:E,onCloseRequested:C,onFocusoutPrevented:A}=Ae(t,n);H(be,{dialogRef:n,headerRef:i,bodyId:u,ns:l,rendered:f,style:c});const L=me(h),P=_((()=>t.draggable&&!t.fullscreen));return o({visible:s,dialogContentRef:r}),(e,o)=>(S(),D(V,{to:"body",disabled:!e.appendToBody},[w(K,{name:"dialog-fade",onAfterEnter:T(m),onAfterLeave:T(v),onBeforeLeave:T(y),persisted:""},{default:R((()=>[X(w(T(ye),{"custom-mask-event":"",mask:e.modal,"overlay-class":e.modalClass,"z-index":T(g)},{default:R((()=>[O("div",{role:"dialog","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:T(d),"aria-describedby":T(u),class:M(`${T(l).namespace.value}-overlay-dialog`),style:I(T(p)),onClick:o[0]||(o[0]=(...e)=>T(L).onClick&&T(L).onClick(...e)),onMousedown:o[1]||(o[1]=(...e)=>T(L).onMousedown&&T(L).onMousedown(...e)),onMouseup:o[2]||(o[2]=(...e)=>T(L).onMouseup&&T(L).onMouseup(...e))},[w(T(re),{loop:"",trapped:T(s),"focus-start-el":"container",onFocusAfterTrapped:T(k),onFocusAfterReleased:T(E),onFocusoutPrevented:T(A),onReleaseRequested:T(C)},{default:R((()=>[T(f)?(S(),D(Ce,U({key:0,ref_key:"dialogContentRef",ref:r},e.$attrs,{"custom-class":e.customClass,center:e.center,"align-center":e.alignCenter,"close-icon":e.closeIcon,draggable:T(P),fullscreen:e.fullscreen,"show-close":e.showClose,title:e.title,onClose:T(b)}),q({header:R((()=>[e.$slots.title?x(e.$slots,"title",{key:1}):x(e.$slots,"header",{key:0,close:T(b),titleId:T(d),titleClass:T(l).e("title")})])),default:R((()=>[x(e.$slots,"default")])),_:2},[e.$slots.footer?{name:"footer",fn:R((()=>[x(e.$slots,"footer")]))}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):z("v-if",!0)])),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Oe)])),_:3},8,["mask","overlay-class","z-index"]),[[G,T(s)]])])),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}}));e("E",se(te(Te,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]])))}}}))}();
