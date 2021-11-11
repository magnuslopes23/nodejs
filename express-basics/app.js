const express = require("express");

const app = express();

app.use((req, res, next)=>{
    console.log("In the middeware");
    next();
});

app.use((req, res, next)=>{
    console.log("In the 2nd middeware");
    res.send('<h1>From express js</h1>')
});

app.listen(3000)