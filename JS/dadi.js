// dichiarazione bottone
const LoginButton = document.getElementById("login-button");
const GameButton = document.getElementById("game-button");
const GameScreen = document.getElementById("game");
let PunteggioPlayer = document.getElementById("txt-player");
let PunteggioNPC = document.getElementById("txt-npc");

let Victory = document.getElementById("alert-victory");
let GameOver = document.getElementById("alert-game-over");
let Lobby = document.getElementById("alert-lobby");

LoginButton.addEventListener("click", function () {
  // raccogli nome
  let FormInput = document.getElementById("id-input");
  let UserName = document.getElementById("name-input");
  let Name = UserName.value;
  let UserNameOutput = document.getElementById("name-output");
  UserNameOutput.innerHTML = Name;
  // Dichiarare un array di numeri che vanno da 1 al 6 "Dado" ;
  const Dado = [1, 2, 3, 4, 5, 6];
  // Dichiarare Giocatore ; Dichiarare NPC ;
  let Player = 0;
  let NPC = 0;

  LoginButton.classList.add("d-none");
  FormInput.classList.add("d-none");
  GameButton.classList.remove("d-none");
  GameScreen.classList.remove("d-none");

  Lobby.classList.remove("d-none");

  GameButton.addEventListener("click", function () {
    // Segliere randomicamente un numero dall'array "Dado" ;
    let randomNumberPlayer = Math.floor(Math.random() * Dado.length);
    Player = Dado[randomNumberPlayer];

    let randomNumberNPC = Math.floor(Math.random() * Dado.length);
    NPC = Dado[randomNumberNPC];

    PunteggioPlayer.innerHTML = Player;
    console.log(PunteggioPlayer);

    PunteggioNPC.innerHTML = NPC;
    console.log(PunteggioNPC);

    console.log(Name + " " + Player);
    console.log("NPC " + NPC);

    if (Player > NPC) {
      Lobby.classList.add("d-none");
      Victory.classList.remove("d-none");
      GameOver.classList.add("d-none");
    } else {
      Lobby.classList.add("d-none");
      Victory.classList.add("d-none");
      GameOver.classList.remove("d-none");
    }
  });
});
