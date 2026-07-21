'use strict';

const fs = require('fs');

const n = parseInt(fs.readFileSync(0, 'utf8').trim());

for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}