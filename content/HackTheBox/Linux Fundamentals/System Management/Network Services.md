
Need the ability to communicate with other computers over the network, connect, transfer files, analyze traffic, identify any vulnerabilities; learn how to configure such services during a penetration testing. Focus on key services essential for admins, users and pentesters.  

**SSH (Secure Shell)**

**Purpose**: Secure data and command transmission.  
**Key Tool**: OpenSSH (most common SSH server).
**Configuration**: Edit `/etc/ssh/sshd_config` to adjust login methods, connection limits, and host key settings.

```shell
workstation@htb[/htb]$ sudo apt install openssh-server -y
workstation@htb[/htb]$ systemcl status ssh

ssh.service - OpenBSD Secure Shell server
     Active: active (running) since Sun 2023-02-12 21:15:27 GMT; 1min 22s ago
   Main PID: 7740 (sshd)
     CGroup: /system.slice/ssh.service
             └─7740 sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups

```

**NFS (Network File System)**

**Purpose**: Share/manage remote files as if local.
**Configuration File**: `/etc/exports`  

```shell
workstation@htb[/htb]$ sudo apt install nfs-kernel-server -y
workstation@htb[/htb]$ systemctl status nfs-kernel-server

nfs-server.service - NFS server and services
     Active: active (exited) since Sun 2023-02-12 21:35:17 GMT; 13s ago
    Process: 9234 ExecStartPre=/usr/sbin/exportfs -r (code=exited, status=0/SUCCESS)
```

Permission:
- `rw`: read and write to shared directory
- `ro`: read only to shared directory
- `no_root_squash`: prevents root from being restricted
- `root_squash`: root is also considered as normal user
- `async`: transfer data asynchronously faster but inconsistent
- `sync`: Synchronizes the transfer slower but consistent

```shell
work@htb:~$ mkdir nfs_sharing
work@htb:~$ echo '/home/cry0l1t3/nfs_sharing hostname(<choices>)' >> /etc/export 

work@htb:~$ mkdir ~/target_nfs
work@htb:~$ mount 10.129.12.17:/home/john/dev_scripts ~/target_nfs
work@htb:~$ tree ~/target_nfs

target_nfs/
├── css.css
├── html.html
├── javascript.js
├── php.php
└── xml.xml

```

**Web Servers**

**Apache**
**Purpose**: Host web applications and analyze traffic.
**Configuration File**: `/etc/apache2/apache2.conf`  

```shell
workstation@htb[/htb]$ sudo apt install apache2 -y
workstation@htb[/htb]$ echo '''
<Directory /var/www/html>  
	Options Indexes FollowSymLinks  
	AllowOverride All  
	Require all granted  
</Directory> ''' >> /var/www/html/index.html
```


**Python Web Server**
**Purpose**: Lightweight alternative for file transfers.

```shell
workstation@htb[/htb]$ python3 -m http.server
workstation@htb[/htb]$ python3 -m http.server --directory /path/to/files
```

 **VPN (Virtual Private Network)**
**Purpose**: Secure remote network connections via encryption.

- **Popular Tools**: OpenVPN, L2TP/IPsec, PPTP, SSTP, SoftEther.
- **Usage for Penetration Testing**: Enables secure remote access to internal networks.
- **Installation**:

```shell
workstation@htb[/htb]$ sudo apt install openvpn -y
workstation@htb[/htb]$ sudo openvpn --config internal.ovpn
```
