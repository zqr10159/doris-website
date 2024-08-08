"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[347257],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(296540);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,f=function(e,t){if(null==e)return{};var n,r,f={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(f[n]=e[n]);return f}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(f[n]=e[n])}return f}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,f=e.mdxType,a=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=f,y=c["".concat(o,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,f=t&&t.mdxType;if("string"==typeof e||f){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:f,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},396418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(58168),f=(n(296540),n(15680));const a={title:"IPV6",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-data-types/ip/IPV6",id:"version-2.0/sql-manual/sql-data-types/ip/IPV6",title:"IPV6",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-data-types/ip/IPV6.md",sourceDirName:"sql-manual/sql-data-types/ip",slug:"/sql-manual/sql-data-types/ip/IPV6",permalink:"/zh-CN/docs/2.0/sql-manual/sql-data-types/ip/IPV6",draft:!1,tags:[],version:"2.0",frontMatter:{title:"IPV6",language:"zh-CN"},sidebar:"docs",previous:{title:"IPV4",permalink:"/zh-CN/docs/2.0/sql-manual/sql-data-types/ip/IPV4"},next:{title:"ALTER-SYSTEM-ADD-FOLLOWER",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-FOLLOWER"}},o={},p=[{value:"IPV6",id:"ipv6",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,f.yg)(c,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,f.yg)("h2",{id:"ipv6"},"IPV6"),(0,f.yg)("h3",{id:"description"},"description"),(0,f.yg)("p",null,"IPv6 \u7c7b\u578b\uff0c\u4ee5 UInt128 \u7684\u5f62\u5f0f\u5b58\u50a8\u5728 16 \u4e2a\u5b57\u8282\u4e2d\uff0c\u7528\u4e8e\u8868\u793a IPv6 \u5730\u5740\u3002\n\u53d6\u503c\u8303\u56f4\u662f ","['::', 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff']","\u3002"),(0,f.yg)("p",null,(0,f.yg)("inlineCode",{parentName:"p"},"\u8d85\u51fa\u53d6\u503c\u8303\u56f4\u6216\u8005\u683c\u5f0f\u975e\u6cd5\u7684\u8f93\u5165\u5c06\u8fd4\u56deNULL")),(0,f.yg)("h3",{id:"example"},"example"),(0,f.yg)("p",null,"\u5efa\u8868\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,f.yg)("pre",null,(0,f.yg)("code",{parentName:"pre"},'CREATE TABLE ipv6_test (\n  `id` int,\n  `ip_v6` ipv6\n) ENGINE=OLAP\nDISTRIBUTED BY HASH(`id`) BUCKETS 4\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n')),(0,f.yg)("p",null,"\u63d2\u5165\u6570\u636e\u793a\u4f8b\uff1a"),(0,f.yg)("pre",null,(0,f.yg)("code",{parentName:"pre"},"insert into ipv6_test values(1, '::');\ninsert into ipv6_test values(2, '2001:16a0:2:200a::2');\ninsert into ipv6_test values(3, 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff');\ninsert into ipv6_test values(4, 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffffg'); // invalid data\n")),(0,f.yg)("p",null,"\u67e5\u8be2\u6570\u636e\u793a\u4f8b\uff1a"),(0,f.yg)("pre",null,(0,f.yg)("code",{parentName:"pre"},"mysql> select * from ipv6_test order by id;\n+------+-----------------------------------------+\n| id   | ip_v6                                   |\n+------+-----------------------------------------+\n|    1 | ::                                      |\n|    2 | 2001:16a0:2:200a::2                     |\n|    3 | ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff |\n|    4 | NULL                                    |\n+------+-----------------------------------------+\n")),(0,f.yg)("h3",{id:"keywords"},"keywords"),(0,f.yg)("p",null,"IPV6"))}u.isMDXComponent=!0}}]);