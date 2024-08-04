const express = require("express")
const app = express();
const port = 3000;

app.get('/',function(req,res){
    res.send('Hello World!');
});

app.get('/about',function(req,res){
    res.send('Simple server using node.js');
});

app.listen(port,function(){
    console.log("server started... go to localhost:3000");
});
