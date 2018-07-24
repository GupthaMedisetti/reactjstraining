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

(function foo() {
  let a = 1;

  // unlike var keyword, redeclaration of a variable declared using let results in an error
  // let a = 1.5;

  // declare another variable a inside the block
  {
    let a = 2;
    console.log( 'inside the block, a = ', a );
  }


  console.log( 'outside the block, a = ', a );
}());

// unlike a variable declared using var keyword, a global variable declared using let does not get added as property of the global object (window in a browser, global in node.js etc.)
let x = 1;
console.log( 'window.x = ', window.x );

var y = 1;
console.log( 'window.y = ', window.y );

// let declarations are not hoisted - uncommenting the following line results in an error
// console.log( 'z = ', z ); // error
let z = 1;
console.log( 'z = ', z );