"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[988714,212798],{101483:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var a=n(296540),o=n(320053),r=n(901003),l=n(117559),i=n(2967),c=n(381754),s=n(32252),d=n(26588),m=n(237995),u=n(721312),p=n(823104),b=n(75062);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:l,cancelScroll:i}=(0,p.gk)();return(0,p.Mq)(((e,n)=>{let{scrollY:a}=e;const l=n?.scrollY;l&&(r.current?r.current=!1:a>=l?(i(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,b.$)((e=>{e.location.hash&&(r.current=!0,o(!1))})),{shown:n,scrollToTop:()=>l(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",l.G.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var f=n(553109),g=n(956347),v=n(224581),k=n(406342),C=n(23465),_=n(58168);function A(e){return a.createElement("svg",(0,_.A)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const N={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function x(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",N.collapseSidebarButton),onClick:t},a.createElement(A,{className:N.collapseSidebarButtonIcon}))}var S=n(965041);var w=n(689532);const y=Symbol("EmptyContext"),I=a.createContext(y);function T(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(I.Provider,{value:r},t)}var L=n(41422),B=n(299169),M=n(175489),H=n(992303);function P(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.T)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function W(e){let{item:t,onItemClick:n,activePath:r,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:p,className:b,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,k.p)(),f=function(e){const t=(0,H.A)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c._o)(e):void 0),[e,t])}(t),g=(0,c.w8)(t,r),v=(0,B.ys)(h,r),{collapsed:C,setCollapsed:A}=(0,L.u)({initialState:()=>!!p&&(!g&&t.collapsed)}),{expandedItem:N,setExpandedItem:x}=function(){const e=(0,a.useContext)(I);if(e===y)throw new w.dV("DocSidebarItemsExpandedStateProvider");return e}(),S=function(e){void 0===e&&(e=!C),x(e?null:s),A(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const r=(0,w.ZC)(t);(0,a.useEffect)((()=>{t&&!r&&n&&o(!1)}),[t,r,n,o])}({isActive:g,collapsed:C,updateCollapsed:S}),a.createElement("li",{className:(0,o.A)(l.G.docs.docSidebarItemCategory,l.G.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":C},b)},a.createElement("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(M.A,(0,_.A)({id:""+(1===i?"menu__group":""),className:(0,o.A)(`menu__link menu__link_level_${i}`,{"menu__link--sublist":p,"menu__link--sublist-caret":!h&&p,"menu__link--active":g}),onClick:p?e=>{n?.(t),h?S(!1):(e.preventDefault(),S())}:()=>{n?.(t)},"aria-current":v?"page":void 0,"aria-expanded":p?!C:void 0,href:p?f??"#":f},d),u),h&&p&&a.createElement(P,{categoryLabel:u,onClick:e=>{e.preventDefault(),S()}})),a.createElement(L.N,{lazy:!0,as:"ul",className:"menu__list "+(1===i?"menu__list_level_2":""),collapsed:C},a.createElement(Y,{items:m,tabIndex:C?-1:0,onItemClick:n,activePath:r,level:i+1})))}var V=n(316654),D=n(143186);const G={menuExternalLink:"menuExternalLink_NmtK"};function F(e){let{item:t,onItemClick:n,activePath:r,level:i,index:s,...d}=e;const{href:m,label:u,className:p,autoAddBaseUrl:b}=t,h=(0,c.w8)(t,r),E=(0,V.A)(m);return a.createElement("li",{className:(0,o.A)(l.G.docs.docSidebarItemLink,l.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",p),key:u},a.createElement(M.A,(0,_.A)({className:(0,o.A)("menu__link",!E&&G.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:b,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(D.A,null)))}const j={menuHtmlItem:"menuHtmlItem_M9Kj"};function z(e){let{item:t,level:n,index:r}=e;const{value:i,defaultStyle:c,className:s}=t;return a.createElement("li",{className:(0,o.A)(l.G.docs.docSidebarItemLink,l.G.docs.docSidebarItemLinkLevel(n),c&&[j.menuHtmlItem,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:i}})}function R(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(W,(0,_.A)({item:t},n));case"html":return a.createElement(z,(0,_.A)({item:t},n));default:return a.createElement(F,(0,_.A)({item:t},n))}}function U(e){let{items:t,...n}=e;return a.createElement(T,null,t.map(((e,t)=>a.createElement(R,(0,_.A)({key:t,item:e,index:t},n)))))}const Y=(0,a.memo)(U),O={menu:"menu_Y1UP",menuWithAnnouncementBar:"menuWithAnnouncementBar_fPny",currentVersion:"currentVersion_MsVj"};var q=n(144586);function K(e){let{path:t,sidebar:n,className:r}=e;const i=function(){const{isActive:e}=(0,S.Mj)(),[t,n]=(0,a.useState)(e);return(0,p.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}(),{siteConfig:c}=(0,q.A)(),[s,d]=(0,a.useState)(!0),[m,b]=(0,a.useState)(!0),[h,E]=(0,a.useState)(!1),[f,g]=(0,a.useState)(!1),[v,k]=(0,a.useState)("3.0");return(0,a.useEffect)((()=>{if("undefined"!=typeof window){const e=["gettingStarted","benchmark","ecosystem","faq","releasenotes"].some((e=>location.pathname.includes(e))),t=location.pathname.includes("zh-CN/docs")?location.pathname.split("/")[2]:location.pathname.split("/")[1],n=location.pathname.includes("zh-CN/docs")?location.pathname.split("/")[3]:location.pathname.split("/")[2];"docs"===t&&["dev","2.1","2.0","1.2"].includes(n)?k(n):k("3.0"),d("docs"===t),b(!location.pathname.includes("zh-CN")),E(!e)}}),["undefined"!=typeof window&&location.pathname]),a.createElement("nav",{"aria-label":(0,u.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu custom-scrollbar",O.menu,i&&O.menuWithAnnouncementBar,r)},a.createElement("ul",{className:(0,o.A)(l.G.docs.docSidebarMenu,"menu__list")},h&&a.createElement("div",{className:O.currentVersion},m?"Version\uff1a":"\u5f53\u524d\u7248\u672c\uff1a"," ",v),a.createElement(Y,{items:n,activePath:t,level:1})))}function X(e){let{path:t,sidebar:n,onCollapse:r,isHidden:l}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:c}}}=(0,k.p)();t.includes("/docs");return a.createElement("div",{className:(0,o.A)("sidebar ",i&&"sidebar-with-hideable-navbar",l&&"sidebar-hidden")},i&&a.createElement(C.A,{tabIndex:-1,className:"sidebar-logo"}),a.createElement(K,{path:t,sidebar:n}),c&&a.createElement(x,{onClick:r}))}const $=a.memo(X);var Z=n(475600),J=n(589876);const Q=e=>{let{sidebar:t,path:n}=e;const r=(0,J.M)();return a.createElement("ul",{className:(0,o.A)(l.G.docs.docSidebarMenu,"menu__list")},a.createElement(Y,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function ee(e){return a.createElement(Z.GX,{component:Q,props:e})}const te=a.memo(ee);function ne(e){const t=(0,v.l)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement($,e),o&&a.createElement(te,e))}const ae={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function oe(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ae.expandButton,title:(0,u.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(A,{className:ae.expandButtonIcon}))}const re={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function le(e){let{children:t}=e;const n=(0,d.t)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function ie(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:i}=(0,g.zy)(),[c,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&s(!1),!c&&(0,f.O)()&&s(!0),r((e=>!e))}),[r,c]);return a.createElement("aside",{className:(0,o.A)(l.G.docs.docSidebarContainer,re.docSidebarContainer,n&&re.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(re.docSidebarContainer)&&n&&s(!0)}},a.createElement(le,null,a.createElement("div",{className:(0,o.A)(re.sidebarViewport,c&&re.sidebarViewportHidden)},a.createElement(ne,{sidebar:t,path:i,onCollapse:d,isHidden:c}),c&&a.createElement(oe,{toggleSidebar:d}))))}const ce={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function se(e){let{hiddenSidebarContainer:t,children:n}=e;const r=(0,d.t)();return a.createElement("main",{className:(0,o.A)(ce.docMainContainer,(t||!r)&&ce.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",ce.docItemWrapper,t&&ce.docItemWrapperEnhanced)},n))}const de={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX","themedComponent--light":"themedComponent--light_NU7w"};function me(e){let{children:t}=e;const n=(0,d.t)(),[o,r]=(0,a.useState)(!1);return a.createElement(m.A,{wrapperClassName:de.docsWrapper},a.createElement(E,null),a.createElement("div",{className:de.docPage},n&&a.createElement(ie,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:r}),a.createElement(se,{hiddenSidebarContainer:o},t)))}var ue=n(212798),pe=n(841463);function be(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(pe.A,{version:t.version,tag:(0,i.tU)(t.pluginId,t.version)}),a.createElement(r.be,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function he(e){const{versionMetadata:t}=e,n=(0,c.mz)(e);if(!n)return a.createElement(ue.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(be,e),a.createElement(r.e3,{className:(0,o.A)(l.G.wrapper.docsPages,l.G.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.n,{version:t},a.createElement(d.V,{name:m,items:u},a.createElement(me,null,i)))))}},32252:(e,t,n)=>{n.d(t,{n:()=>l,r:()=>i});var a=n(296540),o=n(689532);const r=a.createContext(null);function l(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function i(){const e=(0,a.useContext)(r);if(null===e)throw new o.dV("DocsVersionProvider");return e}},525669:(e,t,n)=>{n.d(t,{Y:()=>o});var a=n(296540);function o(e){return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"transition-slide",width:"16",height:"14",viewBox:"0 0 16 14",fill:"none"},a.createElement("path",{d:"M9.37549 12.3542L14.8755 6.85419L9.37549 1.35419",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M1.12549 6.85419L14.8755 6.85419",stroke:"currentColor",strokeWidth:"1.65",strokeLinecap:"round",strokeLinejoin:"round"}))}},607352:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(58168),o=n(175489),r=n(296540);function l(){return r.createElement("svg",{width:"1rem",height:"1rem",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M14.8497 8.99993L14.8497 14.5349C14.8497 14.8332 14.6079 15.0749 14.3097 15.0749H3.68966C3.39142 15.0749 3.14966 14.8332 3.14966 14.5349V3.46493C3.14966 3.16669 3.39142 2.92493 3.68966 2.92493H8.53166",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M11.4746 2.92493H14.3096C14.6078 2.92493 14.8496 3.16669 14.8496 3.46493V6.29993",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M13.9944 3.82495L8.90322 8.91612",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}))}function i(e){const{className:t="primary-btn",label:n,linkIcon:i=r.createElement(l,null),...c}=e;return r.createElement(o.A,(0,a.A)({},c,{className:`flex group items-center justify-center hover:no-underline external-link ${t}`}),r.createElement("span",{className:"mr-2"},n),r.createElement("span",{className:"transition-slide"},i))}},212798:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(296540),o=n(721312),r=n(901003),l=n(237995),i=n(607352),c=n(525669);function s(){return a.createElement(a.Fragment,null,a.createElement(r.be,{title:(0,o.T)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(l.A,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col"},a.createElement("div",{className:"flex justify-center mb-10"},a.createElement("img",{style:{width:120},src:n(864639).default,alt:""})),a.createElement("h1",{className:"text-[1.75rem] text-[#1D1D1D] leading-[1.6] text-center"},a.createElement(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",{className:"text-center mt-2 text-sm text-[#8592A6]"},a.createElement(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"Oops! The page you are looking for can't be found. In any case, try to look for a different page or report this issue.")),a.createElement("div",{className:"flex justify-center gap-x-6 lg:gap-x-10 mt-10"},a.createElement("div",{className:"w-[9.75rem]"},a.createElement(i.A,{to:"/",label:"Go to home",className:"text-sm h-[2.625rem] bg-primary text-white rounded-md hover:text-white cursor-pointer",linkIcon:a.createElement(c.Y,null)})),a.createElement("div",{className:"w-[9.75rem]"},a.createElement(i.A,{label:"Report this issue",linkIcon:a.createElement(c.Y,null),to:"https://github.com/apache/doris-website/issues",className:"text-sm border border-[#444FD9] h-[2.625rem] rounded-md text-primary cursor-pointer"}))))))))}},864639:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/empty-data-9b944fdadf5e8f062bf81a4820638e96.png"}}]);