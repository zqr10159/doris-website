"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[623663],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),E=a,d=m["".concat(i,".").concat(E)]||m[E]||u[E]||l;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=E;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},201136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"ALTER-SYSTEM-ADD-OBSERVER",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-ADD-OBSERVER",id:"version-2.1/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-ADD-OBSERVER",title:"ALTER-SYSTEM-ADD-OBSERVER",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-ADD-OBSERVER.md",sourceDirName:"sql-manual/sql-statements/Cluster-Management-Statements",slug:"/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-ADD-OBSERVER",permalink:"/docs/2.1/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-ADD-OBSERVER",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ALTER-SYSTEM-ADD-OBSERVER",language:"en"},sidebar:"docs",previous:{title:"ALTER-SYSTEM-ADD-FOLLOWER",permalink:"/docs/2.1/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-ADD-FOLLOWER"},next:{title:"ALTER-SYSTEM-ADD-BACKEND",permalink:"/docs/2.1/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BACKEND"}},i={},c=[{value:"ALTER-SYSTEM-ADD-OBSERVER",id:"alter-system-add-observer",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"alter-system-add-observer"},"ALTER-SYSTEM-ADD-OBSERVER"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ALTER SYSTEM ADD OBSERVER"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is to increase the node of the OBSERVER role of FRONTEND, (only for administrators!)"),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM ADD OBSERVER "follower_host:edit_log_port"\n')),(0,a.yg)("p",null,"illustrate:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"host can be a hostname or an ip address"),(0,a.yg)("li",{parentName:"ol"},"edit_log_port : edit_log_port in its configuration file fe.conf")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Add an OBSERVER node"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM ADD OBSERVER "host_ip:9010"\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ALTER, SYSTEM, ADD, OBSERVER, ALTER SYSTEM\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);