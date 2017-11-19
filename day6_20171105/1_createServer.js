const http = require('http');

let server = http.createServer();

server.on('request', (req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);

    res.writeHead(200, 'OK', {'Content-Type':'text/html;charset=UTF-8'});
    res.write('test');
    res.end('测试');
});

server.listen('80');