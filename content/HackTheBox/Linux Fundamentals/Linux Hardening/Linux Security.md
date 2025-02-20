All computer system aren't perfect and is expected to have an inherent risk of intrusion. Some present more than others. It is essential to have certain fundamentals in place to secure any Linux system.

```shell
workstation@htb[/htb]$ apt update && apt dist-upgrade
```

- Keep the OS up to date with the latest security releases for different tools. 
- Use Linux firewall and/or `iptables` to restrict traffic in and out. 
- Secure `ssh` by disable password login and root login via SSH.
- Avoid uses `root` for regular tasks; enforce principle of least privilege. 
- use `fail2ban` to block IPs after repeated failed login attempts.
- Outdated kernels, misconfigured cron jobs, improper use of permissions.
- Use `SELinux` or `AppArmor` for mandatory access control
- Additional tools: `snort`, `chkrootkit`, `rkhunter`, `lynis`

**TCP Wrappers**

TCP Wrappers control access to services based on hostnames or IP address. The `/etc/hosts.allow` and `/etc/hosts.deny` specifies allowed and denied services. Note that TCP Wrappers complement but do not replace the firewall as they control access not the port themselves.

```shell
sshd : 10.129.14.0/24
ftpd : 10.129.14.10
telnetd : .inlanefreight.local
```