// spread operator (...) : inverse of rest (breaks down an array in comma-separated values)

let numbers = [ 10, 40, 30, 80, 50, 20 ];

// let min = Math.min( numbers ); // does not work
let min = Math.min( 10, 40, 30, 80, 50, 20 ); // does not work
let max = Math.max( 10, 40, 30, 80, 50, 20 ); // does not work

let minOldWay = Math.min.apply( null, numbers )
let maxOldWay = Math.max.apply( null, numbers )

// spread operator spreads the items of an array as comma-separated values
let minNewWay = Math.min( ...numbers );
let maxNewWay = Math.max( ...numbers );

console.log( min, max );
console.log( minOldWay, maxOldWay );
console.log( minOldWay, maxOldWay );

// Exercise: Concatenate 2 arrays using spread operator
// numbers1And2 = [ 2, 4, 6, 3, 5, 7 ]
let numbers1 = [ 2, 4, 6 ], numbers2 = [ 3, 5, 7 ];
let numbers1And2 = [ ...numbers1, ...numbers2 ];
console.log( numbers1And2 );