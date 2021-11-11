const express = require("express");

const app = express();

app.use("/users", (req, res, next)=>{
    console.log("In the middeware");
    res.send('<h1>From "/users"</h1>');
});

app.use("/", (req, res, next)=>{
    console.log("In the 2nd middeware");
    res.send('<h1>From "/"</h1>');
});

app.listen(3000)