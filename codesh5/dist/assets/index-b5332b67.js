import{bf as he,aq as be,bg as ve,bb as ye,M as Ie,c as xe,n as N,a8 as M,m as Ce,e as Se,a4 as Ve,d as Ee,W as ke,p as A,i as P,be as Me,f as x,b as K,V as we,a3 as Te,ae as k,q as Le,a as u,ap as I,bh as U,bi as Ae,ay as R,I as B,h as Pe,N as Re,bj as Be,w as _e}from"./index-ce976914.js";import{c as Ne,C as Oe}from"./index-0c1f1cf9.js";import{u as We}from"./use-id-890333ae.js";import{u as De}from"./mount-component-21eea6f5.js";function G(t){return Array.isArray(t)?!t.length:t===0?!1:!t}function Fe(t,i){if(G(t)){if(i.required)return!1;if(i.validateEmpty===!1)return!0}return!(i.pattern&&!i.pattern.test(String(t)))}function je(t,i){return new Promise(o=>{const d=i.validator(t,i);if(ve(d)){d.then(o);return}o(d)})}function Y(t,i){const{message:o}=i;return ye(o)?o(t,i):o||""}function ze({target:t}){t.composing=!0}function J({target:t}){t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}function $e(t,i){const o=he();t.style.height="auto";let d=t.scrollHeight;if(Ie(i)){const{maxHeight:r,minHeight:c}=i;r!==void 0&&(d=Math.min(d,r)),c!==void 0&&(d=Math.max(d,c))}d&&(t.style.height=`${d}px`,be(o))}function qe(t){return t==="number"?{type:"text",inputmode:"decimal"}:t==="digit"?{type:"tel",inputmode:"numeric"}:{type:t}}function v(t){return[...t].length}function _(t,i){return[...t].slice(0,i).join("")}const[He,m]=xe("field"),Ke={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:N,formatter:Function,clearIcon:M("clear"),modelValue:Ce(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:M("focus"),formatTrigger:M("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Ue=Se({},Ne,Ke,{rows:N,type:M("text"),rules:Array,autosize:[Boolean,Object],labelWidth:N,labelClass:Ve,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var Ye=Ee({name:He,props:Ue,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(t,{emit:i,slots:o}){const d=We(),r=ke({status:"unvalidated",focused:!1,validateMessage:""}),c=A(),O=A(),w=A(),{parent:h}=P.useParent(Me),y=()=>{var e;return String((e=t.modelValue)!=null?e:"")},f=e=>{if(I(t[e]))return t[e];if(h&&I(h.props[e]))return h.props[e]},Q=x(()=>{const e=f("readonly");if(t.clearable&&!e){const a=y()!=="",n=t.clearTrigger==="always"||t.clearTrigger==="focus"&&r.focused;return a&&n}return!1}),W=x(()=>w.value&&o.input?w.value():t.modelValue),X=e=>e.reduce((a,n)=>a.then(()=>{if(r.status==="failed")return;let{value:l}=W;if(n.formatter&&(l=n.formatter(l,n)),!Fe(l,n)){r.status="failed",r.validateMessage=Y(l,n);return}if(n.validator)return G(l)&&n.validateEmpty===!1?void 0:je(l,n).then(s=>{s&&typeof s=="string"?(r.status="failed",r.validateMessage=s):s===!1&&(r.status="failed",r.validateMessage=Y(l,n))})}),Promise.resolve()),C=()=>{r.status="unvalidated",r.validateMessage=""},D=()=>i("endValidate",{status:r.status,message:r.validateMessage}),F=(e=t.rules)=>new Promise(a=>{C(),e?(i("startValidate"),X(e).then(()=>{r.status==="failed"?(a({name:t.name,message:r.validateMessage}),D()):(r.status="passed",a(),D())})):a()}),T=e=>{if(h&&t.rules){const{validateTrigger:a}=h.props,n=U(a).includes(e),l=t.rules.filter(s=>s.trigger?U(s.trigger).includes(e):n);l.length&&F(l)}},Z=e=>{var a;const{maxlength:n}=t;if(I(n)&&v(e)>+n){const l=y();if(l&&v(l)===+n)return l;const s=(a=c.value)==null?void 0:a.selectionEnd;if(r.focused&&s){const g=[...e],b=g.length-+n;return g.splice(s-b,b),g.join("")}return _(e,+n)}return e},S=(e,a="onChange")=>{const n=e;e=Z(e);const l=v(n)-v(e);if(t.type==="number"||t.type==="digit"){const g=t.type==="number";e=Ae(e,g,g)}let s=0;if(t.formatter&&a===t.formatTrigger){const{formatter:g,maxlength:b}=t;if(e=g(e),I(b)&&v(e)>+b&&(e=_(e,+b)),c.value&&r.focused){const{selectionEnd:E}=c.value,H=_(n,E);s=v(g(H))-v(H)}}if(c.value&&c.value.value!==e)if(r.focused){let{selectionStart:g,selectionEnd:b}=c.value;if(c.value.value=e,I(g)&&I(b)){const E=v(e);l?(g-=l,b-=l):s&&(g+=s,b+=s),c.value.setSelectionRange(Math.min(g,E),Math.min(b,E))}}else c.value.value=e;e!==t.modelValue&&i("update:modelValue",e)},p=e=>{e.target.composing||S(e.target.value)},L=()=>{var e;return(e=c.value)==null?void 0:e.blur()},j=()=>{var e;return(e=c.value)==null?void 0:e.focus()},V=()=>{const e=c.value;t.type==="textarea"&&t.autosize&&e&&$e(e,t.autosize)},ee=e=>{r.focused=!0,i("focus",e),k(V),f("readonly")&&L()},te=e=>{r.focused=!1,S(y(),"onBlur"),i("blur",e),!f("readonly")&&(T("onBlur"),k(V),Be())},z=e=>i("clickInput",e),ne=e=>i("clickLeftIcon",e),ae=e=>i("clickRightIcon",e),ie=e=>{R(e),i("update:modelValue",""),i("clear",e)},$=x(()=>{if(typeof t.error=="boolean")return t.error;if(h&&h.props.showError&&r.status==="failed")return!0}),re=x(()=>{const e=f("labelWidth"),a=f("labelAlign");if(e&&a!=="top")return{width:K(e)}}),le=e=>{e.keyCode===13&&(!(h&&h.props.submitOnEnter)&&t.type!=="textarea"&&R(e),t.type==="search"&&L()),i("keypress",e)},q=()=>t.id||`${d}-input`,oe=()=>r.status,se=()=>{const e=m("control",[f("inputAlign"),{error:$.value,custom:!!o.input,"min-height":t.type==="textarea"&&!t.autosize}]);if(o.input)return u("div",{class:e,onClick:z},[o.input()]);const a={id:q(),ref:c,name:t.name,rows:t.rows!==void 0?+t.rows:void 0,class:e,disabled:f("disabled"),readonly:f("readonly"),autofocus:t.autofocus,placeholder:t.placeholder,autocomplete:t.autocomplete,enterkeyhint:t.enterkeyhint,"aria-labelledby":t.label?`${d}-label`:void 0,onBlur:te,onFocus:ee,onInput:p,onClick:z,onChange:J,onKeypress:le,onCompositionend:J,onCompositionstart:ze};return t.type==="textarea"?u("textarea",a,null):u("input",Pe(qe(t.type),a),null)},ce=()=>{const e=o["left-icon"];if(t.leftIcon||e)return u("div",{class:m("left-icon"),onClick:ne},[e?e():u(B,{name:t.leftIcon,classPrefix:t.iconPrefix},null)])},ue=()=>{const e=o["right-icon"];if(t.rightIcon||e)return u("div",{class:m("right-icon"),onClick:ae},[e?e():u(B,{name:t.rightIcon,classPrefix:t.iconPrefix},null)])},de=()=>{if(t.showWordLimit&&t.maxlength){const e=v(y());return u("div",{class:m("word-limit")},[u("span",{class:m("word-num")},[e]),Re("/"),t.maxlength])}},fe=()=>{if(h&&h.props.showErrorMessage===!1)return;const e=t.errorMessage||r.validateMessage;if(e){const a=o["error-message"],n=f("errorMessageAlign");return u("div",{class:m("error-message",n)},[a?a({message:e}):e])}},ge=()=>{const e=f("labelWidth"),a=f("labelAlign"),n=f("colon")?":":"";if(o.label)return[o.label(),n];if(t.label)return u("label",{id:`${d}-label`,for:q(),onClick:l=>{R(l),j()},style:a==="top"&&e?{width:K(e)}:void 0},[t.label+n])},me=()=>[u("div",{class:m("body")},[se(),Q.value&&u(B,{ref:O,name:t.clearIcon,class:m("clear")},null),ue(),o.button&&u("div",{class:m("button")},[o.button()])]),de(),fe()];return De({blur:L,focus:j,validate:F,formValue:W,resetValidation:C,getValidationStatus:oe}),we(P.CUSTOM_FIELD_INJECTION_KEY,{customValue:w,resetValidation:C,validateWithTrigger:T}),Te(()=>t.modelValue,()=>{S(y()),C(),T("onChange"),k(V)}),Le(()=>{S(y(),t.formatTrigger),k(V)}),P.useEventListener("touchstart",ie,{target:x(()=>{var e;return(e=O.value)==null?void 0:e.$el})}),()=>{const e=f("disabled"),a=f("labelAlign"),n=ce(),l=()=>{const s=ge();return a==="top"?[n,s].filter(Boolean):s||[]};return u(Oe,{size:t.size,class:m({error:$.value,disabled:e,[`label-${a}`]:a}),center:t.center,border:t.border,isLink:t.isLink,clickable:t.clickable,titleStyle:re.value,valueClass:m("value"),titleClass:[m("label",[a,{required:t.required}]),t.labelClass],arrowDirection:t.arrowDirection},{icon:n&&a!=="top"?()=>n:null,title:l,value:me,extra:o.extra})}}});const Ze=_e(Ye);export{Ze as F,Ke as f};