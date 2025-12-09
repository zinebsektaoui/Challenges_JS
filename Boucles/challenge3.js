const p = require("prompt-sync")()
const lodash = require("lodash")

let array = []

while(true){
    let nbr = Number(p("Donner un nombre : "))
    if(nbr>=100) {
        break;
    }else if(nbr<100 && /[1-9]0/.test(nbr)){
        array.push(nbr)
        let somme = lodash.sum(array)
        console.log("Le contenu de votre array : " + array)
        console.log("Max : " + Math.max(...array))
        console.log("Somme : " + somme)
        console.log("______________________________")
    }
}