// This version uses Mongoose to connect to the MongoDB
// npm i mongoose

const mongoose = require('mongoose');

// Connect to the DB
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true  });


// Insert data to the DB, first by creating a new schema

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please check your entered name, no name was specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit ({
//     name: "Apple",
//     rating: 34,
//     review: "Pretty solid as a fruit."
// });

/**
 *   Using validation above to test for missing name
 */
// const fruit = new Fruit ({
//     rating: 10,
//     review: "Peaches are delicious!"
// })

// const kiwi = new Fruit ({
//     name: "Kiwi",
//     score: 10,
//     review: "The bestest fruit!"
// })

// const orange = new Fruit ({
//     name: "Orange",
//     score: 4,
//     review: "Too sour for me"
// })

// const banana = new Fruit ({
//     name: "Banana",
//     score: 3,
//     review: "A weird texture"
// })

const pineapple = new Fruit ({
    name: "Pineapple",
    rating: 9,
    review: "I like it on my pizza!"
})

const dragonFruit = new Fruit ({
    name: "Dragon Fruit",
    rating: 10,
    review: "I could eat these till I pop!"
})



// dragonFruit.save().then(console.log("Dragon Fruit saved!"));
// pineapple.save().then(console.log("pineapple saved!"));
/**
 *  Create
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
// .save().then(console.log("Fruit Saved"))

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});
dragonFruit.save().then(console.log("Fruit Save Success!"));
const Person = mongoose.model("Person", personSchema);

/**
 *  Updating a record, one
 */
Person.updateOne({name: "John"}, {favoriteFruit: dragonFruit}, function(err){
    if(err){
        console.log(err);
    } else {
        console.log("Update Successful!");
    }
})

/**
 *  Creates a relational entry to another piece of data,
 *  in another collection or table
 *  AN EMBEDDED DOC, Links by ID
 */
// const person = new Person ({
//     name: "Amy",
//     age: 12,
//     favoriteFruit: pineapple
// })
const person = new Person ({
    name: "John",
    age: 37,
})

/**
 *  Save a single record / object
 */
// person.save().then(console.log("Person Saved"));

/**
 *  Read
 * Tap into the fruits DB and pull the data
 */

//  Fruit.find(function(err, fruits) {
//      if(err){
//          console.log(err)
//      } else {

//         mongoose.connection.close();

//          fruits.forEach(fruit => {
//              console.log(fruit.name)
//          });
//      }
//  })

/**
 *  Update
 */
//  Fruit.updateOne({_id:"5fd101cc37ec270ba8301b20"}, {name: "Peach"}, function(err) {
//      if(err){
//          console.log(err)
//      } else {
//          console.log("Update Successful!");
//      }
//      mongoose.connection.close();
//  })

/**
 *  Update John, give him a favorite fruit
 */
//  Fruit.updateOne({name: "John"}, {favoriteFruit: dragonFruit}, function(err) {
//      if(err){
//          console.log(err)
//      } else {
//          console.log("Updated fruit rating Successfully!");
//      }
//      mongoose.connection.close();
//  })

/**
 *  Delete, one
 */
// Fruit.deleteOne({name: "Peach"}, function(err) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Deletion Successful!");
//     }
//     mongoose.connection.close();
// })

/**
 *  Delete, many
 */
// Person.deleteMany({name: "John"}, function(err) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Deletion of many has beeen successful!");
//     }
//     mongoose.connection.close();
// });