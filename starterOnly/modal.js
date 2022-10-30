function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
// declaration des variables

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const spanCloseModal = document.getElementsByClassName("close")[0];
const spanCloseModalThx = document.getElementsByClassName("closeThx")[0];
const ModalThx = document.querySelector(".bgroundThx");
const modalThx = document.querySelectorAll(".thx-close");
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const naissance = document.getElementById("birthdate");
const nombre = document.getElementById("quantity");
const locationName = document.getElementsByName("location");
const radiocgv = document.getElementsByName("radioCgv");
const radioContainer = document.getElementById("radio");
const cgvContainer = document.getElementById("cgv");

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Modal d'inscription
// ouverture
function launchModal() {
  modalbg.style.display = "block";
  // fixe le bg à l'ouverture de la modal
  const scrollY = document.body.style.top;
  document.body.style.position = "fixed";
  document.body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
  closeModalThx();
}
// ferme la modal
spanCloseModal.onclick = function () {
  modalbg.style.display = "none";
  document.getElementById("reserve").reset();
  location.reload();
};

function closeModal() {
  modalbg.style.display = "none";
}
// Modal de remerciement
// Modal THX
function launchModalThx() {
  ModalThx.style.display = "block";
}
// Close modal THX
function closeModalThx() {
  ModalThx.style.display = "none";
  modalThx.forEach((btn) => btn.addEventListener("click", closeModal));
  document.getElementById("reserve").reset();
}

// les regex ------------------------------------------------

const regexName = /^[a-z A-Z]{2,25}$/;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// variable qui stocke les valeurs des conditions
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
  // test si champs prenom replis
  if (e.target.value.length == 0) {
    console.log("rien");
    // affiche le message d'erreur
    erreur = " prénom manquant";
    inputValidation(prenom, erreur);
    // si rien retourne null
    valuePrenom = null;
    console.log(valuePrenom);
    // test  le nombre de caractère entre 2 et 25
  } else if (e.target.value.length < 2 || e.target.value.length > 25) {
    erreur = "veuillez entrer 2 caractères ou plus dans le champ prénom ";
    inputValidation(prenom, erreur);
    valuePrenom = null;
  }
  // verifie si les caractères conrespondent au regex
  if (
    !e.target.value.match(regexName) &&
    e.target.value.length > 3 &&
    e.target.value.length < 25
  ) {
    erreur = "les caractères spéciaux ne sont pas autorisés";
    inputValidation(prenom, erreur);
    valuePrenom = null;
  }
  // si ok retourne la valeur dans valuePrenom
  if (e.target.value.match(regexName)) {
    inputInValidation(prenom, erreur);
    valuePrenom = e.target.value;
    console.log("succes regex prénom");
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
  }
});

// Email ---------------------------------------------------------------

email.addEventListener("input", (e) => {
  valueEmail;
  // si le champs est vide retourne une erreur
  if (e.target.value.length == 0) {
    erreur = " Email manquant";
    console.log("rien");
    // retourne l'erreur
    inputValidation(email, erreur);
    valueEmail = null;
    console.log(valueEmail);
    // test la regex avec le champs
  } else if (e.target.value.match(regexEmail)) {
    inputInValidation(email, erreur);
    valueEmail = e.target.value;
    console.log("succes regex Email");
  }
  // si diffferent de target.value affiche erreur
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
    console.log("je retourne true / test villes ");
    return true;
  }
}
// condition général -------------------------------
function cgvChecked() {
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
    console.log("je retourne true / test CGV ");
    return true;
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
  if ((cgvChecked(), radioChecked()));
  else {
    console.log("Champs du formulaire incomplet");
  }
});

// verification du formulaire

function validate() {
  if (
    valuePrenom &&
    valueNom &&
    valueEmail &&
    valueNaissance &&
    valueNombre &&
    cgvChecked() === true &&
    radioChecked() === true
  ) {
    launchModalThx();

    console.log("le formulaire est  valide");
  } else {
    console.log("le formulaire n'est pas valide");
  }
}
