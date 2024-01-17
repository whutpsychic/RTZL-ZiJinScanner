import{c as j,d as Z,p as z,L as we,f as B,b as q,ap as ye,a3 as _,ah as Pe,ac as Se,q as ce,ae as Q,a as d,n as D,t as T,a8 as N,$ as be,az as xe,h as J,I as de,w as p,an as M,W as ue,i as O,ay as U,aA as C,ax as Ie,aB as $e,aC as ze,m as W,a4 as te,al as Ce,am as Te,a5 as _e,av as Re,x as ne,y as ie,S as G,R as A,Q as se,C as Ye,F as Ee,a6 as Xe,N as Le,G as De}from"./index-ce976914.js";import{a as Ze,u as ke,P as Be,c as Ne}from"./mount-component-21eea6f5.js";import{a as He,S as Me}from"./index-498faa0f.js";import{b as We,d as Ae,e as Oe,_ as je,w as Fe}from"./el-tag-7aa21aa3.js";const[Ve,X]=j("image"),qe={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:D,height:D,radius:D,lazyLoad:Boolean,iconSize:D,showError:T,errorIcon:N("photo-fail"),iconPrefix:String,showLoading:T,loadingIcon:N("photo")};var Ue=Z({name:Ve,props:qe,emits:["load","error"],setup(e,{emit:c,slots:r}){const a=z(!1),n=z(!0),m=z(),{$Lazyload:w}=we().proxy,S=B(()=>{const t={width:q(e.width),height:q(e.height)};return ye(e.radius)&&(t.overflow="hidden",t.borderRadius=q(e.radius)),t});_(()=>e.src,()=>{a.value=!1,n.value=!0});const f=t=>{n.value&&(n.value=!1,c("load",t))},y=()=>{const t=new Event("load");Object.defineProperty(t,"target",{value:m.value,enumerable:!0}),f(t)},R=t=>{a.value=!0,n.value=!1,c("error",t)},v=(t,h,s)=>s?s():d(de,{name:t,size:e.iconSize,class:h,classPrefix:e.iconPrefix},null),P=()=>{if(n.value&&e.showLoading)return d("div",{class:X("loading")},[v(e.loadingIcon,X("loading-icon"),r.loading)]);if(a.value&&e.showError)return d("div",{class:X("error")},[v(e.errorIcon,X("error-icon"),r.error)])},I=()=>{if(a.value||!e.src)return;const t={alt:e.alt,class:X("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?be(d("img",J({ref:m},t),null),[[xe("lazy"),e.src]]):d("img",J({ref:m,src:e.src,onLoad:f,onError:R},t),null)},b=({el:t})=>{const h=()=>{t===m.value&&n.value&&y()};m.value?h():Q(h)},Y=({el:t})=>{t===m.value&&!a.value&&R()};return w&&Pe&&(w.$on("loaded",b),w.$on("error",Y),Se(()=>{w.$off("loaded",b),w.$off("error",Y)})),ce(()=>{Q(()=>{var t;(t=m.value)!=null&&t.complete&&!e.lazyLoad&&y()})}),()=>{var t;return d("div",{class:X({round:e.round,block:e.block}),style:S.value},[I(),P(),(t=r.default)==null?void 0:t.call(r)])}}});const Ge=p(Ue),[Ke,Qe]=j("divider"),Je={dashed:Boolean,hairline:T,vertical:Boolean,contentPosition:N("center")};var pe=Z({name:Ke,props:Je,setup(e,{slots:c}){return()=>{var r;return d("div",{role:"separator",class:Qe({dashed:e.dashed,hairline:e.hairline,vertical:e.vertical,[`content-${e.contentPosition}`]:!!c.default&&!e.vertical})},[!e.vertical&&((r=c.default)==null?void 0:r.call(c))])}}});const ga=p(pe),le=e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),ea=e=>({x:(e[0].clientX+e[1].clientX)/2,y:(e[0].clientY+e[1].clientY)/2}),K=j("image-preview")[1],re=2.6;var aa=Z({props:{src:String,show:Boolean,active:Number,minZoom:M(D),maxZoom:M(D),rootWidth:M(Number),rootHeight:M(Number),disableZoom:Boolean},emits:["scale","close","longPress"],setup(e,{emit:c,slots:r}){const a=ue({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,initializing:!1,imageRatio:0}),n=Ze(),m=z(),w=z(),S=z(!1),f=z(!1);let y=0;const R=B(()=>{const{scale:o,moveX:i,moveY:l,moving:u,zooming:g,initializing:E}=a,H={transitionDuration:g||u||E?"0s":".3s"};return(o!==1||f.value)&&(H.transform=`matrix(${o}, 0, 0, ${o}, ${i}, ${l})`),H}),v=B(()=>{if(a.imageRatio){const{rootWidth:o,rootHeight:i}=e,l=S.value?i/a.imageRatio:o;return Math.max(0,(a.scale*l-o)/2)}return 0}),P=B(()=>{if(a.imageRatio){const{rootWidth:o,rootHeight:i}=e,l=S.value?i:o*a.imageRatio;return Math.max(0,(a.scale*l-i)/2)}return 0}),I=(o,i)=>{var l;if(o=C(o,+e.minZoom,+e.maxZoom+1),o!==a.scale){const u=o/a.scale;if(a.scale=o,i){const g=O.useRect((l=m.value)==null?void 0:l.$el),E={x:g.width*.5,y:g.height*.5},H=a.moveX-(i.x-g.left-E.x)*(u-1),he=a.moveY-(i.y-g.top-E.y)*(u-1);a.moveX=C(H,-v.value,v.value),a.moveY=C(he,-P.value,P.value)}else a.moveX=0,a.moveY=f.value?y:0;c("scale",{scale:o,index:e.active})}},b=()=>{I(1)},Y=()=>{const o=a.scale>1?1:2;I(o,o===2||f.value?{x:n.startX.value,y:n.startY.value}:void 0)};let t,h,s,x,$,F,k,ee,V=!1;const me=o=>{const{touches:i}=o;if(t=i.length,t===2&&e.disableZoom)return;const{offsetX:l}=n;n.start(o),h=a.moveX,s=a.moveY,ee=Date.now(),V=!1,a.moving=t===1&&(a.scale!==1||f.value),a.zooming=t===2&&!l.value,a.zooming&&(x=a.scale,$=le(i))},ve=o=>{const{touches:i}=o;if(n.move(o),a.moving){const{deltaX:l,deltaY:u}=n,g=l.value+h,E=u.value+s;if((g>v.value||g<-v.value)&&!V&&n.isHorizontal()){a.moving=!1;return}V=!0,U(o,!0),a.moveX=C(g,-v.value,v.value),a.moveY=C(E,-P.value,P.value)}if(a.zooming&&(U(o,!0),i.length===2)){const l=le(i),u=x*l/$;F=ea(i),I(u,F)}},ge=()=>{if(t>1)return;const{offsetX:o,offsetY:i}=n,l=Date.now()-ee,u=250,g=5;o.value<g&&i.value<g&&(l<u?k?(clearTimeout(k),k=null,Y()):k=setTimeout(()=>{c("close"),k=null},u):l>$e&&c("longPress"))},ae=o=>{let i=!1;if((a.moving||a.zooming)&&(i=!0,a.moving&&h===a.moveX&&s===a.moveY&&(i=!1),!o.touches.length)){a.zooming&&(a.moveX=C(a.moveX,-v.value,v.value),a.moveY=C(a.moveY,-P.value,P.value),a.zooming=!1),a.moving=!1,h=0,s=0,x=1,a.scale<1&&b();const l=+e.maxZoom;a.scale>l&&I(l,F)}U(o,i),ge(),n.reset()},oe=()=>{const{rootWidth:o,rootHeight:i}=e,l=i/o,{imageRatio:u}=a;S.value=a.imageRatio>l&&u<re,f.value=a.imageRatio>l&&u>=re,f.value&&(y=(u*o-i)/2,a.moveY=y,a.initializing=!0,O.raf(()=>{a.initializing=!1})),b()},fe=o=>{const{naturalWidth:i,naturalHeight:l}=o.target;a.imageRatio=l/i,oe()};return _(()=>e.active,b),_(()=>e.show,o=>{o||b()}),_(()=>[e.rootWidth,e.rootHeight],oe),O.useEventListener("touchmove",ve,{target:B(()=>{var o;return(o=w.value)==null?void 0:o.$el})}),()=>{const o={loading:()=>d(Ie,{type:"spinner"},null)};return d(He,{ref:w,class:K("swipe-item"),onTouchstartPassive:me,onTouchend:ae,onTouchcancel:ae},{default:()=>[r.image?d("div",{class:K("image-wrap")},[r.image({src:e.src})]):d(Ge,{ref:m,src:e.src,fit:"contain",class:K("image",{vertical:S.value}),style:R.value,onLoad:fe},o)]})}}});const[oa,L]=j("image-preview"),ta=["show","teleport","transition","overlayStyle","closeOnPopstate"],na={show:Boolean,loop:T,images:ze(),minZoom:W(1/3),maxZoom:W(3),overlay:T,closeable:Boolean,showIndex:T,className:te,closeIcon:N("clear"),transition:String,beforeClose:Function,overlayClass:te,overlayStyle:Object,swipeDuration:W(300),startPosition:W(0),showIndicators:Boolean,closeOnPopstate:T,closeIconPosition:N("top-right"),teleport:[String,Object]};var ia=Z({name:oa,props:na,emits:["scale","close","closed","change","longPress","update:show"],setup(e,{emit:c,slots:r}){const a=z(),n=ue({active:0,rootWidth:0,rootHeight:0,disableZoom:!1}),m=()=>{if(a.value){const s=O.useRect(a.value.$el);n.rootWidth=s.width,n.rootHeight=s.height,a.value.resize()}},w=s=>c("scale",s),S=s=>c("update:show",s),f=()=>{Ne(e.beforeClose,{args:[n.active],done:()=>S(!1)})},y=s=>{s!==n.active&&(n.active=s,c("change",s))},R=()=>{if(e.showIndex)return d("div",{class:L("index")},[r.index?r.index({index:n.active}):`${n.active+1} / ${e.images.length}`])},v=()=>{if(r.cover)return d("div",{class:L("cover")},[r.cover()])},P=()=>{n.disableZoom=!0},I=()=>{n.disableZoom=!1},b=()=>d(Me,{ref:a,lazyRender:!0,loop:e.loop,class:L("swipe"),duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:y,onDragEnd:I,onDragStart:P},{default:()=>[e.images.map((s,x)=>d(aa,{src:s,show:e.show,active:n.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:n.rootWidth,rootHeight:n.rootHeight,disableZoom:n.disableZoom,onScale:w,onClose:f,onLongPress:()=>c("longPress",{index:x})},{image:r.image}))]}),Y=()=>{if(e.closeable)return d(de,{role:"button",name:e.closeIcon,class:[L("close-icon",e.closeIconPosition),Re],onClick:f},null)},t=()=>c("closed"),h=(s,x)=>{var $;return($=a.value)==null?void 0:$.swipeTo(s,x)};return ke({swipeTo:h}),ce(m),_([Ce,Te],m),_(()=>e.startPosition,s=>y(+s)),_(()=>e.show,s=>{const{images:x,startPosition:$}=e;s?(y(+$),Q(()=>{m(),h(+$,{immediate:!0})})):c("close",{index:n.active,url:x[n.active]})}),()=>d(Be,J({class:[L(),e.className],overlayClass:[L("overlay"),e.overlayClass],onClosed:t,"onUpdate:show":S},_e(e,ta)),{default:()=>[Y(),b(),R(),v()]})}});const fa=p(ia),sa=We({header:{type:String,default:""},bodyStyle:{type:Ae([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),la=Z({name:"ElCard"}),ra=Z({...la,props:sa,setup(e){const c=Oe("card");return(r,a)=>(ne(),ie("div",{class:G([A(c).b(),A(c).is(`${r.shadow}-shadow`)])},[r.$slots.header||r.header?(ne(),ie("div",{key:0,class:G(A(c).e("header"))},[se(r.$slots,"header",{},()=>[Le(De(r.header),1)])],2)):Ye("v-if",!0),Ee("div",{class:G(A(c).e("body")),style:Xe(r.bodyStyle)},[se(r.$slots,"default")],6)],2))}});var ca=je(ra,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const ha=Fe(ca);export{ga as D,ha as E,fa as I,Ge as a};