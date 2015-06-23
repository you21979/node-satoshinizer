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

var toHuman = exports.toHuman = function(x, digit){
    if(digit === undefined) digit = 8;
    return (new BigNumber(x.toString()))
        .mul(BN1e_8)
        .round(digit, BigNumber.ROUND_DOWN)
        .toFormat(digit)
        ;
}


