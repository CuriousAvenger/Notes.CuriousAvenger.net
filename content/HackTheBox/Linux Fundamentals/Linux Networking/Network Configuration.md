A pentesters skill is the ability to configure and manage network settings. Valuable in setting up testing environment, controlling network traffic, and exploiting vulnerabilities. One of the primary network configuration includes assigning IP's, routers, switches and protocols like TCP/IP, DNS, DHCP, FTP etc. 

Different parts of network access control that are crucial:
- Discretionary access control (DAC)
- Mandatory access control (MAC)
- Role-based access control (RBAC)

**Configuring Network Interfaces**

Can use tools like `ifconfig` and `ip` commands. Obtain information regarding network interfaces like IP, netmasks and status using `ifconfig`, but the newer version is `ip`.

```shell
workstation@htb:~$ ifconfig
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
	inet 178.62.32.126  netmask 255.255.192.0  broadcast 178.62.63.255
	inet6 fe80::88d9:faff:fecf:797a  prefixlen 64  scopeid 0x20<link>
	ether 8a:d9:fa:cf:79:7a  txqueuelen 1000  (Ethernet)

workstation@htb:~$ ip
eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP
    inet 178.62.32.126/18 brd 178.62.63.255 scope global dynamic eth0
       valid_lft 85274sec preferred_lft 85274sec
    inet6 fe80::88d9:faff:fecf:797a/64 scope link 
       valid_lft forever preferred_lft forever

workstation@htb:~$ sudo ifconfig eth0 up <- Activate Network
workstation@htb:~$ sudo ip link set eth0 up
workstation@htb:~$ sudo ifconfig eth0 192.168.1.2 <- assign IP and netmask
workstation@htb:~$ sudo ifconfig etho netmask 255.255.255.0
workstation@htb:~$ sudo route add default gw 192.168.1.1 eth0 <- reroute
```


The configuration files for the DNS server information is saved in `/etc/resolv.conf`, and to edit the actual interfaces across reboots, the file `/etc/network/interfaces` can be updated accordingly, and use `systemctl` to enable or restart any changes.


**Network Access Control (NAC)**
NAC ensures only authorized and compliant devices access network, reducing risks of unauthorized access and data breaches.
1. **Discretionary Access Control (DAC)**
    - Resource owners control access permissions (e.g., read, write, execute).
    - Flexible but prone to user misconfiguration.
2. **Mandatory Access Control (MAC)**
    - Security labels define access rules based on levels.
    - Suitable for high-security environments like government systems.
3. **Role-Based Access Control (RBAC)**
    - Permissions assigned to users based on roles.
    - Simplifies management and enhances scalability.

Networking monitoring captures, analyzes and interpreters traffic to identity security threads and performance issues. Use `tcpdump`, `tshark`, `wireshark`

```shell
workstation@htb:~$ ping 8.8.8.8
workstation@htb:~$ traceroute <remote_host>
workstation@htb:~$ netstat -a

Proto Recv-Q Send-Q Local Address   Foreign Address   State
tcp   0      0 localhost:5901      0.0.0.0:*         LISTEN
tcp   0      0 0.0.0.0:ssh         0.0.0.0:*         LISTEN
```

Common Issues: connectivity, DNS resolution failures, packet loss, bottlenecks
Causes: misconfigured firewalls, outdated, network congestion, incorrect DNS

**Hardening Linux Systems**
All restrict resources access and mitigate unauthorized usage.
1. **SELinux**
	- Built-in MAC system providing fine-grained access control.
	- Complex to configure but highly secure.
2. **AppArmor**
	- Application-based MAC system using profiles.
	- Easier to configure than SELinux.
3. **TCP Wrappers**
	- Host-based access control based on IP addresses.
	- Intercepts incoming requests and checks access rules.

Differences is that
- SELinux offers kernel-level control
- AppArmor is profile based and easier to manage.
- TCP Wrapper focus on IP-based restrictions.