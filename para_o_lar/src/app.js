const express = require ("express");
const cors = require ("cors");

const app = express();

app.use(cors());
app.use(express.json());

const index = require('./routes/index');
const drugstores = require('./routes/drugstoresRoutes');

app.use("/", index);
app.use("/drugstores", drugstores);

module.exports = app;