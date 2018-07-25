let person = {
    name: 'John',
    age: 32,
    contacts: [
        {
            type: 'phone',
            value: 9876543210,
            code: '91'
        },
        { 
            type: 'email',
            value: 'john@example.com'
        }
    ],
    address: {
        first_line: '#302, Park Street',
        second_line: 'Wilson Garden',
        city: 'Bangalore',
        pincode: 560032
    }
};

// let name = person.name, primaryContactType = person.contacts[0].type, primaryContactValue = person.contacts[0].value, personCity = person.address.city;

// code : secondaryContactCode = 0 gives default value for secondaryContactCode
let { name, contacts : [ { type : primaryContactType, value : primaryContactValue }, { code : secondaryContactCode = 0 } ], address : { city : personCity } } = person;

console.log( name, primaryContactType, primaryContactValue, secondaryContactCode, personCity );

