const p = require("prompt-sync")();

let disKm = Number(p("Entrer une distance en km pour la convertir en miles : "));
let disMiles = disKm/1.609;

console.log("Le résultat est : "+ disMiles.toFixed(2));