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

// Array destructuring - syntax
let arr = [1, 2, 3, 4];
let [a, b] = arr;
console.log( `a = ${a}, b = ${b}` );

// Skipping items when destructuring
let [one, , three, , five, seven] = [1,2,3,4,5];
console.log( `one = ${one}, three = ${three}, five = ${five}, seven = ${seven}` );

// Separate declaration and initialization for variables when destructuring
let one_x, three_x, five_x;

[one_x, , three_x, , five_x] = [1,2,3,4,5];
console.log( `one_x = ${one_x}, three_x = ${three_x}, five_x = ${five_x}` );

// Assigning default values when destructuring
let one_y, three_y, five_y, seven_y;

[one_y, , three_y, , five_y, seven_y = 7] = [1,2,3,4,5];
console.log( one_y, three_y, five_y, seven_y );
console.log( `one_y = ${one_y}, three_y = ${three_y}, five_y = ${five_y}, seven_y = ${seven_y}` );