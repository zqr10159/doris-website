"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[811714],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>u});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),y=d(a),m=r,u=y["".concat(p,".").concat(m)]||y[m]||s[m]||l;return a?n.createElement(u,i(i({ref:t},g),{},{components:a})):n.createElement(u,i({ref:t},g))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},589634:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(58168),r=(a(296540),a(15680));const l={title:"IBM Db2",language:"en"},i=void 0,o={unversionedId:"lakehouse/database/ibm-db2",id:"version-3.0/lakehouse/database/ibm-db2",title:"IBM Db2",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/lakehouse/database/ibm-db2.md",sourceDirName:"lakehouse/database",slug:"/lakehouse/database/ibm-db2",permalink:"/docs/lakehouse/database/ibm-db2",draft:!1,tags:[],version:"3.0",frontMatter:{title:"IBM Db2",language:"en"},sidebar:"docs",previous:{title:"SQL Server",permalink:"/docs/lakehouse/database/sqlserver"},next:{title:"ClickHouse",permalink:"/docs/lakehouse/database/clickhouse"}},p={},d=[{value:"Terms and Conditions",id:"terms-and-conditions",level:2},{value:"Connect to IBM Db2",id:"connect-to-ibm-db2",level:2},{value:"Hierarchical mapping",id:"hierarchical-mapping",level:2},{value:"Type mapping",id:"type-mapping",level:2},{value:"IBM Db2 to Doris type mapping",id:"ibm-db2-to-doris-type-mapping",level:3},{value:"Query optimization",id:"query-optimization",level:2},{value:"Statistics",id:"statistics",level:3},{value:"Predicate pushdown",id:"predicate-pushdown",level:3},{value:"Row limit",id:"row-limit",level:3},{value:"Escape characters",id:"escape-characters",level:3},{value:"FAQ",id:"faq",level:2}],g={toc:d},y="wrapper";function s(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Doris JDBC Catalog supports connecting to IBM Db2 databases through the standard JDBC interface. This document describes how to configure an IBM Db2 database connection."),(0,r.yg)("h2",{id:"terms-and-conditions"},"Terms and Conditions"),(0,r.yg)("p",null,"To connect to an IBM Db2 database, you need"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"IBM Db2 11.5.x or higher")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JDBC driver for IBM Db2 database, you can download the latest or specified version of IBM Db2 driver from ",(0,r.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.ibm.db2/jcc"},"Maven repository"),". ",(0,r.yg)("strong",{parentName:"p"},"It is recommended to use IBM db2 jcc version 11.5.8.0"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Doris Network connection between each FE and BE node and the IBM Db2 server, default port is 51000."))),(0,r.yg)("h2",{id:"connect-to-ibm-db2"},"Connect to IBM Db2"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG db2 PROPERTIES (\n    "type"="jdbc",\n    "user"="USERNAME",\n    "password"="PASSWORD",\n    "jdbc_url" = "jdbc:db2://host:port/database",\n    "driver_url" = "jcc-11.5.8.0.jar",\n    "driver_class" = "com.ibm.db2.jcc.DB2Driver"\n)\n')),(0,r.yg)("admonition",{title:"remarks",type:"info"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_url")," defines the connection information and parameters to be passed to the IBM Db2 driver.\nThe parameters for the supported URLs can be found in the ",(0,r.yg)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/db2-big-sql/5.0?topic=drivers-jdbc-driver"},"Db2 JDBC Driver Documentation"),".")),(0,r.yg)("h2",{id:"hierarchical-mapping"},"Hierarchical mapping"),(0,r.yg)("p",null,'When mapping IBM Db2, Doris\' Database corresponds to a Schema under the specified DataBase ("database" in the ',(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_url")," parameter) in DB2. The Table under Doris' Database corresponds to the Tables under Schema in DB2. That is, the mapping relationship is as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Doris"),(0,r.yg)("th",{parentName:"tr",align:"center"},"IBM Db2"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Catalog"),(0,r.yg)("td",{parentName:"tr",align:"center"},"DataBase")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Database"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Schema")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Table"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Table")))),(0,r.yg)("h2",{id:"type-mapping"},"Type mapping"),(0,r.yg)("h3",{id:"ibm-db2-to-doris-type-mapping"},"IBM Db2 to Doris type mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"IBM Db2 Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE PRECISION"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"REAL"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NUMERIC"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECFLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR VARYING"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LONG VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARGRAPHIC"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LONG VARGRAPHIC"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CLOB"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"XML"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"OTHER"),(0,r.yg)("td",{parentName:"tr",align:null},"UNSUPPORTED"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"query-optimization"},"Query optimization"),(0,r.yg)("h3",{id:"statistics"},"Statistics"),(0,r.yg)("p",null,"Doris maintains table statistics in the Catalog so that it can better optimize query plans when executing queries."),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"../external-statistics"},"external-statistics")," to learn how to collect statistics."),(0,r.yg)("h3",{id:"predicate-pushdown"},"Predicate pushdown"),(0,r.yg)("p",null,"When executing a query like ",(0,r.yg)("inlineCode",{parentName:"p"},"where dt = '2022-01-01'"),", Doris can push these filtering conditions down to the external data source, thereby directly excluding data that does not meet the conditions at the data source level, reducing inaccuracies. Necessary data acquisition and transmission. This greatly improves query performance while also reducing the load on external data sources."),(0,r.yg)("h3",{id:"row-limit"},"Row limit"),(0,r.yg)("p",null,"If you include the limit keyword in the query, Doris will push the limit down to the IBM Db2 database to reduce the amount of data transfer."),(0,r.yg)("h3",{id:"escape-characters"},"Escape characters"),(0,r.yg)("p",null,'Doris will automatically add the escape character ("") to the field names and table names in the query statements sent to IBM Db2 to prevent field names and table names from conflicting with IBM Db2 internal keywords.'),(0,r.yg)("h2",{id:"faq"},"FAQ"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"Invalid operation: result set is closed. ERRORCODE=-4470")," exception occurs when reading IBM Db2 data through JDBC Catalog"),(0,r.yg)("p",{parentName:"li"},"Add connection parameters in the jdbc_url connection string when creating the IBM Db2 Catalog: ",(0,r.yg)("inlineCode",{parentName:"p"},"allowNextOnExhaustedResultSet=1;resultSetHoldability=1"),". like:\n",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc:db2://host:port/database:allowNextOnExhaustedResultSet=1;resultSetHoldability=1"),"."))))}s.isMDXComponent=!0}}]);