Web API (Application Programming Interface): A set of rules and protocols enabling seamless communication between different software components over the web
- Functions as a bridge between:
    - **Server**: Hosts data and functionalities.
    - **Client**: Consumes data and functionalities (e.g., web browsers, mobile apps, other servers).

**Types of Web APIs**

1. Representational State Transfer (REST)

- **Architecture**: Stateless, client-server model.
- **Methods**: CRUD operations mapped to HTTP methods:
    - `GET`: Retrieve resources.
    - `POST`: Create resources.
    - `PUT`: Update resources.
    - `DELETE`: Remove resources.
- **Data Formats**: JSON, XML.
- **Strengths**:
    - Lightweight and platform-independent.
    - Easy integration with modern applications.


2. Simple Object Access Protocol (SOAP)

- **Protocol**: Formal, standardized.
- **Messages**: Encapsulated in SOAP envelopes, using XML.
- **Transport**: Supports HTTP, SMTP.
- **Strengths**:
    - Built-in security and transaction management.
    - Suitable for enterprise-grade applications requiring strict reliability.

3. GraphQL

- **Query Language**: Single endpoint with flexible data fetching.
- **Strengths**:
    - Eliminates over-fetching/under-fetching.
    - Strong typing and introspection aid in API evolution.

 **Advantages of Web APIs**

1. **Standardized Integration**: Facilitates communication between diverse applications.
2. **Reusability**: Exposes specific features or services for external use.
3. **Third-Party Services**: Enables  inclusion of functionalities like payments or logins.
4. **Microservices Architecture**: Promotes scalability and resilience by decoupling monolithic systems.

**Differences Between APIs and Web Servers**

| **Feature**          | **Web Server**                                    | **Web API**                                                                          |
| -------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Purpose**          | Serve static/dynamic content (HTML, CSS, images). | Enable communication and data exchange between applications.                         |
| **Communication**    | Uses HTTP to serve web browsers.                  | Can use HTTP, HTTPS, SOAP, or other protocols.                                       |
| **Data Format**      | HTML, CSS, JavaScript.                            | JSON, XML, or other structured formats.                                              |
| **User Interaction** | Direct interaction via web browsers.              | Indirect interaction via client applications.                                        |
| **Access**           | Typically publicly accessible.                    | Can be public, private, or limited to specific partners.                             |
| **Example**          | Viewing a webpage via `https://www.example.com`.  | A weather app fetching data from a weather API to display user-friendly information. |
