const p = require("prompt-sync")();

let firstName = p(`Entrer votre nom : `);
let secondName = p(`Entrer votre prénom : `);
let age = p(`Entrer votre age : `);
let sexe = p(`Entrer votre sexe : `);
let tl = p(`Entrer votre numero de telephone : `);

console.log(`Bonjour ${firstName} ${secondName}, vous avez ${age} ans, votre sexe est : ${sexe}, et votre numéro de téléphone est : ${tl}`);