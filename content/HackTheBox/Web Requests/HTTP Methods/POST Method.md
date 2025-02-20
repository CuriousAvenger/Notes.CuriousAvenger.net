POST requests are used when large amounts of data (like file uploads) or sensitive user parameters need to be sent in the request body, unlike GET requests which place parameters in the URL. Here are a few differences between `POST` and `GET`
- **Lack of Logging**: No logging of user data in URLs, which is crucial when transferring sensitive data like files.
- **Less Encoding**: POST allows binary data in the body, whereas GET requires encoding in the URL.
- **Larger Data Transfer**: POST requests can handle more data than GET due to URL length limits in browsers and web servers.

**Example Walkthroughs:**

1. **Login Forms**:    
    - **POST Request Example**: When logging into a web application, user credentials are sent as POST data, such as `username=admin&password=admin`.
    
2. **Authenticated Cookies**:
    - POST requests can result in the server sending a `Set-Cookie` header, storing the session ID to maintain user authentication across sessions.

3. **JSON Data**:
    - POST requests can send JSON data, e.g., `{"search":"london"}` to interact with functions like city search.

```bash
curl -X POST -d 'username=admin&password=admin' http://<SERVER_IP>:<PORT>/
curl -b 'PHPSESSID=c1nsa6op7vtk7kdis7bcnbadf1' http://<SERVER_IP>:<PORT>/
curl -X POST -d '{"search":"london"}' -b 'PHPSESSID=c1nsa6op7vtk7kdis7bcnbadf1' -H 'Content-Type: application/json' http://<SERVER_IP>:<PORT>/search.php
```


4. **Using Fetch**:
    - POST requests can also be made using JavaScript’s `fetch` function for similar functionality, such as interacting with a search feature.

```javascript
fetch('http://<SERVER_IP>:<PORT>/search.php', {
  method: 'POST',
  headers: {
	'Content-Type': 'application/json',
	'Cookie': 'PHPSESSID=c1nsa6op7vtk7kdis7bcnbadf1'
  },
  body: JSON.stringify({ search: 'london' })
});
```

