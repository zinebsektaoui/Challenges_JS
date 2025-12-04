const p = require("prompt-sync")();

const userName = "admin";
const pswd = 1234;

let name = p("Tapez votre user name : ");
let password = Number(p("Tapez votre password : "));

if(userName==name && pswd===password){
    console.log("Bienvenue Admin");
}else if(userName===name && pswd!==password){
    console.log("Mot de passe incorrect")
}else{
    console.log("Utilisateur introuvable");
}