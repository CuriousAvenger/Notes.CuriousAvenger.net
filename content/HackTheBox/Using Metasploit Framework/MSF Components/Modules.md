Metasploit modules are prepared scripts with a specific purpose and corresponding functions that have already been developed and tested in the wild. The exploit is a POCs for automated attacks for existing vulnerabilities. 

Syntax: `<No.> <type>/<os>/<service>/<name>`

The OS tag specifies which operating system the modules is created for. The service refers to the vulnerability service that is running on the target machine and the name is the actual code written for that specific attack. 

**Type**
- `Auxiliary`: Scanning, fuzzing, sniffing and admin capabilities.
- `Encoders`: Ensure that payloads are intact to their destinations
- `Exploits`: Exploit a specific vulnerability CVE.
- `NOPs`: (No Operation Code) Keep the payload sizes consistent across exploits
- `Payloads`: Code runs remotely and calls backs. Reverse shells.
- `Plugins`: Additional scripts to integrate with `msfconsole`
- `Post`: Array of modules to gather more information.

Once the module is chosen, in most cases additional information like the victims IP address and details are needed for the exploitation. Upon running, show options every command that says Yes is required for the module to successfully attack the target. 

