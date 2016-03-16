var assert = require('assert');
var satoshinizer = require('..');
describe('satoshinizer', function() {
    it('simple', function() {
        var n = satoshinizer.fromNumber(1.00000001);
        assert(n === 100000001);
        var x = satoshinizer.toNumber(n);
        assert(x === 1.00000001);
        var s = satoshinizer.toString(n);
        assert(s === '1.00000001');
        var d = satoshinizer.toHuman(n, 6, satoshinizer.ROUND_DOWN);
        assert(d === '1.000000');
        var u = satoshinizer.toHuman(n, 6, satoshinizer.ROUND_UP);
        assert(u === '1.000001');
    });
    it('fromnumber', function() {
        // 123.00000000000001
        var n = satoshinizer.fromNumber(0.00000123);
        assert(n === 123);
        var x = satoshinizer.toNumber(n);
        assert(x === 0.00000123);
    });
    it('tonumber', function() {
        // 0.9999999900000001
        var n = satoshinizer.fromNumber(0.99999999);
        assert(n === 99999999);
        var x = satoshinizer.toNumber(n);
        assert(x === 0.99999999);
    });
    it('fail', function(done) {
        try{
            var n = satoshinizer.fromNumber(99999999.99999991);
            done(new Error("bignumber spec change"));
        }catch(e){
            done();
        }
    });
    it('other', function() {
        var x = satoshinizer.fromNumberToString(1.00000001);
        assert(x === '100000001');
        var b = satoshinizer.toBigNumber(1.00000001);
        var c = satoshinizer.ceil(100000001);
        assert(c === 200000000);
        var f = satoshinizer.floor(100000001);
        assert(f === 100000000);
        var r = satoshinizer.round(100000001);
        assert(r === 100000000);
    });

});
