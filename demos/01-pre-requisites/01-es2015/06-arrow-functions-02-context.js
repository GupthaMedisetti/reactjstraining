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

// the function context ('this' keyword) is different not passed on from enclosing function to inner function when using the old syntax for inner function
let payroll = {
    department: {
        engineering: 10,
        accounts: 20
    },
    employees: [
        { name: 'John', department: 'engineering', salary: 10000 },
        { name: 'Jenny', department: 'accounts', salary: 20000 },
        { name: 'Barry', department: 'engineering', salary: 30000 },
    ],
    calculateBonus: function( percentage ) {
        var that = this; // store the enclosing function's context (the 'this' reference)

        this.employees.forEach( function( e ) { // usual (old) syntax for inner function
            console.log( `[old function syntax for inner function] this in inner function = ${this}` );
            console.log( `${e.name} gets a bonus of $${that.department[e.department] * e.salary / 100}` ); // try substituting that with this - it will result in an error
        });
    }
};

payroll.calculateBonus();

// The function context ('this' reference) is passed from enclosing function to inner function declared using arrow function syntax
let payroll2 = {
    department: {
        engineering: 10,
        accounts: 20
    },
    employees: [
        { name: 'John', department: 'engineering', salary: 10000 },
        { name: 'Jenny', department: 'accounts', salary: 20000 },
        { name: 'Barry', department: 'engineering', salary: 30000 },
    ],
    calculateBonus: function( percentage ) { // usual (old) syntax for functions
        this.employees.forEach( e => { // arrow function used for the inner function
            console.log( `[arrow function syntax for inner function] this in inner function = ${this}` );
            console.log( `${e.name} gets a bonus of $${this.department[e.department] * e.salary / 100}` );
        });
    }
};

payroll2.calculateBonus();