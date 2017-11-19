const http = require('http');

let ip = '166.111.12.34'
let options = {
    host:'ip.taobao.com',
    path:'/service/getIpInfo.php?ip='+ip,
};
let request = http.request(options, (res) => {
    res.on('data', (buffer) => {
        console.log(JSON.parse(buffer.toString()));
    })
});

request.end();