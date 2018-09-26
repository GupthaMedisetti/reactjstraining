const john = {
    name: "John Doe",
    age: 32
};

console.log( john );
john.age++; // object properties can be modified
console.log( john );

john = { // completely new object (with same values) being assigned
    name: "John Doe",
    age: 32
};

// Object.freeze() from ES5 will prevent changes to object properties