const p = require("prompt-sync")()

let array = []
for(let i=1; i<=3; i++){
    let ch = p("Donner une chaine de caractère : ")
    array.push(ch)
}
let chToSearch = p("Donner la chaine à chercher : ")
const index = (element) => element === chToSearch
if(array.includes(chToSearch)){
    console.log(`La chaîne ${chToSearch} a été trouvée à la position : ` + array.findIndex(index))
}else{
    console.log("la chaine n'exite pas.")
}