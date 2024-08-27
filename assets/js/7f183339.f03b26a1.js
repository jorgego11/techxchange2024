"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[4111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),k=o,d=m["".concat(c,".").concat(k)]||m[k]||u[k]||r;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={title:"4. Set up the Netcool/Impact Connector",description:"Set up the Netcool/Impact Connector in AIOps",sidebar_position:4},i=void 0,l={unversionedId:"cloud-pak-aiops/netcool-lab/impact-connector/index",id:"cloud-pak-aiops/netcool-lab/impact-connector/index",title:"4. Set up the Netcool/Impact Connector",description:"Set up the Netcool/Impact Connector in AIOps",source:"@site/labs/cloud-pak-aiops/netcool-lab/4-impact-connector/index.mdx",sourceDirName:"cloud-pak-aiops/netcool-lab/4-impact-connector",slug:"/cloud-pak-aiops/netcool-lab/impact-connector/",permalink:"/techxchange2024/labs/cloud-pak-aiops/netcool-lab/impact-connector/",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4. Set up the Netcool/Impact Connector",description:"Set up the Netcool/Impact Connector in AIOps",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3. Set up the Netcool Connector",permalink:"/techxchange2024/labs/cloud-pak-aiops/netcool-lab/netcool-connector/"},next:{title:"5. Storage, HA and FIPS Considerations",permalink:"/techxchange2024/labs/cloud-pak-aiops/netcool-lab/storage-ha/"}},c={},p=[{value:"3.1: Overview",id:"31-overview",level:2},{value:"3.2 Preparation tasks",id:"32-preparation-tasks",level:2},{value:"Retrieve Netcool/Impact certificates",id:"retrieve-netcoolimpact-certificates",level:3},{value:"Set up the Zen API key",id:"set-up-the-zen-api-key",level:3},{value:"3.3 Create a Netcool/Impact Connector instance",id:"33-create-a-netcoolimpact-connector-instance",level:2},{value:"3.4 Complete the integration in Netcool/Impact",id:"34-complete-the-integration-in-netcoolimpact",level:2}],s={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"31-overview"},"3.1: Overview"),(0,o.kt)("p",null,"In this Lab, you will create an instance of the Netcool/Impact Connector to connect to an existing Netcool/Impact server.\nMany AIOps deployments will include Netcool/Impact to enable automation and integration with third-party systems.\nCreating and configuring the Netcool/Impact Connector therefore is usually going to be a key part of any AIOps set-up."),(0,o.kt)("h2",{id:"32-preparation-tasks"},"3.2 Preparation tasks"),(0,o.kt)("h3",{id:"retrieve-netcoolimpact-certificates"},"Retrieve Netcool/Impact certificates"),(0,o.kt)("p",null,"In this section, you will retrieve the two certificates used by Netcool/Impact for its server and GUI server processes.\nThese are needed to complete the Netcool/Impact Connector instance."),(0,o.kt)("p",null,"Open the ",(0,o.kt)("strong",{parentName:"p"},"Terminal")," window and issue the following commands to save the resulting certificates to the file ",(0,o.kt)("em",{parentName:"p"},"impact-cert.txt"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"echo '' | openssl s_client -connect student:16311  -showcerts 2>&1  | sed -n -e '/BEGIN\\ CERTIFICATE/,/END\\ CERTIFICATE/ p' > impact-cert.txt\necho '' | openssl s_client -connect student:9081  -showcerts 2>&1  | sed -n -e '/BEGIN\\ CERTIFICATE/,/END\\ CERTIFICATE/ p' >> impact-cert.txt\n")),(0,o.kt)("h3",{id:"set-up-the-zen-api-key"},"Set up the Zen API key"),(0,o.kt)("p",null,"Use the following steps to get an API key to be used later:"),(0,o.kt)("p",null,"From the ",(0,o.kt)("strong",{parentName:"p"},"Terminal")," window, paste the following command but not run it just yet. We need to get the api key value first.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'ZENAPIKEY=$(echo "cpadmin:<paste-your-API-key-here>" | base64 -w 0)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on your user icon in the top-right corner of the screen and select ",(0,o.kt)("strong",{parentName:"li"},"Profile and settings")),(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"API key")," in the top-right corner of the screen and select ",(0,o.kt)("strong",{parentName:"li"},"Generate new key")),(0,o.kt)("li",{parentName:"ul"},"Click on Copy and paste the API key replacing the section ",(0,o.kt)("inlineCode",{parentName:"li"},"<paste-your-API-key-here>"),".  ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Test out your ",(0,o.kt)("inlineCode",{parentName:"li"},"ZENAPIKEY")," using the following:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'CPD_ROUTE=`oc get route -n cp4waiops cpd -o jsonpath=\'{.spec.host}\'`\nTENANT_ID=cfd95b7e-3bc7-4006-a4a8-a73a79c71255\ncurl -kv -H "Authorization: ZenApiKey ${ZENAPIKEY}" -H "x-tenant-id: ${TENANT_ID}"  "https://${CPD_ROUTE}/aiops/api/issue-resolution/v1/alerts/"\n')),(0,o.kt)("p",null,"If you get a JSON payload response containing events, it means your ",(0,o.kt)("inlineCode",{parentName:"p"},"ZENAPIKEY")," works."),(0,o.kt)("p",null,"Show the value of ZENAPIKEY so you can use it later in the section"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"echo $ZENAPIKEY\n")),(0,o.kt)("h2",{id:"33-create-a-netcoolimpact-connector-instance"},"3.3 Create a Netcool/Impact Connector instance"),(0,o.kt)("p",null,"Use the following steps to create an instance of the Netcool/Impact Connector:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Log in to the AIOps console and select ",(0,o.kt)("strong",{parentName:"li"},"Integrations")," from the main menu"),(0,o.kt)("li",{parentName:"ul"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Add integration")," button to add a new integration"),(0,o.kt)("li",{parentName:"ul"},"Type ",(0,o.kt)("strong",{parentName:"li"},"Netcool")," into the Search bar"),(0,o.kt)("li",{parentName:"ul"},"Choose ",(0,o.kt)("strong",{parentName:"li"},"IBM Tivoli Netcool Impact")," and click ",(0,o.kt)("strong",{parentName:"li"},"Get started")," to create a new instance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Name"),": the label you want to give this integration instance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GUI Server URLs of Impact endpoint"),": enter: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://student:16311")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Backend Server URLs of Impact endpoint"),": enter: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://student:9081")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User ID"),": enter: ",(0,o.kt)("inlineCode",{parentName:"li"},"impactadmin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Password"),": enter: ",(0,o.kt)("inlineCode",{parentName:"li"},"netcool")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Impact certificates"),": paste in the certificates you retrieved earlier from the file impact-cert.txt. You can open the file using ",(0,o.kt)("inlineCode",{parentName:"li"},"gedit impact-cert.txt")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Deployment options"),": leave this set to ",(0,o.kt)("strong",{parentName:"li"},"Local")),(0,o.kt)("li",{parentName:"ul"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Done")," button to complete the integration")),(0,o.kt)("p",null,"It will now take a few minutes for AIOps to create the new integration. Refresh the ",(0,o.kt)("strong",{parentName:"p"},"Integrations")," page and ensure the ",(0,o.kt)("strong",{parentName:"p"},"Integration status")," eventually shows with a green tick."),(0,o.kt)("h2",{id:"34-complete-the-integration-in-netcoolimpact"},"3.4 Complete the integration in Netcool/Impact"),(0,o.kt)("p",null,"As part of the Netcool/Impact Connector instance creation, AIOps creates a number of assets within Netcool/Impact, including some policies, and a RESTful API Data Source Adaptor (DSA) instance. The final step in the setup of the Netcool/Impact Connector integration is to configure the Data Source Adaptor in Netcool/Impact to be able to connect back to AIOps via its API. Use the following steps to complete this last task."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to the Netcool/Impact GUI: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://student:16311/ibm/console")),(0,o.kt)("li",{parentName:"ul"},"Log in to Netcool/Impact as the user ",(0,o.kt)("inlineCode",{parentName:"li"},"impactadmin")," and password ",(0,o.kt)("inlineCode",{parentName:"li"},"netcool")),(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Data Model")),(0,o.kt)("li",{parentName:"ul"},"Identify the RESTful API DSA instance created by AIOps by its name starting with ",(0,o.kt)("inlineCode",{parentName:"li"},"AIOps-")),(0,o.kt)("li",{parentName:"ul"},"Double click the AIOps DSA instance to edit it"),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("strong",{parentName:"li"},"Host Name")," to the AIOps host name: ",(0,o.kt)("inlineCode",{parentName:"li"},"cpd-cp4aiops.apps.ocp.ibm.edu")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Use HTTPS"),": checked"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Disable SSL Verification"),": checked"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reuse Connection"),": checked"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cache Response"),": unchecked"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Authentication method to use"),": select ",(0,o.kt)("inlineCode",{parentName:"li"},"No Authentication")),(0,o.kt)("li",{parentName:"ul"},"Scroll down to: ",(0,o.kt)("strong",{parentName:"li"},"Protected Request Headers")),(0,o.kt)("li",{parentName:"ul"},"Create a new header with the following details:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Header Name"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Header Value"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"ZenApiKey <your-ZENAPIKEY-value-from-Terminal-window>"))))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The header value should be the exact string ",(0,o.kt)("inlineCode",{parentName:"p"},"ZenApiKey"),", followed by a space character, followed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZENAPIKEY")," output from ",(0,o.kt)("inlineCode",{parentName:"p"},"echo $ZENAPIKEY"),".\nIf your connection test fails, check each of the steps above to ensure they are correct.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"OK")," to save your new header"),(0,o.kt)("li",{parentName:"ul"},"Click on the Save button with the small disk icon at the top of the page to save your changes"),(0,o.kt)("li",{parentName:"ul"},"Click on the X to close the DSA instance"),(0,o.kt)("li",{parentName:"ul"},"Right click on the DSA instance and select ",(0,o.kt)("strong",{parentName:"li"},"Test Connection")," and verify it responds with ",(0,o.kt)("strong",{parentName:"li"},"Connection OK"))))}u.isMDXComponent=!0}}]);