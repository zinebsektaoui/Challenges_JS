const p = require("prompt-sync")()

let array = []
for(let i=1; i<=5; i++){
    let nb = Number(p("Donner un nombre : "))
    array.push(nb)
}
let inverse = array.reverse()
console.log(inverse)