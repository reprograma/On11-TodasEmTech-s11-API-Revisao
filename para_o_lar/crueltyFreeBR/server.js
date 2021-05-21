const express = require("express");

const PORT = 5050;

const app = require("./src/app");


app.listen( PORT, ()=>{
    console.log(`está rodando na porta ${PORT}`);
})