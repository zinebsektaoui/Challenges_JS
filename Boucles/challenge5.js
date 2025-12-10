const p = require("prompt-sync")()

let nbr = Number(p("Donner un nombre : "))
let result = true
for(let i=2; i<nbr; i++){
    if(nbr %i == 0 ){
        result = false
    } 
}
if( nbr <= 1) {

    result = false
}
if(result) {
    console.log("premier");
    
}else {
    console.log("non premier");

}