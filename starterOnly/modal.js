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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal
const closeModal = document.getElementsByClassName("close")[0];
closeModal.onclick = function () {
  modalbg.style.display = "none";
  document.getElementById("inscription").reset();
};

// Déclaration variable
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const naissance = document.getElementById("birthdate");
const nombre = document.getElementById("quantity");

// les regex
const regexName = /^[a-z A-Z]{2,25}$/;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let valuePrenom, valueNom, valueEmail, valueNaissance, valueNombre;

// Prénom
prenom.addEventListener("input", (e) => {
  valuePrenom;

  if (e.target.value.length == 0) {
    console.log("rien");
    erreur = " prénom manquant";
    prenom.parentElement.setAttribute("data-error-visible", "true");
    prenom.parentElement.setAttribute("data-error", erreur);
    valuePrenom = null;
    console.log(valuePrenom);
  } else if (e.target.value.length < 2 || e.target.value.length > 25) {
    erreur = "veuillez entrer 2 caractères ou plus dans le champ prénom ";
    prenom.parentElement.setAttribute("data-error-visible", "true");
    prenom.parentElement.setAttribute("data-error", erreur);
    valuePrenom = null;
  }
  if (
    !e.target.value.match(regexName) &&
    e.target.value.length > 3 &&
    e.target.value.length < 25
  ) {
    erreur = "les caractères spéciaux ne sont pas autorisés";
    prenom.parentElement.setAttribute("data-error-visible", "true");
    prenom.parentElement.setAttribute("data-error", erreur);
    valuePrenom = null;
    console.log(valuePrenom);
  }
  if (e.target.value.match(regexName)) {
    prenom.parentElement.removeAttribute("data-error-visible", "true");
    prenom.parentElement.removeAttribute("data-error");
    valuePrenom = e.target.value;
    console.log("succes regex prénom");
    console.log(valuePrenom);
  }
});

// nom
nom.addEventListener("input", (e) => {
  valueNom;
  if (e.target.value.length == 0) {
    erreur = " Nom manquant";
    console.log("rien");
    nom.parentElement.setAttribute("data-error-visible", "true");
    nom.parentElement.setAttribute("data-error", erreur);
    valueNom = null;
    console.log(valueNom);
  } else if (e.target.value.length < 2 || e.target.value.length > 25) {
    erreur = "veuillez entrer 2 caractères ou plus dans le champ nom ";
    nom.parentElement.setAttribute("data-error-visible", "true");
    nom.parentElement.setAttribute("data-error", erreur);
    valueNom = null;
  }
  if (
    !e.target.value.match(regexName) &&
    e.target.value.length > 3 &&
    e.target.value.length < 25
  ) {
    erreur = "les caractères spéciaux ne sont pas autorisés";
    nom.parentElement.setAttribute("data-error-visible", "true");
    nom.parentElement.setAttribute("data-error", erreur);
    valueNom = null;
  }
  if (e.target.value.match(regexName)) {
    nom.parentElement.removeAttribute("data-error-visible", "true");
    nom.parentElement.removeAttribute("data-error");
    valueNom = e.target.value;
    console.log("succes regex nom");
    console.log(valueNom);
  }
});

// Email

email.addEventListener("input", (e) => {
  valueEmail;
  if (e.target.value.length == 0) {
    erreur = " Email manquant";
    console.log("rien");
    email.parentElement.setAttribute("data-error-visible", "true");
    email.parentElement.setAttribute("data-error", erreur);
    valueEmail = null;
    console.log(valueEmail);
  } else if (e.target.value.match(regexEmail)) {
    email.parentElement.removeAttribute("data-error-visible", "true");
    email.parentElement.removeAttribute("data-error");
    valueEmail = e.target.value;
    console.log("succes regex Email");
  }
  if (!e.target.value.match(regexEmail) && !e.target.value.length == 0) {
    erreur = "Veuillez saisir une adresse e-mail valide :  example@email.com ";
    email.parentElement.setAttribute("data-error-visible", "true");
    email.parentElement.setAttribute("data-error", erreur);
    valueEmail = null;
  }
});

// date de naissance

naissance.addEventListener("input", (e) => {
  valueNaissance;
  if (e.target.value == null || e.target.value == "") {
    erreur = "Vous devez entrer votre date de naissance valide";
    console.log("date de naissance vide");
    naissance.parentElement.setAttribute("data-error-visible", "true");
    naissance.parentElement.setAttribute("data-error", erreur);
    valueNaissance = null;
  } else if (!e.target.value == null || !e.target.value == "") {
    naissance.parentElement.removeAttribute("data-error-visible", "true");
    naissance.parentElement.removeAttribute("data-error");
    valueNaissance = e.target.value;
    console.log("succes date de naissance");
  }
});

// Nombre de participation

nombre.addEventListener("input", (e) => {
  valueNombre;
  if (e.target.value == "" || e.target.value >= 99) {
    erreur = "Vous devez saisir un nombre entre 0 et 99";
    nombre.parentElement.setAttribute("data-error-visible", "true");
    nombre.parentElement.setAttribute("data-error", erreur);
    valueNombre = null;
  } else if (!e.target.value == null || !e.target.value == "") {
    nombre.parentElement.removeAttribute("data-error-visible", "true");
    nombre.parentElement.removeAttribute("data-error");
    valueNombre = e.target.value;
    console.log("succes nombre correcte");
  }
});

// envoi du formulaire

inscription.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("formulaire bloquer");

  if (valuePrenom && valueNom && valueEmail && valueNaissance && valueNombre) {
    const data = {
      valuePrenom,
      valueNom,
      valueEmail,
      valueNaissance,
      valueNombre,
    };
    console.log(data);
  } else {
    alert("les champs sont vide");
  }
});
