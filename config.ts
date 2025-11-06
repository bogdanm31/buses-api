const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3332;
const API_URL = process.env.API_URL || `http://localhost`;

const DB_URL = process.env.DB_URL;

module.exports = {
  API_URL,
  PORT,
  DB_URL
};