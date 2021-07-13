# Customizing Workflow Process Service

## Customizing the hostname and port

If you want to access Workplace or Studio from a web browser that's not running on the Docker host, edit the  `docker-compose.yml` file to set the `EXTERNAL_HOSTNAME` environment variable to the actual IP or hostname of your Docker host. 

You can also customize the external port used to expose the Workflow Process Service APIs. If you want to change the external port, you can't use localhost as the `EXTERNAL_HOSTNAME`. To change the external port, take both of these two actions:

   1. Set the `EXTERNAL_HTTPS_PORT` environment variable in the `docker-compose.yml` file to the port number of your choice.
   2. Change the host port declared in the `services.pc.ports` section to make it match the `EXTERNAL_HTTPS_PORT` environment variable value. 
   
   For example, to set the host port to 7443:

```
 
[...]
  pc:
    [...]
    ports:
      - "7443:9443"
    [...]
    environment:
    [...]
      - EXTERNAL_HTTPS_PORT=7443
[...]
```

The `EXTERNAL_HTTPS_PORT` is the first number under `ports` in the docker-compose.yml file:

```
ports:
      - "7443:9443"
```

After updating `EXTERNAL_HOSTNAME` or `EXTERNAL_HTTPS_PORT` in the `docker-compose.yml` file, if you already had an existing environment, follow these steps for the change to take effect:

1. Run the  `docker-compose down` command to stop and delete the environment.
2. If you are using persistent data, delete the `tls` folder in your workspace and `tls` folder under data/generated/ in your workspace.
3. Run the  `docker-compose up` command to start the environment. 

_Note: The container will use the same DNS server as the host computer, but the hostname and IP mappings in the /etc/hosts file won't be passed to the container automatically. If the hostname of your host machine is not added to the DNS server, you can configure the container to use the hostname and IP mappings by adding information similar to the following information in the docker-compose.yml file:_

  ```
  #############################################################################################################
  # The "pc" container is running the Workflow Process Service (authoring trial) image
  #############################################################################################################
  pc:
    ...

    extra_hosts:
      - <hostname>:<host_ipaddress>
  ```

## Customizing the admin password

If you don't want to use the default admin password for the Docker image, add the following line under the `environment` section in the `docker-compose yml` file before you start the environment:

```    
    - ADMIN_PASSWORD=mypassword
```

Replace `mypassword` with your new password. 

 _Note:  You can't change the admin username._ 

#### Updating the admin password after starting

To update the admin password, you must restart the container because the Liberty server environment is not refreshed dynamically.

If you have an existing environment and you updated the `ADMIN_PASSWORD` variable in the `docker-compose.yml` file, complete the following steps:

1. Run the `docker-compose down` command to stop and delete the environment.
2. If you enabled persistence, find the `server.env` file under the env/ folder and delete the whole line that starts with `ADMIN_PASSWORD`.
3. Run the  `docker-compose up` command to start the environment.

## Persisting the data

If you want to save the data and the process when you delete the container instance, and reuse it when you run another container instance, you can persist the data. Copy the contents of the [docker-compose.yml](./persistence/basic/docker-compose.yml) file with persistence to your local computer.

#### For Linux only

If you're running Linux and using Docker as your container engine, make sure the folder has read-write permission from the container. The container user ID is 50001 and it belongs to the root group, so to change the folder's permissions, run:

```
sudo chown 50001:0 <current sample folder>
```

 _Note:  Don't run this command on Mac. It's only needed for Linux._

#### For all platforms

Run the following command:

```bash
cd <sample folder you created>
docker-compose up
```

#### Check the volumes

When the Workflow Process Service Trial environment runs, data is persisted into Docker volumes that are automatically created by Docker Compose:
- the `pc_data` volume persists the data and logs of the Liberty server running Workflow Process Service
- the `postgres_data` volume persists the PostgreSQL data

There are different data volumes based on the Docker Compose setting. To list the volumes, run:

```bash
docker volume ls
```

**_Hint_**_: You can retrieve the actual location of the volume on your Docker host file system by running:_

