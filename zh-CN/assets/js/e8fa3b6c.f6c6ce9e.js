"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[397509],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,g=u["".concat(i,".").concat(y)]||u[y]||m[y]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},936226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const o={title:"SHOW-STORAGE-POLICY-USING",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-STORAGE-POLICY-USING",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-STORAGE-POLICY-USING",title:"SHOW-STORAGE-POLICY-USING",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-STORAGE-POLICY-USING.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-STORAGE-POLICY-USING",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-STORAGE-POLICY-USING",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-STORAGE-POLICY-USING",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-POLICY",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-POLICY"},next:{title:"SHOW-CATALOG-RECYCLE-BIN",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-CATALOG-RECYCLE-BIN"}},i={},p=[{value:"SHOW-STORAGE-POLICY-USING",id:"show-storage-policy-using",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-storage-policy-using"},"SHOW-STORAGE-POLICY-USING"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW STORAGE POLICY USING"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u67e5\u770b\u6240\u6709/\u6307\u5b9a\u5b58\u50a8\u7b56\u7565\u5173\u8054\u7684\u8868\u548c\u5206\u533a"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW STORAGE POLICY USING [FOR some_policy]\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u6240\u6709\u542f\u7528\u4e86\u5b58\u50a8\u7b56\u7565\u7684\u5bf9\u8c61"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show storage policy using;\n+-----------------------+-----------------------------------------+----------------------------------------+------------+\n| PolicyName            | Database                                | Table                                  | Partitions |\n+-----------------------+-----------------------------------------+----------------------------------------+------------+\n| test_storage_policy   | regression_test_cold_heat_separation_p2 | table_with_storage_policy_1            | ALL        |\n| test_storage_policy   | regression_test_cold_heat_separation_p2 | partition_with_multiple_storage_policy | p201701    |\n| test_storage_policy_2 | regression_test_cold_heat_separation_p2 | partition_with_multiple_storage_policy | p201702    |\n| test_storage_policy_2 | regression_test_cold_heat_separation_p2 | table_with_storage_policy_2            | ALL        |\n| test_policy           | db2                                     | db2_test_1                             | ALL        |\n+-----------------------+-----------------------------------------+----------------------------------------+------------+\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u4f7f\u7528\u5b58\u50a8\u7b56\u7565test_storage_policy\u7684\u5bf9\u8c61"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show storage policy using for test_storage_policy;\n+---------------------+-----------+---------------------------------+------------+\n| PolicyName          | Database  | Table                           | Partitions |\n+---------------------+-----------+---------------------------------+------------+\n| test_storage_policy | db_1      | partition_with_storage_policy_1 | p201701    |\n| test_storage_policy | db_1      | table_with_storage_policy_1     | ALL        |\n+---------------------+-----------+---------------------------------+------------+\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, STORAGE, POLICY, USING\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);