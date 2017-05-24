
var appRouter = function(app) { 
app.get("/", function(req, res) {
    res.send("Hello World");
});
app.get("/account", function(req, res) {
    var accountMock = {
        "username": "ruchin",
        "password": "12345",
        "twitter": "@ruchinsomal"
    }
    if(!req.query.username) {
        return res.send({"status": "error", "message": "missing username"});
    } else if(req.query.username != accountMock.username) {
        return res.send({"status": "error", "message": "wrong username"});
    } else {
        return res.send(accountMock);
    }
});
// post request using key value as json
app.post("/account", function(req, res) {
    if(!req.body.username || !req.body.password || !req.body.twitter) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        return res.send(req.body);
    }
});

// post request using key value as json
app.post("/accounts", function(req, res) {
	console.log(req.query.username);
	console.log(req.body);
	console.log(req.params);
	console.log(req.query);
    if(!req.body.username || !req.body.password || !req.body.twitter) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        return res.send(req.body);
    }
});
}
 
module.exports = appRouter;