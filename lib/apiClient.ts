const axios = require('axios');

module.exports = axios.create({
  baseURL: 'https://api.digitransit.fi/routing/v2/hsl/gtfs/v1',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'digitransit-subscription-key': '3adea1f883ef43f8a0b7e3d1aa3684d0'
  }
});