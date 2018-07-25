// ... is called rest operator
function foo( ...argumentsAsArray ) { // es2015 way to convert arguments to an array
    console.log( 'foo called' );
    console.log( arguments ); // a special variable available to every function

    // arguments is like an array - but not an array
    console.log(
        arguments[0],
        arguments[1],
        arguments.length
    );

    // arguments is not an array - so we cannot call sort() - will result in error
    // arguments.sort();

    // old JS way to convert arguments to an array
    // let argumentsAsArray = Array.prototype.slice.apply( arguments );
    
    
    console.log( argumentsAsArray.sort() );
}

foo();
foo( 'hello', 'world', 'good day', 'bangalore' );

function sum( transform, ...args ) { // all except first arguments will become items in the args array
    // let transform = args[0];
    let result = 0;

    for( let i = 0; i < args.length; i++ ) {
        result = result + transform( args[i] );
    }

    console.log( result );
}

function square( n ) {
    return n * n;
}

// sum( function( n ) { return n * n } )
sum( square, 3, 7, 9, 13, 19, 25 );
