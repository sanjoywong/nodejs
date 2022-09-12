//console.log(process.argv);

 const val=process.argv;

 /* const iterator = val.values();

for (const value of iterator) {
  console.log(value);
} */

//console.log("le premier value")
//console.log(iterator[2]);
// console.log(val.slice(3)[0].split("=")[1]);

const minimist = require("minimist");

const argNew = minimist(process.argv.slice(2));

//console.log(argNew.name);
console.log(argNew.prenom);