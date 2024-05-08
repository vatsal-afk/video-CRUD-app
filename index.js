const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database.js');
const routes = require('./app.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});