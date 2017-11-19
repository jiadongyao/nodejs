const http = require('http');
const fs = require('fs');

let options = {
    host: 'img.jandan.net',
    path: '/news/2017/09/cf114fae2a31b13bac5a13c5bce745df.jpg',
    headers: {'User-Agent':'Mozilla/5.0'}
};
let request = http.request(options, (res) => {
    console.log(res.statusCode);
    let data = '';
    res.setEncoding('binary');
    res.on('data', (buffer) => {
        data += buffer;
});
    res.on('end', () => {
        fs.writeFile(__dirname + '/jiandan.jpg', data, 'binary', (err) => {
            if (err) throw err;
            console.log("downloaded...");
        })
    })
});

request.end();