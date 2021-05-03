// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, stair = '') {
    if(n === row ) {
        return; 
    }
    if( 2 * n === stair.length){
        console.log(stair.slice(1)); //Edge case not covered but ... nice ;)
        return pyramid(n, row+1);
    }
    if(stair.length < n - row  || stair.length > n + row){
        stair += ' ';
    }else{
        stair +='#';
    }
    return pyramid(n,row,stair);
}

pyramid(2);

module.exports = pyramid;


/* function pyramid(n) {
    let columns = 2 * n - 1 ;
    let temp = '';
    for(let i = 0; i< columns ; i++) temp+=' ';
    for(let i = 0 ; i < n ; i++ ){
        let arr = temp.split('');
        for(let p = n-i-1 ; p < n+i ; p++ )arr[p] = '#';
        console.log(arr.join(''));
    }
} */