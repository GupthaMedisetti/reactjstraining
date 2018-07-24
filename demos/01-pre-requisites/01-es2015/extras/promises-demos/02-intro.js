/**
 *  Promise: A handle for async operations
    Callbacks are always executed after completion of current run of event loop
    Callbacks are called even if they are added after reolution/rejection
    Multiple callbacks may be called and they are called in insertion order
 */

 // old pattern in JS - passing callbacks to get return value of computation/do something asynchronously
function addAsync( a, b, callback ) {
    setTimeout( function() {
        callback( a + b );
    }, parseInt( Math.random() * 10000 ) );
}

var sum =  addAsync( 1, 2, function( result ) {
    console.log( result );
});

console.log( 'after calling addAsync()' );

function addAsyncUsingPromises( a, b ) {
    let promise = new Promise(function( resolve, reject ) {
        // resolve( a + b ); // synchronous version - even this will be resolved only after execution of current set of statements
        addAsync(a, b, resolve); // you call resolve once the asyncronous operation successfully completes

        // if it failed you will write code like below
        // reject( err ); // err is an Error object with error details
    });
    

    return promise;
}

let someOtherPromise = Promise.resolve('hello');

// we will use promisified version this way
addAsyncUsingPromises(1,2) // promises can be chained
    .then(function( result ) {
            console.log( result );
            return Promise.resolve( result ); // pass the promise to the next handler // we dont need to do any other async operation
        },
        function( err ) {
            console.log( err );
        }
    )
    .then(function( result ) {
        console.log( result );
        return Promise.resolve( someOtherPromise ); // this promise resolves when someOtherPromise resolves
    })
    .then(function( result ) {
        console.log( '[handler #2] : ', result.resultPrevoius, result.resultCurrent );
    })
    .catch(function( err ) {
        console.log( err );
    })

// we will use promisified version this way
addAsyncUsingPromises(1,2) // promises can be chained
    .then(function( result ) {
            let promise = new Promise(function(resolve, reject) { // in case we need to do further async operations we can do this way
                setTimeout(function() {
                    console.log( '[handler #1] : ', result );
                    resolve({ // if this had been reject then catch would get executed directly
                        resultPrevoius : result,
                        resultCurrent: '123, Marine Drive, Mumbai - 40'
                    });
                }, 1000);
                /*
                $.ajax({
                    success: function() {},
                    error: function() { reject(err); }
                })
                */
            });
            return promise;
        },
        function( err ) {
            console.log( err );
        }
    )
    .then(function( result ) {
        console.log( '[handler #2] : ', result.resultPrevoius, result.resultCurrent );
    })
    .catch(function( err ) { // executed immediately if some intermediate resolve handler results in rejection within the promise it returns
        console.log( err );
    })

let somePromise = addAsyncUsingPromises(1,2);

setTimeout(function() {
    somePromise.then(function( result ) {
        console.log( 'this handler has been added after promise has been resolved : ', result );
    });
}, 2000);

// accepts an array of promises and returns a promise
Promise.all( [ addAsyncUsingPromises(1,2), addAsyncUsingPromises(3, 4), addAsyncUsingPromises(5, 6) ] ) // resolved if all promises resolve
    .then(function( result ) {
        console.log( 'result of all : ', result ); // array of the 3 results from the 3 async operations
    })
    .catch(function( err ) {
        console.log( 'one of 3 operations failed' );
    });


// accepts an array of promises and returns a promise
Promise.race( [ addAsyncUsingPromises(1,2), addAsyncUsingPromises(3, 4), addAsyncUsingPromises(5, 6) ] ) // resolved as soon as one of the promises resolves
    .then(function( result ) {
        console.log( 'result of race : ', result ); // array of the 3 results from the 3 async operations
    })
    .catch(function( err ) {
        console.log( 'one of 3 operations failed' );
    });