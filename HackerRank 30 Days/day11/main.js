'use strict';

const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const arr = [];

// Leer la matriz 6x6
for (let i = 0; i < 6; i++) {
    arr.push(input[i].trim().split(/\s+/).map(Number));
}

let maxSum = -Infinity;

// Recorrer todas las posiciones posibles
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        const hourglassSum =
            arr[i][j] +
            arr[i][j + 1] +
            arr[i][j + 2] +
            arr[i + 1][j + 1] +
            arr[i + 2][j] +
            arr[i + 2][j + 1] +
            arr[i + 2][j + 2];

        maxSum = Math.max(maxSum, hourglassSum);
    }
}

console.log(maxSum);