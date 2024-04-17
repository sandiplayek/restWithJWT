const {createPool} = require('mysql');
const pool = createPool({
    user: 'root',
    password: 'Mass4Pass#2020',
    database : 'restapi',
    connectionLimit: 10
})

module.exports = pool;