/*
 * pwix:modal-info/src/common/js/config.js
 */

//console.log( 'pwix:modal-info/src/common/js/config.js defining globally exported miModalInfo object' );

miModalInfo = {

    // client-specific data and functions
    client: {},

    // package configuration
    conf: {},

    // should be *in same terms* called both by the client and the server
    configure: function( o ){
        console.log( 'pwix:modal-info configure() with', o );
        miModalInfo.conf = {
            ...miModalInfo.conf,
            ...o
        };
    },

    // server-specific data and functions
    server: {}
};
