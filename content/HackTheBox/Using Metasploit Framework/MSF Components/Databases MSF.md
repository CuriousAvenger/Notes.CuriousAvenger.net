Databases in `msfconsole` are used to keep track of your results. `msfconsole` has a built-in support for PostgreSQL database system, where we can direct, quick and easy access to scan results with the ability to import and export.

**Setting up the Database**

```shell
workstation@htb[/htb]$ sudo systemctl start postgresql
workstation@htb[/htb]$ sudo msfdb init

[+] Starting database
[+] Creating database user 'msf'
<SNIP>

workstation@htb[/htb]$ sudo msfdb run
workstation@htb[/htb]$ sudo msfdb reinit <- want to reset your database

msf6 > help database
    db_connect        Connect to an existing database
    db_disconnect     Disconnect from the current database instance
    db_export         Export a file containing the contents of the database
    db_import         Import a scan result file (filetype will be auto-detected)
    db_nmap           Executes nmap and records the output automatically
    db_rebuild_cache  Rebuilds the database-stored module cache
    db_status         Show the current database status
    hosts             List all hosts in the database
    loot              List all loot in the database
    notes             List all notes in the database
    services          List all services in the database
    vulns             List all vulnerabilities in the database
    workspace         Switch between database workspaces
```

**Using Database**

It is especially useful when you have an extensive lists of hosts, loot, notes and stored vulnerabilities. The database can be organized as workspaces. All the listed are tool that you can use to organize your data and the `-h` can be useful to understand how `msfconsole` handles these specific tools.

```shell
msf6 > workspace -h
msf6 > hosts -h
msf6 > services -h
msf6 > creds -h
msf6 > loot -h
```

You can either use the `db` commands to collect data like run `db_nmap` to automatically add the scan to the database or use the `db_export` feature that can read most tools and store that information respectively into the database.