

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const { fail } = require('assert');
// The port should be set dynamically,
// env or a preset default
const PORT = 5500;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.sendFile(`${__dirname}/signup.html`);
})

app.post("/signup", (req,res) => {

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAE: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    // Insert API and Key Here, Removed for security purposes


    const request = https.request(url, options, (response) => {
        // Sending a successCode along with eithe a sucess or failure page
        res.sendFile(`${__dirname}/${response.statusCode===200?"success":"failure"}.html`);

        //  res.send(
        //     response.statusCode===200?"Signup Successful!":"There was a problem signing up, please try again."
        // )

        // if (response.statusCode === 200) {
        //     res.send("Successfully Subscribed!");
        // } else {
        //     res.send("There was a problem signing up.")
        // }

        response.on("data", (data) => {
            console.log(JSON.parse(data));
        })
    });

    request.write(jsonData);
    request.end();

    console.log(req.body);
    // res.send(`Thank you for signing-up ${firstName}, your first newsletter will arrive at ${email} shortly.`);

})

app.post("/failure", (req,res) => {
    res.redirect("/");
})

/**
 *  When deploying to Heroku, set the port to [ process.env.PORT ] 
 *  to allow Heroku to manage it.
 */
app.listen(process.env.PORT || 5500, () => {
    console.log(`Server started on port ${PORT}.`)
})
 
// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}.`)
// })

/**
 * create a new project repo on github using the command [ git init ]
 * use the command [ heroku create ] from within the project file.
 * [ git push heroku master ] , use this to push additional changes
 */


 /**
  * Add the procfile and add the way to start the app [ web: node app.js ] 
  */
