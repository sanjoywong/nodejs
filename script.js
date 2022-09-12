console.log("Node.js");
//console.log("Le javascript côté server");

//process.exit(1);
//process.exitCode = 1;

const repl = require("repl");
//const local = repl.start("Demarrage de la console");
const local = repl.start("$");

local.on("exit",()=>{
    console.log("Sortie de la console !");
    process.exit();
});