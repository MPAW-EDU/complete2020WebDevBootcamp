//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

let PORT = process.env.PORT;
if(PORT == null || PORT == ""){
    PORT = 3000;
}

const app = express();

app.use(express.static("public"));
app.set('view enginne', ' ejs');
app.use(bodyParser.urlencoded({extended: true}));




app.listen(PORT, () => {
    console.log("Server 'Secrets' Online.");
})