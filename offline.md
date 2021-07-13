# Offline Installation

If you want to install offline, you must first find a computer that can access the Internet to pull the Workflow Process Service Trial image from the IBM Cloud Registry. Then, retag the image as the following and upload the Docker image to your local Docker Registry:

```
<local registry>/workflow-ps-trial:21.0.2
```

Before you start the environment, update the related `docker-compose.yml` file. In the `pc/image` section, update the Docker registry to your local registry.