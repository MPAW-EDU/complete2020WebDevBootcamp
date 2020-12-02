
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');



app.get("/", (req,res) => {
    res.send("API /GET is Working!")
})



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});