Regular expression `regex` are an art of expression language to search for patterns in text and files. Find, replace, analyze, validate, perform searches, and more. Regex can be created with patterns called metacharacters that are symbols that define the search patterns but have no literal meaning. Its used with `grep` and `sed`. 

**Grouping**

- `(a)`: Group parts of a regex together. Within the brackets will be processed together
- `[a-z]`: Define character classes i.e. list of characters to search for.
- `{1-10}`: Used to define quantifiers i.e. range that indicates repetition of pattern.
- `|`: Also called the `OR` operator
- `.*`: Also called the `AND` operator

```shell
cry0l1t3@htb:~$ grep -E "(my|false)" /etc/passwd
lxd:x:105:65534::/var/lib/lxd/:/bin/false
pollinate:x:109:1::/var/cache/pollinate:/bin/false
mysql:x:116:120:MySQL Server,,:/nonexistent:/bin/false

cry0l1t3@htb:~$ grep -E "(my.*false)" /etc/passwd
mysql:x:116:120:MySQL Server,,:/nonexistent:/bin/false
```
