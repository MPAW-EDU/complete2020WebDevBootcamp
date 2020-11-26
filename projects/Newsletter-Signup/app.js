

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const PORT = 5500;

const app = express();

app.get("/", (req,res) => {
    res.sendFile(`${__dirname}/signup.html`);
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`)
})