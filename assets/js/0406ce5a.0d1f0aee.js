"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[562523],{15680:(e,t,n)=>{n.d(t,{xA:()=>h,yg:()=>g});var i=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,g=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?i.createElement(g,r(r({ref:t},h),{},{components:n})):i.createElement(g,r({ref:t},h))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},122387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(58168),a=(n(296540),n(15680));const o={title:"Steps to industry-leading query speed: evolution of the Apache Doris execution engine",summary:"From the Volcano Model to the Pipeline Execution Engine, and now PipelineX, Apache Doris brings its computation efficiency to a higher level with each iteration.",description:"From the Volcano Model to the Pipeline Execution Engine, and now PipelineX, Apache Doris brings its computation efficiency to a higher level with each iteration.",date:"2024-06-18",author:"Apache Doris",tags:["Tech Sharing"],picked:"true",order:"4",image:"/images/evolution-of-the-apache-doris-execution-engine.jpg"},r=void 0,s={permalink:"/blog/evolution-of-the-apache-doris-execution-engine",source:"@site/blog/evolution-of-the-apache-doris-execution-engine.md",title:"Steps to industry-leading query speed: evolution of the Apache Doris execution engine",description:"From the Volcano Model to the Pipeline Execution Engine, and now PipelineX, Apache Doris brings its computation efficiency to a higher level with each iteration.",date:"2024-06-18T00:00:00.000Z",formattedDate:"June 18, 2024",tags:[{label:"Tech Sharing",permalink:"/blog/tags/tech-sharing"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Steps to industry-leading query speed: evolution of the Apache Doris execution engine",summary:"From the Volcano Model to the Pipeline Execution Engine, and now PipelineX, Apache Doris brings its computation efficiency to a higher level with each iteration.",description:"From the Volcano Model to the Pipeline Execution Engine, and now PipelineX, Apache Doris brings its computation efficiency to a higher level with each iteration.",date:"2024-06-18",author:"Apache Doris",tags:["Tech Sharing"],picked:"true",order:"4",image:"/images/evolution-of-the-apache-doris-execution-engine.jpg"},prevItem:{title:"Why Apache Doris is the best open source alternative to Rockset",permalink:"/blog/apache-doris-vs-rockset"},nextItem:{title:"Another lifesaver for data engineers: Apache Doris Job Scheduler for task automation",permalink:"/blog/job-scheduler-for-task-automation"}},l={authorsImageUrls:[void 0]},c=[{value:"Volcano Model",id:"volcano-model",level:2},{value:"Pipeline Execution Engine",id:"pipeline-execution-engine",level:2},{value:"Example",id:"example",level:3},{value:"Design &amp; implementation",id:"design--implementation",level:3},{value:"PipelineX",id:"pipelinex",level:2},{value:"Execution concurrency",id:"execution-concurrency",level:3},{value:"Execution overhead",id:"execution-overhead",level:3},{value:"Scheduling overhead",id:"scheduling-overhead",level:3},{value:"Operator profile",id:"operator-profile",level:3},{value:"What&#39;s next",id:"whats-next",level:2}],h={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.yg)(p,(0,i.A)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"What makes a modern database system? The three key modules are query optimizer, execution engine, and storage engine. Among them, the role of execution engine to the DBMS is like the chef to a restaurant. This article focuses on the execution engine of the ",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org"},"Apache Doris")," data warehouse, explaining the secret to its high performance."),(0,a.yg)("p",null,"To illustrate the role of the execution engine, let's follow the execution process of an SQL statement: "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Upon receiving an SQL query, the query optimizer performs syntax/lexical analysis and generates the optimal execution plan based on the cost model and optimization rules.")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The execution engine then schedules the plan to the nodes, which operate on data in the underlying storage engine and then return the query results.")),(0,a.yg)("p",null,"The execution engine performs operations like data reading, filtering, sorting, and aggregation. The efficiency of these steps determines query performance and resource utilization. That's why different execution models bring distinction in query efficiency."),(0,a.yg)("h2",{id:"volcano-model"},"Volcano Model"),(0,a.yg)("p",null,"The Volcano Model (originally known as the Iterator Model) predominates in analytical databases, followed by the Materialization Model and Vectorized Model. In a Volcano Model, each operation is abstracted as an operator, so the entire SQL query is an operator tree. During query execution, the tree is traversed top-down by calling the ",(0,a.yg)("inlineCode",{parentName:"p"},"next()")," interface, and data is pulled and processed from the bottom up. This is called a ",(0,a.yg)("strong",{parentName:"p"},"pull-based")," execution model. "),(0,a.yg)("p",null,"The Volcano Model is flexible, scalable, and easy to implement and optimize. It underpins Apache Doris before version 2.1.0. When a user initiates an SQL query, Doris parses the query, generates a distributed execution plan, and dispatches tasks to the nodes for execution. Each individual task is an ",(0,a.yg)("strong",{parentName:"p"},"instance"),". Take a simple query as an example: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"select age, sex from employees where age > 30\n")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Volcano Model",src:n(633956).A,width:"1280",height:"874"})),(0,a.yg)("p",null,"In an instance, data flows between operators are propelled by the ",(0,a.yg)("inlineCode",{parentName:"p"},"next()")," method. If the ",(0,a.yg)("inlineCode",{parentName:"p"},"next()")," method of an operator is called, it will first call the ",(0,a.yg)("inlineCode",{parentName:"p"},"next()")," of its child operator, obtain data from it, and then process the data to produce output. "),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"next()")," is a synchronous method. In other words, the current operator will be blocked if its child operator does not provide data for it. In this case, the ",(0,a.yg)("inlineCode",{parentName:"p"},"next()")," method of the root operator needs to be called in a loop until all data is processed, which is when the instance finishes its computation."),(0,a.yg)("p",null,"Such execution mechanism faces a few bottlenecks in single-node, multi-core use cases:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Thread blocking"),": In a fixed-size thread pool, if an instance occupies a thread and it is blocked, that will easily cause a deadlock when there are a large number of instances requesting execution simultaneously. This is especially the case when the current instance is dependent on other instances. Additionally, if a node is running more instances than the number of CPU cores it has, the system scheduling mechanism will be heavily relied upon and a huge context switching overhead can be produced. In a colocation scenario, this will lead to an even larger thread switching overhead.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"CPU contention"),": The threads might compete for CPU resources so queries of different sizes and between different tenants might interfere with each other.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Underutilization of the multi-core computing capabilities"),": Execution concurrency relies heavily on data distribution. Specifically, the number of instances running on a node is limited by the number of data buckets on that node. In this case, it's important to set an appropriate number of buckets. If you shard the data into too many buckets, that will become a burden for the system and bring unnecessary overheads; if the buckets are too few, you will not be able to utilize your CPU cores to the fullest. However, in a production environment, it is not always easy to estimate the proper number of buckets you need, thus performance loss. "))),(0,a.yg)("h2",{id:"pipeline-execution-engine"},"Pipeline Execution Engine"),(0,a.yg)("p",null,"Based on the known issues of Volcano Model, we've replaced it with the Pipeline Execution Engine since Apache Doris 2.0.0. "),(0,a.yg)("p",null,"As the name suggests, the Pipeline Execution Engine breaks down the execution plan into pipeline tasks, and schedules these pipeline tasks into a thread pool in a time-sharing manner. If a pipeline task is blocked, it will be put on hold to release the thread it is occupying. Meanwhile, it supports various scheduling strategies, meaning that you can allocate CPU resources to different queries and tenants more flexibly. "),(0,a.yg)("p",null,"Additionally, the Pipeline Execution Engine pools together data within data buckets, so the number of running instances is no longer capped by the number of buckets. This not only enhances Apache Doris' utilization of multi-core systems, but also improves system performance and stability by avoiding frequent thread creation and deletion."),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("p",null,"This is the execution plan of a join query. It includes two instances:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Pipeline Execution Engine",src:n(6488).A,width:"1280",height:"678"})),(0,a.yg)("p",null,'As illustrated, the Probe operation can only be executed after the hash table is built, while the Build operation is reliant on the computation results of the Exchange operator. Each of the two instances is divided into two pipeline tasks as such. Then these tasks will be scheduled in the "ready" queue of the thread pool. Following the specified strategies, the threads obtain the tasks to process. In a pipeline task, after one data block is finished, if the relevant data is ready and its runtime stays within the maximum allowed duration, the thread will continue to compute the next data block. '),(0,a.yg)("h3",{id:"design--implementation"},"Design & implementation"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Avoid thread blocking")),(0,a.yg)("p",null,"As is mentioned earlier, the Volcano Model is faced with a few bottlenecks: "),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"If too many threads are blocked, the thread pool will be saturated and unable to respond to subsequent queries.")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Thread scheduling is entirely managed by the operating system, without any user-level control or customization.")),(0,a.yg)("p",null,"How does Pipeline Execution Engine avoid such issues?"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"We fix the size of the thread pool to match the CPU core count. Then we split all operators that are prone to blocking into pipeline tasks. For example, we use individual threads for disk I/O operations and RPC operations.")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"We design a user-space polling scheduler. It continuously checks the state of all executable pipeline tasks and assigns executable tasks to threads. With this in place, the operating system doesn't have to frequently switch threads, thus less overheads. It also allows customized scheduling strategies, such as assigning priorities to tasks.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Design &amp; implementation",src:n(516812).A,width:"1280",height:"587"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Parallelization")),(0,a.yg)("p",null,"Before version 2.0, Apache Doris requires users to set a concurrency parameter for the execution engine (",(0,a.yg)("inlineCode",{parentName:"p"},"parallel_fragment_exec_instance_num"),"), which does not dynamically change based on the workloads. Therefore, it is a burden for users to figure out an appropriate concurrency level that leads to optimal performance."),(0,a.yg)("p",null,"What's the industry's solution to this?"),(0,a.yg)("p",null,"Presto's idea is to shuffle the data into a reasonable number of partitions during execution, which requires minimal concurrency control from users. On the other hand, DuckDB introduces an extra synchronization mechanism instead of shuffling. We decide to follow Presto's track of Presto because the DuckDB solution inevitably involves the use of locks, which works against our purpose of avoiding blocking."),(0,a.yg)("p",null,"Unlike Presto, Apache Doris doesn't need an extra Local Exchange mechanism to shards the data into an appropriate number of partitions. With its massively parallel processing (MPP) architecture, Doris already does so during shuffling. (In Presto's case, it re-partitions the data via Local Exchange for higher execution concurrency. For example, in hash aggregation, Doris further shards the data based on the aggregation key in order to fully utilize the CPU cores. Also, this can downsize the hash table that each execution thread has to build.)"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Design &amp; implementation",src:n(967241).A,width:"1280",height:"686"})),(0,a.yg)("p",null,"Based on the MPP architecture, we only need two improvements before we achieve what we want in Doris:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Increase the concurrency level during shuffling"),". For this, we only need to have the frontend (FE) perceive the backend (BE) environment and then set a reasonable number of partitions.")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Implement concurrent execution after data reading by the scan layer"),". To do this, we need a logical restructuring of the scan layer to decouple the threads from the number of data tablets. This is a pooling process. We pool the data read by scanner threads, so it can be fetched by multiple pipeline tasks directly. ")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Design &amp; implementation",src:n(289007).A,width:"1280",height:"670"})),(0,a.yg)("h2",{id:"pipelinex"},"PipelineX"),(0,a.yg)("p",null,"Introduced in Apache Doris 2.0.0, the pipeline execution engine has been improving query performance and stability under hybrid workload scenarios (queries of different sizes and from different tenants). In ",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org/blog/release-note-2.1.0"},"version 2.1.0"),", we've tackled the known issues and upgraded this from an experimental feature to a robust and reliable solution, which is what we call ",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/query/pipeline/pipeline-x-execution-engine"},"PipelineX"),"."),(0,a.yg)("p",null,"PipelineX has provided answers to the following issues that used to challenge the Pipeline Execution Engine:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Limited execution concurrency"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"High execution overhead"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"High scheduling overhead"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Poor readability of operator profile"))),(0,a.yg)("h3",{id:"execution-concurrency"},"Execution concurrency"),(0,a.yg)("p",null,"The Pipeline Execution Engine remains under the restriction of the static concurrency parameter at FE and the tablet count at the storage layer, making itself unable to capitalize on the full computing resources. Plus, it is easily affected by data skew. "),(0,a.yg)("p",null,"For example, suppose that Table A contains 100 million rows but it has only 1 tablet, which means it is not sharded enough, let's see what can happen when you perform an aggregation query on it: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-C++"}," SELECT COUNT(*) FROM A GROUP BY A.COL_1;\n")),(0,a.yg)("p",null,"During query execution, the query plan is divided into two ",(0,a.yg)("strong",{parentName:"p"},"fragments"),". Each fragment, consisting of multiple operators, is dispatched by frontend (FE) to backend (BE). The BE starts threads to execute the fragments concurrently."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Pipeline Execution concurrency",src:n(753136).A,width:"1280",height:"707"})),(0,a.yg)("p",null,"Now, let's focus on Fragment 0 for further elaboration. Because there is only one tablet, Fragment 0 can only be executed by one thread. That means aggregation of 100 million rows by one single thread. If you have 16 CPU cores, ideally, the system can allocate 8 threads to execute Fragment 0. In this case, there is a concurrency disparity of 8 to 1. This is how ",(0,a.yg)("strong",{parentName:"p"},"the number of tablets restricts execution concurrency")," and also why we introduce the idea of ",(0,a.yg)("strong",{parentName:"p"},"Local Shuffle mechanism to remove that restriction")," in Apache Doris 2.1.0. So this is how it works in PipelineX: "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The threads execute their own pipeline tasks, but the pipeline tasks only maintain their runtime state (known as ",(0,a.yg)("strong",{parentName:"li"},"Local State"),"), while the information that shared across all pipeline tasks (known as ",(0,a.yg)("strong",{parentName:"li"},"Global State"),") is managed by one pipeline object.")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"On a single BE, the Local Shuffle mechanism is responsible for data distribution and data balancing across pipeline tasks.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Pipeline Execution concurrency",src:n(955790).A,width:"1220",height:"1280"})),(0,a.yg)("p",null,"Apart from decoupling execution concurrency from tablet count, Local Shuffle can avoid performance loss due to data skew. Again, we will explain with the foregoing example."),(0,a.yg)("p",null,"This time, we shard Table A into two tablets instead of one, but the data is not evenly distributed. Tablet 1 and Tablet 3 hold 10 million and 90 million rows, respectively. The Pipeline Execution Engine and PipelineX Execution Engine respond differently to such data skew:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Pipeline Execution Engine"),": Thread 1 and Thread 2 executes Fragment 1 concurrently. The latter takes 9 times as long as Thread 1 because of the different data sizes they deal with.")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"PipelineX Execution Engine"),": With Local Shuffle, data is distributed evenly to the two threads, so they take almost equal time to finish.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Pipeline vs PipelineX execution engine",src:n(840700).A,width:"1280",height:"972"})),(0,a.yg)("h3",{id:"execution-overhead"},"Execution overhead"),(0,a.yg)("p",null,"Under the Pipeline Execution Engine, because the expressions of different instances are individual, each instance is initialized individually. However, since the initialization parameters of instances share a lot in common, we can reuse the shared states to reduce execution overheads. This is what PipelineX does: it initializes the Global State at a time, and the Local State sequentially."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Execution overhead",src:n(955158).A,width:"1280",height:"625"})),(0,a.yg)("h3",{id:"scheduling-overhead"},"Scheduling overhead"),(0,a.yg)("p",null,"In the Pipeline Execution Engine, the blocked tasks are put into a blocked queue, where a dedicated thread takes polls and moves the executable tasks over to the runnable queue. This dedicated scheduling thread consumes a CPU core, and incurs overheads that can be particularly noticeable on systems with limited computing resources."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"As a better solution, PipelineX encapsulates the blocking conditions as dependencies, and the task status (blocked or runnable) will be triggered to change by event notifications.")," Specifically, when RPC data arrives, the relevant task will be considered as ready by the ExchangeSourceOperator and then moved to the runnable queue."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Scheduling overhead",src:n(45558).A,width:"1280",height:"740"})),(0,a.yg)("p",null,"That means ",(0,a.yg)("strong",{parentName:"p"},"PipelineX implements event-driven scheduling"),". A query execution plan can be depicted as a DAG, where the pipeline tasks are abstracted as nodes and the dependencies as edges. Whether a pipeline task gets executed depends on whether all its associated dependencies have satisfied the requisite conditions."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Scheduling overhead",src:n(368416).A,width:"1280",height:"723"})),(0,a.yg)("p",null,"For simplicity of illustration, the above DAG only shows the dependencies between the upstream and downstream pipeline tasks. In fact, all blocking conditions are abstracted as dependencies. The complete execution workflow of a pipeline task is as follows:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Scheduling overhead",src:n(257758).A,width:"1280",height:"629"})),(0,a.yg)("p",null,"In event-driven execution, a pipeline task will only be executed after all its dependencies satisfy the conditions; otherwise, it will be added to the blocked queue. When an external event arrives, all blocked tasks will be re-evaluated to see if they're runnable."),(0,a.yg)("p",null,"The event-driven design of PipelineX eliminates the need for a polling thread and thus the consequential performance loss under high cluster loads. Moreover, the encapsulation of dependencies enables a more flexible scheduling framework, making it easier to spill data to disks."),(0,a.yg)("h3",{id:"operator-profile"},"Operator profile"),(0,a.yg)("p",null,"PipelineX has reorganized the metrics in the operator profiles, adding new ones and obsoleting irrelevant ones. Besides, with the dependencies encapsulated, we monitor how long the dependencies take to get ready by the metric ",(0,a.yg)("inlineCode",{parentName:"p"},"WaitForDependency"),", so the profile can provide a clear picture of the time spent in each step. These are two examples:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Scan Operator"),": The total execution time of ",(0,a.yg)("inlineCode",{parentName:"p"},"OLAP_SCAN_OPERATOR")," is 457.750ms, including that spent in data reading by the scanner (436.883ms) and that in actual execution."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-C++"},"OLAP_SCAN_OPERATOR  (id=4.  table  name  =  Z03_DI_MID):\n    -  ExecTime:  457.750ms\n    -  WaitForDependency[OLAP_SCAN_OPERATOR_DEPENDENCY]Time:  436.883ms\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Exchange Source Operator"),": The execution time of ",(0,a.yg)("inlineCode",{parentName:"p"},"EXCHANGE_OPERATOR")," is 86.691us. The time spent waiting for data from upstream is 409.256us."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-C++"},"EXCHANGE_OPERATOR  (id=3):\n    -  ExecTime:  86.691us\n    -  WaitForDependencyTime:  0ns\n        -  WaitForData0:  409.256us\n")))),(0,a.yg)("h2",{id:"whats-next"},"What's next"),(0,a.yg)("p",null,"From the Volcano Model to the Pipeline Execution Engine, Apache Doris 2.0.0 has overcome the deadlocks under high cluster load and greatly increased CPU utilization. Now, from the Pipeline Execution Engine to PipelineX, Apache Doris 2.1.0 is more production-friendly as it has ironed out the kinks in concurrency, overheads, and operator profile. "),(0,a.yg)("p",null,"What's next in our roadmap is to support spilling data to disk in PipelineX to further improve query speed and system reliability. We also plan to advance further in terms of automation, such as self-adaptive concurrency and auto execution plan optimization, accompanied by NUMA technologies to harvest better performance from hardware resources. "),(0,a.yg)("p",null,"If you want to talk to the amazing Doris developers who lead these changes, you are more than welcome to join the ",(0,a.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2gmq5o30h-455W226d79zP3L96ZhXIoQ"},"Apache Doris")," community."))}d.isMDXComponent=!0},6488:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/doris-pipeline-execution-engine-0f462e7876f79b16a3dd1cb21daa8444.png"},955790:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/doris-pipelinex-1-6f7365d5417f254f369c691827d034eb.png"},840700:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/doris-pipelinex-3-4be6cbf01667eb21a88ce0914e3a404a.png"},753136:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/doris-pipelinex-4e2f29eb887b9b2dc157ab32aea356b4.png"},633956:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/doris-volcano-model-bf7cd6bf0fe5c369d9ae4ac0efa617d4.png"},967241:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/pipeline-design-implementation-2-a687d57ca081c1170f31ab0145d5caff.png"},516812:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/pipeline-design-implementation-21c2bccd9d7d386133decbf17c2040fb.png"},955158:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/pipeline-execution-overhead-f3d56f790b260c95154e1039faf202d9.png"},368416:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/pipeline-scheduling-overhead-2-2141c79fe8435bc10d6f4e933e009ef4.jpeg"},257758:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/pipeline-scheduling-overhead-3-7a77f777afc96de866410fd9624ce605.png"},45558:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/pipeline-scheduling-overhead-8fc879065b8ec7b550448f12d8cbad7d.png"},289007:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/pipleine-design-implementation-3-fbbbb04f5de750bad1fd28694ca3b1d7.jpeg"}}]);