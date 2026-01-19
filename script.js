// 3.2 - Test de la console
console.log("coucou depuis la console");

// 3.3 / 3.4 - Variables, typeof, etc.

// Déclaration d'une variable et affichage de sa valeur et de son type
let myVariable = 5;
console.log("myVariable =", myVariable);
console.log("typeof myVariable =", typeof myVariable);

myVariable = "pirate";
console.log("myVariable =", myVariable);
console.log("typeof myVariable =", typeof myVariable);

// Exemple sur la portée (scope) avec let / var
let data1 = "variable en let définie dans le bloc principal";

{ // début du sous-bloc
    data1 = "variable en let modifiée dans le sous-bloc";
    var data2 = "variable en var définie dans le sous-bloc";
    let data3 = "variable en let définie dans le sous-bloc";
} // fin du sous-bloc

console.log("data1 :", data1); // "variable en let modifiée dans le sous-bloc"
console.log("data2 :", data2); // "variable en var définie dans le sous-bloc"
// Décommente la ligne suivante pour voir l’erreur de portée :
// console.log("data3 :", data3); // ReferenceError : data3 is not defined

// Incrémentation et opérateurs composés
let a = 1;
let b = 1;

a++;
console.log("a après a++ =", a); // 2

b += 2;
console.log("b après b += 2 =", b); // 3

// Autres opérateurs possibles (exemples)
let c = 3;
c *= 2; // 3 * 2 = 6
console.log("c après c *= 2 =", c);

c -= 1; // 6 - 1 = 5
console.log("c après c -= 1 =", c);

c /= 5; // 5 / 5 = 1
console.log("c après c /= 5 =", c);

c %= 2; // 1 % 2 = 1
console.log("c après c %= 2 =", c);

// Concaténation de strings
let hello = "Bonjour";
let world = "Monde";
console.log(hello + " " + world);

// Conversion string -> number
let stringNumber = "5";
let realNumber = Number(stringNumber);
console.log("realNumber =", realNumber, "| type =", typeof realNumber);

// Conversion number -> string
let numberValue = 36;
let stringFromNumber = String(numberValue);
console.log("stringFromNumber =", stringFromNumber, "| type =", typeof stringFromNumber);

