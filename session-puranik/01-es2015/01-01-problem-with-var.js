// variables declared with var did not have block scope
var x = 1;

{
    var x = 3; // this re-assigns the x we initialized
    var y = 2; // no block-scope - y can be used outside the block
}

console.log( 'x = ', x ); // global x has new value of 3
console.log( 'y = ', y ); // this is ok