"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[9395],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),k=r,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||o;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2141:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={title:"5. Runbook Automation",description:"Describes a runbook automation example",sidebar_position:5},l=void 0,i={unversionedId:"cloud-pak-aiops/netcool-lab/runbook-automation/index",id:"cloud-pak-aiops/netcool-lab/runbook-automation/index",title:"5. Runbook Automation",description:"Describes a runbook automation example",source:"@site/labs/cloud-pak-aiops/netcool-lab/5-runbook-automation/index.mdx",sourceDirName:"cloud-pak-aiops/netcool-lab/5-runbook-automation",slug:"/cloud-pak-aiops/netcool-lab/runbook-automation/",permalink:"/techxchange2024/labs/cloud-pak-aiops/netcool-lab/runbook-automation/",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"5. Runbook Automation",description:"Describes a runbook automation example",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. Migrate a Netcool Custom Correlation to AIOps",permalink:"/techxchange2024/labs/cloud-pak-aiops/netcool-lab/migrate-custom-correlation/"},next:{title:"1. Introduction",permalink:"/techxchange2024/labs/cloud-pak-aiops/topology-lab/introduction/"}},p={},s=[{value:"5.1: Overview",id:"51-overview",level:2},{value:"5.2: Create an SSH Integration",id:"52-create-an-ssh-integration",level:2},{value:"5.3: Create an Action Automation",id:"53-create-an-action-automation",level:2},{value:"5.4: Create an RunBook Automation",id:"54-create-an-runbook-automation",level:2},{value:"5.5: Create an AIOps RunBook Policy Automation",id:"55-create-an-aiops-runbook-policy-automation",level:2},{value:"5.6: Confirm that the Runbook actually run",id:"56-confirm-that-the-runbook-actually-run",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"51-overview"},"5.1: Overview"),(0,r.kt)("p",null,"In this final section, we will review the Automation capabilities of the Cloud Pak for AIOps. You can use Runbook Automation to build and\nexecute runbooks that can help IT staff to solve common operational problems. Runbook Automation can automate procedures that do not\nrequire human interaction, thereby increasing the efficiency of IT operations processes. Operators can spend more time innovating and\nare freed from performing time-consuming manual tasks. "),(0,r.kt)("p",null,"We will create a RunBook Automation that when a particular alert arrives, it will connect to a remote server and delete the content of a ./tmp folder.\nIn order to accomplish this we will execute the following tasks: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a ssh integration"),(0,r.kt)("li",{parentName:"ul"},"Create an Action to connect to a remote server and delete the files in a folder"),(0,r.kt)("li",{parentName:"ul"},"Create a RunBook that will call the previous Action"),(0,r.kt)("li",{parentName:"ul"},"Create an AIOps Policy that will execute the previous runbook when a particular alert is received or updated"),(0,r.kt)("li",{parentName:"ul"},"Confirm that the Runbook has run")),(0,r.kt)("h2",{id:"52-create-an-ssh-integration"},"5.2: Create an SSH Integration"),(0,r.kt)("p",null,"From the Home page select ",(0,r.kt)("strong",{parentName:"p"},"Integrations"),". Click on ",(0,r.kt)("strong",{parentName:"p"},"Add integration"),".\nOn the Search bar type ",(0,r.kt)("em",{parentName:"p"},"ssh"),". Click on the ",(0,r.kt)("strong",{parentName:"p"},"SSH")," tile and click on ",(0,r.kt)("strong",{parentName:"p"},"Get started"),"."),(0,r.kt)("p",null,"We will add this public key to our server to enable the ssh authentication.\nFrom the ",(0,r.kt)("strong",{parentName:"p"},"Terminal")," window, run the following commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd\nmkdir ~/.ssh\ngedit ~/.ssh/authorized_keys\n")),(0,r.kt)("p",null,"On the SSH Integration page, click on the Copy button to copy the public key and paste it into the editor. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3938).Z,width:"3338",height:"1574"})),(0,r.kt)("p",null,"On the editor click on ",(0,r.kt)("strong",{parentName:"p"},"Save")," and close the editor."),(0,r.kt)("p",null,"On the SSH integration, click on ",(0,r.kt)("strong",{parentName:"p"},"Next")," (leave ",(0,r.kt)("em",{parentName:"p"},"Enable jumpserver")," Off) and click ",(0,r.kt)("strong",{parentName:"p"},"Done"),"."),(0,r.kt)("h2",{id:"53-create-an-action-automation"},"5.3: Create an Action Automation"),(0,r.kt)("p",null,"In runbooks, actions are the collection of several manual steps into a single automated entity.\nAn action improves runbook efficiency by automatically performing procedures and operations.\nActions supports the following technologies to connect to a backend system: Script, HTTP and Ansible. "),(0,r.kt)("p",null,"From the Home page select ",(0,r.kt)("strong",{parentName:"p"},"Automations"),". Click on the ",(0,r.kt)("strong",{parentName:"p"},"Actions")," tab. Click on ",(0,r.kt)("strong",{parentName:"p"},"Create action"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Type")," select ",(0,r.kt)("strong",{parentName:"li"},"SSH"),"."),(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Name")," type ",(0,r.kt)("inlineCode",{parentName:"li"},"clean folder automation action")),(0,r.kt)("li",{parentName:"ul"},"Scroll down and under ",(0,r.kt)("strong",{parentName:"li"},"Action script"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Shell")," select ",(0,r.kt)("strong",{parentName:"li"},"Bash")),(0,r.kt)("li",{parentName:"ul"},"Under Script paste the following bash script",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"rm ~/lab/tmp/*\n"))))),(0,r.kt)("li",{parentName:"ul"},"On the right, click on the 3 dots after ",(0,r.kt)("strong",{parentName:"li"},"target")," and select ",(0,r.kt)("strong",{parentName:"li"},"Edit"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8622).Z,width:"3338",height:"1574"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On the Edit parameter pop-up",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"check ",(0,r.kt)("strong",{parentName:"li"},"Set a default value")),(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Default value")," type ",(0,r.kt)("inlineCode",{parentName:"li"},"10.100.1.200")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On the right, click on the 3 dots after ",(0,r.kt)("strong",{parentName:"p"},"user")," and select ",(0,r.kt)("strong",{parentName:"p"},"Edit")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On the Edit parameter pop-up",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"check ",(0,r.kt)("strong",{parentName:"li"},"Set a default value")),(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Default value")," type ",(0,r.kt)("inlineCode",{parentName:"li"},"ibmuser")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Publish")))),(0,r.kt)("h2",{id:"54-create-an-runbook-automation"},"5.4: Create an RunBook Automation"),(0,r.kt)("p",null,"Runbooks can be manual, semi-automated or fully automated. Runbooks are used to orchestrate the execution of Actions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Runbooks")," tab and select ",(0,r.kt)("strong",{parentName:"li"},"Create runbook")),(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Name")," type ",(0,r.kt)("inlineCode",{parentName:"li"},"clean folder automation runbook")),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add action step")),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("strong",{parentName:"li"},"clean folder automation action")," and click ",(0,r.kt)("strong",{parentName:"li"},"Select this action")),(0,r.kt)("li",{parentName:"ul"},"On the Action parameter mapping pop-up, ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"select ",(0,r.kt)("strong",{parentName:"li"},"Use default value")," for ",(0,r.kt)("strong",{parentName:"li"},"target")," and ",(0,r.kt)("strong",{parentName:"li"},"user")),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Save"))))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(530).Z,width:"3338",height:"1574"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finally, click on ",(0,r.kt)("strong",{parentName:"li"},"Publish"))),(0,r.kt)("h2",{id:"55-create-an-aiops-runbook-policy-automation"},"5.5: Create an AIOps RunBook Policy Automation"),(0,r.kt)("p",null,"Lets create the tmp folder that will be cleaned by the runbook. On the ",(0,r.kt)("strong",{parentName:"p"},"Terminal")," window, run the commands listed below\nto create the tmp folder and two dummy text files for testing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cd ~/lab\nmkdir tmp\necho "file content" > ./tmp/file1.txt\necho "file content" > ./tmp/file2.txt\n')),(0,r.kt)("p",null,"If you run the command below, you will see that two files are created under ~/lab/tmp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ls -l ~/lab/tmp\n")),(0,r.kt)("p",null,"Finally, we will create an AIOps runbook Policy Automation that will call the runbook\nwhen a particular event arrives or its updated."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Policies")," tab and select ",(0,r.kt)("strong",{parentName:"p"},"Create policy"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Assign a runbook to alerts")," tile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Policy name")," type ",(0,r.kt)("inlineCode",{parentName:"p"},"alert policy"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Execution order"),", leave the default value of 50")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Policy triggers"),", leave the defaults to activate the policy after an alert is created or updated"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add update type")," and under ",(0,r.kt)("strong",{parentName:"p"},"Alert property")," select ",(0,r.kt)("strong",{parentName:"p"},"lastOccurrenceTime")," as shown below"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4331).Z,width:"2616",height:"830"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Conditions sets"),", click on ",(0,r.kt)("strong",{parentName:"p"},"Add condition")," and select Alert property to create a new trigger condition based on the properties of the alert"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Leave the ",(0,r.kt)("strong",{parentName:"p"},"AND")," operator selected")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Under Alert properties"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Property")," type ",(0,r.kt)("inlineCode",{parentName:"li"},"resource")," and select ",(0,r.kt)("strong",{parentName:"li"},"name")," in the menu options. "),(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Operator")," select ",(0,r.kt)("strong",{parentName:"li"},"equal to")),(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Matches")," select ",(0,r.kt)("strong",{parentName:"li"},"only")),(0,r.kt)("li",{parentName:"ul"},"Inder ",(0,r.kt)("strong",{parentName:"li"},"Value")," type ",(0,r.kt)("inlineCode",{parentName:"li"},"sydney-server08.ibm.com")," and select ",(0,r.kt)("strong",{parentName:"li"},"String:sydney-server08.ibm.com")),(0,r.kt)("li",{parentName:"ul"},"Your Condition should look like this")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(971).Z,width:"2762",height:"682"}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Under Assign Runbook(s), check the ",(0,r.kt)("strong",{parentName:"p"},"clean folder automation runbook "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check ",(0,r.kt)("strong",{parentName:"p"},"Automatically run this runbook"),", as shown below"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1682).Z,width:"2700",height:"998"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finally, scroll up and select the ",(0,r.kt)("strong",{parentName:"li"},"Create policy")," button in the top right")),(0,r.kt)("h2",{id:"56-confirm-that-the-runbook-actually-run"},"5.6: Confirm that the Runbook actually run"),(0,r.kt)("p",null,"After you saved the policy, after a couple of minutes, the next time that an alert has a resource name as sydney-server08.ibm.com the runbook will run\nand the ",(0,r.kt)("strong",{parentName:"p"},"Status")," column will show a green check and the ",(0,r.kt)("strong",{parentName:"p"},"Last run")," date and time will be populated as shown below"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9333).Z,width:"3358",height:"948"})),(0,r.kt)("p",null,"As the final check, run the command below again. You will see that the folder ~/lab/tmp is now empty"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ls -l ~/lab/tmp\n")))}m.isMDXComponent=!0},971:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/condition-134476d9a446cc5aa5adcde50928bf20.png"},4331:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/last-occurrence-47fe02d02b4b4c16540e25d0f3ea1726.png"},9333:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/runbook-run-db6d32ba4a374a380986861f4bef9c5a.png"},1682:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/runbook-selection-52befa02da42f2c8ff6aea4db2859933.png"},530:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/runbook-abc3d633666553023d8d2e186b0bbaa7.png"},3938:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ssh-copy-7994d9fa93215c2aff2e48ed5c58ce41.png"},8622:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/target-edit-bd381c0c75dce61de97c19a447bd51fa.png"}}]);