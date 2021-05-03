// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB){
    return cleanString(stringA).split('').sort().join('') === cleanString(stringB).split('').sort().join('');
}



module.exports = anagrams;



/* 
function anagrams(stringA, stringB) {
    const stringASan = cleanString(stringA);
    const stringBSan = cleanString(stringB)
    if(stringASan.length != stringBSan.length) return false;
    let objA = buildObj(stringASan);
    let objB = buildObj(stringBSan);
    for(let key in objA){
        if(objA[key] != objB[key]) return false;
    }
    return true;
}
*/

const cleanString = (string) => string.replace('/[^\w]/g','').toLowerCase();
const buildObj = (string) => {
let obj = {};
for(let char of string){
    obj[char] ? obj[char]++ : obj[char] = 1;
 }
 return obj;
}