# Installing IBM Workflow Process Service Trial

IBM Workflow Process Service Trial includes an authoring and runtime environment for a single workflow process.

## Prerequisites

| Container Runtime | Version |
|---|---|
| Docker | 19.03 or later |
| Docker Compose | 1.27.3 or later |

### Minimum hardware requirements

| CPU | Memory | Disk |
|---|---|---|
| At least 0,5 CPU | At least 2 GB | At least 5 GB |

### Installing prerequisites

| Operating system | Instructions |
|---|---|
| Ubuntu | [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu), then [Install Docker Compose](https://docs.docker.com/compose/install) |
| Red Hat | [Install Docker Engine on CentOS](https://docs.docker.com/engine/install/centos), then [Install Docker Compose](https://docs.docker.com/compose/install)|
| SUSE Linux | [Install Docker Engine from binaries](https://docs.docker.com/engine/install/binaries/), then  [Install Docker Compose](https://docs.docker.com/compose/install)|
| Windows | [Install Docker Desktop on Windows](https://docs.docker.com/docker-for-windows/install) |
| Mac | [Install Docker Desktop on Mac](https://docs.docker.com/docker-for-mac/install) |

If you are running on Mac，change the default resource limitation (where memory is limited to 2 GB) for the Docker Desktop. Go to Docker -> Preferences -> Resources and ensure that you have at least:
- CPUs: 2
- Memory: 3.00 GB
- Swap: 1 GB

On any platform, first, [obtain an IBM Cloud account](https://cloud.ibm.com/registration) if you don't have one. Then, follow the [guide](https://cloud.ibm.com/docs/account?topic=account-userapikey#create_user_key) to create an API key to access the IBM Cloud Container Registry.
Use the API key to log in to the IBM Cloud Container Registry by running the following Docker command:

```
docker login -u iamapikey -p <apikey> icr.io
```
Replace `<apikey>` with your API key.

For offline installation, see [offline.md](./offline.md).

## Starting the Workflow Process Service Trial environment

1. Create a folder on your local computer, such as `sample/folder`, where you will run Docker Compose.

2. In the new folder, create a new file named `docker-compose.yml`. Copy the contents of the [docker-compose.yml](./docker-compose.yml) file into the new file on your local computer and save it.

3. Optional: By default, the Workflow Process Service Trial environment uses localhost. If you want to access IBM Workplace or Business Automation Studio from a web browser that's not running on the Docker host, go to [Customizing the hostname](customizing.md#Customizing-the-hostname-and-port).

4. Run `docker-compose up`. Don't interrupt this command when it's running. On Mac, add the `-d` parameter to keep it running in the background.

On Mac, run:

```bash
cd <sample folder you created>
docker-compose up -d
```

On other platforms, run:

```bash
cd <the folder you created>
docker-compose up
```

## Verifying the installation

After you run the `docker-compose up` command, you can monitor the output of the command. It pulls the Trial image from the registry and then starts Workflow Process Service. 

The server needs time to initialize. It's ready when you see messages such as:
 
   `The system maintenance monitor is determining if maintenance is required. The system is in an OK state. `

To see the logs, run:
   
```
docker logs pc -f
```

The default value for the container name is `pc`. If you change the container_name property in the `docker-compose.yml` file before you start the environment, replace pc with the actual container name you defined.

## Getting started 

To get the URLs that you can access, as well as the admin user name and password, run:


```
docker exec pc /scripts/post-deployment.sh
```

Keep a copy of the admin password. In keeping with IBM security policy, the password is generated for you. The default username is admin. 

Follow the links in the output of the command to access Workplace and Business Automation Studio. The default URLs are:
- Workplace: https://localhost:9443/Workplace
- Studio: https://localhost:9443/BAStudio
- Process Admin Console: https://localhost:9443/ProcessAdmin
 
*Note*: The embedded database provided by Workflow Process Service Trial doesn't support data encryption, so don't store any sensitive data.

### Predefined hiring sample process

There is a predefined process instance running in the Workflow Process Service Trial container. To see it, go to  `https://<EXTERNAL_HOSTNAME>:<EXTERNAL_HTTPS_PORT>/Workplace` and check the process instance status. The process instance will be "overdue."

### Predefined users and groups

The server is configured by default with the following predefined users and groups:

``` 
    Group "employee", members:  employee1
                                employee2
                                employee3
     Group "manager", members:  manager1  
                                manager2
			        manager3
```

The passwords for these users are randomly generated, they are the same with admin password. 

## Stopping and restarting the environment

To stop the environment, run:

```bash
docker-compose stop
```

To start the environment, run:

```bash
docker-compose start
```

To restart the environment, run:

```bash
docker-compose restart
```

## Customizing
To customize the Workflow Process Server Trial, including persisting data and adding full text search, see [Customizing](./customizing.md). 

## Troubleshooting
For any issues, see [Troubleshooting](./troubleshooting.md).
