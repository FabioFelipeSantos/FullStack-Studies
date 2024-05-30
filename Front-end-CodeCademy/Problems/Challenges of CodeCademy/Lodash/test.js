const { CLIENT_RENEG_LIMIT } = require('tls');
const _ = require('./_.js');

const n = 18;

const array = [];

for (let i = 0; i < n; i++) {
    array.push(Math.ceil(Math.random() * n));
}

console.log(array);
console.log(_.chunk(array, 12));