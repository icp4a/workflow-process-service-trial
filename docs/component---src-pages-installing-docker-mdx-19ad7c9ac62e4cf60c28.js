"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[136],{4970:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return p}});var a=n(3366),o=(n(7294),n(4983)),r=n(4295),i=["components"],l={},s={_frontmatter:l},m=r.Z;function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"IBM Workflow Process Service Trial includes an authoring and runtime environment for a single workflow process."),(0,o.kt)("h2",null,"Table of contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installing-and-setting-up-your-environment"},"Installing and setting up your environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#starting-your-environment"},"Starting your environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#verifying-the-installation"},"Verifying the installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#getting-started"},"Getting started")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#stopping-and-restarting-the-environment"},"Stopping and restarting the environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#customizing"},"Customizing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#troubleshooting"},"Troubleshooting"))),(0,o.kt)("h2",null,"Prerequisites"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Container Runtime"),(0,o.kt)("th",{parentName:"tr",align:null},"Version"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Docker"),(0,o.kt)("td",{parentName:"tr",align:null},"19.03 or later")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Docker Compose"),(0,o.kt)("td",{parentName:"tr",align:null},"2.3.3 or later")))),(0,o.kt)("p",null,"If you follow the official documentation for installing Docker Compose, Docker Compose version 2.3.3 is installed, and you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose")," command or the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose")," command. For more information about the new ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose")," command, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/#compose-v2-and-the-new-docker-compose-command"},"Overview of Docker Compose"),"."),(0,o.kt)("p",null," You can also use Docker Compose version 1.27.3 or later, but for those versions, you can only use the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose")," command. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Docker Compose version 1 is deprecated. For more information about Docker Compose deprecations, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file/compose-versioning/#version-1-deprecated"},"Compose file versions and upgrading"),"."),(0,o.kt)("p",null,"The following command outputs show the latest version of Workflow process Service Trial that was tested. If you are using a version of Docker that is newer than our tested versions and you encounter issues, roll back your version to the last tested version."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For Linux"),":  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Docker version:  "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"[root@testwfps]# docker version\nClient: Docker Engine - Community\nVersion: 24.0.1\nAPI version: 1.43\nGo version: go1.20.4\nGit commit: 6802122\nBuilt: Fri May 19 18:04:11 2023\nOS/Arch: linux/amd64\nContext: default\n\nServer: Docker Engine - Community\nEngine:\nVersion: 24.0.1\nAPI version: 1.43 (minimum version 1.12)\nGo version: go1.20.4\nGit commit: 463850e\nBuilt: Fri May 19 18:03:12 2023\nOS/Arch: linux/amd64\nExperimental: false\ncontainerd:\nVersion: 1.6.21\nGitCommit: 3dce8eb055cbb6872793272b4f20ed16117344f8\nrunc:\nVersion: 1.1.7\nGitCommit: v1.1.7-0-g860f061\ndocker-init:\nVersion: 0.19.0\nGitCommit: de40ad0\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Docker Compose version: "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"[root@testwfps]# docker compose version\nDocker Compose version v2.18.1\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For Windows"),":  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Docker version:  "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"c:\\>docker version\nClient:\nCloud integration: v1.0.31\nVersion: 23.0.5\nAPI version: 1.42\nGo version: go1.19.8\nGit commit: bc4487a\nBuilt: Wed Apr 26 16:20:14 2023\nOS/Arch: windows/amd64\nContext: default\n\nServer: Docker Desktop 4.19.0 (106363)\nEngine:\nVersion: 23.0.5\nAPI version: 1.42 (minimum version 1.12)\nGo version: go1.19.8\nGit commit: 94d3ad6\nBuilt: Wed Apr 26 16:17:45 2023\nOS/Arch: linux/amd64\nExperimental: false\ncontainerd:\nVersion: 1.6.20\nGitCommit: 2806fc1057397dbaeefbea0e4e17bddfbd388f38\nrunc:\nVersion: 1.1.5\nGitCommit: v1.1.5-0-gf19387a\ndocker-init:\nVersion: 0.19.0\nGitCommit: de40ad0\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Docker Compose version:  "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"c:\\>docker-compose version\nDocker Compose version v2.17.3\n")))),(0,o.kt)("h3",null,"Minimum hardware requirements"),(0,o.kt)("p",null,"To install IBM Workflow Process Service Trial on Docker, you need the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CPU: 0.5 GHz"),(0,o.kt)("li",{parentName:"ul"},"Memory: 4 GB minimum"),(0,o.kt)("li",{parentName:"ul"},"Disk: 5 GB minimum")),(0,o.kt)("h2",null,"Installing and setting up your environment"),(0,o.kt)("p",null,"To install offline, see ",(0,o.kt)("a",{parentName:"p",href:"/workflow-process-service-trial/offline"},"Offline Installation"),". If you created process applications in an earlier version, see ",(0,o.kt)("a",{parentName:"p",href:"/workflow-process-service-trial/migrating"},"Migrating to a new version"),"."),(0,o.kt)("p",null,"To install and prepare your Docker environment, complete the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Depending on your operating system, install Docker."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For Ubuntu, see ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu"},"Install Docker Engine on Ubuntu")," and ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Overview of installing Docker Compose")),(0,o.kt)("li",{parentName:"ul"},"For Red Hat, see ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/centos"},"Install Docker Engine on CentOS")," and ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install"},"Overview of installing Docker Compose")),(0,o.kt)("li",{parentName:"ul"},"For SUSE Linux, see ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/binaries/"},"Install Docker Engine from binaries")," and ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install"},"Overview of installing Docker Compose")),(0,o.kt)("li",{parentName:"ul"},"For macOS, see ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/docker-for-mac/install"},"Install Docker Desktop on Mac"),". then change the default resource limitation (where memory is limited to 2 GB) for the Docker Desktop. Go to Docker -> Preferences -> Resources and ensure that you have at least 2 CPUs, 3.00 GB memory, and 1 GB swap."),(0,o.kt)("li",{parentName:"ul"},"For Windows, see ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/docker-for-windows/install"},"Install Docker Desktop on Windows"),". If you are using Hyper-V, increase the Hyper-V memory to 3 GB. If you are using WSL, make sure you have at least 3 GB free memory."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you don’t have an IBM Cloud account, register by completing the steps in ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/registration"},"Create an IBM Cloud account"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an API key for accessing the IBM Cloud Container Registry by completing the instructions in ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/account?topic=account-userapikey#create_user_key"},"Creating an API key"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the API key to log in to the IBM Cloud Container Registry by running the following Docker command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker login -u iamapikey -p <apikey> icr.io\n")),(0,o.kt)("p",{parentName:"li"},"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"<apikey>")," is your API key."))),(0,o.kt)("h2",null,"Starting your environment"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a folder on your local computer, where you will run Docker Compose.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the new folder, create a new file named ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),". Copy the contents of the sample ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/icp4a/workflow-process-service-trial/blob/main/docker-compose.yml"},"docker-compose.yml")," file into the new file on your local computer and save it.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Optional: By default, the Workflow Process Service Trial environment uses localhost. If you want to access IBM Workplace or IBM Business Automation Studio from a web browser that is not running on the Docker host, complete the steps in ",(0,o.kt)("a",{parentName:"p",href:"/workflow-process-service-trial/customizing-docker#customizing-the-hostname-and-port"},"Customizing the hostname"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start your environment, by running one of the following commands. Don’t interrupt this command when it is running. You can either run the command in the background, or run it interactively."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are on macOS or want your environment to run in the background:  "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd <folder_you_created>\ndocker-compose up -d\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you want your environment to run interactively:  "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd <folder_you_created>\ndocker-compose up\n")))))),(0,o.kt)("h2",null,"Verifying the installation"),(0,o.kt)("p",null,"After you run the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up")," command, you can monitor the output. The command pulls the trial image from the registry and then starts Workflow Process Service. "),(0,o.kt)("p",null,"The server needs time to initialize. It is ready when you see messages such as:"),(0,o.kt)("p",null,"   ",(0,o.kt)("inlineCode",{parentName:"p"},"The system maintenance monitor is determining if maintenance is required. The system is in an OK state. ")),(0,o.kt)("p",null,"To see the logs, run the following command. The default value for the container name is ",(0,o.kt)("inlineCode",{parentName:"p"},"pc"),". If you changed the ",(0,o.kt)("inlineCode",{parentName:"p"},"container_name")," property in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file before you started the environment, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"pc")," with the container name you defined."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs pc -f\n")),(0,o.kt)("h2",null,"Getting started"),(0,o.kt)("p",null,"To get the URLs that you can access and the admin username and password, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec pc /scripts/post-deployment.sh\n")),(0,o.kt)("p",null,"Keep a copy of the admin password. To align with the IBM security policy, the password is generated for you. The default username is ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),". "),(0,o.kt)("p",null,"Follow the links in the output of the command to access Workplace and Business Automation Studio. The default URLs are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Workplace: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://localhost:9443/Workplace")),(0,o.kt)("li",{parentName:"ul"},"Studio: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://localhost:9443/BAStudio")),(0,o.kt)("li",{parentName:"ul"},"Process Admin Console: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://localhost:9443/ProcessAdmin"))),(0,o.kt)("p",null,"The embedded database provided by Workflow Process Service Trial does not support data encryption. Do not store sensitive data."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," To use Chrome on Mac, see ",(0,o.kt)("inlineCode",{parentName:"p"},"Can't access Workplace or Business Automation Studio using Chrome on Mac")," in ",(0,o.kt)("a",{parentName:"p",href:"/workflow-process-service-trial/troubleshooting-docker#can't-access-workplace-or-business-automation-studio-using-chrome-on-mac"},"Troubleshooting"),"."),(0,o.kt)("h3",null,"Predefined hiring sample process"),(0,o.kt)("p",null,"There is a predefined process instance running in the Workflow Process Service Trial container. To see the predefined process instance, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<EXTERNAL_HOSTNAME>:<EXTERNAL_HTTPS_PORT>/Workplace")," and check the process instance status. The process instance is marked as “overdue”."),(0,o.kt)("h3",null,"Predefined users and groups"),(0,o.kt)("p",null,"By default, the server is configured with the following predefined users and groups:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    Group "employee", members:  employee1\n                                employee2\n                                employee3\n     Group "manager", members:  manager1  \n                                manager2\n                                manager3\n')),(0,o.kt)("p",null,"The passwords for these users are randomly generated. "),(0,o.kt)("h2",null,"Stopping and restarting the environment"),(0,o.kt)("p",null,"To stop the environment, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose stop\n")),(0,o.kt)("p",null,"To start the environment, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose start\n")),(0,o.kt)("p",null,"To restart the environment, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose restart\n")),(0,o.kt)("h2",null,"Customizing"),(0,o.kt)("p",null,"To customize the Workflow Process Server Trial, such as persisting data and adding full text search, see ",(0,o.kt)("a",{parentName:"p",href:"/workflow-process-service-trial/customizing-docker"},"Customizing"),". "),(0,o.kt)("h2",null,"Troubleshooting"),(0,o.kt)("p",null,"For issues while installing, see ",(0,o.kt)("a",{parentName:"p",href:"/workflow-process-service-trial/troubleshooting-docker"},"Troubleshooting"),"."))}p.isMDXComponent=!0},4295:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(7294),o=n(8650),r=n.n(o),i=n(5444),l=n(5426),s=n(4311),m=n(5900),p=n.n(m),c=function(e){var t,n=e.title,o=e.theme,r=e.tabs,i=void 0===r?[]:r;return a.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===o,t))},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},n)))))},u=function(e){var t=e.relativePagePath,n=e.repository,o=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||o,l=r.baseUrl,s=r.subDirectory,m=l+"/edit/"+r.branch+s+"/src/pages"+t;return l?a.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"bx--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},d=n(4275),k=n(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,k.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,o=e.slug,l=o.split("/").filter(Boolean).slice(-1)[0],s=n.map((function(e){var t,n=r()(e,{lower:!0,strict:!0}),s=n===l,m=new RegExp(l+"/?(#.*)?$"),c=o.replace(m,n);return a.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},a.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},a.createElement("nav",{"aria-label":t},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(a.Component),g=h,f=n(2881),N=n(6958),v=n(36),y=function(e){var t=e.date,n=new Date(t);return t?a.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(v.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},b=function(e){var t=e.pageContext,n=e.children,o=e.location,m=e.Title,p=t.frontmatter,k=void 0===p?{}:p,h=t.relativePagePath,v=t.titleType,b=k.tabs,w=k.title,C=k.theme,T=k.description,E=k.keywords,D=k.date,P=(0,N.Z)().interiorTheme,I=(0,i.useStaticQuery)("2456312558").site.pathPrefix,S=I?o.pathname.replace(I,""):o.pathname,B=b?S.split("/").filter(Boolean).slice(-1)[0]||r()(b[0],{lower:!0}):"",x=C||P;return a.createElement(s.Z,{tabs:b,homepage:!1,theme:x,pageTitle:w,pageDescription:T,pageKeywords:E,titleType:v},a.createElement(c,{title:m?a.createElement(m,null):w,label:"label",tabs:b,theme:x}),b&&a.createElement(g,{title:w,slug:S,tabs:b,currentTab:B}),a.createElement(f.Z,{padded:!0},n,a.createElement(u,{relativePagePath:h}),a.createElement(y,{date:D})),a.createElement(d.Z,{pageContext:t,location:o,slug:S,tabs:b,currentTab:B}),a.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-installing-docker-mdx-19ad7c9ac62e4cf60c28.js.map