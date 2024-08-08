"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[535948],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>y});var t=r(296540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,y=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?t.createElement(y,i(i({ref:n},c),{},{components:r})):t.createElement(y,i({ref:n},c))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=m;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},625348:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var t=r(58168),o=(r(296540),r(15680));const l={title:"ROUND",language:"en"},i=void 0,a={unversionedId:"sql-manual/sql-functions/numeric-functions/round",id:"version-3.0/sql-manual/sql-functions/numeric-functions/round",title:"ROUND",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/numeric-functions/round.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/round",permalink:"/docs/sql-manual/sql-functions/numeric-functions/round",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ROUND",language:"en"},sidebar:"docs",previous:{title:"PMOD",permalink:"/docs/sql-manual/sql-functions/numeric-functions/pmod"},next:{title:"ROUND_BANKERS",permalink:"/docs/sql-manual/sql-functions/numeric-functions/round-bankers"}},u={},s=[{value:"round",id:"round",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},d="wrapper";function p(e){let{components:n,...r}=e;return(0,o.yg)(d,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"round"},"round"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"T round(T x[, d])"),"\nRounds the argument ",(0,o.yg)("inlineCode",{parentName:"p"},"x")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"d")," decimal places. ",(0,o.yg)("inlineCode",{parentName:"p"},"d")," defaults to 0 if not specified. If d is negative, the left d digits of the decimal point are 0. If x or d is null, null is returned.\n2.5 will round up to 3. If you want to round down to 2, please use the round_bankers function."),(0,o.yg)("p",null,"If ",(0,o.yg)("inlineCode",{parentName:"p"},"d")," is a column, and ",(0,o.yg)("inlineCode",{parentName:"p"},"x")," has Decimal type, scale of result Decimal will always be same with input Decimal."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Another alias for this function is ",(0,o.yg)("inlineCode",{parentName:"p"},"dround"),".")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select round(2.4);\n+------------+\n| round(2.4) |\n+------------+\n|          2 |\n+------------+\nmysql> select round(2.5);\n+------------+\n| round(2.5) |\n+------------+\n|          3 |\n+------------+\nmysql> select round(-3.4);\n+-------------+\n| round(-3.4) |\n+-------------+\n|          -3 |\n+-------------+\nmysql> select round(-3.5);\n+-------------+\n| round(-3.5) |\n+-------------+\n|          -4 |\n+-------------+\nmysql> select round(1667.2725, 2);\n+---------------------+\n| round(1667.2725, 2) |\n+---------------------+\n|             1667.27 |\n+---------------------+\nmysql> select round(1667.2725, -2);\n+----------------------+\n| round(1667.2725, -2) |\n+----------------------+\n|                 1700 |\n+----------------------+\nmysql> SELECT number\n    -> , round(number * 2.5, number - 1) AS r_decimal_column\n    -> , round(number * 2.5, 0) AS r_decimal_literal\n    -> , round(cast(number * 2.5 AS DOUBLE), number - 1) AS r_double_column\n    -> , round(cast(number * 2.5 AS DOUBLE), 0) AS r_double_literal\n    -> FROM test_enhanced_round\n    -> WHERE rid = 1;\n+--------+------------------+-------------------+-----------------+------------------+\n| number | r_decimal_column | r_decimal_literal | r_double_column | r_double_literal |\n+--------+------------------+-------------------+-----------------+------------------+\n|      1 |              3.0 |                 3 |               3 |                3 |\n+--------+------------------+-------------------+-----------------+------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"ROUND, DROUND\n")))}p.isMDXComponent=!0}}]);