class Person {
    constructor(firstName, lastName, idNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
    }

    printPerson() {
        console.log(`Name: ${this.lastName}, ${this.firstName}`);
        console.log(`ID: ${this.idNumber}`);
    }
}

class Student extends Person {
    constructor(firstName, lastName, idNumber, scores) {
        super(firstName, lastName, idNumber);
        this.scores = scores;
    }

    calculate() {
        const total = this.scores.reduce((sum, score) => sum + score, 0);
        const average = total / this.scores.length;

        if (average >= 90) return "O";
        if (average >= 80) return "E";
        if (average >= 70) return "A";
        if (average >= 55) return "P";
        if (average >= 40) return "D";
        return "T";
    }
}

function main() {
    const input = require("fs").readFileSync(0, "utf8").trim().split(/\r?\n/);
    const [firstName, lastName, idNumber] = input[0].split(" ");
    const scores = input[2].split(" ").map(Number);

    const student = new Student(firstName, lastName, idNumber, scores);
    student.printPerson();
    console.log(`Grade: ${student.calculate()}`);
}

main();
