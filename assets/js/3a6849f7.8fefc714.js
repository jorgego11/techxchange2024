"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[4455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,b=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(b,i(i({ref:t},c),{},{components:n})):o.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={title:"2. Lab Environment",description:"Lab Environment",sidebar_position:2},i=void 0,l={unversionedId:"cloud-pak-aiops/netcool-lab/lab-environment/index",id:"cloud-pak-aiops/netcool-lab/lab-environment/index",title:"2. Lab Environment",description:"Lab Environment",source:"@site/labs/cloud-pak-aiops/netcool-lab/2-lab-environment/index.md",sourceDirName:"cloud-pak-aiops/netcool-lab/2-lab-environment",slug:"/cloud-pak-aiops/netcool-lab/lab-environment/",permalink:"/techxchange2024/labs/cloud-pak-aiops/netcool-lab/lab-environment/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2. Lab Environment",description:"Lab Environment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Introduction",permalink:"/techxchange2024/labs/cloud-pak-aiops/netcool-lab/introduction/"},next:{title:"3. Set up the Netcool Connector",permalink:"/techxchange2024/labs/cloud-pak-aiops/netcool-lab/netcool-connector/"}},s={},p=[{value:"2.1: Open the Lab Instructions and log-in to the Cloud Pak for AIOps",id:"21-open-the-lab-instructions-and-log-in-to-the-cloud-pak-for-aiops",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this Lab, you will have access to one OpenShift cluster via the ",(0,a.kt)("strong",{parentName:"p"},"Student")," virtual\nmachine that has installed Red Hat Enterprise Linux (RHEL). Note that inside\nOpenShift, the cluster has installed the Red Hat OpenShift Data Foundation (ODF) which is a\nsoftware-defined, container-native storage solution that provides storage\nclasses that will be used by the Cloud Pak for AIOps to dynamically request\nstorage."),(0,a.kt)("p",null,"The following diagram describes the infrastructure for the Lab:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(338).Z,width:"647",height:"306"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"There is a virtual machine that has Netcool/OMNIbus and\nNetcool/Impact installed. A Simnet Probe is running and feeding a stream of\nevents into Netcool/OMNIbus. The Netcool assets on this virtual machine will be\nused in this lab.")),(0,a.kt)("h2",{id:"21-open-the-lab-instructions-and-log-in-to-the-cloud-pak-for-aiops"},"2.1: Open the Lab Instructions and log-in to the Cloud Pak for AIOps"),(0,a.kt)("p",null,"On the Student VM, we will have access to both the Lab instructions and the Cloud Pak for AIOps to facilitate ",(0,a.kt)("em",{parentName:"p"},"Copy & Paste")," code. These can be two tabs\non the same browser (this option is explained below) o two separate browser windows with one Tab each. "),(0,a.kt)("p",null,"Open a Firefox browser window, click on the ",(0,a.kt)("strong",{parentName:"p"},"AIOps Lab Links")," bookmark and open the lab link (you may get a pop-up window, just close it).\nOn the same Firefox browser window, open a new Tab and click on the ",(0,a.kt)("strong",{parentName:"p"},"Cloud Pak for AIOps")," bookmark. The bookmark should have the following URL:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://cpd-cp4aiops.apps.ocp.ibm.edu")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You may get one or more security ",(0,a.kt)("strong",{parentName:"p"},"Warning: Potential Security Risk Ahead"),".\nThis is because we have used self-signed certificates for this Lab. Just accept\nthe risk and continue.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Login in with: ",(0,a.kt)("inlineCode",{parentName:"li"},"IBM provided credentials (cpadmin only)")),(0,a.kt)("li",{parentName:"ul"},"Username: ",(0,a.kt)("inlineCode",{parentName:"li"},"cpadmin")),(0,a.kt)("li",{parentName:"ul"},"Password: ",(0,a.kt)("inlineCode",{parentName:"li"},"hLEzNfOfGIpYvnHog87QhJCBnkzDs4J9"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7862).Z,width:"3094",height:"1328"})),(0,a.kt)("p",null,"After you login, you will land into the Cloud Pak for AIOps home page as shown\nbelow:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(906).Z,width:"1433",height:"819"})))}d.isMDXComponent=!0},906:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/home-page-d444ac8fcfdfc8b63baa5cd143049398.png"},338:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/lab-env-07991b9b5fcf86cf9f7ce1a3f541d6a5.png"},7862:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/login-f2532691671431361189d1aa8b129adb.png"}}]);