const express = require('express');
const bodyParser = require('body-parser')
const PORT = 5500;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", (req,res) => {
    res.sendFile(`${__dirname}/bmiCalculator.html`);
})

app.post("/bmiresult", (req,res) => {
    let height = Math.pow(2, req.body.height);
    let weight = req.body.weight;
    let bmi = weight / height;

    res.send(`Your BMI is ${bmi}`);
})

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`)
})






























// const express = require('express');
// const bodyParser = require('body-parser');
// const PORT = 5500;

// const app = express();
// app.use(bodyParser.urlencoded({extended: true}));

// app.get("/bmicalculator", (req,res) => {
//     res.sendFile(`${__dirname}/bmiCalculator.html`)
// })

// app.post("/bmiresult", (req,res) => {
//     let height = Math.pow(2,req.body.height);
//     console.log(height)
//     let weight = req.body.weight;
//     let bmi = weight / height;
//     res.send(`Your BMI is ${bmi}`);
// })

// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`)
// })