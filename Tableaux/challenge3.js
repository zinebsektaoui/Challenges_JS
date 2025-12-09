const p = require("prompt-sync")()

let array = []
for(let i=1; i<=10; i++){
    let nb = Number(p("Donner un nombre : "))
    array.push(nb)
}

let nbToSearch = Number(p("Donner le nombre a chercher : "))
const index = (element) => element === nbToSearch // fonction fléchée appele index (comparer chaque element au nombre chercher)
if(array.includes(nbToSearch)){
    console.log("Le nombre que vous chercher existe dans la position : " + array.findIndex(index))
}else{
    console.log("Le nombre que vous chercher n'existe pas.")
}