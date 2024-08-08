"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[625384],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>g});var n=a(296540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=n.createContext({}),d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(a),c=o,g=p["".concat(u,".").concat(c)]||p[c]||m[c]||r;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},971965:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(58168),o=(a(296540),a(15680));const r={title:"Updating Overview",language:"en"},i=void 0,l={unversionedId:"data-operate/update/update-overview",id:"data-operate/update/update-overview",title:"Updating Overview",description:"\x3c!--",source:"@site/docs/data-operate/update/update-overview.md",sourceDirName:"data-operate/update",slug:"/data-operate/update/update-overview",permalink:"/docs/dev/data-operate/update/update-overview",draft:!1,tags:[],version:"current",frontMatter:{title:"Updating Overview",language:"en"},sidebar:"docs",previous:{title:"Migrating Data from Other OLAP",permalink:"/docs/dev/data-operate/import/migrate-data-from-other-olap"},next:{title:"Updating Data with UPDATE Command",permalink:"/docs/dev/data-operate/update/unique-update"}},u={},d=[{value:"Update in Primary Key (Unique) Model",id:"update-in-primary-key-unique-model",level:2},{value:"Two Update Methods in Unique Key Model",id:"two-update-methods-in-unique-key-model",level:3},{value:"Update Transactions in Unique Key Model",id:"update-transactions-in-unique-key-model",level:3},{value:"Update in Aggregate Model",id:"update-in-aggregate-model",level:2}],s={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,o.yg)(p,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Data update primarily refers to the modification of the value column of data with the same key. For the primary(unique) key model, this update involves replacing the existing value, while for the aggregate model, it involves aggregating the values in the value column."),(0,o.yg)("h2",{id:"update-in-primary-key-unique-model"},"Update in Primary Key (Unique) Model"),(0,o.yg)("p",null,"Starting from Doris 2.0, Doris primary key (unique) model supports both Merge-on-Read (MoR) and Merge-on-Write (MoW) storage modes. MoR is optimized for write operations, while MoW is optimized for faster analysis performance. In actual tests, the analysis performance of MoW storage can be 5-10 times faster than MoR."),(0,o.yg)("p",null,'By default, in Doris 2.0, the unique key model is still based on MoR. To create a MoW model, you need to manually specify the parameter "enable_unique_key_merge_on_write" as "true". Here\'s an example:'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS example_tbl_unique_merge_on_write\n(\n    `user_id` LARGEINT NOT NULL,\n    `username` VARCHAR(50) NOT NULL ,\n    `city` VARCHAR(20),\n    `age` SMALLINT,\n    `sex` TINYINT,\n    `phone` LARGEINT,\n    `address` VARCHAR(500),\n    `register_time` DATETIME\n)\nUNIQUE KEY(`user_id`, `username`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"enable_unique_key_merge_on_write" = "true"\n);\n')),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Starting from Doris 2.1, write merge will be the default mode for the unique key model. So, if you are using Doris 2.1, make sure to read the relevant table creation documentation.")),(0,o.yg)("h3",{id:"two-update-methods-in-unique-key-model"},"Two Update Methods in Unique Key Model"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Update statement: This method is used to update a specific column and is suitable for infrequent updates with a small amount of data.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},'Batch update based on load: Doris supports various load methods such as Stream Load, Broker Load, Routine Load, and Insert Into. For unique key tables, all load have the "UPSERT" semantics, meaning that if a row with the same key does not exist, it will be inserted, and if it already exists, it will be updated.')),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"If all columns are updated, MoR and MoW have the same semantics, which is to replace all value columns for the same key.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"If only some columns are updated, the default semantics for MoR and MoW are the same. In this case, the missing columns in the table schema will be updated with their default values, overwriting the old records.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},'If only some columns are updated and MoW is used in the unique key model, and the MySQL session variable "partial_columns" is set to true, or the HTTP header "partial_columns" is set to true, the missing columns will be updated with the corresponding missing column values from the existing record, instead of using the default values from the table schema.'))),(0,o.yg)("p",null,"We will provide detailed explanations of these two update methods in the documentation: ",(0,o.yg)("a",{parentName:"p",href:"../update/unique-update"},"Update in Unique Key Model")," and ",(0,o.yg)("a",{parentName:"p",href:"../update/update-of-unique-model"},"Load Update in Unique Key Model"),"."),(0,o.yg)("h3",{id:"update-transactions-in-unique-key-model"},"Update Transactions in Unique Key Model"),(0,o.yg)("p",null,"Whether you use the update statement or the batch update based on load, there may be multiple update statements or load jobs in progress. In such cases, it is important to ensure the effectiveness of multiple updates, maintain atomicity, and prevent data inconsistency. This is where update transactions in the unique key model come into play."),(0,o.yg)("p",null,"The documentation on update transactions in the unique key model will cover these aspects. In this document, we will focus on how to control the effectiveness of updates by introducing the hidden column ",(0,o.yg)("strong",{parentName:"p"},"**DORIS_SEQUENCE_COL"),", allowing developers to coordinate and achieve better update transactions."),(0,o.yg)("h2",{id:"update-in-aggregate-model"},"Update in Aggregate Model"),(0,o.yg)("p",null,"The update in the aggregate model refers to the process of generating new aggregate values by combining new column values with existing aggregate values, according to the requirements of the aggregate functions."),(0,o.yg)("p",null,"New Agg Value = Agg Func ( Old Agg Value + New Column Value)"),(0,o.yg)("p",null,"The update in the aggregate model is only supported through load methods and does not support the use of Update statements."),(0,o.yg)("p",null,"When defining a table in the aggregate model, if the aggregation function for the value column is defined as REPLACE_IF_NULL, it indirectly achieves partial column update capabilities similar to the unique key model."),(0,o.yg)("p",null,"For more details, please refer to the documentation on ",(0,o.yg)("a",{parentName:"p",href:"../update/update-of-aggregate-model"},"Load Update in the Aggregate Model"),"."))}m.isMDXComponent=!0}}]);