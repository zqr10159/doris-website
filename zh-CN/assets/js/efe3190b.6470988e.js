"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[650802],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(t),d=a,f=g["".concat(s,".").concat(d)]||g[d]||p[d]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},821301:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const o={title:"AVG_WEIGHTED",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/avg-weighted",id:"version-2.1/sql-manual/sql-functions/aggregate-functions/avg-weighted",title:"AVG_WEIGHTED",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/aggregate-functions/avg-weighted.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/avg-weighted",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/aggregate-functions/avg-weighted",draft:!1,tags:[],version:"2.1",frontMatter:{title:"AVG_WEIGHTED",language:"zh-CN"},sidebar:"docs",previous:{title:"AVG",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/aggregate-functions/avg"},next:{title:"SUM",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/aggregate-functions/sum"}},s={},c=[{value:"AVG_WEIGHTED",id:"avg_weighted",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},g="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"avg_weighted"},"AVG_WEIGHTED"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"}," double avg_weighted(x, weight)")),(0,a.yg)("p",null,"\u8ba1\u7b97\u52a0\u6743\u7b97\u672f\u5e73\u5747\u503c, \u5373\u8fd4\u56de\u7ed3\u679c\u4e3a: \u6240\u6709\u5bf9\u5e94\u6570\u503c\u548c\u6743\u91cd\u7684\u4e58\u79ef\u76f8\u7d2f\u52a0\uff0c\u9664\u603b\u7684\u6743\u91cd\u548c\u3002\n\u5982\u679c\u6240\u6709\u7684\u6743\u91cd\u548c\u7b49\u4e8e0, \u5c06\u8fd4\u56deNaN\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select avg_weighted(k2,k1) from baseall;\n+--------------------------+\n| avg_weighted(`k2`, `k1`) |\n+--------------------------+\n|                  495.675 |\n+--------------------------+\n1 row in set (0.02 sec)\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"AVG_WEIGHTED"))}p.isMDXComponent=!0}}]);