const os = require("os");

const {username} = os.userInfo();
const cpus = os.cpus().length;
const freemem = os.freemem();

console.log(username);
console.log(cpus);