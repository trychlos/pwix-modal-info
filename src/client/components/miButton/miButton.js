/*
 * /src/client/components/miButton/miButton.js
 *
 * A button which will trigger the modal dialog.
 * 
 * Parms:
 *  - see README.md
 */

import { pwixI18n } from 'meteor/pwix:i18n';
import { Modal } from 'meteor/pwix:modal';

import '../miPanel/miPanel.js';

import './miButton.html';

Template.miButton.helpers({
    // classes
    classes(){
        return this.classButton || 'btn-sm btn-primary';
    },

    // whether the button is enabled ?
    enabled(){
        const enabled = Object.keys( this ).includes( 'enabled' ) ? this.enabled : true;
        return enabled ? '' : 'disabled';
    },

    // a title for the button
    titleButton(){
        return this.titleButton ? this.titleButton : pwixI18n.label( I18N, 'button.informations', this.name || this.object?._id || pwixI18n.label( I18N, 'button.none' ));
    }
});

Template.miButton.events({
    // open the dialog
    'click button.js-info'( event, instance ){
        Modal.run({
            mdTitle: this.titleDialog || pwixI18n.label( I18N, 'dialog.informations' ),
            mdBody: 'miPanel',
            mdButtons: [ Modal.C.Button.CLOSE ],
            // parameters targeting the miPanel component
            ...this
        });
    }
});
