//jshint esversion:6

/**
 *  Package: Mongoose-Encryption
 */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

/**
 *  Step 1 - Session & Auth
 *  Configuration for Sessions, cookies, and Auth
 */
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');


/**
 *  Medium to high encryption,
 *  a best practice for use.
 */
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

/**
 *  A fairly weak encryption that
 *  wont often survive a hash/rainbow
 *  table attack.
 */
// const md5 = require('md5');

/**
 *  Userd to encypt data,
 *  Strength: weak to med
 */
// const encrypt = require('mongoose-encryption');

// Initialize Mongoose.Schema to a var funct.
const Schema = mongoose.Schema;

let PORT = process.env.PORT;
if(PORT == null || PORT == ""){
    PORT = 3000;
}

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// Step 2 - Session & Auth
app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));

/**
 *  Step 3 - Session & Auth
 *  Setup passport, then have it use sessions.
 */
app.use(passport.initialize());
app.use(passport.session());


mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true, useUnifiedTopology: true });
// Step 6 - Session & Auth
// Fix Deprecation warning
mongoose.set("useCreateIndex", true);

const userSchema = new Schema ({
    email: String,
    password: String
});

/**
 *  Step 4 - Session & Auth
 *  Setup Passport-Local Mongoose
 */
userSchema.plugin(passportLocalMongoose);



/**
 *  Required for mongoose-encryption to encrypt a specific
 *  field in the schema.
 */
// userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ["password"]});



const User = new mongoose.model("User", userSchema);

/**
 *  Step 5 - Session & Auth
 *  Configure passportLocalMongoose
 */
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/", (req,res) => {
    res.status("200").render(("home"))
})

app.get("/login", (req,res) => {
    res.status("200").render(("login"))
})

app.get("/register", (req,res) => {
    res.status("200").render(("register"))
})

/**
 *  Step 8 - Session & Auth
 *  Create the Secret route,
 *  which required the user to be authenticated
 *  to access.
 */
app.get("/secrets", (req,res) => {
    if(req.isAuthenticated()){
        res.status("200").render('secrets');
    } else {
        res.status("401").redirect('/login');
    }
})


/**
 *  Step 10 - Session & Auth
 *  Create a logout route
 */
app.get("/logout", (req,res) => {
    req.logout();
    res.status("200").redirect('/');
})


app.post("/register", (req,res) => {

    /**
     *  Step 7 - Session & Auth
     *  Setup the registration using passport framework  
     */    

    User.register({username: req.body.username}, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            res.status("418").redirect('/register')
        } else {
            passport.authenticate("local")(req,res, () => {
                res.status("201").redirect('/secrets');
            })
        }
    })


    /**
     *  Removed to implement cookies and session
     */
    // bcrypt.hash( req.body.password, saltRounds, (err, hash) => {

    //     const newUser = new user({
    //         email: req.body.username,
    //         password: hash
    //     })

    //     newUser.save((err) => {
    //         if(err){
    //             console.log(err);
    //         } else {
    //             res.status("201").render("secrets");
    //         };
    //     });
    // });



    // const username = req.body.username;



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

    /**
     *  Step 9 - Session & Auth
     *  Create new user,
     *  Use .login() to authenticate the user
     */
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, (err) => {
        if(err){
            console.log(err);
        } else {
            passport.authenticate("local")(req,res, () => {
                res.status("200").redirect('/secrets');
            })
        }
    })

    /**
     *  Removed to implement cookies and session
     */
    // const username = req.body.username;
    // const password = req.body.password;

    // user.findOne({email: username}, (err, foundUser) => {
    //     if(err){
    //         console.log(err);
    //     } else {
    //         if(foundUser) {
    //             bcrypt.compare(password, foundUser.password, (err, result) => {
    //                 if(result===true){
    //                     res.status("200").render("secrets");
    //                 } else {
    //                     res.status("401").send("Incorrect Username or Password.")
    //                 }
    //             })
    //         } else {
    //             res.status("401").send("No such user exists.");
    //         };
    //     };
    // });

});


app.listen(PORT, () => {
    console.log("Server 'Secrets' Online.");
})