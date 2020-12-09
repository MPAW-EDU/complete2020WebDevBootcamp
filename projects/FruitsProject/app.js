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

const kiwi = new Fruit ({
    name: "Kiwi",
    score: 10,
    review: "The bestest fruit!"
})

const orange = new Fruit ({
    name: "Orange",
    score: 4,
    review: "Too sour for me"
})

const banana = new Fruit ({
    name: "Banana",
    score: 3,
    review: "A weird texture"
})
/**
 *  Add mutliple entries and catch errors
 */ 
// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Successfully saved all the fruits to fruitsDB")
//     }
// })
// Add a single entry
// fruit.save().then(console.log("Fruit Saved"))

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "John",
    age: 37
})

// person.save().then(console.log("Person Saved"))

/**
 * Tap into the fruits DB and pull the data
 */

 Fruit.find(function(err, fruits) {
     if(err){
         console.log(err)
     } else {

        mongoose.connection.close();

         fruits.forEach(fruit => {
             console.log(fruit.name)
         });
     }
 })