"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[916594],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(58168),i=(n(296540),n(15680));const o={title:"TIMEDIFF",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/timediff",id:"version-3.0/sql-manual/sql-functions/date-time-functions/timediff",title:"TIMEDIFF",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/date-time-functions/timediff.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/timediff",permalink:"/docs/sql-manual/sql-functions/date-time-functions/timediff",draft:!1,tags:[],version:"3.0",frontMatter:{title:"TIMEDIFF",language:"en"},sidebar:"docs",previous:{title:"TIME_ROUND",permalink:"/docs/sql-manual/sql-functions/date-time-functions/time-round"},next:{title:"TIMESTAMPADD",permalink:"/docs/sql-manual/sql-functions/date-time-functions/timestampadd"}},s={},u=[{value:"timediff",id:"timediff",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:4},{value:"keywords",id:"keywords",level:3}],c={toc:u},f="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(f,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"timediff"},"timediff"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"TIME TIMEDIFF (DATETIME expr1, DATETIME expr2)")),(0,i.yg)("p",null,"TIMEDIFF returns the difference between two DATETIMEs"),(0,i.yg)("p",null,"The TIMEDIFF function returns the result of expr1 - expr2 expressed as a time value, with a return value of TIME type"),(0,i.yg)("p",null,"The results are limited to TIME values ranging from - 838:59:59 to 838:59:59."),(0,i.yg)("h4",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> SELECT TIMEDIFF(now(),utc_timestamp());\n+----------------------------------+\n| timediff(now(), utc_timestamp()) |\n+----------------------------------+\n| 08:00:00                         |\n+----------------------------------+\n\nmysql> SELECT TIMEDIFF('2019-07-11 16:59:30','2019-07-11 16:59:21');\n+--------------------------------------------------------+\n| timediff('2019-07-11 16:59:30', '2019-07-11 16:59:21') |\n+--------------------------------------------------------+\n| 00:00:09                                               |\n+--------------------------------------------------------+\n\nmysql> SELECT TIMEDIFF('2019-01-01 00:00:00', NULL);\n+---------------------------------------+\n| timediff('2019-01-01 00:00:00', NULL) |\n+---------------------------------------+\n| NULL                                  |\n+---------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"TIMEDIFF\n")))}p.isMDXComponent=!0}}]);