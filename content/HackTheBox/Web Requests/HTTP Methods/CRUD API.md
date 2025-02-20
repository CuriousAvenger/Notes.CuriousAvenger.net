APIs enable interaction with databases by specifying operations (CRUD: Create, Read, Update, Delete) via HTTP methods. The basic URL structure involves specifying the table and row (e.g., `/city/london`).

**CRUD Operations**

1. **Create (POST)**:  Adds data to the database.
2. **READ (GET)**: Retrieves data from the database
3. **Update (PUT)**: Modifies existing data in the database
4. **Delete (DELETE)**: Removes data from the database

```bash
curl -X POST http://<SERVER_IP>:<PORT>/api.php/city/ -d '{"city_name":"HTB_City", "country_name":"HTB"}' -H 'Content-Type: application/json'

curl -s http://<SERVER_IP>:<PORT>/api.php/city/london | jq

curl -X PUT http://<SERVER_IP>:<PORT>/api.php/city/london -d '{"city_name":"New_HTB_City", "country_name":"HTB"}' -H 'Content-Type: application/json'

curl -X DELETE http://<SERVER_IP>:<PORT>/api.php/city/New_HTB_City
```