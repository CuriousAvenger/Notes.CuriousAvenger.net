HTTP headers pass information between the client and server in requests and responses. They may be specific to requests, responses, or common to both. Headers can have one or multiple values, separated by a colon. Key categories include:

1. **General Headers**: Describe the message context.
2. **Entity Headers**: Describe the transferred content.
3. **Request Headers**: Sent by the client; unrelated to message content.
4. **Response Headers**: Sent by the server; provide context about responses.
5. **Security Headers**: Enforce rules to enhance security.

**Types of Headers**
1. General Headers: Used in both requests and responses; describe message context.
	- **Date**: `Date: Wed, 16 Feb 2022 10:38:44 GMT`  	    
	- **Connection**: `Connection: close`  

2. Entity Headers: Describe the content transferred; found in `POST`/`PUT` requests.
	- **Content-Type**: `Content-Type: text/html; charset=UTF-8`  
	    Describes the type and encoding of the content.
	- **Content-Length**: `Content-Length: 385`  
	    Indicates the size of the message body.
	- **Content-Encoding**: `Content-Encoding: gzip`  
	    Specifies transformations (e.g., compression) applied to the data.
	- **Boundary**: `boundary="b4e4fbd93540"`  
	    Separates multipart message content.

3. Request Headers: Sent by the client; unrelated to message content.
	- **Host**: `Host: www.inlanefreight.com`  
	    Specifies the server's domain or IP address.
	- **User-Agent**: `User-Agent: curl/7.77.0`  
	    Identifies the client (browser/tool, version, OS).
	- **Referer**: `Referer: http://example.com`  
	    Indicates the source of the request.
	- **Accept**: `Accept: */*`  
	    States acceptable media types for the response.
	- **Cookie**: `Cookie: PHPSESSID=abc123`  
	    Contains key-value pairs for session management.
	- **Authorization**: `Authorization: BASIC cGFzc3dvcmQK`  
	    Passes credentials for client authentication.

4. Response Headers: Sent by the server; provide response-related information.
	- **Server**: `Server: Apache/2.2.14`  
	    Identifies the server software and version.
	- **Set-Cookie**: `Set-Cookie: name=value; Expires=Wed, 09 Jun 2021`  
	    Sends cookies to the client for future requests.
	- **WWW-Authenticate**: `WWW-Authenticate: BASIC realm="localhost"`  
	    Specifies required authentication for accessing resources.

5. Security Headers: Enhance security by enforcing policies.
	- **Content-Security-Policy**: `Content-Security-Policy: script-src 'self'`  
	    Restricts external resource injection (e.g., prevents XSS).
	- **Strict-Transport-Security**: `Strict-Transport-Security: max-age=31536000`  
	    Forces HTTPS communication.
	- **Referrer-Policy**: `Referrer-Policy: origin`  
	    Controls the inclusion of the Referrer header in requests.

 **Viewing and Modifying Headers**

- **Using `curl`**:
    - View response headers: `curl -I <URL>`
    - View headers and body: `curl -i <URL>`
    - Modify User-Agent: `curl <URL> -A 'Mozilla/5.0'`
- **Using Browser DevTools**:
    - Navigate the **Network** tab, select a request, and view details in the **Headers** tab.
    - Use **Raw** view to see unprocessed headers.