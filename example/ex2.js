var xs = [
    0.1,
    0.2,
    0.3,
    0.4,
    0.5,
    0.6,
    0.7,
    0.8,
    0.9,
    0.01,
    1,
    10,
    100,
    1000,
    10000,
    100000,
    1000000,
    9999999,
    9999999.99999999,
    255.5,
    0.12345678,
    0.01234567,
    0.00123456,
    0.00012345,
    0.00001234,
    0.00000123,
    0.00000012,
    0.00000001
];

var satoshinizer = require('..');

var satoshis = xs.map(function(x){return satoshinizer.fromNumber(x)})
var w1 = satoshis.map(function(x){return satoshinizer.round(x)})
var w2 = satoshis.map(function(x){return satoshinizer.floor(x)})
var w3 = satoshis.map(function(x){return satoshinizer.ceil(x)})
console.log(w1)
console.log(w2)
console.log(w3)
