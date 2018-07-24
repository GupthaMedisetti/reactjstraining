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

// Like let, const makes a variable block-scoped. Unlike let however, the variable's value cannot be changed
const a = 1;

// Uncommenting the following line will result in an error
// a = 2;

{
    const a = 2; // constants are block-scoped - so this is a new constant a
    console.log( 'inside the block, a = ', a );
}

console.log( 'outside the block, a = ', a );

// Note that when used to declare an object, the variable itself cannot be re-assigned, but its properties can still be changed
const obj = {
    a: 1
};

// Uncommenting the following will result in an error
/*
obj = {
    a: 2
};
*/

obj.a = 3; // this is fine
console.log( 'after resetting obj.a, obj.a = ', obj.a );

// Aside: The ES5 method Object.freeze() can be used to prevent changes to an object's structure
/*
Object.freeze( obj ); // prevents changes to the properties
obj.a = 3; // error
*/