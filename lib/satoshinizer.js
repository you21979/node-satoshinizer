var BigNumber = require("bignumber.js");

var BN1e8 = new BigNumber("1e8");

var fromNumber = exports.fromNumber = function(x){
    return (new BigNumber(x.toString())).mul(BN1e8).toNumber()
}

var toNumber = exports.toNumber = function(x){
    return (new BigNumber(x.toString())).div(BN1e8).toNumber()
}

var toHuman = exports.toHuman = function(x){
    return (new BigNumber(x.toString())).div(BN1e8).toFormat(8)
}


