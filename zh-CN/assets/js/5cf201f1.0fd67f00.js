"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[725925],{15680:(e,a,n)=>{n.d(a,{xA:()=>m,yg:()=>d});var t=n(296540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function g(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var y=t.createContext({}),i=function(e){var a=t.useContext(y),n=a;return e&&(n="function"==typeof e?e(a):g(g({},a),e)),n},m=function(e){var a=i(e.components);return t.createElement(y.Provider,{value:a},e.children)},N="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},o=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,y=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),N=i(n),o=l,d=N["".concat(y,".").concat(o)]||N[o]||u[o]||r;return n?t.createElement(d,g(g({ref:a},m),{},{components:n})):t.createElement(d,g({ref:a},m))}));function d(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,g=new Array(r);g[0]=o;var p={};for(var y in a)hasOwnProperty.call(a,y)&&(p[y]=a[y]);p.originalType=e,p[N]="string"==typeof e?e:l,g[1]=p;for(var i=2;i<r;i++)g[i]=n[i];return t.createElement.apply(null,g)}return t.createElement.apply(null,n)}o.displayName="MDXCreateElement"},240133:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>y,contentTitle:()=>g,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var t=n(58168),l=(n(296540),n(15680));const r={title:"\u6570\u636e\u8f6c\u5316",language:"zh-CN"},g=void 0,p={unversionedId:"data-operate/import/load-data-convert",id:"version-2.1/data-operate/import/load-data-convert",title:"\u6570\u636e\u8f6c\u5316",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/data-operate/import/load-data-convert.md",sourceDirName:"data-operate/import",slug:"/data-operate/import/load-data-convert",permalink:"/zh-CN/docs/2.1/data-operate/import/load-data-convert",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u6570\u636e\u8f6c\u5316",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5bfc\u5165\u4e8b\u52a1\u4e0e\u539f\u5b50\u6027",permalink:"/zh-CN/docs/2.1/data-operate/import/load-atomicity"},next:{title:"\u6700\u5c0f\u5199\u5165\u526f\u672c\u6570",permalink:"/zh-CN/docs/2.1/data-operate/import/min-load-replica-num"}},y={},i=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"BROKER LOAD",id:"broker-load",level:3},{value:"STREAM LOAD",id:"stream-load",level:3},{value:"ROUTINE LOAD",id:"routine-load",level:3},{value:"\u53c2\u8003\u624b\u518c",id:"\u53c2\u8003\u624b\u518c",level:2},{value:"\u5bfc\u5165\u8bed\u6cd5",id:"\u5bfc\u5165\u8bed\u6cd5",level:3},{value:"\u5217\u6620\u5c04",id:"\u5217\u6620\u5c04",level:3},{value:"\u524d\u7f6e\u8fc7\u6ee4",id:"\u524d\u7f6e\u8fc7\u6ee4",level:3},{value:"\u5217\u8f6c\u6362",id:"\u5217\u8f6c\u6362",level:3},{value:"\u540e\u7f6e\u8fc7\u6ee4",id:"\u540e\u7f6e\u8fc7\u6ee4",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u6570\u636e\u8d28\u91cf\u95ee\u9898\u548c\u8fc7\u6ee4\u9608\u503c",id:"\u6570\u636e\u8d28\u91cf\u95ee\u9898\u548c\u8fc7\u6ee4\u9608\u503c",level:3}],m={toc:i},N="wrapper";function u(e){let{components:a,...n}=e;return(0,l.yg)(N,(0,t.A)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,l.yg)("p",null,"\u5728\u5bfc\u5165\u8fc7\u7a0b\u4e2d\uff0cDoris \u652f\u6301\u5bf9\u6e90\u6570\u636e\u8fdb\u884c\u4e00\u4e9b\u53d8\u6362\uff0c\u5177\u4f53\u6709\uff1a\u6620\u5c04\u3001\u8f6c\u6362\u3001\u524d\u7f6e\u8fc7\u6ee4\u548c\u540e\u7f6e\u8fc7\u6ee4\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u6620\u5c04\uff1a\u628a\u6e90\u6570\u636e\u4e2d\u7684 A \u5217\u5bfc\u5165\u5230\u76ee\u6807\u8868\u4e2d\u7684 B \u5217\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u53d8\u6362\uff1a\u4ee5\u6e90\u6570\u636e\u4e2d\u7684\u5217\u4e3a\u53c2\u6570\uff0c\u901a\u8fc7\u4e00\u4e2a\u8868\u8fbe\u5f0f\u8ba1\u7b97\u51fa\u76ee\u6807\u5217\u4e2d\u7684\u503c\uff0c\u8868\u8fbe\u5f0f\u4e2d\u652f\u6301\u81ea\u5b9a\u4e49\u51fd\u6570\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u524d\u7f6e\u8fc7\u6ee4\uff1a\u8fc7\u6ee4\u6e90\u6570\u636e\u4e2d\u7684\u884c\uff0c\u53ea\u5bfc\u5165\u7b26\u5408\u8fc7\u6ee4\u6761\u4ef6\u7684\u884c\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u540e\u7f6e\u8fc7\u6ee4\uff1a\u8fc7\u6ee4\u7ed3\u679c\u4e2d\u7684\u884c\uff0c\u53ea\u5bfc\u5165\u7b26\u5408\u8fc7\u6ee4\u6761\u4ef6\u7684\u884c\u3002"))),(0,l.yg)("h2",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,l.yg)("h3",{id:"broker-load"},"BROKER LOAD"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label1\n(\n    DATA INFILE("bos://bucket/input/file")\n    INTO TABLE `my_table`\n    (k1, k2, tmpk3)\n    PRECEDING FILTER k1 = 1\n    SET (\n        k3 = tmpk3 + 1\n    )\n    WHERE k1 > k2\n)\nWITH BROKER bos\n(\n    ...\n);\n')),(0,l.yg)("h3",{id:"stream-load"},"STREAM LOAD"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Bash"},'curl\n--location-trusted\n-u user:passwd\n-H "columns: k1, k2, tmpk3, k3 = tmpk3 + 1"\n-H "where: k1 > k2"\n-T file.txt\nhttp://host:port/api/testDb/testTbl/_stream_load\n')),(0,l.yg)("h3",{id:"routine-load"},"ROUTINE LOAD"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ROUTINE LOAD example_db.label1 ON my_table\nCOLUMNS(k1, k2, tmpk3, k3 = tmpk3 + 1),\nPRECEDING FILTER k1 = 1,\nWHERE k1 > k2\n...\n")),(0,l.yg)("h2",{id:"\u53c2\u8003\u624b\u518c"},"\u53c2\u8003\u624b\u518c"),(0,l.yg)("h3",{id:"\u5bfc\u5165\u8bed\u6cd5"},"\u5bfc\u5165\u8bed\u6cd5"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Stream Load")),(0,l.yg)("p",null,"\u5728 HTTP header \u4e2d\u589e\u52a0 ",(0,l.yg)("inlineCode",{parentName:"p"},"columns")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"where")," \u53c2\u6570"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"columns")," \u6307\u5b9a\u5217\u6620\u5c04\u548c\u503c\u53d8\u6362\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"where")," \u6307\u5b9a\u540e\u7f6e\u8fc7\u6ee4\u3002"))),(0,l.yg)("p",null,"Stream load \u4e0d\u652f\u6301\u524d\u7f6e\u8fc7\u6ee4\u3002"),(0,l.yg)("p",null,"\u793a\u4f8b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Bash"},'curl\n--location-trusted\n-u user:passwd\n-H "columns: k1, k2, tmpk3, k3 = tmpk3 + 1"\n-H "where: k1 > k2"\n-T file.txt\nhttp://host:port/api/testDb/testTbl/_stream_load\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Broker Load")),(0,l.yg)("p",null,"\u5728 SQL \u8bed\u53e5\u4e2d\u5b9a\u4e49\u6570\u636e\u53d8\u6362\uff0c\u5176\u4e2d\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"(k1, k2, tmpk3)")," \u6307\u5b9a\u5217\u6620\u5c04\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"PRECEDING FILTER")," \u6307\u5b9a\u524d\u7f6e\u8fc7\u6ee4\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"SET")," \u6307\u5b9a\u5217\u53d8\u6362\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"WHERE")," \u6307\u5b9a\u540e\u7f6e\u8fc7\u6ee4\u3002"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label1\n(\n    DATA INFILE("bos://bucket/input/file")\n    INTO TABLE `my_table`\n    (k1, k2, tmpk3)\n    PRECEDING FILTER k1 = 1\n    SET (\n        k3 = tmpk3 + 1\n    )\n    WHERE k1 > k2\n)\nWITH BROKER bos\n(\n    ...\n);\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Routine Load")),(0,l.yg)("p",null,"\u5728 SQL \u8bed\u53e5\u4e2d\u5b9a\u4e49\u6570\u636e\u53d8\u6362\uff0c\u5176\u4e2d\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"COLUMNS")," \u6307\u5b9a\u5217\u6620\u5c04\u548c\u5217\u53d8\u6362\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"PRECEDING FILTER")," \u6307\u5b9a\u524d\u7f6e\u8fc7\u6ee4\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"WHERE")," \u6307\u5b9a\u540e\u7f6e\u8fc7\u6ee4\u3002"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ROUTINE LOAD example_db.label1 ON my_table\nCOLUMNS(k1, k2, tmpk3, k3 = tmpk3 + 1),\nPRECEDING FILTER k1 = 1,\nWHERE k1 > k2\n...\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Insert Into")),(0,l.yg)("p",null,"Insert Into \u53ef\u4ee5\u76f4\u63a5\u5728 ",(0,l.yg)("inlineCode",{parentName:"p"},"SELECT")," \u8bed\u53e5\u4e2d\u5b8c\u6210\u6570\u636e\u53d8\u6362\uff0c\u589e\u52a0 ",(0,l.yg)("inlineCode",{parentName:"p"},"WHERE")," \u5b50\u53e5\u5b8c\u6210\u6570\u636e\u8fc7\u6ee4\u3002"),(0,l.yg)("h3",{id:"\u5217\u6620\u5c04"},"\u5217\u6620\u5c04"),(0,l.yg)("p",null,"\u5217\u6620\u5c04\u7684\u76ee\u7684\u4e3b\u8981\u662f\u63cf\u8ff0\u5bfc\u5165\u6587\u4ef6\u4e2d\u5404\u4e2a\u5217\u7684\u4fe1\u606f\uff0c\u76f8\u5f53\u4e8e\u4e3a\u6e90\u6570\u636e\u4e2d\u7684\u5217\u5b9a\u4e49\u540d\u79f0\u3002\u901a\u8fc7\u63cf\u8ff0\u5217\u6620\u5c04\u5173\u7cfb\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u4e8e\u8868\u4e2d\u5217\u987a\u5e8f\u4e0d\u540c\u3001\u5217\u6570\u91cf\u4e0d\u540c\u7684\u6e90\u6587\u4ef6\u5bfc\u5165\u5230 Doris \u4e2d\u3002\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u793a\u4f8b\u8bf4\u660e\uff1a"),(0,l.yg)("p",null,"\u5047\u8bbe\u6e90\u6587\u4ef6\u6709 4 \u5217\uff0c\u5185\u5bb9\u5982\u4e0b\uff08\u8868\u5934\u5217\u540d\u4ec5\u4e3a\u65b9\u4fbf\u8868\u8ff0\uff0c\u5b9e\u9645\u5e76\u65e0\u8868\u5934\uff09\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u5217 1"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5217 2"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5217 3"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5217 4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"beijing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"shanghai"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"4"),(0,l.yg)("td",{parentName:"tr",align:null},"\\N"),(0,l.yg)("td",{parentName:"tr",align:null},"chongqing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"\u6ce8\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"\\N")," \u5728\u6e90\u6587\u4ef6\u4e2d\u8868\u793a null\u3002")),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8c03\u6574\u6620\u5c04\u987a\u5e8f")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5047\u8bbe\u8868\u4e2d\u6709 ",(0,l.yg)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," 4 \u5217\u3002\u6211\u4eec\u5e0c\u671b\u7684\u5bfc\u5165\u6620\u5c04\u5173\u7cfb\u5982\u4e0b\uff1a"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"\u52171 -> k1\n\u52172 -> k3\n\u52173 -> k2\n\u52174 -> k4\n")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u5219\u5217\u6620\u5c04\u7684\u4e66\u5199\u987a\u5e8f\u5e94\u5982\u4e0b\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"(k1, k3, k2, k4)\n")),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u6e90\u6587\u4ef6\u4e2d\u7684\u5217\u6570\u91cf\u591a\u4e8e\u8868\u4e2d\u7684\u5217")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5047\u8bbe\u8868\u4e2d\u6709 ",(0,l.yg)("inlineCode",{parentName:"p"},"k1,k2,k3")," 3 \u5217\u3002\u6211\u4eec\u5e0c\u671b\u7684\u5bfc\u5165\u6620\u5c04\u5173\u7cfb\u5982\u4e0b\uff1a"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"\u52171 -> k1\n\u52172 -> k3\n\u52173 -> k2\n")),(0,l.yg)("ol",{start:6},(0,l.yg)("li",{parentName:"ol"},"\u5219\u5217\u6620\u5c04\u7684\u4e66\u5199\u987a\u5e8f\u5e94\u5982\u4e0b\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"(k1, k3, k2, tmpk4)\n")),(0,l.yg)("ol",{start:7},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5176\u4e2d ",(0,l.yg)("inlineCode",{parentName:"p"},"tmpk4")," \u4e3a\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u3001\u8868\u4e2d\u4e0d\u5b58\u5728\u7684\u5217\u540d\u3002Doris \u4f1a\u5ffd\u7565\u8fd9\u4e2a\u4e0d\u5b58\u5728\u7684\u5217\u540d\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u6e90\u6587\u4ef6\u4e2d\u7684\u5217\u6570\u91cf\u5c11\u4e8e\u8868\u4e2d\u7684\u5217\uff0c\u4f7f\u7528\u9ed8\u8ba4\u503c\u586b\u5145")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5047\u8bbe\u8868\u4e2d\u6709 ",(0,l.yg)("inlineCode",{parentName:"p"},"k1,k2,k3,k4,k5")," 5 \u5217\u3002\u6211\u4eec\u5e0c\u671b\u7684\u5bfc\u5165\u6620\u5c04\u5173\u7cfb\u5982\u4e0b\uff1a"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"\u52171 -> k1\n\u52172 -> k3\n\u52173 -> k2\n")),(0,l.yg)("ol",{start:10},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8fd9\u91cc\u6211\u4eec\u4ec5\u4f7f\u7528\u6e90\u6587\u4ef6\u4e2d\u7684\u524d 3 \u5217\u3002",(0,l.yg)("inlineCode",{parentName:"p"},"k4,k5")," \u4e24\u5217\u5e0c\u671b\u4f7f\u7528\u9ed8\u8ba4\u503c\u586b\u5145\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5219\u5217\u6620\u5c04\u7684\u4e66\u5199\u987a\u5e8f\u5e94\u5982\u4e0b\uff1a"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"(k1, k3, k2)\n")),(0,l.yg)("ol",{start:12},(0,l.yg)("li",{parentName:"ol"},"\u5982\u679c ",(0,l.yg)("inlineCode",{parentName:"li"},"k4,k5")," \u5217\u6709\u9ed8\u8ba4\u503c\uff0c\u5219\u4f1a\u586b\u5145\u9ed8\u8ba4\u503c\u3002\u5426\u5219\u5982\u679c\u662f ",(0,l.yg)("inlineCode",{parentName:"li"},"nullable")," \u7684\u5217\uff0c\u5219\u4f1a\u586b\u5145 ",(0,l.yg)("inlineCode",{parentName:"li"},"null")," \u503c\u3002\u5426\u5219\uff0c\u5bfc\u5165\u4f5c\u4e1a\u4f1a\u62a5\u9519\u3002")),(0,l.yg)("h3",{id:"\u524d\u7f6e\u8fc7\u6ee4"},"\u524d\u7f6e\u8fc7\u6ee4"),(0,l.yg)("p",null,"\u524d\u7f6e\u8fc7\u6ee4\u662f\u5bf9\u8bfb\u53d6\u5230\u7684\u539f\u59cb\u6570\u636e\u8fdb\u884c\u4e00\u6b21\u8fc7\u6ee4\u3002\u76ee\u524d\u4ec5\u652f\u6301 BROKER LOAD \u548c ROUTINE LOAD\u3002"),(0,l.yg)("p",null,"\u524d\u7f6e\u8fc7\u6ee4\u6709\u4ee5\u4e0b\u5e94\u7528\u573a\u666f\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8f6c\u6362\u524d\u505a\u8fc7\u6ee4")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5e0c\u671b\u5728\u5217\u6620\u5c04\u548c\u8f6c\u6362\u524d\u505a\u8fc7\u6ee4\u7684\u573a\u666f\u3002\u80fd\u591f\u5148\u884c\u8fc7\u6ee4\u6389\u90e8\u5206\u4e0d\u9700\u8981\u7684\u6570\u636e\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8fc7\u6ee4\u5217\u4e0d\u5b58\u5728\u4e8e\u8868\u4e2d\uff0c\u4ec5\u4f5c\u4e3a\u8fc7\u6ee4\u6807\u8bc6")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u6bd4\u5982\u6e90\u6570\u636e\u4e2d\u5b58\u50a8\u4e86\u591a\u5f20\u8868\u7684\u6570\u636e\uff08\u6216\u8005\u591a\u5f20\u8868\u7684\u6570\u636e\u5199\u5165\u4e86\u540c\u4e00\u4e2a Kafka \u6d88\u606f\u961f\u5217\uff09\u3002\u6570\u636e\u4e2d\u6bcf\u884c\u6709\u4e00\u5217\u8868\u540d\u6765\u6807\u8bc6\u8be5\u884c\u6570\u636e\u5c5e\u4e8e\u54ea\u4e2a\u8868\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u524d\u7f6e\u8fc7\u6ee4\u6761\u4ef6\u6765\u7b5b\u9009\u5bf9\u5e94\u7684\u8868\u6570\u636e\u8fdb\u884c\u5bfc\u5165\u3002"))),(0,l.yg)("h3",{id:"\u5217\u8f6c\u6362"},"\u5217\u8f6c\u6362"),(0,l.yg)("p",null,"\u5217\u8f6c\u6362\u529f\u80fd\u5141\u8bb8\u7528\u6237\u5bf9\u6e90\u6587\u4ef6\u4e2d\u5217\u503c\u8fdb\u884c\u53d8\u6362\u3002\u76ee\u524d Doris \u652f\u6301\u4f7f\u7528\u7edd\u5927\u90e8\u5206\u5185\u7f6e\u51fd\u6570\u3001\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u8fdb\u884c\u8f6c\u6362\u3002"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"\u6ce8\uff1a\u81ea\u5b9a\u4e49\u51fd\u6570\u96b6\u5c5e\u4e8e\u67d0\u4e00\u6570\u636e\u5e93\u4e0b\uff0c\u5728\u4f7f\u7528\u81ea\u5b9a\u4e49\u51fd\u6570\u8fdb\u884c\u8f6c\u6362\u65f6\uff0c\u9700\u8981\u7528\u6237\u5bf9\u8fd9\u4e2a\u6570\u636e\u5e93\u6709\u8bfb\u6743\u9650\u3002")),(0,l.yg)("p",null,"\u8f6c\u6362\u64cd\u4f5c\u901a\u5e38\u662f\u548c\u5217\u6620\u5c04\u4e00\u8d77\u5b9a\u4e49\u7684\u3002\u5373\u5148\u5bf9\u5217\u8fdb\u884c\u6620\u5c04\uff0c\u518d\u8fdb\u884c\u8f6c\u6362\u3002\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u793a\u4f8b\u8bf4\u660e\uff1a"),(0,l.yg)("p",null,"\u5047\u8bbe\u6e90\u6587\u4ef6\u6709 4 \u5217\uff0c\u5185\u5bb9\u5982\u4e0b\uff08\u8868\u5934\u5217\u540d\u4ec5\u4e3a\u65b9\u4fbf\u8868\u8ff0\uff0c\u5b9e\u9645\u5e76\u65e0\u8868\u5934\uff09\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u5217 1"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5217 2"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5217 3"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5217 4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"beijing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"shanghai"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"\\N"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"chongqing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5c06\u6e90\u6587\u4ef6\u4e2d\u7684\u5217\u503c\u7ecf\u8f6c\u6362\u540e\u5bfc\u5165\u8868\u4e2d")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5047\u8bbe\u8868\u4e2d\u6709 ",(0,l.yg)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," 4 \u5217\u3002\u6211\u4eec\u5e0c\u671b\u7684\u5bfc\u5165\u6620\u5c04\u548c\u8f6c\u6362\u5173\u7cfb\u5982\u4e0b\uff1a"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"\u52171       -> k1\n\u52172 * 100 -> k3\n\u52173       -> k2\n\u52174       -> k4\n")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u5219\u5217\u6620\u5c04\u7684\u4e66\u5199\u987a\u5e8f\u5e94\u5982\u4e0b\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"(k1, tmpk3, k2, k4, k3 = tmpk3 * 100)\n")),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"\u8fd9\u91cc\u76f8\u5f53\u4e8e\u6211\u4eec\u5c06\u6e90\u6587\u4ef6\u4e2d\u7684\u7b2c 2 \u5217\u547d\u540d\u4e3a ",(0,l.yg)("inlineCode",{parentName:"li"},"tmpk3"),"\uff0c\u540c\u65f6\u6307\u5b9a\u8868\u4e2d ",(0,l.yg)("inlineCode",{parentName:"li"},"k3")," \u5217\u7684\u503c\u4e3a ",(0,l.yg)("inlineCode",{parentName:"li"},"tmpk3 * 100"),"\u3002\u6700\u7ec8\u8868\u4e2d\u7684\u6570\u636e\u5982\u4e0b\uff1a")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"k1"),(0,l.yg)("th",{parentName:"tr",align:null},"k2"),(0,l.yg)("th",{parentName:"tr",align:null},"k3"),(0,l.yg)("th",{parentName:"tr",align:null},"k4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"beijing"),(0,l.yg)("td",{parentName:"tr",align:null},"10000"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"shanghai"),(0,l.yg)("td",{parentName:"tr",align:null},"20000"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.yg)("td",{parentName:"tr",align:null},"30000"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"null"),(0,l.yg)("td",{parentName:"tr",align:null},"chongqing"),(0,l.yg)("td",{parentName:"tr",align:null},"40000"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("ol",{start:5},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u901a\u8fc7 case when \u51fd\u6570\uff0c\u6709\u6761\u4ef6\u7684\u8fdb\u884c\u5217\u8f6c\u6362\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5047\u8bbe\u8868\u4e2d\u6709 ",(0,l.yg)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," 4 \u5217\u3002\u6211\u4eec\u5e0c\u671b\u5bf9\u4e8e\u6e90\u6570\u636e\u4e2d\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"beijing, shanghai, guangzhou, chongqing")," \u5206\u522b\u8f6c\u6362\u4e3a\u5bf9\u5e94\u7684\u5730\u533a id \u540e\u5bfc\u5165\uff1a"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"\u52171                  -> k1\n\u52172                  -> k2\n\u52173 \u8fdb\u884c\u5730\u533aid\u8f6c\u6362\u540e    -> k3\n\u52174                  -> k4\n")),(0,l.yg)("ol",{start:7},(0,l.yg)("li",{parentName:"ol"},"\u5219\u5217\u6620\u5c04\u7684\u4e66\u5199\u987a\u5e8f\u5e94\u5982\u4e0b\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},'(k1, k2, tmpk3, k4, k3 = case tmpk3 when "beijing" then 1 when "shanghai" then 2 when "guangzhou" then 3 when "chongqing" then 4 else null end)\n')),(0,l.yg)("ol",{start:8},(0,l.yg)("li",{parentName:"ol"},"\u6700\u7ec8\u8868\u4e2d\u7684\u6570\u636e\u5982\u4e0b\uff1a")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"k1"),(0,l.yg)("th",{parentName:"tr",align:null},"k2"),(0,l.yg)("th",{parentName:"tr",align:null},"k3"),(0,l.yg)("th",{parentName:"tr",align:null},"k4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"null"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"4"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("ol",{start:9},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5c06\u6e90\u6587\u4ef6\u4e2d\u7684 null \u503c\u8f6c\u6362\u6210 0 \u5bfc\u5165\u3002\u540c\u65f6\u4e5f\u8fdb\u884c\u793a\u4f8b 2 \u4e2d\u7684\u5730\u533a id \u8f6c\u6362\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5047\u8bbe\u8868\u4e2d\u6709 ",(0,l.yg)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," 4 \u5217\u3002\u5728\u5bf9\u5730\u533a id \u8f6c\u6362\u7684\u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u5e0c\u671b\u5bf9\u4e8e\u6e90\u6570\u636e\u4e2d k1 \u5217\u7684 null \u503c\u8f6c\u6362\u6210 0 \u5bfc\u5165\uff1a"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"\u52171 \u5982\u679c\u4e3anull \u5219\u8f6c\u6362\u62100   -> k1\n\u52172                      -> k2\n\u52173                      -> k3\n\u52174                      -> k4\n")),(0,l.yg)("ol",{start:11},(0,l.yg)("li",{parentName:"ol"},"\u5219\u5217\u6620\u5c04\u7684\u4e66\u5199\u987a\u5e8f\u5e94\u5982\u4e0b\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},'(tmpk1, k2, tmpk3, k4, k1 = ifnull(tmpk1, 0), k3 = case tmpk3 when "beijing" then 1 when "shanghai" then 2 when "guangzhou" then 3 when "chongqing" then 4 else null end)\n')),(0,l.yg)("ol",{start:12},(0,l.yg)("li",{parentName:"ol"},"\u6700\u7ec8\u8868\u4e2d\u7684\u6570\u636e\u5982\u4e0b\uff1a")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"k1"),(0,l.yg)("th",{parentName:"tr",align:null},"k2"),(0,l.yg)("th",{parentName:"tr",align:null},"k3"),(0,l.yg)("th",{parentName:"tr",align:null},"k4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"4"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("h3",{id:"\u540e\u7f6e\u8fc7\u6ee4"},"\u540e\u7f6e\u8fc7\u6ee4"),(0,l.yg)("p",null,"\u7ecf\u8fc7\u5217\u6620\u5c04\u548c\u8f6c\u6362\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8fc7\u6ee4\u6761\u4ef6\u5c06\u4e0d\u5e0c\u671b\u5bfc\u5165\u5230 Doris \u4e2d\u7684\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4\u3002\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u793a\u4f8b\u8bf4\u660e\uff1a"),(0,l.yg)("p",null,"\u5047\u8bbe\u6e90\u6587\u4ef6\u6709 4 \u5217\uff0c\u5185\u5bb9\u5982\u4e0b\uff08\u8868\u5934\u5217\u540d\u4ec5\u4e3a\u65b9\u4fbf\u8868\u8ff0\uff0c\u5b9e\u9645\u5e76\u65e0\u8868\u5934\uff09\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u5217 1"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5217 2"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5217 3"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5217 4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"beijing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"shanghai"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"null"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"chongqing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5728\u5217\u6620\u5c04\u548c\u8f6c\u6362\u7f3a\u7701\u7684\u60c5\u51b5\u4e0b\uff0c\u76f4\u63a5\u8fc7\u6ee4")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5047\u8bbe\u8868\u4e2d\u6709 ",(0,l.yg)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," 4 \u5217\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u7f3a\u7701\u5217\u6620\u5c04\u548c\u8f6c\u6362\u7684\u60c5\u51b5\u4e0b\uff0c\u76f4\u63a5\u5b9a\u4e49\u8fc7\u6ee4\u6761\u4ef6\u3002\u5982\u6211\u4eec\u5e0c\u671b\u53ea\u5bfc\u5165\u6e90\u6587\u4ef6\u4e2d\u7b2c 4 \u5217\u4e3a\u5927\u4e8e 1.2 \u7684\u6570\u636e\u884c\uff0c\u5219\u8fc7\u6ee4\u6761\u4ef6\u5982\u4e0b\uff1a"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"where k4 > 1.2\n")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u6700\u7ec8\u8868\u4e2d\u7684\u6570\u636e\u5982\u4e0b\uff1a")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"k1"),(0,l.yg)("th",{parentName:"tr",align:null},"k2"),(0,l.yg)("th",{parentName:"tr",align:null},"k3"),(0,l.yg)("th",{parentName:"tr",align:null},"k4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"null"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"chongqing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u7f3a\u7701\u60c5\u51b5\u4e0b\uff0cDoris \u4f1a\u6309\u7167\u987a\u5e8f\u8fdb\u884c\u5217\u6620\u5c04\uff0c\u56e0\u6b64\u6e90\u6587\u4ef6\u4e2d\u7684\u7b2c 4 \u5217\u81ea\u52a8\u88ab\u6620\u5c04\u5230\u8868\u4e2d\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"k4")," \u5217\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5bf9\u7ecf\u8fc7\u5217\u8f6c\u6362\u7684\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5047\u8bbe\u8868\u4e2d\u6709 ",(0,l.yg)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," 4 \u5217\u3002\u5728 \u5217\u8f6c\u6362 \u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u7701\u4efd\u540d\u79f0\u8f6c\u6362\u6210\u4e86 id\u3002\u8fd9\u91cc\u6211\u4eec\u60f3\u8fc7\u6ee4\u6389 id \u4e3a 3 \u7684\u6570\u636e\u3002\u5219\u8f6c\u6362\u3001\u8fc7\u6ee4\u6761\u4ef6\u5982\u4e0b\uff1a"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},'(k1, k2, tmpk3, k4, k3 = case tmpk3 when "beijing" then 1 when "shanghai" then 2 when "guangzhou" then 3 when "chongqing" then 4 else null end)\nwhere k3 != 3\n')),(0,l.yg)("ol",{start:7},(0,l.yg)("li",{parentName:"ol"},"\u6700\u7ec8\u8868\u4e2d\u7684\u6570\u636e\u5982\u4e0b\uff1a")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"k1"),(0,l.yg)("th",{parentName:"tr",align:null},"k2"),(0,l.yg)("th",{parentName:"tr",align:null},"k3"),(0,l.yg)("th",{parentName:"tr",align:null},"k4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"null"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"4"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("ol",{start:8},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8fd9\u91cc\u6211\u4eec\u770b\u5230\uff0c\u6267\u884c\u8fc7\u6ee4\u65f6\u7684\u5217\u503c\uff0c\u4e3a\u7ecf\u8fc7\u6620\u5c04\u548c\u8f6c\u6362\u540e\u7684\u6700\u7ec8\u5217\u503c\uff0c\u800c\u4e0d\u662f\u539f\u59cb\u6570\u636e\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u591a\u6761\u4ef6\u8fc7\u6ee4")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5047\u8bbe\u8868\u4e2d\u6709 ",(0,l.yg)("inlineCode",{parentName:"p"},"k1,k2,k3,k4")," 4 \u5217\u3002\u6211\u4eec\u60f3\u8fc7\u6ee4\u6389 ",(0,l.yg)("inlineCode",{parentName:"p"},"k1")," \u5217\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"null")," \u7684\u6570\u636e\uff0c\u540c\u65f6\u8fc7\u6ee4\u6389 ",(0,l.yg)("inlineCode",{parentName:"p"},"k4")," \u5217\u5c0f\u4e8e 1.2 \u7684\u6570\u636e\uff0c\u5219\u8fc7\u6ee4\u6761\u4ef6\u5982\u4e0b\uff1a"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"where k1 is not null and k4 >= 1.2\n")),(0,l.yg)("ol",{start:11},(0,l.yg)("li",{parentName:"ol"},"\u6700\u7ec8\u8868\u4e2d\u7684\u6570\u636e\u5982\u4e0b\uff1a")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"k1"),(0,l.yg)("th",{parentName:"tr",align:null},"k2"),(0,l.yg)("th",{parentName:"tr",align:null},"k3"),(0,l.yg)("th",{parentName:"tr",align:null},"k4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")))),(0,l.yg)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,l.yg)("h3",{id:"\u6570\u636e\u8d28\u91cf\u95ee\u9898\u548c\u8fc7\u6ee4\u9608\u503c"},"\u6570\u636e\u8d28\u91cf\u95ee\u9898\u548c\u8fc7\u6ee4\u9608\u503c"),(0,l.yg)("p",null,"\u5bfc\u5165\u4f5c\u4e1a\u4e2d\u88ab\u5904\u7406\u7684\u6570\u636e\u884c\u53ef\u4ee5\u5206\u4e3a\u5982\u4e0b\u4e09\u79cd\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Filtered Rows \u56e0\u6570\u636e\u8d28\u91cf\u4e0d\u5408\u683c\u800c\u88ab\u8fc7\u6ee4\u6389\u7684\u6570\u636e\u3002\u6570\u636e\u8d28\u91cf\u4e0d\u5408\u683c\u5305\u62ec\u7c7b\u578b\u9519\u8bef\u3001\u7cbe\u5ea6\u9519\u8bef\u3001\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u957f\u3001\u6587\u4ef6\u5217\u6570\u4e0d\u5339\u914d\u7b49\u6570\u636e\u683c\u5f0f\u95ee\u9898\uff0c\u4ee5\u53ca\u56e0\u6ca1\u6709\u5bf9\u5e94\u7684\u5206\u533a\u800c\u88ab\u8fc7\u6ee4\u6389\u7684\u6570\u636e\u884c\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Unselected Rows \u8fd9\u90e8\u5206\u4e3a\u56e0 ",(0,l.yg)("inlineCode",{parentName:"p"},"preceding filter")," \u6216 ",(0,l.yg)("inlineCode",{parentName:"p"},"where")," \u5217\u8fc7\u6ee4\u6761\u4ef6\u800c\u88ab\u8fc7\u6ee4\u6389\u7684\u6570\u636e\u884c\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Loaded Rows \u88ab\u6b63\u786e\u5bfc\u5165\u7684\u6570\u636e\u884c\u3002"))),(0,l.yg)("p",null,"Doris \u7684\u5bfc\u5165\u4efb\u52a1\u5141\u8bb8\u7528\u6237\u8bbe\u7f6e\u6700\u5927\u9519\u8bef\u7387\uff08",(0,l.yg)("inlineCode",{parentName:"p"},"max_filter_ratio"),"\uff09\u3002\u5982\u679c\u5bfc\u5165\u7684\u6570\u636e\u7684\u9519\u8bef\u7387\u4f4e\u4e8e\u9608\u503c\uff0c\u5219\u8fd9\u4e9b\u9519\u8bef\u884c\u5c06\u88ab\u5ffd\u7565\uff0c\u5176\u4ed6\u6b63\u786e\u7684\u6570\u636e\u5c06\u88ab\u5bfc\u5165\u3002"),(0,l.yg)("p",null,"\u9519\u8bef\u7387\u7684\u8ba1\u7b97\u65b9\u5f0f\u4e3a\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"#Filtered Rows / (#Filtered Rows + #Loaded Rows)\n")),(0,l.yg)("p",null,"\u4e5f\u5c31\u662f\u8bf4 ",(0,l.yg)("inlineCode",{parentName:"p"},"Unselected Rows")," \u4e0d\u4f1a\u53c2\u4e0e\u9519\u8bef\u7387\u7684\u8ba1\u7b97\u3002"))}u.isMDXComponent=!0}}]);