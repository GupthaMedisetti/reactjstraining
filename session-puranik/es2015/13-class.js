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
class Employee extends Person {
    constructor( name, age, role, dept ) {
        // this.name = name; // don't repeat yourself
        // this.age = age;
        super( name, age ); // superclass constructor called as super()
        this.role = role;
        this.dept = dept;
    }

    getRole() {
        return this.role;
    }

    setRole( newRole ) {
        this.role = role;
    }

    celebrateBirthday() { // overrides base class implementation
        // this.age++; // don't repeat yourself
        super.celebrateBirthday();
        console.log( 'Happy birthday. Here is a gift voucher form us...' )
    }
}

let johnson = new Employee( 'Johnson', 32 );
console.log( johnson.getName() ); // inherited method
console.log( johnson.getRole() ); // own method
johnson.celebrateBirthday(); // overriden (own) method
console.log( johnson.age );