'use strict';

class Person {
    constructor(initialAge) {
        if (initialAge < 0) {
            this.age = 0;
            console.log("Age is not valid, setting age to 0.");
        } else {
            this.age = initialAge;
        }
    }

    amIOld() {
        if (this.age < 13) {
            console.log("You are young.");
        } else if (this.age >= 13 && this.age < 18) {
            console.log("You are a teenager.");
        } else {
            console.log("You are old.");
        }
    }

    yearPasses() {
        this.age += 1;
    }
}


// Código principal
const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let index = 0;
const T = input[index++];

for (let i = 0; i < T; i++) {
    const age = input[index++];

    const p = new Person(age);

    p.amIOld();

    for (let j = 0; j < 3; j++) {
        p.yearPasses();
    }

    p.amIOld();

    console.log();
}