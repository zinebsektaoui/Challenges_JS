const p = require("prompt-sync")()

let prenom = p("Comment vous vous- appelez ? ")
const firstLetters = prenom.slice(0, 3)

let array = ["zilla", "inator", "tron", "blaster"]
const randomArray = Math.floor((Math.random()*array.length))

console.log("Votre surnom est : " + firstLetters + array[randomArray])