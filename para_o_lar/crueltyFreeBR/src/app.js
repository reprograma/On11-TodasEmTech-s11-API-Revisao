const express = require("express");
const app = express();
const cors = require("cors");
const marcas  = require("./routes/marcasRoutes" );
const index = require("./routes/index");

app.use(cors());

app.use(express.json())

app.use ("/", index);
app.use ("/marcas", marcas)



module.exports = app



