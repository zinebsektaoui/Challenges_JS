const p = require("prompt-sync")();

let year = Number(p("Entrer une année : "));
if((year%4===0 && year%100!==0) || year%400===0){
    console.log("Année bissextile");
}else{
    console.log("Année NON bissextile");
}