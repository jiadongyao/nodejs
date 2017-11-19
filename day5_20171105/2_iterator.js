let buff1 = Buffer.from([1, 2, 3]);

for(let i = 0; i< buff1.length; i++) {
    console.log(buff1[i]);
}

for (let key of buff1.keys()) {
    console.log(`${key} - ${buff1[key]}`);
}

for (let value of buff1.values()) {
    console.log(value);
}

for (let pair of buff1.entries()) { // entry
    console.log(pair);
}
