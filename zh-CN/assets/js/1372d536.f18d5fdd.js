"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[369026],{15680:(e,n,r)=>{r.d(n,{xA:()=>y,yg:()=>c});var a=r(296540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=a.createContext({}),u=function(e){var n=a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},y=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),o=u(r),m=t,c=o["".concat(s,".").concat(m)]||o[m]||d[m]||i;return r?a.createElement(c,l(l({ref:n},y),{},{components:r})):a.createElement(c,l({ref:n},y))}));function c(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,l=new Array(i);l[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[o]="string"==typeof e?e:t,l[1]=p;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},401291:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=r(58168),t=(r(296540),r(15680));const i={title:"Query Profile Action",language:"zh-CN"},l=void 0,p={unversionedId:"admin-manual/fe/query-profile-action",id:"version-2.0/admin-manual/fe/query-profile-action",title:"Query Profile Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/fe/query-profile-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/query-profile-action",permalink:"/zh-CN/docs/2.0/admin-manual/fe/query-profile-action",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Query Profile Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Node Action",permalink:"/zh-CN/docs/2.0/admin-manual/fe/node-action"},next:{title:"Backends Action",permalink:"/zh-CN/docs/2.0/admin-manual/fe/backends-action"}},s={},u=[{value:"Request",id:"request",level:2},{value:"\u83b7\u53d6\u67e5\u8be2\u4fe1\u606f",id:"\u83b7\u53d6\u67e5\u8be2\u4fe1\u606f",level:2},{value:"Description",id:"description",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Response",id:"response",level:3},{value:"Examples",id:"examples",level:3},{value:"\u901a\u8fc7 Trace Id \u83b7\u53d6 Query Id",id:"\u901a\u8fc7-trace-id-\u83b7\u53d6-query-id",level:2},{value:"Description",id:"description-1",level:3},{value:"Path parameters",id:"path-parameters",level:3},{value:"Query parameters",id:"query-parameters-1",level:3},{value:"Response",id:"response-1",level:3},{value:"\u83b7\u53d6\u6307\u5b9a\u67e5\u8be2\u7684 sql \u548c\u6587\u672c profile",id:"\u83b7\u53d6\u6307\u5b9a\u67e5\u8be2\u7684-sql-\u548c\u6587\u672c-profile",level:2},{value:"Description",id:"description-2",level:3},{value:"Path parameters",id:"path-parameters-1",level:3},{value:"Query parameters",id:"query-parameters-2",level:3},{value:"Response",id:"response-2",level:3},{value:"Examples",id:"examples-1",level:3},{value:"\u83b7\u53d6\u6307\u5b9a\u67e5\u8be2 fragment \u548c instance \u4fe1\u606f",id:"\u83b7\u53d6\u6307\u5b9a\u67e5\u8be2-fragment-\u548c-instance-\u4fe1\u606f",level:2},{value:"Description",id:"description-3",level:3},{value:"Path parameters",id:"path-parameters-2",level:3},{value:"Query parameters",id:"query-parameters-3",level:3},{value:"Response",id:"response-3",level:3},{value:"Examples",id:"examples-2",level:3},{value:"\u83b7\u53d6\u6307\u5b9a query id \u6811\u72b6 profile \u4fe1\u606f",id:"\u83b7\u53d6\u6307\u5b9a-query-id-\u6811\u72b6-profile-\u4fe1\u606f",level:2},{value:"Description",id:"description-4",level:3},{value:"Path parameters",id:"path-parameters-3",level:3},{value:"Query parameters",id:"query-parameters-4",level:3},{value:"Response",id:"response-4",level:3},{value:"\u6b63\u5728\u6267\u884c\u7684 query",id:"\u6b63\u5728\u6267\u884c\u7684-query",level:2},{value:"Description",id:"description-5",level:3},{value:"Path parameters",id:"path-parameters-4",level:3},{value:"Query parameters",id:"query-parameters-5",level:3},{value:"Response",id:"response-5",level:3},{value:"\u53d6\u6d88 query",id:"\u53d6\u6d88-query",level:2},{value:"Description",id:"description-6",level:3},{value:"Path parameters",id:"path-parameters-5",level:3},{value:"Query parameters",id:"query-parameters-6",level:3},{value:"Response",id:"response-6",level:3}],y={toc:u},o="wrapper";function d(e){let{components:n,...r}=e;return(0,t.yg)(o,(0,a.A)({},y,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"request"},"Request"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/query_info")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/trace/{trace_id}")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/sql/{query_id}")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/text/{query_id}")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/graph/{query_id}")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/json/{query_id}")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/fragments/{query_id}")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/current_queries")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/kill/{query_id}")),(0,t.yg)("h2",{id:"\u83b7\u53d6\u67e5\u8be2\u4fe1\u606f"},"\u83b7\u53d6\u67e5\u8be2\u4fe1\u606f"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/query_info")),(0,t.yg)("h3",{id:"description"},"Description"),(0,t.yg)("p",null,"\u53ef\u83b7\u53d6\u96c6\u7fa4\u6240\u6709 fe \u8282\u70b9 select \u67e5\u8be2\u4fe1\u606f\u3002"),(0,t.yg)("h3",{id:"query-parameters"},"Query parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"query_id")),(0,t.yg)("p",{parentName:"li"},"  \u53ef\u9009\uff0c\u6307\u5b9a\u8fd4\u56de\u67e5\u8be2\u7684 queryID\uff0c\u9ed8\u8ba4\u8fd4\u56de\u6240\u6709\u67e5\u8be2\u7684\u4fe1\u606f\u3002\n")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"search")),(0,t.yg)("p",{parentName:"li"},"  \u53ef\u9009\uff0c\u6307\u5b9a\u8fd4\u56de\u5305\u542b\u5b57\u7b26\u4e32\u7684\u67e5\u8be2\u4fe1\u606f\uff0c\u76ee\u524d\u4ec5\u8fdb\u884c\u5b57\u7b26\u4e32\u5339\u914d\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"is_all_node")),(0,t.yg)("p",{parentName:"li"},"  \u53ef\u9009\uff0c\u82e5\u4e3a true \u5219\u8fd4\u56de\u6240\u6709 fe \u8282\u70b9\u7684\u67e5\u8be2\u4fe1\u606f\uff0c\u82e5\u4e3a false \u5219\u8fd4\u56de\u5f53\u524d fe \u8282\u70b9\u7684\u67e5\u8be2\u4fe1\u606f\u3002\u9ed8\u8ba4\u4e3a true\u3002"))),(0,t.yg)("h3",{id:"response"},"Response"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Query ID",\n            "FE\u8282\u70b9",\n            "\u67e5\u8be2\u7528\u6237",\n            "\u6267\u884c\u6570\u636e\u5e93",\n            "Sql",\n            "\u67e5\u8be2\u7c7b\u578b",\n            "\u5f00\u59cb\u65f6\u95f4",\n            "\u7ed3\u675f\u65f6\u95f4",\n            "\u6267\u884c\u65f6\u957f",\n            "\u72b6\u6001"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,t.yg)("p",null,"Admin \u548c Root \u7528\u6237\u53ef\u4ee5\u67e5\u770b\u6240\u6709 Query\u3002\u666e\u901a\u7528\u6237\u4ec5\u80fd\u67e5\u770b\u81ea\u5df1\u53d1\u9001\u7684 Query\u3002"),(0,t.yg)("h3",{id:"examples"},"Examples"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'GET /rest/v2/manager/query/query_info\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Query ID",\n            "FE\u8282\u70b9",\n            "\u67e5\u8be2\u7528\u6237",\n            "\u6267\u884c\u6570\u636e\u5e93",\n            "Sql",\n            "\u67e5\u8be2\u7c7b\u578b",\n            "\u5f00\u59cb\u65f6\u95f4",\n            "\u7ed3\u675f\u65f6\u95f4",\n            "\u6267\u884c\u65f6\u957f",\n            "\u72b6\u6001"\n        ],\n        "rows": [\n            [\n                "d7c93d9275334c35-9e6ac5f295a7134b",\n                "127.0.0.1:8030",\n                "root",\n                "default_cluster:testdb",\n                "select c.id, c.name, p.age, p.phone, c.date, c.cost from cost c join people p on c.id = p.id where p.age > 20 order by c.id",\n                "Query",\n                "2021-07-29 16:59:12",\n                "2021-07-29 16:59:12",\n                "109ms",\n                "EOF"\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,t.yg)("h2",{id:"\u901a\u8fc7-trace-id-\u83b7\u53d6-query-id"},"\u901a\u8fc7 Trace Id \u83b7\u53d6 Query Id"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/trace_id/{trace_id}")),(0,t.yg)("h3",{id:"description-1"},"Description"),(0,t.yg)("p",null,"\u901a\u8fc7 Trace Id \u83b7\u53d6 Query Id."),(0,t.yg)("p",null,"\u5728\u6267\u884c\u4e00\u4e2a Query \u524d\uff0c\u5148\u8bbe\u7f6e\u4e00\u4e2a\u552f\u4e00\u7684 trace id:"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},'set session_context="trace_id:your_trace_id";')),(0,t.yg)("p",null,"\u5728\u540c\u4e00\u4e2a Session \u94fe\u63a5\u5185\u6267\u884c Query \u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 trace id \u83b7\u53d6 query id\u3002"),(0,t.yg)("h3",{id:"path-parameters"},"Path parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"{trace_id}")),(0,t.yg)("p",{parentName:"li"},"  \u7528\u6237\u8bbe\u7f6e\u7684 trace id."))),(0,t.yg)("h3",{id:"query-parameters-1"},"Query parameters"),(0,t.yg)("h3",{id:"response-1"},"Response"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "success", \n    "code": 0, \n    "data": "fb1d9737de914af1-a498d5c5dec638d3", \n    "count": 0\n}\n')),(0,t.yg)("p",null,"Admin \u548c Root \u7528\u6237\u53ef\u4ee5\u67e5\u770b\u6240\u6709 Query\u3002\u666e\u901a\u7528\u6237\u4ec5\u80fd\u67e5\u770b\u81ea\u5df1\u53d1\u9001\u7684 Query\u3002\u82e5\u6307\u5b9a trace id \u4e0d\u5b58\u5728\u6216\u65e0\u6743\u9650\uff0c\u5219\u8fd4\u56de Bad Request\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "Bad Request", \n    "code": 403, \n    "data": "error messages",\n    "count": 0\n}\n')),(0,t.yg)("h2",{id:"\u83b7\u53d6\u6307\u5b9a\u67e5\u8be2\u7684-sql-\u548c\u6587\u672c-profile"},"\u83b7\u53d6\u6307\u5b9a\u67e5\u8be2\u7684 sql \u548c\u6587\u672c profile"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/sql/{query_id}")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/text/{query_id}")),(0,t.yg)("h3",{id:"description-2"},"Description"),(0,t.yg)("p",null,"\u7528\u4e8e\u83b7\u53d6\u6307\u5b9a query id \u7684 sql \u548c profile \u6587\u672c\u3002"),(0,t.yg)("h3",{id:"path-parameters-1"},"Path parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"query_id")),(0,t.yg)("p",{parentName:"li"},"  query id."))),(0,t.yg)("h3",{id:"query-parameters-2"},"Query parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"is_all_node")),(0,t.yg)("p",{parentName:"li"},"  \u53ef\u9009\uff0c\u82e5\u4e3a true \u5219\u5728\u6240\u6709 fe \u8282\u70b9\u4e2d\u67e5\u8be2\u6307\u5b9a query id \u7684\u4fe1\u606f\uff0c\u82e5\u4e3a false \u5219\u5728\u5f53\u524d\u8fde\u63a5\u7684 fe \u8282\u70b9\u4e2d\u67e5\u8be2\u6307\u5b9a query id \u7684\u4fe1\u606f\u3002\u9ed8\u8ba4\u4e3a true\u3002"))),(0,t.yg)("h3",{id:"response-2"},"Response"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "sql": ""\n    },\n    "count": 0\n}\n')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "profile": ""\n    },\n    "count": 0\n}\n')),(0,t.yg)("p",null,"Admin \u548c Root \u7528\u6237\u53ef\u4ee5\u67e5\u770b\u6240\u6709 Query\u3002\u666e\u901a\u7528\u6237\u4ec5\u80fd\u67e5\u770b\u81ea\u5df1\u53d1\u9001\u7684 Query\u3002\u82e5\u6307\u5b9a query id \u4e0d\u5b58\u5728\u6216\u65e0\u6743\u9650\uff0c\u5219\u8fd4\u56de Bad Request\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "Bad Request", \n    "code": 403, \n    "data": "error messages",\n    "count": 0\n}\n')),(0,t.yg)("h3",{id:"examples-1"},"Examples"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u83b7\u53d6 sql\uff1a"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre"},'GET /rest/v2/manager/query/sql/d7c93d9275334c35-9e6ac5f295a7134b\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "sql": "select c.id, c.name, p.age, p.phone, c.date, c.cost from cost c join people p on c.id   = p.id where p.age > 20 order by c.id"\n    },\n    "count": 0\n}\n')))),(0,t.yg)("h2",{id:"\u83b7\u53d6\u6307\u5b9a\u67e5\u8be2-fragment-\u548c-instance-\u4fe1\u606f"},"\u83b7\u53d6\u6307\u5b9a\u67e5\u8be2 fragment \u548c instance \u4fe1\u606f"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/fragments/{query_id}")),(0,t.yg)("h3",{id:"description-3"},"Description"),(0,t.yg)("p",null,"\u7528\u4e8e\u83b7\u53d6\u6307\u5b9a query id \u7684 fragment \u540d\u79f0\uff0cinstance id\u3001\u4e3b\u673a IP \u53ca\u7aef\u53e3\u548c\u6267\u884c\u65f6\u957f\u3002"),(0,t.yg)("h3",{id:"path-parameters-2"},"Path parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"query_id")),(0,t.yg)("p",{parentName:"li"},"  query id."))),(0,t.yg)("h3",{id:"query-parameters-3"},"Query parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"is_all_node")),(0,t.yg)("p",{parentName:"li"},"  \u53ef\u9009\uff0c\u82e5\u4e3a true \u5219\u5728\u6240\u6709 fe \u8282\u70b9\u4e2d\u67e5\u8be2\u6307\u5b9a query id \u7684\u4fe1\u606f\uff0c\u82e5\u4e3a false \u5219\u5728\u5f53\u524d\u8fde\u63a5\u7684 fe \u8282\u70b9\u4e2d\u67e5\u8be2\u6307\u5b9a query id \u7684\u4fe1\u606f\u3002\u9ed8\u8ba4\u4e3a true\u3002"))),(0,t.yg)("h3",{id:"response-3"},"Response"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        {\n            "fragment_id": "",\n            "time": "",\n            "instance_id": {\n                "": {\n                  "host": "",\n                  "active_time": ""\n                }\n            }\n        }\n    ],\n    "count": 0\n}\n')),(0,t.yg)("p",null,"Admin \u548c Root \u7528\u6237\u53ef\u4ee5\u67e5\u770b\u6240\u6709 Query\u3002\u666e\u901a\u7528\u6237\u4ec5\u80fd\u67e5\u770b\u81ea\u5df1\u53d1\u9001\u7684 Query\u3002\u82e5\u6307\u5b9a query id \u4e0d\u5b58\u5728\u6216\u65e0\u6743\u9650\uff0c\u5219\u8fd4\u56de Bad Request\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "Bad Request", \n    "code": 403, \n    "data": "error messages",\n    "count": 0\n}\n')),(0,t.yg)("h3",{id:"examples-2"},"Examples"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'GET /rest/v2/manager/query/profile/fragments/d7c93d9275334c35-9e6ac5f295a7134b\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": [\n        {\n            "fragment_id": "0",\n            "time": "36.169ms",\n            "instance_id": {\n                "d7c93d9275334c35-9e6ac5f295a7134e": {\n                    "host": "172.19.0.4:9060",\n                    "active_time": "36.169ms"\n                }\n            }\n        },\n        {\n            "fragment_id": "1",\n            "time": "20.710ms",\n            "instance_id": {\n                "d7c93d9275334c35-9e6ac5f295a7134c": {\n                    "host": "172.19.0.5:9060",\n                    "active_time": "20.710ms"\n                }\n            }\n        },\n        {\n            "fragment_id": "2",\n            "time": "7.83ms",\n            "instance_id": {\n                "d7c93d9275334c35-9e6ac5f295a7134d": {\n                    "host": "172.19.0.6:9060",\n                    "active_time": "7.83ms"\n                },\n                "d7c93d9275334c35-9e6ac5f295a7134f": {\n                    "host": "172.19.0.7:9060",\n                    "active_time": "10.873ms"\n                }\n            }\n        }\n    ],\n    "count": 0\n}\n')),(0,t.yg)("h2",{id:"\u83b7\u53d6\u6307\u5b9a-query-id-\u6811\u72b6-profile-\u4fe1\u606f"},"\u83b7\u53d6\u6307\u5b9a query id \u6811\u72b6 profile \u4fe1\u606f"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/profile/graph/{query_id}")),(0,t.yg)("h3",{id:"description-4"},"Description"),(0,t.yg)("p",null,"\u83b7\u53d6\u6307\u5b9a query id \u6811\u72b6 profile \u4fe1\u606f\uff0c\u540c ",(0,t.yg)("inlineCode",{parentName:"p"},"show query profile")," \u6307\u4ee4\u3002"),(0,t.yg)("h3",{id:"path-parameters-3"},"Path parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"query_id")),(0,t.yg)("p",{parentName:"li"},"  query id."))),(0,t.yg)("h3",{id:"query-parameters-4"},"Query parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"fragment_id")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"instance_id")),(0,t.yg)("p",{parentName:"li"},"  \u53ef\u9009\uff0c\u8fd9\u4e24\u4e2a\u53c2\u6570\u9700\u540c\u65f6\u6307\u5b9a\u6216\u540c\u65f6\u4e0d\u6307\u5b9a\u3002",(0,t.yg)("br",{parentName:"p"}),"\n","\u540c\u65f6\u4e0d\u6307\u5b9a\u5219\u8fd4\u56de profile \u7b80\u6613\u6811\u5f62\u56fe\uff0c\u76f8\u5f53\u4e8e",(0,t.yg)("inlineCode",{parentName:"p"},"show query profile '/query_id'"),";",(0,t.yg)("br",{parentName:"p"}),"\n","\u540c\u65f6\u6307\u5b9a\u5219\u8fd4\u56de\u6307\u5b9a instance \u8be6\u7ec6 profile \u6811\u5f62\u56fe\uff0c\u76f8\u5f53\u4e8e",(0,t.yg)("inlineCode",{parentName:"p"},"show query profile '/query_id/fragment_id/instance_id'"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"is_all_node")),(0,t.yg)("p",{parentName:"li"},"  \u53ef\u9009\uff0c\u82e5\u4e3a true \u5219\u5728\u6240\u6709 fe \u8282\u70b9\u4e2d\u67e5\u8be2\u6307\u5b9a query id \u7684\u4fe1\u606f\uff0c\u82e5\u4e3a false \u5219\u5728\u5f53\u524d\u8fde\u63a5\u7684 fe \u8282\u70b9\u4e2d\u67e5\u8be2\u6307\u5b9a query id \u7684\u4fe1\u606f\u3002\u9ed8\u8ba4\u4e3a true\u3002"))),(0,t.yg)("h3",{id:"response-4"},"Response"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "graph":""\n    },\n    "count": 0\n}\n')),(0,t.yg)("p",null,"Admin \u548c Root \u7528\u6237\u53ef\u4ee5\u67e5\u770b\u6240\u6709 Query\u3002\u666e\u901a\u7528\u6237\u4ec5\u80fd\u67e5\u770b\u81ea\u5df1\u53d1\u9001\u7684 Query\u3002\u82e5\u6307\u5b9a query id \u4e0d\u5b58\u5728\u6216\u65e0\u6743\u9650\uff0c\u5219\u8fd4\u56de Bad Request\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "Bad Request", \n    "code": 403, \n    "data": "error messages",\n    "count": 0\n}\n')),(0,t.yg)("h2",{id:"\u6b63\u5728\u6267\u884c\u7684-query"},"\u6b63\u5728\u6267\u884c\u7684 query"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/query/current_queries")),(0,t.yg)("h3",{id:"description-5"},"Description"),(0,t.yg)("p",null,"\u540c ",(0,t.yg)("inlineCode",{parentName:"p"},'show proc "/current_query_stmts"'),"\uff0c\u8fd4\u56de\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684 query"),(0,t.yg)("h3",{id:"path-parameters-4"},"Path parameters"),(0,t.yg)("h3",{id:"query-parameters-5"},"Query parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"is_all_node")),(0,t.yg)("p",{parentName:"li"},"  \u53ef\u9009\uff0c\u82e5\u4e3a true \u5219\u8fd4\u56de\u6240\u6709 FE \u8282\u70b9\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684 query \u4fe1\u606f\u3002\u9ed8\u8ba4\u4e3a true\u3002"))),(0,t.yg)("h3",{id:"response-5"},"Response"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "columnNames": ["Frontend", "QueryId", "ConnectionId", "Database", "User", "ExecTime", "SqlHash", "Statement"],\n        "rows": [\n            ["172.19.0.3", "108e47ab438a4560-ab1651d16c036491", "2", "", "root", "6074", "1a35f62f4b14b9d7961b057b77c3102f", "select sleep(60)"],\n            ["172.19.0.11", "3606cad4e34b49c6-867bf6862cacc645", "3", "", "root", "9306", "1a35f62f4b14b9d7961b057b77c3102f", "select sleep(60)"]\n        ]\n    },\n    "count": 0\n}\n')),(0,t.yg)("h2",{id:"\u53d6\u6d88-query"},"\u53d6\u6d88 query"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/query/kill/{query_id}")),(0,t.yg)("h3",{id:"description-6"},"Description"),(0,t.yg)("p",null,"\u53d6\u6d88\u6267\u884c\u8fde\u63a5\u4e2d\u6b63\u5728\u6267\u884c\u7684 query"),(0,t.yg)("h3",{id:"path-parameters-5"},"Path parameters"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"{query_id}")),(0,t.yg)("p",{parentName:"li"},"  query id. \u4f60\u53ef\u4ee5\u901a\u8fc7 trace_id \u63a5\u53e3\uff0c\u83b7\u53d6 query id\u3002"))),(0,t.yg)("h3",{id:"query-parameters-6"},"Query parameters"),(0,t.yg)("h3",{id:"response-6"},"Response"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n')))}d.isMDXComponent=!0}}]);