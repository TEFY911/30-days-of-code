function solve(mealCost, tipPercent, taxPercent) {
    const tip = mealCost * (tipPercent / 100);
    const tax = mealCost * (taxPercent / 100);
    const totalCost = mealCost + tip + tax;

    console.log(Math.round(totalCost));
}

const inputLines = require("fs").readFileSync(0, "utf8").trim().split(/\r?\n/);
const mealCost = parseFloat(inputLines[0]);
const tipPercent = parseInt(inputLines[1], 10);
const taxPercent = parseInt(inputLines[2], 10);

solve(mealCost, tipPercent, taxPercent);
