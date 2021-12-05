const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/finalproj')

const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

require('./services/listings-service')(app);

app.listen(4000);
