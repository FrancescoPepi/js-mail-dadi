// Dichiarare un array con una lista di e-mail, "white list" ;
const WhiteList = [
  "francesco@gmail.com",
  "luigi@gmail.com",
  "valerio@gmail.com",
];
let verifica = false;

// Chiedi all’utente la "sua email" ;
const Email = prompt("inserisci la tua E-mail").toLowerCase();
console.log(Email);

for (let i = 0; i < WhiteList.length; i++) {
  const controller = WhiteList[i];
  if (controller == Email) {
    verifica = true;
  }
}
verifica == true
  ? alert("Congratulazioni!! e benvenuto a bordo")
  : alert("Mi dispiace non abbiamo trovato la tua email");
