// This version uses Mongoose to connect to the MongoDB
// npm i mongoose

const mongoose = require('mongoose');

// Connect to the DB
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true  });


// Insert data to the DB, first by creating a new schema

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

fruit.save().then(console.log("Fruit Saved"))

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "John",
    age: 37
})

person.save().then(console.log("Person Saved"))