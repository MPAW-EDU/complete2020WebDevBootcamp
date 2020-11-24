
// HTTPS for making an external server request.
const https = require('https');
const express = require('express');
const app = express();
const PORT = 5500;




app.get("/", (req,res) => {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=6e54593ffa740348e4ee9c91a9a2dab4"

    https.get(url, (response) => {
        console.log(response.statusCode);

        response.on("data", (data) => {
            const weatherData = JSON.parse(data);

            const temp = weatherData.main.temp;
            const weatherDesc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imgURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            
            res.write(`<h1>The temperature in London is ${temp} degrees Farenheit.</h1>`);
            res.write(`<h3>Over London currently has ${weatherDesc}</h3>`);
            res.write(`<img src="${imgURL}">`)

            res.send();

        })
    })

})




app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});