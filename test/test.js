var assert = require('assert');
var satoshinizer = require('..');
describe('satoshinizer', function() {
    it('simple', function() {
        // 123.00000000000001
        var n = satoshinizer.fromNumber(0.00000123);
        assert(n === 123);
        var x = satoshinizer.toNumber(n);
        assert(x === 0.00000123);
        var s = satoshinizer.toString(n);
        assert(s === '0.00000123');
        var h = satoshinizer.toHuman(n,8,satoshinizer.ROUND_DOWN);
        assert(h === '0.00000123');
    });
});
