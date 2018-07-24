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

let obj;

// old syntax for method of an object
obj = {
    a: 1,
    getA: function() { // method defined using old syntax
        return this.a;
    }
};

console.log( `[old syntax for object's methods] obj.getA() = `, obj.getA() );

obj = {
    a: 1,
    getA() { // methods can be defined this way
        return this.a;
    }
};

console.log( `[new syntax for object's methods] obj.getA() = `, obj.getA() );