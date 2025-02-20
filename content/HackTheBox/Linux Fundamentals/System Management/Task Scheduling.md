
Task scheduling in Linux automates tasks at specific times or intervals, enhancing efficiency and reliability. Common use cases include software updates, script execution, database cleanup, and backups. Tools like **Systemd** and **Cron** provide distinct methods for scheduling.

**Systemd**  
Used to trigger processes/scripts based on time intervals or events. Steps:
1. `Create a Timer`: Defines task timing.  
2. `Create a service`: executes the command or script
3. Activate the timer

```shell
0xCrvngr@htb[/htb]$ sudo mkdir /etc/systemd/system/mytimer.timer.d
0xCrvngr@htb[/htb]$ sudo vim /etc/systemd/system/mytimer.timer
0xCrvngr@htb[/htb]$ sudo vim /etc/systemd/system/mytimer.service
0xCrvngr@htb[/htb]$ sudo systemctl daemon-reload
0xCrvngr@htb[/htb]$ sudo systemctl start mytimer.timer
0xCrvngr@htb[/htb]$ sudo systemctl enable mytimer.timer
```

Try to search up the syntax for what to write in the `timer.d` and the `mytimer.service` files to actually make the `systemd` work and write the specific services.

**Cron**  
`Cron` is another tool that can be used to schedule and automate, but its much simpler as timer and service process can both be written in the same file. Need to store the tasks in a file called `crontab` which should have the syntax, but also mentioned below.

Syntax: `<minute> <hour> <day_of_month> <month> <weekday> <command>`

```txt
0 */6 * * * /path/to/update_software.sh
0 0 1 * * /path/to/scripts/run_scripts.sh
0 0 * * 0 /path/to/scripts/clean_database.sh
0 0 * * 7 /path/to/scripts/backup.sh
```

Additional Features:
- Task logging.
- Notifications for success/failure.

**Systemd vs. Cron**

|Feature|Systemd|Cron|
|---|---|---|
|**Setup**|Create timer and service files.|Configure crontab file.|
|**Triggers**|Supports event-based triggers.|Time-based only.|
|**Logging**|Inbuilt detailed logging.|Requires external configuration.|
|**Use Case**|Complex, multi-service setups.|Lightweight, time-based tasks.|
