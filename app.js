const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require('https');


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
})





// app.post("/", function(req, res) {
//
//   const firstName = req.body.fName;
//   const lastName = req.body.lName;
//   const email = req.body.email;
//
//
//   var data = {
//     members: [{
//       email_adres: email,
//       status: "subscribed",
//       merge_field: {
//         FNAME: firstName,
//         LNAME: lastName
//       }
//     }]
//   };
//
//   const jsonData = JSON.strinify(data);
//   https.request(url, options, function(response) )
//
//
//
//
// })

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
})


//
