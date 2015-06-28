var fs = require('fs');
var xs = fs.readFileSync('../fixture/small.txt','utf8').split('\n').filter(function(v){return v !== ''});
var satoshinizer = require('..');

var satoshis = xs.map(function(x){return satoshinizer.fromNumber(x)})
var w = satoshis.map(function(x){return satoshinizer.toNumber(x)})
var s = satoshis.map(function(x){return satoshinizer.toString(x)})
var s2 = satoshis.map(function(x){return satoshinizer.toHuman(x,0,satoshinizer.ROUND_DOWN)})
var s3 = satoshis.map(function(x){return satoshinizer.toHuman(x,0,satoshinizer.ROUND_UP)})

console.log(satoshis)
console.log(w)
console.log(s)
console.log(s2)
console.log(s3)



