// syntax #1 and #2 are old JS style
// #1: function declaration syntax
function greet( name, message ) {
    console.log( `${message} ${name}!` );
}

// #2: function expression syntax
let greet2 = function( name, message ) {
    console.log( `${message} ${name}!` );
};

// #3: arrow function syntax
let greet3 = ( name, message ) => {
    console.log( `${message} ${name}!` );
};

// since we do not care about the return value in this case, we can define the function succintly this way
let greet4 = ( name, message ) => console.log( `${message} ${name}!` );

// Exercise: Try the arrow function syntax to write a add() functions that accepts 2 numbers and returns the sum
// In arrow functions, if we have just one statement and that is a return statement, then we can omit the braces and the return keyword
let add = ( a, b ) => a + b; // a + b; is same as { return a + b; }

console.log( add( 1, 2 ) );

// if function has exactly one argument, then  the parenthesis around the argument is optional
let square = n => n * n;