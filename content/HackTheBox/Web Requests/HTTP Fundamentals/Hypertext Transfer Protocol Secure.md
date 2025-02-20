 
 **HTTP**
- **Purpose**: Application-level protocol for accessing World Wide Web resources.
- **Communication Model**: Client-server model.
    - **Client**: Sends resource requests.
    - **Server**: Processes requests and responds with resources.
- **Default Port**: `80` (can be reconfigured).
- **Security Issue**: Data transmitted in clear-text, vulnerable to **Man-in-the-Middle (MITM)** attacks.

 **HTTPS**
- **Purpose**: Secure version of HTTP using encryption.
- **Encryption**: Prevents eavesdropping by encrypting transmitted data, thwarting MITM attacks.
- **Identification**:
    - `https://` in the URL.
    - Lock icon in the web browser address bar.
- **Default Port**: `443`.
- **Best Practice**: Use encrypted DNS (e.g., `8.8.8.8`, `1.1.1.1`) or a VPN for complete traffic encryption.

**HTTPS Flow**
1. **Initial Request**: Browser sends a request to port `80`.
2. **Redirection**: Server responds with `301 Moved Permanently`, redirecting to `https://` on port `443`.
3. **TLS Handshake**:
    - **Client Hello**: Browser provides encryption preferences.
    - **Server Hello**: Server responds with SSL certificate and key exchange.
    - **Key Exchange**: Both parties agree on encryption parameters.
4. **Encrypted Communication**: Subsequent HTTP communication is encrypted.
**Note**: Modern servers and browsers mitigate HTTP downgrade attacks via strict security policies.

**cURL for HTTPS**

```bash
curl <url>       <- Invalid certificate chain error for HTTPS
curl -k <url>    <- Skips the SSL certificate and implements it
```
