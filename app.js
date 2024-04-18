const os = require('os');

let totalMem = os.totalmem();
let freeMem = os.freemem();

console.log('total mem: '+totalMem);

console.log(`total mem: ${totalMem}`);
console.log(`total mem: ${freeMem}`);

