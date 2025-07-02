// db.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

// Create Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, // optional: remove SQL logging in console
  }
);

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('✅ Connected to MySQL database via Sequelize');
  })
  .catch((err) => {
    console.error('❌ Unable to connect to the database:', err.message);
  });

module.exports = sequelize;
