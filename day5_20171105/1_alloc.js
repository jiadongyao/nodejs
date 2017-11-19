let buff1 = Buffer.alloc(16); // allocate
console.log(buff1);

let buff2 = Buffer.from([0x41, 0x61]); // A 65 a 97
console.log(buff2.toString());

let buff3 = Buffer.from('aA');
console.log(buff3.toString());

let buff4 = Buffer.from('一', 'utf8');
console.log(buff4.toString());

let buff5 = Buffer.allocUnsafe(1024);
console.log(buff5);

let buff6 = Buffer.from('阿斯蒂芬', 'utf8');
console.log(buff6.toString('base64')); // md5

// 16 bytes
// 1byte = 8bits = 00000000~11111111
// 1bit = 0,1
// hex 0-9 a, b, c, d, e, f