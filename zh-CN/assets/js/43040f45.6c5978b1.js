"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[987179],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>d});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},g=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),u=c(t),y=i,d=u["".concat(o,".").concat(y)]||u[y]||s[y]||l;return t?r.createElement(d,a(a({ref:n},g),{},{components:t})):r.createElement(d,a({ref:n},g))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=y;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},374133:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=t(58168),i=(t(296540),t(15680));const l={title:"Pipeline Tracing",language:"zh-CN"},a=void 0,p={unversionedId:"developer-guide/pipeline-tracing",id:"developer-guide/pipeline-tracing",title:"Pipeline Tracing",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/developer-guide/pipeline-tracing.md",sourceDirName:"developer-guide",slug:"/developer-guide/pipeline-tracing",permalink:"/zh-CN/community/developer-guide/pipeline-tracing",draft:!1,tags:[],version:"current",frontMatter:{title:"Pipeline Tracing",language:"zh-CN"},sidebar:"community",previous:{title:"Doris BE\u5b58\u50a8\u5c42Benchmark\u5de5\u5177",permalink:"/zh-CN/community/developer-guide/benchmark-tool"},next:{title:"FE \u5f00\u53d1\u73af\u5883\u642d\u5efa - Eclipse",permalink:"/zh-CN/community/developer-guide/fe-eclipse-dev"}},o={},c=[{value:"\u4f7f\u7528\u6b65\u9aa4",id:"\u4f7f\u7528\u6b65\u9aa4",level:2},{value:"1. \u8bb0\u5f55\u6570\u636e",id:"1-\u8bb0\u5f55\u6570\u636e",level:3},{value:"2. \u683c\u5f0f\u8f6c\u6362",id:"2-\u683c\u5f0f\u8f6c\u6362",level:3},{value:"3. \u53ef\u89c6\u5316\u7ed3\u679c",id:"3-\u53ef\u89c6\u5316\u7ed3\u679c",level:3}],g={toc:c},u="wrapper";function s(e){let{components:n,...l}=e;return(0,i.yg)(u,(0,r.A)({},g,l,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"pipeline-tracing"},"Pipeline Tracing"),(0,i.yg)("p",null,'\u5728 Pipeline \u6267\u884c\u5f15\u64ce\u4e2d\uff0c\u6211\u4eec\u4f1a\u5c06\u6bcf\u4e2a Instance \u7684\u6267\u884c\u8ba1\u5212\u6811\u62c6\u5206\u6210\u591a\u4e2a\u5c0f\u7684 Pipeline Task\uff0c\u5e76\u5728\u6211\u4eec\u81ea\u5b9a\u4e49\u7684 Pipeline \u8c03\u5ea6\u5668\u8c03\u5ea6\u4e0b\u6267\u884c\u3002\u56e0\u6b64\uff0c\u5728\u62e5\u6709\u5927\u91cf Pipeline Task \u7684\u6267\u884c\u73af\u5883\u4e0b\uff0c\u8fd9\u4e9b Task \u5982\u4f55\u5728\u7ebf\u7a0b\u548c CPU \u6838\u95f4\u8fdb\u884c\u8c03\u5ea6\uff0c\u662f\u6267\u884c\u6027\u80fd\u7684\u4e00\u4e2a\u91cd\u8981\u5f71\u54cd\u56e0\u7d20\u3002\u6211\u4eec\u5f00\u53d1\u4e86\u4e00\u4e2a\u4e13\u95e8\u7684\u5de5\u5177\u7528\u6765\u89c2\u5bdf\u7279\u5b9a\u67e5\u8be2\u6216\u65f6\u95f4\u6bb5\u4e0a\u7684\u8c03\u5ea6\u8fc7\u7a0b\uff0c\u6211\u4eec\u5c06\u8fd9\u4e2a\u5de5\u5177\u79f0\u4e3a "Pipeline Tracing"\u3002'),(0,i.yg)("h2",{id:"\u4f7f\u7528\u6b65\u9aa4"},"\u4f7f\u7528\u6b65\u9aa4"),(0,i.yg)("h3",{id:"1-\u8bb0\u5f55\u6570\u636e"},"1. \u8bb0\u5f55\u6570\u636e"),(0,i.yg)("p",null,"\u9996\u5148\u6211\u4eec\u9700\u8981\u5bf9 Pipeline \u8c03\u5ea6\u8fc7\u7a0b\u8fdb\u884c\u8bb0\u5f55\u3002\u662f\u5426\u4ee5\u53ca\u5982\u4f55\u8bb0\u5f55\u8c03\u5ea6\u8fc7\u7a0b\uff0c\u53ef\u4ee5\u901a\u8fc7 HTTP \u63a5\u53e3\u8bbe\u7f6e\u3002\u8fd9\u4e9b\u8bbe\u7f6e\u5173\u8054\u5230\u7279\u5b9a BE\uff1a"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"\u5173\u95ed Pipeline Tracing \u8bb0\u5f55")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"curl -X POST http://{be_host}:{http_port}/api/pipeline/tracing?type=disable\n")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"\u4e3a\u6bcf\u4e2a Query \u4ea7\u751f\u4e00\u6761\u8bb0\u5f55")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"curl -X POST http://{be_host}:{http_port}/api/pipeline/tracing?type=perquery\n")),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"\u751f\u6210\u56fa\u5b9a\u65f6\u95f4\u6bb5\u5185\u7684 Tracing \u8bb0\u5f55")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"curl -X POST http://{be_host}:{http_port}/api/pipeline/tracing?type=periodic\n")),(0,i.yg)("p",null,"\u8bbe\u7f6e\u65f6\u95f4\u5468\u671f\uff08\u5355\u4f4d\u4e3a\u79d2\uff09\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"curl -X POST http://{be_host}:{http_port}/api/pipeline/tracing?dump_interval=60\n")),(0,i.yg)("h3",{id:"2-\u683c\u5f0f\u8f6c\u6362"},"2. \u683c\u5f0f\u8f6c\u6362"),(0,i.yg)("p",null,"\u8bb0\u5f55\u7684\u6570\u636e\u5c06\u4f1a\u751f\u6210\u5230\u5bf9\u5e94 BE \u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"log/tracing")," \u76ee\u5f55\u4e0b\u3002\u63a5\u4e0b\u6765\u9700\u8981\u5bf9\u6570\u636e\u8fdb\u884c\u683c\u5f0f\u8f6c\u6362\uff0c\u751f\u6210\u7b26\u5408\u53ef\u89c6\u5316\u5de5\u5177\u6240\u9700\u683c\u5f0f\u7684\u6587\u4ef6\u3002\u8fd9\u91cc\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8f6c\u6362\u5de5\u5177\u76f4\u63a5\u5bf9 BE \u751f\u6210\u7684 tracing \u8bb0\u5f55\u8fdb\u884c\u8f6c\u6362\uff0c\u53ef\u4ee5\u76f4\u63a5\u6267\u884c\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"cd doris/tools/pipeline-tracing/\npython3 origin-to-show.py -s <SOURCE_FILE> -d <DEST>.json\n")),(0,i.yg)("p",null,"\u751f\u6210\u53ef\u4ee5\u5c55\u793a\u7684 json \u6587\u4ef6\u3002\u66f4\u8be6\u7ec6\u7684\u4f7f\u7528\u8bf4\u660e\uff0c\u53ef\u4ee5\u53c2\u8003\u8be5\u76ee\u5f55\u4e0b\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"README.md")," \u6587\u4ef6\u3002"),(0,i.yg)("h3",{id:"3-\u53ef\u89c6\u5316\u7ed3\u679c"},"3. \u53ef\u89c6\u5316\u7ed3\u679c"),(0,i.yg)("p",null,"Pipeline Tracing \u7684\u53ef\u89c6\u5316\u4f7f\u7528 ",(0,i.yg)("a",{parentName:"p",href:"https://ui.perfetto.dev/"},"Perfetto"),'\u3002\u751f\u6210\u5bf9\u5e94\u683c\u5f0f\u7684\u6587\u4ef6\u540e\uff0c\u5728\u5176\u9875\u9762\u4e0a\u9009\u62e9 "Open trace file" \u6253\u5f00\u8be5\u6587\u4ef6\uff0c\u5373\u53ef\u67e5\u770b\u7ed3\u679c\uff1a'),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(432487).A,width:"2328",height:"1316"})),(0,i.yg)("p",null,"\u8be5\u5de5\u5177\u7684\u529f\u80fd\u975e\u5e38\u5f3a\u5927\uff0c\u4f8b\u5982\u53ef\u4ee5\u65b9\u4fbf\u67e5\u770b\u540c\u4e00\u4e2a Task \u5728\u5404\u4e2a\u6838\u95f4\u7684\u8c03\u5ea6\u60c5\u51b5\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(529836).A,width:"3590",height:"1964"})))}s.isMDXComponent=!0},432487:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/tracing1-61efbe67e9c3940b06464ec63edb049f.png"},529836:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/tracing2-fe28ba48da4a6e56a6f56f4303b76907.png"}}]);