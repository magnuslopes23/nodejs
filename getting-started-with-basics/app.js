// import or require the core http moudle form js/node
const http = require('http');

// create a server using the http module which has access to createServer method.
//this returns a function and we store it in a variabe called server
const server = http.createServer((req, res)=>{
    console.log(res);
});

// here we use the server method and listen to incoming requests.
server.listen(3000);