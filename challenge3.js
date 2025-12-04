const p = require('prompt-sync')();

let age = p("Enter votre age : ");
if(age>=18) {
    console.log("Eligible au vote");
}else{
    console.log("non éligible");
}