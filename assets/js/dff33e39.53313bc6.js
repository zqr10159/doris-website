"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[841668],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var o=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(t),g=a,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||r;return t?o.createElement(m,l(l({ref:n},c),{},{components:t})):o.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},749226:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(58168),a=(t(296540),t(15680));const r={title:"Elastic Scaling",language:"en"},l=void 0,i={unversionedId:"admin-manual/cluster-management/elastic-expansion",id:"version-3.0/admin-manual/cluster-management/elastic-expansion",title:"Elastic Scaling",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/admin-manual/cluster-management/elastic-expansion.md",sourceDirName:"admin-manual/cluster-management",slug:"/admin-manual/cluster-management/elastic-expansion",permalink:"/docs/admin-manual/cluster-management/elastic-expansion",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Elastic Scaling",language:"en"},sidebar:"docs",previous:{title:"Upgrading Cluster",permalink:"/docs/admin-manual/cluster-management/upgrade"},next:{title:"Loading Balance",permalink:"/docs/admin-manual/cluster-management/load-balancing"}},s={},d=[{value:"FE Scaling",id:"fe-scaling",level:2},{value:"Adding FE nodes",id:"adding-fe-nodes",level:3},{value:"Configure and start Follower or Observer.",id:"configure-and-start-follower-or-observer",level:4},{value:"Add Follower or Observer to the cluster",id:"add-follower-or-observer-to-the-cluster",level:4},{value:"Delete FE nodes",id:"delete-fe-nodes",level:3},{value:"BE Scaling",id:"be-scaling",level:2},{value:"Add BE nodes",id:"add-be-nodes",level:3},{value:"Delete BE nodes",id:"delete-be-nodes",level:3},{value:"Broker Scaling",id:"broker-scaling",level:2}],c={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,o.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"elastic-scaling"},"Elastic scaling"),(0,a.yg)("p",null,"Doris can easily expand and shrink FE, BE, Broker instances."),(0,a.yg)("h2",{id:"fe-scaling"},"FE Scaling"),(0,a.yg)("p",null,"High availability of FE can be achieved by expanding FE to three top-one nodes."),(0,a.yg)("p",null,"Users can login to Master FE through MySQL client. By:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SHOW PROC '/frontends';")),(0,a.yg)("p",null,"To view the current FE node situation."),(0,a.yg)("p",null,"You can also view the FE node through the front-end page connection: ",(0,a.yg)("inlineCode",{parentName:"p"},"http://fe_hostname:fe_http_port/frontend")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"http://fe_hostname:fe_http_port/system?Path=//frontends"),"."),(0,a.yg)("p",null,"All of the above methods require Doris's root user rights."),(0,a.yg)("p",null,"The process of FE node expansion and contraction does not affect the current system operation."),(0,a.yg)("h3",{id:"adding-fe-nodes"},"Adding FE nodes"),(0,a.yg)("p",null,"FE is divided into two roles: Follower and Observer. The Follower role will elect a Follower node as the Master. By default, a cluster can only have one Follower role in the Master state, and there can be multiple Followers and Observers. At the same time, it is necessary to ensure that there are an odd number of Follower roles. All Follower roles form an election group. If the Follower in the Master state goes down, the remaining Followers will automatically elect a new Master to ensure high write availability. Observer synchronizes the data of Master, but does not participate in the election. If only one FE is deployed, the FE is the Master by default."),(0,a.yg)("p",null,"The first FE to start automatically becomes Master. On this basis, several Followers and Observers can be added."),(0,a.yg)("h4",{id:"configure-and-start-follower-or-observer"},"Configure and start Follower or Observer."),(0,a.yg)("p",null," Follower and Observer are configured with Master. The following commands need to be executed at the first startup:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"bin/start_fe.sh --helper host:edit_log_port --daemon")),(0,a.yg)("p",null,"The host is the node IP of Master, and the edit","_","log","_","port in Lead's configuration file fe.conf. The --helper is only required when follower/observer is first startup."),(0,a.yg)("h4",{id:"add-follower-or-observer-to-the-cluster"},"Add Follower or Observer to the cluster"),(0,a.yg)("p",null,"Add Follower or Observer. Connect to the started FE using mysql-client and execute:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},'ALTER SYSTEM ADD FOLLOWER "follower_host:edit_log_port";')),(0,a.yg)("p",null,"or"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},'ALTER SYSTEM ADD OBSERVER "observer_host:edit_log_port";')),(0,a.yg)("p",null,"The follower","_","host and observer","_","host is the node IP of Follower or Observer, and the edit","_","log","_","port in its configuration file fe.conf."),(0,a.yg)("p",null,"View the status of Follower or Observer. Connect to any booted FE using mysql-client and execute:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SHOW PROC '/frontends';")),(0,a.yg)("p",null,"You can view the FE currently joined the cluster and its corresponding roles."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Notes for FE expansion:"),(0,a.yg)("ol",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ol"},"The number of Follower FEs (including Masters) must be odd. It is recommended that a maximum of three constituent high availability (HA) modes be deployed."),(0,a.yg)("li",{parentName:"ol"},"When FE is in a highly available deployment (1 Master, 2 Follower), we recommend that the reading service capability of FE be extended by adding Observer FE. Of course, you can continue to add Follower FE, but it's almost unnecessary."),(0,a.yg)("li",{parentName:"ol"},"Usually a FE node can handle 10-20 BE nodes. It is suggested that the total number of FE nodes should be less than 10. Usually three can meet most of the needs."),(0,a.yg)("li",{parentName:"ol"},"The helper cannot point to the FE itself, it must point to one or more existing running Master/Follower FEs."))),(0,a.yg)("h3",{id:"delete-fe-nodes"},"Delete FE nodes"),(0,a.yg)("p",null,"Delete the corresponding FE node using the following command:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},'ALTER SYSTEM DROP FOLLOWER[OBSERVER] "fe_host:edit_log_port";')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Notes for FE contraction:"),(0,a.yg)("ol",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ol"},"When deleting Follower FE, make sure that the remaining Follower (including Master) nodes are odd."))),(0,a.yg)("h2",{id:"be-scaling"},"BE Scaling"),(0,a.yg)("p",null,"Users can login to Master FE through mysql-client. By:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SHOW PROC '/backends';")),(0,a.yg)("p",null,"To see the current BE node situation."),(0,a.yg)("p",null,"You can also view the BE node through the front-end page connection: ",(0,a.yg)("inlineCode",{parentName:"p"},"http://fe_hostname:fe_http_port/backend")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"http://fe_hostname:fe_http_port/system?Path=//backends"),"."),(0,a.yg)("p",null,"All of the above methods require Doris's root user rights."),(0,a.yg)("p",null,"The expansion and scaling process of BE nodes does not affect the current system operation and the tasks being performed, and does not affect the performance of the current system. Data balancing is done automatically. Depending on the amount of data available in the cluster, the cluster will be restored to load balancing in a few hours to a day. For cluster load, see the ",(0,a.yg)("a",{parentName:"p",href:"../cluster-management/load-balancing"},"Tablet Load Balancing Document"),"."),(0,a.yg)("h3",{id:"add-be-nodes"},"Add BE nodes"),(0,a.yg)("p",null,"The BE node is added in the same way as in the ",(0,a.yg)("strong",{parentName:"p"},"BE deployment")," section. The BE node is added by the ",(0,a.yg)("inlineCode",{parentName:"p"},"ALTER SYSTEM ADD BACKEND")," command."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Notes for BE expansion:"),(0,a.yg)("ol",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ol"},"After BE expansion, Doris will automatically balance the data according to the load, without affecting the use during the period."))),(0,a.yg)("h3",{id:"delete-be-nodes"},"Delete BE nodes"),(0,a.yg)("p",null,"There are two ways to delete BE nodes: DROP and DECOMMISSION"),(0,a.yg)("p",null,"The DROP statement is as follows:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},'ALTER SYSTEM DROP BACKEND "be_host:be_heartbeat_service_port";')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note: DROP BACKEND will delete the BE directly and the data on it will not be recovered!!! So we strongly do not recommend DROP BACKEND to delete BE nodes. When you use this statement, there will be corresponding error-proof operation hints.")),(0,a.yg)("p",null,"DECOMMISSION clause:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},'ALTER SYSTEM DECOMMISSION BACKEND "be_host:be_heartbeat_service_port";')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"DECOMMISSION notes:"),(0,a.yg)("ol",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ol"},"This command is used to safely delete BE nodes. After the command is issued, Doris attempts to migrate the data on the BE to other BE nodes, and when all data is migrated, Doris automatically deletes the node."),(0,a.yg)("li",{parentName:"ol"},"The command is an asynchronous operation. After execution, you can see that the BE node's ",(0,a.yg)("inlineCode",{parentName:"li"},"SystemDecommissioned")," status is true through `",(0,a.yg)("inlineCode",{parentName:"li"},"SHOW PROC '/backends';")," Indicates that the node is offline."),(0,a.yg)("li",{parentName:"ol"},"The order ",(0,a.yg)("strong",{parentName:"li"},"does not necessarily carry out successfully"),". For example, when the remaining BE storage space is insufficient to accommodate the data on the offline BE, or when the number of remaining machines does not meet the minimum number of replicas, the command cannot be completed, and the BE will always be in the state of ",(0,a.yg)("inlineCode",{parentName:"li"},"SystemDecommissioned")," as true."),(0,a.yg)("li",{parentName:"ol"},"The progress of DECOMMISSION can be viewed through ",(0,a.yg)("inlineCode",{parentName:"li"},"SHOW PROC '/backends';")," Tablet Num, and if it is in progress, Tablet Num will continue to decrease."),(0,a.yg)("li",{parentName:"ol"},"The operation can be carried out by:\n",(0,a.yg)("inlineCode",{parentName:"li"},'CANCEL ALTER SYSTEM DECOMMISSION BACKEND "be_host:be_heartbeat_service_port";'),"\nThe order was cancelled. When cancelled, the data on the BE will maintain the current amount of data remaining. Follow-up Doris re-load balancing"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"For expansion and scaling of BE nodes in multi-tenant deployment environments, please refer to the ",(0,a.yg)("a",{parentName:"strong",href:"../../admin-manual/resource-admin/multi-tenant"},"Multi-tenant Design Document"),".")),(0,a.yg)("h2",{id:"broker-scaling"},"Broker Scaling"),(0,a.yg)("p",null,"There is no rigid requirement for the number of Broker instances. Usually one physical machine is deployed. Broker addition and deletion can be accomplished by following commands:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},'ALTER SYSTEM ADD BROKER broker_name "broker_host:broker_ipc_port";'),"\n",(0,a.yg)("inlineCode",{parentName:"p"},'ALTER SYSTEM DROP BROKER broker_name "broker_host:broker_ipc_port";'),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"ALTER SYSTEM DROP ALL BROKER broker_name;")),(0,a.yg)("p",null,"Broker is a stateless process that can be started or stopped at will. Of course, when it stops, the job running on it will fail. Just try again."))}u.isMDXComponent=!0}}]);