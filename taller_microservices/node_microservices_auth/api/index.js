const express = require('express');

const config = require('../config.js');
const user = require('./components/user/network');

const app = express();

// routes


// http://localhost:3000/api/user
app.use('/api/user/', user);

app.listen(config.api.port, () => {
  console.log('listening ', config.api.port);
})
