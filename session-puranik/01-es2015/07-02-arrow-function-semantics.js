const person = {
    name: 'John',
    age: 32,
    emailids: [
        'john.doe@example.com',
        'john@gmail.com'
    ],
    print: function() { // method of a function has context set to the object itself - person object here
        console.log( 'print : ', this ); // context of a function is accessed using the "this" keyword

        function localPrint() {
            // console.log( 'localPrint : ', this ); // th "this" is different - major cause for bugs
        }

        // const self = this;

        // arrow functions inherit the context ("this") from the outer function
        this.emailids.forEach(
            emailid => { // we tend to forget this is an inner function of print
                // console.log( self.name + ' : ' + emailid )
                console.log( this.name + ' : ' + emailid )
            }
        );

        localPrint();
    } 
};

person.print();