// ES2015 introduced classes
class Person {
    // no concept of defining data members exist in JS classes
    // no concept of public/private/protected in JS classes - everything is public
    // there is not concept of static variable in JS classes

    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    setName( newName ) {
        this.name = newName;
    }

    celebrateBirthday() {
        this.age++;
    }

    static sayHello() { // static methods "belong to the class" rather than objects of the class
        console.log( 'hello' );
    }
}

let john = new Person( 'John', 32 );

console.log( john );
john.celebrateBirthday();
console.log( john.age ); // should now be 33

Person.sayHello();

// Exercise: Define an Employee class that has name, age, role, dept.
// Define getName(), setName( newName ), getRole(), setROle( newRole ), celebrateBirthday() -> prints out a line saying "Happy birthday" and then increments age