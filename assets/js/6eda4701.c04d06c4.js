"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[697547],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,y=d["".concat(c,".").concat(u)]||d[u]||g[u]||o;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},969232:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(58168),r=(a(296540),a(15680));const o={title:"DataGrip",language:"en"},i=void 0,s={unversionedId:"ecosystem/bi/datagrip",id:"version-3.0/ecosystem/bi/datagrip",title:"DataGrip",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/ecosystem/bi/datagrip.md",sourceDirName:"ecosystem/bi",slug:"/ecosystem/bi/datagrip",permalink:"/docs/ecosystem/bi/datagrip",draft:!1,tags:[],version:"3.0",frontMatter:{title:"DataGrip",language:"en"},sidebar:"ecosystem",previous:{title:"DBeaver",permalink:"/docs/ecosystem/bi/dbeaver"},next:{title:"FineBI",permalink:"/docs/ecosystem/bi/finebi"}},c={},l=[{value:"introduce",id:"introduce",level:2},{value:"Preconditions",id:"preconditions",level:2},{value:"Add data source",id:"add-data-source",level:2},{value:"Function support",id:"function-support",level:2}],p={toc:l},d="wrapper";function g(e){let{components:t,...o}=e;return(0,r.yg)(d,(0,n.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduce"},"introduce"),(0,r.yg)("p",null,"DataGrip is a powerful cross-platform database tool for relational and NoSQL databases from JetBrains."),(0,r.yg)("p",null,"Apache Doris is highly compatible with the MySQL protocol. You can use DataGrip's MySQL data source to connect to Apache Doris and query data in the internal catalog and external catalog."),(0,r.yg)("h2",{id:"preconditions"},"Preconditions"),(0,r.yg)("p",null,"DataGrip installed\nYou can visit ",(0,r.yg)("a",{parentName:"p",href:"http://www.jetbrains.com/datagrip/"},"www.jetbrains.com/datagrip/")," to download and install DataGrip"),(0,r.yg)("h2",{id:"add-data-source"},"Add data source"),(0,r.yg)("admonition",{title:"Note",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Currently verified using DataGrip version 2023.3.4")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start DataGrip")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click the plus sign (",(0,r.yg)("strong",{parentName:"p"},"+"),") icon in the upper left corner of the DataGrip window and select the MySQL data source"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"add data source",src:a(560883).A,width:"1280",height:"850"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Configure Doris connection"),(0,r.yg)("p",{parentName:"li"},"On the General tab of the Data Sources and Drivers window, configure the following connection information:"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Host: FE host IP address of the Doris cluster.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Port: FE query port of Doris cluster, such as 9030.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Database: The target database in the Doris cluster.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"User: User name used to log in to the Doris cluster, such as admin.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Password: User password used to log in to the Doris cluster."),(0,r.yg)("admonition",{parentName:"li",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Database can be used to distinguish between internal catalog and external catalog. If only the Database name is filled in, the current data source will be connected to the internal catalog by default. If the format is catalog.db, the current data source will be connected to the catalog filled in Database by default, as shown in DataGrip The database table is also a database table in the connected catalog. In this way, you can use DataGrip's MySQL data source to create multiple Doris data sources to manage different Catalogs in Doris.")),(0,r.yg)("admonition",{parentName:"li",title:"Note",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Managing the external catalog connected to Doris through the Database form of catalog.db requires Doris version 2.1.0 and above."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"internal catalog"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"connect internal catalog",src:a(386392).A,width:"1280",height:"1081"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"external catalog"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"connect external catalog",src:a(871009).A,width:"1280",height:"1081"})))),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Test data source connection"),(0,r.yg)("p",{parentName:"li"}," After filling in the connection information, click Test Connection in the lower left corner to verify the accuracy of the database connection information. If DBeaver returns the following pop-up window, the test connection is successful. Then click OK in the lower right corner to complete the connection configuration."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"test connection",src:a(518542).A,width:"1280",height:"1081"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Connect to database"),(0,r.yg)("p",{parentName:"li"}," After the database connection is established, you can see the created data source connection in the database connection navigation on the left, and you can connect and manage the database through DataGrip."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"create connection",src:a(177911).A,width:"1280",height:"850"})))),(0,r.yg)("h2",{id:"function-support"},"Function support"),(0,r.yg)("p",null,"Basically supports most visual viewing operations, as well as SQL console writing SQL operations Doris does not support or has not been verified various operations such as creating database tables, schema changes, and adding, deleting, and modifying data."))}g.isMDXComponent=!0},560883:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/datagrip1-f19b9e109f1c1eac95c64c5bcc212d13.png"},386392:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/datagrip2-f3ff2e8b80db98c58649088293cd77b5.png"},871009:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/datagrip3-e58d5f50d57af98ecbc959e1879e11b5.png"},518542:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/datagrip4-d396b9987726e0ad47636f4f629a148a.png"},177911:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/datagrip5-7414328ecc98a654c737cd21134d5e60.png"}}]);