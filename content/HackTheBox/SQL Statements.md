**INSERT Statement:** 
- Adds new records to a table.
- To selectively insert into a specific columns
- Insert multiple records
```sql
INSERT INTO logins VALUES (1, 'admin', 'p@ssw0rd', '2020-07-02');
INSERT INTO logins(username, password) VALUES ('john', 'john123!');
INSERT INTO logins(username, password) VALUES ('tom', 'tom123!'), ('jane', 'jane123!');
```

**SELECT Statement**
- Retrieves data from a table.
- To select specific columns

```sql
SELECT * FROM logins;
SELECT username, password FROM logins;
```

 **DROP Statement**
- Deletes entire tables or databases permanently.

```sql
DROP TABLE logins;
```

**ALTER Statement**
- Modifies a table's structure.
- Rename a column:
- Modify a column's data type:
- Drop a column:

```sql
ALTER TABLE logins ADD newColumn INT;
ALTER TABLE logins RENAME COLUMN newColumn TO newerColumn;
ALTER TABLE logins MODIFY newerColumn DATE;
ALTER TABLE logins DROP newerColumn;
```

**UPDATE Statement**
- Updates specific records in a table.

```sql
UPDATE logins SET password='change_password' WHERE id > 1;
```
