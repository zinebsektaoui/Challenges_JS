const p = require('prompt-sync')();

let nbr = p("Entrer un nombre de trois chiffres : ");
console.log(nbr.split('').reverse().join(''));