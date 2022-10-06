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

// les regex

const prenom = document.getElementById("first");
const nom = document.getElementById("last");

// Prénom
let valuePrenom, valueNom;
prenom.addEventListener("input", (e) => {
  valuePrenom;
  if (e.target.value.length == 0) {
    erreur = " prénom manquant";
    console.log("rien");
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

  if (e.target.value.match(/^[a-z A-Z]{2,25}$/)) {
    prenom.parentElement.removeAttribute("data-error-visible", "true");
    prenom.parentElement.removesetAttribute("data-error", erreur);
    valuePrenom = e.target.value;
    console.log("succes");
    console.log(valuePrenom);
  }

  if (
    !e.target.value.match(/^[a-z A-Z]{2,25}$/) &&
    e.target.value.length > 3 &&
    e.target.value.length < 25
  ) {
    erreur = "les caractères spéciaux ne sont pas autorisés";
    prenom.parentElement.setAttribute("data-error-visible", "true");
    prenom.parentElement.setAttribute("data-error", erreur);
    valuePrenom = null;
  }
});
// nom
nom.addEventListener("input", (e) => {
  valuePrenom;
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

  if (e.target.value.match(/^[a-z A-Z]{2,25}$/)) {
    nom.parentElement.removeAttribute("data-error-visible", "true");
    nom.parentElement.removesetAttribute("data-error", erreur);
    valuePrenom = e.target.value;
    console.log("succes");
    console.log(valueNom);
  }

  if (
    !e.target.value.match(/^[a-z A-Z]{2,25}$/) &&
    e.target.value.length > 3 &&
    e.target.value.length < 25
  ) {
    erreur = "les caractères spéciaux ne sont pas autorisés";
    nom.parentElement.setAttribute("data-error-visible", "true");
    nom.parentElement.setAttribute("data-error", erreur);
    valueNom = null;
  }
});

// Email
