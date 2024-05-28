## Folder Structure

This project folders struture is as follows:

- src:
  - config:
    - database_config
  - controller:
    - complete_task
    - create_task
    - delete_task
    - edit_task
    - get_task
  - database:
    - database_connection
  - error:
    - error_middleware
  - model:
    - task_model
  - routes:
    - task_routes

1. The **config** folder stores the configurations necessary for this project to run
2. **Controller** folder stores all the files responsible for any action that is possible to do
3. **Database** holds the file responsible for connecting to the database
4. **Error** folder holds the error middleware for better error handling
5. **Model** Holds the model/table
6. **Routes** Application routes
