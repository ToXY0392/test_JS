// script_4.js

const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

// 1) Filtre les entrepreneurs nés dans les années 70
const seventies = entrepreneurs.filter(person => person.year >= 1970 && person.year < 1980);
console.log("Entrepreneurs nés dans les années 70 :");
console.log(seventies);

// 2) Array des prénoms + noms
const fullNames = entrepreneurs.map(person => `${person.first} ${person.last}`);
console.log("Prénoms et noms des entrepreneurs :");
console.log(fullNames);

// 3) Âge qu'ils auraient aujourd'hui
const currentYear = new Date().getFullYear();
console.log("Âge de chaque entrepreneur aujourd'hui :");
entrepreneurs.forEach(person => {
    const age = currentYear - person.year;
    console.log(`${person.first} ${person.last} aurait ${age} ans aujourd'hui.`);
});

// 4) Trie par ordre alphabétique du nom de famille
const sortedByLastName = [...entrepreneurs].sort((a, b) => a.last.localeCompare(b.last));
console.log("Entrepreneurs triés par nom de famille :");
console.log(sortedByLastName);
