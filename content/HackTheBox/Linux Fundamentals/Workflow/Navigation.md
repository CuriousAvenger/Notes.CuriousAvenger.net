To navigate across the system and its working directories, windows users might use a mouse, but Linux users prominently depend on the terminal. There are specific commands in Linux that can printout different information regarding the directories and optimize the outputs given our needs.

- `pwd`: check the current working directory
- `ls`: list contents inside a directory; `-l` to list additional options
- `ls -al`: shows additional options along with hidden folders
- `cd`: change directory; i.e. `cd /home/` will move you to the given directory
- `cd .` and `cd ..` change to the current vs the previous directory
- `&&`: to execute multiple commands in given order

An example with `ls -l` 
```shell 
workstation@htb[~]$ ls -l
total 32
drwxr-xr-x 2 cry0l1t3 htbacademy 4096 Nov 13 17:37 Desktop
drwxr-xr-x 2 cry0l1t3 htbacademy 4096 Nov 13 17:34 Documents
drwxr-xr-x 3 cry0l1t3 htbacademy 4096 Nov 15 03:26 Downloads
drwxr-xr-x 2 cry0l1t3 htbacademy 4096 Nov 13 17:34 Music
drwxr-xr-x 2 cry0l1t3 htbacademy 4096 Nov 13 17:34 Pictures
drwxr-xr-x 2 cry0l1t3 htbacademy 4096 Nov 13 17:34 Public
drwxr-xr-x 2 cry0l1t3 htbacademy 4096 Nov 13 17:34 Templates
drwxr-xr-x 2 cry0l1t3 htbacademy 4096 Nov 13 17:34 Videos```

- `drwxr-xr-x`: file type and user permissions
- `2`: Number of hard links to the file/directory
- `workstation`: owner of the file/directory
- `htbacademy`: group owner of the file/directory
- `4096`: Size of the file or the number of blocks used to store the directory info.

