"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[749472],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>u});var t=a(296540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function g(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=t.createContext({}),d=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):g(g({},n),e)),a},p=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},N=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),N=l,u=m["".concat(o,".").concat(N)]||m[N]||y[N]||r;return a?t.createElement(u,g(g({ref:n},p),{},{components:a})):t.createElement(u,g({ref:n},p))}));function u(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,g=new Array(r);g[0]=N;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[m]="string"==typeof e?e:l,g[1]=i;for(var d=2;d<r;d++)g[d]=a[d];return t.createElement.apply(null,g)}return t.createElement.apply(null,a)}N.displayName="MDXCreateElement"},947196:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>g,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=a(58168),l=(a(296540),a(15680));const r={title:"FE \u65e5\u5fd7\u7ba1\u7406",language:"zh-CN"},g=void 0,i={unversionedId:"admin-manual/log-management/fe-log",id:"version-3.0/admin-manual/log-management/fe-log",title:"FE \u65e5\u5fd7\u7ba1\u7406",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/log-management/fe-log.md",sourceDirName:"admin-manual/log-management",slug:"/admin-manual/log-management/fe-log",permalink:"/zh-CN/docs/admin-manual/log-management/fe-log",draft:!1,tags:[],version:"3.0",frontMatter:{title:"FE \u65e5\u5fd7\u7ba1\u7406",language:"zh-CN"},sidebar:"docs",previous:{title:"BE OOM \u5206\u6790",permalink:"/zh-CN/docs/admin-manual/memory-management/be-oom-analysis"},next:{title:"BE \u65e5\u5fd7\u7ba1\u7406",permalink:"/zh-CN/docs/admin-manual/log-management/be-log"}},o={},d=[{value:"\u65e5\u5fd7\u5206\u7c7b",id:"\u65e5\u5fd7\u5206\u7c7b",level:2},{value:"\u65e5\u5fd7\u914d\u7f6e",id:"\u65e5\u5fd7\u914d\u7f6e",level:2},{value:"\u5f00\u542f DEBUG \u65e5\u5fd7",id:"\u5f00\u542f-debug-\u65e5\u5fd7",level:2},{value:"\u5bb9\u5668\u73af\u5883\u65e5\u5fd7\u914d\u7f6e",id:"\u5bb9\u5668\u73af\u5883\u65e5\u5fd7\u914d\u7f6e",level:2}],p={toc:d},m="wrapper";function y(e){let{components:n,...r}=e;return(0,l.yg)(m,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd Frontend(FE) \u8fdb\u7a0b\u7684\u65e5\u5fd7\u7ba1\u7406\u3002"),(0,l.yg)("p",null,"\u8be5\u6587\u6863\u9002\u7528\u4e8e 2.1.4 \u53ca\u4e4b\u540e\u7684 Doris \u7248\u672c\u3002"),(0,l.yg)("h2",{id:"\u65e5\u5fd7\u5206\u7c7b"},"\u65e5\u5fd7\u5206\u7c7b"),(0,l.yg)("p",null,"\u5f53\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"sh bin/start_fe.sh --daemon")," \u65b9\u5f0f\u542f\u52a8 FE \u8fdb\u7a0b\u540e\uff0cFE \u65e5\u5fd7\u76ee\u5f55\u4e0b\u4f1a\u4ea7\u751f\u4ee5\u4e0b\u7c7b\u578b\u7684\u65e5\u5fd7\u6587\u4ef6\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"fe.log"),(0,l.yg)("p",{parentName:"li"},"FE \u8fdb\u7a0b\u8fd0\u884c\u65e5\u5fd7\u3002FE \u7684\u4e3b\u65e5\u5fd7\u6587\u4ef6\u3002FE \u8fdb\u7a0b\u6240\u6709\u7b49\u7ea7\uff08DEBUG\u3001INFO\u3001WARN\u3001ERROR \u7b49\uff09\u7684\u8fd0\u884c\u65e5\u5fd7\u90fd\u4f1a\u6253\u5370\u5230\u8fd9\u4e2a\u65e5\u5fd7\u6587\u4ef6\u4e2d\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"fe.warn.log"),(0,l.yg)("p",{parentName:"li"},"FE \u8fdb\u7a0b\u8fd0\u884c\u65e5\u5fd7\u3002\u4f46\u53ea\u4f1a\u6253\u5370 WARN \u7ea7\u522b\u4ee5\u4e0a\u7684\u8fd0\u884c\u65e5\u5fd7\u3002fe.warn.log \u4e2d\u7684\u5185\u5bb9\u662f fe.log \u65e5\u5fd7\u5185\u5bb9\u7684\u5b50\u96c6\u3002\u4e3b\u8981\u7528\u4e8e\u5feb\u901f\u67e5\u770b\u544a\u8b66\u6216\u9519\u8bef\u7ea7\u522b\u65e5\u5fd7\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"fe.audit.log"),(0,l.yg)("p",{parentName:"li"},"\u5ba1\u8ba1\u65e5\u5fd7\u3002\u7528\u4e8e\u8bb0\u5f55\u901a\u8fc7\u8fd9\u4e2a FE \u8282\u70b9\u6267\u884c\u7684\u6240\u6709\u6570\u636e\u5e93\u64cd\u4f5c\u8bb0\u5f55\u3002\u5305\u62ec SQL\u3001DDL\u3001DML \u8bed\u53e5\u7b49\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"fe.out"),(0,l.yg)("p",{parentName:"li"},"\u7528\u4e8e\u63a5\u6536\u6807\u51c6\u8f93\u51fa\u6d41\u548c\u9519\u8bef\u6570\u636e\u6d41\u7684\u65e5\u5fd7\u3002\u6bd4\u5982 start \u811a\u672c\u4e2d\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"echo")," \u547d\u4ee4\u8f93\u51fa\u7b49\uff0c\u6216\u5176\u4ed6\u672a\u88ab log4j \u6846\u67b6\u6355\u83b7\u5230\u7684\u65e5\u5fd7\u4fe1\u606f\u3002\u901a\u5e38\u4f5c\u4e3a\u8fd0\u884c\u65e5\u5fd7\u7684\u8865\u5145\u3002\u5c11\u6570\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u67e5\u770b fe.out \u7684\u5185\u5bb9\u4ee5\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"fe.gc.log"),(0,l.yg)("p",{parentName:"li"},"FE JVM \u7684 GC \u65e5\u5fd7\u3002\u8be5\u65e5\u5fd7\u7684\u884c\u4e3a\u7531 fe.conf \u4e2d\u7684 JVM \u542f\u52a8\u9879 ",(0,l.yg)("inlineCode",{parentName:"p"},"JAVA_OPTS")," \u63a7\u5236\u3002"))),(0,l.yg)("h2",{id:"\u65e5\u5fd7\u914d\u7f6e"},"\u65e5\u5fd7\u914d\u7f6e"),(0,l.yg)("p",null,"\u5305\u62ec\u914d\u7f6e\u65e5\u5fd7\u7684\u5b58\u653e\u8def\u5f84\u3001\u4fdd\u7559\u65f6\u95f4\u3001\u4fdd\u7559\u6570\u76ee\u3001\u5927\u5c0f\u7b49\u3002"),(0,l.yg)("p",null,"\u4ee5\u4e0b\u914d\u7f6e\u9879\u5747\u5728 ",(0,l.yg)("inlineCode",{parentName:"p"},"fe.conf")," \u6587\u4ef6\u4e2d\u914d\u7f6e\u3002"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u53ef\u9009\u9879"),(0,l.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"LOG_DIR")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ENV(DORIS_HOME)/log")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u6240\u6709\u65e5\u5fd7\u7684\u5b58\u653e\u8def\u5f84\u3002\u9ed8\u8ba4\u4e3a FE \u90e8\u7f72\u8def\u5f84\u7684 ",(0,l.yg)("inlineCode",{parentName:"td"},"log/")," \u76ee\u5f55\u4e0b\u3002\u6ce8\u610f\u8fd9\u662f\u4e00\u4e2a\u73af\u5883\u53d8\u91cf\uff0c\u914d\u7f6e\u540d\u9700\u5927\u5199\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_level")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"INFO")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"INFO"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"WARN"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"ERROR"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"FATAL")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"fe.log")," \u7684\u65e5\u5fd7\u7b49\u7ea7\u3002\u9ed8\u8ba4\u4e3a INFO\u3002\u4e0d\u5efa\u8bae\u4fee\u6539\uff0cINFO \u7b49\u7ea7\u5305\u542b\u8bb8\u591a\u5173\u952e\u65e5\u5fd7\u4fe1\u606f\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_roll_num")),(0,l.yg)("td",{parentName:"tr",align:null},"10"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u63a7\u5236 ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.log")," \u548c ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.warn.log")," \u6700\u5927\u6587\u4ef6\u6570\u91cf\u3002\u9ed8\u8ba4 10\u3002\u5f53\u56e0\u4e3a\u65e5\u5fd7\u6eda\u52a8\u6216\u5207\u5206\u540e\uff0c\u65e5\u5fd7\u6587\u4ef6\u6570\u91cf\u5927\u4e8e\u8fd9\u4e2a\u9608\u503c\u540e\uff0c\u8001\u7684\u65e5\u5fd7\u6587\u4ef6\u5c06\u88ab\u5220\u9664")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_verbose_modules")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},'\u53ef\u4ee5\u8bbe\u7f6e\u6307\u5b9a\u7684 Java package \u4e0b\u7684\u6587\u4ef6\u5f00\u542f DEBUG \u7ea7\u522b\u65e5\u5fd7\u3002\u8bf7\u53c2\u9605 "\u5f00\u542f DEBUG \u65e5\u5fd7" \u7ae0\u8282')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_enable_compress")),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"true, false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u5386\u53f2 ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.log")," \u548c ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.warn.log")," \u65e5\u5fd7\u538b\u7f29\u3002\u9ed8\u8ba4\u5173\u95ed\u3002\u5f00\u542f\u540e\uff0c\u5386\u53f2\u5ba1\u8ba1\u65e5\u5fd7\u4f1a\u4f7f\u7528 gzip \u538b\u7f29\u5f52\u6863")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"log_rollover_strategy")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"age")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"age"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"size")),(0,l.yg)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u4fdd\u7559\u7b56\u7565\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"age"),"\uff0c\u5373\u6839\u636e\u65f6\u95f4\u7b56\u7565\u4fdd\u7559\u5386\u53f2\u65e5\u5fd7\u3002",(0,l.yg)("inlineCode",{parentName:"td"},"size")," \u4e3a\u6309\u65e5\u5fd7\u5927\u5c0f\u4fdd\u7559\u5386\u53f2\u65e5\u5fd7")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_delete_age")),(0,l.yg)("td",{parentName:"tr",align:null},"7d"),(0,l.yg)("td",{parentName:"tr",align:null},"\u652f\u6301\u683c\u5f0f\u5982 7d, 10h, 60m, 120s"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5f53 ",(0,l.yg)("inlineCode",{parentName:"td"},"log_rollover_strategy")," \u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"age")," \u65f6\u751f\u6548\u3002\u63a7\u5236 ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.log")," \u548c ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.warn.log")," \u6587\u4ef6\u7684\u4fdd\u7559\u5929\u6570\u3002\u9ed8\u8ba4 7 \u5929\u3002\u4f1a\u81ea\u52a8\u5220\u9664 7 \u5929\u524d\u7684\u65e5\u5fd7")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"audit_log_delete_age")),(0,l.yg)("td",{parentName:"tr",align:null},"7d"),(0,l.yg)("td",{parentName:"tr",align:null},"\u652f\u6301\u683c\u5f0f\u5982 7d, 10h, 60m, 120s"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5f53 ",(0,l.yg)("inlineCode",{parentName:"td"},"log_rollover_strategy")," \u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"age")," \u65f6\u751f\u6548\u3002\u63a7\u5236 ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.audit.log")," \u6587\u4ef6\u7684\u4fdd\u7559\u5929\u6570\u3002\u9ed8\u8ba4 30 \u5929\u3002\u4f1a\u81ea\u52a8\u5220\u9664 30 \u5929\u524d\u7684\u65e5\u5fd7")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"info_sys_accumulated_file_size")),(0,l.yg)("td",{parentName:"tr",align:null},"4"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5f53 ",(0,l.yg)("inlineCode",{parentName:"td"},"log_rollover_strategy")," \u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"size")," \u65f6\u751f\u6548\u3002\u63a7\u5236 ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.log")," \u6587\u4ef6\u7684\u7d2f\u8ba1\u5927\u5c0f\u3002\u9ed8\u8ba4\u4e3a 4GB\u3002\u5f53\u7d2f\u8ba1\u65e5\u5fd7\u5927\u5c0f\u8d85\u8fc7\u8fd9\u4e2a\u9608\u503c\u540e\uff0c\u4f1a\u5220\u9664\u5386\u53f2\u65e5\u5fd7\u6587\u4ef6")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"warn_sys_accumulated_file_size")),(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5f53 ",(0,l.yg)("inlineCode",{parentName:"td"},"log_rollover_strategy")," \u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"size")," \u65f6\u751f\u6548\u3002\u63a7\u5236 ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.warn.log")," \u6587\u4ef6\u7684\u7d2f\u8ba1\u5927\u5c0f\u3002\u9ed8\u8ba4\u4e3a 2GB\u3002\u5f53\u7d2f\u8ba1\u65e5\u5fd7\u5927\u5c0f\u8d85\u8fc7\u8fd9\u4e2a\u9608\u503c\u540e\uff0c\u4f1a\u5220\u9664\u5386\u53f2\u65e5\u5fd7\u6587\u4ef6")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"audit_sys_accumulated_file_size")),(0,l.yg)("td",{parentName:"tr",align:null},"4"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5f53 ",(0,l.yg)("inlineCode",{parentName:"td"},"log_rollover_strategy")," \u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"size")," \u65f6\u751f\u6548\u3002\u63a7\u5236 ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.audit.log")," \u6587\u4ef6\u7684\u7d2f\u8ba1\u5927\u5c0f\u3002\u9ed8\u8ba4\u4e3a 4GB\u3002\u5f53\u7d2f\u8ba1\u65e5\u5fd7\u5927\u5c0f\u8d85\u8fc7\u8fd9\u4e2a\u9608\u503c\u540e\uff0c\u4f1a\u5220\u9664\u5386\u53f2\u65e5\u5fd7\u6587\u4ef6")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"log_roll_size_mb")),(0,l.yg)("td",{parentName:"tr",align:null},"1024"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u63a7\u5236 ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.log"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.warn.log"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.audit.log")," \u5355\u4e2a\u6587\u4ef6\u6700\u5927\u5927\u5c0f\u3002\u9ed8\u8ba4 1024MB\u3002\u5355\u4e2a\u65e5\u5fd7\u6587\u4ef6\u8d85\u8fc7\u8fd9\u4e2a\u9608\u503c\u540e\uff0c\u4f1a\u81ea\u52a8\u5207\u5206\u65b0\u7684\u6587\u4ef6")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_roll_interval")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"DAY")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"DAY"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"HOUR")),(0,l.yg)("td",{parentName:"tr",align:null},"\u63a7\u5236 ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.log")," \u548c ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.warn.log")," \u7684\u6eda\u52a8\u95f4\u9694\u3002\u9ed8\u8ba4\u4e3a 1 \u5929\u3002\u5373\u6bcf\u5929\u751f\u6210\u4e00\u4e2a\u65b0\u65e5\u5fd7\u6587\u4ef6")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"audit_log_roll_num")),(0,l.yg)("td",{parentName:"tr",align:null},"90"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u63a7\u5236 ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.audit.log")," \u6700\u5927\u6587\u4ef6\u6570\u91cf\u3002\u9ed8\u8ba4 90\u3002\u5f53\u56e0\u4e3a\u65e5\u5fd7\u6eda\u52a8\u6216\u5207\u5206\u540e\uff0c\u65e5\u5fd7\u6587\u4ef6\u6570\u91cf\u5927\u4e8e\u8fd9\u4e2a\u9608\u503c\u540e\uff0c\u8001\u7684\u65e5\u5fd7\u6587\u4ef6\u5c06\u88ab\u5220\u9664")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"audit_log_roll_interval")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"DAY")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"DAY"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"HOUR")),(0,l.yg)("td",{parentName:"tr",align:null},"\u63a7\u5236 ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.audit.log")," \u7684\u6eda\u52a8\u95f4\u9694\u3002\u9ed8\u8ba4\u4e3a 1 \u5929\u3002\u5373\u6bcf\u5929\u751f\u6210\u4e00\u4e2a\u65b0\u65e5\u5fd7\u6587\u4ef6")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"audit_log_dir")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ENV(DORIS_HOME)/log")),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u5355\u72ec\u6307\u5b9a ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.audit.log")," \u7684\u5b58\u653e\u8def\u5f84\u3002\u9ed8\u8ba4\u4e3a FE \u90e8\u7f72\u8def\u5f84\u7684 ",(0,l.yg)("inlineCode",{parentName:"td"},"log/")," \u76ee\u5f55\u4e0b\u3002"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"audit_log_modules")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},'{"slow_query", "query", "load", "stream_load"}')),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"fe.audit.log")," \u4e2d\u7684\u6a21\u5757\u7c7b\u578b\u3002\u9ed8\u8ba4\u5305\u62ec\u6162\u67e5\u8be2\u3001\u67e5\u8be2\u3001\u5bfc\u5165\u3001stream load\u3002\u5176\u4e2d\u201c\u67e5\u8be2\u201d\u53ea\u6240\u6709 DDL\u3001DML\u3001SQL \u64cd\u4f5c\u3002\u201c\u6162\u67e5\u8be2\u201d\u6307\u8fd9\u4e9b\u64cd\u4f5c\u6267\u884c\u65f6\u95f4\u8d85\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"td"},"qe_slow_log_ms")," \u9608\u503c\u7684\u64cd\u4f5c\u3002\u201c\u5bfc\u5165\u201d\u6307 Broker Load\u3002\u201cstream load\u201d\u6307 stream load \u64cd\u4f5c\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"qe_slow_log_ms")),(0,l.yg)("td",{parentName:"tr",align:null},"5000"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u5f53 DDL\u3001DML\u3001SQL \u8bed\u53e5\u7684\u6267\u884c\u65f6\u95f4\u8d85\u8fc7\u8fd9\u4e2a\u9608\u503c\u540e\uff0c\u4f1a\u5728 ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.audit.log")," \u7684 ",(0,l.yg)("inlineCode",{parentName:"td"},"slow_query")," \u6a21\u5757\u4e2d\u5355\u72ec\u8bb0\u5f55\u3002\u9ed8\u8ba4 5000 ms")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"audit_log_enable_compress")),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"true, false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u5386\u53f2 ",(0,l.yg)("inlineCode",{parentName:"td"},"fe.audit.log")," \u65e5\u5fd7\u538b\u7f29\u3002\u9ed8\u8ba4\u5173\u95ed\u3002\u5f00\u542f\u540e\uff0c\u5386\u53f2\u5ba1\u8ba1\u65e5\u5fd7\u4f1a\u4f7f\u7528 gzip \u538b\u7f29\u5f52\u6863")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_mode")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"NORMAL")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"NORMAL"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"BRIEF"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"ASYNC")),(0,l.yg)("td",{parentName:"tr",align:null},"FE \u65e5\u5fd7\u7684\u8f93\u51fa\u6a21\u5f0f\uff0c\u5176\u4e2d ",(0,l.yg)("inlineCode",{parentName:"td"},"NORMAL")," \u4e3a\u9ed8\u8ba4\u7684\u8f93\u51fa\u6a21\u5f0f\uff0c\u65e5\u5fd7\u540c\u6b65\u8f93\u51fa\u4e14\u5305\u542b\u4f4d\u7f6e\u4fe1\u606f\u3002",(0,l.yg)("inlineCode",{parentName:"td"},"BRIEF")," \u6a21\u5f0f\u662f\u65e5\u5fd7\u540c\u6b65\u8f93\u51fa\u4f46\u4e0d\u5305\u542b\u4f4d\u7f6e\u4fe1\u606f\u3002",(0,l.yg)("inlineCode",{parentName:"td"},"ASYNC")," \u6a21\u5f0f\u662f\u65e5\u5fd7\u5f02\u6b65\u8f93\u51fa\u4e14\u4e0d\u5305\u542b\u4f4d\u7f6e\u4fe1\u606f\uff0c\u4e09\u79cd\u65e5\u5fd7\u8f93\u51fa\u6a21\u5f0f\u7684\u6027\u80fd\u4f9d\u6b21\u9012\u589e")))),(0,l.yg)("h2",{id:"\u5f00\u542f-debug-\u65e5\u5fd7"},"\u5f00\u542f DEBUG \u65e5\u5fd7"),(0,l.yg)("p",null,"FE \u7684 Debug \u7ea7\u522b\u65e5\u5fd7\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u5f00\u542f\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u754c\u9762\u6216 API \u5728\u8fd0\u884c\u65f6\u6253\u5f00\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u5f00\u542f"),(0,l.yg)("p",{parentName:"li"}," \u5728 fe.conf \u4e2d\u6dfb\u52a0\u914d\u7f6e\u9879 ",(0,l.yg)("inlineCode",{parentName:"p"},"sys_log_verbose_modules"),"\u3002\u4e3e\u4f8b\u5982\u4e0b\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"# \u4ec5\u5f00\u542f\u7c7b org.apache.doris.catalog.Catalog \u7684 Debug \u65e5\u5fd7\nsys_log_verbose_modules=org.apache.doris.catalog.Catalog\n\n# \u5f00\u542f\u5305 org.apache.doris.catalog \u4e0b\u6240\u6709\u7c7b\u7684 Debug \u65e5\u5fd7\nsys_log_verbose_modules=org.apache.doris.catalog\n\n# \u5f00\u542f\u5305 org \u4e0b\u6240\u6709\u7c7b\u7684 Debug \u65e5\u5fd7\nsys_log_verbose_modules=org\n")),(0,l.yg)("p",{parentName:"li"}," \u6dfb\u52a0\u914d\u7f6e\u9879\u5e76\u91cd\u542f FE \u8282\u70b9\uff0c\u5373\u53ef\u751f\u6548\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u901a\u8fc7 FE UI \u754c\u9762"),(0,l.yg)("p",{parentName:"li"}," \u901a\u8fc7 UI \u754c\u9762\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u4fee\u6539\u65e5\u5fd7\u7ea7\u522b\u3002\u65e0\u9700\u91cd\u542f FE \u8282\u70b9\u3002\u5728\u6d4f\u89c8\u5668\u6253\u5f00 FE \u8282\u70b9\u7684 http \u7aef\u53e3\uff08\u9ed8\u8ba4\u4e3a 8030\uff09\uff0c\u5e76\u767b\u9646 UI \u754c\u9762\u3002\u4e4b\u540e\u70b9\u51fb\u4e0a\u65b9\u5bfc\u822a\u680f\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"Log")," \u6807\u7b7e\u3002"),(0,l.yg)("p",{parentName:"li"}," ",(0,l.yg)("img",{src:a(870177).A,width:"956",height:"354"})),(0,l.yg)("p",{parentName:"li"}," \u6211\u4eec\u5728 Add \u8f93\u5165\u6846\u4e2d\u53ef\u4ee5\u8f93\u5165\u5305\u540d\u6216\u8005\u5177\u4f53\u7684\u7c7b\u540d\uff0c\u53ef\u4ee5\u6253\u5f00\u5bf9\u5e94\u7684 Debug \u65e5\u5fd7\u3002\u5982\u8f93\u5165 ",(0,l.yg)("inlineCode",{parentName:"p"},"org.apache.doris.catalog.Catalog")," \u5219\u53ef\u4ee5\u6253\u5f00 Catalog \u7c7b\u7684 Debug \u65e5\u5fd7\uff1a"),(0,l.yg)("p",{parentName:"li"}," ",(0,l.yg)("img",{src:a(921194).A,width:"958",height:"362"})),(0,l.yg)("p",{parentName:"li"}," \u4f60\u4e5f\u53ef\u4ee5\u5728 Delete \u8f93\u5165\u6846\u4e2d\u8f93\u5165\u5305\u540d\u6216\u8005\u5177\u4f53\u7684\u7c7b\u540d\uff0c\u6765\u5173\u95ed\u5bf9\u5e94\u7684 Debug \u65e5\u5fd7\u3002"),(0,l.yg)("p",{parentName:"li"}," :::note\n\u8fd9\u91cc\u7684\u4fee\u6539\u53ea\u4f1a\u5f71\u54cd\u5bf9\u5e94\u7684 FE \u8282\u70b9\u7684\u65e5\u5fd7\u7ea7\u522b\u3002\u4e0d\u4f1a\u5f71\u54cd\u5176\u4ed6 FE \u8282\u70b9\u7684\u65e5\u5fd7\u7ea7\u522b\u3002\n:::")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u901a\u8fc7 API \u4fee\u6539"),(0,l.yg)("p",{parentName:"li"}," \u901a\u8fc7\u4ee5\u4e0b API \u4e5f\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u4fee\u6539\u65e5\u5fd7\u7ea7\u522b\u3002\u65e0\u9700\u91cd\u542f FE \u8282\u70b9\u3002"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -uuser:passwd fe_host:http_port/rest/v1/log?add_verbose=org.apache.doris.catalog.Catalog\n")),(0,l.yg)("p",{parentName:"li"}," \u5176\u4e2d\u7528\u6237\u540d\u5bc6\u7801\u4e3a\u767b\u9646 Doris \u7684 root \u6216 admin \u7528\u6237\u3002",(0,l.yg)("inlineCode",{parentName:"p"},"add_verbose")," \u53c2\u6570\u6307\u5b9a\u8981\u5f00\u542f Debug \u65e5\u5fd7\u7684\u5305\u540d\u6216\u7c7b\u540d\u3002\u82e5\u6210\u529f\u5219\u8fd4\u56de\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "success", \n    "code": 0, \n    "data": {\n        "LogConfiguration": {\n            "VerboseNames": "org,org.apache.doris.catalog.Catalog", \n            "AuditNames": "slow_query,query,load", \n            "Level": "INFO"\n        }\n    }, \n    "count": 0\n}\n')),(0,l.yg)("p",{parentName:"li"}," \u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b API \u5173\u95ed Debug \u65e5\u5fd7\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -uuser:passwd fe_host:http_port/rest/v1/log?del_verbose=org.apache.doris.catalog.Catalog\n")),(0,l.yg)("p",{parentName:"li"}," ",(0,l.yg)("inlineCode",{parentName:"p"},"del_verbose")," \u53c2\u6570\u6307\u5b9a\u8981\u5173\u95ed Debug \u65e5\u5fd7\u7684\u5305\u540d\u6216\u7c7b\u540d\u3002"))),(0,l.yg)("h2",{id:"\u5bb9\u5668\u73af\u5883\u65e5\u5fd7\u914d\u7f6e"},"\u5bb9\u5668\u73af\u5883\u65e5\u5fd7\u914d\u7f6e"),(0,l.yg)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7\u5bb9\u5668\u73af\u5883\uff08\u5982 k8s\uff09\u90e8\u7f72 FE \u8fdb\u7a0b\u3002\u6240\u6709\u65e5\u5fd7\u9700\u8981\u901a\u8fc7\u6807\u51c6\u8f93\u51fa\u6d41\u800c\u4e0d\u662f\u6587\u4ef6\u8fdb\u884c\u8f93\u51fa\u3002"),(0,l.yg)("p",null,"\u6b64\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"sh bin/start_fe.sh --console")," \u547d\u4ee4\u524d\u53f0\u542f\u52a8 FE \u8fdb\u7a0b\uff0c\u5e76\u5c06\u6240\u6709\u65e5\u5fd7\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa\u6d41\u3002"),(0,l.yg)("p",null,"\u4e3a\u4e86\u5728\u540c\u4e00\u6807\u51c6\u8f93\u51fa\u6d41\u4e2d\u533a\u5206\u4e0d\u540c\u65e5\u5fd7\u7c7b\u578b\uff0c\u4f1a\u5728\u6bcf\u6761\u65e5\u5fd7\u524d\u6dfb\u52a0\u4e0d\u540c\u7684\u524d\u7f00\u4ee5\u793a\u533a\u5206\u3002\u5982\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"RuntimeLogger 2024-06-24 00:05:21,522 INFO (main|1) [DorisFE.start():158] Doris FE starting...\nRuntimeLogger 2024-06-24 00:05:21,530 INFO (main|1) [FrontendOptions.analyzePriorityCidrs():194] configured prior_cidrs value: 172.20.32.136/24\nRuntimeLogger 2024-06-24 00:05:21,535 INFO (main|1) [FrontendOptions.initAddrUseIp():101] local address: /172.20.32.136.\nRuntimeLogger 2024-06-24 00:05:21,740 INFO (main|1) [ConsistencyChecker.initWorkTime():106] consistency checker will work from 23:00 to 23:00\nRuntimeLogger 2024-06-24 00:05:21,889 ERROR (main|1) [Util.report():128] SLF4J: Class path contains multiple SLF4J bindings.\n")),(0,l.yg)("p",null,"\u4e0d\u540c\u7684\u524d\u7f00\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"StdoutLogger"),"\uff1a\u6807\u51c6\u8f93\u51fa\u6d41\u4e2d\u7684\u65e5\u5fd7\uff0c\u5bf9\u5e94 ",(0,l.yg)("inlineCode",{parentName:"li"},"fe.out")," \u4e2d\u7684\u5185\u5bb9\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"StderrLogger"),"\uff1a\u6807\u51c6\u9519\u8bef\u6d41\u4e2d\u7684\u65e5\u5fd7\uff0c\u5bf9\u5e94 ",(0,l.yg)("inlineCode",{parentName:"li"},"fe.out")," \u4e2d\u7684\u5185\u5bb9\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"RuntimeLogger"),"\uff1a\u5bf9\u5e94 ",(0,l.yg)("inlineCode",{parentName:"li"},"fe.log")," \u4e2d\u7684\u65e5\u5fd7\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"AuditLogger"),"\uff1a\u5bf9\u5e94 ",(0,l.yg)("inlineCode",{parentName:"li"},"fe.audit.log")," \u4e2d\u7684\u65e5\u5fd7\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u65e0\u524d\u7f00\uff1a\u5bf9\u5e94 ",(0,l.yg)("inlineCode",{parentName:"li"},"fe.gc.log")," \u4e2d\u7684\u65e5\u5fd7\u3002")),(0,l.yg)("p",null,"\u6b64\u5916\uff0c\u9488\u5bf9\u5bb9\u5668\u73af\u5883\u8fd8\u6709\u4e00\u4e2a\u989d\u5916\u914d\u7f6e\u53c2\u6570\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u53ef\u9009\u9879"),(0,l.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"enable_file_logger")),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"true, false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u6587\u4ef6\u65e5\u5fd7\u3002\u9ed8\u8ba4\u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),"\u3002\u5f53\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"td"},"--console")," \u547d\u4ee4\u542f\u52a8 FE \u8fdb\u7a0b\u65f6\uff0c\u65e5\u5fd7\u4f1a\u540c\u65f6\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa\u6d41\uff0c\u4ee5\u53ca\u6b63\u5e38\u7684\u65e5\u5fd7\u6587\u4ef6\u4e2d\u3002\u5f53\u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," \u65f6\uff0c\u65e5\u5fd7\u53ea\u4f1a\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa\u6d41\uff0c\u4e0d\u4f1a\u518d\u4ea7\u751f\u65e5\u5fd7\u6587\u4ef6")))))}y.isMDXComponent=!0},870177:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/fe_web_log1-160d3f6483c6ba534afcbc475367173d.png"},921194:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/fe_web_log2-b3b575c3553626afc751ec6efa2b15d5.png"}}]);