require('dotenv').config();
require('./database/db');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const controller = require('./controllers/user.controller');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'views')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.render('index.html');
});

app.post('/', controller.register);

app.listen(PORT, () => {
  console.log('Server listening on port: ', PORT);
});
