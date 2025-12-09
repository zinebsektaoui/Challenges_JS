const p = require("prompt-sync")()

let nbr = Number(p("Donner un nombre : "))

for(let i=2; i<=nbr; i++){
    console.log(i)
}