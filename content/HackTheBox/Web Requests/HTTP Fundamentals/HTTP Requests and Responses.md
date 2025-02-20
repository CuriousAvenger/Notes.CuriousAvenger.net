HTTP communications mainly consist of an HTTP requests and responses. A request is made by the client i.e. either the browser or `curl` and is processed by the server and is bundled in a response back to the user. 

**HTTP Request**
1. Request Line:
    - **Fields**: Separated by spaces:
        - **Method**: Specifies the action (e.g., `GET`, `POST`).
        - **Path**: Target resource path (e.g., `/users/login.html`).
        - **Version**: HTTP version (e.g., `HTTP/1.1`).
2. Headers: Key-value pairs providing metadata (e.g., `Host`, `User-Agent`).
3. Body (Optional): Contains data like `POST` (e.g., form data or JSON).

```plaintext
GET /users/login.html HTTP/1.1
Host: inlanefreight.com
User-Agent: curl/7.65.3
Accept: */*
```

**HTTP Response**
1. Response Line:
    - **HTTP Version**: (e.g., `HTTP/1.1`).
    - **Response Code**: Status of the request (e.g., `200 OK`, `401 Unauthorized`).
2. Headers: Metadata about the response (e.g., `Content-Length`, `Content-Type`).
3. Body: Contains the requested data or error message (e.g., HTML, JSON).

```plaintext
HTTP/1.1 401 Unauthorized
Content-Length: 464
Content-Type: text/html; charset=iso-8859-1
```

### Tools for Examining HTTP Communications

1. `curl`: A command-line tool to send and inspect HTTP requests.

```bash
curl http://example.com
curl -v http://example.com
curl --help or man curl
```

2. Browser DevTools: Built-in tools in modern browsers (Chrome, Firefox) to inspect web interactions.

- **Opening DevTools**: Press `CTRL+SHIFT+I` or `F12`.
- **Network Tab**:
    - Displays all HTTP requests and responses.
    - Shows response status, method, URL, and headers.
    - Filter and search requests for easier debugging.
    - Use **Network Log** for tracing web application performance.
