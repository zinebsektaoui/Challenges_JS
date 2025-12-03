const p = require('prompt-sync')();

let rayon = Number(p('Donner le rayon d\'un cercle : '));

const circonférence = 2*Math.PI*rayon;

console.log('La circonférence de la cercle est : '+ circonférence);