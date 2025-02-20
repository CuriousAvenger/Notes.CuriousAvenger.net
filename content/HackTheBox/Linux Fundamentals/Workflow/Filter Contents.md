The last section, we learned about the redirections, now we are use more tools to read the files. The two tools are more and less, which are very identical. These are fundamental pagers that allow us to scroll through the file in an interactive view. 

**More Vs Less**

The only difference between `more` and `less` is that `more` returns an interactive scrollable file but upon clicking (Q) you would return to the terminal. `less` also does the same thing, but it instead opens the vim editor.

```shell
0xCrvngr@htb[/htb]$ more /etc/passwd

root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
<SNIP>
--More--

0xCrvngr@htb[/htb]$ less /etc/passwd

root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
<SNIP>
:
```


Likewise, there are `head` and `tail` tools that are used to list the first ten lines of a given file or input and the `tail` returns the last ten lines of the given file or input.

**More Pipes**

- `sort`: sort the desired results alphabetically and/or numerically.
- `grep`: used to find specific strings within the given output
- `grep -v`: exclude specified information from the input
- `cut`: cut the output given a specific location given by `-d ":"` and `-f` for the position
- `tr`: this replaces certain characters from the output i.e. `tr ":" " "`
- `column`: suited to display results in tabular form using the `-t`
- `awk`: process and manipulate data and produce formatted reports.
- `sed`: change specific names in a whole file - stream editor. replace `'s/bin/HTB/g'`
- `wc`: to avoid counting lines manually, use `wc -l` word count list.