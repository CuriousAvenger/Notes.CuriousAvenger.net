HTTP (Hypertext Transfer Protocol) is an application-level protocol used to access World Wide Web resources. The communication consists of a client requests from a server where the server processes the request and sends back a response.  `HTTP` uses port 80 by default but is configurable. 

**URL Structure**

A **URL (Uniform Resource Locator)** specifies the resource location and how to access it.
1. **Scheme:** Identifies the protocol (`http://`, `https://`).
2. **User Info:** Optional credentials (`admin:password@`).
3. **Host:** Specifies the hostname or IP (`inlanefreight.com`).
4. **Port:** Defaults to 80 for `http` and 443 for `https` (`:80`).
5. **Path:** The file or folder being accessed (`/dashboard.php`).
6. **Query String:** Parameters and values (`?login=true`).
7. **Fragments:** Client-side sections within the resource (`#status`).

 **HTTP Request Flow**
1. **DNS Resolution:**
    - Resolves the domain (e.g., `inlanefreight.com`) to an IP address.
    - Checks `/etc/hosts` locally first, then queries DNS servers.
    
2. **GET Request:**
    - Browser sends a request to the server's root `/` path.
    - Server responds with an **index file** (e.g., `index.html`) and a status code (e.g., `200 OK`).

 **Using cURL**

`cURL` is a command-line tool for sending HTTP requests, often used in automation and web penetration testing. 

```bash
curl <url> <- raw HTML code
curl -O inlanefreight.com/index.html <- saves the file
curl -s -O inlanefreight.com/index.html <- supresses status info
```

|**Flag**|**Description**|
|---|---|
|`-d, --data`|HTTP POST data|
|`-i, --include`|Include response headers in the output|
|`-o, --output <file>`|Write to file instead of standard output|
|`-O, --remote-name`|Save output with the remote file's name|
|`-s, --silent`|Enable silent mode|
|`-u, --user`|Use username and password for authentication (`<user>:<password>`)|
|`-A, --user-agent`|Specify a custom User-Agent|
|`-v, --verbose`|Enable verbose mode for detailed operation logs|
