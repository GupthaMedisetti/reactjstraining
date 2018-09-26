// es6 way for giving argument defaults
function greet( name = 'John', message = 'Good morning' ) {
    console.log( `${message} ${name}!` );
}

greet( 'Sita', 'Good day' );
greet( 'Gita' ); // message argument takes default value of 'Good morning'
greet( undefined, 'Good evening' ); // message argument takes default value of 'Good morning'

function ajax( options = {
    url: 'https://www.example.com/users',
    method: 'GET',
    success: function( result ) { },
    error: function( err ) { console.log( err ); }
} ) {
    console.log( options );
}

ajax(
    {
        url: 'https://www.example.com/users',
        method: 'GET',
        success: function( result ) {
            console.log( 'set of users is...' );
            console.log( result );
        }
    }
);

ajax(); // undefined for options