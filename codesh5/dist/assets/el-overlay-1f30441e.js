import{gf as ce,o as te,gq as fe,fY as me,gr as G,gs as ve,gt as pe,gu as ye,g2 as se,gv as Z,g8 as q,gw as ge,gx as Ce,gy as Ee,gz as be,gA as Te,gc as X,s as H,e as z,v as E,gB as Se,n as J,m as N,c as O,d as K,k as U,y as T,x as o,l as ke,w as M,g as x,z as we,h as F,ab as ne,gC as Ae,g3 as De,r as h,g9 as Me,gD as Q,q as he,B as Le,L as Be,A as Ie,gp as Oe,M as Ne,gm as Re,gE as $e}from"./index-ecb86d45.js";import{e as P,b as j,d as W,o as Ye,F as _e,E as ze,_ as le,U as ae,s as He,t as ee,x as Ue,y as Ve,w as Xe}from"./el-tag-f8ec1a70.js";import{i as Ke,C as Ge,u as oe}from"./index-95c1965a.js";import{u as qe}from"./use-global-config-a7f40fa2.js";const xe=(...e)=>t=>{e.forEach(a=>{ce(a)?a(t):a.value=t})};var V=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(V||{});const Fe=(e,t,a)=>{let u={offsetX:0,offsetY:0};const i=n=>{const d=n.clientX,v=n.clientY,{offsetX:f,offsetY:p}=u,s=e.value.getBoundingClientRect(),m=s.left,S=s.top,R=s.width,$=s.height,Y=document.documentElement.clientWidth,L=document.documentElement.clientHeight,_=-m+f,B=-S+p,k=Y-m-R+f,w=L-S-$+p,I=b=>{const l=Math.min(Math.max(f+b.clientX-d,_),k),C=Math.min(Math.max(p+b.clientY-v,B),w);u={offsetX:l,offsetY:C},e.value.style.transform=`translate(${G(l)}, ${G(C)})`},y=()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",y)},c=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",i)},r=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",i)};te(()=>{fe(()=>{a.value?c():r()})}),me(()=>{r()})},We=(e,t={})=>{ve(e)||pe("[useLockscreen]","You need to pass a ref param to this function");const a=t.ns||P("popup"),u=ye(()=>a.bm("parent","hidden"));if(!se||Z(document.body,u.value))return;let i=0,c=!1,r="0";const n=()=>{setTimeout(()=>{Te(document==null?void 0:document.body,u.value),c&&document&&(document.body.style.width=r)},200)};q(e,d=>{if(!d){n();return}c=!Z(document.body,u.value),c&&(r=document.body.style.width),i=ge(a.namespace.value);const v=document.documentElement.clientHeight<document.body.scrollHeight,f=Ce(document.body,"overflowY");i>0&&(v||f==="scroll")&&c&&(document.body.style.width=`calc(100% - ${i}px)`),Ee(document.body,u.value)}),be(()=>n())},ue=e=>{if(!e)return{onClick:X,onMousedown:X,onMouseup:X};let t=!1,a=!1;return{onClick:r=>{t&&a&&e(r),t=a=!1},onMousedown:r=>{t=r.target===r.currentTarget},onMouseup:r=>{a=r.target===r.currentTarget}}},Pe=j({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:W([String,Array,Object])},zIndex:{type:W([String,Number])}}),je={click:e=>e instanceof MouseEvent},Ze="overlay";var Je=H({name:"ElOverlay",props:Pe,emits:je,setup(e,{slots:t,emit:a}){const u=P(Ze),i=d=>{a("click",d)},{onClick:c,onMousedown:r,onMouseup:n}=ue(e.customMaskEvent?void 0:i);return()=>e.mask?z("div",{class:[u.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:c,onMousedown:r,onMouseup:n},[E(t,"default")],V.STYLE|V.CLASS|V.PROPS,["onClick","onMouseup","onMousedown"]):Se("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[E(t,"default")])}});const Qe=Je,re=Symbol("dialogInjectionKey"),ie=j({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:Ke},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),eo={close:()=>!0},oo=["aria-label"],to=["id"],so=H({name:"ElDialogContent"}),no=H({...so,props:ie,emits:eo,setup(e){const t=e,{t:a}=Ye(),{Close:u}=Ge,{dialogRef:i,headerRef:c,bodyId:r,ns:n,style:d}=J(re),{focusTrapRef:v}=J(_e),f=xe(v,i),p=N(()=>t.draggable);return Fe(i,c,p),(s,m)=>(O(),K("div",{ref:o(f),class:T([o(n).b(),o(n).is("fullscreen",s.fullscreen),o(n).is("draggable",o(p)),o(n).is("align-center",s.alignCenter),{[o(n).m("center")]:s.center},s.customClass]),style:ne(o(d)),tabindex:"-1"},[U("header",{ref_key:"headerRef",ref:c,class:T(o(n).e("header"))},[E(s.$slots,"header",{},()=>[U("span",{role:"heading",class:T(o(n).e("title"))},ke(s.title),3)]),s.showClose?(O(),K("button",{key:0,"aria-label":o(a)("el.dialog.close"),class:T(o(n).e("headerbtn")),type:"button",onClick:m[0]||(m[0]=S=>s.$emit("close"))},[z(o(ze),{class:T(o(n).e("close"))},{default:M(()=>[(O(),x(we(s.closeIcon||o(u))))]),_:1},8,["class"])],10,oo)):F("v-if",!0)],2),U("div",{id:o(r),class:T(o(n).e("body"))},[E(s.$slots,"default")],10,to),s.$slots.footer?(O(),K("footer",{key:0,class:T(o(n).e("footer"))},[E(s.$slots,"footer")],2)):F("v-if",!0)],6))}});var lo=le(no,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const ao=j({...ie,appendToBody:{type:Boolean,default:!1},beforeClose:{type:W(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),uo={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ae]:e=>Ae(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},ro=(e,t)=>{const u=De().emit,{nextZIndex:i}=He();let c="";const r=ee(),n=ee(),d=h(!1),v=h(!1),f=h(!1),p=h(e.zIndex||i());let s,m;const S=qe("namespace",Ue),R=N(()=>{const g={},D=`--${S.value}-dialog`;return e.fullscreen||(e.top&&(g[`${D}-margin-top`]=e.top),e.width&&(g[`${D}-width`]=G(e.width))),g}),$=N(()=>e.alignCenter?{display:"flex"}:{});function Y(){u("opened")}function L(){u("closed"),u(ae,!1),e.destroyOnClose&&(f.value=!1)}function _(){u("close")}function B(){m==null||m(),s==null||s(),e.openDelay&&e.openDelay>0?{stop:s}=Q(()=>y(),e.openDelay):y()}function k(){s==null||s(),m==null||m(),e.closeDelay&&e.closeDelay>0?{stop:m}=Q(()=>b(),e.closeDelay):b()}function w(){function g(D){D||(v.value=!0,d.value=!1)}e.beforeClose?e.beforeClose(g):k()}function I(){e.closeOnClickModal&&w()}function y(){se&&(d.value=!0)}function b(){d.value=!1}function l(){u("openAutoFocus")}function C(){u("closeAutoFocus")}function A(g){var D;((D=g.detail)==null?void 0:D.focusReason)==="pointer"&&g.preventDefault()}e.lockScroll&&We(d);function de(){e.closeOnPressEscape&&w()}return q(()=>e.modelValue,g=>{g?(v.value=!1,B(),f.value=!0,p.value=e.zIndex?p.value++:i(),Me(()=>{u("open"),t.value&&(t.value.scrollTop=0)})):d.value&&k()}),q(()=>e.fullscreen,g=>{t.value&&(g?(c=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=c)}),te(()=>{e.modelValue&&(d.value=!0,f.value=!0,B())}),{afterEnter:Y,afterLeave:L,beforeLeave:_,handleClose:w,onModalClick:I,close:k,doClose:b,onOpenAutoFocus:l,onCloseAutoFocus:C,onCloseRequested:de,onFocusoutPrevented:A,titleId:r,bodyId:n,closed:v,style:R,overlayDialogStyle:$,rendered:f,visible:d,zIndex:p}},io=["aria-label","aria-labelledby","aria-describedby"],co=H({name:"ElDialog",inheritAttrs:!1}),fo=H({...co,props:ao,emits:uo,setup(e,{expose:t}){const a=e,u=he();oe({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},N(()=>!!u.title)),oe({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},N(()=>!!a.customClass));const i=P("dialog"),c=h(),r=h(),n=h(),{visible:d,titleId:v,bodyId:f,style:p,overlayDialogStyle:s,rendered:m,zIndex:S,afterEnter:R,afterLeave:$,beforeLeave:Y,handleClose:L,onModalClick:_,onOpenAutoFocus:B,onCloseAutoFocus:k,onCloseRequested:w,onFocusoutPrevented:I}=ro(a,c);Le(re,{dialogRef:c,headerRef:r,bodyId:f,ns:i,rendered:m,style:p});const y=ue(_),b=N(()=>a.draggable&&!a.fullscreen);return t({visible:d,dialogContentRef:n}),(l,C)=>(O(),x($e,{to:"body",disabled:!l.appendToBody},[z(Re,{name:"dialog-fade",onAfterEnter:o(R),onAfterLeave:o($),onBeforeLeave:o(Y),persisted:""},{default:M(()=>[Be(z(o(Qe),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":o(S)},{default:M(()=>[U("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:o(v),"aria-describedby":o(f),class:T(`${o(i).namespace.value}-overlay-dialog`),style:ne(o(s)),onClick:C[0]||(C[0]=(...A)=>o(y).onClick&&o(y).onClick(...A)),onMousedown:C[1]||(C[1]=(...A)=>o(y).onMousedown&&o(y).onMousedown(...A)),onMouseup:C[2]||(C[2]=(...A)=>o(y).onMouseup&&o(y).onMouseup(...A))},[z(o(Ve),{loop:"",trapped:o(d),"focus-start-el":"container",onFocusAfterTrapped:o(B),onFocusAfterReleased:o(k),onFocusoutPrevented:o(I),onReleaseRequested:o(w)},{default:M(()=>[o(m)?(O(),x(lo,Ie({key:0,ref_key:"dialogContentRef",ref:n},l.$attrs,{"custom-class":l.customClass,center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:o(b),fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,onClose:o(L)}),Oe({header:M(()=>[l.$slots.title?E(l.$slots,"title",{key:1}):E(l.$slots,"header",{key:0,close:o(L),titleId:o(v),titleClass:o(i).e("title")})]),default:M(()=>[E(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:M(()=>[E(l.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):F("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,io)]),_:3},8,["mask","overlay-class","z-index"]),[[Ne,o(d)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var mo=le(fo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const Co=Xe(mo);export{Co as E};