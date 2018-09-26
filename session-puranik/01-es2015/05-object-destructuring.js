const person = {
    name: 'John',
    age: 32,
    emailids: [
        'john.doe@example.com',
        'john.doe@gmail.com',
        'coolguy@gmail.com',
    ],
    address: {
        first_line: '#302',
        second_line: 'Oakridge',
        city: 'San Francisco',
        zip_code: 58110
    }
};

// upto ES5
// const name = person.name, age = person.age, primary_email_id = person.emailids[0], city = person.address.city, zip_code = person.address.zip_code, spouse_name = person.spouse_name;

// object destructuring in ES6
const { name, age, emailids: [ primary_email_id ], address: { city, zip_code : pin_code, district : county = 'Santa Clara' }, spouse_name = 'Jane Doe' } = person;

console.log(
    name,
    age,
    primary_email_id,
    city,
    pin_code,
    spouse_name,
    county
);