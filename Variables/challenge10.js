const p = require("prompt-sync")();

let euro = Number(p("Entrer une valeur en Euro pour la convertir en Dirham : "));
let dirham = euro*10.61;

console.log("Le résultat est : "+ dirham.toFixed(2));