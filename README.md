

Creating an Authentication API from Scratch
This guide will walk you through the process of creating a simple authentication API using Node.js, Express, Sequelize, and MySQL.


----------------------------------------------------------------------------------------------------------------------------


Step 1: Initialize a New Node.js Project
Create a new directory for your project:

mkdir auth-api
cd auth-api

Initialize a new Node.js project:
npm init -y



----------------------------------------------------------------------------------------------------------------------------


Step 2: Install Dependencies
Install the necessary dependencies for your project:

npm install express sequelize mysql2 jsonwebtoken bcryptjs dotenv

----------------------------------------------------------------------------------------------------------------------------


Step 3: Set Up Project Structure
Create the following directories and files for your project:

auth-api/

  ├── config/

      |
      └── db.config.js
    
├── controllers/

      └── auth.controller.js
    
├── models/

      └── index.js
      └── user.model.js
    
├── routes/

      └── auth.routes.js

└── index.js



----------------------------------------------------------------------------------------------------------------------------


Step 4: Set Up Database

Create a MySQL database for your project.
Update the database configuration in the .env file:

DB_HOST=your_database_host

DB_USER=your_database_username

DB_PASSWORD=your_database_password

DB_NAME=your_database_name

JWT_SECRET=jwt_generated_token



for JWT_SECRET just run this command on terminal (node -e "console.log(require('crypto').randomBytes(32).toString('hex'))") and don't forget to save the JWT_SECRET key in your secure Vault. 



----------------------------------------------------------------------------------------------------------------------------


Step 5: Define Models and Controllers

Define the User model in models/user.model.js.
Set up Sequelize in models/index.js to connect to the database and load models.
Create controller functions for user authentication in controllers/auth.controller.js.


----------------------------------------------------------------------------------------------------------------------------


Step 6: Define Routes
Define authentication routes in routes/auth.routes.js using Express Router.


----------------------------------------------------------------------------------------------------------------------------


Step 7: Set Up Server
Set up the Express server in index.js.
Configure middleware, including body-parser, CORS, and error handling.
Define route handlers for authentication routes.



----------------------------------------------------------------------------------------------------------------------------


Step 8: Run the Server
Start the server:
node index.js

Your authentication API should now be running at http://localhost:3000.



----------------------------------------------------------------------------------------------------------------------------


Step 9: Test the API
You can test the API endpoints using tools like Postman or curl.

Using Postman
Install Postman: If you haven't already, download and install Postman for your operating system.

Launch Postman: Open Postman and create a new request.

Signup Endpoint:

Set the request type to POST.

Enter the URL http://localhost:3000/api/auth/signup.

In the request body, select raw and choose JSON.

Enter the following JSON payload:
{
  "username": "testuser",
  "email": "testuser@example.com",
  "password": "testpassword"
}

Click on the Send button to make the request.

Login Endpoint:

Set the request type to POST.

Enter the URL http://localhost:3000/api/auth/login.

In the request body, select raw and choose JSON.

Enter the following JSON payload:
{
  "email": "testuser@example.com",
  "password": "testpassword"
}
Click on the Send button to make the request.


----------------------------------------------------------------------------------------------------------------------------



Step 10: Additional Features (Optional)
Implement admin functionalities for managing user data.
Enhance security with features like password recovery and role-based access control.
Set up automated testing and continuous integration.



[download](https://github.com/Dhruv9099/Sequelize-with-JWT/assets/92525093/aabe5ad1-bf27-4980-82e9-4fe184fb2945)

