// Dichiarare un array di numeri che vanno da 1 al 6 "Dado" ;
const Dado = [1, 2, 3, 4, 5, 6];
// Dichiarare Giocatore ; Dichiarare NPC ;
let Player = 0;
let NPC = 0;

// Segliere randomicamente un numero dall'array "Dado" ;
let randomNumberPlayer = Math.floor(Math.random() * Dado.length);
Player = Dado[randomNumberPlayer];

let randomNumberNPC = Math.floor(Math.random() * Dado.length);
NPC = Dado[randomNumberNPC];

console.log(Player);
console.log(NPC);
