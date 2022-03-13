const axios = require('axios');

const api = axios.create({
  baseURL: 'https://brasilapi.com.br/api/ddd/v1/',
});

module.exports = api