const p = require("prompt-sync")();

let password = p("Enter a password : ");
if(password.length<6){
    console.log("Faible");
}else if(password.length>=8 && /[0-9]/.test(password) && /[@#$:;!%^&*.?]/.test(password)){
    console.log("Fort")
}else if(password.length>=6 && password.match(/[0-9]/g)){
    console.log("Moyen");
}else{   
    console.log ("Veuillez taper un mot de passe valide");
}