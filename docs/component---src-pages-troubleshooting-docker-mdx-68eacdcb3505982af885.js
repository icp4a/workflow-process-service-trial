"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[92],{7751:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return m}});var n=a(3366),r=(a(7294),a(4983)),o=a(4295),i=["components"],l={},s={_frontmatter:l},c=o.Z;function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Table of contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enabling-tracing"},"Enabling tracing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ports-are-not-available"},"Ports are not available")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#container-exits-with-code-137-or-outofmemoryerror"},"Container exits with code 137 or OutOfMemoryError")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#can't-access-workplace-or-business-automation-studio-using-chrome-on-mac"},"Can’t access Workplace or Business Automation Studio using Chrome on Mac")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#out-of-memory-error-using-docker-desktop"},"Out of memory error using Docker Desktop")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#login-failures-during-docker-compose-startup"},"Login failures during Docker Compose startup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#java-virtual-machine-(jvm)-crashes-with-a-segmentation-error"},"Java Virtual Machine (JVM) crashes with a segmentation error"))),(0,r.kt)("h2",null,"Enabling tracing"),(0,r.kt)("p",null,"To enable tracing, update the trace settings in ",(0,r.kt)("inlineCode",{parentName:"p"},"<local workspace>/config/liberty-custom.xml")," after the server starts.  You don’t need to restart the server. Changes will take effect after about one minute."),(0,r.kt)("h2",null,"Ports are not available"),(0,r.kt)("p",null,"You might get the following error message when starting the “pc” container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ERROR: for pc  Cannot start service pc: Ports are not available: listen tcp 0.0.0.0:9443: bind: Only one usage of each socket address (protocol/network address/port) is normally permitted.\n")),(0,r.kt)("p",null,"This message means that the host port is already in use."),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file and choose another host port. For example, set the host port to 7443 as in this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[...]\n  pc:\n    [...]    \n    ports:\n      - "7443:9443"\n    [...] \n    environment:\n    [...] \n      - EXTERNAL_HTTPS_PORT=7443\n[...]\n')),(0,r.kt)("p",null," After you make the update, use ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose down")," to stop and delete the environment and then use  ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up")," to start the environment again."),(0,r.kt)("h2",null,"Container exits with code 137 or OutOfMemoryError"),(0,r.kt)("p",null,"You might get an OutOfMemoryError (OOM error) during server startup, or you might get the following message when enabling Process Federation Server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"exited with code 137\n")),(0,r.kt)("p",null,"This OOM error and the message indicates that a container suddenly exited, probably because the Docker engine didn’t have the available resources to run the workload. "),(0,r.kt)("p",null,"If the only running Docker containers on your Docker engine are the ones running the Workflow Process Service Trial image and the one running Elasticsearch, you must ensure that you have at least:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CPUs: 2"),(0,r.kt)("li",{parentName:"ul"},"Memory: 4.00 GB"),(0,r.kt)("li",{parentName:"ul"},"Swap: 1GB")),(0,r.kt)("p",null,"If your Docker engine relies on a VM backend (Docker Desktop for Mac and Docker Desktop for Windows with Hyper-V backend), you can increase these values from the Settings -> Resources page of the Docker Desktop front-end user interface. "),(0,r.kt)("p",null,"If the Docker engine doesn’t rely on a VM backend (Docker on Linux and Docker Desktop for Windows with WSL 2 backend), you must provide more resources to your Docker host to meet the requirements."),(0,r.kt)("h2",null,"Can’t access Workplace or Business Automation Studio using Chrome on Mac"),(0,r.kt)("p",null,"If you can’t access Workplace or Business Automation Studio from the Chrome browser on Mac, try another browser. Alternatively, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the lock icon to the left of the URL."),(0,r.kt)("li",{parentName:"ol"},"In the box that pops up, click ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Certificate is not valid")),"."),(0,r.kt)("li",{parentName:"ol"},"Another box pops up showing information about the certificate. Drag the large certificate icon to a Finder window. A ",(0,r.kt)("inlineCode",{parentName:"li"},"cer")," file is created in the location you drag it to."),(0,r.kt)("li",{parentName:"ol"},"Open the Keychain Access app on your Mac."),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Certificates"))," tab and drag your ",(0,r.kt)("inlineCode",{parentName:"li"},"cer")," file onto the Keychain Access app."),(0,r.kt)("li",{parentName:"ol"},"Double-click your Workflow Process Service certificate and expand the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Trust"))," section. Under the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"When using this certificate"))," section, set the value to ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Always Trust")),".\nClose the dialog box and use your Mac password to save your settings.")),(0,r.kt)("h2",null,"Out of memory error using Docker Desktop"),(0,r.kt)("p",null,"If you are using Docker Desktop version 4.3.0 or later, you might get an out of memory error when you start the server. This error occurs because Docker Desktop uses ",(0,r.kt)("inlineCode",{parentName:"p"},"cgroupv2"),", and JVM providers haven’t caught up with this change yet and can no longer calculate heap size based on the memory limit that is configured for the container. For more information about Open J9 JVM container awareness, see ",(0,r.kt)("a",{parentName:"p",href:"https://www.eclipse.org/openj9/docs/xxusecontainersupport/"},"UseContainerSupport"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," This issue is not limited to Docker Desktop. It also occurs if you install Docker on Linux and enable ",(0,r.kt)("inlineCode",{parentName:"p"},"cgroupv2")," on the Linux host."),(0,r.kt)("p",null,"As a workaround, add the following variable under the environment section in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'IBM_JAVA_OPTIONS="-Xmx1563M"\n')),(0,r.kt)("p",null,"Because the maximum heap size is typically 75% of the memory limit for the container, the 1563M number is calculated based on the default 2G memory limit. You can change it to reflect your settings in ",(0,r.kt)("inlineCode",{parentName:"p"}," .services.*.deploy.resources.limits.memory")),(0,r.kt)("h2",null,"Login failures during Docker Compose startup"),(0,r.kt)("p",null,"During Docker Compose startup, you might see some login failures in the Docker logs. These login failures are harmless and you can ignore them. They happen because the event manager keeps checking the login status and waits for the client registration before it starts. "),(0,r.kt)("h2",null,"Java Virtual Machine (JVM) crashes with a segmentation error"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," This problem was fixed in 21.0.2 IF002."),(0,r.kt)("p",null,"The embedded Java Runtime Environment (JRE) from the Workflow Process Service image might cause Java Virtual Machine (JVM) to crash with a segmentation error, usually after tracing is enabled. When JVM crashes, you see the following segmentation error message in the system error stream:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Type=Segmentation error vmState=0x00000000\nJ9Generic_Signal_Number=00000018 Signal_Number=0000000b Error_Value=00000000 Signal_Code=00000080\nHandler1=00007FF6E4FD8470 Handler2=00007FF6E48AD1F0 InaccessibleAddress=0000000000000000\nRDI=00007FF6441C5070 RSI=0000000000000000 RAX=D704122B2A002CB5 RBX=000000000109FF00\nRCX=00000000426F8790 RDX=0000000000000000 R8=0000000000000000 R9=0000000000000000\nR10=FFFFFFFFFFFFFFFF R11=0000000000000000 R12=00007FF6441C5070 R13=00007FF6E52D1800\nR14=D70492216E1C7D3D R15=00007FF65FFFC9D0\nRIP=00007FF6E5083D53 GS=0000 FS=0000 RSP=00007FF65FFFC600\nEFlags=0000000000010202 CS=0033 RBP=00000000000001B8 ERR=0000000000000000\nTRAPNO=000000000000000D OLDMASK=0000000000000000 CR2=0000000000000000\n\n")),(0,r.kt)("p",null,"To minimize the chance of a JVM crash, add the JVM parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"-Xshareclasses:none")," when you start the container to disable the shared classes cache. Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file to add ",(0,r.kt)("inlineCode",{parentName:"p"},"JVM_ARGS='-Xshareclasses:none'")," under the environment section. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"environment:\n      - LICENSE=accept\n      - EXTERNAL_HOSTNAME=localhost\n      - EXTERNAL_HTTPS_PORT=9443\n      # PFS properties\n      - PFS_ENABLE=false\n      - JVM_ARGS='-Xshareclasses:none'\n")))}m.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),r=a(8650),o=a.n(r),i=a(5444),l=a(5426),s=a(4311),c=a(5900),m=a.n(c),u=function(e){var t,a=e.title,r=e.theme,o=e.tabs,i=void 0===o?[]:o;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||r,l=o.baseUrl,s=o.subDirectory,c=l+"/edit/"+o.branch+s+"/src/pages"+t;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},h=a(4275),d=a(1721),k=function(e){function t(){return e.apply(this,arguments)||this}return(0,d.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,l=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),s=a===l,c=new RegExp(l+"/?(#.*)?$"),u=r.replace(c,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+u},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),g=k,f=a(2881),N=a(6958),b=a(36),y=function(e){var t=e.date,a=new Date(t);return t?n.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(b.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},v=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,m=t.frontmatter,d=void 0===m?{}:m,k=t.relativePagePath,b=t.titleType,v=d.tabs,E=d.title,w=d.theme,F=d.description,D=d.keywords,C=d.date,x=(0,N.Z)().interiorTheme,T=(0,i.useStaticQuery)("2456312558").site.pathPrefix,P=T?r.pathname.replace(T,""):r.pathname,R=v?P.split("/").filter(Boolean).slice(-1)[0]||o()(v[0],{lower:!0}):"",M=w||x;return n.createElement(s.Z,{tabs:v,homepage:!1,theme:M,pageTitle:E,pageDescription:F,pageKeywords:D,titleType:b},n.createElement(u,{title:c?n.createElement(c,null):E,label:"label",tabs:v,theme:M}),v&&n.createElement(g,{title:E,slug:P,tabs:v,currentTab:R}),n.createElement(f.Z,{padded:!0},a,n.createElement(p,{relativePagePath:k}),n.createElement(y,{date:C})),n.createElement(h.Z,{pageContext:t,location:r,slug:P,tabs:v,currentTab:R}),n.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-troubleshooting-docker-mdx-68eacdcb3505982af885.js.map