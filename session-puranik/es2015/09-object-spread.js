// object spread is not part of es2015 (there in a future version of JS)
// But we will be using Babel when working with React and Redux
let john = {
    name: 'John',
    spouse: 'Rita',
    numChildren: 2,
    city: 'Bangalore',
    dob: '25-05-1986'
}

let johnsonEmployee = {
    name: 'Johnson', // official name
    city: 'Bangalore',
    dob: '12-04-1986', // official birthdate
    salary: 100000
}

let johnCompleteInfo = {
    ...john, ...johnsonEmployee
}

// result of above operation
// johnCompleteInfo = {
//     name: 'Johnson',
//     spouse: 'Rita',
//     numChildren: 2,
//     city: 'Bangalore',
//     dob: '12-04-1986',
//     salary: 100000
// };

console.log( johnCompleteInfo );