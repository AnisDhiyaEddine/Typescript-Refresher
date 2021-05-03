// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = {};
    for(let char of str){
        obj[char] ? obj[char] ++ : obj[char] = 1;
    }
    let max = {key : '', rep : 0};
    for(let key in obj){
        if(obj[key] >= max.rep) {max.key = key; max.rep = obj[key]}
    }
    return max.key;
}

module.exports = maxChar;
