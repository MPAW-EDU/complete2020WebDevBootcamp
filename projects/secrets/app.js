//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

let PORT = process.env.PORT;
if(PORT == null || PORT == ""){
    PORT = 3000;
}

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true, useUnifiedTopology: true });


const userSchema = {
    email: String,
    password: String
}

const user = new mongoose.model("User", userSchema);


app.get("/", (req,res) => {
    res.status("200").render(("home"))
})

app.get("/login", (req,res) => {
    res.status("200").render(("login"))
})

app.get("/register", (req,res) => {
    res.status("200").render(("register"))
})

app.post("/register", (req,res) => {
    const newUser = new user({
        email: req.body.username,
        password: req.body.password
    })

    newUser.save((err) => {
        if(err){
            console.log(err);
        } else {
            res.status("201").render("secrets");
        };
    });

});


app.listen(PORT, () => {
    console.log("Server 'Secrets' Online.");
})