"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[496551],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(t),y=a,d=s["".concat(p,".").concat(y)]||s[y]||m[y]||l;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=y;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},250794:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const l={title:"Query Schema Action",language:"zh-CN"},i=void 0,o={unversionedId:"admin-manual/fe/query-schema-action",id:"version-2.1/admin-manual/fe/query-schema-action",title:"Query Schema Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/fe/query-schema-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/query-schema-action",permalink:"/zh-CN/docs/2.1/admin-manual/fe/query-schema-action",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Query Schema Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Query Detail Action",permalink:"/zh-CN/docs/2.1/admin-manual/fe/query-detail-action"},next:{title:"Query Stats Action",permalink:"/zh-CN/docs/2.1/admin-manual/fe/query-stats-action"}},p={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Example",id:"example",level:2}],u={toc:c},s="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"POST /api/query_schema/<ns_name>/<db_name>\n")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Query Schema Action \u53ef\u4ee5\u8fd4\u56de\u7ed9\u5b9a\u7684 SQL \u6709\u5173\u7684\u8868\u7684\u5efa\u8868\u8bed\u53e5\u3002\u53ef\u4ee5\u7528\u4e8e\u672c\u5730\u6d4b\u8bd5\u4e00\u4e9b\u67e5\u8be2\u573a\u666f\u3002\n\u8be5 API \u5728 1.2 \u7248\u672c\u4e2d\u53d1\u5e03\u3002"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"<db_name>")),(0,a.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u6570\u636e\u5e93\u540d\u79f0\u3002\u8be5\u6570\u636e\u5e93\u4f1a\u88ab\u89c6\u4e3a\u5f53\u524d session \u7684\u9ed8\u8ba4\u6570\u636e\u5e93\uff0c\u5982\u679c\u5728 SQL \u4e2d\u7684\u8868\u540d\u6ca1\u6709\u9650\u5b9a\u6570\u636e\u5e93\u540d\u79f0\u7684\u8bdd\uff0c\u5219\u4f7f\u7528\u8be5\u6570\u636e\u5e93\u3002"))),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"text/plain\n\nsql\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"sql \u5b57\u6bb5\u4e3a\u5177\u4f53\u7684 SQL")),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u8fd4\u56de\u7ed3\u679c\u96c6"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'CREATE TABLE `tbl1` (\n  `k1` int(11) NULL,\n  `k2` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`, `k2`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`k1`) BUCKETS 3\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"in_memory" = "false",\n"storage_format" = "V2",\n"disable_auto_compaction" = "false"\n);\n\nCREATE TABLE `tbl2` (\n  `k1` int(11) NULL,\n  `k2` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`, `k2`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`k1`) BUCKETS 3\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"in_memory" = "false",\n"storage_format" = "V2",\n"disable_auto_compaction" = "false"\n);\n')))),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5728\u672c\u5730\u6587\u4ef6 1.sql \u4e2d\u5199\u5165 SQL"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"select tbl1.k2 from tbl1 join tbl2 on tbl1.k1 = tbl2.k1;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4f7f\u7528 curl \u547d\u4ee4\u83b7\u53d6\u5efa\u8868\u8bed\u53e5"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"curl -X POST -H 'Content-Type: text/plain'  -uroot: http://127.0.0.1:8030/api/query_schema/internal/db1 -d@1.sql\n")))))}m.isMDXComponent=!0}}]);