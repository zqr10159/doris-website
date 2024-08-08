"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[532828],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(r),g=a,y=u["".concat(i,".").concat(g)]||u[g]||c[g]||o;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},863842:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(58168),a=(r(296540),r(15680));const o={title:"Upgrading Apache Doris cluster deployed by Doris Operator",language:"en"},l=void 0,s={unversionedId:"install/cluster-deployment/k8s-deploy/doris-cluster-upgrade",id:"version-3.0/install/cluster-deployment/k8s-deploy/doris-cluster-upgrade",title:"Upgrading Apache Doris cluster deployed by Doris Operator",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/install/cluster-deployment/k8s-deploy/doris-cluster-upgrade.md",sourceDirName:"install/cluster-deployment/k8s-deploy",slug:"/install/cluster-deployment/k8s-deploy/doris-cluster-upgrade",permalink:"/docs/install/cluster-deployment/k8s-deploy/doris-cluster-upgrade",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Upgrading Apache Doris cluster deployed by Doris Operator",language:"en"},sidebar:"docs",previous:{title:"Accessing Doris Cluster",permalink:"/docs/install/cluster-deployment/k8s-deploy/install-access-cluster"},next:{title:"Used by Root users",permalink:"/docs/install/cluster-deployment/k8s-deploy/root-user-use"}},i={},d=[{value:"Things to note before upgrading",id:"things-to-note-before-upgrading",level:2},{value:"Upgrade operation",id:"upgrade-operation",level:2},{value:"Upgrade BE",id:"upgrade-be",level:3},{value:"Upgrade FE",id:"upgrade-fe",level:3},{value:"After the upgrade is completed",id:"after-the-upgrade-is-completed",level:2},{value:"Verify cluster node status",id:"verify-cluster-node-status",level:3},{value:"Restore cluster replica synchronization and balancing",id:"restore-cluster-replica-synchronization-and-balancing",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This document describes how to use updates to upgrade an Apache Doris cluster based on a Doris Operator deployment."),(0,a.yg)("p",null,"Similar to conventionally deployed cluster upgrades, Doris clusters deployed by Doris Operator still require rolling upgrades from BE to FE nodes. Doris Operator is based on Kubernetes'  ",(0,a.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/"},"Performing a Rolling Update")," provides rolling upgrade capabilities."),(0,a.yg)("h2",{id:"things-to-note-before-upgrading"},"Things to note before upgrading"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"It is recommended that the upgrade operation be performed during off-peak periods."),(0,a.yg)("li",{parentName:"ul"},"During the rolling upgrade process, the connection to the closed node will fail, causing the request to fail. For this type of business, it is recommended to add retry capabilities to the client."),(0,a.yg)("li",{parentName:"ul"},"Before upgrading, you can read the ",(0,a.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/dev/admin-manual/cluster-management/upgrade"},"General Upgrade Manual")," to help you understand some principles and precautions during the upgrade. ."),(0,a.yg)("li",{parentName:"ul"},"The compatibility of data and metadata cannot be verified before upgrading. Therefore, cluster upgrade must avoid single copy of data and single FE FOLLOWER node in the cluster."),(0,a.yg)("li",{parentName:"ul"},"Nodes will be restarted during the upgrade process, so unnecessary cluster balancing and replica repair logic may be triggered. Please shut it down first with the following command.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'admin set frontend config("disable_balance" = "true");\nadmin set frontend config("disable_colocate_balance" = "true");\nadmin set frontend config("disable_tablet_scheduler" = "true");\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"When upgrading Doris, please follow the principle of not upgrading across two or more key node versions. If you want to upgrade across multiple key node versions, upgrade to the latest key node version first, and then upgrade in sequence. If it is a non-key node version, You can ignore skipping. For details, please refer to ",(0,a.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/dev/admin-manual/cluster-management/upgrade/#doris-release-notes"},"Upgrade Version Instructions"))),(0,a.yg)("h2",{id:"upgrade-operation"},"Upgrade operation"),(0,a.yg)("p",null,"The order of node types in the upgrade process is as follows. If a certain type of node does not exist, it will be skipped:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"   cn/be -> fe -> broker\n")),(0,a.yg)("p",null,"It is recommended to modify the ",(0,a.yg)("inlineCode",{parentName:"p"},"image")," of the corresponding cluster components in sequence and then apply the configuration. After the current type of component is fully upgraded and the status returns to normal, the rolling upgrade of the next type of node can be performed."),(0,a.yg)("h3",{id:"upgrade-be"},"Upgrade BE"),(0,a.yg)("p",null,"If you retain the cluster's crd (Doris Operator defines the abbreviation of ",(0,a.yg)("inlineCode",{parentName:"p"},"DorisCluster")," type resource name) file, you can upgrade by modifying the configuration file and running the ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl apply")," command."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify ",(0,a.yg)("inlineCode",{parentName:"p"},"spec.beSpec.image")),(0,a.yg)("p",{parentName:"li"},"Change ",(0,a.yg)("inlineCode",{parentName:"p"},"selectdb/doris.be-ubuntu:2.0.4")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"selectdb/doris.be-ubuntu:2.1.0")))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ vim doriscluster-sample.yaml\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Save the changes and apply the changes to be upgraded:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ kubectl apply -f doriscluster-sample.yaml -n doris\n")),(0,a.yg)("p",null,"It can also be modified directly through ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl edit dcr"),"."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Check the dcr list under namespace 'doris' to obtain the ",(0,a.yg)("inlineCode",{parentName:"li"},"cluster_name")," that needs to be updated.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ kubectl get dcr -n doris\nNAME                  FESTATUS    BESTATUS    CNSTATUS\ndoriscluster-sample   available   available\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Modify, save and take effect")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ kubectl edit dcr doriscluster-sample -n doris\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"After entering the text editor, you will find `spec.beSpec.image` and change `selectdb/doris.be-ubuntu:2.0.4` to `selectdb/doris.be-ubuntu:2.1.0`\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"View the upgrade process and results:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ kubectl get pod -n doris\n")),(0,a.yg)("p",null,"When all Pods are rebuilt and enter the Running state, the upgrade is complete."),(0,a.yg)("h3",{id:"upgrade-fe"},"Upgrade FE"),(0,a.yg)("p",null,"If you retain the cluster's crd (Doris Operator defines the abbreviation of the ",(0,a.yg)("inlineCode",{parentName:"p"},"DorisCluster")," type resource name) file, you can upgrade by modifying the configuration file and running the ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl apply")," command."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify ",(0,a.yg)("inlineCode",{parentName:"p"},"spec.feSpec.image")),(0,a.yg)("p",{parentName:"li"},"Change ",(0,a.yg)("inlineCode",{parentName:"p"},"selectdb/doris.fe-ubuntu:2.0.4")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"selectdb/doris.fe-ubuntu:2.1.0")))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ vim doriscluster-sample.yaml\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Save the changes and apply the changes to be upgraded:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ kubectl apply -f doriscluster-sample.yaml -n doris\n")),(0,a.yg)("p",null,"It can also be modified directly through ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl edit dcr"),"."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Modify, save and take effect")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ kubectl edit dcr doriscluster-sample -n doris\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"After entering the text editor, you will find `spec.feSpec.image` and change `selectdb/doris.fe-ubuntu:2.0.4` to `selectdb/doris.fe-ubuntu:2.1.0`\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"View the upgrade process and results:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ kubectl get pod -n doris\n")),(0,a.yg)("p",null,"When all Pods are rebuilt and enter the Running state, the upgrade is complete."),(0,a.yg)("h2",{id:"after-the-upgrade-is-completed"},"After the upgrade is completed"),(0,a.yg)("h3",{id:"verify-cluster-node-status"},"Verify cluster node status"),(0,a.yg)("p",null,"Access Doris through ",(0,a.yg)("inlineCode",{parentName:"p"},"mysql-client")," through the method provided in the ",(0,a.yg)("a",{parentName:"p",href:"../k8s-deploy/install-access-cluster"},"Access Doris Cluster")," document.\nUse SQL such as ",(0,a.yg)("inlineCode",{parentName:"p"},"show frontends")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"show backends")," to view the version and status of each component."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> show frontends\\G;\n*************************** 1. row ***************************\n              Name: fe_13c132aa_3281_4f4f_97e8_655d01287425\n              Host: doriscluster-sample-fe-0.doriscluster-sample-fe-internal.doris.svc.cluster.local\n       EditLogPort: 9010\n          HttpPort: 8030\n         QueryPort: 9030\n           RpcPort: 9020\nArrowFlightSqlPort: -1\n              Role: FOLLOWER\n          IsMaster: false\n         ClusterId: 1779160761\n              Join: true\n             Alive: true\n ReplayedJournalId: 2422\n     LastStartTime: 2024-02-19 06:38:47\n     LastHeartbeat: 2024-02-19 09:31:33\n          IsHelper: true\n            ErrMsg:\n           Version: doris-2.1.0\n  CurrentConnected: Yes\n*************************** 2. row ***************************\n              Name: fe_f1a9d008_d110_4780_8e60_13d392faa54e\n              Host: doriscluster-sample-fe-2.doriscluster-sample-fe-internal.doris.svc.cluster.local\n       EditLogPort: 9010\n          HttpPort: 8030\n         QueryPort: 9030\n           RpcPort: 9020\nArrowFlightSqlPort: -1\n              Role: FOLLOWER\n          IsMaster: true\n         ClusterId: 1779160761\n              Join: true\n             Alive: true\n ReplayedJournalId: 2423\n     LastStartTime: 2024-02-19 06:37:35\n     LastHeartbeat: 2024-02-19 09:31:33\n          IsHelper: true\n            ErrMsg:\n           Version: doris-2.1.0\n  CurrentConnected: No\n*************************** 3. row ***************************\n              Name: fe_e42bf9da_006f_4302_b861_770d2c955a47\n              Host: doriscluster-sample-fe-1.doriscluster-sample-fe-internal.doris.svc.cluster.local\n       EditLogPort: 9010\n          HttpPort: 8030\n         QueryPort: 9030\n           RpcPort: 9020\nArrowFlightSqlPort: -1\n              Role: FOLLOWER\n          IsMaster: false\n         ClusterId: 1779160761\n              Join: true\n             Alive: true\n ReplayedJournalId: 2422\n     LastStartTime: 2024-02-19 06:38:17\n     LastHeartbeat: 2024-02-19 09:31:33\n          IsHelper: true\n            ErrMsg:\n           Version: doris-2.1.0\n  CurrentConnected: No\n3 rows in set (0.02 sec)\n")),(0,a.yg)("p",null,"If the ",(0,a.yg)("inlineCode",{parentName:"p"},"Alive")," status of the FE node is true and the ",(0,a.yg)("inlineCode",{parentName:"p"},"Version")," value is the new version, the FE node is upgraded successfully."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'mysql> show backends\\G;\n*************************** 1. row ***************************\n              BackendId: 10002\n                   Host: doriscluster-sample-be-0.doriscluster-sample-be-internal.doris.svc.cluster.local\n          HeartbeatPort: 9050\n                 BePort: 9060\n               HttpPort: 8040\n               BrpcPort: 8060\n     ArrowFlightSqlPort: -1\n          LastStartTime: 2024-02-19 06:37:56\n          LastHeartbeat: 2024-02-19 09:32:43\n                  Alive: true\n   SystemDecommissioned: false\n              TabletNum: 14\n       DataUsedCapacity: 0.000\n     TrashUsedCapcacity: 0.000\n          AvailCapacity: 12.719 GB\n          TotalCapacity: 295.167 GB\n                UsedPct: 95.69 %\n         MaxDiskUsedPct: 95.69 %\n     RemoteUsedCapacity: 0.000\n                    Tag: {"location" : "default"}\n                 ErrMsg:\n                Version: doris-2.1.0\n                 Status: {"lastSuccessReportTabletsTime":"2024-02-19 09:31:48","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false}\nHeartbeatFailureCounter: 0\n               NodeRole: mix\n*************************** 2. row ***************************\n              BackendId: 10003\n                   Host: doriscluster-sample-be-1.doriscluster-sample-be-internal.doris.svc.cluster.local\n          HeartbeatPort: 9050\n                 BePort: 9060\n               HttpPort: 8040\n               BrpcPort: 8060\n     ArrowFlightSqlPort: -1\n          LastStartTime: 2024-02-19 06:37:35\n          LastHeartbeat: 2024-02-19 09:32:43\n                  Alive: true\n   SystemDecommissioned: false\n              TabletNum: 8\n       DataUsedCapacity: 0.000\n     TrashUsedCapcacity: 0.000\n          AvailCapacity: 12.719 GB\n          TotalCapacity: 295.167 GB\n                UsedPct: 95.69 %\n         MaxDiskUsedPct: 95.69 %\n     RemoteUsedCapacity: 0.000\n                    Tag: {"location" : "default"}\n                 ErrMsg:\n                Version: doris-2.1.0\n                 Status: {"lastSuccessReportTabletsTime":"2024-02-19 09:31:43","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false}\nHeartbeatFailureCounter: 0\n               NodeRole: mix\n*************************** 3. row ***************************\n              BackendId: 11024\n                   Host: doriscluster-sample-be-2.doriscluster-sample-be-internal.doris.svc.cluster.local\n          HeartbeatPort: 9050\n                 BePort: 9060\n               HttpPort: 8040\n               BrpcPort: 8060\n     ArrowFlightSqlPort: -1\n          LastStartTime: 2024-02-19 08:50:36\n          LastHeartbeat: 2024-02-19 09:32:43\n                  Alive: true\n   SystemDecommissioned: false\n              TabletNum: 0\n       DataUsedCapacity: 0.000\n     TrashUsedCapcacity: 0.000\n          AvailCapacity: 12.719 GB\n          TotalCapacity: 295.167 GB\n                UsedPct: 95.69 %\n         MaxDiskUsedPct: 95.69 %\n     RemoteUsedCapacity: 0.000\n                    Tag: {"location" : "default"}\n                 ErrMsg:\n                Version: doris-2.1.0\n                 Status: {"lastSuccessReportTabletsTime":"2024-02-19 09:32:04","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false}\nHeartbeatFailureCounter: 0\n               NodeRole: mix\n3 rows in set (0.01 sec)\n')),(0,a.yg)("p",null,"If the ",(0,a.yg)("inlineCode",{parentName:"p"},"Alive")," status of the BE node is true and the ",(0,a.yg)("inlineCode",{parentName:"p"},"Version")," value is the new version, the BE node is upgraded successfully."),(0,a.yg)("h3",{id:"restore-cluster-replica-synchronization-and-balancing"},"Restore cluster replica synchronization and balancing"),(0,a.yg)("p",null,"After confirming that the status of each node is correct, execute the following SQL to restore cluster balancing and replica repair:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'admin set frontend config("disable_balance" = "false");\nadmin set frontend config("disable_colocate_balance" = "false");\nadmin set frontend config("disable_tablet_scheduler" = "false");\n')))}c.isMDXComponent=!0}}]);