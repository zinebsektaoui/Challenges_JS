const p = require("prompt-sync")()

let prenom = p("Quel votre prénom ? ")
let signe = p("Et votre signe astrologique ? ")

let action = ["Tu vas découvrir", "Attention à", "Ne refuse pas"]
let object = ["une opportunité", "une pizza", "un bug", "un pigeon"]
let situation = ["au travail", "en ligne", "dans tes rêves"]

const randomAction = Math.floor(Math.random() * action.length)// KAY3TIK GHIR INDEX 
const randomObject = Math.floor(Math.random() * object.length)
const randomSituation = Math.floor(Math.random() * situation.length)
console.log(prenom +" " + action[randomAction] + " " + object[randomObject] + " " + situation[randomSituation]);

// random.floor : kathyed l virgule
// math.random : kat"ti number between 0 and 1   (1 madakhelsh)
// action[randomAction] : kayakhod l'index lly t afficha de manière aleatoire => kayqleb "leh f tableau index => kayaffichih"