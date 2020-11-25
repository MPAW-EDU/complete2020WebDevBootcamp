
// HTTPS for making an external server request.
const https = require('https');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5500;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {

    res.sendFile(`${__dirname}/index.html`);

});

app.post("/", (req,res) => {

    let query = req.body.cityName;
    let units = "imperial"; 
    const apiKey = "6e54593ffa740348e4ee9c91a9a2dab4"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&appid=${apiKey}`

    https.get(url, (response) => {
        console.log(response.statusCode);

        response.on("data", (data) => {
            const weatherData = JSON.parse(data);

            const temp = weatherData.main.temp;
            const weatherDesc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imgURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            
            res.write(`<h1>The temperature in ${query} is ${temp} degrees Farenheit.</h1>`);
            res.write(`<h3>Over ${query} currently has ${weatherDesc}</h3>`);
            res.write(`<img src="${imgURL}">`)

            res.send();

        })
    })

})






app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});