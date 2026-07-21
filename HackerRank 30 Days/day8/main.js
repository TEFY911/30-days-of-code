function processData(input) {
    const lines = input.trim().split('\n');
    
    const n = parseInt(lines[0]);
    const phoneBook = new Map();

    // Guardar los contactos
    for (let i = 1; i <= n; i++) {
        const [name, number] = lines[i].split(' ');
        phoneBook.set(name, number);
    }

    // Procesar las consultas
    for (let i = n + 1; i < lines.length; i++) {
        const query = lines[i].trim();

        if (phoneBook.has(query)) {
            console.log(query + "=" + phoneBook.get(query));
        } else {
            console.log("Not found");
        }
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