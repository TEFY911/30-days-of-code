class Difference {
    constructor(a) {
        this.elements = a;
    }

    computeDifference() {
        let maximumDifference = 0;
        for (let i = 0; i < this.elements.length; i++) {
            for (let j = i + 1; j < this.elements.length; j++) {
                const diff = Math.abs(this.elements[i] - this.elements[j]);
                if (diff > maximumDifference) {
                    maximumDifference = diff;
                }
            }
        }
        this.maximumDifference = maximumDifference;
    }
}

const n = parseInt(readLine(), 10);
const a = readLine().split(' ').map(Number);

const d = new Difference(a);
d.computeDifference();

console.log(d.maximumDifference);
