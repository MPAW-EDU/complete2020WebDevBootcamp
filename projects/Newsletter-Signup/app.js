

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const PORT = 5500;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.sendFile(`${__dirname}/signup.html`);
})

app.post("/signup", (req,res) => {

    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let email = req.body.email;

    console.log(req.body);
    res.send(`Thank you for signing-up ${firstName}, your first newsletter will arrive at ${email} shortly.`);

})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`)
})