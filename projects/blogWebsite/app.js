
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

let posts = [
    {
        'title': 'Day 1',
        'id': '1',
        'author': "MPAW",
        'date': "12/1/2020",
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        'title': 'Day 2',
        'id': '2',
        'author': "MPAW",
        'date': "12/2/2020",
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
]

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');



app.get("/", (req,res) => {
    res.render("main", {postList: posts});
    // console.log(posts)
})



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});