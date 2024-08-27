"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[6426],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(o),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return o?n.createElement(k,l(l({ref:t},p),{},{components:o})):n.createElement(k,l({ref:t},p))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6349:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const r={title:"4. Migrate custom correlation",description:"Migrate a custom correlation from Netcool to AIOps",sidebar_position:4},l=void 0,i={unversionedId:"cloud-pak-aiops/netcool-lab/migrate-custom-correlation/index",id:"cloud-pak-aiops/netcool-lab/migrate-custom-correlation/index",title:"4. Migrate custom correlation",description:"Migrate a custom correlation from Netcool to AIOps",source:"@site/labs/cloud-pak-aiops/netcool-lab/4-migrate-custom-correlation/index.mdx",sourceDirName:"cloud-pak-aiops/netcool-lab/4-migrate-custom-correlation",slug:"/cloud-pak-aiops/netcool-lab/migrate-custom-correlation/",permalink:"/techxchange2024/labs/cloud-pak-aiops/netcool-lab/migrate-custom-correlation/",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4. Migrate custom correlation",description:"Migrate a custom correlation from Netcool to AIOps",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3. Set up the Netcool Connector",permalink:"/techxchange2024/labs/cloud-pak-aiops/netcool-lab/netcool-connector/"},next:{title:"5. Storage, HA and FIPS Considerations",permalink:"/techxchange2024/labs/cloud-pak-aiops/netcool-lab/storage-ha/"}},s={},c=[{value:"7.1 Overview",id:"71-overview",level:2},{value:"7.2 Create a scope-based grouping policy",id:"72-create-a-scope-based-grouping-policy",level:2},{value:"7.3 Create a custom field in Netcool/OMNIbus",id:"73-create-a-custom-field-in-netcoolomnibus",level:2},{value:"7.4 Update the Netcool Connector mapping",id:"74-update-the-netcool-connector-mapping",level:2},{value:"7.5 Create a Netcool/Impact policy",id:"75-create-a-netcoolimpact-policy",level:2},{value:"7.6 Create, configure, and start a Policy Activator service",id:"76-create-configure-and-start-a-policy-activator-service",level:2},{value:"7.7 Observe your new correlation in action",id:"77-observe-your-new-correlation-in-action",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"71-overview"},"7.1 Overview"),(0,a.kt)("p",null,"In this section, you will work through the process of migrating a correlation from Netcool/OMNIbus to AIOps. We will start with the premise that we have an existing correlation whereby events are being correlated according to a custom automation. The custom automation resides in Netcool/Impact and is doing a lookup in an external database and setting the business unit attribute in the event. Events are then grouped according to this attribute. This migration process involves a number of steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Modify the Netcool correlation so that it sets a common attribute within the event set that effectively links the event set together"),(0,a.kt)("li",{parentName:"ul"},"Map the linked attribute up into AIOps"),(0,a.kt)("li",{parentName:"ul"},"Create a scope-based automation policy in AIOps to correlate the events together")),(0,a.kt)("p",null,"In this section, you will complete the following tasks to simulate this exercise:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a scope-based grouping policy in AIOps to correlate events according to your custom attribute"),(0,a.kt)("li",{parentName:"ul"},"Create a custom field in the ObjectServer to hold the correlation key"),(0,a.kt)("li",{parentName:"ul"},"Update the mapping in your Netcool Connector instance to map the correlation key"),(0,a.kt)("li",{parentName:"ul"},"Create a Netcool/Impact policy to set the correlation key"),(0,a.kt)("li",{parentName:"ul"},"Create and start a new Netcool/Impact Policy Activator service to run your Netcool/Impact policy"),(0,a.kt)("li",{parentName:"ul"},"Observe your new custom correlation in action")),(0,a.kt)("h2",{id:"72-create-a-scope-based-grouping-policy"},"7.2 Create a scope-based grouping policy"),(0,a.kt)("p",null,"Before creating a new scope based correlatio policy we will disable the default policies that come with AIOps. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From the hamburger menu in the top-left of the screen, navigate to: ",(0,a.kt)("strong",{parentName:"li"},"Operate \u2192 Automations")),(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"Policies")," tab, click the ",(0,a.kt)("strong",{parentName:"li"},"Toggle Filters")," icon, check ",(0,a.kt)("strong",{parentName:"li"},"scope-based")," and click ",(0,a.kt)("strong",{parentName:"li"},"Apply"),"."),(0,a.kt)("li",{parentName:"ul"},"You will see two default policies listed. Scroll to the right and under the ",(0,a.kt)("strong",{parentName:"li"},"State")," column click the slider to disable both of them.")),(0,a.kt)("p",null,"You will now create a new scope-based grouping policy automation in AIOps to correlate events that have been correlated together via your custom correlation automation. The policy will act when an alert is created or if the custom correlation field is updated. If the custom correlation field is not empty, it will correlate the events together based on the contents of this field, thereby effecting the correlation."),(0,a.kt)("p",null,"Use the following steps to create the new AIOps automation policy:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Under the ",(0,a.kt)("strong",{parentName:"li"},"Policies")," tab, click the ",(0,a.kt)("strong",{parentName:"li"},"Create policy")," button"),(0,a.kt)("li",{parentName:"ul"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Policy templates")," page, select the ",(0,a.kt)("strong",{parentName:"li"},"Group alerts based on scope")," tile"),(0,a.kt)("li",{parentName:"ul"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Group alerts based on scope")," page:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Make sure the ",(0,a.kt)("strong",{parentName:"li"},"Policy")," is ",(0,a.kt)("strong",{parentName:"li"},"Enabled")," (green)"),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Policy details"),", set the ",(0,a.kt)("strong",{parentName:"li"},"Policy name"),' as "Custom correlation"'),(0,a.kt)("li",{parentName:"ul"},"Change the ",(0,a.kt)("strong",{parentName:"li"},"Execution order")," slider value to ",(0,a.kt)("strong",{parentName:"li"},"40")),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Policy is triggered"),", check ",(0,a.kt)("strong",{parentName:"li"},"Before an alert is created")),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Policy is triggered"),", check ",(0,a.kt)("strong",{parentName:"li"},"After an alert has been updated")),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Alert property"),", select ",(0,a.kt)("strong",{parentName:"li"},"alert.details")," and set ",(0,a.kt)("strong",{parentName:"li"},"Change")," to ",(0,a.kt)("strong",{parentName:"li"},"Changes"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Details name"),", enter: ",(0,a.kt)("inlineCode",{parentName:"li"},"customCorrelation1")))),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Condition sets"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Add condition")," and select ",(0,a.kt)("strong",{parentName:"li"},"Alert property")),(0,a.kt)("li",{parentName:"ul"},"Leave ",(0,a.kt)("strong",{parentName:"li"},"AND")," selected"),(0,a.kt)("li",{parentName:"ul"},"For ",(0,a.kt)("strong",{parentName:"li"},"Property"),", select ",(0,a.kt)("strong",{parentName:"li"},"alert.details")),(0,a.kt)("li",{parentName:"ul"},"For ",(0,a.kt)("strong",{parentName:"li"},"Details name"),", enter: ",(0,a.kt)("inlineCode",{parentName:"li"},"customCorrelation1")),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Operator")," select ",(0,a.kt)("strong",{parentName:"li"},"not empty")))),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Create a scope-based grouping"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("strong",{parentName:"li"},"alert.details")),(0,a.kt)("li",{parentName:"ul"},"For ",(0,a.kt)("strong",{parentName:"li"},"Details name"),", enter: ",(0,a.kt)("inlineCode",{parentName:"li"},"customCorrelation1")),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Apply")))),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Time window"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For ",(0,a.kt)("strong",{parentName:"li"},"Specify a time period"),", enter: ",(0,a.kt)("inlineCode",{parentName:"li"},"300"),". This represents 300 seconds (5 minutes)."),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Type"),", select ",(0,a.kt)("strong",{parentName:"li"},"Rolling"),". This means that alerts will continue to be grouped as long as they are not separated by more than 15 minutes."))))),(0,a.kt)("li",{parentName:"ul"},"Finally, click on ",(0,a.kt)("strong",{parentName:"li"},"Create Policy")," on the top-right to create and save your new policy.")),(0,a.kt)("h2",{id:"73-create-a-custom-field-in-netcoolomnibus"},"7.3 Create a custom field in Netcool/OMNIbus"),(0,a.kt)("p",null,"Now you will create a custom field in Netcool/OMNIbus to hold the custom correlation attribute."),(0,a.kt)("p",null,"The first step is to create a custom field to hold the key data value that will tie each event set together."),(0,a.kt)("p",null,"Use the following steps to create the custom field in Netcool/OMNIbus:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From the Terminal window run these commands")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export OMNIHOME=/opt/IBM/tivoli/netcool/omnibus\n$OMNIHOME/bin/nco_sql -server AGG_P -user root -password netcool\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Execute the following SQL at the SQL command prompt:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1> ALTER TABLE alerts.status ADD COLUMN CustomCorrelation1 VARCHAR(64)\n2> go\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type the following to validate the creation of your new field:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1> describe alerts.status\n2> go\n")),(0,a.kt)("p",null,"You should see your newly created field at the bottom of the table listing."),(0,a.kt)("h2",{id:"74-update-the-netcool-connector-mapping"},"7.4 Update the Netcool Connector mapping"),(0,a.kt)("p",null,"In this section, you will modify your Netcool Connector mapping to include your newly created custom correlation field."),(0,a.kt)("p",null,"Use the following steps to modify your Netcool Connector instance:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log in to the AIOps console and select ",(0,a.kt)("strong",{parentName:"li"},"Integrations")," from the main menu"),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("strong",{parentName:"li"},"IBM Netcool Operations Insight ObjectServer")," from the already created integrations"),(0,a.kt)("li",{parentName:"ul"},"Click on the Netcool Connector instance you created in the earlier lab"),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Next")," twice to get to the mapping screen"),(0,a.kt)("li",{parentName:"ul"},"Scroll down to the ",(0,a.kt)("strong",{parentName:"li"},"details")," section and update it so it includes your additional attribute mapping:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    "details": {\n        "appId": alert.@AppID = "" ? undefined : alert.@AppID,\n        "region": alert.@Region = "" ? undefined : alert.@Region,\n        "customCorrelation1":alert.@CustomCorrelation1 = "" ? undefined : alert.@CustomCorrelation1\n    },\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save")," to update your Netcool Connector integration instance"),(0,a.kt)("li",{parentName:"ul"},"Wait a minute or two to allow the Netcool Connector to reinitialise")),(0,a.kt)("h2",{id:"75-create-a-netcoolimpact-policy"},"7.5 Create a Netcool/Impact policy"),(0,a.kt)("p",null,"In this section, you will create a Netcool/Impact policy to set the correlation key value in different groups of events, to simulate the event enrichment process."),(0,a.kt)("p",null,"Use the following steps to create the new custom correlation policy in Netcool/Impact:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate to the Netcool/Impact GUI: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://netcoolvm:16311/ibm/console")),(0,a.kt)("li",{parentName:"ul"},"Log in to Netcool/Impact as the user ",(0,a.kt)("inlineCode",{parentName:"li"},"impactadmin")," and password ",(0,a.kt)("inlineCode",{parentName:"li"},"netcool")),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Policies")),(0,a.kt)("li",{parentName:"ul"},"Click on the pull-down menu button on the new policy button and select ",(0,a.kt)("strong",{parentName:"li"},"IPL Policy")),(0,a.kt)("li",{parentName:"ul"},"Copy and paste the following sample policy into the policy editor:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// CUSTOM CORRELATION\n\nGroupKey = String(GetDate()); \n\nMySQL1 = \"update alerts.status set CustomCorrelation1 = 'Networks:\" + GroupKey + \"'\" +\n        \" where CustomCorrelation1 = ''\" +\n        \" and Node in ('link1', 'link2', 'link3', 'link4', 'link5', 'link6', 'link7', 'link8', 'link9')\";\n\nDirectSQL(\"defaultobjectserver\", MySQL1, false, false);\n \nMySQL2 = \"update alerts.status set CustomCorrelation1 = 'Finance:\" + GroupKey + \"'\" +\n        \" where CustomCorrelation1 = ''\" +\n        \" and Node in ('London', 'Washington', 'Singapore', 'Moscow', 'Tokyo', 'Beijing', 'Roma')\";\n\nDirectSQL(\"defaultobjectserver\", MySQL2, false, false);\n \nMySQL3 = \"update alerts.status set CustomCorrelation1 = 'Operations:\" + GroupKey + \"'\" +\n        \" where CustomCorrelation1 = ''\" +\n        \" and Node in ('Hamilton', 'Auckland', 'Wellington', 'Fujinomiya', 'Ottawa', 'Marlinspike', 'Johannesburg')\";\n\nDirectSQL(\"defaultobjectserver\", MySQL3, false, false);\n \nMySQL4 = \"update alerts.status set CustomCorrelation1 = 'Facilities:\" + GroupKey + \"'\" +\n        \" where CustomCorrelation1 = ''\" +\n        \" and Node in ('Warrnambool', 'Melbourne', 'Raleigh', 'Geneva', 'Madrid', 'Belfast', 'Tauranga', 'Toronto', 'Amsterdam')\";\n\nDirectSQL(\"defaultobjectserver\", MySQL4, false, false);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Save")," button and save the policy as: ",(0,a.kt)("inlineCode",{parentName:"li"},"AIOPS_CustomCorrelation"))),(0,a.kt)("h2",{id:"76-create-configure-and-start-a-policy-activator-service"},"7.6 Create, configure, and start a Policy Activator service"),(0,a.kt)("p",null,"In this section, you will create a new Policy Activator service, that will periodically target sets of events and mark them for correlation. It will do this by setting the ",(0,a.kt)("strong",{parentName:"p"},"CustomCorrelation1")," field."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate to the Netcool/Impact GUI: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://netcoolvm:16311/ibm/console")),(0,a.kt)("li",{parentName:"ul"},"Log in to Netcool/Impact as the user ",(0,a.kt)("inlineCode",{parentName:"li"},"impactadmin")," and password ",(0,a.kt)("inlineCode",{parentName:"li"},"netcool")),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Services")),(0,a.kt)("li",{parentName:"ul"},"Click on the pull-down menu button on the new service button and select ",(0,a.kt)("strong",{parentName:"li"},"Policy Activator")),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Service Name"),", enter: ",(0,a.kt)("inlineCode",{parentName:"li"},"CustomCorrelation")),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Activation Interval"),", enter: ",(0,a.kt)("inlineCode",{parentName:"li"},"11")," (seconds)"),(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Policy"),", select ",(0,a.kt)("strong",{parentName:"li"},"AIOPS_CustomCorrelation")),(0,a.kt)("li",{parentName:"ul"},"Click on the disk icon to save your new Policy Activator service")),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(2846).Z,width:"504",height:"266"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select your newly created service and click the play button (",(0,a.kt)("strong",{parentName:"li"},"Start Service"),") to start it")),(0,a.kt)("h2",{id:"77-observe-your-new-correlation-in-action"},"7.7 Observe your new correlation in action"),(0,a.kt)("p",null,"In this final section, you will log in to the AIOps UI and observe your new correlation working."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log in to the AIOps console and select ",(0,a.kt)("strong",{parentName:"li"},"Alerts")," from the main menu"),(0,a.kt)("li",{parentName:"ul"},"Add the new ",(0,a.kt)("strong",{parentName:"li"},"customCorrelation1")," field to your View as you did in ",(0,a.kt)("a",{parentName:"li",href:"/techxchange2024/labs/cloud-pak-aiops/netcool-lab/netcool-connector/"},"lab 3.5")),(0,a.kt)("li",{parentName:"ul"},"View your Simnet alerts with the ",(0,a.kt)("strong",{parentName:"li"},"customCorrelation1")," field populated"),(0,a.kt)("li",{parentName:"ul"},"See your Simnet alerts grouped via a scope-based correlation:")),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(9334).Z,width:"1738",height:"335"})))}m.isMDXComponent=!0},9334:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/correlated_events-8065567447c703c010fa928c19ee7a9c.png"},2846:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/new_policy_activator_service-36022d50cc7270b56c2e0247e0d3fe42.png"}}]);