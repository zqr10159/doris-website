"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[768346],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(296540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=l,y=u["".concat(s,".").concat(g)]||u[g]||m[g]||r;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},439119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(58168),l=(n(296540),n(15680));const r={title:"ALTER-CATALOG",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-CATALOG",id:"version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-CATALOG",title:"ALTER-CATALOG",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-CATALOG.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-CATALOG",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-CATALOG",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ALTER-CATALOG",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-JOB",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-JOB"},next:{title:"ALTER-DATABASE",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-DATABASE"}},s={},c=[{value:"ALTER-CATALOG",id:"alter-catalog",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"alter-catalog"},"ALTER-CATALOG"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"ALTER CATALOG"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u8bbe\u7f6e\u6307\u5b9a\u6570\u636e\u76ee\u5f55\u7684\u5c5e\u6027\u3002\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff09"),(0,l.yg)("p",null,"1) \u91cd\u547d\u540d\u6570\u636e\u76ee\u5f55"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG catalog_name RENAME new_catalog_name;\n")),(0,l.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"internal")," \u662f\u5185\u7f6e\u6570\u636e\u76ee\u5f55\uff0c\u4e0d\u5141\u8bb8\u91cd\u547d\u540d"),(0,l.yg)("li",{parentName:"ul"},"\u5bf9 ",(0,l.yg)("inlineCode",{parentName:"li"},"catalog_name")," \u62e5\u6709 Alter \u6743\u9650\u624d\u5141\u8bb8\u5bf9\u5176\u91cd\u547d\u540d"),(0,l.yg)("li",{parentName:"ul"},"\u91cd\u547d\u540d\u6570\u636e\u76ee\u5f55\u540e\uff0c\u5982\u9700\u8981\uff0c\u8bf7\u4f7f\u7528 REVOKE \u548c GRANT \u547d\u4ee4\u4fee\u6539\u76f8\u5e94\u7684\u7528\u6237\u6743\u9650\u3002")),(0,l.yg)("p",null,"2) \u8bbe\u7f6e\u6570\u636e\u76ee\u5f55\u5c5e\u6027"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG catalog_name SET PROPERTIES ('key1' = 'value1' [, 'key' = 'value2']); \n")),(0,l.yg)("p",null,"\u66f4\u65b0\u6307\u5b9a\u5c5e\u6027\u7684\u503c\u4e3a\u6307\u5b9a\u7684 value\u3002\u5982\u679c SET PROPERTIES \u4ece\u53e5\u4e2d\u7684 key \u5728\u6307\u5b9a catalog \u5c5e\u6027\u4e2d\u4e0d\u5b58\u5728\uff0c\u5219\u65b0\u589e\u6b64 key\u3002"),(0,l.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u4e0d\u53ef\u66f4\u6539\u6570\u636e\u76ee\u5f55\u7c7b\u578b\uff0c\u5373 ",(0,l.yg)("inlineCode",{parentName:"li"},"type")," \u5c5e\u6027"),(0,l.yg)("li",{parentName:"ul"},"\u4e0d\u53ef\u66f4\u6539\u5185\u7f6e\u6570\u636e\u76ee\u5f55 ",(0,l.yg)("inlineCode",{parentName:"li"},"internal")," \u7684\u5c5e\u6027")),(0,l.yg)("p",null,"3) \u4fee\u6539\u6570\u636e\u76ee\u5f55\u6ce8\u91ca"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER CATALOG catalog_name MODIFY COMMENT "new catalog comment";\n')),(0,l.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"internal")," \u662f\u5185\u7f6e\u6570\u636e\u76ee\u5f55\uff0c\u4e0d\u5141\u8bb8\u4fee\u6539\u6ce8\u91ca")),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u5c06\u6570\u636e\u76ee\u5f55 ctlg_hive \u91cd\u547d\u540d\u4e3a hive")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG ctlg_hive RENAME hive;\n")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u66f4\u65b0\u540d\u4e3a hive \u6570\u636e\u76ee\u5f55\u7684\u5c5e\u6027 ",(0,l.yg)("inlineCode",{parentName:"li"},"hive.metastore.uris"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG hive SET PROPERTIES ('hive.metastore.uris'='thrift://172.21.0.1:9083');\n")),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"\u66f4\u6539\u540d\u4e3a hive \u6570\u636e\u76ee\u5f55\u7684\u6ce8\u91ca")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER CATALOG hive MODIFY COMMENT "new catalog comment";\n')),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("p",null,"ALTER,CATALOG,RENAME,PROPERTY"),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);