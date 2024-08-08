"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[545134],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||y[m]||l;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39608:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=t(58168),o=(t(296540),t(15680));const l={title:"NOT_NULL_OR_EMPTY",language:"zh-CN"},i=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/not-null-or-empty",id:"version-3.0/sql-manual/sql-functions/string-functions/not-null-or-empty",title:"NOT_NULL_OR_EMPTY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/string-functions/not-null-or-empty.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/not-null-or-empty",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/not-null-or-empty",draft:!1,tags:[],version:"3.0",frontMatter:{title:"NOT_NULL_OR_EMPTY",language:"zh-CN"},sidebar:"docs",previous:{title:"NULL_OR_EMPTY",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/null-or-empty"},next:{title:"HEX",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/hex"}},s={},u=[{value:"not_null_or_empty",id:"not_null_or_empty",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function y(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"not_null_or_empty"},"not_null_or_empty"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"BOOLEAN NOT_NULL_OR_EMPTY (VARCHAR str)")),(0,o.yg)("p",null,"\u5982\u679c\u5b57\u7b26\u4e32\u4e3a\u7a7a\u5b57\u7b26\u4e32\u6216\u8005NULL\uff0c\u8fd4\u56defalse\u3002\u5426\u5219\uff0c\u8fd4\u56detrue\u3002"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MySQL [(none)]> select not_null_or_empty(null);\n+-------------------------+\n| not_null_or_empty(NULL) |\n+-------------------------+\n|                       0 |\n+-------------------------+\n\nMySQL [(none)]> select not_null_or_empty(\"\");\n+-----------------------+\n| not_null_or_empty('') |\n+-----------------------+\n|                     0 |\n+-----------------------+\n\nMySQL [(none)]> select not_null_or_empty(\"a\");\n+------------------------+\n| not_null_or_empty('a') |\n+------------------------+\n|                      1 |\n+------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"NOT_NULL_OR_EMPTY\n")))}y.isMDXComponent=!0}}]);