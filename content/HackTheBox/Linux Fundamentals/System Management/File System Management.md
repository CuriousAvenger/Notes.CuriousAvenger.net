File system management in Linux involves organizing data on storage devices. Linux supports multiple file systems like ext2, ext3, ext4, XFS, Btrfs, and NTFS, each catering to different requirements like compatibility, data integrity, and performance.

- **Inode Table**: The inode table stores metadata about files and directories (e.g., permissions, size, owner). It allows efficient access and management of files.
- **File Types**:
	- **Regular Files**: Common files stored in the root directory.
    - **Directories**: Contain collections of files and can be parent directories for others.
    - **Symbolic Links**: References to other files or directories, enabling quick access.
- **Permissions**: Files and directories are managed using permissions (read, write, execute). Changes in permissions affect all users.

```bash
0xCrvngr@htb[/htb]$ ls -il
total 0
10678872 -rw-r--r--  1 cry0l1t3  htb  234123 Feb 14 19:30 myscript.py
10678869 -rw-r--r--  1 cry0l1t3  htb   43230 Feb 14 11:52 notes.txt
```

### Disk Management

Disk management includes handling physical storage devices (e.g., hard drives, SSDs). Tools like `fdisk` allow partitioning and formatting of drives. Partitioning: Disk partitioning divides storage into sections, each formatted with a specific file system (e.g., ext4, NTFS).

- `fdisk`: Used for creating and managing disk partitions.
- `gpart` and `GParted`: Graphical tools for disk partition management.

```shell
0xCrvngr@htb[/htb]$ sudo fdisk -l

Disk /dev/vda: 160 GiB, 171798691840 bytes, 335544320 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x5223435f

Device     Boot     Start       End   Sectors  Size Id Type
/dev/vda1  *         2048 158974027 158971980 75.8G 83 Linux
/dev/vda2       158974028 167766794   8792767  4.2G 82 Linux swap / Solaris
```

### Mounting

Mounting makes a partition accessible by attaching it to a specific directory in the filesystem hierarchy.
- `mount`: Attaches a file system to a directory.
- `/etc/fstab`: Defines file systems to be mounted at boot time.

```shell
0xCrvngr@htb[/htb]$ mount
0xCrvngr@htb[/htb]$ sudo mount /dev/sdb1 /mnt/usb
```

### Unmounting

Unmounting removes the association between a directory and a mounted file system, making it inaccessible.
- `umount`: Unmounts a file system.
- `lsof`: Lists open files and processes that are using the file system.

```bash
0xCrvngr@htb[/htb]$ sudo umount /mnt/usb
0xCrvngr@htb[/htb]$ lsof | grep cry0l1t3
```

### Swap Space

Swap space is used as an extension of physical memory. When RAM is full, inactive pages are transferred to swap space, ensuring smooth operation.
- `mkswap`: Sets up a swap space.
- `swapon`: activates the swap space.

**Usage in Hibernation**: Swap space can also store the system’s state during hibernation, allowing it to resume after power is restored.

```shell
0xCrvngr@htb[/htb]$ sudo mkswap /dev/sda2
0xCrvngr@htb[/htb]$ sudo swapon /dev/sda2
```


