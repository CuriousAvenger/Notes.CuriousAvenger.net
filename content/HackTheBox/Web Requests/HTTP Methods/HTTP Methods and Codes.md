HTTP methods and response codes facilitate client-server communication. Here's a concise summary of their functions and key points:
#### **HTTP Methods**

HTTP methods specify the action to be performed on a resource. Commonly used methods include:

- GET: Requests a resource. Sent via query strings, e.g., `?param=value`.
- POST: Sends data to the server (e.g., forms, logins, or file uploads) in the request body.
- HEAD: Requests headers that would be returned by a GET request without the body.
- PUT: Creates new resource on server. Security controls are essential to prevent misuse.
- DELETE: Removes a specified resource. If unsecured, it can lead to DoS.
- OPTIONS: Retrieves information about the server, such as supported HTTP methods.
- PATCH: Applies partial updates to an existing resource.

While `get` and `post` are most commonly used, REST API's frequently utilize `put` and `delete` for CRUD operations.

**HTTP Response Codes**

Response codes inform the client about the status of their request. They are grouped into five categories:

1. **1xx Informational**: Provides processing information, e.g., `100 Continue`.
2. **2xx Success**: Indicates a successful request.
    - **200 OK:** Request succeeded, and the response contains the resource.

1. **3xx Redirection**: Indicates a resource redirection.
    - **302 Found:** Redirects to another URL (e.g., after login).

1. **4xx Client Errors**: Errors due to issues in the client request.
    - **400 Bad Request:** Malformed request.
    - **403 Forbidden:** Access to the resource is denied.
    - **404 Not Found:** Resource doesn't exist.

1. **5xx Server Errors**: Server-side issues.
    - **500 Internal Server Error:** Server failed to process the request.