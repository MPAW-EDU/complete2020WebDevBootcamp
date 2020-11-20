//jslint esversion:6

/**
 * This is the old way of importing
 * This one works correctly
 */
const express = require('express');

/**
 * This is ES6 import syntax
 */
// import express from 'express';

const app = express();

app.get("/", (req,res) => {
    res.send("<h1>Hello World!</h1>")
})

app.get("/contact", (req,res) => {
    res.send("<h1>Contact me at Mail@email.com</h1>")
})

app.get("/about", (req,res) => {
    res.send("<h1>It's me, Michael the Developer!</h1>")
})

app.listen(5500, () => {
    console.log("Server started on port 5500")
});