const http = require("http");
require('dotenv').config();
//const port = 5000;
const port = process.env.PORT || 5000;

/* const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Conten-Type','text/html')
    //res.write
    res.end('<h1>Welcome to server node.js<h1>')
});

server.listen(port,()=>{
    console.log("Server lancé à l'adesse http://localhost:${port}")
}) */

const server = http.createServer();
server.listen(port,'localhost');

server.on('request',(request,response)=>{
    const content_type = 'text/html; charset=utf-8';
    response.setHeader('Content-Type',content_type);
    response.write(`<h1>Welcome to server node.js on port ${port}<h1>`);
    response.end;
});
