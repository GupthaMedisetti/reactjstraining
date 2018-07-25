// the object that is passed gets destructured into url, method and success
function ajax( { url, method, success = function() { } } = { 
    url: 'http://www.amazon.com',
    method: 'get',
    success: function( response ) {
        console.log( response );
    }
}) {
    // let { url, method, success = function() { } } = config;

    console.log( url, method, success );
}

ajax(); // default gets applied
ajax({ // default is NOT applied - success property won't exist in config object inside ajax function (problem, problem!)
    url: 'http://www.flipkart.com',
    method: 'post'
});
