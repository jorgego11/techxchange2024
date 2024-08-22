"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[6235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6094:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={title:"TechJam Troubleshooting"},i="TechJam Troubleshooting",l={type:"mdx",permalink:"/techxchange2024/troubleshooting",source:"@site/src/pages/troubleshooting.md",title:"TechJam Troubleshooting",description:"If you are experiencing issues with your environment you can use this guide to",frontMatter:{title:"TechJam Troubleshooting"}},s=[{value:"Collect Automation Logs",id:"collect-automation-logs",level:2},{value:"Collect Transaction and Reservation IDs",id:"collect-transaction-and-reservation-ids",level:2}],p={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"techjam-troubleshooting"},"TechJam Troubleshooting"),(0,o.kt)("p",null,"If you are experiencing issues with your environment you can use this guide to\nhelp provide additional context for the SWAT team to assist with troubleshooting\nyour issue."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You have access to a TechZone environment but the environment is not\nconfigured as your would expect.\n",(0,o.kt)("a",{parentName:"p",href:"#collect-automation-logs"},"Collect automation logs"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Your environment failed to provision.\n",(0,o.kt)("a",{parentName:"p",href:"#collect-transaction-and-reservation-ids"},"Collect the Transaction & Reservation IDs"),"."))),(0,o.kt)("h2",{id:"collect-automation-logs"},"Collect Automation Logs"),(0,o.kt)("p",null,"If you find your newly provisioned environment is not working as expected and\nyou require help from the SWAT team, please complete the following steps to\nprovide additional context when posting your question:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the Bastion host (Guacamole), open a terminal window by selecting\n",(0,o.kt)("strong",{parentName:"li"},"Activities")," at the top left of the screen and then the terminal icon.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"open-terminal",src:n(8787).Z,width:"4638",height:"2610"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"tail -n 100 playbook-run.log\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy as much of the output as possible starting from the very bottom.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Let us know about the issue you are facing in the ",(0,o.kt)("em",{parentName:"p"},"#jam-in-a-box")," Slack\nchannel. Please follow the below guidance when posting in the channel:"),(0,o.kt)("admonition",{parentName:"li",title:"Slack",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"To keep the main thread easy to follow please follow the instructions below\nwhen posting:")),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Let us know a brief description of your issue in the main thread (Do not\ninclude the log output in the main thread)."),(0,o.kt)("li",{parentName:"ol"},"After posting your message, select ",(0,o.kt)("strong",{parentName:"li"},"reply to thread")," on your own\nmessage."),(0,o.kt)("li",{parentName:"ol"},"In the thread view include the following:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A link to the TechZone environment you attempted to provision."),(0,o.kt)("li",{parentName:"ul"},"Your\n",(0,o.kt)("a",{parentName:"li",href:"#collect-transaction-and-reservation-ids"},"Reservation and Transaction IDs"),"."),(0,o.kt)("li",{parentName:"ul"},"type ",(0,o.kt)("inlineCode",{parentName:"li"},"/snippet")," and select ",(0,o.kt)("strong",{parentName:"li"},"Create a text snippet"),". Paste your logs\ninto the snippet and select ",(0,o.kt)("strong",{parentName:"li"},"Create Snippet"),".")))),(0,o.kt)("p",{parentName:"admonition"},"This will make it easier for us to understand your issue and keep the main\nthread clean and easy to follow for all.")))),(0,o.kt)("h2",{id:"collect-transaction-and-reservation-ids"},"Collect Transaction and Reservation IDs"),(0,o.kt)("p",null,"The Transaction ID will help us identify the specific provisioning attempt that\nfailed. Please follow the steps below to collect the Transaction ID:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From TechZone select ",(0,o.kt)("strong",{parentName:"p"},"My Library")," and then ",(0,o.kt)("strong",{parentName:"p"},"My Reservations")," from the top\nmenu."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"open-terminal",src:n(176).Z,width:"3314",height:"616"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clear any existing filters and add a filter for ",(0,o.kt)("strong",{parentName:"p"},"failed"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"open-terminal",src:n(3145).Z,width:"2022",height:"1212"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the tile for the failed reservation.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the Reservation and Transaction IDs."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"open-terminal",src:n(2355).Z,width:"2006",height:"2294"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Send us a message in slack with the following information:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A link to the TechZone environment you attempted to provision"),(0,o.kt)("li",{parentName:"ul"},"The Reservation ID"),(0,o.kt)("li",{parentName:"ul"},"The Transaction ID")))))}m.isMDXComponent=!0},3145:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/filters-fd3129b08b7d3b002f12e798461a46cb.png"},176:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/my-reservations-a5093e6dea3875d65ce5cc00880ecd01.png"},8787:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/open-terminal-ed5ca7786aa48c0c0ab234ad7de81fed.png"},2355:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/reservation-and-transaction-ids-bc3c5ffcec8c57eeaebdec3dba4458d0.png"}}]);