// config/dbConfig.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Vicky@123',
  database: 'ecommerce_db'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

module.exports = connection;
