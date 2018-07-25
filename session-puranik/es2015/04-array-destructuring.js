// destructuring means storing parts of an array or object into variables
let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

let first = days[0], second = days[1], third = days[2], sixth = days[5], eighth = days[7];

console.log( 
    first,
    second,
    third,
    sixth,
    eighth
);

// destructuring syntax
// Use ',' to skip items
// eight = 'Holiday' gives a default
let [ one, two, three, , , six, , eight = 'Holiday' ] = days;
console.log(
    one,
    two,
    three,
    six,
    eight
);