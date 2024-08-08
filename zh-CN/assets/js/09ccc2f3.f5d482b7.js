"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[43702],{15680:(n,e,a)=>{a.d(e,{xA:()=>p,yg:()=>d});var l=a(296540);function t(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function s(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,l)}return a}function r(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){t(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function i(n,e){if(null==n)return{};var a,l,t=function(n,e){if(null==n)return{};var a,l,t={},s=Object.keys(n);for(l=0;l<s.length;l++)a=s[l],e.indexOf(a)>=0||(t[a]=n[a]);return t}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(l=0;l<s.length;l++)a=s[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(t[a]=n[a])}return t}var o=l.createContext({}),u=function(n){var e=l.useContext(o),a=e;return n&&(a="function"==typeof n?n(e):r(r({},e),n)),a},p=function(n){var e=u(n.components);return l.createElement(o.Provider,{value:e},n.children)},c="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return l.createElement(l.Fragment,{},e)}},g=l.forwardRef((function(n,e){var a=n.components,t=n.mdxType,s=n.originalType,o=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),c=u(a),g=t,d=c["".concat(o,".").concat(g)]||c[g]||m[g]||s;return a?l.createElement(d,r(r({ref:e},p),{},{components:a})):l.createElement(d,r({ref:e},p))}));function d(n,e){var a=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var s=a.length,r=new Array(s);r[0]=g;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=n,i[c]="string"==typeof n?n:t,r[1]=i;for(var u=2;u<s;u++)r[u]=a[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}g.displayName="MDXCreateElement"},767744:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var l=a(58168),t=(a(296540),a(15680));const s={title:"EXPLODE_MAP",language:"zh-CN"},r=void 0,i={unversionedId:"sql-manual/sql-functions/table-functions/explode_map",id:"version-2.1/sql-manual/sql-functions/table-functions/explode_map",title:"EXPLODE_MAP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/table-functions/explode_map.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/explode_map",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/table-functions/explode_map",draft:!1,tags:[],version:"2.1",frontMatter:{title:"EXPLODE_MAP",language:"zh-CN"},sidebar:"docs",previous:{title:"EXPLODE_SPLIT",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/table-functions/explode-split"},next:{title:"EXPLODE_BITMAP",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/table-functions/explode-bitmap"}},o={},u=[{value:"explode_map",id:"explode_map",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:u},c="wrapper";function m(n){let{components:e,...a}=n;return(0,t.yg)(c,(0,l.A)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"explode_map"},"explode_map"),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("p",null,"\u8868\u51fd\u6570\uff0c\u9700\u914d\u5408 Lateral View \u4f7f\u7528, \u53ef\u4ee5\u652f\u6301\u591a\u4e2a Lateral view, \u4ec5\u4ec5\u652f\u6301\u65b0\u4f18\u5316\u5668\u3002"),(0,t.yg)("p",null,"\u5c06 map \u5217\u5c55\u5f00\u6210\u591a\u884c\u3002\u5f53 map \u4e3aNULL\u6216\u8005\u4e3a\u7a7a\u65f6\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"explode_map_outer")," \u8fd4\u56deNULL\u3002\n",(0,t.yg)("inlineCode",{parentName:"p"},"explode_map")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"explode_map_outer")," \u5747\u4f1a\u8fd4\u56de map \u5185\u90e8\u7684NULL\u5143\u7d20\u3002"),(0,t.yg)("h4",{id:"syntax"},"syntax"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"explode_map(expr)\nexplode_map_outer(expr)\n")),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-mysql>",metastring:"SET enable_nereids_planner=true",SET:!0,enable_nereids_planner:"true"},'mysql> SET enable_fallback_to_original_planner=false\n\nmysql> CREATE TABLE IF NOT EXISTS `sdu`(\n                   `id` INT NULL,\n                   `name` TEXT NULL,\n                   `score` MAP<TEXT,INT> NULL\n                 ) ENGINE=OLAP\n                 DUPLICATE KEY(`id`)\n                 COMMENT \'OLAP\'\n                 DISTRIBUTED BY HASH(`id`) BUCKETS 1\n                 PROPERTIES ("replication_allocation" = "tag.location.default: 1");\nQuery OK, 0 rows affected (0.15 sec)\n\nmysql> insert into sdu values (0, "zhangsan", {"Chinese":"80","Math":"60","English":"90"}), (1, "lisi", {"null":null}), (2, "wangwu", {"Chinese":"88","Math":"90","English":"96"}), (3, "lisi2", {null:null}), (4, "amory", NULL);\nQuery OK, 5 rows affected (0.23 sec)\n{\'label\':\'label_9b35d9d9d59147f5_bffb974881ed2133\', \'status\':\'VISIBLE\', \'txnId\':\'4005\'}\n\nmysql> select * from sdu order by id;\n+------+----------+-----------------------------------------+\n| id   | name     | score                                   |\n+------+----------+-----------------------------------------+\n|    0 | zhangsan | {"Chinese":80, "Math":60, "English":90} |\n|    1 | lisi     | {"null":null}                           |\n|    2 | wangwu   | {"Chinese":88, "Math":90, "English":96} |\n|    3 | lisi2    | {null:null}                             |\n|    4 | amory    | NULL                                    |\n+------+----------+-----------------------------------------+\n\nmysql> select name, k,v from sdu lateral view explode_map(score) tmp as k,v;\n+----------+---------+------+\n| name     | k       | v    |\n+----------+---------+------+\n| zhangsan | Chinese |   80 |\n| zhangsan | Math    |   60 |\n| zhangsan | English |   90 |\n| lisi     | null    | NULL |\n| wangwu   | Chinese |   88 |\n| wangwu   | Math    |   90 |\n| wangwu   | English |   96 |\n| lisi2    | NULL    | NULL |\n+----------+---------+------+\n\nmysql> select name, k,v from sdu lateral view explode_map_outer(score) tmp as k,v;\n+----------+---------+------+\n| name     | k       | v    |\n+----------+---------+------+\n| zhangsan | Chinese |   80 |\n| zhangsan | Math    |   60 |\n| zhangsan | English |   90 |\n| lisi     | null    | NULL |\n| wangwu   | Chinese |   88 |\n| wangwu   | Math    |   90 |\n| wangwu   | English |   96 |\n| lisi2    | NULL    | NULL |\n| amory    | NULL    | NULL |\n+----------+---------+------+\n\nmysql> select name, k,v,k1,v1 from sdu lateral view explode_map_outer(score) tmp as k,v lateral view explode_map(score) tmp2 as k1,v1;\n+----------+---------+------+---------+------+\n| name     | k       | v    | k1      | v1   |\n+----------+---------+------+---------+------+\n| zhangsan | Chinese |   80 | Chinese |   80 |\n| zhangsan | Chinese |   80 | Math    |   60 |\n| zhangsan | Chinese |   80 | English |   90 |\n| zhangsan | Math    |   60 | Chinese |   80 |\n| zhangsan | Math    |   60 | Math    |   60 |\n| zhangsan | Math    |   60 | English |   90 |\n| zhangsan | English |   90 | Chinese |   80 |\n| zhangsan | English |   90 | Math    |   60 |\n| zhangsan | English |   90 | English |   90 |\n| lisi     | null    | NULL | null    | NULL |\n| wangwu   | Chinese |   88 | Chinese |   88 |\n| wangwu   | Chinese |   88 | Math    |   90 |\n| wangwu   | Chinese |   88 | English |   96 |\n| wangwu   | Math    |   90 | Chinese |   88 |\n| wangwu   | Math    |   90 | Math    |   90 |\n| wangwu   | Math    |   90 | English |   96 |\n| wangwu   | English |   96 | Chinese |   88 |\n| wangwu   | English |   96 | Math    |   90 |\n| wangwu   | English |   96 | English |   96 |\n| lisi2    | NULL    | NULL | NULL    | NULL |\n+----------+---------+------+---------+------+\n')),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"EXPLODE_MAP,EXPLODE_MAP_OUTER,MAP"))}m.isMDXComponent=!0}}]);