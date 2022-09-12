//Affichage du nom du repertoire
require('dotenv').config();
const path = require('path');
const {resolve} = require('path');
//const path=require(path);
console.log(__dirname);
console.log(resolve('./'));
console.log(process.cwd());
console.log(process.argv);
//Affichage du nom fichier
console.log(__filename);
//Affichage de m'extension du fichier
console.log(path.dirname("c:\\nodejs\\path.js" ));
console.log(__filename.split(".")[1]);
console.log("affichier le nom du fichier")
console.log(path.basename("c:\\nodejs\\path.js"));
console.log(path.basename("c:\\nodejs\\path.js",".js"));
//console.log(minimist());

console.log("affichier l'extension du fichier");
console.log(path.extname("c:\\nodejs\\path.js"));