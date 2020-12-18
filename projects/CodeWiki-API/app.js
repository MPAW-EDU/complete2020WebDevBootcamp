
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const { urlencoded } = require('body-parser');
let PORT = process.env.PORT;
if ( PORT == null || PORT == ""){
    PORT = 3000;
}


// Setup the express framework
const app = express();

// Setup EJS Views Engine
app.set('view engine', 'ejs');

// Enable body-parser for parsing
app.use(bodyParser.urlencoded({extended: true}));

// Build and/or connect to DB
mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true, useUnifiedTopology: true })

const articleSchema = {
    title: String,
    content: String
}

/**
 *  The name of the variable corresponds to what will be
 *  used for the mongoDB commands within our API's
 *  for crud functionality.
 */
const Article = mongoose.model("Article", articleSchema);

// Auto-Populate to test
const dummyArticle = new Article ({
    title: "Jolly",
    content: "Jolly Ranchers are Delicious!"
})

Article.find({}, (err, foundArticles) => {
    // console.log(foundArticles);
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

/**
 * @route : "/article"
 * @DB : wikiDB
 * @Collection : Article
 * @function .route()
 * Description: This handles the routing of different types of
 *              or requests that are sent to the same API route.
 * Note: The different types methods of handling each type of request
 *       are chained together, and the correct one is selected via
 *       the routing.
 */
app.route("/articles")

    /**
     * @get : @route
     * @function .find()
     * Description: This will find all items within the given
     *              targeted collection and return them all.
     * Note: This function takes two parameters, the first can be used
     *       to target a specific item based on an identifier,
     *       and the second will return either an error or found items,
     *       both of the latter must be represented by variables in which 
     *       the return data will/could be parsed or the function will fail.
     */
    .get((req,res) => {
        Article.find({}, (err,foundArticles) => {
            if(!err){
                res.send(foundArticles);
            } else {
                res.send(`There was an error with /GET: ${err}`)
            }
        })
    })


    /**
    * @post : @route
    * @DB : wikiDB
    * @Collection : Article
    * @function .save()
    * Description: Saves the new articles received from the api,
    *              then parsed into the respective DB schema,
    *              into the Articles DB.
    * Notes:  The data must be parsed into the schema before attempting
    *         to save in the DB, or it will result in an error.
    */
    .post((req,res) => {
        const newArticle = new Article ({
            title: req.body.title,
            content: req.body.content
        })

        newArticle.save((err) => {
            if(!err){
                res.send("Success: New Article Saved!")
            } else {
                res.send(`Failure - Article Not Saved: ${err}`)
            }
        })
    })


    /**
     * @delete : @route
     * @DB " wikiDB"
     * @Collection : Article
     * @function .deleteMany()
     * Description: Deletes everything in the current articles collection,
     *              essentially nuking the collection.
     * Notes: This is not an optimal was to remove items from a database/collection
     *        and is best saved for purging a DB Collection.
     */
    .delete((req, res) => {

        Article.deleteMany({}, (err) => {
            if(!err){
                res.send("Success: All Articles Deleted!")
            } else {
                res.send(`Failure - Article Not Deleted: ${err}`)
            }
        })
    
    });

// Listen for connection
app.listen(PORT, () => {
    console.log("Server started.");
})