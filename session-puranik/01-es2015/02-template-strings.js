const person = {
    name: 'John Doe',
    age: 32
};
const name = 'John', greeting = 'Good morning';

const greetingForJohn = greeting + ' ' + name + '!'; // upto ES5
const greetingForJohn = `${greeting} ${name}!`; // in ES6

// ES5 string
'<tr>' 
    '<td>' + person.name + '</td>' +
    '<td>' + person.age + '</td>' +
'</tr>'

// ES6 template string syntax (string can span multiple lines)
`<tr>
    <td>${person.name}</td>
    <td>${person.age}</td>
</tr>`;