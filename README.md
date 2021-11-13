# nodejs
learning nodejs and documenting for future use

for node to starte a server we ahevto import the http core module

const http = require(''http');

then on the http we get the create server method which starts our server

http.createServer() createserver take a callback function as a which takes 2 more parameters request, response.

http.createServer((req, res) =>{

})

inside the create server we can write our usiness logic like listening to get or post requests

now we can store this into a varaible

const server = http.createServer((req, res) =>{

})

and then on the server we can define few paramaters like port no n all

server.listen(3000);

we can use req and res to listen to req and give res to back 

for eg to an incoming req /

we can write to rowser a reply like 

if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html)
    res.write('<h1>from the "/" </h1>');
    res.end()
}

the setHeader sets the header to text html

writs msg to web page

end methods ends the connection 

alternative to all this is to use express 
express is a framework for node js which makes use of middleware and makes our life simple and write short code
we need to install the express js package 
once we install express

const express = require('express');

then we can pass express as a func to app 
 const app = express();
 app.use()

 use is a function or a middleware 
 it is used to funnel our code 
 split our code into multiple function
 our req can pass thought diffrent middle and then we can decide when to send resposne use is a middle ware 
 get post delete are some more middleware

 use takes a callback function with 3 arguments req, res, next
 next is function which helps us to got to next middleware,
 we can also specify path for which that particular middleware should be exected
 for eg for /add-productus this particular middleware will be executed.
 app.use("/add-products", (req, res, next)=>{
    res.send('<form action="/products" method="POST"><input type="text" name="tite"><button type="submit">add product</button></form>');
 });
 ## insted of res.write we use res.send
 
 now we can make use of body-parser to parse and get output from the buffer 
 
 in res we get the body where we can get the data from the browser

 const bodyParser = require("body-parser");
 app.use(bodyParser.urlencoded({extended:false}));

 app.post("/products", (req, res, next)=>{
    ## console.log(req.body);
    res.redirect("/");
});