```bash
docker volume inspect <folder_name>_pc_data
```

#### Accessing the container runtime data and configuration 

When persistence is enabled, the container runtime data and configuration are written to the host computer, in the folder where Docker Compose was started. This location is called `<local workspace>` in the following example.

The structure looks like this:

```
<local workspace>
     |--cert-trusted
     |--tls
         |--key.p12
         |--trusts.p12
     |--config
         |--liberty-custom.xml
         |--workflow-custom.xml
         |--custom-registry.xml
     |--env
         |--server.env
     |--data
          |--messaging
          |--index
     |--output
          |--logs    
          |--dump
```

## Customizing the user registry

Workflow Process Service Authoring has predefined users and groups. You can update the users and groups if you have persistence enabled. The custom registry is under `<local workspace>`:
       `<local workspace>/config/custom-registry.xml`

Usernames and groups are listed in this file. If you update this file and don't restart the container, the changes are applied to the server runtime in about one minute.

Make sure to use all-lowercase names for groups. Groups available in the registry are not immediately replicated to the product database. In order to use newly created groups, you can restart the environment or sign in as a user who is member of that group.

## Enabling full text search and dashboard support

To access full text search, advanced filtering functions, and the Teams dashboard in Workplace, you must activate the IBM Process Federation Server (PFS) runtime, which requires Elasticsearch. The `docker-compose.yml` file will deploy an additional Docker container running Elasticsearch.

Find the `docker-compose.yml` file here: 

  |    | No persistence | Persistence enabled |
|---|---|---|
| **PFS enabled** | [PFS/docker-compose.yml](PFS/docker-compose.yml) | [persistence/PFS/docker-compose.yml](persistence/PFS/docker-compose.yml)

Copy the contents of the `docker-compose.yml` file under the `PFS/` folder or `persistence/PFS` folder into a new file named `docker-compose.yml` in the folder that you created.

- Workflow Process Service Trial (**with optional Process Federation Server enabled**):
```bash
cd <your_pfs_yml_folder>/
docker-compose up
```

If you already have an existing environment and you want to enable full text search and dashboard support:
1. Update your existing `docker-compose.yml` file, and add the `elasticsearch` service from the `docker-compose.yml` file above to your existing file.
2. Set the following environment variables in the `pc` service of your `docker-compose.yml` file:
``` 
      - PFS_ENABLE=true
      - PFS_REMOTEELASTICSEARCH_ENDPOINTS=http://elasticsearch:9200
```
3. If persistence is enabled, declare the `elasticsearch_data` volume in the `volumes` section.

When Process Federation Server is enabled and persistence is also enabled, the Elasticsearch data will be persisted in a volume named `elasticsearch_data`.

 _Note: Running Elasticsearch in addition to the Workflow Process Service container might cause resource issues. See [Container exits with code 137](./troubleshooting.md#Container-exits-with-code-137)._


## Cleaning up the environment

To clean up the environment:
1. Run the `docker-compose down` command to stop and delete the environment.
2. If you persisted the data, delete all the volumes created by Workflow Process Service Trial. Use `docker volume ls` to check the status of the volumes.
3. To delete the volumes, run: 

```bash
docker volume prune
```

Alternatively, you can delete them one at a time.

- When Process Federation Server is not enabled:

```bash
docker volume rm <basic_folder_name>_pc_data
docker volume rm <basic_folder_name>_postgres_data
```

- When Process Federation Server is enabled:

```bash
docker volume rm <pfs_folder_name>_pc_data
docker volume rm <pfs_folder_name>_postgres_data
docker volume rm <pfs_folder_name>_elasticsearch_data
```

4. If you persisted the data, delete all the folders under your local workspace: `config`,`output`, `env`,`tls`,`cert-trusted` and `data`.

## Other customization

For other customization, such as integrating with an external service or overriding the Liberty configuration, see [Customizing Workflow Process Service](https://www.ibm.com/docs/SSYHZ8_21.0.x/com.ibm.dba.install/op_topics/tsk_inst_wps_cust.html).