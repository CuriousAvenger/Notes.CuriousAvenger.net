Targets are unique operating system identifiers taken from the version of those specific OS's which adapt the selected exploit module to run on that particular version of the OS. Can use `show targets` to display all vulnerable targets.

How to select the target? Lets use `MS12-063` as an example. This module focuses specifically on the Internet explorer command execution vulnerability. Use the `info` command to get all the information regarding the exploit and `show target` to  select what kind of targets this exploit will most likely to work on. 

```shell
msf6 exploit(windows/browser/ie_execcommand_uaf) > info

       Name: MS12-063 Microsoft Internet Explorer execCommand Use-After-Free 
     Module: exploit/windows/browser/ie_execcommand_uaf
   Platform: Windows
       Arch: 
 Privileged: No
    License: Metasploit Framework License (BSD)
       Rank: Good
  Disclosed: 2012-09-14

msf6 exploit(windows/browser/ie_execcommand_uaf) > show targets

Exploit targets:
   Id  Name
   --  ----
   0   Automatic
   1   IE 7 on Windows XP SP3
   2   IE 8 on Windows XP SP3
   3   IE 7 on Windows Vista
   4   IE 8 on Windows Vista
   5   IE 8 on Windows 7
   6   IE 9 on Windows 7
```

