function main() {
    const fs = require('fs');
    const values = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
    const matrix = [];

    for (let i = 0; i < 6; i++) {
        matrix.push(values.slice(i * 6, i * 6 + 6));
    }

    let maxSum = -63;

    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            const hourglass =
                matrix[row][col] + matrix[row][col + 1] + matrix[row][col + 2] +
                matrix[row + 1][col + 1] +
                matrix[row + 2][col] + matrix[row + 2][col + 1] + matrix[row + 2][col + 2];

            maxSum = Math.max(maxSum, hourglass);
        }
    }

    console.log(maxSum);
}

main();
