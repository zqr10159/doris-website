"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[601707],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var n=a(296540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),N=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=N(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=N(a),y=l,g=m["".concat(o,".").concat(y)]||m[y]||p[y]||s;return a?n.createElement(g,r(r({ref:t},u),{},{components:a})):n.createElement(g,r({ref:t},u))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,r=new Array(s);r[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:l,r[1]=i;for(var N=2;N<s;N++)r[N]=a[N];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},49410:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>N});var n=a(58168),l=(a(296540),a(15680));const s={title:"TASKS",language:"zh-CN"},r=void 0,i={unversionedId:"sql-manual/sql-functions/table-functions/tasks",id:"version-2.1/sql-manual/sql-functions/table-functions/tasks",title:"TASKS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/table-functions/tasks.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/tasks",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/table-functions/tasks",draft:!1,tags:[],version:"2.1",frontMatter:{title:"TASKS",language:"zh-CN"},sidebar:"docs",previous:{title:"MV_INFOS",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/table-functions/mv_infos"},next:{title:"QUERY",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/table-functions/query"}},o={},N=[{value:"<code>tasks</code>",id:"tasks",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"Insert tasks",id:"insert-tasks",level:5},{value:"MV tasks",id:"mv-tasks",level:5},{value:"example",id:"example",level:3},{value:"Insert Tasks",id:"insert-tasks-1",level:4},{value:"MV Tasks",id:"mv-tasks-1",level:4},{value:"keywords",id:"keywords",level:3}],u={toc:N},m="wrapper";function p(e){let{components:t,...a}=e;return(0,l.yg)(m,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"tasks"},(0,l.yg)("inlineCode",{parentName:"h2"},"tasks")),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("version",{since:"dev"},(0,l.yg)("p",null,"tasks")),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("p",null,"\u8868\u51fd\u6570\uff0c\u751f\u6210 tasks \u4e34\u65f6\u8868\uff0c\u53ef\u4ee5\u67e5\u770b\u5f53\u524d doris \u96c6\u7fa4\u4e2d\u7684 job \u4ea7\u751f\u7684 tasks \u4fe1\u606f\u3002"),(0,l.yg)("p",null,"\u8be5\u51fd\u6570\u7528\u4e8e from \u5b50\u53e5\u4e2d\u3002"),(0,l.yg)("h4",{id:"syntax"},"syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},'tasks("type"="insert");'),"\n",(0,l.yg)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,l.yg)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"type"),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u4f5c\u4e1a\u7c7b\u578b"),(0,l.yg)("td",{parentName:"tr",align:"left"},"string"),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u662f")))),(0,l.yg)("p",null,"type \u652f\u6301\u7684\u7c7b\u578b\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"insert\uff1ainsert into \u7c7b\u578b\u7684\u4efb\u52a1\u3002"),(0,l.yg)("li",{parentName:"ul"},"mv: mv \u7c7b\u578b\u7684\u4efb\u52a1")),(0,l.yg)("h5",{id:"insert-tasks"},"Insert tasks"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},'tasks("type"="insert");'),"\u8868\u7ed3\u6784\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'mysql> desc  function tasks("type"="insert");;\n+---------------+------+------+-------+---------+-------+\n| Field         | Type | Null | Key   | Default | Extra |\n+---------------+------+------+-------+---------+-------+\n| TaskId        | TEXT | No   | false | NULL    | NONE  |\n| JobId         | TEXT | No   | false | NULL    | NONE  |\n| JobName       | TEXT | No   | false | NULL    | NONE  |\n| Label         | TEXT | No   | false | NULL    | NONE  |\n| Status        | TEXT | No   | false | NULL    | NONE  |\n| ErrorMsg      | TEXT | No   | false | NULL    | NONE  |\n| CreateTime    | TEXT | No   | false | NULL    | NONE  |\n| FinishTime    | TEXT | No   | false | NULL    | NONE  |\n| TrackingUrl   | TEXT | No   | false | NULL    | NONE  |\n| LoadStatistic | TEXT | No   | false | NULL    | NONE  |\n| User          | TEXT | No   | false | NULL    | NONE  |\n+---------------+------+------+-------+---------+-------+\n11 row in set (0.01 sec)\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"TaskId\uff1atask id"),(0,l.yg)("li",{parentName:"ul"},"JobId\uff1ajob id"),(0,l.yg)("li",{parentName:"ul"},"JobName\uff1ajob \u540d\u79f0"),(0,l.yg)("li",{parentName:"ul"},"Label\uff1alabel"),(0,l.yg)("li",{parentName:"ul"},"Status\uff1atask \u72b6\u6001"),(0,l.yg)("li",{parentName:"ul"},"ErrorMsg\uff1atask \u5931\u8d25\u4fe1\u606f"),(0,l.yg)("li",{parentName:"ul"},"CreateTime\uff1atask \u521b\u5efa\u65f6\u95f4"),(0,l.yg)("li",{parentName:"ul"},"FinishTime\uff1atask \u7ed3\u675f\u65f6\u95f4"),(0,l.yg)("li",{parentName:"ul"},"TrackingUrl\uff1atask tracking url"),(0,l.yg)("li",{parentName:"ul"},"LoadStatistic\uff1atask \u7edf\u8ba1\u4fe1\u606f"),(0,l.yg)("li",{parentName:"ul"},"User\uff1a\u6267\u884c\u7528\u6237")),(0,l.yg)("p",null,"JobName \u5728 2.1.4 \u7248\u672c\u4e2d\u65b0\u589e."),(0,l.yg)("h5",{id:"mv-tasks"},"MV tasks"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> desc function tasks("type"="mv");\n+-----------------------+------+------+-------+---------+-------+\n| Field                 | Type | Null | Key   | Default | Extra |\n+-----------------------+------+------+-------+---------+-------+\n| TaskId                | TEXT | No   | false | NULL    | NONE  |\n| JobId                 | TEXT | No   | false | NULL    | NONE  |\n| JobName               | TEXT | No   | false | NULL    | NONE  |\n| MvId                  | TEXT | No   | false | NULL    | NONE  |\n| MvName                | TEXT | No   | false | NULL    | NONE  |\n| MvDatabaseId          | TEXT | No   | false | NULL    | NONE  |\n| MvDatabaseName        | TEXT | No   | false | NULL    | NONE  |\n| Status                | TEXT | No   | false | NULL    | NONE  |\n| ErrorMsg              | TEXT | No   | false | NULL    | NONE  |\n| CreateTime            | TEXT | No   | false | NULL    | NONE  |\n| StartTime             | TEXT | No   | false | NULL    | NONE  |\n| FinishTime            | TEXT | No   | false | NULL    | NONE  |\n| DurationMs            | TEXT | No   | false | NULL    | NONE  |\n| TaskContext           | TEXT | No   | false | NULL    | NONE  |\n| RefreshMode           | TEXT | No   | false | NULL    | NONE  |\n| NeedRefreshPartitions | TEXT | No   | false | NULL    | NONE  |\n| CompletedPartitions   | TEXT | No   | false | NULL    | NONE  |\n| Progress              | TEXT | No   | false | NULL    | NONE  |\n+-----------------------+------+------+-------+---------+-------+\n18 rows in set (0.00 sec)\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"TaskId\uff1atask id"),(0,l.yg)("li",{parentName:"ul"},"JobId\uff1ajob id"),(0,l.yg)("li",{parentName:"ul"},"JobName\uff1ajob\u540d\u79f0"),(0,l.yg)("li",{parentName:"ul"},"MvId\uff1a\u7269\u5316\u89c6\u56feid"),(0,l.yg)("li",{parentName:"ul"},"MvName\uff1a\u7269\u5316\u89c6\u56fe\u540d\u79f0"),(0,l.yg)("li",{parentName:"ul"},"MvDatabaseId\uff1a\u7269\u5316\u89c6\u56fe\u6240\u5c5edb id"),(0,l.yg)("li",{parentName:"ul"},"MvDatabaseName\uff1a\u7269\u5316\u89c6\u56fe\u6240\u5c5edb\u540d\u79f0"),(0,l.yg)("li",{parentName:"ul"},"Status\uff1atask\u72b6\u6001"),(0,l.yg)("li",{parentName:"ul"},"ErrorMsg\uff1atask\u5931\u8d25\u4fe1\u606f"),(0,l.yg)("li",{parentName:"ul"},"CreateTime\uff1atask\u521b\u5efa\u65f6\u95f4"),(0,l.yg)("li",{parentName:"ul"},"StartTime\uff1atask\u5f00\u59cb\u8fd0\u884c\u65f6\u95f4"),(0,l.yg)("li",{parentName:"ul"},"FinishTime\uff1atask\u7ed3\u675f\u8fd0\u884c\u65f6\u95f4"),(0,l.yg)("li",{parentName:"ul"},"DurationMs\uff1atask\u8fd0\u884c\u65f6\u95f4"),(0,l.yg)("li",{parentName:"ul"},"TaskContext\uff1atask\u8fd0\u884c\u53c2\u6570"),(0,l.yg)("li",{parentName:"ul"},"RefreshMode\uff1a\u5237\u65b0\u6a21\u5f0f"),(0,l.yg)("li",{parentName:"ul"},"NeedRefreshPartitions\uff1a\u672c\u6b21task\u9700\u8981\u5237\u65b0\u7684\u5206\u533a\u4fe1\u606f"),(0,l.yg)("li",{parentName:"ul"},"CompletedPartitions\uff1a\u672c\u6b21task\u5237\u65b0\u5b8c\u6210\u7684\u5206\u533a\u4fe1\u606f"),(0,l.yg)("li",{parentName:"ul"},"Progress\uff1atask\u8fd0\u884c\u8fdb\u5ea6")),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("h4",{id:"insert-tasks-1"},"Insert Tasks"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'mysql>  select * from tasks("type"="insert") limit 1 \\G\n*************************** 1. row ***************************\n       TaskId: 667704038678903\n        JobId: 10069\n        Label: 10069_667704038678903\n       Status: FINISHED\n      EtlInfo: \\N\n     TaskInfo: cluster:N/A; timeout(s):14400; max_filter_ratio:0.0; priority:NORMAL\n     ErrorMsg: \\N\n CreateTimeMs: 2023-12-08 16:46:57\n FinishTimeMs: 2023-12-08 16:46:57\n  TrackingUrl: \nLoadStatistic: {"Unfinished backends":{},"ScannedRows":0,"TaskNumber":0,"LoadBytes":0,"All backends":{},"FileNumber":0,"FileSize":0}\n         User: root\n1 row in set (0.05 sec)\n\n')),(0,l.yg)("h4",{id:"mv-tasks-1"},"MV Tasks"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u67e5\u770b\u6240\u6709\u7269\u5316\u89c6\u56fe\u7684task")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select * from tasks("type"="mv");\n')),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u67e5\u770bjobName\u4e3a",(0,l.yg)("inlineCode",{parentName:"li"},"inner_mtmv_75043"),"\u7684\u6240\u6709task")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select * from tasks("type"="mv") where JobName="inner_mtmv_75043";\n')),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"}," tasks, job, insert, mv, materilized view\n")))}p.isMDXComponent=!0}}]);