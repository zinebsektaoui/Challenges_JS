const p =require("prompt-sync")()

let somme = 0
for(let i=0; i<=10; i++){
    let nb = Number(p("Donner un nombre : "))
    if(nb>0){
        somme = somme + nb
    }
}
console.log(somme)