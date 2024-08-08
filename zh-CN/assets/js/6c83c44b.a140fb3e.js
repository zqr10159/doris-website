"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[663946],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,f=u["".concat(c,".").concat(d)]||u[d]||g[d]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},434264:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const o={title:"PERCENTILE_APPROX_WEIGHTED",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/percentile_approx_weighted",id:"sql-manual/sql-functions/aggregate-functions/percentile_approx_weighted",title:"PERCENTILE_APPROX_WEIGHTED",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/percentile_approx_weighted.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/percentile_approx_weighted",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/percentile_approx_weighted",draft:!1,tags:[],version:"current",frontMatter:{title:"PERCENTILE_APPROX_WEIGHTED",language:"zh-CN"},sidebar:"docs",previous:{title:"PERCENTILE_APPROX",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/percentile-approx"},next:{title:"HISTOGRAM",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/histogram"}},c={},s=[{value:"PERCENTILE_APPROX_WEIGHTED",id:"percentile_approx_weighted",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"percentile_approx_weighted"},"PERCENTILE_APPROX_WEIGHTED"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"PERCENTILE_APPROX_WEIGHTED(expr, w ,DOUBLE p [, DOUBLE compression])")),(0,a.yg)("p",null,"\u8be5\u51fd\u6570\u548cPERCENTILE_APPROX\u7c7b\u4f3c\uff0c\u552f\u4e00\u7684\u533a\u522b\u662f\u591a\u4e86\u4e00\u4e2a\u53c2\u6570w\uff0c\u7528\u6765\u8868\u793aexpr\u51fa\u73b0\u7684\u6b21\u6570\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql >select * from quantile_weighted_table order by k;\n+------+------+\n| k    | w    |\n+------+------+\n|    1 |    2 |\n|    3 |    1 |\n|    5 |    2 |\n+------+------+\n\n\nmysql >select percentile_approx_weighted(k,w,0.55) from quantile_weighted_table;\n+----------------------------------------------------------------------------------------+\n| percentile_approx_weighted(cast(k as DOUBLE), cast(w as DOUBLE), cast(0.55 as DOUBLE)) |\n+----------------------------------------------------------------------------------------+\n|                                                                     3.3333332538604736 |\n+----------------------------------------------------------------------------------------+\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"PERCENTILE_APPROX,PERCENTILE,APPROX,PERCENTILE_APPROX_WEIGHTED"))}g.isMDXComponent=!0}}]);