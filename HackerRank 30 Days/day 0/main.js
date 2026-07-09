function processData(inputString) {
    console.log("Hello, World.");
    console.log(inputString);
}

process.stdin.resume();
process.stdin.setEncoding("utf8");

let inputString = "";

process.stdin.on("data", function(input) {
    inputString += input;
});

process.stdin.on("end", function() {
    processData(inputString.trim());
});