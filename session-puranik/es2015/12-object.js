let name = 'John', age = 32;

let john = {
    name, // if property name and variable from which it is set have the same name, we can avoid the duplication now - instead of { ..., name: name, ... } we can simply say { ..., name, ... }
    age,
    city: 'Bangalore',
    getAge: function() { // old syntax for methods
        return this.age;
    },
    setAge : newAge => { // old syntax (but with new syntax for function - arrow function)
        this.age = newAge;
    },
    getCity() { // new syntax for methods
        return this.city;
    },
    setCity( newCity ) { // new syntax
        this.city = newCity;
    }
}