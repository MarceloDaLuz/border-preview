const http = require('http');
const fs = require('fs');

var server = http.createServer((req, res)=>{
    console.log(`request was made ${req.url}`);
    if(req.url === '/index.css'){
        fs.readFile(__dirname + '/index.css', (err, css) => {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(css);
            res.end();
        });
    }

    if(req.url === '/'){
        fs.readFile(__dirname + '/index.html', (err, html) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(html);
            res.end();
        });
    }
    
    if(req.url === "/favicon.ico"){
        fs.readFile(__dirname + '/images/favicon.ico', (err, icon) => {
            res.writeHead(200, {'Content-Type': 'image/x-icon'});
            res.write(icon);
            res.end();
        });
    }
});

server.listen(3000,'127.0.0.1');
console.log('Server running on : 127.0.0.1:3000');