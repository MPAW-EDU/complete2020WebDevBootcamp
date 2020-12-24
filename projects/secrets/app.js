//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const { response } = require('express');

let PORT = process.env.PORT;
if(PORT == null || PORT == ""){
    PORT = 3000;
}

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req,res) => {
    res.status("200").render(("home"))
})

app.get("/login", (req,res) => {
    res.status("200").render(("login"))
})

app.get("/register", (req,res) => {
    res.status("200").render(("register"))
})


app.listen(PORT, () => {
    console.log("Server 'Secrets' Online.");
})