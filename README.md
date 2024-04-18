# User need to login to create, update, delete, fetch data from the table
// jwt middle ware is used to authorize user
// happyjoi middleware validation is used for login and create user post methods

"dependencies": {
    "bcrypt": "^5.1.1",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mysql": "^2.18.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }


  # .env files
  APP_PORT = 5555
DB_PORT = 3306
DB_USER = 'root'
DB_PASSWORD = 'Mass4Pass#2020'
MYSQL_DB = 'restapi'
CONNECTION_LIMIT = 10
SECURITY_SALT ='asdfg'
