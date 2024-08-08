"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[801284],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return t?r.createElement(y,a(a({ref:n},c),{},{components:t})):r.createElement(y,a({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},961900:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=t(58168),o=(t(296540),t(15680));const s={title:"Session Action",language:"en"},a=void 0,i={unversionedId:"admin-manual/fe/session-action",id:"admin-manual/fe/session-action",title:"Session Action",description:"\x3c!--",source:"@site/docs/admin-manual/fe/session-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/session-action",permalink:"/docs/dev/admin-manual/fe/session-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Session Action",language:"en"},sidebar:"docs",previous:{title:"Query Profile Action",permalink:"/docs/dev/admin-manual/fe/query-profile-action-controller"},next:{title:"System Action",permalink:"/docs/dev/admin-manual/fe/system-action"}},l={},u=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Obtain the current session information",id:"obtain-the-current-session-information",level:2},{value:"Response",id:"response",level:2},{value:"Obtain all FE session information",id:"obtain-all-fe-session-information",level:2},{value:"Response",id:"response-1",level:2}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"session-action"},"Session Action"),(0,o.yg)("h2",{id:"request"},"Request"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"GET /rest/v1/session")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"GET /rest/v1/session/all")),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"Session Action is used to obtain the current session information."),(0,o.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,o.yg)("p",null,"None"),(0,o.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,o.yg)("p",null,"None"),(0,o.yg)("h2",{id:"request-body"},"Request body"),(0,o.yg)("p",null,"None"),(0,o.yg)("h2",{id:"obtain-the-current-session-information"},"Obtain the current session information"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"GET /rest/v1/session")),(0,o.yg)("h2",{id:"response"},"Response"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": ["Id", "User", "Host", "Cluster", "Db", "Command", "Time", "State", "Info"],\n        "rows": [{\n            "User": "root",\n            "Command": "Sleep",\n            "State": "",\n            "Cluster": "default_cluster",\n            "Host": "10.81.85.89:31465",\n            "Time": "230",\n            "Id": "0",\n            "Info": "",\n            "Db": "db1"\n        }]\n    },\n    "count": 2\n}\n')),(0,o.yg)("h2",{id:"obtain-all-fe-session-information"},"Obtain all FE session information"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"GET /rest/v1/session/all")),(0,o.yg)("h2",{id:"response-1"},"Response"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": ["FE", "Id", "User", "Host", "Cluster", "Db", "Command", "Time", "State", "Info"],\n        "rows": [{\n            "FE": "10.14.170.23",\n            "User": "root",\n            "Command": "Sleep",\n            "State": "",\n            "Cluster": "default_cluster",\n            "Host": "10.81.85.89:31465",\n            "Time": "230",\n            "Id": "0",\n            "Info": "",\n            "Db": "db1"\n        },\n        {\n            "FE": "10.14.170.24",\n            "User": "root",\n            "Command": "Sleep",\n            "State": "",\n            "Cluster": "default_cluster",\n            "Host": "10.81.85.88:61465",\n            "Time": "460",\n            "Id": "1",\n            "Info": "",\n            "Db": "db1"\n        }]\n    },\n    "count": 2\n}\n')),(0,o.yg)("p",null,"The returned result is the same as ",(0,o.yg)("inlineCode",{parentName:"p"},"System Action"),". Is a description of the table."))}d.isMDXComponent=!0}}]);