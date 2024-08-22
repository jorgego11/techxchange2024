"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[5805],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),i=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=i(a),g=n,h=c["".concat(l,".").concat(g)]||c[g]||m[g]||o;return a?r.createElement(h,s(s({ref:t},u),{},{components:a})):r.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:n,s[1]=p;for(var i=2;i<o;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const o={title:"5. Topology Group Templates",description:"Create and configure topology group templates",sidebar_position:5},s=void 0,p={unversionedId:"cloud-pak-aiops/topology-lab/topology-templates/index",id:"cloud-pak-aiops/topology-lab/topology-templates/index",title:"5. Topology Group Templates",description:"Create and configure topology group templates",source:"@site/labs/cloud-pak-aiops/topology-lab/5-topology-templates/index.mdx",sourceDirName:"cloud-pak-aiops/topology-lab/5-topology-templates",slug:"/cloud-pak-aiops/topology-lab/topology-templates/",permalink:"/techxchange2024/labs/cloud-pak-aiops/topology-lab/topology-templates/",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"5. Topology Group Templates",description:"Create and configure topology group templates",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. Topology Rules",permalink:"/techxchange2024/labs/cloud-pak-aiops/topology-lab/topology-rules/"},next:{title:"6. Topology Applications and Business Criticality",permalink:"/techxchange2024/labs/cloud-pak-aiops/topology-lab/topology-applications/"}},l={},i=[{value:"5.1: Exact Group Template",id:"51-exact-group-template",level:2},{value:"Exercise",id:"exercise",level:4},{value:"5.2: Tag Group Template",id:"52-tag-group-template",level:2},{value:"Exercise",id:"exercise-1",level:4},{value:"5.3: Dynamic Group Template",id:"53-dynamic-group-template",level:2},{value:"Exercise",id:"exercise-2",level:4},{value:"5.4: Token Group Template",id:"54-token-group-template",level:2},{value:"Exercise",id:"exercise-3",level:4}],u={toc:i},c="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This chapter focuses on topology group templates, the different types, and how groups\nof topology can be used for topology-based event correlation. We will use\nthe topology we created in the previous chapters."),(0,n.kt)("p",null,'By the end of this chapter, you will understand the four types of topology\ntemplates, and have created an example of each type. You will also understand\nwhat a "favorite" is and will have added some items to your topology dashboard.'),(0,n.kt)("p",null,"Topology group templates are used to create groups of resources. Resource groups\nmake it easier to find and visualize collections of related resources, as well\nas enabling event correlation over resources in the same group. There are four types of\ntopology group template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Exact"),": defines a single group of specific resources"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tag-based"),": defines a single group of resources that share a common tags"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Dynamic"),": defines one or more groups of resources that match a prescribed specification"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Token"),": defines a set of rules which use the properties of your resources to create one or more groups which contain those resources")),(0,n.kt)("p",null,"Note that ",(0,n.kt)("strong",{parentName:"p"},"Exact")," and ",(0,n.kt)("strong",{parentName:"p"},"Tag-based")," templates creates a ",(0,n.kt)("strong",{parentName:"p"},"single")," resource group while\n",(0,n.kt)("strong",{parentName:"p"},"Dynamic")," and ",(0,n.kt)("strong",{parentName:"p"},"Token")," templates could create ",(0,n.kt)("strong",{parentName:"p"},"multiple")," resource groups."),(0,n.kt)("h2",{id:"51-exact-group-template"},"5.1: Exact Group Template"),(0,n.kt)("p",null,"An exact template builds a single group of resources centered on a specified seed\nresource. The membership of the resulting resource group includes the seed resource\nand those matching the specified relationship and/or resource type criteria. Resource\ngroup membership is dynamically maintained for the resulting resource group provided\nthe specified seed resource type remains unchanged."),(0,n.kt)("p",null,"For example, you can use an exact template to create a group of resources only for a\nspecific Jenkins build pipeline and any new builds or physical server and its\nconnected network switch."),(0,n.kt)("p",null,"The exact topology group template is useful for when you have a specific\ncollection of resources that are unique in your environment that may be of\nparticular importance. Perhaps you want to be able to find this group of\nresources quickly and easily."),(0,n.kt)("h4",{id:"exercise"},"Exercise"),(0,n.kt)("p",null,"In this exercise, we will create a template for a specific group of resources\nfor our router ",(0,n.kt)("strong",{parentName:"p"},"router1")," and its connected resources up to one hop connection."),(0,n.kt)("p",null,"From the burger menu in the top-left, navigate to: ",(0,n.kt)("strong",{parentName:"p"},"Operate \u2192 Resource management"),".\nIn the ",(0,n.kt)("strong",{parentName:"p"},"Resource management")," page, click on the ",(0,n.kt)("strong",{parentName:"p"},"Resource group templates")," icon in the top-right."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5617).Z,width:"1127",height:"404"})),(0,n.kt)("p",null,"In the ",(0,n.kt)("strong",{parentName:"p"},"Resource group templates")," page, click on ",(0,n.kt)("strong",{parentName:"p"},"Create a new template"),", select ",(0,n.kt)("strong",{parentName:"p"},"Exact template")," and click ",(0,n.kt)("strong",{parentName:"p"},"Start"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(6965).Z,width:"1127",height:"683"})),(0,n.kt)("p",null,"You will be presented with a ",(0,n.kt)("strong",{parentName:"p"},"Template builder")," page. From here, use the\nfollowing steps to configure a new exact template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Give the template a name such as ",(0,n.kt)("strong",{parentName:"li"},"router1")),(0,n.kt)("li",{parentName:"ul"},"Choose the ",(0,n.kt)("strong",{parentName:"li"},"Resource group type")," as ",(0,n.kt)("strong",{parentName:"li"},"network")),(0,n.kt)("li",{parentName:"ul"},"Add a ",(0,n.kt)("strong",{parentName:"li"},"Resource group naming pattern prefix")," for the resulting group's name:\n",(0,n.kt)("strong",{parentName:"li"},"ROUTER-")),(0,n.kt)("li",{parentName:"ul"},"Enable ",(0,n.kt)("strong",{parentName:"li"},"Correlate event groups on topologies from this template"),"\nto correlate events across these resources"),(0,n.kt)("li",{parentName:"ul"},"On the right side, in the search box: ",(0,n.kt)("strong",{parentName:"li"},"Search for a resource to get started")," type ",(0,n.kt)("strong",{parentName:"li"},"router1"),"\nand hit Enter",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Choose ",(0,n.kt)("strong",{parentName:"li"},"router1")," from the list of resources"),(0,n.kt)("li",{parentName:"ul"},"Change the view to 1 hop and click ",(0,n.kt)("strong",{parentName:"li"},"Render"))))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4522).Z,width:"1017",height:"810"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save template & generate resource group"))),(0,n.kt)("p",null,"You should have something like the following:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4558).Z,width:"1653",height:"904"})),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("strong",{parentName:"p"},"Resource group templates")," link on the top. You will see your\nnew template:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(2518).Z,width:"1526",height:"58"})),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("strong",{parentName:"p"},"Resource management")," link on the top, select the ",(0,n.kt)("strong",{parentName:"p"},"Resource groups")," tab and search for ",(0,n.kt)("strong",{parentName:"p"},"ROUTER-")," , you will see\nthe following under the ",(0,n.kt)("strong",{parentName:"p"},"Resource groups")," tab:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5640).Z,width:"1104",height:"430"})),(0,n.kt)("p",null,"Click on the name ",(0,n.kt)("strong",{parentName:"p"},"ROUTER-router1"),", you will be able to view the\ntopology group, which shows 3 resources but actually consists of 4 resources because computer1000 actually represents two resources\nas they have been merged by the Merge Rule defined previously."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(2144).Z,width:"1673",height:"674"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you have enabled event correlation across this group of resources and receive\nevents related to any of these resources, these events will be correlated automatically.\nThis is called ",(0,n.kt)("strong",{parentName:"p"},"topological event correlation")," and is one of the correlation modes in addition\nto ",(0,n.kt)("strong",{parentName:"p"},"temporal")," and ",(0,n.kt)("strong",{parentName:"p"},"scope-based")," correlation. ")),(0,n.kt)("h2",{id:"52-tag-group-template"},"5.2: Tag Group Template"),(0,n.kt)("p",null,"A tag based template builds a single but dynamic resource group containing resources\nthat have the specified tag(s). Resource group membership is dynamically maintained\nto reflect changes in the topology for resources that gain or lose the specified tags."),(0,n.kt)("p",null,"For example, you can use a tag based template to create a dynamic group of your\nresources tagged with both 'red' and 'green'. Then, when you add new resources with\nboth of those tags, the resource group will be updated to include them."),(0,n.kt)("p",null,"Note that resources don't have to be connected; they simply need to have\nthe common tag in order to be grouped. Tags can be added to resources via the\ntopology ",(0,n.kt)("strong",{parentName:"p"},"tagsRule")," as discussed in the previous chapter, or by including the tags parameter\nif creating topology via the File or REST Observers."),(0,n.kt)("h4",{id:"exercise-1"},"Exercise"),(0,n.kt)("p",null,"In this exercise, we will create a template for group of resources based on\ntheir common tag."),(0,n.kt)("p",null,"In the ",(0,n.kt)("strong",{parentName:"p"},"Resource management")," page, click on the ",(0,n.kt)("strong",{parentName:"p"},"Resource group templates")," icon in the top-right.\nIn the ",(0,n.kt)("strong",{parentName:"p"},"Resource group templates")," page, click on ",(0,n.kt)("strong",{parentName:"p"},"Create a new template"),", select ",(0,n.kt)("strong",{parentName:"p"},"Tag based template")," and click ",(0,n.kt)("strong",{parentName:"p"},"Start"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(7643).Z,width:"1104",height:"664"})),(0,n.kt)("p",null,"You will be presented with a ",(0,n.kt)("strong",{parentName:"p"},"Template builder")," page. From here, use the\nfollowing steps to configure an tag based template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Give the template a name (e.g. tag template)"),(0,n.kt)("li",{parentName:"ul"},"Choose the ",(0,n.kt)("strong",{parentName:"li"},"Resource group type")," as ",(0,n.kt)("strong",{parentName:"li"},"compute")),(0,n.kt)("li",{parentName:"ul"},"Add a ",(0,n.kt)("strong",{parentName:"li"},"Resource group name")," for the name of the group of resources:\n",(0,n.kt)("strong",{parentName:"li"},"tag-group")),(0,n.kt)("li",{parentName:"ul"},"Enable ",(0,n.kt)("strong",{parentName:"li"},"Correlate event groups on topologies from this template"),"\nto correlate events across these resources"),(0,n.kt)("li",{parentName:"ul"},"Type ",(0,n.kt)("strong",{parentName:"li"},"WAIOpsDemo")," in the search box: ",(0,n.kt)("strong",{parentName:"li"},"Search for a tag to get started")," and\nhit Enter"),(0,n.kt)("li",{parentName:"ul"},"Check ",(0,n.kt)("strong",{parentName:"li"},"WAIOpsDemo")," from the list of available tags and then click the\n",(0,n.kt)("strong",{parentName:"li"},"Resources")," tab to see the list of matching resources")),(0,n.kt)("p",null,"You should have something like the following:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9394).Z,width:"1104",height:"777"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save template & generate resource group"))),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("strong",{parentName:"p"},"Resource group templates")," link on the top, filter by ",(0,n.kt)("strong",{parentName:"p"},"tag template")," and you will see your\nsaved template:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(7077).Z,width:"1104",height:"334"})),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("strong",{parentName:"p"},"Resource management")," link on the top, select the ",(0,n.kt)("strong",{parentName:"p"},"Resource groups")," tab and search for ",(0,n.kt)("strong",{parentName:"p"},"tag-group"),", you\nwill find the new group created by the tag template:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9968).Z,width:"1104",height:"371"})),(0,n.kt)("p",null,"If you click on the name ",(0,n.kt)("strong",{parentName:"p"},"tag-group"),", you will see the resources in the topology group:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4906).Z,width:"1104",height:"726"})),(0,n.kt)("h2",{id:"53-dynamic-group-template"},"5.3: Dynamic Group Template"),(0,n.kt)("p",null,"A dynamic group template builds multiple groups of resources that are similar to the\nspecified seed resource and relationship and/or resource type criteria. Resource\ngroup creation and membership is dynamically maintained based on the available\ntopology data and how it changes."),(0,n.kt)("p",null,"For example, you can use a dynamic group template to create dynamic groups of resources,\none for each of your virtual machines and the Kubernetes services they're running.\nResource groups are then added, removed and updated as you add or remove virtual\nmachines and/or services running on them."),(0,n.kt)("p",null,"The Dynamic group template is probably the most versatile of all the topology group\ntemplates. Using an example of a set of resources you want to group, the dynamic\ngroup template will automatically find other groups of resources that\nfollow the same ",(0,n.kt)("em",{parentName:"p"},"recipe")," as the example you give. As you expose the resources\nand relationships in the view, the template builder records the steps, and then\nuses this ",(0,n.kt)("em",{parentName:"p"},"recipe")," to find other similar groups of resources."),(0,n.kt)("h4",{id:"exercise-2"},"Exercise"),(0,n.kt)("p",null,"In this exercise, we will create a dynamic template to create groups of servers\nthat host our applications. We will create a second server ",(0,n.kt)("strong",{parentName:"p"},"computer1001")," that\nhosts the ",(0,n.kt)("strong",{parentName:"p"},"notification")," and ",(0,n.kt)("strong",{parentName:"p"},"email")," applications for the purposes of this\nexercise."),(0,n.kt)("p",null,"Create a new file called ",(0,n.kt)("strong",{parentName:"p"},"application2.txt")," by running the following command in the ",(0,n.kt)("strong",{parentName:"p"},"Terminal")," window to open the text editor\n, copy the topology data listed below (use the copy helper icon (top-right) for one-click copy), paste it into the text editor,\nclick on the ",(0,n.kt)("strong",{parentName:"p"},"Save")," button in the text editor and close the editor window (click on the X). "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"gedit application2.txt\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="application2.txt"',title:'"application2.txt"'},'V:{"_operation":"InsertReplace","uniqueId":"111-379177a8-0a6a-4068-817c-d6d6e870437e-app2","matchTokens":["111-379177a8-0a6a-4068-817c-d6d6e870437e-app2","notifications"],"tags":["WAIOpsDemo"],"name":"notifications","entityTypes":["application"],"_references":[{"_toUniqueId":"111-974d1788-1312-4151-8a62-73fa1854e807-app2","_edgeType":"runsOn"}]}\nV:{"_operation":"InsertReplace","uniqueId":"111-9c1f90e0-7dc4-40d8-8721-40ea2f3af453-app2","matchTokens":["111-9c1f90e0-7dc4-40d8-8721-40ea2f3af453-app2","email"],"tags":["WAIOpsDemo"],"name":"email","entityTypes":["application"],"_references":[{"_toUniqueId":"111-974d1788-1312-4151-8a62-73fa1854e807-app2","_edgeType":"runsOn"}]}\nV:{"_operation":"InsertReplace","uniqueId":"111-974d1788-1312-4151-8a62-73fa1854e807-app2","matchTokens":["111-974d1788-1312-4151-8a62-73fa1854e807-app2","computer1001"],"tags":["WAIOpsDemo"],"name":"computer1001","entityTypes":["computer"],"_references":[]}\n')),(0,n.kt)("p",null,"Use the steps described in the previous chapter to import this file (",(0,n.kt)("strong",{parentName:"p"},"application2.txt"),") using a\nnew File Observer job to ingest the topology data."),(0,n.kt)("p",null,"After running this last Observer job, you should see a total of 12 resources which 2 have been merged, as shown below:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(3740).Z,width:"1104",height:"497"})),(0,n.kt)("p",null,"Now lets create the dynamic group template. In the ",(0,n.kt)("strong",{parentName:"p"},"Resource management")," page, click on the ",(0,n.kt)("strong",{parentName:"p"},"Resource group templates")," icon in the top-right.\nIn the ",(0,n.kt)("strong",{parentName:"p"},"Resource group templates")," page, click on ",(0,n.kt)("strong",{parentName:"p"},"Create a new template"),", select ",(0,n.kt)("strong",{parentName:"p"},"Dynamic template")," and click ",(0,n.kt)("strong",{parentName:"p"},"Start"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(536).Z,width:"1104",height:"657"})),(0,n.kt)("p",null,"You will be presented with a ",(0,n.kt)("strong",{parentName:"p"},"Template builder")," page. From here, use the\nfollowing steps to configure a dynamic template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Give the template a ",(0,n.kt)("strong",{parentName:"li"},"name")," e.g. AppServers"),(0,n.kt)("li",{parentName:"ul"},"Choose the ",(0,n.kt)("strong",{parentName:"li"},"Resource group type: compute")),(0,n.kt)("li",{parentName:"ul"},"Add a ",(0,n.kt)("strong",{parentName:"li"},"Resource group naming pattern")," prefix for the resulting group's name:\n",(0,n.kt)("strong",{parentName:"li"},"APPSERVER-")),(0,n.kt)("li",{parentName:"ul"},"Enable ",(0,n.kt)("strong",{parentName:"li"},"Correlate event groups on topologies from this template"),"\nto correlate events across these resources"),(0,n.kt)("li",{parentName:"ul"},"In the search box ",(0,n.kt)("strong",{parentName:"li"},"Search for a resource to get started"),", type ",(0,n.kt)("strong",{parentName:"li"},"computer1000")," and hit Enter"),(0,n.kt)("li",{parentName:"ul"},"Choose ",(0,n.kt)("strong",{parentName:"li"},"computer1000")," from the list of available resources"),(0,n.kt)("li",{parentName:"ul"},"Right-click on computer1000 and select ",(0,n.kt)("strong",{parentName:"li"},"Follow Relationship \u2192 runsOn")," which will expose the applications ",(0,n.kt)("strong",{parentName:"li"},"webserver")," and ",(0,n.kt)("strong",{parentName:"li"},"billing"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(2788).Z,width:"1318",height:"781"})),(0,n.kt)("p",null,"You should have something like the following:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5874).Z,width:"1318",height:"781"})),(0,n.kt)("p",null,"Continue with the following steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Scroll down on the left side and note that the template has been recording your actions to build a ",(0,n.kt)("em",{parentName:"li"},"recipe")," for the template"),(0,n.kt)("li",{parentName:"ul"},"You can optionally add tag to the list of starting seeds if you want to restrict the items\nmatched by this template to just those tagged with specific tags")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4659).Z,width:"577",height:"558"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Continue to scroll down and click ",(0,n.kt)("strong",{parentName:"li"},"Save template & generate resource group"))),(0,n.kt)("p",null,"In the ",(0,n.kt)("strong",{parentName:"p"},"Preview resource groups")," section, you will see that the dynamic template builder has found two groups of\nresources that match the ",(0,n.kt)("em",{parentName:"p"},"recipe"),". The first group resources were in the original application resources data (",(0,n.kt)("strong",{parentName:"p"},"application.txt"),"). The second group resources were added\nby the Observer job we just run (",(0,n.kt)("strong",{parentName:"p"},"application2.txt"),"). In summary, we defined a dynamic template that creates groups for every compute resource\nand will include any ",(0,n.kt)("em",{parentName:"p"},"one hop")," resource that has the attribute ",(0,n.kt)("em",{parentName:"p"},"runsOn"),". "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8565).Z,width:"1652",height:"900"})),(0,n.kt)("h2",{id:"54-token-group-template"},"5.4: Token Group Template"),(0,n.kt)("p",null,"A token template builds multiple groups of resources using one or more rules. Any resource\nthat matches one of the rules will be added to a group whose name is based on the\nrule's token. Resource group membership is dynamically maintained to reflect changes\nin the topology for resources that match one of the template's rules."),(0,n.kt)("p",null,"For example, you could create a token template containing a rule with a token of\n'applicationId'. When you next load data, if you have three resources which each\nhave an applicationId property value of 'MyApp', then a group called 'MyApp' will\nbe created, and those three resources will be added to it."),(0,n.kt)("p",null,"As token group templates apply rules only to resources that are received via observer jobs, the\nonly way to actually see the new resource groups created by this template is by running\nthe related observer jobs."),(0,n.kt)("h4",{id:"exercise-3"},"Exercise"),(0,n.kt)("p",null,"We will create a Token group template to group cpu resources based on the manufacturer.\nIn other words, the template will create one group of all Intel cpu resources and\nanother group of all AMD cpu resources."),(0,n.kt)("p",null,"In the ",(0,n.kt)("strong",{parentName:"p"},"Resource management")," page, click on the ",(0,n.kt)("strong",{parentName:"p"},"Resource group templates")," icon in the top-right.\nIn the ",(0,n.kt)("strong",{parentName:"p"},"Resource group templates")," page, click on ",(0,n.kt)("strong",{parentName:"p"},"Create a new template"),", select ",(0,n.kt)("strong",{parentName:"p"},"Token template")," and click ",(0,n.kt)("strong",{parentName:"p"},"Start"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1399).Z,width:"1317",height:"681"})),(0,n.kt)("p",null,"You will be presented with a ",(0,n.kt)("strong",{parentName:"p"},"Template builder")," page. From here, use the\nfollowing steps to configure a token template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Give the template a ",(0,n.kt)("strong",{parentName:"li"},"name")," e.g. token template"),(0,n.kt)("li",{parentName:"ul"},"Choose the ",(0,n.kt)("strong",{parentName:"li"},"Resource group type: compute")),(0,n.kt)("li",{parentName:"ul"},"Enable ",(0,n.kt)("strong",{parentName:"li"},"Correlate event groups on topologies from this template"),"\nto correlate events across these resources"),(0,n.kt)("li",{parentName:"ul"},"On the right side, set the Rule name as ",(0,n.kt)("strong",{parentName:"li"},"CPU rule")),(0,n.kt)("li",{parentName:"ul"},"For ",(0,n.kt)("strong",{parentName:"li"},"Tokens")," type ",(0,n.kt)("strong",{parentName:"li"},"${name}")," and click on ",(0,n.kt)("strong",{parentName:"li"},"Add"),". This is the value of the name property which in our resource data will be ",(0,n.kt)("em",{parentName:"li"},"Intel")," or ",(0,n.kt)("em",{parentName:"li"},"AMD"),"."),(0,n.kt)("li",{parentName:"ul"},"Expand the ",(0,n.kt)("strong",{parentName:"li"},"Conditions")," section",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For ",(0,n.kt)("strong",{parentName:"li"},"Observers")," select ",(0,n.kt)("strong",{parentName:"li"},"File")," and click on ",(0,n.kt)("strong",{parentName:"li"},"Add")),(0,n.kt)("li",{parentName:"ul"},"Skip ",(0,n.kt)("strong",{parentName:"li"},"Providers")," as this will apply to all File Observer providers"),(0,n.kt)("li",{parentName:"ul"},"For ",(0,n.kt)("strong",{parentName:"li"},"Resource types")," select ",(0,n.kt)("strong",{parentName:"li"},"cpu")," and click on ",(0,n.kt)("strong",{parentName:"li"},"Add"),". This is important as we only want to group ",(0,n.kt)("strong",{parentName:"li"},"cpu")," type resources and nothing else. "),(0,n.kt)("li",{parentName:"ul"},"Skip the ",(0,n.kt)("strong",{parentName:"li"},"Token filter mode")," as we don't need additional logic to filter.")))),(0,n.kt)("p",null,"Your rule should look like this: "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(2209).Z,width:"709",height:"693"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Add rule"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Now confirm that you see the new rule under ",(0,n.kt)("strong",{parentName:"p"},"Rule definitions")," as shown below"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(6523).Z,width:"1309",height:"779"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Finally click on ",(0,n.kt)("strong",{parentName:"li"},"Save template"),".")),(0,n.kt)("p",null,"As this template will create new groups based on the cpu name and these\nresources are in the ",(0,n.kt)("strong",{parentName:"p"},"infrastructure")," resource data file, please rerun the ",(0,n.kt)("strong",{parentName:"p"},"infrastructure"),"\nobserver job to actually apply the rules in this group template."),(0,n.kt)("p",null,"Now in the ",(0,n.kt)("strong",{parentName:"p"},"Resource management")," page, click on the ",(0,n.kt)("strong",{parentName:"p"},"Resource groups")," tab and\nyou should see two new resource groups created, as shown below:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5543).Z,width:"1309",height:"485"})))}m.isMDXComponent=!0},4522:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/1-hop-56e996211f377a25cb0e88d21e1dda74.png"},3740:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/12resources-8c42342dfe189aeae8af468c5588cc40.png"},2209:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/before-rule-91a98855624e1967a730f79081e51dec.png"},536:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dynamic-option-948bd73e6438489a339d40189bdced7f.png"},5874:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dynamic-7fd3d2d6795b9012b224c2b6715d2633.png"},4659:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dynamic_def-2f0650a74e42be7d94d7b4fad015a1e3.png"},8565:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dynamic_result-af517c86c59119bdb939553fd7041cbd.png"},4558:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/exact-bc5bf4c5a1196f8f72c61bc76ffa4749.png"},5617:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/group-templates-591fcd1ef2be8459b4ba8949788769fb.png"},6965:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/new-exact-ae918fcab9f7308d9c113d7b8eec4003.png"},6523:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/new-rule-863c7de1b401c91b1debaa7bfd9115ef.png"},2518:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABfYAAAA6CAAAAADXBFeZAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAHdElNRQfmCBkUDjJc03ZJAAAMh0lEQVR42u3c+1ZTVx7A8XkKXsA+QfsC8wbTtbkWIYSMgCiIQkPxQrEWK4Jgq1AROxHwQhlUZLxQpwhSFY1CFREdHApI5RYBQcBAIPnOHznnJBSsWKMT6u+zupa4z3EHtztf4o70L9PT0wghhHgvTE9P/0WyL4QQkn0hhBCSfSGEEH+O7PcJIYR4L8irfSGEkEMeIYQQkn0hhBCSfSGEEJJ9IYQQkn0hhBCSfSGEEJJ9IYQQkn0hhBCSfSGEEJJ9IYQQkn0hhBCSfSGEkOwLIYSQ7AshhJDsCyGEkOwLIYSQ7AshhHhDKR90vPqmkJCQkEBkv+qDj6pkyUWgjMaPB3K68wXBNE2QabH+/vWY/sU/z7C/rc/kyoFlh4svyxNixdVPqVrTEaC5fj/7EwUFBR90dKxZ4WTO6CVDrj1hXwflInYrpZTa/rLLrbvf0ecRtAsUoFUuBuhSNmNooWnhD+2kgPa6vO69yP7Y7dfLvn08sI//qVJKnQEovAb3rJ+kNnkvnFMlAJ51z+BCcvS2R8BciSWpwo3fQJnFVDDmN137WjUEMLIrZkuTvlOUUko9AiBPNeu3ng5LYNFDAfSoopdsytVQ/Y+gas0rX+nr3iT7+X/Lz/9w5dkfXvJkndu1uyxIsx/hdM7Ozr3scsM7yn7wLlCAVjnmCZAT95rPsOG3m33PN+9H9l/lt9kPtOQe5+zsArAQN82z2LPDP4U+AJi0HCgB6LbCz5ZrjqNx01CUO9SfWek3UJnVMZCd45utzXRDDQHzSSfG7prb9L88Op2zsx6A9rRtevarki9q2dcfCuBY3iezb7Ap/8+v9VNSSUl5xQnPkg/+WPbzoWrNhxeWXklvyE2Guo2m/VPwdQ2MKfdPYSqsEk/thvgDM2CzlZmGju6bLw/S7Edqeyl2AndGPaN7TQlngP4dMdm3ORSqwtrexacRvAsUmFWOqdwHHUmlNuj4PHpzG8yoWWxHS00ZvX47yXkoPul7NyQ8hObtLN5J3r0G1KdH5wyA3VqfmHgV+CUztuis1usbm2P3DsDdjLXZj323GLcO7ozdctu4LUWFhs0aY37T2K2Xkhv0C1N5McknPMacDTuBDfe0e7z7BGeJZf0pD55Ks7loKuiW324Fd/X6hEOz2I4eNm2551tEd3n8praYfuzWcwnpnQ+3xR72QEarb8UCwTSpfdC5A36pBTKPA3x7sroEoLoKrt2A6fC7TESMwX9NLmOAqifQFmq8MntmeeBUQ8DNVKA2Fw7shsebjL9GbmrPboY+Sye30sZbtezrDwWwvvvTa7/ZlKun+pDy0SuqH8jsLy99Z4uDeuvAtC3HyD5PooELnzlmD+4F28ZLTxacboI8+3z9DWd3eDja4HwYfRen+ceZW3HjXHpHr/aDd4EClP3JtT1kNRyx4d7V6bwUNe3N/pb254esfjtp38FJR3aNkf3FOyl9Z4sD4OkXg5PfbgV7XOPk5ahJZuNqJ+9keXv9yHz/+T+tnsfmDudP5hnjFv3HuYSG+S5Tr34bhXUYY/7T2GOru536hfI900NFI+hzGtmPre526vsk/1vnaMYFbic6JitagzL7tZ8NPt17FFuaffJy1LixiLVpvSM1Ef3Y45omz1psg73xN7zZ11YsIML087zKWu0D6z+BX5JmvS3O9B7OMBXeyc9JgCes3xgA4Ha470hwBm/2Kw8AnWaoqYDObfrlc3vJboaRLx7jmUHLvvFQwKNkavcu3pSrqfqvfK0PIX7//aHsV330QZX2an/Zt3TTW4Dkdlgw9S7OfvJDmFLPsB3RjlGD+Wz/FDw3N8QNeccKTnN5BzDBO8t+8C5QgLJPde6tVLf2DPOYu7zZPwIjofPGTnoaMQs9sb/Jvr6T0lt8E/ZHgj0NSGyn+VPgjLfX33wPTFByAthz3rhF//HKTuAfh/XbKKzDGPOfxp6G78L+4wDGnEb200DfJ45oF9xM5cesoFx+uxUSO+DFHLbvgD21xiJuuA3uqH7saeAOfwiHK73Z11YsEF6svZRkOTIHpGmnST2h/eDZepXqEmDC4tGKnTBP4xYA0z1jAIC8fYteJKkh4OA/gMfK+/XgVm6ZKbkemIgfJts429eybzwUgO04jqgXSzbln6f6b579NR0dHxYUfPzxy97STW8FV6gDsP60KPsu9U1paWl4J7by4M5+hFM7d7yq6oDB4qy0mBqOFXsvS/YDlX2n+e+3OGKD9r0ZaeEPvdkvB6d6buyku0mAU40vyr6xk9L1l9E/7NySEu6NGdYbVBdhHMpnXQFgayNQcci4Rf/x+KbS0sNbc/TbKKzDGPOfxm7Fd+FO9Benh3xz+g55QN8nd2JKS0vzw93jCRnHHgRl9ufUU2/zyr2/C20R3WEDQEy/93dj6oYTh7VDHu+KBcLUrmszvSkV4EjSzmkSzwNXtuFtcaP2z3s6YrvQs99uDACc2ji5NPsHvNn3fmHo3PMfZ1tUK5ScZGn2jYcCPOv6vPvEf1P+qaofmOzn5//tpW/pprfCnHIA1quLsj+nGu12u30i6LOvH/LQGPYdkPy9k4M1VEr2A5x9LmyDIzYGI+7Mk+TL/qxf9u94s/+MhAe+7Bs7Sc9+U8KA2+GX/ZP7fb3+zNvzrEagonRJ9o/tstvt9k79NgrrMMb8p/EmXbvA9A+5Ub8Yczbk+GVf2yd3Eux2u93uZr7lYNTF4M9+ib6IC6GDftmP64aTgc++95mUAvVlADg2ngCcCT1aiwuuA3DXdBv8D3m8A8DphGGWZr/yINAZ5zdeVEp3onNp9n0PBXQqpZTKXbQpV4eQFVb/zbN/4cM1Vb/7lm6rdsjjNvVSZoNh/ZBn/QNgjFWT/VFze9wjnqkpKKyhIRsYkewHMPvzfXDExtXNQPzy2XdEzEFPDGyyw2X9kEffSXr2S7+DJ37Zb8oETmmHPNXACMUngbzzS7LflAOMe/TbKKzDGPOfxm7Fd2Ee2FdjzHk9HUjUsq/tE0f0HLxw4lmA+pygPORJuA8LY9jKgLwzxiKubwN35FvO/hTwQwbktgH8mlAH0KUiIyPDwiJdC3EzAC3mDoBnEePQHesyBvCUbxplmey3bALqvtRew08DhTbOhEZGRoaG71iUfeOhAMpKnU5nT/iU/6ZcNdlfUfXfPPtev/OWbitwMXPYWfE5XLH0j55QbgajgXOZQ9Mnc7Tsu10uW5HL5QnGQx6Xy+Wahy+/p37LwnzUubnbm2twmhud9ywD/PsdZT94Fyhg2Qc4YuNhWNfMecvy2aegZHospxqKP5/s+2o7i3eSnv2ajaOOYxG+7DtN/5q5r70X22X+z8zFlIU+8wPXdfP0kuzPrbs0172hU7+N/XUYY/7T2K34LnxZPTOach19zuHwm1NN0Vr29X2SVzLl2F3DmT1PXxQd5sVXD4Iu+2eyHOPFxdhSW2eao8aMRTy1pX/0dPjbzf6Aqflpy4Y65kxzQG98g8vlcnkvVZdARzZAk6XL5XItQOEex0BWhd9ASea4y+Vy01Po/TdS867nqt81z3xC9WSHuRXOHIPG1PaRi59obw1nN4Mj91dwuW6uc7ncxkMBbvN9gLQG/025SrIfEpLCO87+S97SbQU8Z5NNRVPgLo3JvKHcuLdGXsRzOtmyf0LL/h2llFLqSRAGSft2rYa0eTwZp2hZby7rSrjF4x0x22/CYFJk37v4NIJ3gQKdfY7HJf/4Q8zMstl3lpgTT7phfOfa3AvbWbyT9Oy/yFub8ehAlq9M//00pqhW+wecLWmxX/XDnYzo7X0syT4DOTFZTb7brsfG+8b8prFbwbjgyLOYKzzGnFyyJF/WD3n0ffLioDml0s1cWXJs3iTjlqtBl313VdK6Yie2o2WmtLu+RVywmVPb3vYhT1t61IZaD625AHVKKaWifdkvPwuwWyml1FcwV2xJKnf7DUQrpZSq45ryPhWzlFJKFcLwFzGbG4Gvc4GzSVFW/bvSspuh13wfl/dZdck/++3xboDqnasv+691GrT4gz+W/Y9f67t0hRDBST9z/X84XL/scOqvK/vlIyme9/qPLiRkpd9+G6DsT+S/1nfpCiEk+7/V8Gy50fnaFf7y6m7541uZv+pfG/76RtmHl72lK4SQ7ItVSf7Hy0IIIdkXQggh2RdCCCHZF0IIIdkXQggh2RdCCCHZF0IIIdkXQggh2RdCCCHZF0IIIdkXQggh2RdCCCHZF0IIyb4QQgjJvhBCiD9b9vuEEEK8F7TsCyGEeG9I9oUQQrIvhBBCsi+EEEKyL4QQYnX5H8CLXpf6f/1oAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA4LTI1VDIwOjExOjExKzAwOjAwIPeEXwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wOC0yNVQyMDoxMTowMiswMDowMKzoJuAAAAAASUVORK5CYII="},2144:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/router1-e90774a196528fff7799bb2d8c484e90.png"},2788:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/runs-on-425a8b7112b3093b69a2b65508d39aa3.png"},5640:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/search-a397dc51238c5b4a07d430cd26e7bce8.png"},9968:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tag-group-ac0e90fb791f576984bb3368815decc9.png"},7643:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tag-select-272e08e21b9859184c05e330b2549680.png"},7077:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tag-template-b13a9985ea8927c3d76a8410b105b604.png"},9394:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tagbased-333f98b32b209271fd4212ad68f545ea.png"},4906:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tagrouter-bf9f7c0c2cb997d3a1b61e63b6cb718c.png"},5543:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/token-groups-d5122804d71d7e0900ce3ebb476dc81d.png"},1399:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/token-start-5aeca96d9dcd1f237180eda41aad8fd3.png"}}]);