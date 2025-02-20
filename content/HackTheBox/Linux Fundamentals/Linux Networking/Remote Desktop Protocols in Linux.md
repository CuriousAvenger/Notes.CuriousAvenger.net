Remote desktop protocols and widely used across operating systems for graphical remote access, allowing administrators to perform tasks such as troubleshooting, software upgrades, and remote system administration
- RDP (Remote Desktop Protocol): Primary used for windows.
- VNC (Virtual network computing): used for Linux systems.

**XServer**
`xserver` is the client-side component of the X Window System (X11), which facilitates graphical user interfaces on Unix/Linux systems. It provides network transparency, enabling applications to run on a remote server while displaying on a local machine.

- Network Transparency: communicates over TCP/IP or Unix sockets.
- Port usage: uses TCP ports 6001-6009 for display sessions.
- Decentralized rendering: Graphical rendering occurs on local system
- Encryption: default to unencrypted by can use `ssh`

Unencrypted communications allows potential data exposures and exploits such as `cve-2017-2624` and `cve-2017-2625` highlight vulnerabilities. 

```shell
workstation@htb:~$ echo "X11Forwarding yes" >> sudo /etc/ssh/sshd_config
workstation@htb:~$ ssh -X user@remote_host /usr/bin/application
```

**XDMCP**
X display manager control protocol is used for managed remote X sessions on Unix/Linux systems via UDP port 177. Enables full GUI redirection to clients. There are security risks to man-in-the-middle attacks and should be avoided for high-security environments.

**Virtual Network Computing (VNC)**
It is based on the RFB protocol for remote desktop sharing that allows remote control of a desktop environment over a network. It supports screen sharing, authentication and encryption. Tools like `TigerVNC, TightVNC, RealVNC, UltraVNC` can be used.
- Default Port: TCP/5900 for display 0 & `5901, 5902 etc`

```shell
workstation@htb:~$ sudo apt install xfce4 xfce4-goodies tigervnc-standalone-server -y

workstation@htb:~$ vncpasswd
workstation@htb:~$ touch ~/.vnc/xstartup ~/.vnc/config
workstation@htb:~$ cat <<EOF >> ~/.vnc/xstartup

#!/bin/bash
unset SESSION_MANAGER
unset DBUS_SESSION_BUS_ADDRESS
/usr/bin/startxfce4
[ -x /etc/vnc/xstartup ] && exec /etc/vnc/xstartup
[ -r $HOME/.Xresources ] && xrdb $HOME/.Xresources
x-window-manager &
EOT

workstation@htb:~$ cat <<EOF>> ~/.vnc/config
geometry=1920x1080
dpi=96
EOT

workstation@htb:~$ chmod +x ~/.vnc/xstartup
workstation@htb:~$ vncserver
```