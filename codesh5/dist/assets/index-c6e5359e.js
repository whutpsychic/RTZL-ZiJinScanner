import{c as V,d as y,i as A,be as T,a as _,n as x,t as g,ay as C,w as M}from"./index-7ad4752d.js";import{u as N}from"./mount-component-b771f396.js";const[j,I]=V("form"),O={colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:x,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:g,showErrorMessage:g,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var k=y({name:j,props:O,emits:["submit","failed"],setup(l,{emit:r,slots:c}){const{children:s,linkChildren:v}=A.useChildren(T),o=e=>e?s.filter(t=>e.includes(t.name)):s,p=e=>new Promise((t,n)=>{const i=[];o(e).reduce((E,F)=>E.then(()=>{if(!i.length)return F.validate().then(h=>{h&&i.push(h)})}),Promise.resolve()).then(()=>{i.length?n(i):t()})}),b=e=>new Promise((t,n)=>{const i=o(e);Promise.all(i.map(a=>a.validate())).then(a=>{a=a.filter(Boolean),a.length?n(a):t()})}),B=e=>{const t=s.find(n=>n.name===e);return t?new Promise((n,i)=>{t.validate().then(a=>{a?i(a):n()})}):Promise.reject()},d=e=>typeof e=="string"?B(e):l.validateFirst?p(e):b(e),P=e=>{typeof e=="string"&&(e=[e]),o(e).forEach(n=>{n.resetValidation()})},S=()=>s.reduce((e,t)=>(e[t.name]=t.getValidationStatus(),e),{}),u=(e,t)=>{s.some(n=>n.name===e?(n.$el.scrollIntoView(t),!0):!1)},f=()=>s.reduce((e,t)=>(t.name!==void 0&&(e[t.name]=t.formValue.value),e),{}),m=()=>{const e=f();d().then(()=>r("submit",e)).catch(t=>{r("failed",{values:e,errors:t}),l.scrollToError&&t[0].name&&u(t[0].name)})},w=e=>{C(e),m()};return v({props:l}),N({submit:m,validate:d,getValues:f,scrollToField:u,resetValidation:P,getValidationStatus:S}),()=>{var e;return _("form",{class:I(),onSubmit:w},[(e=c.default)==null?void 0:e.call(c)])}}});const K=M(k);export{K as F};
