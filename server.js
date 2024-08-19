// server.js
import "dotenv/config"; // this line is mandatory when you want to read variables from the '.env' file
console.log('Avant de commencer votre nouvelle mission, veuillez vérifier votre nouvelle identité.')
console.log(`Nom : ${process.env.NOM}`);
console.log(`Prénom : ${process.env.PRENOM}`);
console.log(`Date de naissance : ${process.env.DATE_DE_NAISSANCE}`);
console.log(`Nationalité : ${process.env.NATIONALITE}`);
