"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[395695],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>h});var i=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return a?i.createElement(h,o(o({ref:t},s),{},{components:a})):i.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:n,o[1]=p;for(var d=2;d<r;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},585152:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var i=a(58168),n=(a(296540),a(15680));const r={title:"Hive Bitmap UDF",language:"en"},o=void 0,p={unversionedId:"ecosystem/hive-bitmap-udf",id:"version-3.0/ecosystem/hive-bitmap-udf",title:"Hive Bitmap UDF",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/ecosystem/hive-bitmap-udf.md",sourceDirName:"ecosystem",slug:"/ecosystem/hive-bitmap-udf",permalink:"/docs/ecosystem/hive-bitmap-udf",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Hive Bitmap UDF",language:"en"},sidebar:"ecosystem",previous:{title:"Doris Streamloader",permalink:"/docs/ecosystem/doris-streamloader"},next:{title:"Hive HLL UDF",permalink:"/docs/ecosystem/hive-hll-udf"}},l={},d=[{value:"How To Use",id:"how-to-use",level:2},{value:"Create Bitmap type table in Hive",id:"create-bitmap-type-table-in-hive",level:3},{value:"Hive Bitmap UDF Usage:",id:"hive-bitmap-udf-usage",level:3},{value:"Hive Bitmap UDF  Description",id:"hive-bitmap-udf--description",level:3},{value:"Hive Bitmap import into Doris",id:"hive-bitmap-import-into-doris",level:2},{value:"Method 1\uff1aCatalog (recommended)",id:"method-1catalog-recommended",level:3},{value:"Method 2: Spark Load",id:"method-2-spark-load",level:3}],s={toc:d},m="wrapper";function c(e){let{components:t,...a}=e;return(0,n.yg)(m,(0,i.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"hive-udf"},"Hive UDF"),(0,n.yg)("p",null," Hive Bitmap UDF provides UDFs for generating bitmap and bitmap operations in hive tables. The bitmap in Hive is exactly the same as the Doris bitmap. The bitmap in Hive can be imported into doris through (spark bitmap load)."),(0,n.yg)("p",null," the main purpose:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Reduce the time of importing data into doris, and remove processes such as dictionary building and bitmap pre-aggregation;"),(0,n.yg)("li",{parentName:"ol"},"Save hive storage, use bitmap to compress data, reduce storage cost;"),(0,n.yg)("li",{parentName:"ol"},"Provide flexible bitmap operations in hive, such as: intersection, union, and difference operations, and the calculated bitmap can also be directly imported into doris; imported into doris;")),(0,n.yg)("h2",{id:"how-to-use"},"How To Use"),(0,n.yg)("h3",{id:"create-bitmap-type-table-in-hive"},"Create Bitmap type table in Hive"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"-- Example: Create Hive Bitmap Table\nCREATE TABLE IF NOT EXISTS `hive_bitmap_table`(\n  `k1`   int       COMMENT '',\n  `k2`   String    COMMENT '',\n  `k3`   String    COMMENT '',\n  `uuid` binary    COMMENT 'bitmap'\n) comment  'comment'\n\n-- Example\uff1aCreate Hive Table\nCREATE TABLE IF NOT EXISTS `hive_table`(\n  `k1`   int       COMMENT '',\n  `k2`   String    COMMENT '',\n  `k3`   String    COMMENT '',\n  `uuid` int       COMMENT ''\n) comment  'comment'\n")),(0,n.yg)("h3",{id:"hive-bitmap-udf-usage"},"Hive Bitmap UDF Usage:"),(0,n.yg)("p",null,"   Hive Bitmap UDF used in Hive/Spark,First, you need to compile fe to get hive-udf-jar-with-dependencies.jar.\nCompilation preparation:If you have compiled the ldb source code, you can directly compile fe,If you have compiled the ldb source code, you can compile it directly. If you have not compiled the ldb source code, you need to manually install thrift,\nReference:",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/community/developer-guide/fe-idea-dev/"},"Setting Up dev env for FE"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"--clone doris code\ngit clone https://github.com/apache/doris.git\ncd doris\ngit submodule update --init --recursive\n--install thrift\n--Enter the fe directory\ncd fe\n--Execute the maven packaging command\uff08All sub modules of fe will be packaged\uff09\nmvn package -Dmaven.test.skip=true\n--You can also just package the hive-udf module\nmvn package -pl hive-udf -am -Dmaven.test.skip=true\n")),(0,n.yg)("p",null,"After packaging and compiling, enter the hive-udf directory and there will be a target directory,There will be hive-udf.jar package"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"-- Load the Hive Bitmap Udf jar package (Upload the compiled hive-udf jar package to HDFS)\nadd jar hdfs://node:9001/hive-udf-jar-with-dependencies.jar;\n-- Create Hive Bitmap UDAF function\ncreate temporary function to_bitmap as 'org.apache.doris.udf.ToBitmapUDAF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_union as 'org.apache.doris.udf.BitmapUnionUDAF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\n-- Create Hive Bitmap UDF function\ncreate temporary function bitmap_count as 'org.apache.doris.udf.BitmapCountUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_and as 'org.apache.doris.udf.BitmapAndUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_or as 'org.apache.doris.udf.BitmapOrUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\ncreate temporary function bitmap_xor as 'org.apache.doris.udf.BitmapXorUDF' USING JAR 'hdfs://node:9001/hive-udf-jar-with-dependencies.jar';\n-- Example: Generate bitmap by to_bitmap function and write to Hive Bitmap table\ninsert into hive_bitmap_table\nselect \n    k1,\n    k2,\n    k3,\n    to_bitmap(uuid) as uuid\nfrom \n    hive_table\ngroup by \n    k1,\n    k2,\n    k3\n-- Example: The bitmap_count function calculate the number of elements in the bitmap\nselect k1,k2,k3,bitmap_count(uuid) from hive_bitmap_table\n-- Example: The bitmap_union function calculate the grouped bitmap union\nselect k1,bitmap_union(uuid) from hive_bitmap_table group by k1\n")),(0,n.yg)("h3",{id:"hive-bitmap-udf--description"},"Hive Bitmap UDF  Description"),(0,n.yg)("h2",{id:"hive-bitmap-import-into-doris"},"Hive Bitmap import into Doris"),(0,n.yg)("h3",{id:"method-1catalog-recommended"},"Method 1\uff1aCatalog (recommended)"),(0,n.yg)("p",null,"When create a Hive table in the format specified as TEXT, for Binary type, Hive will be saved as a bash64 encoded string. Therefore, the binary data can be directly saved as Bitmap through bitmap_from_base64 function by using  Doris's Hive Catalog."),(0,n.yg)("p",null,"Here is a full example:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Creating Hive Tables in Hive")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS `test`.`hive_bitmap_table`(\n`k1`   int       COMMENT '',\n`k2`   String    COMMENT '',\n`k3`   String    COMMENT '',\n`uuid` binary    COMMENT 'bitmap'\n) stored as textfile \n")),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"/docs/lakehouse/datalake-analytics/hive"},"Creating a Catalog in Doris"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://127.0.0.1:9083'\n);\n")),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"Create Doris internal table")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS `test`.`doris_bitmap_table`(\n    `k1`   int                   COMMENT '',\n    `k2`   String                COMMENT '',\n    `k3`   String                COMMENT '',\n    `uuid` BITMAP  BITMAP_UNION  COMMENT 'bitmap'\n)\nAGGREGATE KEY(k1, k2, k3)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 1\nPROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 1\"\n);\n")),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"Inserting data from Hive into Doris")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"insert into doris_bitmap_table select k1, k2, k3, bitmap_from_base64(uuid) from hive.test.hive_bitmap_table;\n")),(0,n.yg)("h3",{id:"method-2-spark-load"},"Method 2: Spark Load"),(0,n.yg)("p",null," see details: ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/1.2/data-operate/import/import-way/spark-load-manual"},"Spark Load")," -> Basic operation -> Create load(Example 3: when the upstream data source is hive binary type table)"))}c.isMDXComponent=!0}}]);