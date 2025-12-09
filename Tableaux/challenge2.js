const p = require("prompt-sync")()
const lodash = require("lodash")

let array = [30, 20, 21, 99, 101, 23, 0, 98, 14]

let somme = lodash.sum(array)
let avg = somme/10;

console.log("Somme : " + somme + "| Moyenne : " + avg)