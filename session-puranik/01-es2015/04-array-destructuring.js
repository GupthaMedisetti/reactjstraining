const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

// const first = days[0], second = days[1], seventh = days[6], eighth = days[7] || 'Holiday';

// we will use array destructuring syntax
const [ first, second, , , , , seventh, eighth = 'Holiday' ] = days;
console.log( first, second, seventh, eighth );