const p = require("prompt-sync")()

let base = Number(p("Donner la base : "));
let exposant = Number(p("Donner l'exposant : "));
let i = 0
let result = 1
while(i<exposant){
    i++
    result = base * result
}
console.log(`${base} ^ ${exposant} = ${result}`)