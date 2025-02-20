A file descriptor (FD) in Unix/Linux OS is an indicator of connection maintained by the kernel to perform I/O operations. In windows, its called a file-handle. By default there are 3

- Data stream for input `STDIN - 0`
- Data stream for output `STDOUT - 1`
- Data stream for output that relates to an error `STDERR - 2`

**STDIN and STDOUT**
The command `cat`. When running cat, we give the running program our standard input in `STDIN - FD 0` and upon confirming with enter, it is returned to the terminal as standard output i.e. `STDOUT - 1`.

The same idea works even for standard output and its standard error. Lets take the example with the `find` command. We can redirect the resulting errors to the null devices, which discards all data.

We can redirect errors and output with greater-than (>) character. This also works for lower-than sign (<). However, it serves as standard input. So, you can use the STDIN from the previous stdout.txt file. Likewise, you can append to a file using (>>). The single greater than overwrites the info file.  And a double lower-than is called the `End of File` function and defines the input's end. 

```shell
0xCrvngr@htb[/htb]$ find /etc/ -name shadow
find: '/etc/ssl/private': Permission Denied <- (STDERR - 2)
/etc/shadow <- (STDOUT - 1)
find: '/etc/dovecot/private': Permission Denied <- (STDERR - 2)


0xCrvngr@htb[/htb]$ find /etc/ -name shadow 2>/dev/null
/etc/shadow <- (STDOUT - 1)

0xCrvngr@htb[/htb]$ find /etc/ -name shadow 2> stderr.txt 1>stdout.txt
0xCrvngr@htb[/htb]$ cat stderr.txt
find: '/etc/ssl/private': Permission Denied <- (STDERR - 2)
find: '/etc/dovecot/private': Permission Denied <- (STDERR - 2)

0xCrvngr@htb[/htb]$ cat stdout.txt
/etc/shadow

0xCrvngr@htb[/htb]$ cat < stdout.txt
/etc/shadow

0xCrvngr@htb[/htb]$ find /etc/ -name passwd >> stdout.txt 2>/dev/null
/etc/pam.d/passwd
/etc/cron.daily/passwd
/etc/passwd

0xCrvngr@htb[/htb]$ cat << EOF > stream.txt
> HackTheBox
> EOF
```


**Pipes**

Can also use pipes (|) to redirect `STDOUT`. Commonly used ones are `grep`. Grep is used to filter `STDOUT` according to the pattern we define. Another one is `wc` which counts the total number of obtained results from the given input. 

```shell
0xCrvngr@htb[/htb]$ find /etc/ -name *.conf 2>/dev/null | grep systemd
/etc/systemd/system.conf
/etc/systemd/login.conf
/etc/systemd/resolved.conf

0xCrvngr@htb[/htb]$ find /etc/ -name *.conf 2>/dev/null | grep systemd | wc -l
3
```
