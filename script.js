console.log("coucou depuis la console")

//commentaire sur une ligne
console.log("Ceci n'est pas un commentaire")
console.log("test dans ...");
console.log("3");
console.log("2");
console.log("1");
console.log("fin du test");

/* commentaire écrit sur 
plusieurs lignes*/

// Déclaration simple
let myVariable = "pirate";
console.log(myVariable);
console.log(typeof myVariable);

// Test du scope let / var
let data1 = "variable en let définie dans le bloc principal";

{
    data1 = "variable en let modifiée dans le sous-bloc";
    var data2 = "variable en var définie dans le sous-bloc";
    let data3 = "variable en let définie dans le sous-bloc";
}

console.log(data1);   // OK
console.log(data2);   // OK
console.log(data3);   // ERREUR
// data3 n'existe plus ici

// Incrémentations
let b = 1;
a++;
console.log(a);
console.log(b += 2);

// Concaténation
let c = "Bonjour", d = "Monde";
console.log(c + " " + d);

// Conversions
console.log(Number("5"));
console.log(String(36));
