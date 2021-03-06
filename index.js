const express = require('express');
//npm install --save express/ express required for package json
const app = express();
//CREATING A SIMPLE GET REQUEST 

app.get('/ping', (req, res) => {
    res.status(200);
    res.json({'pong': '🏓'});
});

const port = process.env.PORT || 5020;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

//WHAT DID I DO?
//CREATED EXPRESS  
//CREATE EXPRESS APP
//ADD ROUTE ADDED GET ROUTE CALLED PING WHICH WILL RESPONDE TO PONG AND ADD A PORT ROUTE
//ADDED A SLASH AFTER PORT ROUTE TO GET EXACT FILE PATH eg.localhost:5020/ping
// cat package.json | pbcopy copies a file can valid json in json validator
// HEROKU SELECTS IT'S OWN PORT OR PATH TO THEN RUN YOUR PORT
