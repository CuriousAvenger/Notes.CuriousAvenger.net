`msfconsole` can manage multiple modules at the same time. This is one of the reasons it provides the user with so much flexibility. This is done with the use of sessions, which creates dedicated controlled environments

**Using Sessions**

We can background the session as long as they form a channel of communication with the target host. Use `cntrl+z` combination or by typing the `background` command in the case of Meterpreter.  And to list all the sessions, you use the `sessions` commands. And these modules can be found in the `post` category, referring to Post Exploitation modules.

**Jobs**

In the case of running active exploit under a specific port and need this port for a different module, we can use `jobs` commands to look at the currently active tasks running the background and terminate old ones to free up the port. You can use the `jobs -h` to list the help menu. And `exploit -j` to run the specific exploit within that context of the job. 