"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[221757],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},15807:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(58168),a=(t(296540),t(15680));const o={title:"Check Decommission Action",language:"en"},i=void 0,c={unversionedId:"admin-manual/fe/check-decommission-action",id:"admin-manual/fe/check-decommission-action",title:"Check Decommission Action",description:"\x3c!--",source:"@site/docs/admin-manual/fe/check-decommission-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/check-decommission-action",permalink:"/docs/dev/admin-manual/fe/check-decommission-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Check Decommission Action",language:"en"},sidebar:"docs",previous:{title:"Cancel Load Action",permalink:"/docs/dev/admin-manual/fe/cancel-load-action"},next:{title:"Check Storage Type Action",permalink:"/docs/dev/admin-manual/fe/check-storage-type-action"}},s={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],p={toc:l},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"check-decommission-action"},"Check Decommission Action"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/check_decommission")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Used to determine whether the specified BE can be decommissioned. For example, after the node being decommissioned, whether the remaining nodes can meet the space requirements and the number of replicas."),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"host_ports")),(0,a.yg)("p",{parentName:"li"},"  Specify one or more BEs, separated by commas. Such as: ",(0,a.yg)("inlineCode",{parentName:"p"},"ip1:port1,ip2:port2,..."),"."),(0,a.yg)("p",{parentName:"li"},"  Where port is the heartbeat port of BE."))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("p",null,"Return a list of nodes that can be decommissioned"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": ["192.168.10.11:9050", "192.168.10.11:9050"],\n    "count": 0\n}\n')),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Check whether the specified BE node can be decommissioned"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/check_decommission?host_ports=192.168.10.11:9050,192.168.10.11:9050\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": ["192.168.10.11:9050"],\n    "count": 0\n}\n')))))}d.isMDXComponent=!0}}]);