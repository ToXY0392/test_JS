// script_6.js

const CODON_TABLE = {
  // Sérine
    "UCU": "Sérine",
    "UCC": "Sérine",
    "UCA": "Sérine",
    "UCG": "Sérine",
    "AGU": "Sérine",
    "AGC": "Sérine",

  // Proline
    "CCU": "Proline",
    "CCC": "Proline",
    "CCA": "Proline",
    "CCG": "Proline",

  // Leucine
    "UUA": "Leucine",
    "UUG": "Leucine",

  // Phénylalanine
    "UUU": "Phénylalanine",
    "UUC": "Phénylalanine",

  // Arginine
    "CGU": "Arginine",
    "CGC": "Arginine",
    "CGA": "Arginine",
    "CGG": "Arginine",
    "AGA": "Arginine",
    "AGG": "Arginine",

  // Tyrosine
    "UAU": "Tyrosine",
    "UAC": "Tyrosine"
};

function arnToProtein(arn) {
    const codons = [];
    for (let i = 0; i < arn.length; i += 3) {
    codons.push(arn.slice(i, i + 3));
    }

    const acidesAmines = codons.map(codon => {
    const acide = CODON_TABLE[codon];
    return acide || "Inconnu";
    });

    return acidesAmines.join("-");
}

// Exemple de l'énoncé
const exemple = "UUACGCAGUAGA";
console.log(exemple, "→", arnToProtein(exemple));

// ARN à traduire
const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";

console.log(arn1, "→", arnToProtein(arn1));
console.log(arn2, "→", arnToProtein(arn2));
