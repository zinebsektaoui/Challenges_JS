const p = require("prompt-sync")()

let nbr = parseInt(p("Entrer un nombre : "))
let count = 0 ;
for(let i=2; i<nbr; i++){
    if(nbr%i===0 ){
        count++ ;
    }
}
if(count>=1) {
    console.log(`le nombre : ${nbr} n'est pas  premier !`) 
}else{
    console.log(`le nombre : ${nbr} est premier!`) 
}