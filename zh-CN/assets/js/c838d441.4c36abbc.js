"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[312954],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>y});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,y=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return a?r.createElement(y,o(o({ref:t},g),{},{components:a})):r.createElement(y,o({ref:t},g))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},514117:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(58168),n=(a(296540),a(15680));const l={title:"\u805a\u5408\u7c7b\u578b\u6982\u89c8",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-data-types/aggregate/aggregate-overview",id:"version-3.0/sql-manual/sql-data-types/aggregate/aggregate-overview",title:"\u805a\u5408\u7c7b\u578b\u6982\u89c8",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-data-types/aggregate/aggregate-overview.md",sourceDirName:"sql-manual/sql-data-types/aggregate",slug:"/sql-manual/sql-data-types/aggregate/aggregate-overview",permalink:"/zh-CN/docs/sql-manual/sql-data-types/aggregate/aggregate-overview",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u805a\u5408\u7c7b\u578b\u6982\u89c8",language:"zh-CN"},sidebar:"docs",previous:{title:"VARIANT",permalink:"/zh-CN/docs/sql-manual/sql-data-types/semi-structured/VARIANT"},next:{title:"HLL(HyperLogLog)",permalink:"/zh-CN/docs/sql-manual/sql-data-types/aggregate/HLL"}},i={},p=[],g={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\u805a\u5408\u7c7b\u578b\u5b58\u50a8\u805a\u5408\u7684\u7ed3\u679c\u6216\u8005\u4e2d\u95f4\u72b6\u6001\uff0c\u7528\u4e8e\u52a0\u901f\u805a\u5408\u67e5\u8be2\uff0c\u5305\u62ec\u4e0b\u9762\u51e0\u79cd\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-data-types/aggregate/BITMAP"},"BITMAP"),"\uff1a\u7528\u4e8e\u7cbe\u786e\u53bb\u91cd\uff0c\u5982 UV \u7edf\u8ba1\uff0c\u4eba\u7fa4\u5708\u9009\u7b49\u573a\u666f\u3002\u914d\u5408 bitmap_union\u3001bitmap_union_count\u3001bitmap_hash\u3001bitmap_hash64 \u7b49 BITMAP \u51fd\u6570\u4f7f\u7528\u3002")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-data-types/aggregate/HLL"},"HLL"),"\uff1a\u7528\u4e8e\u8fd1\u4f3c\u53bb\u91cd\uff0c\u6027\u80fd\u4f18\u4e8e COUNT DISTINCT\u3002\u914d\u5408  hll_union_agg\u3001hll_raw_agg\u3001hll_cardinality\u3001hll_hash \u7b49 HLL \u51fd\u6570\u4f7f\u7528\u3002")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-data-types/aggregate/QUANTILE_STATE"},"QUANTILE_STATE"),"\uff1a\u7528\u4e8e\u5206\u4f4d\u6570\u8fd1\u4f3c\u8ba1\u7b97\uff0c\u6027\u80fd\u4f18\u4e8e PERCENTILE\u3002\u914d\u5408 QUANTILE_PERCENT\u3001QUANTILE_UNION\u3001TO_QUANTILE_STATE \u7b49\u51fd\u6570\u4f7f\u7528\u3002")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-data-types/aggregate/AGG_STATE"},"AGG_STATE"),"\uff1a\u7528\u4e8e\u805a\u5408\u8ba1\u7b97\u52a0\u901f\uff0c\u914d\u5408 state/merge/union \u805a\u5408\u51fd\u6570\u7ec4\u5408\u5668\u4f7f\u7528\u3002"))))}u.isMDXComponent=!0}}]);