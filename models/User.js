// models/User.js
const connection = require('../config/dbConfig');

class User {
  static async createUser(name, email) {
    const query = 'INSERT INTO Users (name, email) VALUES (?, ?)';
    const values = [name, email];
    try {
      const result = await connection.query(query, values);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
