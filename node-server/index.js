const express = require("express")
const app = express();
const port = 3000;

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get('/about',function(req,res){
    res.sendFile(__dirname + "/about.html");
});

app.get('*',function(req,res){
    res.sendFile(__dirname + "/error.html");
  });

app.listen(port,function(){
    console.log("server started... go to localhost:3000");
});
