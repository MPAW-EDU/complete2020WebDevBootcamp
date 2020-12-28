//jshint esversion:6

/**
 *  Package: Mongoose-Encryption
 */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const md5 = require('md5');

/**
 *  Userd to encypt data,
 *  Strength: weak to med
 */
// const encrypt = require('mongoose-encryption');

const Schema = mongoose.Schema;

let PORT = process.env.PORT;
if(PORT == null || PORT == ""){
    PORT = 3000;
}

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true, useUnifiedTopology: true });


const userSchema = new Schema ({
    email: String,
    password: String
});


/**
 *  Required for mongoose-encryption to encrypt a specific
 *  field in the schema.
 */
// userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ["password"]});



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
        password: md5(req.body.password)
    })

    const username = req.body.username;

    newUser.save((err) => {
        if(err){
            console.log(err);
        } else {
            res.status("201").render("secrets");
        };
    });

    // if(user.find({email: username})) {
    //     res.status("401").send("A user with that email already exists.");
    // } else {
    //     newUser.save((err) => {
    //         if(err){
    //             console.log(`There was a registration error: ${err}`);
    //         } else {
    //             res.status("201").render("secrets");
    //         };
    //     });
    // };

});

app.post("/login", (req,res) => {

    const username = req.body.username;
    const password = md5(req.body.password);

    user.findOne({email: username}, (err, foundUser) => {
        if(err){
            console.log(err);
        } else {
            if(foundUser) {
                if(foundUser.password === password) {
                    res.status("200").render("secrets");
                } else {
                    res.status("401").send("Incorrect Username or Password.")
                }
            } else {
                res.status("401").send("No such user exists.");
            };
        };
    });

});


app.listen(PORT, () => {
    console.log("Server 'Secrets' Online.");
})