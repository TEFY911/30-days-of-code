class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Solution {
    insert(head, data) {
        const p = new Node(data);
        if (head === null) {
            head = p;
        } else {
            let current = head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = p;
        }
        return head;
    }

    display(head) {
        let current = head;
        while (current !== null) {
            process.stdout.write(current.data + ' ');
            current = current.next;
        }
    }
}

function processData(input) {
    const data = input.split('\n');
    const t = parseInt(data[0], 10);
    let head = null;
    const mylist = new Solution();

    for (let i = 1; i <= t; i++) {
        const value = parseInt(data[i], 10);
        head = mylist.insert(head, value);
    }

    mylist.display(head);
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
let _input = '';
process.stdin.on('data', function (input) {
    _input += input;
});
process.stdin.on('end', function () {
    processData(_input);
});
