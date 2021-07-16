const mysql = require('mysql');
const { promisify } = require('util');

const { database } = require('./keys');

const pool =  mysql.createPool(database);

pool.getConnection((err, connection)=>{
    if (err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABSE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABSE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNEREFUSED') {
            console.error('DATABSE CONNECTION WAS REFUSED');
        }
    }

    if (connection) connection.release();
    console.log('DB is Connected');
    return;
});

// Promisify Pool Query
pool.query = promisify(pool.query);

module.exports = pool;