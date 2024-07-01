/*
 * pwix:modal-info/src/common/js/configure.js
 */

import _ from 'lodash';

import { ReactiveVar } from 'meteor/reactive-var';

let _conf = {};

ModalInfo._conf = new ReactiveVar( _conf );

ModalInfo._defaults = {
    label_zero: '&lt;System&gt;',
    verbosity: ModalInfo.C.Verbose.CONFIGURE
};

/**
 * @summary Get/set the package configuration
 *  Should be called *in same terms* both by the client and the server.
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
ModalInfo.configure = function( o ){
    if( o && _.isObject( o )){
        _.merge( _conf, ModalInfo._defaults, o );
        ModalInfo._conf.set( _conf );
        _verbose( ModalInfo.C.Verbose.CONFIGURE, 'pwix:ModalInfo configure() with', o );
    }
    // also acts as a getter
    return ModalInfo._conf.get();
}

_.merge( _conf, ModalInfo._defaults );
ModalInfo._conf.set( _conf );
