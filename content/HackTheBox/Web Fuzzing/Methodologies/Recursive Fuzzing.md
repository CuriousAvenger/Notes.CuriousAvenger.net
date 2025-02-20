Recursive fuzzing is an automated approach to explore the hierarchical directory structures of web applications efficiently. It systematically dives deeper into each discovered directory, reducing manual efforts and improving discovery accuracy.

 **How Recursive Fuzzing Works**
1. **Initial Fuzzing**
    - Starts at the web root (`/`).
    - Sends requests based on a wordlist to identify valid directories and files (e.g., HTTP 200/301 responses).
    
2. **Directory Discovery**
    - On finding a valid directory (e.g., `/admin`), appends it to the base URL.
    - Fuzzes the new directory (`http://IP:PORT/admin/FUZZ`) recursively.

3. **Iterative Depth**
    - Repeats the process for each subdirectory, expanding the scope.
    - Stops upon reaching a predefined depth or exhausting valid directories.

 **Benefits of Recursive Fuzzing**
- **Efficiency**: Automates discovery of complex directory structures.
- **Thoroughness**: Ensures no branch of the structure is left unexplored.
- **Scalability**: Suitable for large-scale web applications.
- **Reduced Manual Effort**: Automates exploration at every level.

 **Using `ffuf` for Recursive Fuzzing**

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt \
     -ic -v -u http://IP:PORT/FUZZ -e .html -recursion
```

- `-w <wordlist>`: Specifies the wordlist for fuzzing.
- `-u <url>`: Base URL for fuzzing (with `FUZZ` placeholder).
- `-e <extensions>`: Appends extensions like `.html`.
- `-ic`: Ignores commented lines in the wordlist.
- `-recursion`: Enables recursive fuzzing for discovered directories.

**Optimizing Recursive Fuzzing**

```shell
ffuf -recursion-depth <n>  <- limits recursion to n levels
ffuf -rate <requests/sec>  <- prevents overloading the server
ffuf -timeout <seconds>    <- timeout on unresponsive targets
```
