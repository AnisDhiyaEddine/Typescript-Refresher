// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


function capitalize(str) {
    let arr = str.split(' ');
    arr = arr.map(element => element[0].toUpperCase() + element.slice(1))
    return arr.join(' ');
    
}

module.exports = capitalize;


