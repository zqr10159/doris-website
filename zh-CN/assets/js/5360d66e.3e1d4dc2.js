"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[547636],{15680:(e,a,r)=>{r.d(a,{xA:()=>d,yg:()=>u});var n=r(296540);function c(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){c(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function m(e,a){if(null==e)return{};var r,n,c=function(e,a){if(null==e)return{};var r,n,c={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||(c[r]=e[r]);return c}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),o=function(e){var a=n.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},d=function(e){var a=o(e.components);return n.createElement(l.Provider,{value:a},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var r=e.components,c=e.mdxType,t=e.originalType,l=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),s=o(r),p=c,u=s["".concat(l,".").concat(p)]||s[p]||y[p]||t;return r?n.createElement(u,i(i({ref:a},d),{},{components:r})):n.createElement(u,i({ref:a},d))}));function u(e,a){var r=arguments,c=a&&a.mdxType;if("string"==typeof e||c){var t=r.length,i=new Array(t);i[0]=p;var m={};for(var l in a)hasOwnProperty.call(a,l)&&(m[l]=a[l]);m.originalType=e,m[s]="string"==typeof e?e:c,i[1]=m;for(var o=2;o<t;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},447809:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>t,metadata:()=>m,toc:()=>o});var n=r(58168),c=(r(296540),r(15680));const t={title:"\u5185\u5b58\u8d85\u9650\u9519\u8bef\u5206\u6790",language:"zh-CN"},i=void 0,m={unversionedId:"admin-manual/memory-management/memory-limit-exceeded-analysis",id:"version-2.1/admin-manual/memory-management/memory-limit-exceeded-analysis",title:"\u5185\u5b58\u8d85\u9650\u9519\u8bef\u5206\u6790",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/memory-management/memory-limit-exceeded-analysis.md",sourceDirName:"admin-manual/memory-management",slug:"/admin-manual/memory-management/memory-limit-exceeded-analysis",permalink:"/zh-CN/docs/2.1/admin-manual/memory-management/memory-limit-exceeded-analysis",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u5185\u5b58\u8d85\u9650\u9519\u8bef\u5206\u6790",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5185\u5b58\u8ddf\u8e2a\u5668",permalink:"/zh-CN/docs/2.1/admin-manual/memory-management/memory-tracker"},next:{title:"BE OOM \u5206\u6790",permalink:"/zh-CN/docs/2.1/admin-manual/memory-management/be-oom-analysis"}},l={},o=[{value:"\u8fdb\u7a0b\u5185\u5b58\u8d85\u9650 OR \u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u4e0d\u8db3",id:"\u8fdb\u7a0b\u5185\u5b58\u8d85\u9650-or-\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u4e0d\u8db3",level:2},{value:"\u9519\u8bef\u4fe1\u606f\u5206\u6790",id:"\u9519\u8bef\u4fe1\u606f\u5206\u6790",level:3},{value:"\u65e5\u5fd7\u5206\u6790",id:"\u65e5\u5fd7\u5206\u6790",level:3},{value:"\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u8ba1\u7b97",id:"\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u8ba1\u7b97",level:3},{value:"\u67e5\u8be2\u6216\u5bfc\u5165\u5355\u6b21\u6267\u884c\u5185\u5b58\u8d85\u9650",id:"\u67e5\u8be2\u6216\u5bfc\u5165\u5355\u6b21\u6267\u884c\u5185\u5b58\u8d85\u9650",level:2},{value:"\u9519\u8bef\u4fe1\u606f\u5206\u6790",id:"\u9519\u8bef\u4fe1\u606f\u5206\u6790-1",level:3},{value:"\u65e5\u5fd7\u5206\u6790",id:"\u65e5\u5fd7\u5206\u6790-1",level:3}],d={toc:o},s="wrapper";function y(e){let{components:a,...r}=e;return(0,c.yg)(s,(0,n.A)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,c.yg)("h1",{id:"\u5185\u5b58\u8d85\u9650\u9519\u8bef\u5206\u6790"},"\u5185\u5b58\u8d85\u9650\u9519\u8bef\u5206\u6790"),(0,c.yg)("version",{since:"1.2.0"},(0,c.yg)("p",null,"\u5f53\u67e5\u8be2\u6216\u5bfc\u5165\u62a5\u9519",(0,c.yg)("inlineCode",{parentName:"p"},"Memory limit exceeded"),"\u65f6\uff0c\u53ef\u80fd\u7684\u539f\u56e0\uff1a\u8fdb\u7a0b\u5185\u5b58\u8d85\u9650\u3001\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u4e0d\u8db3\u3001\u8d85\u8fc7\u5355\u6b21\u67e5\u8be2\u6267\u884c\u7684\u5185\u5b58\u4e0a\u9650\u3002"),(0,c.yg)("pre",null,(0,c.yg)("code",{parentName:"pre"},"ERROR 1105 (HY000): errCode = 2, detailMessage = Memory limit exceeded:<consuming tracker:<xxx>, xxx. backend 172.1.1.1 process memory used xxx GB, limit xxx GB. If query tracker exceed, `set exec_mem_limit=8G` to change limit, details mem usage see be.INFO.\n")),(0,c.yg)("h2",{id:"\u8fdb\u7a0b\u5185\u5b58\u8d85\u9650-or-\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u4e0d\u8db3"},"\u8fdb\u7a0b\u5185\u5b58\u8d85\u9650 OR \u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u4e0d\u8db3"),(0,c.yg)("p",null,"\u5f53\u8fd4\u56de\u5982\u4e0b\u62a5\u9519\u65f6\uff0c\u8bf4\u660e\u8fdb\u7a0b\u5185\u5b58\u8d85\u9650\uff0c\u6216\u8005\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u4e0d\u8db3\uff0c\u5177\u4f53\u539f\u56e0\u770b\u5185\u5b58\u7edf\u8ba1\u503c\u3002"),(0,c.yg)("pre",null,(0,c.yg)("code",{parentName:"pre"},"ERROR 1105 (HY000): errCode = 2, detailMessage = Memory limit exceeded:<consuming tracker:<Query#Id=3c88608cf35c461d-95fe88969aa6fc30>, process memory used 2.68 GB exceed limit 2.47 GB or sys mem available 50.95 GB less than low water mark 3.20 GB, failed alloc size 2.00 MB>, executing msg:<execute:<ExecNode:VAGGREGATION_NODE (id=7)>>. backend 172.1.1.1 process memory used 2.68 GB, limit 2.47 GB. If query tracker exceed, `set exec_mem_limit=8G` to change limit, details mem usage see be.INFO\n")),(0,c.yg)("h3",{id:"\u9519\u8bef\u4fe1\u606f\u5206\u6790"},"\u9519\u8bef\u4fe1\u606f\u5206\u6790"),(0,c.yg)("p",null,"\u9519\u8bef\u4fe1\u606f\u5206\u4e3a\u4e09\u90e8\u5206\uff1a\n1\u3001",(0,c.yg)("inlineCode",{parentName:"p"},"Memory limit exceeded:<consuming tracker:<Query#Id=3c88608cf35c461d-95fe88969aa6fc30>"),"\uff1a\u5f53\u524d\u6b63\u5728\u6267\u884cquery ",(0,c.yg)("inlineCode",{parentName:"p"},"3c88608cf35c461d-95fe88969aa6fc30"),"\u7684\u5185\u5b58\u7533\u8bf7\u8fc7\u7a0b\u4e2d\u53d1\u73b0\u5185\u5b58\u8d85\u9650\u3002\n2\u3001",(0,c.yg)("inlineCode",{parentName:"p"},"process memory used 2.68 GB exceed limit 2.47 GB or sys mem available 50.95 GB less than low water mark 3.20 GB, failed alloc size 2.00 MB"),"\uff1a\u8d85\u9650\u7684\u539f\u56e0\u662f BE \u8fdb\u7a0b\u4f7f\u7528\u7684\u5185\u5b58 2.68GB \u8d85\u8fc7\u4e86 2.47GB \u7684limit\uff0climit\u7684\u503c\u6765\u81ea be.conf \u4e2d\u7684 mem_limit * system MemTotal\uff0c\u9ed8\u8ba4\u7b49\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u603b\u5185\u5b58\u768480%\uff0c\u5f53\u524d\u64cd\u4f5c\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58 50.95 GB \u4ecd\u9ad8\u4e8e\u6700\u4f4e\u6c34\u4f4d 3.2GB\uff0c\u672c\u6b21\u5c1d\u8bd5\u7533\u8bf7 2MB \u7684\u5185\u5b58\u3002\n3\u3001",(0,c.yg)("inlineCode",{parentName:"p"},"executing msg:<execute:<ExecNode:VAGGREGATION_NODE (id=7)>>, backend 172.24.47.117 process memory used 2.68 GB, limit 2.47 GB"),"\uff1a\u672c\u6b21\u5185\u5b58\u7533\u8bf7\u7684\u4f4d\u7f6e\u662f",(0,c.yg)("inlineCode",{parentName:"p"},"ExecNode:VAGGREGATION_NODE (id=7)>"),"\uff0c\u5f53\u524dBE\u8282\u70b9\u7684IP\u662f 172.1.1.1\uff0c\u4ee5\u53ca\u518d\u6b21\u6253\u5370BE\u8282\u70b9\u7684\u5185\u5b58\u7edf\u8ba1\u3002"),(0,c.yg)("h3",{id:"\u65e5\u5fd7\u5206\u6790"},"\u65e5\u5fd7\u5206\u6790"),(0,c.yg)("p",null,"\u540c\u65f6\u53ef\u4ee5\u5728 log/be.INFO \u4e2d\u627e\u5230\u5982\u4e0b\u65e5\u5fd7\uff0c\u786e\u8ba4\u5f53\u524d\u8fdb\u7a0b\u5185\u5b58\u4f7f\u7528\u662f\u5426\u7b26\u5408\u9884\u671f\uff0c\u65e5\u5fd7\u540c\u6837\u5206\u4e3a\u4e09\u90e8\u5206\uff1a\n1\u3001",(0,c.yg)("inlineCode",{parentName:"p"},"Process Memory Summary"),"\uff1a\u8fdb\u7a0b\u5185\u5b58\u7edf\u8ba1\u3002\n2\u3001",(0,c.yg)("inlineCode",{parentName:"p"},"Alloc Stacktrace"),"\uff1a\u89e6\u53d1\u5185\u5b58\u8d85\u9650\u68c0\u6d4b\u7684\u6808\uff0c\u8fd9\u4e0d\u4e00\u5b9a\u662f\u5927\u5185\u5b58\u7533\u8bf7\u7684\u4f4d\u7f6e\u3002\n3\u3001",(0,c.yg)("inlineCode",{parentName:"p"},"Memory Tracker Summary"),"\uff1a\u8fdb\u7a0b memory tracker \u7edf\u8ba1\uff0c\u53c2\u8003 ",(0,c.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1/admin-manual/memory-management/memory-tracker"},"Memory Tracker")," \u5206\u6790\u4f7f\u7528\u5185\u5b58\u7684\u4f4d\u7f6e\u3002\n\u6ce8\u610f\uff1a\n1\u3001\u8fdb\u7a0b\u5185\u5b58\u8d85\u9650\u65e5\u5fd7\u7684\u6253\u5370\u95f4\u9694\u662f1s\uff0c\u8fdb\u7a0b\u5185\u5b58\u8d85\u9650\u540e\uff0cBE\u5927\u591a\u6570\u4f4d\u7f6e\u7684\u5185\u5b58\u7533\u8bf7\u90fd\u4f1a\u611f\u77e5\uff0c\u5e76\u5c1d\u8bd5\u505a\u51fa\u9884\u5b9a\u7684\u56de\u8c03\u65b9\u6cd5\uff0c\u5e76\u6253\u5370\u8fdb\u7a0b\u5185\u5b58\u8d85\u9650\u65e5\u5fd7\uff0c\u6240\u4ee5\u5982\u679c\u65e5\u5fd7\u4e2d Try Alloc \u7684\u503c\u5f88\u5c0f\uff0c\u5219\u65e0\u987b\u5173\u6ce8",(0,c.yg)("inlineCode",{parentName:"p"},"Alloc Stacktrace"),"\uff0c\u76f4\u63a5\u5206\u6790",(0,c.yg)("inlineCode",{parentName:"p"},"Memory Tracker Summary"),"\u5373\u53ef\u3002\n2\u3001\u5f53\u8fdb\u7a0b\u5185\u5b58\u8d85\u9650\u540e\uff0cBE\u4f1a\u89e6\u53d1\u5185\u5b58GC\u3002"),(0,c.yg)("pre",null,(0,c.yg)("code",{parentName:"pre"},"W1127 17:23:16.372572 19896 mem_tracker_limiter.cpp:214] System Mem Exceed Limit Check Failed, Try Alloc: 1062688\nProcess Memory Summary:\n    process memory used 2.68 GB limit 2.47 GB, sys mem available 50.95 GB min reserve 3.20 GB, tc/jemalloc allocator cache 51.97 MB\nAlloc Stacktrace:\n    @          0x50028e8  doris::MemTrackerLimiter::try_consume()\n    @          0x50027c1  doris::ThreadMemTrackerMgr::flush_untracked_mem<>()\n    @          0x595f234  malloc\n    @          0xb888c18  operator new()\n    @          0x8f316a2  google::LogMessage::Init()\n    @          0x5813fef  doris::FragmentExecState::coordinator_callback()\n    @          0x58383dc  doris::PlanFragmentExecutor::send_report()\n    @          0x5837ea8  doris::PlanFragmentExecutor::update_status()\n    @          0x58355b0  doris::PlanFragmentExecutor::open()\n    @          0x5815244  doris::FragmentExecState::execute()\n    @          0x5817965  doris::FragmentMgr::_exec_actual()\n    @          0x581fffb  std::_Function_handler<>::_M_invoke()\n    @          0x5a6f2c1  doris::ThreadPool::dispatch_thread()\n    @          0x5a6843f  doris::Thread::supervise_thread()\n    @     0x7feb54f931ca  start_thread\n    @     0x7feb5576add3  __GI___clone\n    @              (nil)  (unknown)\n\nMemory Tracker Summary:\n    Type=consistency, Used=0(0 B), Peak=0(0 B)\n    Type=batch_load, Used=0(0 B), Peak=0(0 B)\n    Type=clone, Used=0(0 B), Peak=0(0 B)\n    Type=schema_change, Used=0(0 B), Peak=0(0 B)\n    Type=compaction, Used=0(0 B), Peak=0(0 B)\n    Type=load, Used=0(0 B), Peak=0(0 B)\n    Type=query, Used=206.67 MB(216708729 B), Peak=565.26 MB(592723181 B)\n    Type=global, Used=930.42 MB(975614571 B), Peak=1017.42 MB(1066840223 B)\n    Type=tc/jemalloc_cache, Used=51.97 MB(54494616 B), Peak=-1.00 B(-1 B)\n    Type=process, Used=1.16 GB(1246817916 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=Orphan, Type=global, Limit=-1.00 B(-1 B), Used=474.20 MB(497233597 B), Peak=649.18 MB(680718208 B)\n    MemTracker Label=BufferAllocator, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=LoadChannelMgr, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=StorageEngine, Parent Label=Orphan, Used=320.56 MB(336132488 B), Peak=322.56 MB(338229824 B)\n    MemTracker Label=SegCompaction, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=SegmentMeta, Parent Label=Orphan, Used=948.64 KB(971404 B), Peak=943.64 KB(966285 B)\n    MemTracker Label=TabletManager, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DataPageCache, Type=global, Limit=-1.00 B(-1 B), Used=455.22 MB(477329882 B), Peak=454.18 MB(476244180 B)\n    MemTrackerLimiter Label=IndexPageCache, Type=global, Limit=-1.00 B(-1 B), Used=1.00 MB(1051092 B), Peak=0(0 B)\n    MemTrackerLimiter Label=SegmentCache, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DiskIO, Type=global, Limit=2.47 GB(2655423201 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=ChunkAllocator, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=LastSuccessChannelCache, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DeleteBitmap AggCache, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n")),(0,c.yg)("h3",{id:"\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u8ba1\u7b97"},"\u7cfb\u7edf\u5269\u4f59\u53ef\u7528\u5185\u5b58\u8ba1\u7b97"),(0,c.yg)("p",null,"\u5f53\u9519\u8bef\u4fe1\u606f\u4e2d\u7cfb\u7edf\u53ef\u7528\u5185\u5b58\u5c0f\u4e8e\u4f4e\u6c34\u4f4d\u7ebf\u65f6\uff0c\u540c\u6837\u5f53\u4f5c\u8fdb\u7a0b\u5185\u5b58\u8d85\u9650\u5904\u7406\uff0c\u5176\u4e2d\u7cfb\u7edf\u53ef\u7528\u5185\u5b58\u7684\u503c\u6765\u81ea\u4e8e",(0,c.yg)("inlineCode",{parentName:"p"},"/proc/meminfo"),"\u4e2d\u7684",(0,c.yg)("inlineCode",{parentName:"p"},"MemAvailable"),"\uff0c\u5f53",(0,c.yg)("inlineCode",{parentName:"p"},"MemAvailable"),"\u4e0d\u8db3\u65f6\u7ee7\u7eed\u5185\u5b58\u7533\u8bf7\u53ef\u80fd\u8fd4\u56de std::bad_alloc \u6216\u8005\u5bfc\u81f4BE\u8fdb\u7a0bOOM\uff0c\u56e0\u4e3a\u5237\u65b0\u8fdb\u7a0b\u5185\u5b58\u7edf\u8ba1\u548cBE\u5185\u5b58GC\u90fd\u5177\u6709\u4e00\u5b9a\u7684\u6ede\u540e\u6027\uff0c\u6240\u4ee5\u9884\u7559\u5c0f\u90e8\u5206\u5185\u5b58buffer\u4f5c\u4e3a\u4f4e\u6c34\u4f4d\u7ebf\uff0c\u5c3d\u53ef\u80fd\u907f\u514dOOM\u3002"),(0,c.yg)("p",null,"\u5176\u4e2d",(0,c.yg)("inlineCode",{parentName:"p"},"MemAvailable"),"\u662f\u64cd\u4f5c\u7cfb\u7edf\u7efc\u5408\u8003\u8651\u5f53\u524d\u7a7a\u95f2\u7684\u5185\u5b58\u3001buffer\u3001cache\u3001\u5185\u5b58\u788e\u7247\u7b49\u56e0\u7d20\u7ed9\u51fa\u7684\u4e00\u4e2a\u5728\u5c3d\u53ef\u80fd\u4e0d\u89e6\u53d1swap\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u63d0\u4f9b\u7ed9\u7528\u6237\u8fdb\u7a0b\u4f7f\u7528\u7684\u5185\u5b58\u603b\u91cf\uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u8ba1\u7b97\u516c\u5f0f: MemAvailable = MemFree - LowWaterMark + (PageCache - min(PageCache / 2, LowWaterMark))\uff0c\u548c cmd ",(0,c.yg)("inlineCode",{parentName:"p"},"free"),"\u770b\u5230\u7684",(0,c.yg)("inlineCode",{parentName:"p"},"available"),"\u503c\u76f8\u540c\uff0c\u5177\u4f53\u53ef\u53c2\u8003\uff1a\n",(0,c.yg)("a",{parentName:"p",href:"https://serverfault.com/questions/940196/why-is-memavailable-a-lot-less-than-memfreebufferscached"},"https://serverfault.com/questions/940196/why-is-memavailable-a-lot-less-than-memfreebufferscached"),"\n",(0,c.yg)("a",{parentName:"p",href:"https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=34e431b0ae398fc54ea69ff85ec700722c9da773"},"https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=34e431b0ae398fc54ea69ff85ec700722c9da773")),(0,c.yg)("p",null,"\u4f4e\u6c34\u4f4d\u7ebf\u9ed8\u8ba4\u6700\u59271.6G\uff0c\u6839\u636e",(0,c.yg)("inlineCode",{parentName:"p"},"MemTotal"),"\u3001",(0,c.yg)("inlineCode",{parentName:"p"},"vm/min_free_kbytes"),"\u3001",(0,c.yg)("inlineCode",{parentName:"p"},"confg::mem_limit"),"\u3001",(0,c.yg)("inlineCode",{parentName:"p"},"config::max_sys_mem_available_low_water_mark_bytes"),"\u5171\u540c\u7b97\u51fa\uff0c\u5e76\u907f\u514d\u6d6a\u8d39\u8fc7\u591a\u5185\u5b58\u3002\u5176\u4e2d",(0,c.yg)("inlineCode",{parentName:"p"},"MemTotal"),"\u662f\u7cfb\u7edf\u603b\u5185\u5b58\uff0c\u53d6\u503c\u540c\u6837\u6765\u81ea",(0,c.yg)("inlineCode",{parentName:"p"},"/proc/meminfo"),"\uff1b",(0,c.yg)("inlineCode",{parentName:"p"},"vm/min_free_kbytes"),"\u662f\u64cd\u4f5c\u7cfb\u7edf\u7ed9\u5185\u5b58GC\u8fc7\u7a0b\u9884\u7559\u7684buffer\uff0c\u53d6\u503c\u901a\u5e38\u5728 0.4% \u5230 5% \u4e4b\u95f4\uff0c\u67d0\u4e9b\u4e91\u670d\u52a1\u5668\u4e0a",(0,c.yg)("inlineCode",{parentName:"p"},"vm/min_free_kbytes"),"\u53ef\u80fd\u4e3a5%\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u76f4\u89c2\u4e0a\u7cfb\u7edf\u53ef\u7528\u5185\u5b58\u6bd4\u771f\u5b9e\u503c\u5c11\uff1b\u8c03\u5927",(0,c.yg)("inlineCode",{parentName:"p"},"config::max_sys_mem_available_low_water_mark_bytes"),"\u5c06\u5728\u5927\u4e8e16G\u5185\u5b58\u7684\u673a\u5668\u4e0a\uff0c\u4e3aFull GC\u9884\u7559\u66f4\u591a\u7684\u5185\u5b58buffer\uff0c\u53cd\u4e4b\u8c03\u5c0f\u5c06\u5c3d\u53ef\u80fd\u5145\u5206\u4f7f\u7528\u5185\u5b58\u3002"),(0,c.yg)("h2",{id:"\u67e5\u8be2\u6216\u5bfc\u5165\u5355\u6b21\u6267\u884c\u5185\u5b58\u8d85\u9650"},"\u67e5\u8be2\u6216\u5bfc\u5165\u5355\u6b21\u6267\u884c\u5185\u5b58\u8d85\u9650"),(0,c.yg)("p",null,"\u5f53\u8fd4\u56de\u5982\u4e0b\u62a5\u9519\u65f6\uff0c\u8bf4\u660e\u8d85\u8fc7\u5355\u6b21\u6267\u884c\u5185\u5b58\u9650\u5236\u3002"),(0,c.yg)("pre",null,(0,c.yg)("code",{parentName:"pre"},"ERROR 1105 (HY000): errCode = 2, detailMessage = Memory limit exceeded:<consuming tracker:<Query#Id=f78208b15e064527-a84c5c0b04c04fcf>, failed alloc size 1.03 MB, exceeded tracker:<Query#Id=f78208b15e064527-a84c5c0b04c04fcf>, limit 100.00 MB, peak used 99.29 MB, current used 99.25 MB>, executing msg:<execute:<ExecNode:VHASH_JOIN_NODE (id=4)>>. backend 172.24.47.117 process memory used 1.13 GB, limit 98.92 GB. If query tracker exceed, `set exec_mem_limit=8G` to change limit, details mem usage see log/be.INFO.\n")),(0,c.yg)("h3",{id:"\u9519\u8bef\u4fe1\u606f\u5206\u6790-1"},"\u9519\u8bef\u4fe1\u606f\u5206\u6790"),(0,c.yg)("p",null,"\u9519\u8bef\u4fe1\u606f\u5206\u4e3a\u4e09\u90e8\u5206\uff1a\n1\u3001",(0,c.yg)("inlineCode",{parentName:"p"},"Memory limit exceeded:<consuming tracker:<Query#Id=f78208b15e064527-a84c5c0b04c04fcf>"),"\uff1a\u5f53\u524d\u6b63\u5728\u6267\u884cquery ",(0,c.yg)("inlineCode",{parentName:"p"},"f78208b15e064527-a84c5c0b04c04fcf"),"\u7684\u5185\u5b58\u7533\u8bf7\u8fc7\u7a0b\u4e2d\u53d1\u73b0\u5185\u5b58\u8d85\u9650\u3002\n2\u3001",(0,c.yg)("inlineCode",{parentName:"p"},"failed alloc size 1.03 MB, exceeded tracker:<Query#Id=f78208b15e064527-a84c5c0b04c04fcf>, limit 100.00 MB, peak used 99.29 MB, current used 99.25 MB"),"\uff1a\u672c\u6b21\u5c1d\u8bd5\u7533\u8bf7 1.03MB \u7684\u5185\u5b58\uff0c\u4f46\u6b64\u65f6query ",(0,c.yg)("inlineCode",{parentName:"p"},"f78208b15e064527-a84c5c0b04c04fcf")," memory tracker \u7684\u5f53\u524d consumption \u4e3a 99.28MB \u52a0\u4e0a 1.03MB \u540e\u8d85\u8fc7\u4e86 100MB \u7684limit\uff0climit\u7684\u503c\u6765\u81ea session variables \u4e2d\u7684 ",(0,c.yg)("inlineCode",{parentName:"p"},"exec_mem_limit"),"\uff0c\u9ed8\u8ba44G\u3002\n3\u3001",(0,c.yg)("inlineCode",{parentName:"p"},"executing msg:<execute:<ExecNode:VHASH_JOIN_NODE (id=4)>>. backend 172.24.47.117 process memory used 1.13 GB, limit 98.92 GB. If query tracker exceed, "),"set exec_mem_limit=8G",(0,c.yg)("inlineCode",{parentName:"p"}," to change limit, details mem usage see be.INFO."),"\uff1a\u672c\u6b21\u5185\u5b58\u7533\u8bf7\u7684\u4f4d\u7f6e\u662f",(0,c.yg)("inlineCode",{parentName:"p"},"VHASH_JOIN_NODE (id=4)"),"\uff0c\u5e76\u63d0\u793a\u53ef\u901a\u8fc7 ",(0,c.yg)("inlineCode",{parentName:"p"},"set exec_mem_limit")," \u6765\u8c03\u9ad8\u5355\u6b21\u67e5\u8be2\u7684\u5185\u5b58\u4e0a\u9650\u3002"),(0,c.yg)("h3",{id:"\u65e5\u5fd7\u5206\u6790-1"},"\u65e5\u5fd7\u5206\u6790"),(0,c.yg)("p",null,(0,c.yg)("inlineCode",{parentName:"p"},"set global enable_profile=true"),"\u540e\uff0c\u53ef\u4ee5\u5728\u5355\u6b21\u67e5\u8be2\u5185\u5b58\u8d85\u9650\u65f6\uff0c\u5728 log/be.INFO \u4e2d\u6253\u5370\u65e5\u5fd7\uff0c\u7528\u4e8e\u786e\u8ba4\u5f53\u524d\u67e5\u8be2\u5185\u5b58\u4f7f\u7528\u662f\u5426\u7b26\u5408\u9884\u671f\u3002\n\u540c\u65f6\u53ef\u4ee5\u5728 log/be.INFO \u4e2d\u627e\u5230\u5982\u4e0b\u65e5\u5fd7\uff0c\u786e\u8ba4\u5f53\u524d\u67e5\u8be2\u5185\u5b58\u4f7f\u7528\u662f\u5426\u7b26\u5408\u9884\u671f\uff0c\u65e5\u5fd7\u540c\u6837\u5206\u4e3a\u4e09\u90e8\u5206\uff1a\n1\u3001",(0,c.yg)("inlineCode",{parentName:"p"},"Process Memory Summary"),"\uff1a\u8fdb\u7a0b\u5185\u5b58\u7edf\u8ba1\u3002\n2\u3001",(0,c.yg)("inlineCode",{parentName:"p"},"Alloc Stacktrace"),"\uff1a\u89e6\u53d1\u5185\u5b58\u8d85\u9650\u68c0\u6d4b\u7684\u6808\uff0c\u8fd9\u4e0d\u4e00\u5b9a\u662f\u5927\u5185\u5b58\u7533\u8bf7\u7684\u4f4d\u7f6e\u3002\n3\u3001",(0,c.yg)("inlineCode",{parentName:"p"},"Memory Tracker Summary"),"\uff1a\u5f53\u524d\u67e5\u8be2\u7684 memory tracker \u7edf\u8ba1\uff0c\u53ef\u4ee5\u770b\u5230\u67e5\u8be2\u6bcf\u4e2a\u7b97\u5b50\u5f53\u524d\u4f7f\u7528\u7684\u5185\u5b58\u548c\u5cf0\u503c\uff0c\u5177\u4f53\u53ef\u53c2\u8003 ",(0,c.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1/admin-manual/memory-management/memory-tracker"},"Memory Tracker"),"\u3002\n\u6ce8\u610f\uff1a\u4e00\u4e2a\u67e5\u8be2\u5728\u5185\u5b58\u8d85\u9650\u540e\u53ea\u4f1a\u6253\u5370\u4e00\u6b21\u65e5\u5fd7\uff0c\u6b64\u65f6\u67e5\u8be2\u7684\u591a\u4e2a\u7ebf\u7a0b\u90fd\u4f1a\u611f\u77e5\uff0c\u5e76\u5c1d\u8bd5\u7b49\u5f85\u5185\u5b58\u91ca\u653e\uff0c\u6216\u8005cancel\u5f53\u524d\u67e5\u8be2\uff0c\u5982\u679c\u65e5\u5fd7\u4e2d Try Alloc \u7684\u503c\u5f88\u5c0f\uff0c\u5219\u65e0\u987b\u5173\u6ce8",(0,c.yg)("inlineCode",{parentName:"p"},"Alloc Stacktrace"),"\uff0c\u76f4\u63a5\u5206\u6790",(0,c.yg)("inlineCode",{parentName:"p"},"Memory Tracker Summary"),"\u5373\u53ef\u3002"),(0,c.yg)("pre",null,(0,c.yg)("code",{parentName:"pre"},"W1128 01:34:11.016165 357796 mem_tracker_limiter.cpp:191] Memory limit exceeded:<consuming tracker:<Query#Id=78208b15e064527-a84c5c0b04c04fcf>, failed alloc size 4.00 MB, exceeded tracker:<Query#Id=78208b15e064527-a84c5c0b04c04fcf>, limit 100.00 MB, peak used 98.59 MB,\ncurrent used 96.88 MB>, executing msg:<execute:<ExecNode:VHASH_JOIN_NODE (id=2)>>. backend 172.24.47.117 process memory used 1.13 GB, limit 98.92 GB. If query tracker exceed, `set exec_mem_limit=8G` to change limit, details mem usage see be.INFO.\nProcess Memory Summary:    \n    process memory used 1.13 GB limit 98.92 GB, sys mem available 45.15 GB min reserve 3.20 GB, tc/jemalloc allocator cache 27.62 MB\nAlloc Stacktrace:    \n    @          0x66cf73a  doris::vectorized::HashJoinNode::_materialize_build_side()\n    @          0x69cb1ee  doris::vectorized::VJoinNodeBase::open()\n    @          0x66ce27a  doris::vectorized::HashJoinNode::open()\n    @          0x5835dad  doris::PlanFragmentExecutor::open_vectorized_internal()\n    @          0x58351d2  doris::PlanFragmentExecutor::open()\n    @          0x5815244  doris::FragmentExecState::execute()\n    @          0x5817965  doris::FragmentMgr::_exec_actual()\n    @          0x581fffb  std::_Function_handler<>::_M_invoke()\n    @          0x5a6f2c1  doris::ThreadPool::dispatch_thread()\n    @          0x5a6843f  doris::Thread::supervise_thread()\n    @     0x7f6faa94a1ca  start_thread\n    @     0x7f6fab121dd3  __GI___clone\n    @              (nil)  (unknown)\n\nMemory Tracker Summary:\n    MemTrackerLimiter Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Type=query, Limit=100.00 MB(104857600 B), Used=64.75 MB(67891182 B), Peak=104.70 MB(109786406 B)\n    MemTracker Label=Scanner#QueryId=78208b15e064527-a84c5c0b04c04fcf, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=RuntimeFilterMgr, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=2.09 KB(2144 B), Peak=0(0 B)\n    MemTracker Label=BufferedBlockMgr2, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=ExecNode:VHASH_JOIN_NODE (id=2), Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=-61.44 MB(-64426656 B), Peak=290.33 KB(297296 B)\n    MemTracker Label=ExecNode:VEXCHANGE_NODE (id=9), Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=6.12 KB(6264 B), Peak=5.84 KB(5976 B)\n    MemTracker Label=VDataStreamRecvr:78208b15e064527-a84c5c0b04c04fd2, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=6.12 KB(6264 B), Peak=5.84 KB(5976 B)\n    MemTracker Label=ExecNode:VEXCHANGE_NODE (id=10), Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=-41.20 MB(-43198024 B), Peak=1.46 MB(1535656 B)\n    MemTracker Label=VDataStreamRecvr:78208b15e064527-a84c5c0b04c04fd2, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=-41.20 MB(-43198024 B), Peak=1.46 MB(1535656 B)\n    MemTracker Label=VDataStreamSender:78208b15e064527-a84c5c0b04c04fd2, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=2.34 KB(2400 B), Peak=0(0 B)\n    MemTracker Label=Scanner#QueryId=78208b15e064527-a84c5c0b04c04fcf, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=58.12 MB(60942224 B), Peak=57.41 MB(60202848 B)\n    MemTracker Label=RuntimeFilterMgr, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=BufferedBlockMgr2, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=ExecNode:VNewOlapScanNode(customer) (id=1), Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=9.55 MB(10013424 B), Peak=10.20 MB(10697136 B)\n    MemTracker Label=VDataStreamSender:78208b15e064527-a84c5c0b04c04fd1, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=59.80 MB(62701880 B), Peak=59.16 MB(62033048 B)\n    MemTracker Label=Scanner#QueryId=78208b15e064527-a84c5c0b04c04fcf, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=RuntimeFilterMgr, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=13.62 KB(13952 B), Peak=0(0 B)\n    MemTracker Label=BufferedBlockMgr2, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=ExecNode:VNewOlapScanNode(lineorder) (id=0), Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=6.03 MB(6318064 B), Peak=4.02 MB(4217664 B)\n    MemTracker Label=VDataStreamSender:78208b15e064527-a84c5c0b04c04fd0, Parent Label=Query#Id=78208b15e064527-a84c5c0b04c04fcf, Used=2.34 KB(2400 B), Peak=0(0 B)\n"))))}y.isMDXComponent=!0}}]);