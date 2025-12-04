const p = require('prompt-sync')();

let nbr = Number(p("Entrer un nombre : "));
if (nbr%2 === 0) {
    console.log("Nombre pair");
}else{
    console.log("Nombre impair");
}