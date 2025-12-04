const p = require("prompt-sync")();

let color = p("Entrer une couleur : ");
if(color==="rouge"){
    console.log("Arret !");
}else if(color==="jaune"){
    console.log("Préparez-vous !")
}else if(color==="vert"){
    console.log("Allez !")
}else{
    console.log("Veuillez entrer soit : rouge, jaune ou vert")
}