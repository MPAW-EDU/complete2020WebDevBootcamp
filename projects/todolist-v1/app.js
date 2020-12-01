
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 5500;

let items = ['买食物','煮食物','吃食物'];
let workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req,res) => {

    let today = new Date();
    // let currentDay = today.getDay();
    // const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const options = { 
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleString('zh-CN', options);
    
    

    res.render("list", {listTitle: day, newListItems: items});

})

app.post("/", (req,res) => {


    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }


});


app.get("/work", (req, res) => {

    res.render("list", {listTitle: "Work", newListItems: workItems, });

});


app.post("/work", (req, res) => {
    let item = req.body.item;

    item.length>0?workItems.push(item):null;

    res.redirect("/work")

})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`)
})