const p = require("prompt-sync")()

let arr = []

while(true){
    console.log("-----------------------------------------");
    console.log("1 : Addition (+)")
    console.log("2 : Soustraction (-)")
    console.log("3 : Multiplication (*)")
    console.log("4 : Division (/) ")
    console.log("5 : Puissance")
    console.log("6 : Racine carrée")
    console.log("7 : Factorielle")
    console.log("8 : Pour afficher l'historique")
    console.log("0 : Pour quitter le programme")
    console.log("-----------------------------------------");
    let operation = Number(p("Choisissez l'opération que vous voulez : "))
    if(operation===0){break}
    
    switch(true){
        case operation===1 : Addition(); break
        case operation===2 : Soustraction(); break
        case operation===3 : Multiplication(); break
        case operation===4 : Division(); break
        case operation===5 : Puissance(); break
        case operation===6 : Racine_carrée();break
        case operation===7 : Factorielle();break
        case operation===8 : console.log(arr); break
        
    }
}



function Addition(){
    let nb1 = Number(p("Donner le premier nombre : "))
    let nb2 = Number(p("Donner le deuxième nombre : "))
    let result = nb1 + nb2
    console.log(`${nb1} + ${nb2} = ${result}`);
    arr.push(nb1 + " + " + nb2 + " = " + result)
}

function Soustraction(){
    let nb3 = Number(p("Donner le premier nombre : "))
    let nb4 = Number(p("Donner le deuxième nombre : "))
    let result = nb3 - nb4
    console.log(`${nb3} - ${nb4} = ${result}`);
    arr.push(nb3 + " - " + nb4 + " = " + result)
}

function Multiplication(){
    let nb1 = Number(p("Donner le premier nombre : "))
    let nb2 = Number(p("Donner le deuxième nombre : "))
    let result = nb1 * nb2
    console.log(`${nb1} * ${nb2} = ${result}`);
    arr.push(nb1 + " * " + nb2 + " = " + result)
}

function Division(){
    let nb1 = Number(p("Donner le premier nombre : "))
    let nb2 = Number(p("Donner le deuxième nombre : "))
    if(nb2===0){
        console.log("Désolé... Nous ne pouvons pas diviser par zéro");
    }else{
        let result = nb1 / nb2
        console.log(`${nb1} / ${nb2} = ${result}`);
        arr.push(nb1 + " / " + nb2 + " = " + result)
    }
}

function Puissance(){
    let nb1 = Number(p("Donner le premier nombre : "))
    let nb2 = Number(p("Donner le deuxième nombre : "))
    let i = 0
    let result = 1
    while(i<nb2){
        i++
        result *= nb1 
    }
    arr.push(nb1 + " ^ " + nb2 + " = " + result)
}

function Racine_carrée(){
    let nb = Number(p("Donner un nombre : "))
    if(nb>0){
        let result = Math.sqrt(nb);
        
        arr.push(" √ " + nb + " = " + result.toFixed(2))
    }else{
        console.log("Impossible de calculer la racine carrée d'un nombre négatif")
    }
    
}

function Factorielle(){
    let nb = Number(p("Donner un nombre : "))
    let result = 1
    for(let i=1; i<=nb; i++){
        result = result*i        
    }
    console.log(`${nb} ! = ${result}`);
    arr.push(nb + "! = " + result)
}