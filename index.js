const express = require('express')
//npm install --save express/ express required for package json
const app = express();
//CREATING A SIMPLE GET REQUEST 

app.get('/ping',(req, res)=>{
    res.status(200);
})