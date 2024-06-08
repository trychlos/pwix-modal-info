/*
 * pwix:modal-info/src/server/js/check_npms.js
 */

import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

if( false ){
    // whitelist here (including package.json) the packages which anot automatically detected
}

checkNpmVersions({
    'strftime': '^0.10.0'
},
    'pwix:modal-info'
);
