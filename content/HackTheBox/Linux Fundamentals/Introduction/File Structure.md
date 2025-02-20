**Components**
- Bootloader: Code that manages the booting process to start the operating system. Parrot uses the GRUB bootloader.
- OS Kernel: Main component of an operating system. It manages the resources for system's I/O devices at the hardware level.
- Daemons: Background services are called "daemons" in Linux. Main purpose is to ensure scheduling, multimedia, networking are working.
- OS Shell: Command language interpreter (command line) is the interface between the OS and user. Common ones are Bash, Zsh, Ksh, Fish etc. 
- Graphics Server: Provides a graphical sub-system (server) called "X" or "X-Server" that allows graphical programs to run locally on the X-windowing system.
- Window Manager: Graphical user interface (GUI). Handles the desktop environment along with utilities like GNOME, KDE, MATE, Unity etc.

**Architecture**
- Hardware: Peripheral devices like RAM, hard drive, SSD, CPU, and others.
- Shell: A command-line (CLI) to execute kernel functions as users.
- Kernel: The core of the Linux OS whose function is to virtualize and control hardware giving specific processes instructions, prevent conflict, etc. Make a computer, computer.

**File System Hierarchy**
- /: The root directory that contains all the files required to boot and operate the OS. After boot, all of the other filesystems as mounted to below points from the root directory.
- /bin: Contains essential command binaries. (black box binaries)
- /boot: Consists of the static bootloader, kernel executable aka GRUB files for the OS.
- /dev: Contains device files to give access to every hardware device attached to the system.
- /etc: Local system configuration system. Configuration for installed apps may be saved here.
- /home: Each user on the system has a subdirectory here for storage.
- /lib: Shared library files that are required for system boot.
- /media: External removeable media like USB are mounted here.
- /mnt: Temporary mount point for regular filesystems.
- /opt: Optional files such as third-party tools can be saved here.
- /root: The home directory for the root user.
- /sbin: Contains executables for system administration (binary system files).
- /tmp: Temporary files from apps or OS are stored here. Directory generally cleared on boot.
- /usr: Contains executables, libraries, man files etc.
- /var: Contains variable data files such as log files, email inboxes, web apps, cron files, etc.