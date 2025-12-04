const p = require("prompt-sync")();

let nbr = p("entrer un nombre : ");
if(nbr%3===0){
    console.log("FIZZ");
}else if(nbr%5===0){
    console.log("BUZZ");
}else if(nbr%3===0 && nbr%5===0){
    console.log("FIZZ BUZZ");
}else{
    console.log(nbr)
}