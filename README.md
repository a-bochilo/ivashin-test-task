# ivashin-test-task

Step-by-step how to start application in docker in development mode:

1. Clone git repository to your local machine.
2. Open terminal in root directory of the application.
3. Ensure that ports 5000, 3002, 5432 are free on your machine.
4. Enter command 'docker-compose up' in the terminal.
5. Once installation complete check if 3 containers started in docker desktop app.
6. Now you have working api. Superadmin user and two user roles (superadmin and user)
   already exist in database. Swagger is avialible http://localhost:5000/swagger
7. Use Postman to test api. There is prepared Postman collection placed in root directory.
8. Sign up as superadmin with login: 'superadmin@gmail.com' and password: '123123123'.
