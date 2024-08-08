"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[604547],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(296540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,y=d["".concat(l,".").concat(m)]||d[m]||g[m]||i;return a?n.createElement(y,r(r({ref:t},p),{},{components:a})):n.createElement(y,r({ref:t},p))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},447418:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(58168),o=(a(296540),a(15680));const i={title:"Power BI",language:"en"},r=void 0,s={unversionedId:"ecosystem/bi/powerbi",id:"version-2.1/ecosystem/bi/powerbi",title:"Power BI",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/ecosystem/bi/powerbi.md",sourceDirName:"ecosystem/bi",slug:"/ecosystem/bi/powerbi",permalink:"/docs/2.1/ecosystem/bi/powerbi",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Power BI",language:"en"},sidebar:"ecosystem",previous:{title:"FineBI",permalink:"/docs/2.1/ecosystem/bi/finebi"},next:{title:"Tableau",permalink:"/docs/2.1/ecosystem/bi/tableau"}},l={},c=[{value:"Power BI Introduction",id:"power-bi-introduction",level:2},{value:"Precondition",id:"precondition",level:2},{value:"Connector configuration of Power BI and Doris",id:"connector-configuration-of-power-bi-and-doris",level:2},{value:"Load data locally and create models",id:"load-data-locally-and-create-models",level:2},{value:"Set  data refresh automatic",id:"set--data-refresh-automatic",level:2}],p={toc:c},d="wrapper";function g(e){let{components:t,...i}=e;return(0,o.yg)(d,(0,n.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"power-bi-introduction"},"Power BI Introduction"),(0,o.yg)("p",null,"Power BI is a collection of software services and application connectors that can connect to multiple data sources, including Excel, SQL Server, Azure, Google Analytics, etc., so that users can easily consolidate and clean their data. With Power BI's data modeling, users can create relational models, data analysis expressions, and data relationships to support advanced data analysis and visualization. Power BI offers a wealth of visualization options, including ICONS, maps, dashboards, and custom visualization tools to help users make a more intuitive sense of data."),(0,o.yg)("p",null,"Apache Doris is highly compatible with MySQL protocol and can be connected to Power BI and Apache Doris through MySQL Driver. At present, internal data modeling, data query and visualization processing of Apache Doris have been officially supported in Power BI."),(0,o.yg)("h2",{id:"precondition"},"Precondition"),(0,o.yg)("p",null,"If you do not have Power BI desktop installed, you can download it from ",(0,o.yg)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/power-platform/products/power-bi/desktop"},"https://www.microsoft.com/en-us/power-platform/products/power-bi/desktop")),(0,o.yg)("h2",{id:"connector-configuration-of-power-bi-and-doris"},"Connector configuration of Power BI and Doris"),(0,o.yg)("admonition",{title:"Note",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Currently verified using MySQL JDBC Connector version 8.0.26")),(0,o.yg)("p",null,"Download and installation MySQL Connector\nDownload link: ",(0,o.yg)("a",{parentName:"p",href:"https://downloads.mysql.com/archives/c-net/"},"https://downloads.mysql.com/archives/c-net/"),". Select version 8.0.26. There are incompatibilities in higher versions"),(0,o.yg)("h2",{id:"load-data-locally-and-create-models"},"Load data locally and create models"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Start the Power BI Desktop")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Open the Power BI Desktop screen and click Create Report. If a local report exists, you can open it."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"start page",src:a(696258).A,width:"1280",height:"763"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Click get data. In the dialog box that is displayed, select MySQL database."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"get data",src:a(917387).A,width:"1280",height:"763"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Configure the database connection information and enter ip:port in the server text box. The default port number for Doris is 9030."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"connection information",src:a(871476).A,width:"1052",height:"407"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},'Click OK in the previous step and select "Database" in the new connection window to connect, and fill in the connection information of Doris in the username and password.'),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"uname and pwd",src:a(92605).A,width:"1052",height:"570"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Load the selected table to the Power BI Desktop"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"load data",src:a(51366).A,width:"1280",height:"1018"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Configure statistical compass"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"create compass",src:a(90383).A,width:"1280",height:"763"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Save statistical compass to location"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"save file",src:a(322904).A,width:"737",height:"700"})))),(0,o.yg)("h2",{id:"set--data-refresh-automatic"},"Set  data refresh automatic"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Download the On-premises data gateway. Download address: ",(0,o.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-personal-mode"},"https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-personal-mode"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Install the On-premises data gateway"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"gateway install",src:a(807521).A,width:"1276",height:"1014"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Log into Power BI Online and import the local model in your workspace"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"upload",src:a(589790).A,width:"1541",height:"725"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Click the model to set the automatic refresh time"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"click module",src:a(978612).A,width:"1122",height:"398"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The data refresh configuration requires a gataway connection. After the gateway is enabled locally, you can see the  started gateway in the gateway connection locally. Select the local gateway. "),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"config gateway",src:a(901071).A,width:"1280",height:"786"}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Configure the refresh schedule to complete the automatic data refresh on Power BI"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{alt:"make plan",src:a(132326).A,width:"1158",height:"798"})))))}g.isMDXComponent=!0},589790:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-powerbi-en-10-zh-a1ef99b2fcfe2feb09e87526ac05ebf6.png"},978612:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-powerbi-en-11-66817d3fa638a3e9ee8b1933dc690925.png"},901071:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-powerbi-en-12-e23359c2f0f15b34b1b02601e7e9703b.png"},132326:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-powerbi-en-13-7a9ee1867ef8cc24d8e1035fc9104c90.png"},696258:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-powerbi-en-2-86c8a6187c67094641645e6f712fcc3e.png"},917387:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-powerbi-en-3-2705e2048068e169882943869d7fb11b.png"},871476:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-powerbi-en-4-ef0c87418aa69b09874142731e4d9688.png"},92605:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-powerbi-en-5-97bf4c9350d57af2038a67a38df112ca.png"},51366:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-powerbi-en-6-6ccb436b829901ecca22fce07a779cc6.png"},90383:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-powerbi-en-7-5a9a7db0cf93e720dcca9dbc858c9f8d.png"},322904:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-powerbi-en-8-2aa802d0739d20c506a6e0cfcbe557dc.png"},807521:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-powerbi-en-9-c6e95be459cdb3200e08eb92a78746d1.png"}}]);