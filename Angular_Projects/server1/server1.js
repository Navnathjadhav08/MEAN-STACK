const express = require('express');

eobj = express();

const port = 5100;



eobj.listen(port,function welcomeMsg(){
    console.log("Server is Running");
});