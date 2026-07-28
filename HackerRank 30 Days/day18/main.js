'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', input => {
    inputString += input;
});

process.stdin.on('end', () => {
    const s = inputString.trim();
    const obj = new Solution();

    for (const ch of s) {
        obj.pushCharacter(ch);
        obj.enqueueCharacter(ch);
    }

    let isPalindrome = true;

    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (obj.popCharacter() !== obj.dequeueCharacter()) {
            isPalindrome = false;
            break;
        }
    }

    console.log(
        isPalindrome
            ? `The word, ${s}, is a palindrome.`
            : `The word, ${s}, is not a palindrome.`
    );
});

class Solution {
    constructor() {
        this.stack = [];
        this.queue = [];
    }

    pushCharacter(ch) {
        this.stack.push(ch);
    }

    enqueueCharacter(ch) {
        this.queue.push(ch);
    }

    popCharacter() {
        return this.stack.pop();
    }

    dequeueCharacter() {
        return this.queue.shift();
    }
}