It's crucial to be able to find the files and folders we need. Upon gaining access, it will be essential to find configuration files especially during log analysis created by specific users or administrators. Manually browsing will take forever - use these tools.

- `which`: returns the path to the file or link that should be executed. allows if specific programs like `curl, netcat, wget, python, gcc` are available on the OS.
- `find` Besides just finding files and folder, it can also filter the results with parameters like the size of the file or date.
- `locate` It'll take forever to search throughout the whole system, instead locate works with local database that contains all the info about the files and folders.

**Which**
```shell
0xCrvngr@htb[/htb]$ which python
/usr/bin/python
```

**Find**
```shell
0xCrvngr@htb[/htb]$ find / -type f -name *.conf -user root -size +20k -newermt 2020-03-03 -exec ls -al {} \; 2>/dev/null

-rw-r--r-- 1 root root 136392 Apr 25 20:29 /usr/src/
-rw-r--r-- 1 root root 82290 Apr 25 20:29 /usr/src/
-rw-r--r-- 1 root root 95813 May  7 14:33 /usr/share/
-rw-r--r-- 1 root root 60346 May  7 14:33 /usr/share/
-rw-r--r-- 1 root root 96249 May  7 14:33 /usr/share/
-rw-r--r-- 1 root root 54755 May  7 14:33 /usr/share/
-rw-r--r-- 1 root root 22635 May  7 14:33 /usr/share/
-rwxr-xr-x 1 root root 108534 May  7 14:33 /usr/share/
-rw-r--r-- 1 root root 55285 May  7 14:33 /usr/share/
-rw-r--r-- 1 root root 21254 May  2 11:59 /usr/share/doc/sqlmap
-rw-r--r-- 1 root root 25086 Mar  4 22:04 /etc/dnsmasq.conf
-rw-r--r-- 1 root root 21254 May  2 11:59 /etc/sqlmap/sqlmap.conf
```

- `-type f` find a specific file type in this case f
- `-name *.conf` In this case, any filenames that end with conf. `(*)` stand for all
- `-user root` Options filters all files whose owner is the root user.
- `-size +20k` filter all files that are larger than 20KiB.
- `-newermt 2020-03-03` Set date. Only files newer than the specific date will be showed.
- `-exec ls -al {} \;` This command executes whatever is in the curly brackets for each result. 
- `2>/dev/null` This is a `STDERR` redirection to the null device. Ensures no errors

**Locate**
```shell
0xCrvngr@htb[/htb]$ sudo updatedb
0xCrvngr@htb[/htb]$ locate *.conf

/etc/GeoIP.conf
/etc/NetworkManager/NetworkManager.conf
/etc/UPower/UPower.conf
/etc/adduser.conf
<SNIP>
```
