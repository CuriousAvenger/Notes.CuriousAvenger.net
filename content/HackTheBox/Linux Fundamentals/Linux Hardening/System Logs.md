System logs on Linux are files that store information about system activities. These logs are crucial for monitoring, troubleshooting, and identifying security issues. They provide insights into system behavior, user actions, and application activities, aiding in the detection of potential security threats and vulnerabilities. 
- Monitoring: identify anomalies like unauthorized logins, attacks or unusual file access.
- Improving security: Review logs to refine penetration testing strategies.
- Ensuring log integrity: configure appropriate log levels, enable rotation and secure storage to prevent unauthorized access to logs.

**Types of System Logs**

Kernel Logs: that handle or log events related to hardware drivers and system calls.
- Location: `/var/log/kern.log`
- Detect outdated drivers; identify suspicious system calls or kernel crashes

System Logs: that handle system-level events like services starts/stops and reboots.
- Location: `/var/log/syslog`
- Detect potential vulnerabilities; monitor failed services or system crashes

```
Feb 28 2023 15:00:01 server CRON[2715]: (root) CMD (/usr/local/bin/backup.sh)
Feb 28 2023 15:04:22 server sshd[3010]: Failed password for htb-student from 10.14.15.2 port 50223 ssh2
```

Authentication Logs: focus on user authentication attempts
- Location: `/var/log/auth.log`
- Identify unauthorized login attempts; investigate security breaches.

Application Logs: logs specific to application activities.
- Location:
	- Apache `/var/log/apache2/error.log`
	- MySQL `/var/log/mysql/error.log`
- Monitor any database changes or detect vulnerabilities or misconfigurations

Security Logs: track security events such as failed logins or firewall activities.
- Common Locations:
	- `fail2ban`: `/var/log/fail2ban.log`
	- `ufw`: `/var/log/ufw.log`
- Detect any patterns in security breaches or identify any unauthorized changes.

**Log Analysis Tools**
There aren't any specific tools that automate the job for you; use basic command-line utility tools like:
- `tail` view logs in real-time
- `grep` search specific pattern in logs
- `less` browse log files interactively