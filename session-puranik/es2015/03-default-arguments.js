function randomGreeting() {
    return Math.random() > 0.5 ? 'Hello' : 'Good evening';
}
// message variable gets value 'Hello' if message is not passed when calling greet()
function greet( name = 'World', message = randomGreeting() /*'Hello'*/ ) {
    // if( message === undefined ) {
    //     message = 'Good day';
    // }
    
    // message = message || 'Good day';
    
    console.log( `${message} ${name}!` );
}

greet( 'John', 'Good morning' );

greet( 'Rita' ); // message gets the default value instead of undefined
greet( 'Manoj' );
greet( 'Nikhil' );
greet( 'Natasha' );

greet( undefined, 'Have a nice day' );

function ajax( config = { 
    url: 'http://www.amazon.com',
    method: 'get',
    success: function( response ) {
        console.log( response );
    }
}) {
    console.log( config );
}

ajax(); // default gets applied
ajax({ // default is NOT applied - success property won't exist in config object inside ajax function (problem, problem!)
    url: 'http://www.flipkart.com',
    method: 'post'
});
