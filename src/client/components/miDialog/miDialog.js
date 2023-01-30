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
    const self = this;

    if( self.$( '.modal' ).draggable ){
        self.$( '.modal' ).draggable({
            handle: '.modal-header',
            cursor: 'grab'
        });
    }

    self.$( '.modal' ).modal( 'show' );

    // add a tag class to body element to let the stylesheet identify *this* modal
    $( 'body' ).addClass( 'miModalInfo-miDialog-class' );
});

Template.miDialog.helpers({
    // i18n namespace
    namespace(){
        return miModalInfo.strings;
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
        return this.title ? this.title : i18n.label( miModalInfo.strings, 'dialog.informations' );
    }
});

Template.miDialog.events({
    // remove the Blaze element from the DOM
    'hidden.bs.modal .miDialog'( event, instance ){
        $( 'body' ).removeClass( 'miModalInfo-miDialog-class' );
        Blaze.remove( instance.view );
    }
});
