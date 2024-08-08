"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[748797],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(s,".").concat(d)]||u[d]||g[d]||i;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},695598:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const i={title:"PERCENTILE_APPROX_WEIGHTED",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/percentile_approx_weighted",id:"version-2.1/sql-manual/sql-functions/aggregate-functions/percentile_approx_weighted",title:"PERCENTILE_APPROX_WEIGHTED",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/aggregate-functions/percentile_approx_weighted.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/percentile_approx_weighted",permalink:"/docs/2.1/sql-manual/sql-functions/aggregate-functions/percentile_approx_weighted",draft:!1,tags:[],version:"2.1",frontMatter:{title:"PERCENTILE_APPROX_WEIGHTED",language:"zh-CN"},sidebar:"docs",previous:{title:"PERCENTILE_APPROX",permalink:"/docs/2.1/sql-manual/sql-functions/aggregate-functions/percentile-approx"},next:{title:"HISTOGRAM",permalink:"/docs/2.1/sql-manual/sql-functions/aggregate-functions/histogram"}},s={},c=[{value:"PERCENTILE_APPROX_WEIGHTED",id:"percentile_approx_weighted",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"percentile_approx_weighted"},"PERCENTILE_APPROX_WEIGHTED"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"PERCENTILE_APPROX_WEIGHTED(expr, w ,DOUBLE p [, DOUBLE compression])")),(0,a.yg)("p",null,"The function is similar to PERCENTILE_APPROX, with the only difference being an additional parameter w, which represents the number of times expr appears."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql >select * from quantile_weighted_table order by k;\n+------+------+\n| k    | w    |\n+------+------+\n|    1 |    2 |\n|    3 |    1 |\n|    5 |    2 |\n+------+------+\n\n\nmysql >select percentile_approx_weighted(k,w,0.55) from quantile_weighted_table;\n+----------------------------------------------------------------------------------------+\n| percentile_approx_weighted(cast(k as DOUBLE), cast(w as DOUBLE), cast(0.55 as DOUBLE)) |\n+----------------------------------------------------------------------------------------+\n|                                                                     3.3333332538604736 |\n+----------------------------------------------------------------------------------------+\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"PERCENTILE_APPROX,PERCENTILE,APPROX,PERCENTILE_APPROX_WEIGHTED"))}g.isMDXComponent=!0}}]);