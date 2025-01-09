const express = require('express');
const eobj = express();
port = 5100;

eobj.listen(port,function(req,res){
    console.log("Server Started successfully...");
});

//Handling  cors cross origin resource sharing
eobj.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",
        "http://localhost:4200"
    );

    res.header("Access-Control-Allow-Headders",
        "Origin,X-Requested-With,Content-Type,Accept"
    );

    next();
})

eobj.get('/',MyGet);

function MyGet(req,res){
    res.send("MY server is ON");
}

eobj.get('/getBatches',myGetBatches);

function myGetBatches(req,res){
    res.json({"batch":"Angular","Fees":20000,"Duration":"3 months"});
}
