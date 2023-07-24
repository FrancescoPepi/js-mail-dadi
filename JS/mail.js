// Dichiarare un array con una lista di e-mail, "white list" ;
const WhiteList = [
  "francesco@gmail.com",
  "luigi@gmail.com",
  "valerio@gmail.com",
];
// richiamo DOM
const LoginButton = document.getElementById("login-button");
const DangerButton = document.getElementById("danger-button");
let AlertDanger = document.getElementById("alert-danger-input");
let AlertSuccess = document.getElementById("alert-success-input");
let AlertWarning = document.getElementById("alert-warning-input");
let AlertNotEmail = document.getElementById("alert-no-email-input");

// evento on click
LoginButton.addEventListener("click", function () {
  let verifica;
  // Chiedi all’utente la "sua email" ;
  let EmailInput = document.getElementById("email-input");
  let Email = EmailInput.value.toLowerCase();
  console.log(Email);

  if (
    Email.includes("@gmail.com") ||
    Email.includes("@gmail.it") ||
    Email.includes("@icloud.com") ||
    Email.includes("@outlook.com")
  ) {
    // ciclo di controllo
    for (let i = 0; i < WhiteList.length; i++) {
      if (Email == WhiteList[i]) {
        verifica = true;
        console.log(WhiteList + " verifica true");
      }
    }
    if (verifica == true) {
      AlertSuccess.classList.remove("d-none");
      AlertWarning.classList.add("d-none");
      AlertDanger.classList.add("d-none");
      console.log(WhiteList + " fuori true");
      AlertWarning.classList.add("d-none");
      console.log(Email);
      console.log(WhiteList + "true");
      AlertNotEmail.classList.add("d-none");
    } else {
      LoginButton.classList.add("d-none");
      AlertSuccess.classList.add("d-none");
      DangerButton.classList.remove("d-none");
      AlertDanger.classList.remove("d-none");
      AlertWarning.classList.add("d-none");
      console.log(Email);
      console.log(WhiteList + "true");
      AlertNotEmail.classList.add("d-none");
    }
  } else {
    AlertNotEmail.classList.remove("d-none");
  }
});

// REGISTRAZIONE
DangerButton.addEventListener("click", function () {
  let EmailInput = document.getElementById("email-input");
  let Email = EmailInput.value.toLowerCase();
  let verifica = false;

  console.log(Email);
  console.log(verifica);
  console.log(WhiteList);
  if (
    Email.includes("@gmail.com") ||
    Email.includes("@gmail.it") ||
    Email.includes("@icloud.com") ||
    Email.includes("@outlook.com")
  ) {
    // ciclo di controllo
    for (let i = 0; i < WhiteList.length; i++) {
      if (Email == WhiteList[i]) {
        verifica = true;
        console.log(WhiteList + " verifica");
      }
    }
    if (verifica == false) {
      WhiteList.unshift(Email);
      LoginButton.classList.remove("d-none");
      AlertSuccess.classList.remove("d-none");
      DangerButton.classList.add("d-none");
      AlertDanger.classList.add("d-none");
      console.log(WhiteList + " fuori");
      AlertNotEmail.classList.add("d-none");
    } else {
      AlertWarning.classList.remove("d-none");
      LoginButton.classList.remove("d-none");
      DangerButton.classList.add("d-none");
      AlertDanger.classList.add("d-none");
      AlertNotEmail.classList.add("d-none");
    }
  } else {
    AlertNotEmail.classList.remove("d-none");
  }
});
