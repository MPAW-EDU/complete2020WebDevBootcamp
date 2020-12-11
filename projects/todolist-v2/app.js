
const express = require('express');
const bodyParser = require('body-parser');
const date = require(`${__dirname}/date.js`);
const mongoose = require('mongoose');
const _ = require("lodash");

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


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`)
})