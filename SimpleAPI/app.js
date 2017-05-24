var express = require("express");
var bodyParser = require("body-parser");
var app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
var routes = require("./routes/routes.js")(app);
var commonObject = require('./common.js');

app.get("/a", function(req, res) {
//var commonObject = require('./common.js').extend(require('./common.js')());
var User = require('./common.js');
var bob = new User('Ruchin somal');
bob.routeToRoom("alex", "123", function(id) {
    console.log(id);    
});
routeToRoom("asdf","","");
res.send("Hello World");
});
 
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});