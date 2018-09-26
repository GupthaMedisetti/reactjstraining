function defaultErrorHandler( err ) { console.log( err ); }

function ajax( { url, method, success, error = defaultErrorHandler } = {
    url: 'https://www.example.com/users',
    method: 'GET',
    success: function( result ) { },
    error: defaultErrorHandler
} ) {
    // let { url, method, success, error } = options;
    console.log( url );
    console.log( method );
    console.log( success );
    console.log( error );
}

ajax(
    { // error will get default value while destructuring
        url: 'https://www.example.com/users',
        method: 'GET',
        success: function( result ) {
            console.log( 'set of users is...' );
            console.log( result );
        }
    }
);

ajax(); // options will get default object