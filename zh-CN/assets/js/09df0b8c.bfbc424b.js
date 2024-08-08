"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[374773],{15680:(e,t,r)=>{r.d(t,{xA:()=>y,yg:()=>u});var a=r(296540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),o=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},y=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,y=g(e,["components","mdxType","originalType","parentName"]),d=o(r),m=n,u=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return r?a.createElement(u,i(i({ref:t},y),{},{components:r})):a.createElement(u,i({ref:t},y))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[d]="string"==typeof e?e:n,i[1]=g;for(var o=2;o<l;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},634197:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>g,toc:()=>o});var a=r(58168),n=(r(296540),r(15680));const l={title:"SQL Server",language:"zh-CN"},i=void 0,g={unversionedId:"lakehouse/database/sqlserver",id:"version-2.1/lakehouse/database/sqlserver",title:"SQL Server",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/lakehouse/database/sqlserver.md",sourceDirName:"lakehouse/database",slug:"/lakehouse/database/sqlserver",permalink:"/zh-CN/docs/2.1/lakehouse/database/sqlserver",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SQL Server",language:"zh-CN"},sidebar:"docs",previous:{title:"Oracle",permalink:"/zh-CN/docs/2.1/lakehouse/database/oracle"},next:{title:"IBM Db2",permalink:"/zh-CN/docs/2.1/lakehouse/database/ibm-db2"}},p={},o=[{value:"\u4f7f\u7528\u987b\u77e5",id:"\u4f7f\u7528\u987b\u77e5",level:2},{value:"\u8fde\u63a5 SQL Server",id:"\u8fde\u63a5-sql-server",level:2},{value:"\u8fde\u63a5\u5b89\u5168",id:"\u8fde\u63a5\u5b89\u5168",level:3},{value:"\u5c42\u7ea7\u6620\u5c04",id:"\u5c42\u7ea7\u6620\u5c04",level:2},{value:"\u7c7b\u578b\u6620\u5c04",id:"\u7c7b\u578b\u6620\u5c04",level:2},{value:"SQL Server \u5230 Doris \u7c7b\u578b\u6620\u5c04",id:"sql-server-\u5230-doris-\u7c7b\u578b\u6620\u5c04",level:3},{value:"\u67e5\u8be2\u4f18\u5316",id:"\u67e5\u8be2\u4f18\u5316",level:2},{value:"\u7edf\u8ba1\u4fe1\u606f",id:"\u7edf\u8ba1\u4fe1\u606f",level:3},{value:"\u8c13\u8bcd\u4e0b\u63a8",id:"\u8c13\u8bcd\u4e0b\u63a8",level:3},{value:"\u884c\u6570\u9650\u5236",id:"\u884c\u6570\u9650\u5236",level:3},{value:"\u8f6c\u4e49\u5b57\u7b26",id:"\u8f6c\u4e49\u5b57\u7b26",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],y={toc:o},d="wrapper";function s(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,a.A)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Doris JDBC Catalog \u652f\u6301\u901a\u8fc7\u6807\u51c6 JDBC \u63a5\u53e3\u8fde\u63a5 SQL Server \u6570\u636e\u5e93\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e SQL Server \u6570\u636e\u5e93\u8fde\u63a5\u3002"),(0,n.yg)("h2",{id:"\u4f7f\u7528\u987b\u77e5"},"\u4f7f\u7528\u987b\u77e5"),(0,n.yg)("p",null,"\u8981\u8fde\u63a5\u5230 SQL Server \u6570\u636e\u5e93\uff0c\u60a8\u9700\u8981"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"SQL Server 2012 \u6216\u66f4\u9ad8\u7248\u672c\uff0c\u6216 Azure SQL \u6570\u636e\u5e93\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"SQL Server \u6570\u636e\u5e93\u7684 JDBC \u9a71\u52a8\u7a0b\u5e8f\uff0c\u60a8\u53ef\u4ee5\u4ece ",(0,n.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"},"Maven \u4ed3\u5e93"),"\u4e0b\u8f7d\u6700\u65b0\u6216\u6307\u5b9a\u7248\u672c\u7684 SQL Server JDBC \u9a71\u52a8\u7a0b\u5e8f\u3002",(0,n.yg)("strong",{parentName:"p"},"\u63a8\u8350\u4f7f\u7528 SQL Server JDBC Driver 11.2.x \u53ca\u4ee5\u4e0a\u7248\u672c\u3002"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Doris \u6bcf\u4e2a FE \u548c BE \u8282\u70b9\u548c SQL Server \u670d\u52a1\u5668\u4e4b\u95f4\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u9ed8\u8ba4\u7aef\u53e3\u4e3a 1433\u3002"))),(0,n.yg)("h2",{id:"\u8fde\u63a5-sql-server"},"\u8fde\u63a5 SQL Server"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG sqlserver PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="secret",\n    "jdbc_url" = "jdbc:sqlserver://<host>:<port>;databaseName=<databaseName>;encrypt=false",\n    "driver_url" = "mssql-jdbc-11.2.3.jre8.jar",\n    "driver_class" = "com.microsoft.sqlserver.jdbc.SQLServerDriver"\n)\n')),(0,n.yg)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("inlineCode",{parentName:"p"},"jdbc_url")," \u5b9a\u4e49\u8981\u4f20\u9012\u7ed9 SQL Server JDBC \u9a71\u52a8\u7a0b\u5e8f\u7684\u8fde\u63a5\u4fe1\u606f\u548c\u53c2\u6570\u3002 ",(0,n.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/zh-cn/sql/connect/jdbc/building-the-connection-url?view=sql-server-ver16"},"SQL Server JDBC \u9a71\u52a8\u7a0b\u5e8f\u6587\u6863"),"\u4e2d\u63d0\u4f9b\u4e86 URL \u652f\u6301\u7684\u53c2\u6570\u3002")),(0,n.yg)("h3",{id:"\u8fde\u63a5\u5b89\u5168"},"\u8fde\u63a5\u5b89\u5168"),(0,n.yg)("p",null,"JDBC \u9a71\u52a8\u7a0b\u5e8f\u4ee5\u53ca\u8fde\u63a5\u5668\u81ea\u52a8\u4f7f\u7528\u4f20\u8f93\u5c42\u5b89\u5168\u6027 (TLS) \u52a0\u5bc6\u548c\u8bc1\u4e66\u9a8c\u8bc1\u3002\u8fd9\u9700\u8981\u5728 SQL Server \u6570\u636e\u5e93\u4e3b\u673a\u4e0a\u914d\u7f6e\u5408\u9002\u7684 TLS \u8bc1\u4e66\u3002"),(0,n.yg)("p",null,"\u5982\u679c\u60a8\u6ca1\u6709\u5efa\u7acb\u5fc5\u8981\u7684\u914d\u7f6e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 encrypt \u5c5e\u6027\u7981\u7528\u8fde\u63a5\u5b57\u7b26\u4e32\u4e2d\u7684\u52a0\u5bc6\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'"jdbc_url"="jdbc:sqlserver://<host>:<port>;databaseName=<databaseName>;encrypt=false"\n')),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/zh-cn/sql/connect/jdbc/using-ssl-encryption?view=sql-server-ver16"},"SQL Server JDBC \u9a71\u52a8\u7a0b\u5e8f\u6587\u6863\u7684 TLS \u90e8\u5206"),"\u8be6\u7ec6\u4ecb\u7ecd\u4e86 trustServerCertificate\u3001hostNameInCertificate\u3001trustStore \u548c trustStorePassword \u7b49\u5176\u4ed6\u53c2\u6570\u3002"),(0,n.yg)("h2",{id:"\u5c42\u7ea7\u6620\u5c04"},"\u5c42\u7ea7\u6620\u5c04"),(0,n.yg)("p",null,"\u6620\u5c04 SQLServer \u65f6\uff0cDoris \u7684\u4e00\u4e2a Database \u5bf9\u5e94\u4e8e SQL Server \u4e2d\u6307\u5b9a Database\uff08",(0,n.yg)("inlineCode",{parentName:"p"},"jdbc_url")," \u53c2\u6570\u4e2d\u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"<databaseName>"),"\uff09\u4e0b\u7684\u4e00\u4e2a Schema\u3002\u800c Doris \u7684 Database \u4e0b\u7684 Table \u5219\u5bf9\u5e94\u4e8e SQLServer \u4e2d\uff0cSchema \u4e0b\u7684 Tables\u3002\u5373\u6620\u5c04\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"center"},"Doris"),(0,n.yg)("th",{parentName:"tr",align:"center"},"SQLServer"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Catalog"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Database")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Database"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Schema")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Table"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Table")))),(0,n.yg)("h2",{id:"\u7c7b\u578b\u6620\u5c04"},"\u7c7b\u578b\u6620\u5c04"),(0,n.yg)("h3",{id:"sql-server-\u5230-doris-\u7c7b\u578b\u6620\u5c04"},"SQL Server \u5230 Doris \u7c7b\u578b\u6620\u5c04"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"SQL Server Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"bit"),(0,n.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,n.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,n.yg)("td",{parentName:"tr",align:null},"SQLServer \u7684 tinyint \u662f\u65e0\u7b26\u53f7\u6570\uff0c\u6240\u4ee5\u6620\u5c04\u4e3a Doris \u7684 SMALLINT")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"smallint"),(0,n.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"int"),(0,n.yg)("td",{parentName:"tr",align:null},"INT"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"bigint"),(0,n.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"real"),(0,n.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"float"),(0,n.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"money"),(0,n.yg)("td",{parentName:"tr",align:null},"DECIMAL(19,4)"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"smallmoney"),(0,n.yg)("td",{parentName:"tr",align:null},"DECIMAL(10,4)"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"decimal/numeric"),(0,n.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"date"),(0,n.yg)("td",{parentName:"tr",align:null},"DATE"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"datetime/datetime2/smalldatetime"),(0,n.yg)("td",{parentName:"tr",align:null},"DATETIMEV2"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"char/varchar/text/nchar/nvarchar/ntext"),(0,n.yg)("td",{parentName:"tr",align:null},"STRING"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"time/datetimeoffset"),(0,n.yg)("td",{parentName:"tr",align:null},"STRING"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"timestamp"),(0,n.yg)("td",{parentName:"tr",align:null},"STRING"),(0,n.yg)("td",{parentName:"tr",align:null},"\u8bfb\u53d6\u4e8c\u8fdb\u5236\u6570\u636e\u7684\u5341\u516d\u8fdb\u5236\u663e\u793a\uff0c\u65e0\u5b9e\u9645\u610f\u4e49")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Other"),(0,n.yg)("td",{parentName:"tr",align:null},"UNSUPPORTED"),(0,n.yg)("td",{parentName:"tr",align:null})))),(0,n.yg)("h2",{id:"\u67e5\u8be2\u4f18\u5316"},"\u67e5\u8be2\u4f18\u5316"),(0,n.yg)("h3",{id:"\u7edf\u8ba1\u4fe1\u606f"},"\u7edf\u8ba1\u4fe1\u606f"),(0,n.yg)("p",null,"Doris \u4f1a\u5728 Catalog \u4e2d\u7ef4\u62a4\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u4ee5\u4fbf\u5728\u6267\u884c\u67e5\u8be2\u65f6\u80fd\u591f\u66f4\u597d\u5730\u4f18\u5316\u67e5\u8be2\u8ba1\u5212\u3002"),(0,n.yg)("p",null,"\u53ef\u4ee5\u67e5\u770b ",(0,n.yg)("a",{parentName:"p",href:"../external-statistics"},"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f")," \u4e86\u89e3\u5982\u4f55\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,n.yg)("h3",{id:"\u8c13\u8bcd\u4e0b\u63a8"},"\u8c13\u8bcd\u4e0b\u63a8"),(0,n.yg)("p",null,"\u5f53\u6267\u884c\u7c7b\u4f3c\u4e8e ",(0,n.yg)("inlineCode",{parentName:"p"},"where dt = '2022-01-01'")," \u8fd9\u6837\u7684\u67e5\u8be2\u65f6\uff0cDoris \u80fd\u591f\u5c06\u8fd9\u4e9b\u8fc7\u6ee4\u6761\u4ef6\u4e0b\u63a8\u5230\u5916\u90e8\u6570\u636e\u6e90\uff0c\u4ece\u800c\u76f4\u63a5\u5728\u6570\u636e\u6e90\u5c42\u9762\u6392\u9664\u4e0d\u7b26\u5408\u6761\u4ef6\u7684\u6570\u636e\uff0c\u51cf\u5c11\u4e86\u4e0d\u5fc5\u8981\u7684\u6570\u636e\u83b7\u53d6\u548c\u4f20\u8f93\u3002\u8fd9\u5927\u5927\u63d0\u9ad8\u4e86\u67e5\u8be2\u6027\u80fd\uff0c\u540c\u65f6\u4e5f\u964d\u4f4e\u4e86\u5bf9\u5916\u90e8\u6570\u636e\u6e90\u7684\u8d1f\u8f7d\u3002"),(0,n.yg)("h3",{id:"\u884c\u6570\u9650\u5236"},"\u884c\u6570\u9650\u5236"),(0,n.yg)("p",null,"\u5982\u679c\u5728\u67e5\u8be2\u4e2d\u5e26\u6709 limit \u5173\u952e\u5b57\uff0cDoris \u4f1a\u5c06 limit \u8f6c\u4e49\u4e3a SQL Server \u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"TOP")," \u8bed\u6cd5\uff0c\u4ee5\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u91cf\u3002"),(0,n.yg)("h3",{id:"\u8f6c\u4e49\u5b57\u7b26"},"\u8f6c\u4e49\u5b57\u7b26"),(0,n.yg)("p",null,"Doris \u4f1a\u5728\u4e0b\u53d1\u5230 SQL Server \u7684\u67e5\u8be2\u8bed\u53e5\u4e2d\uff0c\u81ea\u52a8\u5728\u5b57\u6bb5\u540d\u4e0e\u8868\u540d\u4e0a\u52a0\u4e0a\u8f6c\u4e49\u7b26\uff1a([])\uff0c\u4ee5\u907f\u514d\u5b57\u6bb5\u540d\u4e0e\u8868\u540d\u4e0e SQL Server \u5185\u90e8\u5173\u952e\u5b57\u51b2\u7a81\u3002"),(0,n.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u8bfb\u53d6 SQLServer \u51fa\u73b0\u901a\u4fe1\u94fe\u8def\u5f02\u5e38"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'ERROR 1105 (HY000): errCode = 2, detailMessage = (10.16.10.6)[CANCELLED][INTERNAL_ERROR]UdfRuntimeException: Initialize datasource failed:\nCAUSED BY: SQLServerException: The driver could not establish a secure connection to SQL Server by using Secure Sockets Layer (SSL) encryption.\nError: "sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException:\nunable to find valid certification path to requested target". ClientConnectionId:a92f3817-e8e6-4311-bc21-7c66\n')),(0,n.yg)("p",{parentName:"li"},"\u53ef\u5728\u521b\u5efa Catalog \u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"jdbc_url")," \u628aJDBC\u8fde\u63a5\u4e32\u6700\u540e\u589e\u52a0 ",(0,n.yg)("inlineCode",{parentName:"p"},"encrypt=false")," \uff0c\u5982 ",(0,n.yg)("inlineCode",{parentName:"p"},'"jdbc_url" = "jdbc:sqlserver://127.0.0.1:1433;DataBaseName=doris_test;encrypt=false"')))))}s.isMDXComponent=!0}}]);