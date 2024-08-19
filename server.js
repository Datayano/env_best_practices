// server.js
import "dotenv/config";

console.log('Avant d\'embarquer, nous allons vérifier votre identité.');
console.log(`Nom : ${process.env.NOM}`);
console.log(`Prénom : ${process.env.PRENOM}`);
console.log(`Date de naissance : ${process.env.DATE_DE_NAISSANCE}`);
console.log(`Destination : ${process.env.DESTINATION}`);


setTimeout(() => {
    console.log(``);
    console.log(`Tout semble correcte !`);
    console.log(`Très bon choix de destination.`);
    console.log(`Bon voyage ${process.env.PRENOM} !`)
}, 3000);

let dots = 0;
const interval = setInterval(() => {
    process.stdout.write('.');
    dots++;
    if (dots > 10) {
        process.stdout.write('\n');
        clearInterval(interval);
    }
}, 300);
