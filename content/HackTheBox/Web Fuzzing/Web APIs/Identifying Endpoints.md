Know where to look before you can start fuzzing Web APIs. Identifying the endpoints that the API exposes is the first crucial step in this process aka finding hidden doorways to the application's data and functionality.

**REST APIs**

Endpoints: Represent resources with unique URLs.
    - Examples:
        - `/users`: Collection of users.
        - `/users/{id}`: Specific user.
- Use hierarchical structure for nested resources.

Parameters
- **Query Parameters**: Appended with `?` (e.g., `/users?limit=10`).
- **Path Parameters**: Embedded in URL (e.g., `/users/{id}`).
- **Request Body Parameters**: Included in POST/PUT requests (JSON/XML).

Discovery Methods
1. **API Documentation**: Check official docs (e.g., Swagger/OpenAPI).
2. **Network Traffic Analysis**: Use tools like Burp Suite or browser DevTools.
3. **Parameter Fuzzing**: Tools like `ffuf`/`wfuzz` with parameter wordlists.

 **SOAP APIs**
 
The `SOAP` APIs are structured with single endpoint URL for all operations. Parameters and operations defined XML (SOAP messages)

Parameters:
- `keywords`: The search term to use
- `author`: the name of the author (optional)
- `genre`: the genre of the book (optional)

Discovery Methods
1. **WSDL Analysis**: Examine operations, parameters, and data types in the WSDL file.
2. **Network Traffic Analysis**: Capture SOAP messages using Wireshark.
3. **Parameter Fuzzing**: Test for undocumented operations/values.

 **GraphQL APIs**
 The endpoint are relatively simple with a single URL, typically `/graphql`.

- Fetch data by specifying:
    - **Fields**: Data points (e.g., `name`, `email`).
    - **Relationships**: Nested objects (e.g., `posts { title }`).
    - **Arguments**: Filters/pagination (e.g., `posts(limit: 5)`).

Mutations
- Modify data with:
    - **Operation**: Action type (e.g., `createPost`).
    - **Arguments**: Input data (e.g., `title: "New Post"`).
    - **Selection**: Response fields.

Discovery Methods
1. **Introspection**: Use introspection queries to get API schema.
2. **API Documentation**: Check docs or tools like GraphQL Playground.
3. **Network Traffic Analysis**: Inspect `/graphql` requests.
