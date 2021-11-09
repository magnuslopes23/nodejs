// import or require the core http moudle form js/node
const http = require('http');
const fs = require('fs');

// create a server using the http module which has access to createServer method.
//this returns a function and we store it in a variabe called server
const server = http.createServer((req, res)=>{

    console.log(req.url,req.headers);
    const url= req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method ==="POST"){
        const body = [];
        req.on('data', (chunk) =>{
            body.push(chunk);
        })
        req.on('end', ()=>{
            const bodyParsed = Buffer.concat(body).toString();
            const message = bodyParsed.split('=')[1];
            fs.writeFileSync('message.txt', message);
        })
        res.statusCode =302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>My first app</h1></body>')
    res.write('</html>');
    res.end();
});

// here we use the server method and listen to incoming requests.
server.listen(3000);