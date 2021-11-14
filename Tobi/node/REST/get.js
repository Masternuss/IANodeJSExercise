var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "Salesman.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})

app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "Salesman.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        var user = users["salesman" + req.params.id]    //req.params.id ist die zahl die hinter Salemensteht z.B, salesman66 = id 66
        console.log( user );
        res.end( JSON.stringify(user));
    });
})

var get = app.listen(8081, function () {
    var host = get.address().address
    var port = get.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})