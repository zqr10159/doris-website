"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[90268],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var a=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||r;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},716387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(58168),o=(n(296540),n(15680));const r={title:"Deploying on AWS",language:"en"},s=void 0,l={unversionedId:"install/cluster-deployment/doris-on-aws",id:"version-2.1/install/cluster-deployment/doris-on-aws",title:"Deploying on AWS",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/install/cluster-deployment/doris-on-aws.md",sourceDirName:"install/cluster-deployment",slug:"/install/cluster-deployment/doris-on-aws",permalink:"/docs/2.1/install/cluster-deployment/doris-on-aws",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Deploying on AWS",language:"en"},sidebar:"docs",previous:{title:"How to enter the container when the service crashes",permalink:"/docs/2.1/install/cluster-deployment/k8s-deploy/debug-crash"},next:{title:"Connecting to Database",permalink:"/docs/2.1/db-connect/database-connect"}},i={},p=[{value:"What&#39;s AWS CloudFormation?",id:"whats-aws-cloudformation",level:2},{value:"What&#39;s Doris on AWS CloudFormation?",id:"whats-doris-on-aws-cloudformation",level:2},{value:"Precautions for Use",id:"precautions-for-use",level:2},{value:"Start Deployment",id:"start-deployment",level:2},{value:"How to Connect to the Database",id:"how-to-connect-to-the-database",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"To facilitate a quick experience of Doris on AWS, we have provided a CloudFormation template (CFT) that allows for rapid cluster launch and operation. With this template, you can automatically configure AWS resources and launch a Doris cluster with minimal configuration required."),(0,o.yg)("p",null,"Alternatively, you can also purchase AWS resources independently and deploy the cluster manually using standard methods."),(0,o.yg)("h2",{id:"whats-aws-cloudformation"},"What's AWS CloudFormation?"),(0,o.yg)("p",null,'CloudFormation enables users to create a "stack of resources" in just one step. Resources refer to the items created by users, such as EC2 instances, VPCs, subnets, and more. A group of such resources is referred to as a stack. Users can write a template that easily allows them to create a resource stack according to their preferences in a single step. This is faster, more repeatable, and offers better consistency compared to manual creation and configuration. Additionally, templates can be placed into source code for version control, enabling their use for any purpose whenever needed.'),(0,o.yg)("h2",{id:"whats-doris-on-aws-cloudformation"},"What's Doris on AWS CloudFormation?"),(0,o.yg)("p",null,"Currently, Doris provides the Doris CloudFormation Template, which allows users to quickly create a cluster of the relevant Doris version on AWS by directly using this template, enabling them to experience the latest Doris features."),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("strong",{parentName:"p"},"Note: ")," The template for building Doris clusters based on CloudFormation currently only supports the regions of us-east-1, us-west-1, and us-west-2. Doris on AWS CloudFormation is primarily intended for testing or experiencing purposes, and should not be used in production environments.")),(0,o.yg)("h2",{id:"precautions-for-use"},"Precautions for Use"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Determine the VPC and Subnet that will be deployed.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Determine the key pair that will be used to log into the nodes.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"A VPC Endpoint Interface for S3 will be established during deployment."))),(0,o.yg)("h2",{id:"start-deployment"},"Start Deployment"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},'1. On the AWS console, navigate to CloudFormation and click on "Create stack".')),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Start Deployment",src:n(301461).A,width:"1280",height:"541"})),(0,o.yg)("p",null,'Select the "Amazon S3 URL Template source" option, and fill in the "Amazon S3 URL" field with the following template link:'),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://sdb-cloud-third-party.s3.amazonaws.com/doris-cf/cloudformation_doris.template.yaml"},"https://sdb-cloud-third-party.s3.amazonaws.com/doris-cf/cloudformation_doris.template.yaml")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"2. Configure the specific parameters of the template")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Configure the specific parameter",src:n(36667).A,width:"1280",height:"537"})),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Configure the specific parameter",src:n(223374).A,width:"1280",height:"566"})),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Configure the specific parameter",src:n(826709).A,width:"1280",height:"291"})),(0,o.yg)("p",null,"The main parameters are described as follows:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"VPC ID"),": The VPC where the deployment will be performed.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Subnet ID"),": The subnet where the deployment will be deployed.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Key pair name"),": The public/private key pairs used to connect to the deployed BE and FE nodes.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Version of Doris"),": The version of Doris to be deployed, such as 2.1.0, 2.0.6, etc.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Number of Doris FE"),": The number of FE nodes. The template defaults to selecting only 1 FE.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Fe instance type"),": The node type of FE, and the default value can be used.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Number of Doris Be"),": The number of BE nodes, which can be 1 or 3.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Be instance type"),": The node type of BE, and the default value can be used.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Meta data dir"),": The metadata directory of the FE node, and the default value can be used.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Sys log level:"),' Sets the level of system logs, and the default value of "info" can be used.')),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Volume type of Be nodes:")," The volume type of EBS mounted on BE nodes. Each node is mounted with one disk by default. The default value can be used.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Volume size of Be nodes"),": The size of EBS mounted on BE nodes, measured in GB. The default value can be used."))),(0,o.yg)("h2",{id:"how-to-connect-to-the-database"},"How to Connect to the Database"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"1. The display after successful deployment is as follows:")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"How to Connect to the Database",src:n(742092).A,width:"1280",height:"488"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"2. Next, find the connection address for FE as follows. In this example, you can view the address as 172.16.0.97 from the FE Outputs.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"find the connection address for FE ",src:n(140678).A,width:"1280",height:"395"})),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"find the connection address for FE ",src:n(662163).A,width:"1280",height:"587"})),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"find the connection address for FE ",src:n(785484).A,width:"1280",height:"343"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"3. To connect to the deployed Doris Cluster, here are some default values after deploying Doris using CloudFormation:")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"FE IP"),": Obtain the IP address of FE following the steps in the previous section.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"FE MySQL protocol port:")," 9030")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"FE HTTP protocol port"),": 8030")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Default root password"),": empty")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Default admin password:")," empty"))))}u.isMDXComponent=!0},36667:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/configure-specific-parameters-1-02a68404da0de49413e927ce78c627f6.jpeg"},223374:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/configure-specific-parameters-2-ceb37fce06a8e3f6448969749668991a.jpeg"},826709:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/configure-specific-parameters-3-a7c6b3109399344bcd5075bb1e48a742.jpeg"},140678:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/find-connection-address-for-fe-1-c20545a89a9d7bca6322546206708018.jpeg"},662163:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/find-connection-address-for-fe-2-8f03647a1597f7668059b5fde4241b10.jpeg"},785484:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/find-connection-address-for-fe-3-413321f49156410699385c752184e825.jpeg"},742092:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/how-to-connect-to-the-database-5cf97ada6d5686eb8648a3fa4e22837e.jpeg"},301461:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/start-deployment-212dd402013fb3b8b495c22f639968f7.jpeg"}}]);