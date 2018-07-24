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

// A single or double-quoted string can span only one line - it is possible to use the \ character at the end of a line, in order to continue the string onto the next line - but this is cumbersome. Also the newline character is to be escaped to have newlines in the string.
let greeting = "Hello";

// ES2015 introduces backtick (the ` character) enclosed strings. The newlines and other whitespaces are preserved as such.
let greeting2 = `Good morning.
                 Have a nice day!`;

console.log( 'greeting = ', greeting );
console.log( 'greeting2 = ', greeting2 );

// It is possible to include variable inside backtick strings by enclosing it within ${..}. The variable is evaluated when the string itself is evaluated (i.e. gets declared and initialized, ot simply assigned). This feature is called interpolation. This is a little more convenient than concatenating strings with variables.
let name = 'John'

// Before ES6: concatenating strings with variables
console.log( greeting + ' ' + name + '. how are you?');

// In ES6 - using interpolation
console.log( `${greeting} ${name} . how are you?`);

// Another example of interpolation
function greeting() {
    return Math.random() <= 0.5 ? 'Good morning' : 'Good evening';
}

// Call greeting() a few times to get a randomly generated greeting message
console.log( `${greeting()} ${name} . how are you?` );
console.log( `${greeting()} ${name} . how are you?` );
console.log( `${greeting()} ${name} . how are you?` );
console.log( `${greeting()} ${name} . how are you?` );