// variables declared with const have block scope
const x = 1;

{
    const x = 3; // this is a new variable
    const y = 2;
    console.log( 'x = ', x ); // 3
}

console.log( 'x = ', x ); // global x has old value of 1

x = 101; // const variables cannot be re-assigned

console.log( 'y = ', y ); // this is error - reference error