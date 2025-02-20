
**Containerization Overview**
Containerization is the process of packaging and running applications in isolated environments (containers). Key Technologies: Docker, Docker Compose, Linux Containers (LXC).
- **Benefits**:
    - Lightweight, secure, and portable.
    - Enables scalability and efficient resource management.
- **Container Security**:
    - Provides isolation, reducing risk to host systems.
    - Though secure, container privilege escalation methods exist.

**Docker**
Docker is an open-source platform for automating the deployment of applications as containers, using a layered filesystem and resource isolation for portability. The Docker engine and pre-made images or can also be created by the user. 

```bash
# Preparation
sudo apt install ca-certificates curl gnupg lsb-release -y
sudo mkdir -m 0755 -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y

# Add user htb-student to the Docker group
sudo usermod -aG docker htb-student
echo '[!] You need to log out & log back in for the group changes to take effect.'
docker run hello-world
```

If you want a custom docker with some basic installations, then we can create a `Dockerfile` which will follow the same installation rules as the installation.
- `docker ps`: List running containers.
- `docker stop <container_id>`: Stop a container.
- `docker start <container_id>`: Start a container.
- `docker restart <container_id>`: Restart a container.
- `docker rm <container_id>`: Remove a container
- `docker rmi <container_id>`: Remove a Docker image.
- `docker logs <container_id>`: View container logs.

```bash
# Use the latest Ubuntu 22.04 LTS as the base image
FROM ubuntu:22.04

# Update the package repository and install the required packages
RUN apt-get update && \
    apt-get install -y \
        apache2 \
        openssh-server \
        && \
    rm -rf /var/lib/apt/lists/*

# Create a new user called "docker-user"
RUN useradd -m docker-user && \
    echo "docker-user:password" | chpasswd

# Give the docker-user user full access to the Apache and SSH services
RUN chown -R docker-user:docker-user /var/www/html && \
    chown -R docker-user:docker-user /var/run/apache2 && \
    chown -R docker-user:docker-user /var/log/apache2 && \
    chown -R docker-user:docker-user /var/lock/apache2 && \
    usermod -aG sudo docker-user && \
    echo "docker-user ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

# Expose the required ports
EXPOSE 22 80

# Start the SSH and Apache services
CMD service ssh start && /usr/sbin/apache2ctl -D FOREGROUND
```

 **Linux Containers (LXC)**
LXC is a lightweight virtualization technology using Linux kernel features for isolated environments. The main differences are that LXC required manual image building, less portable, while docker simplifies container management and improves portability.

```shell-session
0xCrvngr@htb[/htb]$ sudo apt-get install lxc lxc-utils -y
0xCrvngr@htb[/htb]$ sudo lxc-create -n linuxcontainer -t ubuntu
```

- `lxc-ls`: List containers.
- `lxc-stop/start/restart -n <container>`: Start, stop, restart container
- `lxc-config -n <container name> -s storage/network/security`: Manage container storage, network settings and security settings
- `lxc-attach -n <container>`: Connect to the container

 **LXC Security & Configuration**

- **Resource Limits**: Use `cgroups` for limiting CPU and memory in `/usr/share/lxc/config/<container_name>.conf`.

```txt
lxc.cgroup.cpu.shares = 512
lxc.cgroup.memory.limit_in_bytes = 512M
```

- **Namespace Isolation**: LXC uses namespaces for process IDs, network interfaces, and file systems to isolate containers from the host.