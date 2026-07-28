'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

class Calculator {
    power(n, p) {
        if (n < 0 || p < 0) {
            throw new Error("n and p should be non-negative");
        }

        return n ** p;
    }
}

function main() {
    const myCalculator = new Calculator();
    const T = parseInt(readLine());

    for (let i = 0; i < T; i++) {
        const [n, p] = readLine().split(' ').map(Number);

        try {
            console.log(myCalculator.power(n, p));
        } catch (e) {
            console.log(e.message);
        }
    }
}