"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[700827],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(296540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=c(t),d=s,f=y["".concat(a,".").concat(d)]||y[d]||u[d]||o;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i[y]="string"==typeof e?e:s,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},195444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(58168),s=(t(296540),t(15680));const o={title:"SM4",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/sm4",id:"version-3.0/sql-manual/sql-functions/encrypt-digest-functions/sm4",title:"SM4",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/encrypt-digest-functions/sm4.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/sm4",permalink:"/zh-CN/docs/sql-manual/sql-functions/encrypt-digest-functions/sm4",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SM4",language:"zh-CN"},sidebar:"docs",previous:{title:"MD5SUM",permalink:"/zh-CN/docs/sql-manual/sql-functions/encrypt-digest-functions/md5sum"},next:{title:"SM3",permalink:"/zh-CN/docs/sql-manual/sql-functions/encrypt-digest-functions/sm3"}},a={},c=[{value:"SM4_ENCRYPT",id:"sm4_encrypt",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"SM4_DECRYPT",id:"sm4_decrypt",level:2},{value:"description",id:"description-1",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"example",id:"example-1",level:3},{value:"keywords",id:"keywords-1",level:3}],p={toc:c},y="wrapper";function u(e){let{components:n,...t}=e;return(0,s.yg)(y,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"sm4_encrypt"},"SM4_ENCRYPT"),(0,s.yg)("h3",{id:"description"},"description"),(0,s.yg)("p",null,"SM4 \u52a0\u5bc6\u51fd\u6570"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"VARCHAR SM4_ENCRYPT(str,key_str[,init_vector])")),(0,s.yg)("p",null,"\u8fd4\u56de\u52a0\u5bc6\u540e\u7684\u7ed3\u679c"),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"MySQL > select TO_BASE64(SM4_ENCRYPT('text','F3229A0B371ED2D9441B830D21A390C3'));\n+--------------------------------+\n| to_base64(sm4_encrypt('text')) |\n+--------------------------------+\n| aDjwRflBrDjhBZIOFNw3Tg==       |\n+--------------------------------+\n1 row in set (0.010 sec)\n\nMySQL > set block_encryption_mode=\"SM4_128_CBC\";\nQuery OK, 0 rows affected (0.001 sec)\n\nMySQL > select to_base64(SM4_ENCRYPT('text','F3229A0B371ED2D9441B830D21A390C3', '0123456789'));\n+----------------------------------------------------------------------------------+\n| to_base64(sm4_encrypt('text', 'F3229A0B371ED2D9441B830D21A390C3', '0123456789')) |\n+----------------------------------------------------------------------------------+\n| G7yqOKfEyxdagboz6Qf01A==                                                         |\n+----------------------------------------------------------------------------------+\n1 row in set (0.014 sec)\n")),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"SM4, SM4_ENCRYPT\n")),(0,s.yg)("h2",{id:"sm4_decrypt"},"SM4_DECRYPT"),(0,s.yg)("h3",{id:"description-1"},"description"),(0,s.yg)("p",null,"SM4 \u89e3\u5bc6\u51fd\u6570"),(0,s.yg)("h4",{id:"syntax-1"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"VARCHAR SM4_DECRYPT(str,key_str[,init_vector])")),(0,s.yg)("p",null,"\u8fd4\u56de\u89e3\u5bc6\u540e\u7684\u7ed3\u679c"),(0,s.yg)("h3",{id:"example-1"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"MySQL [(none)]> select SM4_DECRYPT(FROM_BASE64('aDjwRflBrDjhBZIOFNw3Tg=='),'F3229A0B371ED2D9441B830D21A390C3');\n+------------------------------------------------------+\n| sm4_decrypt(from_base64('aDjwRflBrDjhBZIOFNw3Tg==')) |\n+------------------------------------------------------+\n| text                                                 |\n+------------------------------------------------------+\n1 row in set (0.009 sec)\n\nMySQL> set block_encryption_mode=\"SM4_128_CBC\";\nQuery OK, 0 rows affected (0.006 sec)\n\nMySQL > select SM4_DECRYPT(FROM_BASE64('G7yqOKfEyxdagboz6Qf01A=='),'F3229A0B371ED2D9441B830D21A390C3', '0123456789');\n+--------------------------------------------------------------------------------------------------------+\n| sm4_decrypt(from_base64('G7yqOKfEyxdagboz6Qf01A=='), 'F3229A0B371ED2D9441B830D21A390C3', '0123456789') |\n+--------------------------------------------------------------------------------------------------------+\n| text                                                                                                   |\n+--------------------------------------------------------------------------------------------------------+\n1 row in set (0.012 sec)\n")),(0,s.yg)("h3",{id:"keywords-1"},"keywords"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"SM4, SM4_DECRYPT\n")))}u.isMDXComponent=!0}}]);