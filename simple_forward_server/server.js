var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json() );  
app.use(bodyParser.urlencoded({extended: true}));
var cors = require("cors"); // Cors
app.use(cors());
var port = process.env.PORT || 3000;

app.get('/getData', function(req, res) {
    var request = require("request");
    var reqURL = "https://hackathon-node-red-tsuedbro.eu-de.mybluemix.net/getData";
    
    console.log("URL: \n", reqURL);

    var httpHeaderOptions = {
        accept: "application/json",
        "content-type": "application/json",
    };

    var restoptions = {
      method: "GET",
      url: reqURL,
      headers: httpHeaderOptions,
    };
    
    console.log("send request");
    request(restoptions, function(error, response, body) {
        console.log("in request \n");
        if (error) {
          console.error("Failed: %s", error.message);
          body = {"error": error.message };
          res.status(400).json(body);
        } else {
          console.log("Success: \n", body);
          res.status(200).json(body);
        }
    });    
});

app.post('/postData', function(req, res) {
    var request = require("request");
    var reqURL = "https://hackathon-node-red-tsuedbro.eu-de.mybluemix.net/postData";
    
    console.log("URL: \n", reqURL);
    console.log("POST Body: \n", JSON.stringify(req.body));

    var httpHeaderOptions = {
        accept: "application/json",
        "content-type": "application/json",
    };

    var restoptions = {
      method: "POST",
      url: reqURL,
      headers: httpHeaderOptions,
      body: req.body,
      json: true
    };
    
    console.log("send request \n");

    request(restoptions, function(error, response, body) {
        console.log("in request \n");
        if (error) {
            console.error("Failed: %s", error.message);
            body = {"error": error.message };
            res.status(400).json(body);
        } else {
          console.log("Success: \n", JSON.parse(body));
          res.status(200).json(body);
        }
    });    
});    


// Start the server
app.listen(port, function () {
    console.log('forward server is running')
});