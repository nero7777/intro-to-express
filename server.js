const { response } = require('express');
const express = require('express');
const app = express();

app.get("/" , function(req,res){
    res.send("<h1>Hello !!!,from the server</h1>");
})

app.listen(3000 , function(){
    console.log("Server started on port 3000!!");
});