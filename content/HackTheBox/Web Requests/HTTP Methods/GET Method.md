When visiting a URL, browsers default to a **GET request** to obtain the resources hosted at that URL. After loading the page, the browser may send additional requests using various HTTP methods. This process can be monitored using the **Network** tab in browser developer tools.

 **HTTP Basic Authentication**

**Basic HTTP Authentication** involves protecting a webpage or directory with credentials handled by the webserver. It doesn't involve interacting directly with the web application.

```bash
curl -i http://<SERVER_IP>:<PORT>/ <- without creds
curl -u admin:admin http://<SERVER_IP>:<PORT>/
curl http://admin:admin@<SERVER_IP>:<PORT>/
```


**Viewing Response Headers**

Add the `-i` flag in `cURL` to view response headers for both authenticated and unauthenticated responses.

```bash
curl -v http://admin:admin@<SERVER_IP>:<PORT>/
curl -H 'Authorization: Basic YWRtaW46YWRtaW4=' http://<SERVER_IP>:<PORT>/
```
- With **Basic Auth**, the `Authorization` header is set to `Basic YWRtaW46YWRtaW4=` (Base64 encoded value of `admin:admin`).

 **GET Parameters & `cURL` Requests**

After authentication, you may interact with page features like **City Search**, which can be tested by sending GET requests. For example, a request with the `search` parameter:

```bash
curl 'http://<SERVER_IP>:<PORT>/search.php?search=le' -H 'Authorization: Basic YWRtaW46YWRtaW4='
```

To capture and replicate a request using DevTools, right-click on the request in the **Network** tab and select **Copy > Copy as cURL** to copy the cURL command, which you can then paste into your terminal. Alternatively, you can copy the request as a **Fetch** command by selecting **Copy > Copy as Fetch**, then paste it into the **JavaScript console** to execute it directly.