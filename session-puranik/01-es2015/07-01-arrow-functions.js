// function which has no return stmt encountered at runtime will return undefined

// 2 syntaxes for definining function upto ES5
// function declaration syntax
function add( a, b ) {
    return a + b;
}

// function expression syntax
const add2 = function( a, b ) {
    return a + b;
};

// new syntax for functions - arrow function syntax (lambdas)
const add3 = ( a, b ) => {
    return a + b;
};

// in case we have only one statement and that is a return statement then we can use this shorter syntax
const add4 = ( a, b ) => a + b;

// suppose function has only one argument
const square = n => n * n;

console.log( add( 1, 2 ) );
console.log( add2( 10, 20 ) );
console.log( add3( 100, 200 ) );