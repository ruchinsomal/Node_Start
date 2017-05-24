var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var mysql=require('mysql');
 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'codeyeti',
  database : 'MYSCHEMA'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/users", function(req, res) {
//app.post('/users', function (req, res) {  
  //const user = req.body

  // console.log(req.query.username);
  //console.log(req.body);
  // console.log(req.params);
  // console.log(req.query);
  const id = 2;
    if(!req.body.username || !req.body.age || !req.body.email|| !req.body.mobile_no || !req.body.address) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } else {
  // connection.query('INSERT INTO User (id,name,age,mobile_no,address) VALUES 
  //   ("' + id + '","' + req.body.username + '","' + req.body.age + '","' + req.body.email + '","' + req.body.mobile + '","' + req.body.address + '")',function (error, results, fields) {
    var data  = {id: id, name: req.body.username, age: req.body.age, mobile_no: req.body.mobile_no, address: req.body.address};
    connection.query('INSERT INTO '+User+' VALUES ?',data, function (error, results, fields) {
        if (error) {
          console.log(error);
          return res.send({"status": "error", "message": "something from database"});
    } else {
        return res.send({"status": "success", "message": "saved"});
    }
  });
  }
})

  var server = app.listen(8092, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Post Database app listening at http://%s:%s", host, port)

})