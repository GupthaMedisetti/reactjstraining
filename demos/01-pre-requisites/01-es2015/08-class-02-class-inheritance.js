/*
 * React JS Demos v1.0.0
 *
 * Copyright Prashanth Puranik
 * All rights reserved. No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the author, except in the case of brief quotations embodied in critical reviews and certain other non-commercial uses permitted by copyright law. For permission requests, write to the publisher, addressed "Attention: Permissions Coordinator" at the address below.
 * 
 * Prahara Consulting Private Limited
 * 204, Sri Vari Enclave
 * Horamavu Agara Road, Horamavu, Bangalore.
 * 
 * puranik@digdeeper.in
 * 
 * Date: 2018-02-28T17:24Z
 */

// Person1 class (using old syntax)
function Person1( name, age ) {
    this.name = name;
    this.age = age;
}

Person1.prototype.getAge = function() {
    return this.age;
};

Person1.prototype.logDetails = function() {
    console.log( `name = ${this.name}; age = ${this.age}` );
};

// Employee class and inheritance setup using old syntax
function Employee1( name, age, role, dept ) {
    // call Person constructor, passing the newly created object as its context, and name & age
    Person1.call( this, name, age );

    this.role = role;
    this.dept = dept;
}

// setup inheritance (and reset the constructor property)
Employee1.prototype = Object.create( Person1.prototype );
Employee1.prototype.constructor = Employee1;

// setup Employee1 specific methods (only two methods shown as illustraton)
Employee1.prototype.getRole = function() {
    return this.role;
};

Employee1.prototype.logDetails = function() {
    // disambiguate when calling super class method with the same name
    Object.getPrototypeOf( Employee1.prototype ).logDetails.call( this );

    console.log( `role = ${this.role}; dept = ${this.dept}` );
};

let mark = new Employee1( 'Mark', 40, 'Accountant', 'Finance' );
console.log( 'mark.getAge() = ', mark.getAge() ); // inherited from Person
console.log( 'mark.getRole() = ', mark.getRole() ); // own method
mark.logDetails(); // own method

// Person2 class (using new syntax)
class Person2 {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    logDetails() {
        console.log( `name = ${this.name}; age = ${this.age}` );
    }
}

// Employee class and inheritance setup using new syntax (the extends keyword)
class Employee2 extends Person2 {
    constructor(name, age, role, dept) {
        // Inside the constructor, super keyword refers to the super class' constructor (i.e Person)
        // The super class constructor is called with the context of the derived class constructor
        super(name, age);

        this.role = role;
        this.dept = dept;
    }

    getRole() {
        return this.role;
    }

    logDetails() {
        // inside a method, super refers to a base class method with the same name
        super.logDetails();
        console.log( `${this.name} works for ${this.dept}` );
    }
}

let mary = new Employee2( 'Mary', 36, 'Vice President', 'Marketing' );
console.log( 'mary.getAge() = ', mary.getAge() );
console.log( 'mary.getRole() = ', mary.getRole() );
mary.logDetails();