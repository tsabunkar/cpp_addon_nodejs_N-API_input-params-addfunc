const testAddon = require('./build/Release/testaddon.node');

console.log('addon', testAddon);
// console.log('addon', testAddon.hello());

console.log('hello ', testAddon.hello());
console.log('add ', testAddon.add(15, 10));

module.exports = testAddon;