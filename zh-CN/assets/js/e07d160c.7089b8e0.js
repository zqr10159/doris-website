"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[705163],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),y=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=y(e.components);return a.createElement(g.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=y(n),c=r,m=p["".concat(g,".").concat(c)]||p[c]||d[c]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var y=2;y<l;y++)o[y]=n[y];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var a=n(58168),r=(n(296540),n(15680));const l={title:"BigQuery Catalog",language:"zh-CN"},o=void 0,i={unversionedId:"lakehouse/datalake-analytics/bigquery",id:"version-3.0/lakehouse/datalake-analytics/bigquery",title:"BigQuery Catalog",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/lakehouse/datalake-analytics/bigquery.md",sourceDirName:"lakehouse/datalake-analytics",slug:"/lakehouse/datalake-analytics/bigquery",permalink:"/zh-CN/docs/lakehouse/datalake-analytics/bigquery",draft:!1,tags:[],version:"3.0",frontMatter:{title:"BigQuery Catalog",language:"zh-CN"},sidebar:"docs",previous:{title:"LakeSoul Catalog",permalink:"/zh-CN/docs/lakehouse/datalake-analytics/lakesoul"},next:{title:"Delta Lake Catalog",permalink:"/zh-CN/docs/lakehouse/datalake-analytics/deltalake"}},g={},y=[{value:"\u4f7f\u7528\u987b\u77e5",id:"\u4f7f\u7528\u987b\u77e5",level:2},{value:"\u7f16\u8bd1 BigQuery Connector \u63d2\u4ef6",id:"\u7f16\u8bd1-bigquery-connector-\u63d2\u4ef6",level:2},{value:"\u90e8\u7f72 BigQuery Connector",id:"\u90e8\u7f72-bigquery-connector",level:2},{value:"\u51c6\u5907 Google Cloud ADC \u8ba4\u8bc1",id:"\u51c6\u5907-google-cloud-adc-\u8ba4\u8bc1",level:2},{value:"\u521b\u5efa BigQuery Catalog",id:"\u521b\u5efa-bigquery-catalog",level:2},{value:"\u5217\u7c7b\u578b\u6620\u5c04",id:"\u5217\u7c7b\u578b\u6620\u5c04",level:2}],u={toc:y},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"BigQuery Catalog \u901a\u8fc7 ",(0,r.yg)("a",{parentName:"p",href:"../../../../docusaurus-plugin-content-docs-community/current/how-to-contribute/trino-connector-developer-guide.md"},"Trino Connector")," \u517c\u5bb9\u6846\u67b6\uff0c\u4f7f\u7528 BigQuery Connector \u6765\u8bbf\u95ee BigQuery \u8868\u3002"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u8be5\u529f\u80fd\u81ea Doris 3.0.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002")),(0,r.yg)("admonition",{title:"\u5907\u6ce8",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u8fd9\u662f\u4e00\u4e2a\u5b9e\u9a8c\u529f\u80fd\u3002")),(0,r.yg)("h2",{id:"\u4f7f\u7528\u987b\u77e5"},"\u4f7f\u7528\u987b\u77e5"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5728\u4f7f\u7528 Trino Catalog \u8bbf\u95ee BigQuery \u8868\u4e4b\u524d\uff0c\u5fc5\u987b\u5148\u7f16\u8bd1 Trino \u7684 BigQuery \u63d2\u4ef6\uff0c\u5e76\u5c06\u5176\u653e\u5728\u6307\u5b9a\u76ee\u5f55\u4e0b\uff0c\u5177\u4f53\u64cd\u4f5c\u6b65\u9aa4\u53c2\u8003\u4e0b\u6587"),(0,r.yg)("li",{parentName:"ol"},"\u5f53\u524d Doris \u9002\u914d Trino 435 \u7248\u672c\u7684\u63d2\u4ef6\uff0c\u5982\u679c\u4f7f\u7528\u4f4e\u4e8e\u6216\u9ad8\u4e8e 435 \u7248\u672c\u7684 Trino \u63d2\u4ef6\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u517c\u5bb9\u6027\u95ee\u9898\u3002")),(0,r.yg)("h2",{id:"\u7f16\u8bd1-bigquery-connector-\u63d2\u4ef6"},"\u7f16\u8bd1 BigQuery Connector \u63d2\u4ef6"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u9700\u8981 JDK 17 \u7248\u672c\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain",metastring:"Text",Text:!0},"$ git clone https://github.com/apache/Doris-thirdparty.git\n$ cd Doris-thirdparty\n$ git checkout trino-435\n$ cd plugin/trino-bigquery\n$ mvn clean install -DskipTest\n")),(0,r.yg)("p",null,"\u5b8c\u6210\u7f16\u8bd1\u540e\uff0c\u4f1a\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"trino/plugin/trino-bigquery/target/")," \u4e0b\u5f97\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"trino-bigquery-435/")," \u76ee\u5f55\u3002"),(0,r.yg)("p",null,"\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u6211\u4eec\u9884\u7f16\u8bd1\u7684 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/Doris-thirdparty/releases/download/trino-435-20240724/trino-bigquery-435-20240724.tar.gz"},"trino-bigquery-435-20240724.tar.gz")," \u5e76\u89e3\u538b\u3002"),(0,r.yg)("h2",{id:"\u90e8\u7f72-bigquery-connector"},"\u90e8\u7f72 BigQuery Connector"),(0,r.yg)("p",null,"\u5c06 ",(0,r.yg)("inlineCode",{parentName:"p"},"trino-bigquery-435/")," \u76ee\u5f55\u653e\u5230\u6240\u6709 FE \u548c BE \u90e8\u7f72\u8def\u5f84\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"connectors/")," \u76ee\u5f55\u4e0b\u3002\uff08\u5982\u679c\u6ca1\u6709\uff0c\u53ef\u4ee5\u624b\u52a8\u521b\u5efa\uff09\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain",metastring:"Text",Text:!0},"\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 conf\n\u251c\u2500\u2500 connectors\n\u2502   \u251c\u2500\u2500 trino-bigquery-435\n...\n")),(0,r.yg)("p",null,"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u5efa\u8bae\u91cd\u542f FE\u3001BE \u8282\u70b9\u4ee5\u786e\u4fdd Connector \u53ef\u4ee5\u88ab\u6b63\u786e\u52a0\u8f7d\u3002"),(0,r.yg)("h2",{id:"\u51c6\u5907-google-cloud-adc-\u8ba4\u8bc1"},"\u51c6\u5907 Google Cloud ADC \u8ba4\u8bc1"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5b89\u88c5 gcloud CLI\uff1a",(0,r.yg)("a",{parentName:"li",href:"https://cloud.google.com/sdk/docs/install"},"https://cloud.google.com/sdk/docs/install")),(0,r.yg)("li",{parentName:"ol"},"\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"li"},"gcloud init --console-only --skip-diagnostics")),(0,r.yg)("li",{parentName:"ol"},"\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"li"},"gcloud auth login")),(0,r.yg)("li",{parentName:"ol"},"\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"li"},"gcloud auth application-default login"))),(0,r.yg)("p",null,"\u8fd9\u4e00\u6b65\u662f\u751f\u6210 ADC \u8ba4\u8bc1\u6587\u4ef6\uff0c\u751f\u6210\u540e\u7684 json \u9ed8\u8ba4\u653e\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"\uff5e/.config/gcloud/application_default_credentials.json")),(0,r.yg)("h2",{id:"\u521b\u5efa-bigquery-catalog"},"\u521b\u5efa BigQuery Catalog"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'create catalog bigquery_catalog properties (\n    "type"="trino-connector",\n    "trino.connector.name"="bigquery",\n    "trino.bigquery.project-id"="your-bigquery-project-id",\n    "trino.bigquery.credentials-file"="/path/to/application_default_credentials.json",\n);\n')),(0,r.yg)("p",null,"\u5176\u4e2d\uff1a\u4ee5 ",(0,r.yg)("inlineCode",{parentName:"p"},"trino.")," \u4e3a\u524d\u7f00\u7684\u5c5e\u6027\u90fd\u662f trino \u539f\u751f\u7684\u5c5e\u6027\uff0c\u66f4\u591a\u6709\u5173 BigQuery \u7684\u5c5e\u6027\u53ef\u4ee5\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://trino.io/docs/current/connector/bigquery.html"},"Trino \u6587\u6863"),"\u3002"),(0,r.yg)("h2",{id:"\u5217\u7c7b\u578b\u6620\u5c04"},"\u5217\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"BigQuery"),(0,r.yg)("th",{parentName:"tr",align:null},"Trino"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT64"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT64"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NUMERIC"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p,s)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p,s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGNUMERIC"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(P,S)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p,s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BYTES"),(0,r.yg)("td",{parentName:"tr",align:null},"VARBINARY"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP(6)"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME(6)"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP(6) WITH TIME ZONE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GEOGRAPHY"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MAP"),(0,r.yg)("td",{parentName:"tr",align:null},"MAP"),(0,r.yg)("td",{parentName:"tr",align:null},"MAP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"RECORD"),(0,r.yg)("td",{parentName:"tr",align:null},"ROW"),(0,r.yg)("td",{parentName:"tr",align:null},"STRUCT")))))}d.isMDXComponent=!0}}]);