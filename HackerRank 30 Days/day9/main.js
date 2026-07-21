function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    console.log(factorial(n));
}