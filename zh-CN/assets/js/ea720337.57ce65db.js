"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[420931],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,y=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=m;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[d]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},243266:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=t(58168),i=(t(296540),t(15680));const l={title:"second_ceil",language:"zh-CN"},a=void 0,c={unversionedId:"sql-manual/sql-functions/date-time-functions/second_ceil",id:"version-2.1/sql-manual/sql-functions/date-time-functions/second_ceil",title:"second_ceil",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/date-time-functions/second_ceil.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/second_ceil",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/date-time-functions/second_ceil",draft:!1,tags:[],version:"2.1",frontMatter:{title:"second_ceil",language:"zh-CN"},sidebar:"docs",previous:{title:"date_ceil",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/date-time-functions/date_ceil"},next:{title:"minute_ceil",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/date-time-functions/minute_ceil"}},o={},s=[{value:"second_ceil",id:"second_ceil",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"second_ceil"},"second_ceil"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"DATETIME SECOND_CEIL(DATETIME datetime)\nDATETIME SECOND_CEIL(DATETIME datetime, DATETIME origin)\nDATETIME SECOND_CEIL(DATETIME datetime, INT period)\nDATETIME SECOND_CEIL(DATETIME datetime, INT period, DATETIME origin)\n")),(0,i.yg)("p",null,"\u5c06\u65e5\u671f\u8f6c\u5316\u4e3a\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5468\u671f\u7684\u6700\u8fd1\u4e0a\u53d6\u6574\u65f6\u523b\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"datetime\uff1a\u53c2\u6570\u662f\u5408\u6cd5\u7684\u65e5\u671f\u8868\u8fbe\u5f0f\u3002"),(0,i.yg)("li",{parentName:"ul"},"period\uff1a\u53c2\u6570\u662f\u6307\u5b9a\u6bcf\u4e2a\u5468\u671f\u6709\u591a\u5c11\u79d2\u7ec4\u6210\u3002"),(0,i.yg)("li",{parentName:"ul"},"origin\uff1a\u5f00\u59cb\u7684\u65f6\u95f4\u8d77\u70b9\uff0c\u5982\u679c\u4e0d\u586b\uff0c\u9ed8\u8ba4\u662f 0001-01-01T00:00:00\u3002")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select second_ceil(\"2023-07-13 22:28:18\", 5);\n+--------------------------------------------------------------+\n| second_ceil(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+--------------------------------------------------------------+\n| 2023-07-13 22:28:20                                          |\n+--------------------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SECOND_CEIL, SECOND, CEIL\n")),(0,i.yg)("h3",{id:"best-practice"},"Best Practice"),(0,i.yg)("p",null,"\u8fd8\u53ef\u53c2\u9605 ",(0,i.yg)("a",{parentName:"p",href:"./date_ceil"},"date_ceil")))}p.isMDXComponent=!0}}]);