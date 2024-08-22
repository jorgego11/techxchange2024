"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[6102],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(o),g=n,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return o?a.createElement(h,l(l({ref:t},c),{},{components:o})):a.createElement(h,l({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<r;p++)l[p]=o[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}g.displayName="MDXCreateElement"},5220:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=o(7462),n=(o(7294),o(3905));const r={title:"7. Topological Correlation",description:"Topological Correlation",sidebar_position:7},l=void 0,i={unversionedId:"cloud-pak-aiops/alert-lab/topological/index",id:"cloud-pak-aiops/alert-lab/topological/index",title:"7. Topological Correlation",description:"Topological Correlation",source:"@site/labs/cloud-pak-aiops/alert-lab/7-topological/index.mdx",sourceDirName:"cloud-pak-aiops/alert-lab/7-topological",slug:"/cloud-pak-aiops/alert-lab/topological/",permalink:"/techxchange2024/labs/cloud-pak-aiops/alert-lab/topological/",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"7. Topological Correlation",description:"Topological Correlation",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"6. Temporal Correlation",permalink:"/techxchange2024/labs/cloud-pak-aiops/alert-lab/temporal/"}},s={},p=[{value:"7.1: Validate the Absence of Correlation",id:"71-validate-the-absence-of-correlation",level:2},{value:"7.2: Creating Topology Resources",id:"72-creating-topology-resources",level:2},{value:"Creating a File Topology Observer",id:"creating-a-file-topology-observer",level:4},{value:"7.3: Creating a Topology Resource Group",id:"73-creating-a-topology-resource-group",level:2},{value:"7.4: Validate Topological Correlation",id:"74-validate-topological-correlation",level:2},{value:"7.5: Lab Recap",id:"75-lab-recap",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This AI algorithm is an unsupervised learning algorithm that groups alerts based on the\ntopology resource groups in which those alerts occur. For example, if you have a resource group\nmade up of all the resources within a given Kubernetes namespace, then any alerts on pods,\nmicroservices, or other resources in that namespace will be grouped together\nin a single topological alert group."),(0,n.kt)("p",null,"Topological alert grouping helps you understand when alerts are connected based on their topology,\nproviding valuable context information for why related alerts might occur together.\nThis algorithm is enabled by default so when related alerts are grouped based on their topology, Site Reliability Engineers\n(SREs) and other users responsible for application and service availability will be able to\nview the details of the alert in the context of the topology resources that are impacted."),(0,n.kt)("h2",{id:"71-validate-the-absence-of-correlation"},"7.1: Validate the Absence of Correlation"),(0,n.kt)("p",null,"First, we will load a set of events to validate that there is no correlation whatsoever for the\nalerts created from these events. "),(0,n.kt)("p",null,"Create a new file called ",(0,n.kt)("em",{parentName:"p"},"topology-events.json")," by running the following command in the Terminal window to open the text editor,\n",(0,n.kt)("strong",{parentName:"p"},"copy")," the event data below, ",(0,n.kt)("strong",{parentName:"p"},"paste")," it into the text editor,\nclick on the ",(0,n.kt)("strong",{parentName:"p"},"Save")," button in the text editor and ",(0,n.kt)("strong",{parentName:"p"},"close")," the editor window (click on the X). "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"gedit topology-events.json\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{ "sender":{ "service":"Zabbix Middleware Monitoring", "name":"US-SOUTH CEA SelfMonitoring @AGG_P", "type":"Zabbix" }, "resource":{ "application":"eCom2 web server", "name":"computer1000", "hostname":"computer1000.company.com", "type":"host", "ipaddress":"10.1.96.24", "location":"US-SOUTH" }, "type":{ "classification":"System status", "eventType":"problem" }, "severity":3, "summary":"CPU at 80% utilization", "occurrenceTime":"2023-05-05T14:40:38.000Z", "expirySeconds":0 }\n{ "sender":{ "service":"Zabbix Middleware Monitoring", "name":"US-SOUTH CEA SelfMonitoring @AGG_P", "type":"Zabbix" }, "resource":{ "application":"eCom2 api layer", "name":"router1", "hostname":"", "type":"device", "ipaddress":"10.1.96.28", "location":"US-SOUTH" }, "type":{ "classification":"System status", "eventType":"problem" }, "severity":5, "summary":"Unscheduled device restart. Review log files", "occurrenceTime":"2023-05-05T14:45:20.000Z", "expirySeconds":0 }\n{ "sender":{ "service":"Zabbix Middleware Monitoring", "name":"US-SOUTH CEA SelfMonitoring @AGG_P", "type":"Zabbix" }, "resource":{ "application":"eCom2 security layer", "name":"greatfirewallofsecurity", "hostname":"", "type":"device", "ipaddress":"10.1.96.29", "location":"US-SOUTH" }, "type":{ "classification":"System status", "eventType":"problem" }, "severity":6, "summary":"Unable to load firewall rules after reboot", "occurrenceTime":"2023-05-05T14:46:10.000Z", "expirySeconds":0 }\n')),(0,n.kt)("p",null,"Now lets submit the events via the webhook script created in the previous section by running the following command from the ",(0,n.kt)("strong",{parentName:"p"},"Terminal")," window:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"bash event-load-webhook.sh topology-events.json\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From the burger menu in the top-left navigate to: ",(0,n.kt)("strong",{parentName:"li"},"Operate \u2192 Incidents and alerts")," and click on the ",(0,n.kt)("strong",{parentName:"li"},"Alerts")," tab"),(0,n.kt)("li",{parentName:"ul"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Refresh alerts")," icon on the right")),(0,n.kt)("p",null,"Now we can see that the three alerts are independent from each other and not correlated. Also,\nif you click on the ",(0,n.kt)("strong",{parentName:"p"},"View correlation")," icon in the top-right, the ",(0,n.kt)("strong",{parentName:"p"},"Correlation")," column shows\nno correlation information for these alerts. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(8616).Z,width:"3350",height:"682"})),(0,n.kt)("p",null,"Lets clear these alerts before we create topology resources and test the topological correlation.\nSelect all the alerts, right-click and select ",(0,n.kt)("strong",{parentName:"p"},"Clear"),". Lets move to the next step in the Lab,\nthe alerts will disappear after 2-3 minutes"),(0,n.kt)("h2",{id:"72-creating-topology-resources"},"7.2: Creating Topology Resources"),(0,n.kt)("p",null,"As we have discussed before, topological alert correlation requires the definition of\ntopology groups and to create these groups, first we need to create topology resources."),(0,n.kt)("p",null,"In a real-world scenario, it is likely that you would be using a number of\noff-the-shelf Topology Observers to get your topology data from your environment. It is\nalso likely that you would also leverage the File or REST Topology Observers\neither to ingest data for which an off-the-shelf Topology Observer doesn't exist, or to\nmanually create relationships between Resources in your topology for which there\nis no source. "),(0,n.kt)("p",null,"In this scenario, we will have one set of topology data that represents\n",(0,n.kt)("strong",{parentName:"p"},"physical infrastructure")," and we will load this topology using a File Topology Observer."),(0,n.kt)("p",null,"Create a file called ",(0,n.kt)("strong",{parentName:"p"},"infrastructure.txt")," with the following content:"),(0,n.kt)("p",null,"Create a new file called ",(0,n.kt)("em",{parentName:"p"},"infrastructure.txt")," by running the following command in the Terminal window to open the text editor,\n",(0,n.kt)("strong",{parentName:"p"},"copy")," the topology data below, ",(0,n.kt)("strong",{parentName:"p"},"paste")," it into the text editor,\nclick on the ",(0,n.kt)("strong",{parentName:"p"},"Save")," button in the text editor and ",(0,n.kt)("strong",{parentName:"p"},"close")," the editor window (click on the X). "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"gedit infrastructure.txt\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'V:{"_operation":"InsertReplace","uniqueId":"379177a8-0a6a-4068-817c-d6d6e870437e","matchTokens":["379177a8-0a6a-4068-817c-d6d6e870437e","router1"],"tags":["WAIOpsDemo"],"name":"router1","entityTypes":["router"],"_references":[{"_toUniqueId":"7598a194-27a0-4d0b-9c49-cbc0070c99c9","_edgeType":"uses"}]}\nV:{"_operation":"InsertReplace","uniqueId":"9c1f90e0-7dc4-40d8-8721-40ea2f3af453","matchTokens":["9c1f90e0-7dc4-40d8-8721-40ea2f3af453","Intel"],"tags":["WAIOpsDemo"],"name":"Intel","entityTypes":["cpu"],"_references":[]}\nV:{"_operation":"InsertReplace","uniqueId":"222-9c1f90e0-7dc4-40d8-8721-40ea2f3af453","matchTokens":["222-9c1f90e0-7dc4-40d8-8721-40ea2f3af453","AMD"],"tags":["WAIOpsDemo"],"name":"AMD","entityTypes":["cpu"],"_references":[]}\nV:{"_operation":"InsertReplace","uniqueId":"7598a194-27a0-4d0b-9c49-cbc0070c99c9","matchTokens":["7598a194-27a0-4d0b-9c49-cbc0070c99c9","greatFireWallOfSecurity"],"tags":["WAIOpsDemo"],"name":"greatFireWallOfSecurity","entityTypes":["firewall"],"_references":[]}\nV:{"_operation":"InsertReplace","uniqueId":"974d1788-1312-4151-8a62-73fa1854e807","matchTokens":["974d1788-1312-4151-8a62-73fa1854e807","computer1000"],"tags":["WAIOpsDemo"],"name":"computer1000","entityTypes":["computer"],"_references":[{"_toUniqueId":"379177a8-0a6a-4068-817c-d6d6e870437e","_edgeType":"connectedTo"},{"_toUniqueId":"9c1f90e0-7dc4-40d8-8721-40ea2f3af453","_edgeType":"contains"},{"_toUniqueId":"222-9c1f90e0-7dc4-40d8-8721-40ea2f3af453","_edgeType":"contains"}]}\nV:{"_operation":"InsertReplace","uniqueId":"5c6f968a-2006-4b43-96b5-dd53df6b0afb","matchTokens":["5c6f968a-2006-4b43-96b5-dd53df6b0afb","steve"],"tags":["WAIOpsDemo"],"name":"steve","entityTypes":["person"],"_references":[{"_toUniqueId":"974d1788-1312-4151-8a62-73fa1854e807","_edgeType":"uses"}]}\n')),(0,n.kt)("p",null,"The pseudo JSON format in this topology file is the format expected by the File Observer, and contains\ntopology directives, one per line."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Other format information can be found in the ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/4.1.0?topic=jobs-file-observer"},(0,n.kt)("strong",{parentName:"a"},"documentation")))),(0,n.kt)("h4",{id:"creating-a-file-topology-observer"},"Creating a File Topology Observer"),(0,n.kt)("p",null,"We will create a file topology observer to load the topology file we just created. "),(0,n.kt)("p",null,"Log into the Cloud Pak for AIOps: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"from the burger menu in the top-left navigate to: ",(0,n.kt)("strong",{parentName:"li"},"Define \u2192 Data and tool connections")),(0,n.kt)("li",{parentName:"ul"},"from the ",(0,n.kt)("strong",{parentName:"li"},"Data and tool connections")," page, click on ",(0,n.kt)("strong",{parentName:"li"},"Add connection")),(0,n.kt)("li",{parentName:"ul"},"from the ",(0,n.kt)("strong",{parentName:"li"},"Add connections")," page, under ",(0,n.kt)("strong",{parentName:"li"},"Category")," click on ",(0,n.kt)("strong",{parentName:"li"},"Topology")," then search for ",(0,n.kt)("strong",{parentName:"li"},"File")," tile. Click on the\n",(0,n.kt)("strong",{parentName:"li"},"File")," tile and select ",(0,n.kt)("strong",{parentName:"li"},"Connect")," on the right")),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(7243).Z,width:"1863",height:"819"})),(0,n.kt)("p",null,"In the ",(0,n.kt)("strong",{parentName:"p"},"New observer job: File"),' form, fill the Unique ID field as "infrastructure". Keep the\n',(0,n.kt)("strong",{parentName:"p"},"File Mode")," as ",(0,n.kt)("strong",{parentName:"p"},"Upload local file"),". Click on ",(0,n.kt)("strong",{parentName:"p"},"Drag and drop file here or click to upload"),"\nand from the pop-up file selection window, find the ",(0,n.kt)("strong",{parentName:"p"},"infrastructure.txt")," file under ",(0,n.kt)("strong",{parentName:"p"},"sysadmin/lab"),"."),(0,n.kt)("p",null,"Leave the ",(0,n.kt)("strong",{parentName:"p"},"Provider")," field unchanged, as shown below:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(2745).Z,width:"829",height:"752"})),(0,n.kt)("p",null,"Click the ",(0,n.kt)("strong",{parentName:"p"},"Save")," button."),(0,n.kt)("p",null,"The File Observer job will run the moment it is saved. After you have done this, your\n",(0,n.kt)("strong",{parentName:"p"},"Observer jobs")," page should look like the one below. You can verify that your job ran successfully by confirming the ",(0,n.kt)("strong",{parentName:"p"},"Ready")," status\nfor each job:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(3692).Z,width:"3354",height:"776"})),(0,n.kt)("h2",{id:"73-creating-a-topology-resource-group"},"7.3: Creating a Topology Resource Group"),(0,n.kt)("p",null,'Now that we have topology resources, we will create a topology group\nusing the "exact" topology group template. This template is useful for when you have a specific\ncollection of resources that are unique in your environment that may be of\nparticular importance. Perhaps you want to be able to find this group of\nresources quickly and easily, or visualize them on the screen.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From the burger menu in the top-left, navigate to: ",(0,n.kt)("strong",{parentName:"li"},"Operate \u2192 Resource management"),"."),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Resource management")," page, click on the ",(0,n.kt)("strong",{parentName:"li"},"Resource group templates")," icon in the top-right.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(8482).Z,width:"1862",height:"584"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Resource group templates")," page, click on ",(0,n.kt)("strong",{parentName:"li"},"Create a new template"),", select ",(0,n.kt)("strong",{parentName:"li"},"Exact template")," and click ",(0,n.kt)("strong",{parentName:"li"},"Start"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(2230).Z,width:"1862",height:"778"})),(0,n.kt)("p",null,"You will be presented with a ",(0,n.kt)("strong",{parentName:"p"},"Template builder")," page. From here, use the\nfollowing steps to configure a new exact template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set the ",(0,n.kt)("strong",{parentName:"li"},"Template name")," as ",(0,n.kt)("strong",{parentName:"li"},"My Resource Group"),"."),(0,n.kt)("li",{parentName:"ul"},"Skip the optional ",(0,n.kt)("strong",{parentName:"li"},"Description"),"."),(0,n.kt)("li",{parentName:"ul"},"Choose the ",(0,n.kt)("strong",{parentName:"li"},"Resource group type: network")),(0,n.kt)("li",{parentName:"ul"},"Under ",(0,n.kt)("strong",{parentName:"li"},"Resource group naming pattern"),", in the ",(0,n.kt)("strong",{parentName:"li"},"Name prefix")," field type ",(0,n.kt)("strong",{parentName:"li"},"ROUTER-")),(0,n.kt)("li",{parentName:"ul"},"Enable ",(0,n.kt)("strong",{parentName:"li"},"Correlate event groups on topologies from this template"),". This is actually the objective of this Lab section after all. We will\ncorrelate events that affect the resources in the same topology group. This template will create such group of topology resources."),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Search for a resource to get started")," on the right, type ",(0,n.kt)("strong",{parentName:"li"},"router1"),"\nand hit Enter"),(0,n.kt)("li",{parentName:"ul"},"Choose ",(0,n.kt)("strong",{parentName:"li"},"router1")," from the list of resources. Your screen should look like this")),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(1736).Z,width:"1861",height:"810"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On the top-right, change the view to 1 hop and click ",(0,n.kt)("strong",{parentName:"li"},"Render"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(305).Z,width:"1017",height:"810"})),(0,n.kt)("p",null,"In summary, we have selected 3 resources that will be part of a topology resource group, as render in the view. Your form should look like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(733).Z,width:"1861",height:"817"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Finally, click ",(0,n.kt)("strong",{parentName:"li"},"Save template & generate resource group"))),(0,n.kt)("p",null,"Click on ",(0,n.kt)("strong",{parentName:"p"},"Resource group templates")," in the top-left. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(739).Z,width:"735",height:"230"})),(0,n.kt)("p",null,"In the ",(0,n.kt)("strong",{parentName:"p"},"Resource group templates")," screen, you will see your\nnew template:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(9578).Z,width:"3354",height:"730"})),(0,n.kt)("p",null,"Click on ",(0,n.kt)("strong",{parentName:"p"},"Resource management")," in the top-left and click on the ",(0,n.kt)("strong",{parentName:"p"},"Resource groups")," tab:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(977).Z,width:"3354",height:"1046"})),(0,n.kt)("p",null,"If you click on the name ",(0,n.kt)("strong",{parentName:"p"},"ROUTER-router1"),", you will be able to view the\ntopology group, which consists of 3 resources:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(8366).Z,width:"1862",height:"821"})),(0,n.kt)("h2",{id:"74-validate-topological-correlation"},"7.4: Validate Topological Correlation"),(0,n.kt)("p",null,"Now we have a group of topology resources that we can use to validate topological\ncorrelation. We will reload the same set of events.\nBecause these events impact resources we have in our topology map and\nthere is a resource group that clump these resources together, these alerts will be correlated."),(0,n.kt)("p",null,"From the ",(0,n.kt)("strong",{parentName:"p"},"Terminal")," window, lets submit again the events via the webhook script created in the previous section by running the following command from the ",(0,n.kt)("strong",{parentName:"p"},"Terminal")," window:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"bash event-load-webhook.sh topology-events.json\n")),(0,n.kt)("p",null,"Lets verify how the alerts are shown in the topology view:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From the burger menu in the top-left navigate to: ",(0,n.kt)("strong",{parentName:"li"},"Operate \u2192 Resource management"),"."),(0,n.kt)("li",{parentName:"ul"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Resource management")," page, click on the ",(0,n.kt)("strong",{parentName:"li"},"Resource groups")," tab. ")),(0,n.kt)("p",null,"Now we can see the three alerts in the ",(0,n.kt)("strong",{parentName:"p"},"Resource alerts")," column, as shown below: "),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(2274).Z,width:"3354",height:"1064"})),(0,n.kt)("p",null,"Click on the resource group ",(0,n.kt)("strong",{parentName:"p"},"ROUTER-router1")," to see the resource details. Now we can see the\nthree resources, each with one alert. Click on the ",(0,n.kt)("strong",{parentName:"p"},"Topology activity")," on the bottom to show the\nalert severity breakdown over time.  "),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(7744).Z,width:"3350",height:"1982"})),(0,n.kt)("p",null,"Lets validated that these alerts are indeed correlated. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From the burger menu in the top-left navigate to: ",(0,n.kt)("strong",{parentName:"li"},"Operate \u2192 Incidents and alerts")," and click on the ",(0,n.kt)("strong",{parentName:"li"},"Alerts")," tab")),(0,n.kt)("p",null,"Now we can see that the three alerts have been correlated under a single group. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(9259).Z,width:"1862",height:"374"})),(0,n.kt)("p",null,"Click on the chevron icon on the left to expand the group.  Also click on the ",(0,n.kt)("strong",{parentName:"p"},"View correlation")," icon in the top-right, the ",(0,n.kt)("strong",{parentName:"p"},"Correlation")," column shows\nthe topological group icon. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(2695).Z,width:"3354",height:"786"})),(0,n.kt)("h2",{id:"75-lab-recap"},"7.5: Lab Recap"),(0,n.kt)("p",null,"Congratulations if you made it here!. We have seen a lot of features in a short period of time. If there\nis a single thought that you can take away from this Lab, this is it:"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Event Management is a core feature of the Cloud Pak for AIOps, as it can consume IT Ops events from multiple sources and\napply advanced event noise reduction capabilities,\nincluding event classification, deduplication, correlation, suppression, etc. This allows IT operations teams to respond\nquickly and proactively to slowdowns and outages, with end-to-end visibility and context.")))}d.isMDXComponent=!0},305:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/1-hop-56e996211f377a25cb0e88d21e1dda74.png"},8366:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/3-resources-9e531c50d7fbe45b0c13371e787b291d.png"},2695:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/alerts-correlated-8e0d9b5c0550a1d3057a73ddfdcfb009.png"},8616:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/alerts-no-correlated-46adbb5cbcd01b42505cfdabd20c2866.png"},733:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/exact-0e619a2532b8a75865bd3216a3cd30e6.png"},7243:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/file-observer-3beb38c337adf197a9098551e9b30125.png"},2274:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/group-with-alerts1-cc1d971d260a8f60aad81669fa0f0cfa.png"},7744:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/group-with-alerts2-a8496e361d8837dd9c55797176123a57.png"},2745:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/infrajob-05dee53ece2b33d5ced8a742e0ad7fd6.png"},977:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/new-resource-group-d40cfb970d208c2fa65502a6849efa9a.png"},9259:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/one-group-47097573cdf7c2c598b97ccf8084cde0.png"},3692:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/one-observer-aee11ea688c12845941a18e4eb21d79f.png"},9578:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/resourcegroup-600eef43d87ea2bf33e6437632726e69.png"},1736:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/router1-b09d11cac6f5cad82c70d032f80b8f57.png"},739:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/select-aaa95cde7c23b8fbbf1da835962ad23d.png"},2230:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/start-template-d5d55a02b1e76f664ce76da4b17d2c62.png"},8482:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/template-icon-63c2012f3fa1f446b570c970dd4bd3ba.png"}}]);