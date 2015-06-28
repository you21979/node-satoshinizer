var BigNumber = require("bignumber.js");

var BN1e8 = new BigNumber("1e8");
var BN1e_8 = new BigNumber("1e-8");

var fromNumber = exports.fromNumber = function(n){
    return (new BigNumber(n))
        .mul(BN1e8)
        .toNumber()
        ;
}

var toNumber = exports.toNumber = function(satoshi){
    return (new BigNumber(satoshi))
        .mul(BN1e_8)
        .toNumber()
        ;
}

var toString = exports.toString = function(satoshi){
    return (new BigNumber(satoshi))
        .mul(BN1e_8)
        .toString(10)
}

var ceil = exports.ceil = function(satoshi, digit){
    if(digit === undefined) digit = 8;
    var w1 = Math.pow(10, -digit);
    var w2 = Math.pow(10, digit);
    return Math.ceil(satoshi * w1) * w2;
}

var floor = exports.floor = function(satoshi, digit){
    if(digit === undefined) digit = 8;
    var w1 = Math.pow(10, -digit);
    var w2 = Math.pow(10, digit);
    return Math.floor(satoshi * w1) * w2;
}

var round = exports.round = function(satoshi, digit){
    if(digit === undefined) digit = 8;
    var w1 = Math.pow(10, -digit);
    var w2 = Math.pow(10, digit);
    return Math.round(satoshi * w1) * w2;
}

exports.ROUND_UP = BigNumber.ROUND_UP;
exports.ROUND_DOWN = BigNumber.ROUND_DOWN;
exports.ROUND_FLOOR = BigNumber.ROUND_FLOOR;
exports.ROUND_CEIL = BigNumber.ROUND_CEIL;

var toHuman = exports.toHuman = function(n, digit, round){
    if(digit === undefined) digit = 8;
    if(round === undefined) round = exports.ROUND_UP;
    return (new BigNumber(n.toString()))
        .mul(BN1e_8)
        .round(digit, round)
        .toFormat(digit)
        ;
}

