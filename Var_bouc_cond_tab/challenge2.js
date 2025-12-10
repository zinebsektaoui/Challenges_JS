const p = require("prompt-sync")()

let ch = p("Veuillez tapez une phrase : ")
const inverse = ch.split("").reverse().join("")

console.log(inverse)