Databases are categorized into **Relational Databases** and **Non-Relational Databases**.
- **Relational Databases**: Utilize **SQL** for communication.
- **Non-Relational Databases**: Use various other methods for communication.

**Relational Databases**
- **Definition**: Databases structured around schemas (templates) dictating data organization. Data is stored in **tables** (entities) with unique **keys** for quick access.
- **Example**:
    - A customer table stores user information (e.g., ID, name, contact).
    - A product table stores product details (e.g., ID, description).
    - An orders table links customer and product data using their respective IDs.
- **Advantages**:
    - Consistent and predictable relationships between tables.
    - Efficient data retrieval with integrated queries.
    - Reliable for managing large, structured datasets.
- **Examples of RDBMS**: MySQL, PostgreSQL, SQL Server, Oracle.

**Schema**
- A **schema** defines relationships between tables.
- Example: Linking `id` in the `users` table to `user_id` in the `posts` table to retrieve user details for each