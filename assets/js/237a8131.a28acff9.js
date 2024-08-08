"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[55787],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),g=a,y=p["".concat(c,".").concat(g)]||p[g]||f[g]||l;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},36839:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const l={title:"CHAR_LENGTH",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/char-length",id:"version-2.1/sql-manual/sql-functions/string-functions/char-length",title:"CHAR_LENGTH",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/string-functions/char-length.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/char-length",permalink:"/docs/2.1/sql-manual/sql-functions/string-functions/char-length",draft:!1,tags:[],version:"2.1",frontMatter:{title:"CHAR_LENGTH",language:"en"},sidebar:"docs",previous:{title:"BIT_LENGTH",permalink:"/docs/2.1/sql-manual/sql-functions/string-functions/bit-length"},next:{title:"LPAD",permalink:"/docs/2.1/sql-manual/sql-functions/string-functions/lpad"}},c={},s=[{value:"char_length",id:"char_length",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function f(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"char_length"},"char_length"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,"INT char_length(VARCHAR str)"),(0,a.yg)("p",null,"Returns the length of the string, and the number of characters returned for multi-byte characters. For example, five two-byte width words return a length of 5, only utf8 encoding is support at the current version. ",(0,a.yg)("inlineCode",{parentName:"p"},"character_length")," is the alias for this function."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select char_length(\"abc\");\n+--------------------+\n| char_length('abc') |\n+--------------------+\n|                  3 |\n+--------------------+\n\nmysql> select char_length(\"\u4e2d\u56fd\");\n+------------------- ---+\n| char_length('\u4e2d\u56fd')   |\n+-----------------------+\n|                     2 |\n+-----------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CHAR_LENGTH, CHARACTER_LENGTH\n")))}f.isMDXComponent=!0}}]);