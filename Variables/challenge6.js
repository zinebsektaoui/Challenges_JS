const p = require('prompt-sync')();

let distance = Number(p('Entrer la distance : '));
let vitesse = Number(p('Entrer la vitesse : '));

let temps = parseInt(distance/vitesse);

console.log('Le temps du trajet est : '+ temps);