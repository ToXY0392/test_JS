// script_7.js

const message = prompt("Parle au bot d'ado :");

let reponse;

if (message === null || message.trim() === "") {
  // Message vide
    reponse = "t'es en PLS ?";
} else if (message.trim().endsWith("?")) {
  // Question
    reponse = "Ouais Ouais...";
} else {
    const hasLetters = /[a-zA-ZÀ-ÖØ-öø-ÿ]/.test(message);
    const isAllCaps = hasLetters && message === message.toUpperCase();

    if (isAllCaps) {
    // Hurle (tout en majuscules)
    reponse = "Pwa, calme-toi...";
    } else if (message.toLowerCase().includes("fortnite")) {
    // Contient "Fortnite"
    reponse = "on s' fait une partie soum-soum ?";
    } else {
    // Autre
    reponse = "balek.";
    }
}

console.log(reponse);
