# node-satoshinizer

[![NPM](https://nodei.co/npm/satoshinizer.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/satoshinizer)  
[![Build Status](https://secure.travis-ci.org/you21979/node-satoshinizer.png?branch=master)](https://travis-ci.org/you21979/node-satoshinizer)
[![Coverage Status](https://coveralls.io/repos/github/you21979/node-satoshinizer/badge.svg?branch=master)](https://coveralls.io/github/you21979/node-satoshinizer?branch=master)

float to satoshi

## install

```
npm install satoshinizer
```

## example

```
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
    0.12345678,
    0.01234567,
    0.00123456,
    0.00012345,
    0.00001234,
    0.00000123,
    0.00000012,
    0.00000001
];

var satoshinizer = require('satoshinizer');

var satoshis = xs.map(function(x){return satoshinizer.fromNumber(x)})
var w = satoshis.map(function(x){return satoshinizer.toNumber(x)})
var s = satoshis.map(function(x){return satoshinizer.toHuman(x)})

console.log(satoshis)
console.log(w)
console.log(s)

```

### fromNumber

```
[ 10000000,
  20000000,
  30000000,
  40000000,
  50000000,
  60000000,
  70000000,
  80000000,
  90000000,
  1000000,
  100000000,
  1000000000,
  10000000000,
  100000000000,
  1000000000000,
  10000000000000,
  100000000000000,
  999999900000000,
  999999999999999,
  25550000000,
  12345678,
  1234567,
  123456,
  12345,
  1234,
  123,
  12,
  1 ]
```

### toNumber

```
[ 0.1,
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
  1.2e-7,
  1e-8 ]
```

### toHuman

```
[ '0.10000000',
  '0.20000000',
  '0.30000000',
  '0.40000000',
  '0.50000000',
  '0.60000000',
  '0.70000000',
  '0.80000000',
  '0.90000000',
  '0.01000000',
  '1.00000000',
  '10.00000000',
  '100.00000000',
  '1,000.00000000',
  '10,000.00000000',
  '100,000.00000000',
  '1,000,000.00000000',
  '9,999,999.00000000',
  '9,999,999.99999999',
  '255.5',
  '0.12345678',
  '0.01234567',
  '0.00123456',
  '0.00012345',
  '0.00001234',
  '0.00000123',
  '0.00000012',
  '0.00000001' ]
```

### toString

```
[ '0.1',
  '0.2',
  '0.3',
  '0.4',
  '0.5',
  '0.6',
  '0.7',
  '0.8',
  '0.9',
  '0.01',
  '1',
  '10',
  '100',
  '1000',
  '10000',
  '100000',
  '1000000',
  '9999999',
  '9999999.99999999',
  '255.5',
  '0.12345678',
  '0.01234567',
  '0.00123456',
  '0.00012345',
  '0.00001234',
  '0.00000123',
  '0.00000012',
  '0.00000001' ]
```

