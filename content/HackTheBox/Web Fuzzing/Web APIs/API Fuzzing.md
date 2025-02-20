API fuzzing targets web APIs, systematically testing endpoints and parameters by sending unexpected or malformed inputs. Its goals include identifying vulnerabilities, improving robustness, and automating security testing.
- **Uncovering Hidden Vulnerabilities**: undocumented or misconfigured endpoints.
- **Testing Robustness**: Ensures APIs handle unexpected inputs gracefully.
- **Automating Security Testing**: Reduces manual effort by automating testing.
- **Simulating Real-World Attacks**: Identifies vulnerabilities before exploitation.

**Types of API Fuzzing**
1. **Parameter Fuzzing**
    - Tests parameters like query strings, headers, and request bodies.
    - Identifies vulnerabilities like injection attacks, XSS, and parameter tampering.

2. **Data Format Fuzzing**
    - Targets structured formats (e.g., JSON, XML).
    - Exposes parsing errors, buffer overflows, or special character mishandling.

3. **Sequence Fuzzing**
    - Tests request order and timing in interconnected APIs.
    - Reveals issues like race conditions, IDOR, or authorization bypass.

**Example API Endpoints**
1. **GET / (Read Root)**: Returns root resource or basic info.
2. **GET /items/{item_id} (Read Item)**: Retrieves a specific item.
3. **DELETE /items/{item_id} (Delete Item)**: Removes an item.
4. **PUT /items/{item_id} (Update Item)**: Updates an item's data.
5. **POST /items/ (Create/Update Item)**: Creates or updates items.

**Fuzzing the API**: Clone and set up the `fuzzer`:

```bash
git clone https://github.com/PandaSt0rm/webfuzz_api.git
cd webfuzz_api
pip3 install -r requirements.txt
python3 api_fuzzer.py http://IP:PORT
curl http://IP:PORT/cz...
```

- **404 Not Found**: Invalid endpoints.
- **200 OK**: Valid endpoints.
- **405 Method Not Allowed**: Incorrect HTTP method.

**Common Vulnerabilities Identified**

- **Broken Object-Level Authorization (BOLA)**: Manipulating parameters to access restricted objects.
- **Broken Function-Level Authorization (BFLA)**: Unauthorized access to API functions via parameter modification.
- **Server-Side Request Forgery (SSRF)**: Injecting malicious values to redirect server requests.