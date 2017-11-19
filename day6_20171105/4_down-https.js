const https = require('https');
const fs = require('fs');

let options = {
    host: 'nodejs.org',
    path: '/static/images/logo.svg'
};
let request = https.request(options, (res) => {
    console.log(res.statusCode);
    let data = '';
    res.setEncoding('binary');
    res.on('data', (buffer) => {
        data += buffer;
});
    res.on('end', () => {
        fs.writeFile(__dirname + '/nodejs.svg', data, 'binary', (err) => {
            if (err) throw err;
            console.log("downloaded...");
        })
    })
});

request.end();