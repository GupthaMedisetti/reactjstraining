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

let protoObj = {
    a: 1,
    toString() {
        return `[inside protoObj] a = ${this.a}`;
    }
}

// old syntax for setting up prototype of an object
// Aside: instead of setting up individual properties, an alternative is to pass a property descriptor map
let obj1 = Object.create( protoObj );
obj1.a = 2,
obj1.toString = function() {
    return `[inside obj1] a = ${this.a}; [inherited from protoObj] a = ${Object.getPrototypeOf(this).a}`;
};

// new syntax - use __proto__ to set up the prototype of the object
// the super keyword refers to the prototype of the object having the called method
let obj2 = {
    __proto__: protoObj,
    a: 2,
    toString() {
        return `[inside obj2] a = ${this.a}; [inherited from protoObj] a = ${super.a}`;
    }
};

// test out the methods
console.log( protoObj.toString() );
console.dir( obj1.toString() );
console.dir( obj2.toString() );