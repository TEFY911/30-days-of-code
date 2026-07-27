function processData(input) {
    const s = input.trim();

    try {
        const value = Number(s);
        if (!Number.isInteger(value)) {
            throw new Error("Bad String");
        }
        console.log(value);
    } catch (error) {
        console.log("Bad String");
    }
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
