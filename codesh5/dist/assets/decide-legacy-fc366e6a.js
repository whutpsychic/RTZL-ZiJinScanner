!function(){function a(a,e,o,n,r,t,l){try{var i=a[t](l),d=i.value}catch(s){return void o(s)}i.done?e(d):Promise.resolve(d).then(n,r)}function e(e){return function(){var o=this,n=arguments;return new Promise((function(r,t){var l=e.apply(o,n);function i(e){a(l,r,t,i,d,"next",e)}function d(e){a(l,r,t,i,d,"throw",e)}i(void 0)}))}}System.register(["./index-legacy-f48602d5.js","./index-legacy-5b4d67d4.js","./el-card-legacy-c3f81bdb.js","./el-select-legacy-bf1b66b5.js","./el-popper-legacy-25cfa5d3.js","./index-legacy-d1883c5a.js","./index-legacy-eda59a38.js","./gradeDetermination-legacy-e6160176.js"],(function(a,o){"use strict";var n,r,t,l,i,d,s,v,c,p,u,g,f,m,b,h,y,x,_,k,w,z,D,C,I,j,R,S,L,F,J,U,N,V,P;return{setters:[a=>{n=a._,r=a.u,t=a.R,l=a.r,i=a.S,d=a.o,s=a.b,v=a.c,c=a.j,p=a.d,u=a.w,g=a.s,f=a.N,m=a.a0,b=a.O,h=a.k,y=a.F,x=a.Z,_=a.g,k=a.a1,w=a.a4,z=a.a5,D=a.a6,C=a.a7,I=a.e,j=a.p,R=a.i,S=a.a8},null,a=>{L=a.E},a=>{F=a.E,J=a.a},null,null,null,a=>{U=a.t,N=a.b,V=a.e,P=a.d}],execute:function(){var o=document.createElement("style");o.textContent=":root{--van-uploader-size: 80px;--van-uploader-icon-size: 24px;--van-uploader-icon-color: var(--van-gray-4);--van-uploader-text-color: var(--van-text-color-2);--van-uploader-text-font-size: var(--van-font-size-sm);--van-uploader-upload-background: var(--van-gray-1);--van-uploader-upload-active-color: var(--van-active-color);--van-uploader-delete-color: var(--van-white);--van-uploader-delete-icon-size: 14px;--van-uploader-delete-background: rgba(0, 0, 0, .7);--van-uploader-file-background: var(--van-background);--van-uploader-file-icon-size: 20px;--van-uploader-file-icon-color: var(--van-gray-7);--van-uploader-file-name-padding: 0 var(--van-padding-base);--van-uploader-file-name-margin-top: var(--van-padding-xs);--van-uploader-file-name-font-size: var(--van-font-size-sm);--van-uploader-file-name-text-color: var(--van-gray-7);--van-uploader-mask-text-color: var(--van-white);--van-uploader-mask-background: rgba(50, 50, 51, .88);--van-uploader-mask-icon-size: 22px;--van-uploader-mask-message-font-size: var(--van-font-size-sm);--van-uploader-mask-message-line-height: var(--van-line-height-xs);--van-uploader-loading-icon-size: 22px;--van-uploader-loading-icon-color: var(--van-white);--van-uploader-disabled-opacity: var(--van-disabled-opacity)}.van-uploader{position:relative;display:inline-block}.van-uploader__wrapper{display:flex;flex-wrap:wrap}.van-uploader__wrapper--disabled{opacity:var(--van-uploader-disabled-opacity)}.van-uploader__input{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;cursor:pointer;opacity:0}.van-uploader__input-wrapper{position:relative}.van-uploader__input:disabled{cursor:not-allowed}.van-uploader__upload{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;box-sizing:border-box;width:var(--van-uploader-size);height:var(--van-uploader-size);margin:0 var(--van-padding-xs) var(--van-padding-xs) 0;background:var(--van-uploader-upload-background)}.van-uploader__upload:active{background-color:var(--van-uploader-upload-active-color)}.van-uploader__upload--readonly:active{background-color:var(--van-uploader-upload-background)}.van-uploader__upload-icon{color:var(--van-uploader-icon-color);font-size:var(--van-uploader-icon-size)}.van-uploader__upload-text{margin-top:var(--van-padding-xs);color:var(--van-uploader-text-color);font-size:var(--van-uploader-text-font-size)}.van-uploader__preview{position:relative;margin:0 var(--van-padding-xs) var(--van-padding-xs) 0;cursor:pointer}.van-uploader__preview-image{display:block;width:var(--van-uploader-size);height:var(--van-uploader-size);overflow:hidden}.van-uploader__preview-delete{position:absolute;top:0;right:0}.van-uploader__preview-delete--shadow{width:var(--van-uploader-delete-icon-size);height:var(--van-uploader-delete-icon-size);background:var(--van-uploader-delete-background);border-radius:0 0 0 12px}.van-uploader__preview-delete-icon{position:absolute;top:0;right:0;color:var(--van-uploader-delete-color);font-size:var(--van-uploader-delete-icon-size);transform:scale(.7) translate(10%,-10%)}.van-uploader__preview-cover{position:absolute;top:0;right:0;bottom:0;left:0}.van-uploader__mask{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--van-uploader-mask-text-color);background:var(--van-uploader-mask-background)}.van-uploader__mask-icon{font-size:var(--van-uploader-mask-icon-size)}.van-uploader__mask-message{margin-top:6px;padding:0 var(--van-padding-base);font-size:var(--van-uploader-mask-message-font-size);line-height:var(--van-uploader-mask-message-line-height)}.van-uploader__loading{width:var(--van-uploader-loading-icon-size);height:var(--van-uploader-loading-icon-size);color:var(--van-uploader-loading-icon-color)}.van-uploader__file{display:flex;flex-direction:column;align-items:center;justify-content:center;width:var(--van-uploader-size);height:var(--van-uploader-size);background:var(--van-uploader-file-background)}.van-uploader__file-icon{color:var(--van-uploader-file-icon-color);font-size:var(--van-uploader-file-icon-size)}.van-uploader__file-name{box-sizing:border-box;width:100%;margin-top:var(--van-uploader-file-name-margin-top);padding:var(--van-uploader-file-name-padding);color:var(--van-uploader-file-name-text-color);font-size:var(--van-uploader-file-name-font-size);text-align:center}.van-radio-group--horizontal{display:flex;flex-wrap:wrap}:root{--van-radio-size: 20px;--van-radio-border-color: var(--van-gray-5);--van-radio-duration: var(--van-duration-fast);--van-radio-label-margin: var(--van-padding-xs);--van-radio-label-color: var(--van-text-color);--van-radio-checked-icon-color: var(--van-primary-color);--van-radio-disabled-icon-color: var(--van-gray-5);--van-radio-disabled-label-color: var(--van-text-color-3);--van-radio-disabled-background: var(--van-border-color)}.van-radio{display:flex;align-items:center;overflow:hidden;cursor:pointer;-webkit-user-select:none;user-select:none}.van-radio--disabled{cursor:not-allowed}.van-radio--label-disabled{cursor:default}.van-radio--horizontal{margin-right:var(--van-padding-sm)}.van-radio__icon{flex:none;height:1em;font-size:var(--van-radio-size);line-height:1em;cursor:pointer}.van-radio__icon .van-icon{display:block;box-sizing:border-box;width:1.25em;height:1.25em;color:transparent;font-size:.8em;line-height:1.25;text-align:center;border:1px solid var(--van-radio-border-color);transition-duration:var(--van-radio-duration);transition-property:color,border-color,background-color}.van-radio__icon--round .van-icon{border-radius:100%}.van-radio__icon--checked .van-icon{color:var(--van-white);background-color:var(--van-radio-checked-icon-color);border-color:var(--van-radio-checked-icon-color)}.van-radio__icon--disabled{cursor:not-allowed}.van-radio__icon--disabled .van-icon{background-color:var(--van-radio-disabled-background);border-color:var(--van-radio-disabled-icon-color)}.van-radio__icon--disabled.van-radio__icon--checked .van-icon{color:var(--van-radio-disabled-icon-color)}.van-radio__label{margin-left:var(--van-radio-label-margin);color:var(--van-radio-label-color);line-height:var(--van-radio-size)}.van-radio__label--left{margin:0 var(--van-radio-label-margin) 0 0}.van-radio__label--disabled{color:var(--van-radio-disabled-label-color)}.container[data-v-71b38dba]{position:relative;height:100%;overflow:scroll;background-repeat:no-repeat;background-size:100%}.header[data-v-71b38dba]{position:sticky;top:0;z-index:999;overflow:hidden}\n",document.head.appendChild(o);const M={setup(){const a=r(),o=t(),n=l(""),s=l(""),v=l(""),c=l(""),p=l(""),u=i({yjtJyInformationData:{},typeCodeList:[],fileList:[],imagePath:[],alterReasonList:[]});u.yjtJyInformationData=JSON.parse(decodeURIComponent(o.query.yjtJyInformation));const f=l(JSON.parse(decodeURIComponent(o.query.exterior))),m=l(JSON.parse(decodeURIComponent(o.query.tabIndex)));"1"==f.value?(n.value="qualified",s.value="合格品类型"):"2"==f.value&&(n.value="unqualified",s.value="不合格品类型"),d((()=>{!function(a){let e={};e.typeCode=a,U(e).then((a=>{200==a.data.code&&(u.typeCodeList=a.data.data,p.value=String(u.typeCodeList[0].id))})).catch((a=>{console.log(a)}))}(n.value),function(){let a={},e={},o={limit:9999,offset:1,blockId:"paramBlock",data:{}};e.paramBlock=o,a.blocks=e,N(a).then((a=>{u.alterReasonList=a.data.blocks.resultBlock.data,console.log(u.alterReasonList)})).catch((a=>{console.log(a)}))}()}));return{alterReason:c,remarks:v,typeCode:n,typeCodeText:s,listData:u,exterior:f,tabIndex:m,typeCodeChecked:p,onClickLeft:()=>{a.back()},dateFormat:(a,e)=>{let o,n=new Date(e);const r={"Y+":n.getFullYear().toString(),"m+":(n.getMonth()+1).toString(),"d+":n.getDate().toString(),"H+":n.getHours().toString(),"M+":n.getMinutes().toString(),"S+":n.getSeconds().toString()};for(let t in r)o=new RegExp("("+t+")").exec(a),o&&(a=a.replace(o[1],1==o[1].length?r[t]:r[t].padStart(o[1].length,"0")));return a},onRead:a=>{(function(a,o){var n=.52;return parseInt((a.size/1024).toFixed(2))<1024&&(n=.85),5120<parseInt((a.size/1024).toFixed(2))&&(n=.92),o&&(n=o),a[0]?Promise.all(Array.from(a).map((a=>this.compressImg(a,n)))):new Promise((o=>{if((a.size/1024).toFixed(2)<300)o({file:a});else{const r=new FileReader;r.onload=({target:{result:r}})=>{const t=new Image;t.onload=e((function*(){const e=document.createElement("canvas"),l=e.getContext("2d");var i=t.width,d=t.height,s=t.width,v=t.height;if(1024<=parseInt((a.size/1024).toFixed(2))&&parseInt((a.size/1024).toFixed(2))<=10240){var c=1600,p=1600;i=s,d=v,(s>c||v>p)&&(s/v>c/p?(i=c,d=Math.round(c*(v/s))):(d=p,i=Math.round(p*(s/v))))}10240<=parseInt((a.size/1024).toFixed(2))&&parseInt((a.size/1024).toFixed(2))<=20480&&(p=1400,i=s,d=v,(s>(c=1400)||v>p)&&(s/v>c/p?(i=c,d=Math.round(c*(v/s))):(d=p,i=Math.round(p*(s/v))))),e.width=i,e.height=d,l.clearRect(0,0,i,d),l.drawImage(t,0,0,i,d);const u=e.toDataURL("image/jpeg",n),g=atob(u.split(",")[1]);let f=g.length;const m=new Uint8Array(new ArrayBuffer(f));for(;f--;)m[f]=g.charCodeAt(f);const b=new File([m],a.name,{type:"image/jpeg"});o({file:b,origin:a,beforeSrc:r,afterSrc:u,beforeKB:Number((a.size/1024).toFixed(2)),afterKB:Number((b.size/1024).toFixed(2))})})),t.src=r},r.readAsDataURL(a)}}))})(a.file,"0.9").then((a=>{let e=new FormData,o="/cathodeCopper/"+u.yjtJyInformationData.batchgroup+"/"+u.yjtJyInformationData.batchnumber;e.append("file",a.file),e.append("path",o);let n={};P(e).then((a=>{n.fileName=a.data.fileName,n.fileUrl=a.data.fileUrl,u.imagePath.push(n)})).catch((a=>{console.log(a)}))}))},beforeDelete:a=>(u.imagePath=u.imagePath.filter((e=>e.fileName!=a.file.name)),!0),conservation:()=>{if(0==u.imagePath.length)return g({message:"请上传照片",type:"fail",className:"particulars-detail-popup"}),!1;if(1==m.value&&!c.value)return g({message:"请选择或者填写改判理由",type:"fail",className:"particulars-detail-popup"}),!1;let e={data:[],active:"",exterior:"",remarks:"",alterReason:"",typeCodeChecked:"",fileList:[]},o=[];o.push(u.yjtJyInformationData),e.data=o,e.typeCodeChecked=p.value,e.active=m.value,e.exterior=f.value,e.remarks=v.value,e.alterReason=c.value,e.fileList=u.imagePath,V(e).then((e=>{200==e.data.code&&(g({message:"质检成功",type:"success",className:"particulars-detail-popup",overlay:!0}),a.back())})).catch((a=>{console.log(a)}))}}}},B=a=>(j("data-v-71b38dba"),a=a(),R(),a),Y={class:"container"},q={class:"header"},A=B((()=>c("span",{style:{"font-weight":"bold"}},"编号：",-1))),E=B((()=>c("span",{style:{"font-weight":"bold"}},"重量：",-1))),H=B((()=>c("span",{style:{"font-weight":"bold"}},"标准：",-1))),O=B((()=>c("span",{style:{"font-weight":"bold"}},"计量员：",-1))),K=B((()=>c("span",{style:{"font-weight":"bold"}},"扫描人：",-1))),T=B((()=>c("span",{style:{"font-weight":"bold"}},"生产日期：",-1))),Z=B((()=>c("span",{style:{color:"red"}},"*",-1))),G=B((()=>c("span",{style:{color:"red"}},"*",-1))),Q={key:0},W=B((()=>c("span",{style:{color:"red"}},"*",-1)));a("default",n(M,[["render",function(a,e,o,n,r,t){const l=f,i=k,d=S,g=w,j=z,R=J,U=F,N=D,V=C,P=L,M=m;return s(),v("div",Y,[c("div",q,[p(l,{title:"品级质检",class:"page-nav-bar","left-arrow":"",onClickLeft:n.onClickLeft},null,8,["onClickLeft"])]),p(P,{class:"box-card",shadow:"always",style:{"margin-top":"5px"}},{default:u((()=>[p(i,{"content-position":"left"},{default:u((()=>[b("基本信息")])),_:1}),c("div",null,[c("p",null,[A,c("span",null,h(n.listData.yjtJyInformationData.batchnumber),1)]),c("p",null,[E,c("span",null,h(parseFloat(n.listData.yjtJyInformationData.suttle))+h(n.listData.yjtJyInformationData.unit),1)]),c("p",null,[H,c("span",null,h(n.listData.yjtJyInformationData.standard),1)]),c("p",null,[O,c("span",null,h(n.listData.yjtJyInformationData.suttleperson),1),b("     "),K,c("span",null,h(n.listData.yjtJyInformationData.scanUser),1)]),c("p",null,[T,b(h(n.dateFormat("YYYY-mm-dd HH:MM:SS",n.listData.yjtJyInformationData.proDate)),1)])]),c("div",null,[p(i,{"content-position":"left"},{default:u((()=>[Z,b(h(n.typeCodeText),1)])),_:1}),p(g,{modelValue:n.typeCodeChecked,"onUpdate:modelValue":e[0]||(e[0]=a=>n.typeCodeChecked=a),direction:"horizontal"},{default:u((()=>[(s(!0),v(y,null,x(n.listData.typeCodeList,((a,e)=>(s(),I(d,{name:String(a.id)},{default:u((()=>[b(h(a.name),1)])),_:2},1032,["name"])))),256))])),_:1},8,["modelValue"])]),c("div",null,[p(i,{"content-position":"left"},{default:u((()=>[G,b(" 上传照片")])),_:1}),p(j,{modelValue:n.listData.fileList,"onUpdate:modelValue":e[1]||(e[1]=a=>n.listData.fileList=a),"after-read":n.onRead,"before-delete":n.beforeDelete},null,8,["modelValue","after-read","before-delete"])]),1==n.tabIndex?(s(),v("div",Q,[p(i,{"content-position":"left"},{default:u((()=>[W,b("改判理由")])),_:1}),p(U,{modelValue:n.alterReason,"onUpdate:modelValue":e[2]||(e[2]=a=>n.alterReason=a),filterable:"",clearable:"","allow-create":"",placeholder:"改判理由",style:{width:"100%"}},{default:u((()=>[(s(!0),v(y,null,x(n.listData.alterReasonList,(a=>(s(),I(R,{key:a.alterReason,label:a.alterReason,value:a.alterReason},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])):_("",!0),c("div",null,[p(i,{"content-position":"left"},{default:u((()=>[b("备注")])),_:1}),p(V,{inset:""},{default:u((()=>[p(N,{modelValue:n.remarks,"onUpdate:modelValue":e[3]||(e[3]=a=>n.remarks=a),rows:"1",autosize:"",label:"备注",type:"textarea",placeholder:"请输入备注"},null,8,["modelValue"])])),_:1})])])),_:1}),p(M,{type:"primary",size:"large",style:{width:"80%",position:"absolute",left:"10%","margin-top":"15px"},onClick:n.conservation},{default:u((()=>[b("提交 ")])),_:1},8,["onClick"])])}],["__scopeId","data-v-71b38dba"]]))}}}))}();
