
const { RSA_NO_PADDING } = require('constants');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

const PORT = 5500;


/**
 * __dir can be concatinated with a file name that is
 * in the same directors to auto generated the location
 * to access and send a file.
 * 
 *  .sendFile() allows you to send a file through an API
 */
app.get("/", (req,res) => {

    res.sendFile(`${__dirname}/index.html`)

})

app.post("/", (req,res) => {

    console.log(req.body);

    let num1 = req.body.num1;
    let num2 = req.body.num2
    let product = num1 * num2;

    res.send(`The product of ${num1} and ${num2} is ${product}`)
})



app.listen(PORT, () => {
    console.log(`The server has been started on port ${PORT}`)
});