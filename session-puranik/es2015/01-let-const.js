var x = 1; // global x
let y = 1; // global y

// var variables can be redeclare
var x = 10; // no error - assumes value 10
// let y = 10; // error

// if, for block etc.
{
    var x = 2; // block-scope x is same as the global x
    let y = 2; // block-scope y is differnt from global y
    console.log( 'within block, x = ', x );
    console.log( 'within block, y = ', y ); 
}

console.log( 'outside block, x = ', x );
console.log( 'outside block, y = ', y );

function foo() {
    var x = 3;
    let y = 3;

    console.log( 'inside function, x = ', x );
    console.log( 'inside function, y = ', y );    
}

foo();

console.log( 'outside block, x = ', x );
console.log( 'outside block, y = ', y );

// const has same rules as let + const variables cannot be re-assigned
const a = 10;
// a = 11; // error - const variables cannot be reassigned

const obj = {
    p: 10,
    q: 20
};

obj.p = 100; // this is possible
console.log( obj );

obj = { // error - const
    p: 100,
    q: 200
};