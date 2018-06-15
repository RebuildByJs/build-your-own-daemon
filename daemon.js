const spawn = require('child_process').spawn;
const process = require('process');

const p = spawn('node', ['example/a.js'], {
  detached: true
});
console.log(process.pid, p.pid);
process.exit(0);