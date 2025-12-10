const p = require("prompt-sync")()

for(i=1; i<=3; i++){
    let film = p("Donner un film : ")
    let note = p("Combien vous le notez de 1 à 5 ? ")
    switch(true){
        case note == 5 : console.log(`${film} : Chef d'œuvre`)
            break
        case note == 4 : console.log(`${film} : Très bon`)
            break
        case note == 3 : console.log(`${film} : Correct`)
            break
        case note == 2 : console.log(`${film} : Bof`)
            break
        case note == 1 || note == 0 : console.log(`${film} : A éviter`)
            break
    }
    
}