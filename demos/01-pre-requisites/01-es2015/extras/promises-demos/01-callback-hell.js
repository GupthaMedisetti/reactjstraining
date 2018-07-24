/// <reference path="../node_modules/@types/jquery/index.d.ts" />
function getSenderAddress( messageId ) {
    $.ajax({
        url: '/messages/' + messageId,
        method: 'GET',
        success: function(message) {
            $.ajax({
                url: '/siteSubcribers/' + message.sender.id,
                method: 'GET',
                success: function( siteSubscriber ) {
                    console.log( siteSubscriber.address );
                    $.ajax({

                    });
                }
            });
        },
        error: function() {
            //do something on error - maybe send details to server
        }
    });
}

// jQuery supports promises
function getSenderAddress( messageId ) {
    $.ajax({
        url: '/messages/' + messageId,
        method: 'GET'
    })
    .done(function(message) {
        $.ajax({
            url: '/siteSubcribers/' + message.sender.id,
            method: 'GET',
            success: function( siteSubscriber ) {
                console.log( siteSubscriber.address );
                $.ajax({

                });
            }
        });
    })
    .fail(function() {
        //do something on error - maybe send details to server
    });
}

// jQuery supports promises
// @todo: is this kind of chaining possible in jquery using done() or then()?
function getSenderAddress( messageId ) {
    $.ajax({
        url: '/messages/' + messageId,
        method: 'GET'
    })
    .done(function(message) {
        $.ajax({
            url: '/siteSubcribers/' + message.sender.id,
            method: 'GET'
        })
    })
    .done(function( siteSubscriber ) {
        console.log( siteSubscriber.address );
        $.ajax({

        });
    })
    .fail(function() {
        //do something on error - maybe send details to server
    });
}