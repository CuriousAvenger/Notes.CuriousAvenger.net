The bash prompt easy to understand and includes information such as the user, hostname, and working directory. For a default shell an example of the prompt description is

- `<username>@<hostname><current working directory>$`
- `<username>@<hostname>[~]$` default folder when logged in
- `root@htb[/htb]#`  log in as root in the root home directory
- User Prompt `$` and Root Prompt `#`

You can customize this in by using tools like `script` or in `.bash_script` to filter and print all the commands. One can use special characters in shell configuration file `.bashrc`.

- `\d` Date (Mon Feb 6) 
- `\D{%Y-%m-%d}` Date (YYYY-MM-DD) 
- `\H` Full hostname 
- `\j` Number of jobs managed by the shell 
- `\n` Newline 
- `\r` Carriage return 
- `\s` Name of the shell 
- `\t` Current time 24-hour (HH:MM:SS) 
- `\T` Current time 12-hour (HH:MM:SS) 
- `\@` Current time 
- `\u` Current username 
- `\w` Full path of the current working directory

Customizing the prompt can make it the terminal experience more personalized and efficient. You can use bash-prompt generator and powerline to adapt prompts to ones needs. 