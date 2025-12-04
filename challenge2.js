const p = require('prompt-sync')();

let number = Number(p("Entrer un nombre"));

if(number>0){
    console.log('Positif');
}else if(number<0){
    console.log('Négatif');
}else{
    console.log("Zéro");
}