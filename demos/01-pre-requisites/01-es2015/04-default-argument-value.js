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

/**
 * Default parameters
 */

function incr( a, step = 1 ) {
    return a + step;
}

let stepper = (function stepper() {
    var _counter = 1;

    return function() {
        return _counter++;
    }
}());

// stepper() call is evaluated at runtime
function incr2( a, step = stepper() ) {
    return a + step;
}

console.log( incr( 10, 2 ) );
console.log( incr( 10 ) );
console.log( incr( 10, undefined ) );

console.log( incr2( 10, 2 ) );
console.log( incr2( 10 ) );
console.log( incr2( 10 ) );
console.log( incr2( 10 ) );