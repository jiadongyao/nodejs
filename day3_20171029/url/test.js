const url = require('url');

let urlString = 'http://tester:test@github.com:81/a/b/c/index.html?name=tom&gender=M#test';

console.log(url.parse(urlString));
console.log(url.parse(urlString, true));

console.log(url.resolve("http://example.com/a/b/c/index.html", '/css/style.css'));
