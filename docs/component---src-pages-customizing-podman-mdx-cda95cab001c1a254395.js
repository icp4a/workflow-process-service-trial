"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[93],{539:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return m}});var a=n(3366),r=(n(7294),n(4983)),o=n(4295),l=["components"],i={},s={_frontmatter:i},p=o.Z;function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)(p,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Table of contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#customizing-the-hostname-and-port"},"Customizing the hostname and port")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#changing-the-admin-password"},"Changing the admin password")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#persisting-your-data"},"Persisting your data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#customizing-the-user-registry"},"Customizing the user registry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enabling-full-text-search-and-dashboard-support"},"Enabling full text search and dashboard support")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cleaning-up-the-environment"},"Cleaning up the environment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overriding-the-liberty-default-configuration"},"Overriding the Liberty default configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#integrating-with-external-services"},"Integrating with external services")," ")),(0,r.kt)("h2",null,"Customizing the hostname and port"),(0,r.kt)("p",null,"If you want to access Workplace or Studio from a web browser that’s not running on the Podman host, edit the  ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL_HOSTNAME")," environment variable to the actual IP or hostname of your Podman host. "),(0,r.kt)("p",null,"You can also customize the external port used to expose the Workflow Process Service APIs. If you want to change the external port, you can’t use localhost as the ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL_HOSTNAME"),". To change the external port, take both of these two actions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL_HTTPS_PORT")," environment variable in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file to the port number of your choice.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change the host port declared in the ",(0,r.kt)("inlineCode",{parentName:"p"},"services.pc.ports")," section to make it match the ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL_HTTPS_PORT")," environment variable value. "),(0,r.kt)("p",{parentName:"li"}," For example, to set the host port to 7443:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'[...]\n  pc:\n    [...]\n    ports:\n      - "7443:9443"\n    [...]\n    environment:\n    [...]\n      - EXTERNAL_HTTPS_PORT=7443\n[...]\n')),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL_HTTPS_PORT")," is the first number under ",(0,r.kt)("inlineCode",{parentName:"p"},"ports")," in the docker-compose.yml file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'ports:\n      - "7443:9443"\n')))),(0,r.kt)("p",null,"After updating ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL_HOSTNAME")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL_HTTPS_PORT")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file, if you already had an existing environment, follow these steps for the change to take effect:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run the  ",(0,r.kt)("inlineCode",{parentName:"li"},"podman-compose down")," command to stop and delete the environment."),(0,r.kt)("li",{parentName:"ol"},"If you are using persistent data, delete the ",(0,r.kt)("inlineCode",{parentName:"li"},"tls")," folder in your workspace and ",(0,r.kt)("inlineCode",{parentName:"li"},"tls")," folder under data/generated/ in your workspace."),(0,r.kt)("li",{parentName:"ol"},"Run the  ",(0,r.kt)("inlineCode",{parentName:"li"},"podman-compose up")," command to start the environment. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": The container will use the same DNS server as the host computer, but the hostname and IP mappings in the /etc/hosts file won’t be passed to the container automatically. If the hostname of your host machine is not added to the DNS server, you can configure the container to use the hostname and IP mappings by adding information similar to the following information in the docker-compose.yml file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#############################################################################################################\n# The "pc" container is running the Workflow Process Service (authoring trial) image\n#############################################################################################################\npc:\n  ...\n\n  extra_hosts:\n    - <hostname>:<host_ipaddress>\n')),(0,r.kt)("p",null,"If you are on Windows, you also need to set up port forwarding on your machine to access the service on the default distribution on your Windows Subsystem for Linux (WSL 2).  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command in the WSL 2 terminal to get your WSL 2 IP address:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"ifconfig eth0|head -n2|grep inet|awk '{print$2}'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your Windows terminal, run the following command, replacing the values ",(0,r.kt)("inlineCode",{parentName:"p"},"your_listening_port"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"your_connecting_port"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"WSL2_IP_address"),".  "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"netsh interface portproxy add v4tov4 listenport=<your_listening_port> listenaddress=0.0.0.0 connectport=<your_connecting_port> connectaddress=<WSL2_IP_address>\n")),(0,r.kt)("p",{parentName:"li"},"For example, the command might look similar to:  "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"netsh interface portproxy add v4tov4 listenport=7443 listenaddress=0.0.0.0 connectport=7443  connectaddress=172.25.221.48\n")))),(0,r.kt)("h2",null,"Changing the admin password"),(0,r.kt)("p",null,"If you don’t want to use the default admin password for the Podman image, add the following line under the ",(0,r.kt)("inlineCode",{parentName:"p"},"environment")," section in the ",(0,r.kt)("inlineCode",{parentName:"p"},"podman-compose yml")," file before you start the environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    - ADMIN_PASSWORD=<your_password>\n")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<your_password>")," with your new password. "),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Note"),":  You can’t change the admin username. "),(0,r.kt)("h3",null,"Updating the admin password after starting"),(0,r.kt)("p",null,"To update the admin password, you must restart the container because the Liberty server environment is not refreshed dynamically."),(0,r.kt)("p",null,"If you have an existing environment and you updated the ",(0,r.kt)("inlineCode",{parentName:"p"},"ADMIN_PASSWORD")," variable in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file, complete the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run the ",(0,r.kt)("inlineCode",{parentName:"li"},"podman-compose down")," command to stop and delete the environment."),(0,r.kt)("li",{parentName:"ol"},"If you enabled persistence, find the ",(0,r.kt)("inlineCode",{parentName:"li"},"server.env")," file under the env/ folder and delete the whole line that starts with ",(0,r.kt)("inlineCode",{parentName:"li"},"ADMIN_PASSWORD"),"."),(0,r.kt)("li",{parentName:"ol"},"Run the  ",(0,r.kt)("inlineCode",{parentName:"li"},"podman-compose up")," command to start the environment.")),(0,r.kt)("h2",null,"Persisting your data"),(0,r.kt)("p",null,"If you want to save the data and the process when you delete the container instance, and reuse it when you run another container instance, you can persist the data. Copy the contents of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/icp4a/workflow-process-service-trial/blob/main/persistence/basic/docker-compose.yml"},"docker-compose.yml")," file with persistence to your local computer."),(0,r.kt)("h4",null,"For Linux only"),(0,r.kt)("p",null,"If you’re running Linux and using Podman as your container engine, make sure the folder has read-write permission from the container. The container user ID is 50001 and it belongs to the root group, so to change the folder’s permissions, run:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown 50001:0 <current_sample_folder>\n")))),(0,r.kt)("h4",null,"For Windows only"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file device value to be the absolute path of the folder with the Podman Compose file. For example, if the absolute path is ",(0,r.kt)("inlineCode",{parentName:"p"},"c:\\ibm_desktop"),":  "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'volumes:\n    pc_data: driver:\n    local driver_opts:\n    type: none\n    o: bind\n    device: "/mnt/c/ibm_desktop"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Turn on Windows Subsystem for Linux (WSL) metadata support for your Window drive. Run the following command in WSL:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -e /etc/wsl.conf\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the following configuration:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{{[automount]\noptions = "metadata"}}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart your WSL by opening a PowerShell or Command Prompt as an administrator and running the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wsl --shutdown\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start your WSL by opening your Linux distribution from the start menu.  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure that your container has has read-write permissions for your folder. The container user ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"50001")," and it belongs to the root group. To change the folder’s permissions, run the following command in your WSL, replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"your_folder"),":  "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown 50001:0 <your_folder>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start your Podman machine by running the following:  "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman machine start\n")))),(0,r.kt)("h4",null,"For all platforms"),(0,r.kt)("p",null,"  Run the following command:    "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd <sample_folder_you_created>\npodman-compose up\n")),(0,r.kt)("h4",null,"Check the volumes"),(0,r.kt)("p",null,"When the Workflow Process Service Trial environment runs, data is persisted into Podman volumes that are automatically created by Podman Compose:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"pc_data")," volume persists the data and logs of the Liberty server running Workflow Process Service"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"postgres_data")," volume persists the PostgreSQL data")),(0,r.kt)("p",null,"There are different data volumes based on the Podman Compose setting. To list the volumes, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman volume ls\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": You can retrieve the actual location of the volume on your Podman host file system by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman volume inspect <folder_name>_pc_data\n")),(0,r.kt)("h4",null,"Accessing the container runtime data and configuration"),(0,r.kt)("p",null,"When persistence is enabled, the container runtime data and configuration are written to the host computer, in the folder where Podman Compose was started. This location is called ",(0,r.kt)("inlineCode",{parentName:"p"},"<local_workspace>")," in the following example."),(0,r.kt)("p",null,"The structure looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<local_workspace>\n     |--cert-trusted\n     |--tls\n         |--key.p12\n         |--trusts.p12\n     |--config\n         |--liberty-custom.xml\n         |--workflow-custom.xml\n         |--custom-registry.xml\n     |--env\n         |--server.env\n     |--data\n          |--messaging\n          |--index\n     |--output\n          |--logs    \n          |--dump\n")),(0,r.kt)("h2",null,"Customizing the user registry"),(0,r.kt)("p",null,"Workflow Process Service Authoring has predefined users and groups. You can update the users and groups if you have persistence enabled. The custom registry is under ",(0,r.kt)("inlineCode",{parentName:"p"},"<local_workspace>"),":\n",(0,r.kt)("inlineCode",{parentName:"p"},"<local_workspace>/config/custom-registry.xml")),(0,r.kt)("p",null,"Usernames and groups are listed in this file. If you update this file and don’t restart the container, the changes are applied to the server runtime in about one minute."),(0,r.kt)("p",null,"Make sure to use all-lowercase names for groups. Groups available in the registry are not immediately replicated to the product database. In order to use newly created groups, you can restart the environment or sign in as a user who is member of that group."),(0,r.kt)("h2",null,"Enabling full text search and dashboard support"),(0,r.kt)("p",null,"To access full text search, advanced filtering functions, and the Teams dashboard in Workplace, you must activate the IBM Process Federation Server (PFS) runtime, which requires Elasticsearch. The ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file will deploy an additional Podman container running Elasticsearch."),(0,r.kt)("p",null,"Find the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file here: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"No persistence"),(0,r.kt)("th",{parentName:"tr",align:null},"Persistence enabled"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"PFS enabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/icp4a/workflow-process-service-trial/blob/main/PFS/docker-compose.yml"},"PFS/docker-compose.yml")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/icp4a/workflow-process-service-trial/blob/main/persistence/PFS/docker-compose.yml"},"persistence/PFS/docker-compose.yml"))))),(0,r.kt)("p",null,"Copy the contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file under the ",(0,r.kt)("inlineCode",{parentName:"p"},"PFS/")," folder or ",(0,r.kt)("inlineCode",{parentName:"p"},"persistence/PFS")," folder into a new file named ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," in the folder that you created."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Workflow Process Service Trial with the optional Process Federation Server enabled:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd <your_pfs_yml_folder>/\npodman-compose up\n")))),(0,r.kt)("p",null,"If you already have an existing environment and you want to enable full text search and dashboard support:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update your existing ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file, and add the ",(0,r.kt)("inlineCode",{parentName:"p"},"elasticsearch")," service from the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file above to your existing file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the following environment variables in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pc")," service of your ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file:  "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"      - PFS_ENABLE=true\n      - PFS_REMOTEELASTICSEARCH_ENDPOINTS=http://elasticsearch:9200\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If persistence is enabled, declare the ",(0,r.kt)("inlineCode",{parentName:"p"},"elasticsearch_data")," volume in the ",(0,r.kt)("inlineCode",{parentName:"p"},"volumes")," section."))),(0,r.kt)("p",null,"When Process Federation Server is enabled and persistence is also enabled, the Elasticsearch data will be persisted in a volume named ",(0,r.kt)("inlineCode",{parentName:"p"},"elasticsearch_data"),"."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Note"),": Running Elasticsearch in addition to the Workflow Process Service container might cause resource issues. See ",(0,r.kt)("a",{parentName:"p",href:"/workflow-process-service-trial/troubleshooting-podman#container-exits-with-code-137-or-outofmemoryerror"},"Container exits with code 137"),"."),(0,r.kt)("h2",null,"Cleaning up the environment"),(0,r.kt)("p",null,"To clean up the environment:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"podman-compose down")," command to stop and delete the environment.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you persisted the data, delete all the volumes created by Workflow Process Service Trial. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"podman volume ls")," to check the status of the volumes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To delete the volumes, run: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman volume prune\n")))),(0,r.kt)("p",null,"Alternatively, you can delete them one at a time."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When Process Federation Server is not enabled:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman volume rm <basic_folder_name>_pc_data\npodman volume rm <basic_folder_name>_postgres_data\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When Process Federation Server is enabled:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman volume rm <pfs_folder_name>_pc_data\npodman volume rm <pfs_folder_name>_postgres_data\npodman volume rm <pfs_folder_name>_elasticsearch_data\n")))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"If you persisted the data, delete all the folders under your local workspace: ",(0,r.kt)("inlineCode",{parentName:"li"},"config"),",",(0,r.kt)("inlineCode",{parentName:"li"},"output"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"env"),",",(0,r.kt)("inlineCode",{parentName:"li"},"tls"),",",(0,r.kt)("inlineCode",{parentName:"li"},"cert-trusted")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"data"),".  ")),(0,r.kt)("h2",null,"Overriding the Liberty default configuration"),(0,r.kt)("p",null,"To override the Liberty default configuration, you can provide your own Liberty configuration dropins. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/was-liberty/base?topic=files-using-configuration-dropins-folder-specify-server-configuration"},"Using the configuration dropins folder to specify server configuration"),". Overriding is done by mounting configuration dropins in the form of XML files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/config/configDropins/overrides")," folder. The ",(0,r.kt)("inlineCode",{parentName:"p"},"logging.xml")," file is an example of a mounted file in ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),". If you want to persist your data, edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"liberty-custom.xml")," file under the ",(0,r.kt)("inlineCode",{parentName:"p"},"./config")," folder."),(0,r.kt)("h2",null,"Integrating with external services"),(0,r.kt)("p",null,"To integrate Workflow Process Service with an external service, you must exchange your TLS certificate with the external service. The certificates for Workflow Process Service must have either the ",(0,r.kt)("inlineCode",{parentName:"p"},".pem")," file format and a PEM encoded X509v3 certificate, or the ",(0,r.kt)("inlineCode",{parentName:"p"},".crt")," file format."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the certificate of an external service."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Get the signer certificate that is used to sign into your external service and save it to a certificate. For more information, see ",(0,r.kt)("a",{parentName:"li",href:"https://www.openssl.org/"},"OpenSSL"),". The following example commands use a certificate that is named ",(0,r.kt)("inlineCode",{parentName:"li"},"external-service-cert.crt.")," The next example command gets the certificate chain of cloud.ibm.com by using OpenSSL:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo | openssl s_client -showcerts -connect cloud.ibm.com:443 | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > external-service-cert.crt\n")),(0,r.kt)("p",{parentName:"li"},"The following example command gets the certificate chain of ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud.ibm.com")," by using keytool:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"keytool -printcert -sslserver cloud.ibm.com:443 -rfc > external-service-cert.crt\n")),(0,r.kt)("ol",{parentName:"li",start:2},(0,r.kt)("li",{parentName:"ol"},"Add the certificate to the trust list ",(0,r.kt)("inlineCode",{parentName:"li"},"cert-trusted/")," by running the following command. The server must be running before you run this command.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman cp ./external-service-cert.crt pc:/shared/custom/cert-trusted\n")),(0,r.kt)("ol",{parentName:"li",start:3},(0,r.kt)("li",{parentName:"ol"},"Stop and restart your environment by running the following commands:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman-compose stop\npodman-compose start\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To export the root CA key and import it into the truststore of an external service, run the following command. The server must be running before you run this command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"podman cp pc:/shared/custom/tls/ca_crt.pem .\n")))))}m.isMDXComponent=!0},4295:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(7294),r=n(8650),o=n.n(r),l=n(5444),i=n(5426),s=n(4311),p=n(5900),m=n.n(p),d=function(e){var t,n=e.title,r=e.theme,o=e.tabs,l=void 0===o?[]:o;return a.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=l.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},n)))))},c=function(e){var t=e.relativePagePath,n=e.repository,r=(0,l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=n||r,i=o.baseUrl,s=o.subDirectory,p=i+"/edit/"+o.branch+s+"/src/pages"+t;return i?a.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"bx--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},u=n(4275),h=n(1721),k=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,r=e.slug,i=r.split("/").filter(Boolean).slice(-1)[0],s=n.map((function(e){var t,n=o()(e,{lower:!0,strict:!0}),s=n===i,p=new RegExp(i+"/?(#.*)?$"),d=r.replace(p,n);return a.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},a.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},a.createElement("nav",{"aria-label":t},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(a.Component),N=k,f=n(2881),g=n(6958),y=n(36),v=function(e){var t=e.date,n=new Date(t);return t?a.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(y.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},b=function(e){var t=e.pageContext,n=e.children,r=e.location,p=e.Title,m=t.frontmatter,h=void 0===m?{}:m,k=t.relativePagePath,y=t.titleType,b=h.tabs,w=h.title,C=h.theme,P=h.description,_=h.keywords,T=h.date,E=(0,g.Z)().interiorTheme,x=(0,l.useStaticQuery)("2456312558").site.pathPrefix,S=x?r.pathname.replace(x,""):r.pathname,I=b?S.split("/").filter(Boolean).slice(-1)[0]||o()(b[0],{lower:!0}):"",L=C||E;return a.createElement(s.Z,{tabs:b,homepage:!1,theme:L,pageTitle:w,pageDescription:P,pageKeywords:_,titleType:y},a.createElement(d,{title:p?a.createElement(p,null):w,label:"label",tabs:b,theme:L}),b&&a.createElement(N,{title:w,slug:S,tabs:b,currentTab:I}),a.createElement(f.Z,{padded:!0},n,a.createElement(c,{relativePagePath:k}),a.createElement(v,{date:T})),a.createElement(u.Z,{pageContext:t,location:r,slug:S,tabs:b,currentTab:I}),a.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-customizing-podman-mdx-cda95cab001c1a254395.js.map