const p = require('prompt-sync')();

let nb1 = Number(p("Nombre 1 :"));
let nb2 = Number(p("Nombre 2 :"));

console.log(Math.max(nb1, nb2));