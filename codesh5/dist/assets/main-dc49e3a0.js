import{_ as m,l as _,k as d,o as u,v as f,x as g,y as h,F as t,a,G as v,H as y,D as x,E as F}from"./index-ce976914.js";import{C as w}from"./index-0c1f1cf9.js";import{N}from"./index-8f5a4469.js";import{l as k}from"./user-1cb34c2e.js";import{m as C}from"./main-63687ae2.js";import{s as D}from"./function-call-1c6fac12.js";import"./mount-component-21eea6f5.js";import"./request-e5d79f44.js";import"./index-402c235e.js";const S=""+new URL("../image/touxiang.jpeg",import.meta.url).href;const b={components:{myFooter:C},setup(){const o=_(),n=d();let e=u(o.state.user).displayName;return{dropOut:()=>{D({title:"提示",width:"600",allowHtml:!0,message:'<span style="font-size: 18px">是否退出当前程序？</span>'}).then(()=>{k().then(()=>{n.push({path:"/login"})}).catch(s=>{console.log(s)})}).catch(s=>{console.log(s)})},displayName:e}}},B=o=>(x("data-v-25648507"),o=o(),F(),o),I={class:"top"},O=B(()=>t("img",{class:"tar",src:S,alt:""},null,-1)),R={style:{float:"left",color:"#FFFFFF","margin-left":"30px","margin-top":"30px"}},z={style:{"margin-top":"10px",clear:"both","border-top":"1px solid #e2e2ee"}};function E(o,n,r,e,l,s){const p=N,c=w,i=f("my-footer");return g(),h(y,null,[t("main",null,[a(p,{title:"我的",class:"page-nav-bar"}),t("div",I,[t("div",null,[O,t("p",R,v(e.displayName),1)])]),t("div",z,[a(c,{size:"large",icon:"warning-o",title:"退出","is-link":"",onClick:e.dropOut},null,8,["onClick"])])]),a(i)],64)}const J=m(b,[["render",E],["__scopeId","data-v-25648507"]]);export{J as default};