'use strict';

const fs = require('fs');

const n = parseInt(fs.readFileSync(0, 'utf8').trim());

const binary = n.toString(2);

let maxOnes = 0;
let currentOnes = 0;

for (const digit of binary) {
    if (digit === '1') {
        currentOnes++;
        maxOnes = Math.max(maxOnes, currentOnes);
    } else {
        currentOnes = 0;
    }
}

console.log(maxOnes);