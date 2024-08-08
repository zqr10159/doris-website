"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[222795],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=m(n),d=r,g=y["".concat(s,".").concat(d)]||y[d]||c[d]||l;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[y]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},578282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(58168),r=(n(296540),n(15680));const l={title:"SHOW-ANALYZE",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-ANALYZE",id:"version-3.0/sql-manual/sql-statements/Show-Statements/SHOW-ANALYZE",title:"SHOW-ANALYZE",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Show-Statements/SHOW-ANALYZE.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-ANALYZE",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-ANALYZE",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SHOW-ANALYZE",language:"en"},sidebar:"docs",previous:{title:"SHOW-ALTER",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-ALTER"},next:{title:"SHOW-BACKUP",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-BACKUP"}},s={},m=[{value:"SHOW-ANALYZE",id:"show-analyze",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Keywords",id:"keywords",level:3}],p={toc:m},y="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-analyze"},"SHOW-ANALYZE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW ANALYZE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW ANALYZE")," to view information about statistics collection jobs."),(0,r.yg)("p",null,"Syntax:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},'SHOW [AUTO] ANALYZE < table_name | job_id >\n    [ WHERE [ STATE = [ "PENDING" | "RUNNING" | "FINISHED" | "FAILED" ] ] ];\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"AUTO: Show historical information for automatic collection jobs only. Note that, by default, the status of only the last 20,000 completed automatic collection jobs is retained."),(0,r.yg)("li",{parentName:"ul"},"table_name: Table name, specify to view statistics job information for that table. It can be in the format ",(0,r.yg)("inlineCode",{parentName:"li"},"db_name.table_name"),". When not specified, it returns information for all statistics jobs."),(0,r.yg)("li",{parentName:"ul"},"job_id: Job ID for statistics collection, obtained when executing ",(0,r.yg)("inlineCode",{parentName:"li"},"ANALYZE"),". When not specified, this command returns information for all statistics jobs.")),(0,r.yg)("p",null,"Output:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Column Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"job_id")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Job ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"catalog_name")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Catalog Name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"db_name")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Database Name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"tbl_name")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Table Name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"col_name")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Column Name List")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"job_type")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Job Type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"analysis_type")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Analysis Type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"message")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Job Information")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"last_exec_time_in_ms")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Last Execution Time")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"state")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Job Status")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"schedule_type")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Scheduling Method")))),(0,r.yg)("p",null,"Here's an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show analyze 245073\\G;\n*************************** 1. row ***************************\n              job_id: 245073\n        catalog_name: internal\n             db_name: default_cluster:tpch\n            tbl_name: lineitem\n            col_name: [l_returnflag,l_receiptdate,l_tax,l_shipmode,l_suppkey,l_shipdate,l_commitdate,l_partkey,l_orderkey,l_quantity,l_linestatus,l_comment,l_extendedprice,l_linenumber,l_discount,l_shipinstruct]\n            job_type: MANUAL\n       analysis_type: FUNDAMENTALS\n             message: \nlast_exec_time_in_ms: 2023-11-07 11:00:52\n               state: FINISHED\n            progress: 16 Finished  |  0 Failed  |  0 In Progress  |  16 Total\n       schedule_type: ONCE\n")),(0,r.yg)("br",null),(0,r.yg)("p",null,"Each collection job can contain one or more tasks, with each task corresponding to the collection of a column. Users can use the following command to view the completion status of statistics collection for each column."),(0,r.yg)("p",null,"Syntax:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ANALYZE TASK STATUS [job_id]\n")),(0,r.yg)("p",null,"Here's an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> show analyze task status 20038 ;\n+---------+----------+---------+----------------------+----------+\n| task_id | col_name | message | last_exec_time_in_ms | state    |\n+---------+----------+---------+----------------------+----------+\n| 20039   | col4     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20040   | col2     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20041   | col3     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20042   | col1     |         | 2023-06-01 17:22:15  | FINISHED |\n+---------+----------+---------+----------------------+----------+\n")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("p",null,"SHOW, ANALYZE"))}c.isMDXComponent=!0}}]);