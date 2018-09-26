// problem with traditional way to assign defaults
// 1. only trailing argumenst (ones towards the end) may be missing
// 2. cumbersome to use and defaults are not clear
function greet( name, message ) {
    // if( message === undefined ) {
    //     message = 'Good morning';
    // }
    message = message || 'Good morning';

    console.log( `${message} ${name}!` );
}

greet( 'Sita', 'Good day' );
greet( 'Gita' ); // message argument takes undefined value