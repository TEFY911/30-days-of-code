'use strict';

const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
    const S = input[i].trim();

    let even = "";
    let odd = "";

    for (let j = 0; j < S.length; j++) {
        if (j % 2 === 0) {
            even += S[j];
        } else {
            odd += S[j];
        }
    }

    console.log(even + " " + odd);
}