/*
 * pwix:modal-info/src/common/js/trace.js
 */

_verbose = function( level ){
    if( ModalInfo.configure().verbosity & level ){
        let args = [ ...arguments ];
        args.shift();
        console.debug( ...args );
    }
};

_trace = function( functionName ){
    _verbose( ModalInfo.C.Verbose.FUNCTIONS, ...arguments );
};
