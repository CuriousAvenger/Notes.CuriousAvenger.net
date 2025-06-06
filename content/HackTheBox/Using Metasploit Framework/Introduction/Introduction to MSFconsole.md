To start the Metasploit Framework, type `msfconsole` in the terminal of choice. Usually for pentesters specific distros like Parrot or Kali this comes preinstalled. Upon launching, it will have a coined slashed art and the command line prompt, waiting for our command. 

The old way to update `msfconsole` was through a package called `msfupdate`, but now, the apt package manager can handle the update of modules and features. If using Ubuntu, its better to use snap for more latest releases and updates. 

**Installed MSF**

```shell
workstation@htb[/htb]$ sudo apt update && sudo apt install metasploit-framework
<SNIP>
Preparing to unpack .../metasploit-framework_6.0.2-0parrot1_amd64.deb ...
Unpacking metasploit-framework (6.0.2-0parrot1) over (5.0.88-0kali1) ...
Setting up metasploit-framework (6.0.2-0parrot1) ...

workstation@htb[/htb]$ sudo snap install metasploit-framework
<TIME> INFO Waiting for automatic snapd restart...
metasploit-framework v6.4.27-dev installed
```


**Engagement Structure**

The structure is divided into 5 main categories:
- `Enumeration`: Passive scanning, Active scanning, Vulnerability research 
- `Preparation`: code auditing, dependency checks, import modules
- `Exploitation`: run module locally, set parameters, exploit
- `Privilege Escalation`: research, cred gathering, token impersonation
- `Post-Exploitation`: data exfil, pivoting other systems, cleanup





