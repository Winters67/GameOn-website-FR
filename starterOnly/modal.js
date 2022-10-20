function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const ModalThx = document.querySelector(".bg");
const modalThx = document.querySelectorAll(".modal-btn2");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  closeModalThx();
}

// Close modal
const closeModal = document.getElementsByClassName("close")[0];
closeModal.onclick = function () {
  modalbg.style.display = "none";
  document.getElementById("reserve").reset();
};

// Modal THX
function launchModalThx() {
  ModalThx.style.display = "block";
}

// Close modal THX
function closeModalThx() {
  ModalThx.style.display = "none";
}

// Déclaration variable
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const naissance = document.getElementById("birthdate");
const nombre = document.getElementById("quantity");
const locationName = document.getElementsByName("location");
const radiocgv = document.getElementsByName("radioCgv");
const radioContainer = document.getElementById("radio");
const cgvContainer = document.getElementById("cgv");

// les regex ------------------------------------------------

const regexName = /^[a-z A-Z]{2,25}$/;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let valuePrenom,
  valueNom,
  valueEmail,
  valueNaissance,
  valueNombre,
  valueTournaments;
let erreur;

// fonction qui affiche les erreurs dans le formulaire
function inputValidation(e) {
  if (e.value !== true) {
    e.parentElement.setAttribute("data-error-visible", "true");
    e.parentElement.setAttribute("data-error", erreur);
  } else {
    e.parentElement.removeAttribute("data-error-visible");
    e.parentElement.removeAttribute("data-error");
  }
}

function inputInValidation(e) {
  if (e.value !== true) {
    e.parentElement.removeAttribute("data-error-visible");
    e.parentElement.removeAttribute("data-error");
  } else {
    e.parentElement.setAttribute("data-error-visible", "true");
    e.parentElement.setAttribute("data-error", erreur);
  }
}

// Prénom ------------ ------------------------------------------------------
prenom.addEventListener("input", (e) => {
  valuePrenom;

  if (e.target.value.length == 0) {
    console.log("rien");
    erreur = " prénom manquant";
    inputValidation(prenom, erreur);
    valuePrenom = null;
    console.log(valuePrenom);
  } else if (e.target.value.length < 2 || e.target.value.length > 25) {
    erreur = "veuillez entrer 2 caractères ou plus dans le champ prénom ";
    inputValidation(prenom, erreur);
    valuePrenom = null;
  }
  if (
    !e.target.value.match(regexName) &&
    e.target.value.length > 3 &&
    e.target.value.length < 25
  ) {
    erreur = "les caractères spéciaux ne sont pas autorisés";
    inputValidation(prenom, erreur);
    valuePrenom = null;
    console.log(valuePrenom);
  }
  if (e.target.value.match(regexName)) {
    inputInValidation(prenom, erreur);
    valuePrenom = e.target.value;
    console.log("succes regex prénom");
    console.log(valuePrenom);
    return true;
  }
});

// nom --------------------------------------------------------

nom.addEventListener("input", (e) => {
  valueNom;
  if (e.target.value.length == 0) {
    erreur = " Nom manquant";
    console.log("rien");
    inputValidation(nom, erreur);
    valueNom = null;
    console.log(valueNom);
  } else if (e.target.value.length < 2 || e.target.value.length > 25) {
    erreur = "veuillez entrer 2 caractères ou plus dans le champ nom ";
    inputValidation(nom, erreur);
    valueNom = null;
  }
  if (
    !e.target.value.match(regexName) &&
    e.target.value.length > 3 &&
    e.target.value.length < 25
  ) {
    erreur = "les caractères spéciaux ne sont pas autorisés";
    inputValidation(nom, erreur);
    valueNom = null;
  }
  if (e.target.value.match(regexName)) {
    inputInValidation(nom, erreur);
    valueNom = e.target.value;
    console.log("succes regex nom");
    console.log(valueNom);
  }
});

// Email ---------------------------------------------------------------

email.addEventListener("input", (e) => {
  valueEmail;
  if (e.target.value.length == 0) {
    erreur = " Email manquant";
    console.log("rien");
    inputValidation(email, erreur);
    valueEmail = null;
    console.log(valueEmail);
  } else if (e.target.value.match(regexEmail)) {
    inputInValidation(email, erreur);
    valueEmail = e.target.value;
    console.log("succes regex Email");
  }
  if (!e.target.value.match(regexEmail) && !e.target.value.length == 0) {
    erreur = "Veuillez saisir une adresse e-mail valide :  example@email.com ";
    inputValidation(email, erreur);
    valueEmail = null;
  }
});

// date de naissance --------------------------------------------------------

naissance.addEventListener("input", (e) => {
  valueNaissance;
  if (e.target.value == null || e.target.value == "") {
    erreur = "Vous devez entrer votre date de naissance valide";
    console.log("date de naissance vide");
    inputValidation(naissance, erreur);
    valueNaissance = null;
  } else if (!e.target.value == null || !e.target.value == "") {
    inputInValidation(naissance, erreur);
    valueNaissance = e.target.value;
    console.log("succes date de naissance");
  }
});

// Nombre de participation-----------------------------------------------------

nombre.addEventListener("input", (e) => {
  valueNombre;
  if (e.target.value == "" || e.target.value >= 99) {
    erreur = "Vous devez saisir un nombre entre 0 et 99";
    inputValidation(nombre, erreur);
    valueNombre = null;
  } else if (!e.target.value == null || !e.target.value == "") {
    inputInValidation(nombre, erreur);
    valueNombre = e.target.value;
    console.log("succes nombre correcte");
  }
});

// Checkbox -----------------------------------------------
function radioChecked() {
  let radio = "";
  for (let i = 0, length = locationName.length; i < length; i++) {
    if (locationName[i].checked) {
      radio = "checked";
      break;
    }
  }
  if (radio !== "checked") {
    radioContainer.setAttribute("data-error-visible", "true");
    radioContainer.setAttribute(
      "data-error",
      "Vous devez selectionner un tournoi !"
    );
  } else {
    radioContainer.removeAttribute("data-error-visible");
    radioContainer.removeAttribute("data-error");
    return true;
  }
}
// condition général -------------------------------
function cgvChecked(e) {
  let radio = "";
  for (let i = 0, length = radiocgv.length; i < length; i++) {
    if (radiocgv[i].checked) {
      radio = "checked";
      break;
    }
  }
  if (radio !== "checked") {
    cgvContainer.setAttribute("data-error-visible", "true");
    cgvContainer.setAttribute(
      "data-error",
      "Veuillez accepter les condition d' utilisation !"
    );
  } else {
    cgvContainer.removeAttribute("data-error-visible");
    cgvContainer.removeAttribute("data-error");
  }
}

// envoi du formulaire
reserve.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!valuePrenom) {
    erreur = " prénom manquant";
    inputValidation(prenom, erreur);
  }
  if (!valueNom) {
    erreur = " Nom manquant";
    inputValidation(nom, erreur);
  }
  if (!valueEmail) {
    erreur = " Email manquant";
    inputValidation(email, erreur);
  }
  if (!valueNaissance) {
    erreur = " Date de naissance manquante";
    inputValidation(naissance, erreur);
  }
  if (!valueNombre) {
    erreur = " Nombre manquant";
    inputValidation(nombre, erreur);
  }
  if ((!cgvChecked(), !radioChecked())) {
    e.preventDefault();
  }
});

function validate() {
  if (valuePrenom && valueNom && valueEmail && valueNaissance && valueNombre) {
    launchModalThx();
    console.log("formulaire valide");
  } else {
    console.log("pas valide");
  }
}
