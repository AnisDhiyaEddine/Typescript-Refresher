// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps(n) {
    let arr = [];
    for(let i = 0 ; i < n ; i++ ){
        for(let k=0; k <= i ; k++) arr.push('#');
        for(let k = i ; k < n-1 ; k++ ) arr.push(' ');
        console.log(arr.join(''));
        arr = [];
    }
}  

module.exports = steps;


