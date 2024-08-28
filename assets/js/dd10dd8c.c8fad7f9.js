"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[9395],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),k=a,d=s["".concat(c,".").concat(k)]||s[k]||m[k]||r;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={title:"5. Runbook Automation",description:"Describes a runbook automation example",sidebar_position:5},i=void 0,l={unversionedId:"cloud-pak-aiops/netcool-lab/runbook-automation/index",id:"cloud-pak-aiops/netcool-lab/runbook-automation/index",title:"5. Runbook Automation",description:"Describes a runbook automation example",source:"@site/labs/cloud-pak-aiops/netcool-lab/5-runbook-automation/index.mdx",sourceDirName:"cloud-pak-aiops/netcool-lab/5-runbook-automation",slug:"/cloud-pak-aiops/netcool-lab/runbook-automation/",permalink:"/techxchange2024/labs/cloud-pak-aiops/netcool-lab/runbook-automation/",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"5. Runbook Automation",description:"Describes a runbook automation example",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. Migrate a Custom Correlation",permalink:"/techxchange2024/labs/cloud-pak-aiops/netcool-lab/migrate-custom-correlation/"},next:{title:"1. Introduction",permalink:"/techxchange2024/labs/cloud-pak-aiops/topology-lab/introduction/"}},c={},p=[{value:"5.1: Overview",id:"51-overview",level:2},{value:"5.2: Create an ssh integration",id:"52-create-an-ssh-integration",level:2},{value:"5.3: Create an Automation Action",id:"53-create-an-automation-action",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"51-overview"},"5.1: Overview"),(0,a.kt)("p",null,"In this final section, we will review the Automation capabilities of the Cloud Pak for AIOps. You can use Runbook Automation to build and\nexecute runbooks that can help IT staff to solve common operational problems. Runbook Automation can automate procedures that do not\nrequire human interaction, thereby increasing the efficiency of IT operations processes. Operators can spend more time innovating and\nare freed from performing time-consuming manual tasks. "),(0,a.kt)("p",null,"We will create a RunBook Automation that when a particular alert arrives, it will connect to a remote server and delete the content of a ./tmp folder.\nIn order to accomplish this we will execute the following tasks: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a ssh integration"),(0,a.kt)("li",{parentName:"ul"},"Create an Action to connect o a remote server and delete all the files in a folder"),(0,a.kt)("li",{parentName:"ul"},"Create a RunBook that will call the previous Action"),(0,a.kt)("li",{parentName:"ul"},"Create an AIOps Policy that will execute the previous runbook when a particular alert is received or updated"),(0,a.kt)("li",{parentName:"ul"},"Confirm that the Runbook has run")),(0,a.kt)("h2",{id:"52-create-an-ssh-integration"},"5.2: Create an ssh integration"),(0,a.kt)("p",null,"From the Home page select ",(0,a.kt)("strong",{parentName:"p"},"Integrations"),". Click on ",(0,a.kt)("strong",{parentName:"p"},"Add integration"),".\nOn the Search bar type ",(0,a.kt)("em",{parentName:"p"},"ssh"),". Click on the ",(0,a.kt)("strong",{parentName:"p"},"SSH")," tile and click on ",(0,a.kt)("strong",{parentName:"p"},"Get started"),"."),(0,a.kt)("p",null,"We will add this public key to our server to enable the ssh authentication.\nFrom the Terminal window, run the following commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir ~/.ssh\ngedit ~/.ssh/authorized_keys\n")),(0,a.kt)("p",null,"Click on the Copy button to copy the public key and paste it into the editor. On the editor click on ",(0,a.kt)("strong",{parentName:"p"},"Save")," and close the editor."),(0,a.kt)("p",null,"On the SSH integration, click on ",(0,a.kt)("strong",{parentName:"p"},"Next")," (leave ",(0,a.kt)("em",{parentName:"p"},"Enable jumpserver")," Off) and click ",(0,a.kt)("strong",{parentName:"p"},"Done"),"."),(0,a.kt)("h2",{id:"53-create-an-automation-action"},"5.3: Create an Automation Action"),(0,a.kt)("p",null,"From the Home page select ",(0,a.kt)("strong",{parentName:"p"},"Automations"),". Click on the ",(0,a.kt)("strong",{parentName:"p"},"Actions")," tab. Click on ",(0,a.kt)("strong",{parentName:"p"},"Create action"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Type")," select ",(0,a.kt)("strong",{parentName:"li"},"SSH"),"."),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Name")," type ",(0,a.kt)("strong",{parentName:"li"},"clean folder automation")),(0,a.kt)("li",{parentName:"ul"},"Scroll down and under ",(0,a.kt)("strong",{parentName:"li"},"Action script"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Shell")," select ",(0,a.kt)("strong",{parentName:"li"},"Bash")),(0,a.kt)("li",{parentName:"ul"})))))}m.isMDXComponent=!0}}]);