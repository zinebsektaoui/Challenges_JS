const prompt = require('prompt-sync')();

let tempC = prompt('Taper une température : ');
let tempF = (tempC * 1.8) + 32;

console.log('la temperature que vous avez entrer en Farhenheit est : ' + tempF);