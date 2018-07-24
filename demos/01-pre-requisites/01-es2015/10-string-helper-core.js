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
 * The script within a module is executed in its own scope (and not global scope). Thus variables, functions and classes it defines are not available outside the module by default.
 * 
 * A module needs to specify which variables, functions and classes can be used outside of it. Those exported can be used outside the module. Rest are available only within a module.
 * 
 * The export keyword is applied before a variable, function or class declaration. Alternatively use export { identifier } or export { identifier1 as identifier2 } to export something after its definition
 */

console.log( 'start of string helper module' );

// this is not exported and hence cannot be used outside of this module (i.e. file)
let ellipsis = '...';

// function that ellipsizes a string if its length exceeds numChars
export let ellipsize = ( str, numChars ) => str.length > numChars ? str.substr( 0, numChars ) + ellipsis : str;

// function that returns a version of the string passed with first letter capitalized
let capitalize = ( str ) => str.charAt( 0 ).toLocaleUpperCase() + str.substr( 1 );

// you can provide an alternate export variable this way
export { capitalize };
export { capitalize as caps };