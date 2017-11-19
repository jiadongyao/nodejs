let start = process.uptime()
for(let i = 0; i < 10000; i++) {
    console.log(i);
}
console.log(process.uptime() - start);