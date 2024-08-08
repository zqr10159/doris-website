"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[232079],{15680:(e,t,n)=>{n.d(t,{xA:()=>A,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},A=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,A=o(e,["components","mdxType","originalType","parentName"]),p=c(n),E=a,d=p["".concat(s,".").concat(E)]||p[E]||u[E]||i;return n?r.createElement(d,l(l({ref:t},A),{},{components:n})):r.createElement(d,l({ref:t},A))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=E;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},690331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const i={title:"ADMIN-CANCEL-REBALANCE-DISK",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK",id:"version-1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK",title:"ADMIN-CANCEL-REBALANCE-DISK",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ADMIN-CANCEL-REBALANCE-DISK",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-REBALANCE-DISK",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK"},next:{title:"SHOW ALTER TABLE MATERIALIZED VIEW",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW"}},s={},c=[{value:"ADMIN-CANCEL-REBALANCE-DISK",id:"admin-cancel-rebalance-disk",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],A={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"admin-cancel-rebalance-disk"},"ADMIN-CANCEL-REBALANCE-DISK"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ADMIN CANCEL REBALANCE DISK"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'\u8be5\u8bed\u53e5\u7528\u4e8e\u53d6\u6d88\u4f18\u5148\u5747\u8861BE\u7684\u78c1\u76d8\n\n\u8bed\u6cd5\uff1a\n\n    ADMIN CANCEL REBALANCE DISK [ON ("BackendHost1:BackendHeartBeatPort1", "BackendHost2:BackendHeartBeatPort2", ...)];\n\n\u8bf4\u660e\uff1a\n\n    1. \u8be5\u8bed\u53e5\u4ec5\u8868\u793a\u7cfb\u7edf\u4e0d\u518d\u4f18\u5148\u5747\u8861\u6307\u5b9aBE\u7684\u78c1\u76d8\u6570\u636e\u3002\u7cfb\u7edf\u4ecd\u4f1a\u4ee5\u9ed8\u8ba4\u8c03\u5ea6\u65b9\u5f0f\u5747\u8861BE\u7684\u78c1\u76d8\u6570\u636e\u3002\n')),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'1. \u53d6\u6d88\u96c6\u7fa4\u6240\u6709BE\u7684\u4f18\u5148\u78c1\u76d8\u5747\u8861\n\n    ADMIN CANCEL REBALANCE DISK;\n\n2. \u53d6\u6d88\u6307\u5b9aBE\u7684\u4f18\u5148\u78c1\u76d8\u5747\u8861\n\n    ADMIN CANCEL REBALANCE DISK ON ("192.168.1.1:1234", "192.168.1.2:1234");\n')),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ADMIN,CANCEL,REBALANCE,DISK\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);