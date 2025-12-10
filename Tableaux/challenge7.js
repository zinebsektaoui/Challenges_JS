const p = require("prompt-sync")()

let ch = p("Entrer une chaine de caractère : ")
let voyelle = ["a", "e", "i", "o", "u", "y","A","E", "I", "O", "U", "Y"]
let mot = ch.split("")
console.log(mot)
const count = mot.filter(letterOfCh=>voyelle.includes(letterOfCh)).length

console.log(`Votre chaine contient ${count} voyelle(s)`)