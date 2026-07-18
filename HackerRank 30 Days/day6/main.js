function main() {
    const input = require("fs").readFileSync(0, "utf8").trim().split(/\r?\n/);
    const t = parseInt(input[0], 10);
    const result = [];

    for (let i = 1; i <= t; i++) {
        const s = input[i] ?? "";
        let pares = "";
        let impares = "";

        for (let j = 0; j < s.length; j++) {
            if (j % 2 === 0) {
                pares += s[j];
            } else {
                impares += s[j];
            }
        }

        result.push(`${pares} ${impares}`);
    }

    console.log(result.join("\n"));
}

main();
