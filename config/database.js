const {createPool} = require('mysql');
const pool = createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database : process.env.MYSQL_DB,
    connectionLimit: process.env.CONNECTION_LIMIT
})

module.exports = pool;