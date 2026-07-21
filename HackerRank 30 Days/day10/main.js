function main() {
    const fs = require('fs');
    const n = parseInt(fs.readFileSync(0, 'utf8').trim(), 10);
    const binary = n.toString(2);

    let count = 0;
    let maxCount = 0;

    for (const bit of binary) {
        if (bit === '1') {
            count += 1;
            maxCount = Math.max(maxCount, count);
        } else {
            count = 0;
        }
    }

    console.log(maxCount);
}

main();
