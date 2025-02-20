Virtual hosting aka `vhosts` are serving multiple websites/domains from a single server/IP. Host header in HTTP requests identifies the `vhost`. Subdomains are extensions of primary domain used to organize sections/services, resolved through DNS records.

| **Feature**        | **Virtual Hosts**                           | **Subdomains**                     |
| ------------------ | ------------------------------------------- | ---------------------------------- |
| **Identification** | HTTP Host header                            | DNS records                        |
| **Purpose**        | Host multiple websites                      | Organize website sections/services |
| **Risks**          | Misconfigurations may expose sensitive data | Vulnerable to subdomain takeovers  |

**Gobuster**
`gobuster` is a versatile command-line tool renowned for its directory/file discovery: hidden server paths and file types, subdomain that enumerate DNS entries and vhosts for hidden virtual hosts.

1. Vhost Fuzzing
```bash
gobuster vhost -u http://target:port -w <wordlist> --append-domain
```

- `vhost`: Enables vhost fuzzing.
- `-u`: Target server URL.
- `-w`: Wordlist path (e.g., `/usr/share/seclists/Discovery/Web-Content/common.txt`).
- `--append-domain`: Appends the base domain to each word (e.g., `admin.target.com`).

2. Subdomain Fuzzing
```bash
gobuster dns -d <domain> -w <wordlist>
```

- `dns`: Enables subdomain fuzzing.
- `-d`: Target domain (e.g., `inlanefreight.com`).
- `-w`: Wordlist path (e.g., `/usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt`).