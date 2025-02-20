Hidden directories, files, and endpoints in web applications may store sensitive data, outdated scripts, or backup files that can expose vulnerabilities. Directory and file fuzzing identifies these concealed resources to assess security risks effectively.

- **Sensitive Data**: Backup files, logs, or configuration settings with credentials.
- **Outdated Content**: Vulnerable older versions of scripts or files.
- **Development Resources**: Test environments, staging sites, or admin panels.
- **Hidden Functionalities**: Undocumented features or endpoints.

Identifying these resources enhances the understanding of the web application's attack surface and reveals potential vulnerabilities.

**Wordlists**
Wordlists are vital for fuzzing, containing potential directory and file names. Tools like `ffuf` and `wfuzz` use external wordlists for effective probing.

 **SecLists**
- Located in `/usr/share/seclists/` (on `pwnbox`) or `SecLists` (other distributions).
- Contains curated lists for fuzzing, including:
    - `Discovery/Web-Content/common.txt`: General-purpose, commonly used directory and file names.
    - `/directory-list-2.3-medium.txt`: Extensive directory list.
    - `/raft-large-directories.txt`: Comprehensive directory collection.
    - `/big.txt`: Broad file and directory coverage.


**Fuzzing with `ffuf`**

Here a general idea and syntax on how to go on with using `ffuf`
Syntax: `ffuf -w [wordlist_path] -u [base_url_with_FUZZ] [options]`

1. **Wordlist Input**: Use a list of potential names.
2. **URL Construction**: Replace `FUZZ` placeholder in the URL with wordlist entries.
3. **HTTP Requests**: Send requests and analyze responses.
4. **Filter Results**: Focus on valid resources (e.g., status codes 200-399).

**Directory Fuzzing** 

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt -u http://IP:PORT/FUZZ
```

- **Options**:
    - `-w`: Path to wordlist.
    - `-u`: Target URL with `FUZZ` placeholder.

**File Fuzzing**

File fuzzing targets specific files by appending extensions like `.php`, `.html`, `.bak`. This is useful for uncovering old backup files, old scripts or any logs.

```bash
ffuf -w /usr/share/seclists/Discovery/Web-Content/common.txt -u http://IP:PORT/w2ksvrus/FUZZ -e .php,.html,.txt,.bak,.js -v
```

- **Options**:
    - `-e`: Specify file extensions to append.
    - `-v`: Verbose output for detailed analysis.