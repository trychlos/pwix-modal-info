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
        // check that keys exist
        let built_conf = {};
        Object.keys( o ).forEach(( it ) => {
            if( Object.keys( ModalInfo._defaults ).includes( it )){
                built_conf[it] = o[it];
            } else {
                console.warn( 'pwix:modal-info configure() ignore unmanaged key \''+it+'\'' );
            }
        });
        if( Object.keys( built_conf ).length ){
            _conf = _.merge( ModalInfo._defaults, _conf, built_conf );
            ModalInfo._conf.set( _conf );
            _verbose( ModalInfo.C.Verbose.CONFIGURE, 'pwix:modal-info configure() with', built_conf );
        }
    }
    // also acts as a getter
    return ModalInfo._conf.get();
}

_conf = _.merge( {}, ModalInfo._defaults );
ModalInfo._conf.set( _conf );
