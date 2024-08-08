"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[352272],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>h});var n=a(296540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(a),p=o,h=d["".concat(s,".").concat(p)]||d[p]||u[p]||r;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},927237:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>v,frontMatter:()=>m,metadata:()=>u,toc:()=>h});var n=a(58168),o=a(296540),r=a(15680);function l(){const[e,t]=(0,o.useState)("");return(0,o.useEffect)((()=>{if("undefined"!=typeof window){const e=location.pathname.includes("zh-CN/docs")?location.pathname.split("/")[3]:location.pathname.split("/")[2];location.pathname.includes("docs")&&["dev","2.1","2.0","1.2"].includes(e)?t(e):t("")}}),["undefined"!=typeof window&&location.pathname]),o.createElement(o.Fragment,null,o.createElement("div",{className:"home-page-hero"},o.createElement("div",{className:"home-page-hero-right"},o.createElement("a",{className:"latest-button-CN",href:`/zh-CN/docs${""===e?"":`/${e}`}/gettingStarted/tutorials/doris-hudi`},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"\u4f7f\u7528\u6559\u7a0b")),o.createElement("div",{className:"latest-button-title"},o.createElement("div",{style:{marginBottom:10}},"\u4f7f\u7528 Doris \u548c Hudi \u6784\u5efa Lakehouse")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"\u5982\u4f55\u5feb\u901f\u642d\u5efa Apache Doris \u4e0e Hudi \u6d4b\u8bd5\u53ca\u6f14\u793a\u73af\u5883\uff0c\u5e76\u5bf9\u5404\u529f\u80fd\u64cd\u4f5c\u8fdb\u884c\u6f14\u793a\u3002")),o.createElement("a",{className:"latest-button-CN",href:`/zh-CN/docs${""===e?"":`/${e}`}/gettingStarted/tutorials/doris-paimon`},o.createElement("div",{className:"latest-button-title"},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"\u4f7f\u7528\u6559\u7a0b")),o.createElement("div",{style:{marginBottom:10}},"\u4f7f\u7528 Doris \u548c Paimon \u6784\u5efa Lakehouse")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"\u5982\u4f55\u5feb\u901f\u642d\u5efa Apache Doris \u4e0e Paimon \u6d4b\u8bd5\u53ca\u6f14\u793a\u73af\u5883\u5e76\u5c55\u793a\u5404\u529f\u80fd\u7684\u4f7f\u7528\u64cd\u4f5c\u3002")))))}function i(){const[e,t]=(0,o.useState)("");return(0,o.useEffect)((()=>{if("undefined"!=typeof window){const e=location.pathname.includes("zh-CN/docs")?location.pathname.split("/")[3]:location.pathname.split("/")[2];location.pathname.includes("docs")&&["dev","2.1","2.0","1.2"].includes(e)?t(e):t("")}}),["undefined"!=typeof window&&location.pathname]),o.createElement(o.Fragment,null,o.createElement("div",{className:"home-page-hero"},o.createElement("div",{className:"home-page-hero-right"},o.createElement("a",{className:"latest-button-CN",href:`/zh-CN/docs${""===e?"":`/${e}`}/practical-guide/log-storage-analysis`},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"\u5b9e\u8df5\u6559\u7a0b")),o.createElement("div",{className:"latest-button-title"},o.createElement("div",{style:{marginBottom:10}},"\u65e5\u5fd7\u5b58\u50a8\u4e0e\u5206\u6790")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"\u5982\u4f55\u57fa\u4e8e Apache Doris \u6784\u5efa\u5f00\u653e\u3001\u9ad8\u6027\u80fd\u4f4e\u6210\u672c\u3001\u7edf\u4e00\u7684\u65e5\u5fd7\u5b58\u50a8\u5206\u6790\u5e73\u53f0\u3002")),o.createElement("a",{className:"latest-button-CN",href:`/zh-CN/docs${""===e?"":`/${e}`}/lakehouse/datalake-analytics/hive`},o.createElement("div",{className:"latest-button-title"},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"\u6e56\u4ed3\u4e00\u4f53")),o.createElement("div",{style:{marginBottom:10}},"Hive Catalog")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"Doris \u53ef\u901a\u8fc7\u8fde\u63a5\u6216\u517c\u5bb9 Hive Metastore\uff0c\u81ea\u52a8\u83b7\u53d6\u5e93\u8868\u4fe1\u606f\u5e76\u8fdb\u884c\u6570\u636e\u67e5\u8be2\u3002")))))}function s(){const[e,t]=(0,o.useState)("");return(0,o.useEffect)((()=>{if("undefined"!=typeof window){const e=location.pathname.includes("zh-CN/docs")?location.pathname.split("/")[3]:location.pathname.split("/")[2];location.pathname.includes("docs")&&["dev","2.1","2.0","1.2"].includes(e)?t(e):t("")}}),["undefined"!=typeof window&&location.pathname]),o.createElement(o.Fragment,null,o.createElement("div",{className:"home-page-hero"},o.createElement("div",{className:"home-page-hero-right"},o.createElement("a",{className:"latest-button-CN",href:`/zh-CN/docs${""===e?"":`/${e}`}/query/nereids`},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"\u6570\u636e\u67e5\u8be2")),o.createElement("div",{className:"latest-button-title"},o.createElement("div",{style:{marginBottom:10}},"\u5168\u65b0\u4f18\u5316\u5668")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"\u73b0\u4ee3\u67b6\u6784\u7684\u5168\u65b0\u67e5\u8be2\u4f18\u5316\u5668\uff0c\u80fd\u591f\u66f4\u9ad8\u6548\u5904\u7406\u5f53\u524d Doris \u573a\u666f\u7684\u67e5\u8be2\u8bf7\u6c42\uff0c\u540c\u65f6\u63d0\u4f9b\u66f4\u597d\u7684\u6269\u5c55\u6027\u3002")),o.createElement("a",{className:"latest-button-CN",href:`/zh-CN/docs${""===e?"":`/${e}`}/table-design/index/inverted-index`},o.createElement("div",{className:"latest-button-title"},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"\u6570\u636e\u8868\u8bbe\u8ba1")),o.createElement("div",{style:{marginBottom:10}},"\u5012\u6392\u7d22\u5f15")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"\u51cf\u5c11\u5012\u6392\u7d22\u5f15 Exists \u8c03\u7528\u907f\u514d\u5bf9\u8c61\u5b58\u50a8\u8bbf\u95ee\u5ef6\u8fdf\u5e76\u4f18\u5316\u4e86\u5012\u6392\u7d22\u5f15\u67e5\u8be2\u6d41\u7a0b\u65f6\u7684\u989d\u5916\u5f00\u9500\u3002")))))}function c(){const[e,t]=(0,o.useState)("");return(0,o.useEffect)((()=>{if("undefined"!=typeof window){const e=location.pathname.includes("zh-CN/docs")?location.pathname.split("/")[3]:location.pathname.split("/")[2];location.pathname.includes("docs")&&["dev","2.1","2.0","1.2"].includes(e)?t(e):t("")}}),["undefined"!=typeof window&&location.pathname]),o.createElement(o.Fragment,null,o.createElement("div",{className:"home-page-hero"},o.createElement("div",{className:"home-page-hero-right"},o.createElement("a",{className:"latest-button",href:"https://ask.selectdb.com/"},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"\u8fd1\u671f\u4e8b\u4ef6")),o.createElement("div",{className:"latest-button-title"},o.createElement("div",{style:{marginBottom:10}},"\u6280\u672f\u8bba\u575b\u5168\u9762\u5347\u7ea7\u4e0a\u7ebf\uff01Ask and Discover")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"\u8054\u5408\u4f17\u591a Doris \u751f\u6001\u4e2d\u7684\u5f00\u53d1\u8005\u3001\u7528\u6237\u4ee5\u53ca\u5408\u4f5c\u4f19\u4f34\uff0c\u5171\u540c\u53d1\u8d77\u548c\u521b\u5efa\u7684\u95ee\u7b54\u793e\u533a\u3002\u5728\u8fd9\u91cc\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u7684\u63d0\u51fa\u548c\u8ba8\u8bba\u6280\u672f\u95ee\u9898\u3001\u5206\u4eab\u548c\u6536\u83b7\u6280\u672f\u7ecf\u9a8c\u3001\u4e0e\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u8fdb\u884c\u4e92\u52a8\u548c\u4ea4\u6d41\u3002"),o.createElement("div",{style:{fontSize:14,marginBottom:10}},"\u8fdb\u5165\u8bba\u575b")),o.createElement("a",{className:"latest-button",href:`/zh-CN/docs${""===e?"":`/${e}`}/releasenotes/v2.1/release-2.1.5`},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"\u7248\u672c\u53d1\u5e03")),o.createElement("div",{className:"latest-button-title"},o.createElement("div",{style:{marginBottom:10}},"Apache Doris 2.1.5 \u6b63\u5f0f\u53d1\u5e03")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"2.1.5 \u7248\u672c\u5728\u6e56\u4ed3\u4e00\u4f53\u3001\u591a\u8868\u7269\u5316\u89c6\u56fe\u3001\u534a\u7ed3\u6784\u5316\u6570\u636e\u5206\u6790\u7b49\u65b9\u9762\u8fdb\u884c\u4e86\u5168\u9762\u66f4\u65b0\u53ca\u6539\u8fdb\uff0c\u540c\u65f6\u5728\u5012\u6392\u7d22\u5f15\u3001\u67e5\u8be2\u4f18\u5316\u5668\u3001\u67e5\u8be2\u5f15\u64ce\u3001\u5b58\u50a8\u7ba1\u7406\u7b49 10 \u4f59\u65b9\u5411\u4e0a\u5b8c\u6210\u4e86\u82e5\u5e72\u95ee\u9898\u4fee\u590d\u3002"),o.createElement("div",{style:{fontSize:14,marginBottom:10}},"\u67e5\u770b\u8be6\u60c5")))))}const m={title:"\u6700\u65b0\u52a8\u6001",language:"zh-CN"},d=void 0,u={unversionedId:"gettingStarted/what-is-new",id:"version-3.0/gettingStarted/what-is-new",title:"\u6700\u65b0\u52a8\u6001",description:"\u8fd1\u671f\u6587\u6863\u66f4\u65b0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/gettingStarted/what-is-new.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/what-is-new",permalink:"/zh-CN/docs/gettingStarted/what-is-new",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u6700\u65b0\u52a8\u6001",language:"zh-CN"},sidebar:"get-starting",next:{title:"Apache Doris \u7b80\u4ecb",permalink:"/zh-CN/docs/gettingStarted/what-is-apache-doris"}},p={},h=[{value:"\u8fd1\u671f\u6587\u6863\u66f4\u65b0",id:"\u8fd1\u671f\u6587\u6863\u66f4\u65b0",level:2}],g={toc:h},f="wrapper";function v(e){let{components:t,...a}=e;return(0,r.yg)(f,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(c,{mdxType:"Latest"}),(0,r.yg)("h2",{id:"\u8fd1\u671f\u6587\u6863\u66f4\u65b0"},"\u8fd1\u671f\u6587\u6863\u66f4\u65b0"),(0,r.yg)(l,{mdxType:"PageHero"}),(0,r.yg)(i,{mdxType:"PageHero1"}),(0,r.yg)(s,{mdxType:"PageHero2"}))}v.isMDXComponent=!0}}]);