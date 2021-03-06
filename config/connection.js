// Set up MySQL connection.
const express = require('express')
const mysql = require('mysql');

if(process.env.JAWSDB_URL){
    console.log("connection defined JAWSDB")

    const connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    console.log("connection defined Locally")

    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'burgers_db',
    });
}

// Make connection.
connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;