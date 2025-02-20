Firewalls control and monitor network traffic to protect systems from unauthorized access and threats. They are build using the `Netfilter` framework that filter traffic based on set rules and policies.
- `iptables` legacy command-line utility for managing firewall rules.
- `nftables` modern alternative to iptables with better performance
- `ufw` front-end for iptables, user-friendly.
- `FirewallD` Dynamic firewall with support for zones and services.

**iptables Key Components**

1. **Tables**: Organize rules by traffic type.
    - `filter`: Filters traffic (`INPUT`, `OUTPUT`, `FORWARD` chains).
    - `nat`: Modifies source/destination IPs (`PREROUTING`, `POSTROUTING` chains).
    - `mangle`: Alters packet headers.
    
2. **Chains**: Groups of rules applied to specific traffic:
    - Built-in Chains: Predefined (e.g., `INPUT`, `OUTPUT`, `FORWARD`).
    - User-defined Chains: Custom chains for grouping rules.
    
3. **Rules**: Define filtering criteria and actions.
    - **Criteria**: Match IP, port, protocol, etc.
    - **Targets**: Specify action (e.g., `ACCEPT`, `DROP`, `LOG`).
    
4. **Matches**: Match specific packet characteristics:
    - `-p tcp`: Match TCP protocol.
    - `--dport 80`: Match destination port 80.
    - `-s 192.168.1.1`: Match source IP.
    - `-m conntrack --ctstate ESTABLISHED`: Match connection state.

Illustrate a rule. Consider want to add a new entry to the INPUT chain that allows incoming TCP traffic on port 22 to be accepted. 
```shell
workstation@htb[/htb]$ sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
```
