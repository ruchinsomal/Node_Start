// function routeToRoom(firstname, lastname, name) {
    // var roomId = 0;
    // var nStore = require('nstore/lib/nstore').extend(require('nstore/lib/nstore/query')());
    // var users = nStore.new('data/users.db', function() {
    //     users.find({
    //         user: userId,
    //         pass: passw
    //     }, function(err, results) {
    //         if (err) {
    //             roomId = -1;
    //         } else {
    //             roomId = results.creationix.room;
    //         }
    //         cb(roomId);
    //     });
    // });
//     name(firstname+lastname)
// }
//Private
var privateVariable = true;

//Public
module.exports = User;
function User(n) {
    this.name = n;
}

//User.prototype.foobar = // ...
User.prototype.sayHi = function() {
    console.log('Hi, My name is ' + this.name);
};

var paid = true;

User.prototype.togglePaid = function togglePaid() {
    paid = !paid;
    console.log(paid);
}

User.prototype.routeToRoom = function routeToRoom(firstname, lastname, name) {
    console.log(firstname+lastname);
    //name(firstname+lastname);
}