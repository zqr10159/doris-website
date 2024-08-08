"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[976558],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>d});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,d=u["".concat(p,".").concat(f)]||u[f]||y[f]||o;return n?t.createElement(d,l(l({ref:r},c),{},{components:n})):t.createElement(d,l({ref:r},c))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},634970:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=n(58168),a=(n(296540),n(15680));const o={title:"ARRAY_POPFRONT",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array-popfront",id:"version-3.0/sql-manual/sql-functions/array-functions/array-popfront",title:"ARRAY_POPFRONT",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/array-functions/array-popfront.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-popfront",permalink:"/docs/sql-manual/sql-functions/array-functions/array-popfront",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ARRAY_POPFRONT",language:"en"},sidebar:"docs",previous:{title:"ARRAY_POPBACK",permalink:"/docs/sql-manual/sql-functions/array-functions/array-popback"},next:{title:"ARRAY_PUSHFRONT",permalink:"/docs/sql-manual/sql-functions/array-functions/array-pushfront"}},p={},s=[{value:"array_popfront",id:"array_popfront",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},u="wrapper";function y(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_popfront"},"array_popfront"),(0,a.yg)("p",null,"array_popfront"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY<T> array_popfront(ARRAY<T> arr)")),(0,a.yg)("p",null,"Remove the first element from array."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select array_popfront(['test', NULL, 'value']);\n+-----------------------------------------------------+\n| array_popfront(ARRAY('test', NULL, 'value'))        |\n+-----------------------------------------------------+\n| [NULL, value]                                       |\n+-----------------------------------------------------+\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,POPFRONT,ARRAY_POPFRONT"))}y.isMDXComponent=!0}}]);