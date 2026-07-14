function main() {
    const fs = require("fs");
    const inputLines = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

    const i = 4;
    const d = 4.0;
    const s = "HackerRank ";
    const inputInt = parseInt(inputLines[0], 10);
    const inputDouble = parseFloat(inputLines[1]);
    const inputString = inputLines[2] || "";

    console.log(i + inputInt);
    console.log((d + inputDouble).toFixed(1));
    console.log(s + inputString);
}

main();