User management is essential in Linux administration for creating, adding and editing users. Another possibility is to execute commands as a different user. For example, User vs Root

```shell
workstation@htb[/htb]$ cat /etc/shadow
cat: /etc/shadow: Permission denied

workstation@htb[/htb]$ sudo cat /etc/shadow
root:<SNIP>:18395:0:99999:7:::
daemon:*:17737:0:99999:7:::
<SNIP>
```

Here are the main commands for user management:
- `sudo` execute commands as a different user
- `useradd` creates a new user or update default new user information
- `userdel` deletes a user account and related files
- `usermod` modifies a user account
- `addgroup` adds a group to the system
- `delgroup` deletes a group from the system
- `passwd` changes the user password
- `su` `su` utility requests appropriate user credentials via PAM and switches to that user ID (for default is superuser i.e. root). 
