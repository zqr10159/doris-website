"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[525488],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(296540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=a.createContext({}),s=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(g.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=l,y=d["".concat(g,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},461827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(58168),l=(n(296540),n(15680));const r={title:"BE Log Management",language:"en"},o=void 0,i={unversionedId:"admin-manual/log-management/be-log",id:"version-2.1/admin-manual/log-management/be-log",title:"BE Log Management",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/log-management/be-log.md",sourceDirName:"admin-manual/log-management",slug:"/admin-manual/log-management/be-log",permalink:"/docs/2.1/admin-manual/log-management/be-log",draft:!1,tags:[],version:"2.1",frontMatter:{title:"BE Log Management",language:"en"},sidebar:"docs",previous:{title:"FE Log Management",permalink:"/docs/2.1/admin-manual/log-management/fe-log"},next:{title:"Monitor Metrics",permalink:"/docs/2.1/admin-manual/maint-monitor/monitor-metrics/metrics"}},g={},s=[{value:"Log Categories",id:"log-categories",level:2},{value:"Log Configuration",id:"log-configuration",level:2},{value:"Enable DEBUG Log",id:"enable-debug-log",level:2},{value:"Container Environment Log Configuration",id:"container-environment-log-configuration",level:2}],p={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,l.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"This document mainly introduces the log management of the Backend (BE) process."),(0,l.yg)("p",null,"This document is applicable to Doris versions 2.1.4 and later."),(0,l.yg)("h2",{id:"log-categories"},"Log Categories"),(0,l.yg)("p",null,"When starting the BE process using ",(0,l.yg)("inlineCode",{parentName:"p"},"sh bin/start_be.sh --daemon"),", the following types of log files will be generated in the BE log directory:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"be.INFO"),(0,l.yg)("p",{parentName:"li"},"BE process running log. The main log file for BE. All levels of BE process running logs (DEBUG, INFO, WARN, ERROR, etc.) will be printed to this log file."),(0,l.yg)("p",{parentName:"li"},"Note that this file is a symbolic link pointing to the current latest BE running log file.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"be.WARNING"),(0,l.yg)("p",{parentName:"li"},"BE process running log. However, only WARN level and above running logs will be printed. The content in be.WARNING is a subset of the be.INFO log content. It is mainly used for quickly viewing warning or error level logs."),(0,l.yg)("p",{parentName:"li"},"Note that this file is a symbolic link pointing to the current latest BE warning log file.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"be.out"),(0,l.yg)("p",{parentName:"li"},"Used to receive standard output streams and error data streams. For example, output from ",(0,l.yg)("inlineCode",{parentName:"p"},"echo")," commands in start scripts, or other log information not captured by the glog framework. Usually used as a supplement to running logs."),(0,l.yg)("p",{parentName:"li"},"Typically, in the event of a BE crash, you need to check this log to obtain the stack trace of the exception.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"jni.log"),(0,l.yg)("p",{parentName:"li"},"Logs printed by Java programs when the BE process calls Java programs through JNI."),(0,l.yg)("p",{parentName:"li"},"TODO: In future versions, this part of the logs will be unified into the be.INFO log.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"be.gc.log"),(0,l.yg)("p",{parentName:"li"},"BE JVM's GC log. The behavior of this log is controlled by the JVM startup option ",(0,l.yg)("inlineCode",{parentName:"p"},"JAVA_OPTS")," in be.conf."))),(0,l.yg)("h2",{id:"log-configuration"},"Log Configuration"),(0,l.yg)("p",null,"Includes configuring log storage paths, retention time, retention count, size, etc."),(0,l.yg)("p",null,"The following configuration items are configured in the ",(0,l.yg)("inlineCode",{parentName:"p"},"be.conf")," file."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Configuration Item"),(0,l.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,l.yg)("th",{parentName:"tr",align:null},"Options"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"LOG_DIR")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ENV(DORIS_HOME)/log")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Storage path for all logs. By default, it is the ",(0,l.yg)("inlineCode",{parentName:"td"},"log/")," directory under the BE deployment path. Note that this is an environment variable, and the configuration name needs to be in uppercase.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_level")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"INFO")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"INFO"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"WARNING"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"ERROR"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"FATAL")),(0,l.yg)("td",{parentName:"tr",align:null},"Log level for ",(0,l.yg)("inlineCode",{parentName:"td"},"be.INFO"),". Default is INFO. Not recommended to change, as INFO level contains many critical log information.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_roll_num")),(0,l.yg)("td",{parentName:"tr",align:null},"10"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Controls the maximum number of files for ",(0,l.yg)("inlineCode",{parentName:"td"},"be.INFO")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"be.WARNING"),". Default is 10. When the number of log files exceeds this threshold due to log rolling or splitting, older log files will be deleted.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_verbose_modules")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},'Can set specific code directories to enable DEBUG level logs. See the "Enable DEBUG Logs" section for details.')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_verbose_level")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},'See the "Enable DEBUG Logs" section for details.')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_verbose_flags_v")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},'See the "Enable DEBUG Logs" section for details.')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"sys_log_roll_mode")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"SIZE-MB-1024")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"TIME-DAY"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"TIME-HOUR"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"SIZE-MB-nnn")),(0,l.yg)("td",{parentName:"tr",align:null},"Rolling strategy for ",(0,l.yg)("inlineCode",{parentName:"td"},"be.INFO")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"be.WARNING")," logs. Default is ",(0,l.yg)("inlineCode",{parentName:"td"},"SIZE-MB-1024"),", meaning a new log file is generated after each log reaches 1024MB in size. Can also set to roll by day or hour.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"log_buffer_level")),(0,l.yg)("td",{parentName:"tr",align:null},"Empty"),(0,l.yg)("td",{parentName:"tr",align:null},"Empty or ",(0,l.yg)("inlineCode",{parentName:"td"},"-1")),(0,l.yg)("td",{parentName:"tr",align:null},"BE log output mode. By default, BE logs are asynchronously flushed to disk log files. If set to -1, log content will be flushed in real-time. Real-time flushing affects log performance but can retain the latest logs as much as possible. This allows viewing the last log information in the event of a BE crash.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"disable_compaction_trace_log")),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"true, false"),(0,l.yg)("td",{parentName:"tr",align:null},"Default is true, meaning tracing logs for compaction operations are disabled. If set to false, tracing logs related to Compaction operations will be printed for troubleshooting.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"aws_log_level")),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Controls the log level for the AWS SDK. Default is 0, indicating AWS SDK logs are turned off. By default, AWS SDK logs are actively captured by glog and will be printed normally. In some cases, you may need to enable AWS SDK logs to view more uncaptured logs. Different numbers represent different log levels: Off = 0, Fatal = 1, Error = 2, Warn = 3, Info = 4, Debug = 5, Trace = 6.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"s3_file_writer_log_interval_second")),(0,l.yg)("td",{parentName:"tr",align:null},"60"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"When performing S3 Upload operations, the progress of operations is printed every 60 seconds by default.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"enable_debug_log_timeout_secs")),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"When the value is greater than 0, some detailed execution logs of the pipeline execution engine will be printed. Mainly used for troubleshooting. By default, this is turned off.")))),(0,l.yg)("h2",{id:"enable-debug-log"},"Enable DEBUG Log"),(0,l.yg)("p",null,"BE's Debug log currently only supports modification through configuration files and restarting the BE node to take effect."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"sys_log_verbose_modules=plan_fragment_executor,olap_scan_node\nsys_log_verbose_level=3\n")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"sys_log_verbose_modules")," specifies the file names to be enabled, and wildcards (*) can be used. For example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"sys_log_verbose_modules=*\n")),(0,l.yg)("p",null,"indicates enabling all DEBUG logs."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"sys_log_verbose_level")," indicates the level of DEBUG. The larger the number, the more detailed the DEBUG log. The value range is from 1 to 10."),(0,l.yg)("h2",{id:"container-environment-log-configuration"},"Container Environment Log Configuration"),(0,l.yg)("p",null,"In some cases, the FE process is deployed through container environments (such as k8s). All logs need to be output through standard output streams instead of files."),(0,l.yg)("p",null,"At this time, you can start the BE process in the foreground and output all logs to the standard output stream by using the command ",(0,l.yg)("inlineCode",{parentName:"p"},"sh bin/start_be.sh --console"),"."),(0,l.yg)("p",null,"To distinguish different types of logs in the same standard output stream, a different prefix will be added before each log. For example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"RuntimeLogger W20240624 00:36:46.325274 1460943 olap_server.cpp:710] Have not get FE Master heartbeat yet\nRuntimeLogger I20240624 00:36:46.325999 1459644 olap_server.cpp:208] tablet checkpoint tasks producer thread started\nRuntimeLogger I20240624 00:36:46.326066 1460954 olap_server.cpp:448] begin to produce tablet meta checkpoint tasks.\nRuntimeLogger I20240624 00:36:46.326093 1459644 olap_server.cpp:213] tablet path check thread started\nRuntimeLogger I20240624 00:36:46.326190 1459644 olap_server.cpp:219] cache clean thread started\nRuntimeLogger I20240624 00:36:46.326336 1459644 olap_server.cpp:231] path gc threads started. number:1\nRuntimeLogger I20240624 00:36:46.326643 1460958 olap_server.cpp:424] try to start path gc thread!\n")),(0,l.yg)("p",null,"The meanings of different prefixes are as follows:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"RuntimeLogger"),": corresponds to the logs in ",(0,l.yg)("inlineCode",{parentName:"li"},"fe.log"),".")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Support for ",(0,l.yg)("inlineCode",{parentName:"p"},"jni.log")," will be added in future versions.")),(0,l.yg)("p",null,"In addition, there is an additional configuration parameter for container environments:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Configuration Item"),(0,l.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,l.yg)("th",{parentName:"tr",align:null},"Options"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"enable_file_logger")),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"true, false"),(0,l.yg)("td",{parentName:"tr",align:null},"Whether to enable file logging. The default is ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),". When starting the BE process with the ",(0,l.yg)("inlineCode",{parentName:"td"},"--console")," command, logs will be output to both the standard output stream and the normal log file. When set to ",(0,l.yg)("inlineCode",{parentName:"td"},"false"),", logs will only be output to the standard output stream and will not generate log files.")))))}m.isMDXComponent=!0}}]);