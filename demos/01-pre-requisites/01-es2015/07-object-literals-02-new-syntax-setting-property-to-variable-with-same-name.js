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
 * Old and new syntax for creating an object whose properties happen to have the same name as variables that set their value
 */

function shoppingCart() {
    let items = [];

    let find = function( item ) {
        return items.indexOf( item );
    };

    let add = function( item ) {
        if( find( item ) === -1 ) {
            items.push( item );
        }
    };

    let remove = function( item ) {
        items.splice( find( item ), 1 );
    };

    let show = function() {
        console.log( 'items = ', items );
    };

    // old syntax
    // return {
    //     add: add,
    //     remove: remove,
    //     show: show
    // }

    // new syntax - since property values come from variable with same name, we can use the concise syntax
    return {
        add,
        remove,
        show
    }
}

let groceriesCart = shoppingCart();
groceriesCart.add( 'Lays potato chips' )
groceriesCart.add( 'Hair oil' );
groceriesCart.show();