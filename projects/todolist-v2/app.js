
const express = require('express');
const bodyParser = require('body-parser');
const date = require(`${__dirname}/date.js`);
const mongoose = require('mongoose');

const day = date();

const app = express();

const PORT = 5500;

// let items = ['买食物','煮食物','吃食物'];
// let workItems = [];

/**
 *  Data Persistance using mongo and mongoose
 */
mongoose.connect("mongodb://localhost:27017/todolistDB", { useNewUrlParser: true, useUnifiedTopology: true  })


/**
 *  Items Schema
 */
const itemsSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Missing item name!"]
        }   
})

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item ({
    name: "Go Shopping"
})

const item2 = new Item ({
    name: "Go to work"
})

const item3 = new Item ({
    name: "Travel"
})

const newItems = [item1, item2, item3]


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req,res) => {   

    Item.find({}, function(err, foundItems){

        if(foundItems.length===0){
            Item.insertMany(newItems, function(err) {
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

app.post("/", (req,res) => {


    let item = req.body.newItem;

    if (req.body.list === "work") {
        item.length!==0?workItems.push(item):null;
        res.redirect("/work");
    } else {
        item.length!==0?items.push(item):null;
        res.redirect("/");
    }
    // console.log(item.length)

});


app.get("/work", (req, res) => {

    res.render("list", {listTitle: "work", newListItems: workItems, });

});


app.get("/about", (req, res) => {
    res.render("about");
})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`)
})