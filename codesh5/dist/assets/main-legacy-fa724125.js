System.register(["./el-table-column-legacy-16f96e02.js","./index-legacy-5861d70e.js","./jianpeidan-legacy-b8516338.js","./btn_fanhui2-legacy-d0efd4a4.js","./request-legacy-21745ed7.js"],(function(t,e){"use strict";var a,n,l,o,i,r,c,d,u,s,b,f,p,v,h,w,g,x,m=document.createElement("style");return m.textContent=".table-content[data-v-56378084]{display:flex;flex-direction:column;justify-content:space-between}#data-area[data-v-56378084]{flex-grow:1}.btn-area[data-v-56378084]{flex-grow:0}.table-content>.btn-area[data-v-56378084]{justify-content:center}.btn-area img[data-v-56378084]{width:45px}.btn-area div[data-v-56378084]{border-radius:25px;font-size:20px;width:30%;min-height:50px}.btn-area>div[data-v-56378084]:nth-child(1){background-color:var(--btn-color1)}\n",document.head.appendChild(m),{setters:[function(t){a=t.E,n=t.a},function(t){l=t._,o=t.k,i=t.r,r=t.m,c=t.s,d=t.f,u=t.o,s=t.c,b=t.b,f=t.d,p=t.w,v=t.N,h=t.p,w=t.i},function(t){g=t.j},function(t){x=t._},null],execute:function(){var e={setup:function(){var t=o(),e=i([]);return r((function(){c({duration:0,message:"加载中..."});var a=JSON.parse(decodeURIComponent(t.query.rowData));g({billId:a.id,billNo:a.billNo}).then((function(t){d(),e.value=t.data.value}))})),{onClickLeft:function(){return history.back()},tableData:e}}},m={class:"table-content container"},k={class:"btn-area"},y=function(t){return h("data-v-56378084"),t=t(),w(),t}((function(){return f("div",null,"返回",-1)}));t("default",l(e,[["render",function(t,e,l,o,i,r){var c=v,d=n,h=a;return u(),s("main",null,[b(c,{title:"拣配单明细",class:"page-nav-bar","left-arrow":"",onClickLeft:o.onClickLeft},null,8,["onClickLeft"]),f("div",m,[b(h,{data:o.tableData,border:"",id:"data-area",onRowClick:t.selectRow},{default:p((function(){return[b(d,{prop:"billNo",label:"拣配单号",width:"120px;"}),b(d,{prop:"batchNo",label:"批次号",width:"100px;"}),b(d,{prop:"barcode",label:"批次编码",width:"120px;"}),b(d,{prop:"weight",label:"重量"}),b(d,{prop:"blocks",label:"块数"}),b(d,{prop:"unit",label:"计量单位",width:"120px;"})]})),_:1},8,["data","onRowClick"]),f("div",k,[f("div",null,[f("img",{src:x,alt:"",onClick:e[0]||(e[0]=function(){return o.onClickLeft&&o.onClickLeft.apply(o,arguments)})}),y])])])])}],["__scopeId","data-v-56378084"]]))}}}));
