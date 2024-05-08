const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./config/database.js');
const routes = require('./app.js');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
  const user = [{
    name: '',
    password: '',
    email: '',
    age: '',
  }]
  res.render('index', { user: user})
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
