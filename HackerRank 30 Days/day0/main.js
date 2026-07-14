function processData(inputString) {
    console.log("Hello, World.");
    console.log(inputString);
}

const inputString = require("fs").readFileSync(0, "utf8").trim();
processData(inputString);
