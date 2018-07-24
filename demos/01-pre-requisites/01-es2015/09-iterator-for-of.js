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
 * ES2015 introduces a new construct - for..of loop, for iterating over a group of objects called Iterables (data structures that can be iterated over). Arrays, Strings and Array-like objects (arguments object of a function, DOM NodeList etc.) are all iterables. Additionally ES2015 introduces new iterable data structures like Map, Set etc.
 * 
 * Note: Unlike for..in loop, the loop variable is assigned the value, rather than index/property name. Aditinally only collection properties are returned by for..of as against all enumerable properties that are returned by for..in
 */

/**
 * Iterate over an array using for..in loop
 * i is the index
 * order not guaranteed
 * applicable in general to object
 */
// using const ensures we don't update the values in the loop (use let if you want to update)
for( const i in [ 10, 20, 30, 40 ] ) {
    console.log( `inside for..in loop i = `, i );
}

/**
 * Iterate over an array using for..of loop
 * v is the value
 * order is guaranteed
 * applicable to iterables only
 */
for( const v of [ 10, 20, 30, 40 ] ) {
  console.log( `inside for..in loop v = `, v );
}

// iterating over a string gives the characters of the string
let str = `hello`;
for(const char of str) {
    console.log(char);
}