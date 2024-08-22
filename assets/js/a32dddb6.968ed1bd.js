"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[8585],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),h=o,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4013:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));const i={title:"5. Storage, HA and FIPS Considerations",description:"Describes Storage and High Availability Considerations",sidebar_position:5},r=void 0,s={unversionedId:"cloud-pak-aiops/netcool-lab/storage-ha/index",id:"cloud-pak-aiops/netcool-lab/storage-ha/index",title:"5. Storage, HA and FIPS Considerations",description:"Describes Storage and High Availability Considerations",source:"@site/labs/cloud-pak-aiops/netcool-lab/5-storage-ha/index.mdx",sourceDirName:"cloud-pak-aiops/netcool-lab/5-storage-ha",slug:"/cloud-pak-aiops/netcool-lab/storage-ha/",permalink:"/techxchange2024/labs/cloud-pak-aiops/netcool-lab/storage-ha/",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"5. Storage, HA and FIPS Considerations",description:"Describes Storage and High Availability Considerations",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. Custom Sizing Tool",permalink:"/techxchange2024/labs/cloud-pak-aiops/netcool-lab/sizing-tool/"},next:{title:"1. Introduction",permalink:"/techxchange2024/labs/cloud-pak-aiops/topology-lab/introduction/"}},l={},d=[{value:"5.1: Storage Considerations",id:"51-storage-considerations",level:2},{value:"Recommended Storage Providers",id:"recommended-storage-providers",level:3},{value:"5.2: High Availability Considerations",id:"52-high-availability-considerations",level:2},{value:"Background",id:"background",level:3},{value:"Failure Domains",id:"failure-domains",level:4},{value:"Single-Zone Deployment",id:"single-zone-deployment",level:3},{value:"Multi-Zone Deployment",id:"multi-zone-deployment",level:3},{value:"5.3: FIPS Considerations",id:"53-fips-considerations",level:2},{value:"Encryption with FIPS Support Enabled",id:"encryption-with-fips-support-enabled",level:3},{value:"Enabling FIPS Support",id:"enabling-fips-support",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"51-storage-considerations"},"5.1: Storage Considerations"),(0,o.kt)("p",null,"The Cloud Pak for AIOps requires persistent storage classes that support the RWO (read-write-once) and RWX (read-write-many) access modes.\nAlso, storage classes must have allowVolumeExpansion enabled. This allows persistent volumes to be expanded if necessary, to avoid\nstorage from filling up and causing unrecoverable failures. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you require your Cloud Pak for AIOps environment to support the Federal Information Processing Standards (FIPS), there are storage\nrelated requirements as described later in this section.")),(0,o.kt)("h3",{id:"recommended-storage-providers"},"Recommended Storage Providers"),(0,o.kt)("p",null,"The following table shows the tested and supported storage providers that are recommended for a deployment of the Cloud\nPak for AIOps. Note that these storage providers are the only providers that have been tested and validated for a deployment\nthe product. You can choose to use an alternate storage provider but they must meet the same storage and hardware requirements\nas the recommended storage providers. For instance, your chosen provider must support the required access modes and storage modes."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(37).Z,width:"2192",height:"600"})),(0,o.kt)("p",null,"Additional storage information is available in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/4.1.0?topic=planning-storage-requirements"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("em",{parentName:"strong"},"public documentation"))),"."),(0,o.kt)("h2",{id:"52-high-availability-considerations"},"5.2: High Availability Considerations"),(0,o.kt)("h3",{id:"background"},"Background"),(0,o.kt)("p",null,"As the Cloud Pak for AIOps is used to monitor a client's high value work loads, its important to deploy the solution in a way that\nminimizes potential downtime of the product itself. This brings us two related capabilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"High-availability (HA) methods assume that an application remains available even when failures occur and is often\nimplemented through replicated services, replicated data and automatic load balancing that directs requests to\nhealthy services. Recovery time is near zero and no data is lost in the recovery process.\nHA requires that two or more (depending on the storage technology) replicas of stateless services and\nstateful sets to be present.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Disaster Recovery (DR) methods usually assume the total loss of a data center therefore the focus is on recovering the\napplication back to an active state. This inherently introduces a non-zero recovery time, and often recovery point\n(in the asynchronous case), in failing over to the secondary site."))),(0,o.kt)("p",null,"These two capabilities typically work in tandem as a variety of techniques are available. The technique chosen will likely\ninvolve a combination/trade-off between cost, availability, and the amount of time or data that can be lost should\nrecovery be necessary."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Disaster Recovery (DR) methods are outside the scope of this Lab but additional information can be found in\nthe ",(0,o.kt)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/4.1.0?topic=pak-backing-up-restoring-cloud-watson-aiops"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("em",{parentName:"strong"},"public documentation")))))),(0,o.kt)("h4",{id:"failure-domains"},"Failure Domains"),(0,o.kt)("p",null,"A failure domain defines the context of a failure in terms of the components of a system/application that are affected. The\ndomain describes which capabilities are not available when a component or systems experience a failure."),(0,o.kt)("p",null,"Example ",(0,o.kt)("strong",{parentName:"p"},"failure domains")," for OpenShift applications are listed below. Each failure domain has implications on the availability of an application."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"An individual pod"),(0,o.kt)("li",{parentName:"ol"},"An OpenShift cluster node (master or worker)"),(0,o.kt)("li",{parentName:"ol"},"An availability zone (a zone can be represented by a data center or an autonomous section inside a data center)"),(0,o.kt)("li",{parentName:"ol"},"A geographical region (e.g. a city or region that may contain multiple data centers or zones)")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"At the time of writing this Lab: "),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"only two deployment options are supported: single-zone and multi-zone deployments"),(0,o.kt)("li",{parentName:"ul"},"there is no support for geographical region failures"))),(0,o.kt)("h3",{id:"single-zone-deployment"},"Single-Zone Deployment"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2041).Z,width:"430",height:"408"})),(0,o.kt)("p",null,"OpenShift itself provides high availability for failure domains that include pods and, in some cases,\ncluster nodes within the same cluster though replicas and automated placement/movement. Stateful sets\ncan leverage cloud native storage and/or external storage (in other words, not local node storage) so that\npods can fail but the same storage can be accessed from another node to which the stateful set pods are moved in the cluster."),(0,o.kt)("p",null,"In practice, this means that most OpenShift components are HA by default. For example, there are multiple control\nplane nodes and related controllers. If one fails, the survivors handle the workload. The stateful ETCD database\nis replicated by default across the control plane."),(0,o.kt)("p",null,"In addition, OpenShift provides means for the workloads in the cluster to be HA without too many special considerations\nat the application level. For stateless components, this is accomplished by simple pod replication. If one pod\nfails, OpenShift simply routes the work to the surviving pods. Achieving HA in stateful components is more nuanced but\nit can be achieved via storage replication at a layer which is mostly independent of OpenShift itself. It can also be\nachieved by the stateful containers themselves based on the way they choose to persist the data. Specifically in Cloud Pak for\nAIOps, stateful components are typically limited to data stores, with the majority of service pods being stateless components. "),(0,o.kt)("p",null,"In summary, a single-zone deployment supports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"An individual pod failure (#1): Each pod the Cloud Pak for AIOps includes health check endpoints. When a pod reports it is not healthy, OpenShift will\nterminate it, and start a new instance.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"An Openshift cluster node failure (#2): When the Cloud Pak for AIOps is installed in Production/HA mode,\nmultiple replicas will be created for most pods (note that some pods run as singletons as the processing they do is\nnot time-critical). In addition, each stateless pod in the product includes proper anti-affinity labels,\nto ensure that multiple replicas are spread across nodes."))),(0,o.kt)("h3",{id:"multi-zone-deployment"},"Multi-Zone Deployment"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(990).Z,width:"632",height:"410"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'Note that Multi-Zone support is only available for ROSA (Red Hat OpenShift on AWS) and is considered a "Tech Preview" feature for v4.1')),(0,o.kt)("p",null,"A multi-zone cluster is similar to a single zone cluster, but its worker nodes spread across multiple availability zones.\nEach zone has isolated network, power etc, providing additional availability. This might mean multiple closely located\ndata centers, say in a cloud provider, or it could be as close as different server racks with isolated power/network etc."),(0,o.kt)("p",null,"These multiple zones ensure that common outages, such as network problems, power interruptions, etc do not affect the\nwhole cluster therefore applications remain available, unless there is a widespread disaster that impact all zones (#4)."),(0,o.kt)("p",null,"In summary, a multi-zone deployment adds support for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An availability zone failure (#3): As the pods have anti-affinity labels to be spread across nodes, in a multi-zone deployment\nOpenShift will automatically spread these instances across nodes in different zones.")),(0,o.kt)("h2",{id:"53-fips-considerations"},"5.3: FIPS Considerations"),(0,o.kt)("p",null,"The Federal Information Processing Standards (FIPS) are standards and guidelines that are issued by the National\nInstitute of Standards and Technology (NIST) for federal government computer systems. The standards are\ndeveloped when compelling federal government requirements for standards, such as for security and\ninteroperability, exist, but acceptable industry standards or solutions do not exist. Government\nagencies and financial institutions use these standards to ensure that products conform to specified\nsecurity requirements."),(0,o.kt)("h3",{id:"encryption-with-fips-support-enabled"},"Encryption with FIPS Support Enabled"),(0,o.kt)("p",null,"When FIPS support is enabled, the Cloud Pak for AIOps uses cryptographic modules that are compliant with\nLevel 1 of the Federal Information Processing Standard FIPS-140-2. Certificates that are used internally\nare encrypted by using FIPS-approved cryptography algorithms. FIPS-approved modules can optionally be used\nfor the transmission of data. Traffic inside the Cloud Pak for AIOps boundary is still secure, as traffic\nbetween nodes is automatically encrypted at the Red Hat OpenShift Container Platform level when TLS protection\nis enabled, while traffic inside a given node happens in-memory and does not leave the node. This is also valid\nfor the IBM Cloud Pak foundational services that are used by the Cloud Pak for AIOps."),(0,o.kt)("p",null,"With FIPS enabled, Data is FIPS encrypted at rest and also inbound communications are FIPS encrypted. Outbound\ncommunications can support both FIPS enabled and non-enabled connections. For FIPS enabled connections, outbound\nconnections rely on the server to ensure FIPS ciphers are chosen. To ensure that connections, including Observers,\nare FIPS enabled, an external service to mandate the use of FIPS compliant ciphers when negotiating encryption is required."),(0,o.kt)("h3",{id:"enabling-fips-support"},"Enabling FIPS Support"),(0,o.kt)("p",null,"To enable FIPS support you need to install the product on a Red Hat OpenShift Container Platform cluster that\nis already running in a FIPS enabled mode. You also need to complete some tasks before and while you are installing the product on your\ncluster."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"You can only enable FIPS support when you are installing the product. You cannot upgrade a non-FIPS enabled environment to a\nFIPS enabled environment. You cannot backup the Cloud Pak for AIOps from a non-FIPS enabled environment and\nrestore it into a FIPS enabled environment.")),(0,o.kt)("p",null,"To enable FIPS support, the following links describe the tasks required for the OpenShift cluster and Cloud Pak for AIOps installation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/4.1.0?topic=fips-enabling-support-cloud-pak-watson-aiops#preinstall"},"Installing Red Hat OpenShift Container Platform and storage tasks required for compliance")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/4.1.0?topic=fips-enabling-support-cloud-pak-watson-aiops#install_tasks"},"Installing Cloud Pak for AIOps tasks required for compliance")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/4.1.0?topic=fips-enabling-support-cloud-pak-watson-aiops#conditional"},"Conditional tasks required for compliance"))))}u.isMDXComponent=!0},990:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/multi-zone-c95f6f1f6ca74ce5e3a6dfcc208fe72d.png"},2041:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/single-zone-429b9701cdb70d33c5514244ba896bf1.png"},37:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/storageTable-bc8df4bc6cd39c1efbb32ba993c57717.png"}}]);