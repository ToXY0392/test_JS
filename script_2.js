// script_2.js

function factorielle(n) {
    let result = 1;
    for (let i = 2; i <= n; i += 1) {
    result *= i;
    }
    return result;
}

const input = prompt("De quel nombre veux-tu calculer la factorielle ?");
const nombre = Number(input);

if (Number.isNaN(nombre) || nombre < 0 || !Number.isInteger(nombre)) {
    console.log("Veuillez entrer un entier positif.");
} else {
    const resultat = factorielle(nombre);
    console.log(`Le résultat est : ${resultat}`);
}
