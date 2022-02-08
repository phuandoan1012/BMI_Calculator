// Declare some requirements for the web app
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs'); // EJS will be used for this assignment
app.use(express.static("public")); // declare static folder containing CSS file

// open bmi.html with the route '/'
app.get("/", function(req, res){
    res.sendFile(__dirname+"/bmi.html");
})

// when click the button with method POST
app.post("/", function(req, res){
    console.log(req.body); // log input details
    var age = Number(req.body.age);
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var height_meters = height/100; // convert height from centimetres to metres
    var result = weight / (height_meters*height_meters); // calculate BMI index based on the formula
  
    var result_str = "Your BMI Result is: " + result.toFixed(1); // set up the result string

    res.render('bmi', {userAge: age, userWeight: weight, userHeight: height, userBMI: result_str}); // render all variables to bmi.ejs
  
})

app.listen(3000, function(){
    console.log("server running on 3000");
})