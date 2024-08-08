"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[736376],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>v});var i=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(t),c=o,v=m["".concat(s,".").concat(c)]||m[c]||p[c]||r;return t?i.createElement(v,a(a({ref:n},u),{},{components:t})):i.createElement(v,a({ref:n},u))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<r;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4303:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(58168),o=(t(296540),t(15680));const r={title:"WINDOW_FUNCTION_WINDOW_FUNNEL",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/window-functions/window-function-window-funnel",id:"sql-manual/sql-functions/window-functions/window-function-window-funnel",title:"WINDOW_FUNCTION_WINDOW_FUNNEL",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/docs/sql-manual/sql-functions/window-functions/window-function-window-funnel.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function-window-funnel",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/window-function-window-funnel",draft:!1,tags:[],version:"current",frontMatter:{title:"WINDOW_FUNCTION_WINDOW_FUNNEL",language:"en"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_NTILE",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/window-function-ntile"},next:{title:"IPV4_NUM_TO_STRING",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-num-to-string"}},s={},d=[{value:"WINDOW FUNCTION WINDOW_FUNNEL",id:"window-function-window_funnel",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"example1: default mode",id:"example1-default-mode",level:4},{value:"example2: deduplication mode",id:"example2-deduplication-mode",level:4},{value:"example3: fixed mode",id:"example3-fixed-mode",level:4},{value:"example4: increase mode",id:"example4-increase-mode",level:4},{value:"keywords",id:"keywords",level:3}],u={toc:d},m="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(m,(0,i.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"window-function-window_funnel"},"WINDOW FUNCTION WINDOW_FUNNEL"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"Searches for event chains in a sliding time window and calculates the maximum number of events that occurred from the chain."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"window is the length of time window in seconds."),(0,o.yg)("li",{parentName:"ul"},"mode can be one of the followings:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},'"default": Defualt mode.'),(0,o.yg)("li",{parentName:"ul"},'"deduplication": If the same event holds for the sequence of events, then such repeating event interrupts further processing. E.g. the array parameter is ',"[event1='A', event2='B', event3='C', event4='D']",', and the original event chain is "A-B-C-B-D". Since event B repeats, the filtered event chain can only be "A-B-C" and the max event level is 3.'),(0,o.yg)("li",{parentName:"ul"},'"fixed": Don\'t allow interventions of other events. E.g. the array parameter is ',"[event1='A', event2='B', event3='C', event4='D']",", and the original event chain is A->B->D->C, it stops finding A->B->C at the D and the max event level is 2."),(0,o.yg)("li",{parentName:"ul"},'"increase": Apply conditions only to events with strictly increasing timestamps.'))),(0,o.yg)("li",{parentName:"ul"},"timestamp_column specifies column of DATETIME type, sliding time window works on it."),(0,o.yg)("li",{parentName:"ul"},"evnetN is boolean expression like eventID = 1004.")),(0,o.yg)("p",null,"The function works according to the algorithm:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The function searches for data that triggers the first condition in the chain and sets the event counter to 1. This is the moment when the sliding window starts."),(0,o.yg)("li",{parentName:"ul"},"If events from the chain occur sequentially within the window, the counter is incremented. If the sequence of events is disrupted, the counter is not incremented."),(0,o.yg)("li",{parentName:"ul"},"If the data has multiple event chains at varying points of completion, the function will only output the size of the longest chain.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"window_funnel(window, mode, timestamp_column, event1, event2, ... , eventN)\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("h4",{id:"example1-default-mode"},"example1: default mode"),(0,o.yg)("p",null,"Using the ",(0,o.yg)("inlineCode",{parentName:"p"},"default")," mode, find out the maximum number of consecutive events corresponding to different ",(0,o.yg)("inlineCode",{parentName:"p"},"user_id"),", with a time window of ",(0,o.yg)("inlineCode",{parentName:"p"},"5")," minutes:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE events(\n    user_id BIGINT,\n    event_name VARCHAR(64),\n    event_timestamp datetime,\n    phone_brand varchar(64),\n    tab_num int\n) distributed by hash(user_id) buckets 3 properties(\"replication_num\" = \"1\");\n\nINSERT INTO\n    events\nVALUES\n    (100123, 'login', '2022-05-14 10:01:00', 'HONOR', 1),\n    (100123, 'visit', '2022-05-14 10:02:00', 'HONOR', 2),\n    (100123, 'order', '2022-05-14 10:04:00', 'HONOR', 3),\n    (100123, 'payment', '2022-05-14 10:10:00', 'HONOR', 4),\n    (100125, 'login', '2022-05-15 11:00:00', 'XIAOMI', 1),\n    (100125, 'visit', '2022-05-15 11:01:00', 'XIAOMI', 2),\n    (100125, 'order', '2022-05-15 11:02:00', 'XIAOMI', 6),\n    (100126, 'login', '2022-05-15 12:00:00', 'IPHONE', 1),\n    (100126, 'visit', '2022-05-15 12:01:00', 'HONOR', 2),\n    (100127, 'login', '2022-05-15 11:30:00', 'VIVO', 1),\n    (100127, 'visit', '2022-05-15 11:31:00', 'VIVO', 5);\n\nSELECT\n    user_id,\n    window_funnel(\n        300,\n        \"default\",\n        event_timestamp,\n        event_name = 'login',\n        event_name = 'visit',\n        event_name = 'order',\n        event_name = 'payment'\n    ) AS level\nFROM\n    events\nGROUP BY\n    user_id\norder BY\n    user_id;\n\n+---------+-------+\n| user_id | level |\n+---------+-------+\n|  100123 |     3 |\n|  100125 |     3 |\n|  100126 |     2 |\n|  100127 |     2 |\n+---------+-------+\n")),(0,o.yg)("p",null,"For ",(0,o.yg)("inlineCode",{parentName:"p"},"uesr_id=100123"),", because the time when the ",(0,o.yg)("inlineCode",{parentName:"p"},"payment")," event occurred exceeds the time window, the matched event chain is ",(0,o.yg)("inlineCode",{parentName:"p"},"login-visit-order"),"."),(0,o.yg)("h4",{id:"example2-deduplication-mode"},"example2: deduplication mode"),(0,o.yg)("p",null,"Use the ",(0,o.yg)("inlineCode",{parentName:"p"},"deduplication")," mode to find out the maximum number of consecutive events corresponding to different user_ids, with a time window of 1 hour:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE events(\n    user_id BIGINT,\n    event_name VARCHAR(64),\n    event_timestamp datetime,\n    phone_brand varchar(64),\n    tab_num int\n) distributed by hash(user_id) buckets 3 properties(\"replication_num\" = \"1\");\n\nINSERT INTO\n    events\nVALUES\n    (100123, 'login', '2022-05-14 10:01:00', 'HONOR', 1),\n    (100123, 'visit', '2022-05-14 10:02:00', 'HONOR', 2),\n    (100123, 'login', '2022-05-14 10:03:00', 'HONOR', 3),\n    (100123, 'order', '2022-05-14 10:04:00', \"HONOR\", 4),\n    (100123, 'payment', '2022-05-14 10:10:00', 'HONOR', 4),\n    (100125, 'login', '2022-05-15 11:00:00', 'XIAOMI', 1),\n    (100125, 'visit', '2022-05-15 11:01:00', 'XIAOMI', 2),\n    (100125, 'order', '2022-05-15 11:02:00', 'XIAOMI', 6),\n    (100126, 'login', '2022-05-15 12:00:00', 'IPHONE', 1),\n    (100126, 'visit', '2022-05-15 12:01:00', 'HONOR', 2),\n    (100127, 'login', '2022-05-15 11:30:00', 'VIVO', 1),\n    (100127, 'visit', '2022-05-15 11:31:00', 'VIVO', 5);\n\nSELECT\n    user_id,\n    window_funnel(\n        3600,\n        \"deduplication\",\n        event_timestamp,\n        event_name = 'login',\n        event_name = 'visit',\n        event_name = 'order',\n        event_name = 'payment'\n    ) AS level\nFROM\n    events\nGROUP BY\n    user_id\norder BY\n    user_id;\n\n+---------+-------+\n| user_id | level |\n+---------+-------+\n|  100123 |     2 |\n|  100125 |     3 |\n|  100126 |     2 |\n|  100127 |     2 |\n+---------+-------+\n")),(0,o.yg)("p",null,"For ",(0,o.yg)("inlineCode",{parentName:"p"},"uesr_id=100123"),", after matching the ",(0,o.yg)("inlineCode",{parentName:"p"},"visit")," event, the ",(0,o.yg)("inlineCode",{parentName:"p"},"login")," event appears repeatedly, so the matched event chain is ",(0,o.yg)("inlineCode",{parentName:"p"},"login-visit"),"."),(0,o.yg)("h4",{id:"example3-fixed-mode"},"example3: fixed mode"),(0,o.yg)("p",null,"Use the ",(0,o.yg)("inlineCode",{parentName:"p"},"fixed")," mode to find out the maximum number of consecutive events corresponding to different ",(0,o.yg)("inlineCode",{parentName:"p"},"user_id"),", with a time window of ",(0,o.yg)("inlineCode",{parentName:"p"},"1")," hour:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE events(\n    user_id BIGINT,\n    event_name VARCHAR(64),\n    event_timestamp datetime,\n    phone_brand varchar(64),\n    tab_num int\n) distributed by hash(user_id) buckets 3 properties(\"replication_num\" = \"1\");\n\nINSERT INTO\n    events\nVALUES\n    (100123, 'login', '2022-05-14 10:01:00', 'HONOR', 1),\n    (100123, 'visit', '2022-05-14 10:02:00', 'HONOR', 2),\n    (100123, 'order', '2022-05-14 10:03:00', \"HONOR\", 4),\n    (100123, 'login2', '2022-05-14 10:04:00', 'HONOR', 3),\n    (100123, 'payment', '2022-05-14 10:10:00', 'HONOR', 4),\n    (100125, 'login', '2022-05-15 11:00:00', 'XIAOMI', 1),\n    (100125, 'visit', '2022-05-15 11:01:00', 'XIAOMI', 2),\n    (100125, 'order', '2022-05-15 11:02:00', 'XIAOMI', 6),\n    (100126, 'login', '2022-05-15 12:00:00', 'IPHONE', 1),\n    (100126, 'visit', '2022-05-15 12:01:00', 'HONOR', 2),\n    (100127, 'login', '2022-05-15 11:30:00', 'VIVO', 1),\n    (100127, 'visit', '2022-05-15 11:31:00', 'VIVO', 5);\n\nSELECT\n    user_id,\n    window_funnel(\n        3600,\n        \"fixed\",\n        event_timestamp,\n        event_name = 'login',\n        event_name = 'visit',\n        event_name = 'order',\n        event_name = 'payment'\n    ) AS level\nFROM\n    events\nGROUP BY\n    user_id\norder BY\n    user_id;\n\n+---------+-------+\n| user_id | level |\n+---------+-------+\n|  100123 |     3 |\n|  100125 |     3 |\n|  100126 |     2 |\n|  100127 |     2 |\n+---------+-------+\n")),(0,o.yg)("p",null,"For ",(0,o.yg)("inlineCode",{parentName:"p"},"uesr_id=100123"),", after matching the ",(0,o.yg)("inlineCode",{parentName:"p"},"order")," event, the event chain is interrupted by the ",(0,o.yg)("inlineCode",{parentName:"p"},"login2")," event, so the matched event chain is ",(0,o.yg)("inlineCode",{parentName:"p"},"login-visit-order"),"."),(0,o.yg)("h4",{id:"example4-increase-mode"},"example4: increase mode"),(0,o.yg)("p",null,"Use the ",(0,o.yg)("inlineCode",{parentName:"p"},"increase")," mode to find out the maximum number of consecutive events corresponding to different ",(0,o.yg)("inlineCode",{parentName:"p"},"user_id"),", with a time window of ",(0,o.yg)("inlineCode",{parentName:"p"},"1")," hour:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE events(\n    user_id BIGINT,\n    event_name VARCHAR(64),\n    event_timestamp datetime,\n    phone_brand varchar(64),\n    tab_num int\n) distributed by hash(user_id) buckets 3 properties(\"replication_num\" = \"1\");\n\nINSERT INTO\n    events\nVALUES\n    (100123, 'login', '2022-05-14 10:01:00', 'HONOR', 1),\n    (100123, 'visit', '2022-05-14 10:02:00', 'HONOR', 2),\n    (100123, 'order', '2022-05-14 10:04:00', \"HONOR\", 4),\n    (100123, 'payment', '2022-05-14 10:04:00', 'HONOR', 4),\n    (100125, 'login', '2022-05-15 11:00:00', 'XIAOMI', 1),\n    (100125, 'visit', '2022-05-15 11:01:00', 'XIAOMI', 2),\n    (100125, 'order', '2022-05-15 11:02:00', 'XIAOMI', 6),\n    (100126, 'login', '2022-05-15 12:00:00', 'IPHONE', 1),\n    (100126, 'visit', '2022-05-15 12:01:00', 'HONOR', 2),\n    (100127, 'login', '2022-05-15 11:30:00', 'VIVO', 1),\n    (100127, 'visit', '2022-05-15 11:31:00', 'VIVO', 5);\n\nSELECT\n    user_id,\n    window_funnel(\n        3600,\n        \"increase\",\n        event_timestamp,\n        event_name = 'login',\n        event_name = 'visit',\n        event_name = 'order',\n        event_name = 'payment'\n    ) AS level\nFROM\n    events\nGROUP BY\n    user_id\norder BY\n    user_id;\n\n+---------+-------+\n| user_id | level |\n+---------+-------+\n|  100123 |     3 |\n|  100125 |     3 |\n|  100126 |     2 |\n|  100127 |     2 |\n+---------+-------+\n")),(0,o.yg)("p",null,"For ",(0,o.yg)("inlineCode",{parentName:"p"},"uesr_id=100123"),", the timestamp of the ",(0,o.yg)("inlineCode",{parentName:"p"},"payment")," event and the timestamp of the ",(0,o.yg)("inlineCode",{parentName:"p"},"order")," event occur in the same second and are not incremented, so the matched event chain is ",(0,o.yg)("inlineCode",{parentName:"p"},"login-visit-order"),"."),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,WINDOW_FUNNEL\n")))}p.isMDXComponent=!0}}]);