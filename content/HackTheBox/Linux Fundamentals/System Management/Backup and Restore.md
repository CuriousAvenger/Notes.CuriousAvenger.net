Linux systems offer a variety of software for backing up and restoring data. For Ubuntu systems you have `rsync`, `deja dup` and `duplicity`.

**Rsync**
`Rsync` is an open-source tool used for **efficient** and **secure** backups. Only the changed parts of files are transferred, making it ideal for **large data transfers** over networks.

- local to remote backup: 
	- `-a`: Archive mode (preserves file attributes like permissions and timestamps).
	- `-v`: Verbose mode (detailed output).
-  compression and incremental backups
	- `-z`: Compresses files during transfer.
	- `--backup`: Creates incremental backups.
	- `--backup-dir`: Specifies the folder for incremental backups.
	- `--delete`: Removes files from the remote server that no longer exist locally.
- SSH encryption to secure data during transfers
	- `-e ssh`: Specifies the use of SSH for secure transfer.

```shell
workstation@htb[/htb]$ sudo apt install rsync -y
workstation@htb[/htb]$ rsync -av /path/to/mydirectory user@backup_server:/path/to/backup/directory

workstation@htb[/htb]$ rsync -avz --backup --backup-dir=/path/to/backup/folder --delete /path/to/mydirectory user@backup_server:/path/to/backup/directory

workstation@htb[/htb]$ rsync -av user@remote_host:/path/to/backup/directory /path/to/mydirectory <- restore

workstation@htb[/htb]$ rsync -avz -e ssh /path/to/mydirectory user@backup_server:/path/to/backup/directory
```

Likewise you can also use `GnuPG`, `eCryptfs`, and `LUKS` are tools to encrypt backup data and protect sensitive information. You can also automate backups by combining `cron` jobs with `rsync` to sync data at regular intervals.

```shell
workstation@htb[/htb]$ echo 'rsync -avz -e ssh /path/to/mydirectory user@backup_server:/path/to/backup/directory' > rsync_backup.sh

workstation@htb[/htb]$ chmod +x rsync_backup.sh
workstation@htb[/htb]$ echo '0 * * * * /path/to/RSYNC_Backup.sh' >> crontab
```

**Deja Dup & Duplicity**

A graphical backup tool for Ubuntu that simplifies the backup process. Supports **Rsync**, **encryption**, and backing up to local or remote storage. Whereas Duplicity focuses as a backup tool that provides **encrypted backups** to remote servers (e.g., **FTP**, **Amazon S3**).


**Summary**
- `Rsync` is the primary tool for secure and efficient backups.
- Use **SSH** for encrypted transfers, and consider additional encryption tools for backup security.
- **Automate backups** with **cron jobs** and Rsync for regular synchronization.
- **Deja Dup** and **Duplicity** are alternative tools that offer **graphical interfaces** and **encryption** features.
