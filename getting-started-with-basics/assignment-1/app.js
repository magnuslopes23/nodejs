const http = require('http');

const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;
    if( url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username" placehoder="username"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body><ul><li>user 1</li><li>user 2</li></ul></body>')
        res.write('</html>');
        return res.end();
    }
    if( url ==='/create-user' && method === 'POST'){
        const body = [];
        req.on("data", (chunk)=>{
            body.push(chunk);
        });
        req.on('end', ()=>{
            const bodyParser = Buffer.concat(body).toString();
            const username = bodyParser.split('=')[1];
            console.log(username);
            
        })
        res.statusCode =302;
        res.setHeader('Location', '/');
        res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>Assignment1</h1></body>')
    res.write('</html>');
    res.end();
})

server.listen(3000);