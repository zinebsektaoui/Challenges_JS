const p = require("prompt-sync")()

let nb = p("Donner un nombre : ")
let inverse = nb.split("").reverse().join("");
console.log("Son inverse est : "+ inverse)