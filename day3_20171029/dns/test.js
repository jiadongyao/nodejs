const dns = require('dns');
// DNS Domain Name Server

dns.resolve('github.com', (err, ip) => {
    console.log(ip);
});

dns.lookup('github.com', (err, ip, family) => {
    console.log(`ip: ${ip}; family: ${family}`); // IPV4 IPV6 a.b.c.d
});

dns.reverse('192.30.255.113', (err, hostname) => {
    console.log(hostname);
});