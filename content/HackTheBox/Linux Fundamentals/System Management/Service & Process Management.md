Two types of service: Internal - services required by system for startup; external - services installed by the user. Such service run in background without interaction called `daemons` and are identified as `sshd` and `systemd`. 

The `daemon` itself is an `init process` i.e. has a PID of 1. Monitors and takes care of the other services. The processes can be viewed in `/proc/` with numbers known as child processes. Can use `systemctl` and `update-rc.d`.

**SystemCTL**

Upon installing a service like `openssh`, can use `systemctl` to start, stop, restart a service or enable to make it start on boot aka startup. Can use `ps` to see the current processes.

```shell
workstation@htb[/htb]$ systemctl start ssh
workstation@htb[/htb]$ systemctl status ssh

● ssh.service - OpenBSD Secure Shell server
   Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)
   Active: active (running) since Thu 2020-05-14 15:08:23 CEST; 24h ago
   Main PID: 846 (sshd)
   Tasks: 1 (limit: 4681)
   CGroup: /system.slice/ssh.service
           └─846 /usr/sbin/sshd -D

workstation@htb[/htb]$ systemctl enable ssh
workstation@htb[/htb]$ ps -aux | grep ssh
root       846  0.0  0.1  72300  5660 ?        Ss   Mai14   0:00 /usr/sbin/sshd -D

workstation@htb[/htb]$ systemctl list-units --type=service
UNIT                                                      LOAD   ACTIVE SUB        
accounts-daemon.service                                    loaded active running
acpid.service                                              loaded active running
apache2.service                                            loaded active running
```

**Kill a Process**

You can use the `kill`, `pkill`, `pgrep` or `killall` commands to kill a certain process. Used:
- `SIGHUP` - sent to a process when the terminal that controls it is closed
- `SIGINT` - sent to a user presses control + c.
- `SIGQUIT` - sent when user presses control + d
- `SIGERM` - Program termination
- `SIGKILL` - Kill instantly without clean-up operations
- `SIGSTOP` - Stop the program; can't be handled.
- `SIGSTP` sent when the user presses control + z.

**Running Processes**

As mentioned above the `cntrl+z` command stops the program and puts it into the `SIGSTP`, which you can access back by using the `bg` aka background command. To list an background jobs you can use the `jobs` command.

Likewise, an jobs that are running in the foreground are also displayed in the `jobs` command, but if you specifically want to see the foreground command then can use `fg` command. 

**Command Execution:**

- Semicolon (`;`): Executes commands sequentially, ignoring errors.
- Double ampersand (`&&`): Executes commands sequentially, stopping if an error occurs.
- Pipe (`|`): Takes output from one command as input for the next.