"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[82109],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>O});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,O=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(O,o(o({ref:t},p),{},{components:n})):r.createElement(O,o({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-PARTITION-ID",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-PARTITION-ID",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-PARTITION-ID",title:"SHOW-PARTITION-ID",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-PARTITION-ID.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-PARTITION-ID",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-PARTITION-ID",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-PARTITION-ID",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-MIGRATIONS",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-MIGRATIONS"},next:{title:"SHOW-SNAPSHOT",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-SNAPSHOT"}},s={},c=[{value:"SHOW-PARTITION-ID",id:"show-partition-id",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-partition-id"},"SHOW-PARTITION-ID"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW PARTITION ID"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u6839\u636e partition id \u67e5\u627e\u5bf9\u5e94\u7684 database name, table name, partition name\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff09"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"    SHOW PARTITION [partition_id]\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6839\u636e partition id \u67e5\u627e\u5bf9\u5e94\u7684 database name, table name, partition name"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW PARTITION 10002;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, PARTITION, ID\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);