// variables declared with let have block scope
let x = 1;

{
    let x = 3; // this is a new variable
    let y = 2; // block-scope - y cannot be used outside the block
    console.log( 'x = ', x ); // 3
}

console.log( 'x = ', x ); // global x has old value of 1
console.log( 'y = ', y ); // this is error - reference error