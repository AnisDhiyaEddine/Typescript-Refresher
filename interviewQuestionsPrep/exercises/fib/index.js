// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// memoezation // The idea is very clear... ;; 


function fib(n) {
    let t1 = 0;
    let t2 = 1;
    let res = 0;
    if (n < 2) return n;
    for(let i = 1; i < n ; i++){
        res = t1 + t2;
        t1 = t2;
        t2 = res;
    }
    return res;
}

console.log(fib(3));

module.exports = fib;
