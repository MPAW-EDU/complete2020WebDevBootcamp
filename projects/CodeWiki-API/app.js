
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { urlencoded } = require('body-parser');
let PORT = 3000;
// if( PORT == null || PORT == ""){
//     PORT = 3000;
// }

// Setup the express framework
const app = express();

// Enable body-parser for parsing
app.use(bodyParser.urlencoded({extended: true}));

// Build and/or connect to DB
mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true, useUnifiedTopology: true })

const documentSchema = {
    title: String,
    content: String
}

const Document = mongoose.model("Article", documentSchema);

// Auto-Populate to test
const dummyArticle = new Document ({
    title: "Jolly",
    content: "Jolly Ranchers are Delicious!"
})

Document.find({}, (err, foundArticles) => {
    console.log(foundArticles);
    if(!err){
        if(foundArticles.length == 0){
            dummyArticle.save();
            console.log("Default Saved.");
        } else {
            console.log("Default not required.");

        }
    } else {
        console.log(err);
    }
})



// Listen for connection
app.listen(PORT, () => {
    console.log("Server started.");
})