const p = require("prompt-sync")();

let nbr = Number(p("Entrer un nombre : "));
for(let i=0; i<=10; i++){
    console.log(nbr + " * "+ i + " = "+ nbr*i );
}