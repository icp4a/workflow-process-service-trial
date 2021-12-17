# Troubleshooting IBM Workflow Process Service Trial


## How to enable tracing

   To enable tracing, update the trace settings in <local workspace>/config/liberty-custom.xml after the server starts.  You don't need to restart the server. Changes will take effect after about one minute.

## Ports are not available

You might get the following error message when starting the "pc" container:

```
ERROR: for pc  Cannot start service pc: Ports are not available: listen tcp 0.0.0.0:9443: bind: Only one usage of each socket address (protocol/network address/port) is normally permitted.
```

This message means that the host port is already in use.

Edit the `docker-compose.yml` file and choose another host port. For example, set the host port to 7443 as in this example:

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

 After you make the update, use `docker-compose down` to stop and delete the environment and then use  `docker-compose up` to start the environment again.

## Container exits with code 137 or OutOfMemoryError

You might get an OutOfMemoryError (OOM error) during server startup, or you might get the following message when enabling Process Federation Server:

```
exited with code 137
```

This OOM error and the message indicate that a container suddenly exited, probably because the Docker engine didn't have the available resources to run the workload. 

If the only running Docker containers on your Docker engine are the ones running the Workflow Process Service Trial image and the one running Elasticsearch, you must ensure that you have at least:
- CPUs: 2
- Memory: 4.00 GB
- Swap: 1GB

If your Docker engine relies on a VM backend (Docker Desktop for Mac and Docker Desktop for Windows with Hyper-V backend), you can increase these values from the Settings -> Resources page of the Docker Desktop front-end user interface. 

If the Docker engine doesn't rely on a VM backend (Docker on Linux and Docker Desktop for Windows with WSL 2 backend), you must provide more resources to your Docker host to meet the requirements.

## Java Virtual Machine (JVM) crashes with a segmentation error

The embedded Java Runtime Environment (JRE) from the Workflow Process Service image might cause Java Virtual Machine (JVM) to crash with a segmentation error, usually after tracing is enabled. When JVM crashes, you see the following segmentation error message in the system error stream:

```
Type=Segmentation error vmState=0x00000000
J9Generic_Signal_Number=00000018 Signal_Number=0000000b Error_Value=00000000 Signal_Code=00000080
Handler1=00007FF6E4FD8470 Handler2=00007FF6E48AD1F0 InaccessibleAddress=0000000000000000
RDI=00007FF6441C5070 RSI=0000000000000000 RAX=D704122B2A002CB5 RBX=000000000109FF00
RCX=00000000426F8790 RDX=0000000000000000 R8=0000000000000000 R9=0000000000000000
R10=FFFFFFFFFFFFFFFF R11=0000000000000000 R12=00007FF6441C5070 R13=00007FF6E52D1800
R14=D70492216E1C7D3D R15=00007FF65FFFC9D0
RIP=00007FF6E5083D53 GS=0000 FS=0000 RSP=00007FF65FFFC600
EFlags=0000000000010202 CS=0033 RBP=00000000000001B8 ERR=0000000000000000
TRAPNO=000000000000000D OLDMASK=0000000000000000 CR2=0000000000000000

```

To minimize the chance of a JVM crash, add the JVM parameter `-Xshareclasses:none` when you start the container to disable the shared classes cache. Edit the `docker-compose.yml` file to add `JVM_ARGS='-Xshareclasses:none'` under the environment section. For example:

```
environment:
      - LICENSE=accept
      - EXTERNAL_HOSTNAME=localhost
      - EXTERNAL_HTTPS_PORT=9443
      # PFS properties
      - PFS_ENABLE=false
      - JVM_ARGS='-Xshareclasses:none'
```

***Note***: This problem was fixed in 21.0.2 IF002.

## Can't access Workplace or Business Automation Studio using Chrome on Mac

If you can't access Workplace or Business Automation Studio from the Chrome browser on Mac, try another browser.


You can also define a hostname and IP mapping entry in /etc/hosts, like the following:
```
 <your_IP_address> wps-internal-ums-host
```
And then use the hostname wps-internal-ums-host to access Workplace or Business Automation Studio.

## Login failures during Docker Compose startup

During Docker Compose startup, you might see some login failures in the Docker logs. These login failures are harmless and you can ignore them. They happen because the event manager keeps checking the login status and waits for the client registration before it starts. 

