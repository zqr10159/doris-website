"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[729754],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},763971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(58168),i=(n(296540),n(15680));const a={title:"hour_ceil",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/hour_ceil",id:"version-2.1/sql-manual/sql-functions/date-time-functions/hour_ceil",title:"hour_ceil",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/date-time-functions/hour_ceil.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/hour_ceil",permalink:"/docs/2.1/sql-manual/sql-functions/date-time-functions/hour_ceil",draft:!1,tags:[],version:"2.1",frontMatter:{title:"hour_ceil",language:"en"},sidebar:"docs",previous:{title:"minute_ceil",permalink:"/docs/2.1/sql-manual/sql-functions/date-time-functions/minute_ceil"},next:{title:"day_ceil",permalink:"/docs/2.1/sql-manual/sql-functions/date-time-functions/day_ceil"}},c={},s=[{value:"hour_ceil",id:"hour_ceil",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"hour_ceil"},"hour_ceil"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"DATETIME HOUR_CEIL(DATETIME datetime)\nDATETIME HOUR_CEIL(DATETIME datetime, DATETIME origin)\nDATETIME HOUR_CEIL(DATETIME datetime, INT period)\nDATETIME HOUR_CEIL(DATETIME datetime, INT period, DATETIME origin)\n")),(0,i.yg)("p",null,"Convert the date to the nearest rounding up time of the specified time interval period."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"datetime: a valid date expression."),(0,i.yg)("li",{parentName:"ul"},"period: specifies how many hours each cycle consists of."),(0,i.yg)("li",{parentName:"ul"},"origin: starting from 0001-01-01T00:00:00.")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select hour_ceil(\"2023-07-13 22:28:18\", 5);\n+------------------------------------------------------------+\n| hour_ceil(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+------------------------------------------------------------+\n| 2023-07-14 02:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.03 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"HOUR_CEIL, HOUR, CEIL\n")),(0,i.yg)("h3",{id:"best-practice"},"Best Practice"),(0,i.yg)("p",null,"See also ",(0,i.yg)("a",{parentName:"p",href:"./date_ceil"},"date_ceil")))}d.isMDXComponent=!0}}]);