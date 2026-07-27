function processData(input) {
    const lines = input.trim().split(/\s+/);
    const t = parseInt(lines[0], 10);
    const output = [];

    class Calculator {
        power(n, p) {
            if (n < 0 || p < 0) {
                throw new Error("n and p should be non-negative");
            }
            return Math.pow(n, p);
        }
    }

    const calculator = new Calculator();
    let index = 1;

    for (let i = 0; i < t; i++) {
        const n = parseInt(lines[index], 10);
        const p = parseInt(lines[index + 1], 10);
        index += 2;

        try {
            output.push(String(calculator.power(n, p)));
        } catch (error) {
            output.push(error.message);
        }
    }

    console.log(output.join("\n"));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});
process.stdin.on("end", function () {
    processData(_input);
});
