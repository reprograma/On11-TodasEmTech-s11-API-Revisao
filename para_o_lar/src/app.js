const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const index = require('./routes/index');
const cinemas = require('./routes/cinemasRoutes');

app.use('/', index);
app.use('/cinemas', cinemas);

module.exports = app;
