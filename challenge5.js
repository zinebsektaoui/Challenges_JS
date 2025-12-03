const p = require('prompt-sync')();

let a = Number(p('Entrer la valeur de a : '));
let b = Number(p('Entrer la valeur de b : '));
let c = Number(p('Entrer la valeur de c : '));
let d = Number(p('Entrer la valeur de d : '));

const somme = a+b+c+d;
console.log('La somme est : ' + somme);

const moyenne = somme/4;
console.log('La moyenne est : ' + moyenne);
