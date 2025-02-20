**Structured Query Language (SQL)** is used to interact with relational databases. While SQL syntax may vary across DBMSs, they adhere to the ISO standard. We'll focus on MySQL/MariaDB syntax. SQL supports the following actions:
- Retrieve, update, or delete data.
- Create new databases and tables.
- Manage users and assign permissions.

**Command Line Interface**

The `mysql` utility connects and interacts with MySQL/MariaDB databases. Avoid using the `-p` instead directly use the `-p <passwd>` as it usually avoids storing in history.

```bash
mysql -u root -p
mysql -u root -h <host> -P 3306 -p <password
```
- `-u`: Username.
- `-p`: Prompts for a password (leave empty to avoid storing in history).
- `-h`: Specify the host (default: localhost).
- `-P`: Port (default: 3306).

```sql
CREATE DATABASE users;  <- create a database
SHOW DATABASES;         <- show database
USE users;              <- use a database
SHOW TABLES;            <- show tables
DESCRIBE logins;        <- describe table structure
```

**Tables in MySQL**
Data in relational databases is organized in **tables**. Each table has: `rows` that are individual records and `columns`: attributes with specific data types.

```sql
CREATE TABLE logins (
    id INT,
    username VARCHAR(100),
    password VARCHAR(100),
    date_of_joining DATETIME
);
```

**Table Properties**
Enhance table behavior with constraints and properties:
- **`AUTO_INCREMENT`**: Automatically increments the value.
- **`NOT NULL`**: Ensures the column cannot be empty.
- **`UNIQUE`**: Guarantees unique entries in a column.
- **`DEFAULT`**: Sets a default value (e.g., `DEFAULT NOW()` for the current date/time).
- **`PRIMARY KEY`**: Uniquely identifies each record.

```sql
CREATE TABLE logins (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    date_of_joining DATETIME DEFAULT NOW(),
    PRIMARY KEY (id)
);
```
