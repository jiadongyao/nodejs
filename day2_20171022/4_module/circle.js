const PI = 3.14;

function area(radius) {
    return PI * radius * radius;
}

function perimeter(radius) {
    return PI * radius * 2;
}

module.exports.test = area; // key = value
module.exports.perimeter = perimeter;

// console.log(area(1.2));
// console.log(perimeter(1.2));
