"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[460554],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,y=p["".concat(c,".").concat(d)]||p[d]||f[d]||s;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},823018:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(58168),o=(t(296540),t(15680));const s={title:"UCASE",language:"zh-CN"},i=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/ucase",id:"version-3.0/sql-manual/sql-functions/string-functions/ucase",title:"UCASE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/string-functions/ucase.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/ucase",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/ucase",draft:!1,tags:[],version:"3.0",frontMatter:{title:"UCASE",language:"zh-CN"},sidebar:"docs",previous:{title:"UPPER",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/upper"},next:{title:"INITCAP",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/initcap"}},c={},l=[{value:"ucase",id:"ucase",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"keywords",id:"keywords",level:3}],u={toc:l},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"ucase"},"ucase"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"VARCHAR ucase(VARCHAR str)")),(0,o.yg)("p",null,"\u5c06\u53c2\u6570\u4e2d\u6240\u6709\u7684\u5b57\u7b26\u4e32\u90fd\u8f6c\u6362\u6210\u5927\u5199\uff0c\u6b64\u51fd\u6570\u7684\u53e6\u4e00\u4e2a\u522b\u540d\u4e3a",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-functions/string-functions/upper"},"upper"),"\u3002"),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"UCASE\n")))}f.isMDXComponent=!0}}]);