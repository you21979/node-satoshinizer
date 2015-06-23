var BigNumber = require("bignumber.js");

var BN1e8 = new BigNumber("1e8");
var BN1e_8 = new BigNumber("1e-8");

var fromNumber = exports.fromNumber = function(x){
    return (new BigNumber(x.toString()))
        .mul(BN1e8)
        .toNumber()
        ;
}

var toNumber = exports.toNumber = function(x){
    return (new BigNumber(x.toString()))
        .mul(BN1e_8)
        .toNumber()
        ;
}

exports.ROUND_UP = BigNumber.ROUND_UP;
exports.ROUND_DOWN = BigNumber.ROUND_DOWN;
exports.ROUND_FLOOR = BigNumber.ROUND_FLOOR;

var toHuman = exports.toHuman = function(x, digit, round){
    if(digit === undefined) digit = 8;
    if(round === undefined) round = exports.ROUND_UP;
    return (new BigNumber(x.toString()))
        .mul(BN1e_8)
        .round(digit, round)
        .toFormat(digit)
        ;
}


