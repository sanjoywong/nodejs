//creer une variable NAME avec une valeur
//Afficher cette variable avec console.log

//const NAME=" Shengzhuo ";

//console.log(NAME);

require('dotenv').config();

const nom = process.env.NAME;
console.log(nom);
//process.exitCode=1;
