Permissions are assigned to users and groups. Each user is a member of a different group; each file and directory belongs to specific user and specific groups. To access a different group, one needs to execute permission on the directory - if not, `Permission Deined Error`.

The whole permission system on Linux system is based on the octal number system i.e. there are three different types of permissions a file or directory can be assigned
- `r` - read; `w` - write; `x` - Execute

```shell
cry0l1t3@htb[/htb]$ ls -l /etc/passwd

- rwx rw- r--   1 root root 1641 May  4 23:42 /etc/passwd
- --- --- ---   |  |    |    |   |__________|
|  |   |   |    |  |    |    |        |_ Date
|  |   |   |    |  |    |    |__________ File Size
|  |   |   |    |  |    |_______________ Group
|  |   |   |    |  |____________________ User
|  |   |   |    |_______________________ Number of hard links
|  |   |   |_ Permission of others (read)
|  |   |_____ Permissions of the group (read, write)
|  |_________ Permissions of the owner (read, write, execute)
|____________ File type (- = File, d = Directory, l = Link, ... )
```

**Change Permissions & Owner**

Modify permissions using the `chmod` and `chown` command. Group References are:
- `u` - owner, `g` - group, `o` - others, `a` - all users
- `[+]` to add or `[-]` to remove permissions

The syntax is:
- `chown <user>:<group> <file/directory>`
- `chmod <number> <file/directory>`

```shell
Binary Notation:                4 2 1  |  4 2 1  |  4 2 1
----------------------------------------------------------
Binary Representation:          1 1 1  |  1 0 1  |  1 0 0
----------------------------------------------------------
Octal Value:                      7    |    5    |    4
----------------------------------------------------------
Permission Representation:      r w x  |  r - x  |  r - -
```


**SUID & SGID**

Besides assigning direct user and group permissions, we use `SUID/SGID` i.e. set user ID and set group ID with the respective permissions. This is often used to give their users special rights for certain applications or files. 

Often the case that administrators are not familiar with the applications but still assign the `SUID/SGID` bits, which leads to a high-security risk. Such programs may contain functions that allow execution of a shell from pagers like `journalctl`. Check `GTFObins`.


**Sticky Bit**

Sticky bits are type of permission in Linux given to directories for an extra layer of security when controlling the deletion and renaming of files within a directory. Mostly used in shared home directories, where multiple users can have access, but only the owner can delete or rename. Upon assigning a sticky bit, it is represented by letter `t` in the directories permissions. 

```shell
workstation@htb[/htb]$ ls -l

drw-rw-r-t 3 cry0l1t3 cry0l1t3   4096 Jan 12 12:30 scripts
drw-rw-r-T 3 cry0l1t3 cry0l1t3   4096 Jan 12 12:32 reports
```

- lowercase `t`: sticky bit is set and the directory has execute permissions for others
- uppercase `T`: doesn't have execute permission i.e. cannot traverse/access the contents.
