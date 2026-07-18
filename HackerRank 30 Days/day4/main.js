class Person {
    constructor(initialAge) {
        if (initialAge < 0) {
            console.log("Age is not valid, setting age to 0.");
            this.age = 0;
        } else {
            this.age = initialAge;
        }
    }

    amIOld() {
        if (this.age < 13) {
            console.log("You are young.");
        } else if (this.age < 18) {
            console.log("You are a teenager.");
        } else {
            console.log("You are old.");
        }
    }

    yearPasses() {
        this.age += 1;
    }
}

function processData(input) {
    const lines = input.trim().split(/\r?\n/);
    let index = 0;
    const t = parseInt(lines[index++], 10);

    for (let i = 0; i < t; i += 1) {
        const age = parseInt(lines[index++], 10);
        const person = new Person(age);
        person.amIOld();
        for (let j = 0; j < 3; j += 1) {
            person.yearPasses();
        }
        person.amIOld();
    }
}

const inputString = require("fs").readFileSync(0, "utf8");
processData(inputString);
