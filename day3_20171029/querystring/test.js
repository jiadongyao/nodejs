const querystring = require('querystring');

let qs = 'q=nodejs+readline+terminal&oq=nodejs+readline+terminal&aqs=chrome..69i57.8263j0j7&sourceid=chrome&ie=UTF-8';

console.log(querystring.parse(qs));

console.log(querystring.stringify(querystring.parse(qs)));