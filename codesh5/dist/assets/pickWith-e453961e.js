import{a5 as a,a6 as r}from"./index-7129c5de.js";function t(e){return a({url:`${r.api_base_url}/mobileTerminalApi.do?method=getPlanMain`,method:"get",params:e})}function i(e){return a({url:`${r.api_base_url}/mobileTerminalApi.do?method=getTruckNo`,method:"get",params:e})}function m(e){return a({url:`${r.api_base_url}/mobileTerminalApi.do?method=checkBatchNo`,method:"get",params:e})}function n(e){return a({url:`${r.api_base_url}/mobileTerminalApi.do?method=getBarcode`,method:"get",params:e})}function l(e){return a({url:`${r.api_base_url}/mobileTerminalApi.do?method=scanConfirm`,method:"post",data:e})}export{i as a,n as b,m as c,t as g,l as s};