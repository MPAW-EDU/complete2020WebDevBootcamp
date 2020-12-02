
const express = require('express');
const bodyParser = require('body-parser');
const date = require(`${__dirname}/date.js`);

const day = date();

const app = express();

const PORT = 5500;

let items = ['买食物','煮食物','吃食物'];
let workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req,res) => {    

    res.render("list", {listTitle: day, newListItems: items});

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