/*
 * pwix:modal-info/src/common/js/config.js
 */

import _ from 'lodash';

ModalInfo._conf = {};

ModalInfo._defaults = {};

/**
 * @summary Package configuration
 *  Should be called *in same terms* both by the client and the server.
 * @locus Anywhere
 * @param {Object} o the runtime configuration of the package
 * @returns {Object} the package configuration
 */
ModalInfo.configure = function( o ){
    if( o && _.isObject( o )){
        _.merge( ModalInfo._conf, ModalInfo._defaults, o );
        // be verbose if asked for
        /*
        if( ModalInfo._conf.verbosity & ModalInfo.C.Verbose.CONFIGURE ){
            console.log( 'pwix:modal-info configure() with', o, 'building', ModalInfo._conf );
        }
        */
    }
    // also acts as a getter
    return ModalInfo._conf;
}

_.merge( ModalInfo._conf, ModalInfo._defaults );
