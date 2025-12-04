const p = require("prompt-sync")();

let nbr = (p("Entrer un score : "));
switch(true){
    case nbr>90 && nbr<100 : console.log("A");
        break;
    case nbr>80 && nbr<89 : console.log("B");
        break;
    case nbr>70 && nbr<79 : console.log("C");
        break;
    case nbr>60 && nbr<69 : console.log("D");
        break;
    case nbr<60 : console.log("F");
        break;
}