/*
 * /src/client/components/miDialog/miDialog.js
 *
 * Display object informations
 * 
 * Parms:
 *  - title: the title of the dialog, defaulting to 'Informations'
 *  - name: a name to be displayed on the first row, defaulting to nothing
 *  - object: the object to be displayed
 */

import { pwixI18n as i18n } from 'meteor/pwix:i18n';

import '../../../common/js/index.js';

import '../miPanel/miPanel.js';

import './miDialog.html';

Template.miDialog.onRendered( function(){
    this.$( '.modal' ).modal( 'show' );
});

Template.miDialog.helpers({
    // i18n namespace
    namespace(){
        return pwiModalInfo.strings;
    },

    // miPanel parameters
    panelParms(){
        return {
            name: this.name,
            object: this.object
        };
    },

    // modal title
    title(){
        return this.title ? this.title : i18n.label( pwiModalInfo.strings, 'dialog.informations' );
    }
});

Template.miDialog.events({

    // remove the Blaze element from the DOM
    'hidden.bs.modal .miModalIinfo'( event, instance ){
        Blaze.remove( instance.view );
    }
});
