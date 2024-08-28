"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[9395],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(o),b=r,d=p["".concat(c,".").concat(b)]||p[b]||m[b]||a;return o?n.createElement(d,i(i({ref:t},s),{},{components:o})):n.createElement(d,i({ref:t},s))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}b.displayName="MDXCreateElement"},2141:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const a={title:"5. runbook automation",description:"Describes a runbook automation example",sidebar_position:5},i=void 0,l={unversionedId:"cloud-pak-aiops/netcool-lab/runbook-automation/index",id:"cloud-pak-aiops/netcool-lab/runbook-automation/index",title:"5. runbook automation",description:"Describes a runbook automation example",source:"@site/labs/cloud-pak-aiops/netcool-lab/5-runbook-automation/index.mdx",sourceDirName:"cloud-pak-aiops/netcool-lab/5-runbook-automation",slug:"/cloud-pak-aiops/netcool-lab/runbook-automation/",permalink:"/techxchange2024/labs/cloud-pak-aiops/netcool-lab/runbook-automation/",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"5. runbook automation",description:"Describes a runbook automation example",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. Migrate custom correlation",permalink:"/techxchange2024/labs/cloud-pak-aiops/netcool-lab/migrate-custom-correlation/"},next:{title:"1. Introduction",permalink:"/techxchange2024/labs/cloud-pak-aiops/topology-lab/introduction/"}},c={},u=[{value:"5.1: Overview",id:"51-overview",level:2},{value:"5.2: Create an ssh integration",id:"52-create-an-ssh-integration",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"51-overview"},"5.1: Overview"),(0,r.kt)("p",null,"In this final section, we will review the Automation capabilities of the Cloud Pak for AIOps. You can use Runbook Automation to build and\nexecute runbooks that can help IT staff to solve common operational problems. Runbook Automation can automate procedures that do not\nrequire human interaction, thereby increasing the efficiency of IT operations processes. Operators can spend more time innovating and\nare freed from performing time-consuming manual tasks. "),(0,r.kt)("p",null,"We will create a RunBook Automation that when a particular alert arrives, it will connect to a remote server and delete the content of a ./tmp folder.\nIn order to accomplish this we will execute the following tasks: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a ssh integration"),(0,r.kt)("li",{parentName:"ul"},"Create an Action to connect o a remote server and delete all the files in a folder"),(0,r.kt)("li",{parentName:"ul"},"Create a RunBook that will call the previous Action"),(0,r.kt)("li",{parentName:"ul"},"Create an AIOps Policy that will execute the previous runbook when a particular alert is received or updated"),(0,r.kt)("li",{parentName:"ul"},"Confirm that the Runbook has run")),(0,r.kt)("h2",{id:"52-create-an-ssh-integration"},"5.2: Create an ssh integration"))}m.isMDXComponent=!0}}]);