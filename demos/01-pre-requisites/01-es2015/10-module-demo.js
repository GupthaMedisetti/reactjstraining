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
 * Exports from other modules may be imported using the import keyword
 * 
 * Notes
 * 1. Bare imports are not yet supported - the ./ is necessary
 * 2. All modules imported within the importng module are fetched and executed before the importing module's script is run
 * 3. Modules to be imported need to be specified at compile-time. This means you cannot have an import within an if block!
 */

// Import only necessary variables, functions and classes. Only those exported can be imported here.
// including ellipsis throws an error - include it and try
console.log( 'before import' ); // this executes only after all imports are fetched and executed

// Method 1: import only what is required
// Note how the default is imported
import addQuotes, { caps, ellipsize/*, ellipsis */ } from './10-string-helper.js';

// Method 2: import everything into an object as its properties
import * as StringHelper from './10-string-helper.js'; 

console.log( 'after import' );

// console.log( 'ellipsis = ', ellipsis ); // error

// it is not possible to use exported variables, functions and classes without importing them
// console.log( `capitalize( 'hello' ) = ${capitalize( 'hello' )}` ); // error

console.log( 'StringHelper = ', StringHelper );
console.log( `StringHelper.capitalize( 'hello' ) = ${StringHelper.capitalize( 'hello' )}` );
console.log( `caps( 'hello' ) = `, caps( 'hello' ) );
console.log( addQuotes( 'With great power comes great responsibility' ) );

let btnEllipsize = document.getElementById( 'btn-ellipsize' ),
    strEl = document.getElementById( 'str' ),
    numCharsEl = document.getElementById( 'numChars' ),
    outputEl = document.getElementById( 'output' );

btnEllipsize.addEventListener( 'click', () => outputEl.innerHTML = ellipsize( strEl.value, numCharsEl.value ) );