 The payload is a module that aids the exploit by returning a specific type of shell. The payloads are sent together with the exploit itself to bypass the vulnerability and return a reverse connection to the attacker and establish a foothold.

There are three different types of payload in MSF: Singles, Stagers and Stages. 
- `Singles`: payload contains exploit and entire shellcode. More stable than counterparts as all in one. However, some exploits will not support due to quite large size. Self contained

- `Stagers`: A stager is waiting on the attacker machine, ready to establish a connection to the victim host once the stage completes its run on remote host. Small and reliable. 

- `Stages`: Payloads that are downloaded by stager's modules. Provides advanced features with no size limits, Meterpreters, VNC injection and others. 

**Staged Payloads**

An exploitation process that is modularized into different code blocks, each completing its objective individually but working together to finish the attack. The scope of this payload is granting shell access to the target system. aid with the Antivirus, intrusion prevention system.

`Stage0` has initial shellcode sent over the network to the target when the connection has been successful. Common names are `revese_tcp`, `reverse_https`, `bind_tcp`. Reverse connections are less likely to trigger prevention systems because of the security trust zone. 

**Meterpreter Payload**

This payload is a multi-faceted payload that uses DLL injection to ensure the connection to the victim host is stable, hard to detect by simple checks and persistent across reboots or changes. Meterpreter resides in the memory so no traces are left in the drive making it hard to detect. 

We can automate and combine plugins such as Mimikatz Plugin parts for more effective assessments. We can create own payloads with `msfvenom` or use the default payloads through our `show payloads` option once chosen the vulnerability. 

**Payload Types**

- `generic/custom`: Generic listener, multi-use  
- `generic/shell_bind_tcp`: Generic listener, multi-use, normal shell, TCP connection binding  
- `generic/shell_reverse_tcp`: Generic listener, multi-use, normal shell, reverse TCP connection 
- `windows/x64/exec`: Executes an arbitrary command (Windows x64)  
- `windows/x64/loadlibrary`: Loads an arbitrary x64 library path  
- `windows/x64/messagebox`: Spawns a dialog via message using a customizable title, text etc.
- `windows/x64/shell_reverse_tcp`: Normal shell, single payload, reverse TCP connection  
- `windows/x64/shell/reverse_tcp`: Normal shell, stager + stage, reverse TCP connection  
- `windows/x64/shell/bind_ipv6_tcp`: Normal shell, stager + stage, IPv6 Bind TCP stager  
- `windows/x64/meterpreter/$`: Meterpreter payload + varieties above  
- `windows/x64/powershell/$`: Interactive PowerShell sessions + varieties above  
- `windows/x64/vncinject/$`: VNC Server (Reflective Injection) + varieties above  
