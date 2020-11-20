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

app.listen(5500, () => {
    console.log("Server started on port 5500")
});