const p = require("prompt-sync")()

let nb = Number(p("Donner le nombre de lignes : "))
for(let i=1; i<=nb; i++){
    let lines = "*".repeat(i*2-1)
    let spaces = " ".repeat(nb-i)
    console.log(spaces, lines)
}