const express = require('express');

eobj = express();

const port = 5100;



function acceptRequest(req,res){
    console.log("Application is running")
}
eobj.listen(port,function(req,res){
    console.log("Server is Running on http://localhost:5100");
});

eobj.get('/',acceptRequest);

eobj.get('/getBatches',GetBatches);

function GetBatches(req,res){
    res.json({"batch" : "ppa","fees":"2435"});
}

function Location(req,res){
    res.send("Location is on the Mars ");
}

eobj.get('/getLocation',Location);

