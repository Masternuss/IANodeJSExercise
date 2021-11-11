//Example by : https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm
var express = require('app');
var app=express();
var fs = require('fs');

app.get('/Salesman',function (req,res){
    fs.readFile(__dirname + "/" + "Salesman.json","utf8",function(err,data){
        console.log(data);
        res.end(data);
    });
});



var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})

