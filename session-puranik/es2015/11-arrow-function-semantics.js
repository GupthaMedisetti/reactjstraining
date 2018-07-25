/**
 * Way to define a method of an object upto ES5
 * celebrateBirthday: function() {

    }
    In ES6 (ES2015) we can do it this way too...
    celebrateBirthday() {

    }
 */
let person = {
    name: 'John',
    phones: [ '123456', '234567' ],
    countryCode: '+91',
    age: 32,
    celebrateBirthday( /* take argumnets here */ ) {
        console.log( 'this within celebrateBirthday is...' );
        console.log( this ); // within a method, "this" refers to the object itself

        function foo() {
            console.log( 'this within celebrateBirthday\'s foo is...' );
            console.log( this ); // context, i.e. "this" is not the object - foo is NOT a method
        }
        foo();

        // problem code
        this.phones.forEach(function( phone ) {
            // "this" is not defined in this function - it is NOT the celebrateBirthday()'s "this"
            console.log( this.countryCode + phone ); // undefined123456, undefined234567
        });

        // solution #1 (call bind(this))
        let boundFn = function( phone ) {
            console.log( this.countryCode + phone );
        }.bind( this );
        this.phones.forEach( boundFn );

        // solution #2
        let that = this; // (store the "this" reference )
        this.phones.forEach(function( phone ) {
            console.log( that.countryCode + phone );
        });

        // solution #3 - use arrow functions - preferred solution - using arrow functions helps avoid a frequent bug
        // when arrow functions are used for inner functions, the function context, i.e. "this" is inherited
        this.phones.forEach( phone => console.log( this.countryCode + phone ) );

        // NOTE: arrow functions are not a replacement for old-style function definition - if you DO NOT want the "this" to be inherited, then DO NOT use arrow functions
    }
};

person.celebrateBirthday();