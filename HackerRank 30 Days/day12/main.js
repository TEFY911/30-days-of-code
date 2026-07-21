class Person {
    constructor(firstName, lastName, idNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
    }
}

class Student extends Person {
    constructor(firstName, lastName, idNumber, scores) {
        super(firstName, lastName, idNumber);
        this.scores = scores;
    }

    calculate() {
        const average = this.scores.reduce((sum, value) => sum + value, 0) / this.scores.length;
        if (average >= 90) return 'O';
        if (average >= 80) return 'E';
        if (average >= 70) return 'A';
        if (average >= 55) return 'P';
        return 'T';
    }
}

function main() {
    const fs = require('fs');
    const lines = fs.readFileSync(0, 'utf8').trim().split(/\n/);
    const firstName = lines[0].trim();
    const lastName = lines[1].trim();
    const idNumber = lines[2].trim();
    const scores = lines[3].split(/\s+/).map(Number);

    const student = new Student(firstName, lastName, idNumber, scores);
    console.log(`${student.firstName} ${student.lastName}`);
    console.log(student.idNumber);
    console.log(student.calculate());
}

main();
