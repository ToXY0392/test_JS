// script_3.js

const input = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
const etages = Number(input);

if (Number.isNaN(etages) || etages <= 0 || !Number.isInteger(etages)) {
    console.log("Veuillez entrer un nombre entier positif.");
} else {
    for (let i = 1; i <= etages; i += 1) {
    const espaces = " ".repeat(etages - i);
    const diezes = "#".repeat(i);
    console.log(espaces + diezes);
    }
}
