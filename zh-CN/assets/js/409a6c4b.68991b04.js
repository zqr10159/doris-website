"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[549202],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>f});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,f=m["".concat(o,".").concat(u)]||m[u]||y[u]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[m]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},271660:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(58168),a=(r(296540),r(15680));const i={title:"MySQL \u5b89\u5168\u4f20\u8f93",language:"zh-CN"},l=void 0,c={unversionedId:"admin-manual/auth/certificate",id:"admin-manual/auth/certificate",title:"MySQL \u5b89\u5168\u4f20\u8f93",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/auth/certificate.md",sourceDirName:"admin-manual/auth",slug:"/admin-manual/auth/certificate",permalink:"/zh-CN/docs/dev/admin-manual/auth/certificate",draft:!1,tags:[],version:"current",frontMatter:{title:"MySQL \u5b89\u5168\u4f20\u8f93",language:"zh-CN"},sidebar:"docs",previous:{title:"\u57fa\u4e8e Apache Ranger \u7684\u9274\u6743\u7ba1\u7406",permalink:"/zh-CN/docs/dev/admin-manual/auth/ranger"},next:{title:"HTTP \u5b89\u5168\u4f20\u8f93",permalink:"/zh-CN/docs/dev/admin-manual/auth/fe-certificate"}},o={},p=[{value:"\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6",id:"\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6",level:2}],s={toc:p},m="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Doris \u5f00\u542f SSL \u529f\u80fd\u9700\u8981\u914d\u7f6e CA \u5bc6\u94a5\u8bc1\u4e66\u548c Server \u7aef\u5bc6\u94a5\u8bc1\u4e66\uff0c\u5982\u9700\u5f00\u542f\u53cc\u5411\u8ba4\u8bc1\uff0c\u8fd8\u9700\u751f\u6210 Client \u7aef\u5bc6\u94a5\u8bc1\u4e66\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u9ed8\u8ba4\u7684 CA \u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\u4f4d\u4e8e",(0,a.yg)("inlineCode",{parentName:"p"},"Doris/fe/mysql_ssl_default_certificate/ca_certificate.p12"),"\uff0c\u9ed8\u8ba4\u5bc6\u7801\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"doris"),"\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 FE \u914d\u7f6e\u6587\u4ef6",(0,a.yg)("inlineCode",{parentName:"p"},"conf/fe.conf"),"\uff0c\u6dfb\u52a0",(0,a.yg)("inlineCode",{parentName:"p"},"mysql_ssl_default_ca_certificate = /path/to/your/certificate"),"\u4fee\u6539 CA \u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,a.yg)("inlineCode",{parentName:"p"},"mysql_ssl_default_ca_certificate_password = your_password"),"\u6dfb\u52a0\u5bf9\u5e94\u60a8\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\u7684\u5bc6\u7801\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u9ed8\u8ba4\u7684 Server \u7aef\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\u4f4d\u4e8e",(0,a.yg)("inlineCode",{parentName:"p"},"Doris/fe/mysql_ssl_default_certificate/server_certificate.p12"),"\uff0c\u9ed8\u8ba4\u5bc6\u7801\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"doris"),"\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 FE \u914d\u7f6e\u6587\u4ef6",(0,a.yg)("inlineCode",{parentName:"p"},"conf/fe.conf"),"\uff0c\u6dfb\u52a0",(0,a.yg)("inlineCode",{parentName:"p"},"mysql_ssl_default_server_certificate = /path/to/your/certificate"),"\u4fee\u6539 Server \u7aef\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,a.yg)("inlineCode",{parentName:"p"},"mysql_ssl_default_server_certificate_password = your_password"),"\u6dfb\u52a0\u5bf9\u5e94\u60a8\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6\u7684\u5bc6\u7801\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u9ed8\u8ba4\u751f\u6210\u4e86\u4e00\u4efd Client \u7aef\u7684\u5bc6\u94a5\u8bc1\u4e66\uff0c\u5206\u522b\u5b58\u653e\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"Doris/fe/mysql_ssl_default_certificate/client-key.pem"),"\u548c",(0,a.yg)("inlineCode",{parentName:"p"},"Doris/fe/mysql_ssl_default_certificate/client_certificate/"),"\u3002"))),(0,a.yg)("h2",{id:"\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6"},"\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8bc1\u4e66\u6587\u4ef6"),(0,a.yg)("p",null,"\u9664\u4e86 Doris \u9ed8\u8ba4\u7684\u8bc1\u4e66\u6587\u4ef6\uff0c\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,a.yg)("inlineCode",{parentName:"p"},"openssl"),"\u751f\u6210\u81ea\u5b9a\u4e49\u7684\u8bc1\u4e66\u6587\u4ef6\u3002\u6b65\u9aa4\u53c2\u8003",(0,a.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/creating-ssl-files-using-openssl.html"},"MySQL \u751f\u6210 SSL \u8bc1\u4e66"),"\n\u5177\u4f53\u5982\u4e0b\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u751f\u6210 CA\u3001Server \u7aef\u548c Client \u7aef\u7684\u5bc6\u94a5\u548c\u8bc1\u4e66")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-BASH"},"# \u751f\u6210CA certificate\nopenssl genrsa 2048 > ca-key.pem\nopenssl req -new -x509 -nodes -days 3600 \\\n        -key ca-key.pem -out ca.pem\n\n# \u751f\u6210server certificate, \u5e76\u7528\u4e0a\u8ff0CA\u7b7e\u540d\n# server-cert.pem = public key, server-key.pem = private key\nopenssl req -newkey rsa:2048 -days 3600 \\\n        -nodes -keyout server-key.pem -out server-req.pem\nopenssl rsa -in server-key.pem -out server-key.pem\nopenssl x509 -req -in server-req.pem -days 3600 \\\n        -CA ca.pem -CAkey ca-key.pem -set_serial 01 -out server-cert.pem\n\n# \u751f\u6210client certificate, \u5e76\u7528\u4e0a\u8ff0CA\u7b7e\u540d\n# client-cert.pem = public key, client-key.pem = private key\nopenssl req -newkey rsa:2048 -days 3600 \\\n        -nodes -keyout client-key.pem -out client-req.pem\nopenssl rsa -in client-key.pem -out client-key.pem\nopenssl x509 -req -in client-req.pem -days 3600 \\\n        -CA ca.pem -CAkey ca-key.pem -set_serial 01 -out client-cert.pem\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u9a8c\u8bc1\u521b\u5efa\u7684\u8bc1\u4e66\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"openssl verify -CAfile ca.pem server-cert.pem client-cert.pem\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"\u5c06\u60a8\u7684 CA \u5bc6\u94a5\u548c\u8bc1\u4e66\u548c Sever \u7aef\u5bc6\u94a5\u548c\u8bc1\u4e66\u5206\u522b\u5408\u5e76\u5230 PKCS#12 (P12) \u5305\u4e2d\u3002\u60a8\u4e5f\u53ef\u4ee5\u6307\u5b9a\u67d0\u4e2a\u8bc1\u4e66\u683c\u5f0f\uff0c\u9ed8\u8ba4 PKCS12\uff0c\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 conf/fe.conf \u914d\u7f6e\u6587\u4ef6\uff0c\u6dfb\u52a0\u53c2\u6570 ssl_trust_store_type \u6307\u5b9a\u8bc1\u4e66\u683c\u5f0f")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# \u6253\u5305CA\u5bc6\u94a5\u548c\u8bc1\u4e66\nopenssl pkcs12 -inkey ca-key.pem -in ca.pem -export -out ca_certificate.p12\n\n# \u6253\u5305Server\u7aef\u5bc6\u94a5\u548c\u8bc1\u4e66\nopenssl pkcs12 -inkey server-key.pem -in server-cert.pem -export -out server_certificate.p12\n")),(0,a.yg)("admonition",{title:"Note",type:"info"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/api-connect/2018.x?topic=overview-generating-self-signed-certificate-using-openssl"},"\u53c2\u8003\u6587\u6863"))))}y.isMDXComponent=!0}}]);