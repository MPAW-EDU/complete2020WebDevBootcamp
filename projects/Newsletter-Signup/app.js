

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const { fail } = require('assert');
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

    // Insert Here


    const request = https.request(url, options, (response) => {

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

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`)
})


