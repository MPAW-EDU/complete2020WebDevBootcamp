
// HTTPS for making an external server request.
const https = require('https');
const express = require('express');
const app = express();
const PORT = 5500;




app.get("/", (req,res) => {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=6e54593ffa740348e4ee9c91a9a2dab4"

    https.get(url, (response) => {
        console.log(response);
    })

    res.send("Server is working!")
})




app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});