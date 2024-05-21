const franc = require("franc");
const langs = require("langs");



//const test = franc('Alle menneske er fødde til fridom');
let input = process.argv[2];
console.log(input);

const testingagain = franc(input);
console.log(testingagain);


// Get the full name of a language using its ISO 639-1 code
const languageCode = 'en'; // ISO 639-1 code for English

const testing = langs.where("3", testingagain);
// {"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}

console.log(testing.name);
