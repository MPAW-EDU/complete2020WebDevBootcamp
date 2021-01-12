
// Required Imports
const express = require('express');
const bodyParser = require('body-parser');
const date = require(`${__dirname}/date.js`);
const mongoose = require('mongoose');
const _ = require("lodash");

// Function / Method Assignments
const day = date();
const app = express();

const PORT = process.env.PORT;
if (PORT == null || PORT == ""){
    PORT = 3000;
}

// Add this into your package.json just below license, to make it ready to launch
/*
  "engines": {
    "node": "14.13.1"
  },
*/

// let items = ['买食物','煮食物','吃食物'];
// let workItems = [];

/**
 *  Data Persistance using mongo and mongoose
 * 
 *  Removed password and username for security purposes
 */
mongoose.connect("mongodb+srv://< username & password >@cluster0.w0y0c.mongodb.net/todolistDB", { useNewUrlParser: true, useUnifiedTopology: true  })


/**
 *  Items Schema
 */
const itemsSchema = new mongoose.Schema ({
    name: {
        type: String,
        }   
})

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item ({
    name: "Welcome to your todolist!"
})

const item2 = new Item ({
    name: "Hit the (+) button to add a new item."
})

const item3 = new Item ({
    name: "<-- Click this to delete an item."
})

const defaultItems = [item1, item2, item3]

const listScema = {
    name: String,
    items: [itemsSchema]
};

const List = mongoose.model("List", listScema);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

/**
 *  Get home route
 */
app.get("/", (req,res) => {   

    Item.find({}, function(err, foundItems){

        if(foundItems.length===0){
            Item.insertMany(defaultItems, function(err) {
                if(err){
                    console.log(err);
                } else {
                    console.log("Items added successfully!");
                }
                res.redirect("/");
            })
        } else {
            if(err){
                console.log(err);
            } else {
                res.render("list", {listTitle: "Today", newListItems: foundItems});
            }
        }
    })
    

})

/**
 *  Post new item route
 */
app.post("/", (req,res) => {

    const itemName = req.body.newItem;
    const listName = req.body.list;

    if(itemName.length>0){

        const item = new Item ({
            name: itemName
        });

        if (listName === "Today") {
            item.save();
            res.redirect("/");

        } else {
            List.findOne({name: listName}, (err, foundList) => {
            foundList.items.push(item);  
            foundList.save();
            res.redirect(`/${listName}`);
            });
        };

    }

    // if (req.body.list === "work") {
    //     item.length!==0?workItems.push(item):null;
    //     res.redirect("/work");
    // } else {
    //     item.length!==0?items.push(item):null;
    //     res.redirect("/");
    // }
    // console.log(item.length)

});

/**
 *  Deletion route
 */
app.post("/delete", (req, res) => {

    const checkedItemId = req.body.checkbox;
    const listName = req.body.listName;

    if(listName === "Today"){

        Item.findByIdAndRemove(checkedItemId, (err) => {
            if(err) console.log(err);
            console.log("Successful Deletion");
        })
    
        res.redirect("/")

    } else {

        List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, (err, foundList) => {

            if(!err){
                res.redirect(`/${listName}`);
            } else {
                console.log(err);
            }

        })

    }



})

/**
 *  Express Dynamic Route
 */
app.get("/:customListName", (req, res) => {

    const customListName = _.capitalize(req.params.customListName);

    List.findOne({name: customListName}, (err, foundList) => {
        if(!err) {
            if(!foundList) {
                // Create a new list
                const list = new List({
                    name: customListName,
                    items: defaultItems
                })
            
                list.save()
                res.redirect(`/${customListName}`)
            } else {
                // Show an existing list
                res.render("list", {listTitle: foundList.name, newListItems: foundList.items})
            }
        } else {
            // Log an error
            console.log(err);
        }
    })

});


app.get("/about", (req, res) => {
    res.render("about");
})


// Listener
app.listen(PORT, () => {
    console.log(`Server started successfully.`)
})