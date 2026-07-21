'use strict';

const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

let index = 0;

const n = parseInt(input[index++]);

const phoneBook = new Map();

// Guardar los nombres y números
for (let i = 0; i < n; i++) {
    const name = input[index++];
    const phone = input[index++];

    phoneBook.set(name, phone);
}

// Procesar las consultas restantes
while (index < input.length) {
    const name = input[index++];

    if (phoneBook.has(name)) {
        console.log(`${name}=${phoneBook.get(name)}`);
    } else {
        console.log("Not found");
    }
}