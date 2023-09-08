/*
 * /src/client/components/miButton/miButton.js
 *
 * A button which will trigger the modal dialog.
 * 
 * Parms:
 *  - titleButton: the title attached to the button, defaulting to 'Informations'
 *  - titleDialog: the title of the to-be-opened dialog, defaulting to 'Informations'
 *  - name: the name to be displayed at the top of the object informations, defaulting to nothing
 *  - object: the object to be displayed
 */

import { pwixI18n as i18n } from 'meteor/pwix:i18n';

import '../miDialog/miDialog.js';

import './miButton.html';

Template.miButton.helpers({
    // a title for the button
    titleButton(){
        return this.titleButton ? this.titleButton : i18n.label( ModalInfo.strings, 'button.informations', this.name || this.object._id );
    }
});

Template.miButton.events({
    // open the dialog
    'click button.js-info'( event, instance ){
        Blaze.renderWithData( Template.miDialog, {
            object: Template.currentData().object,
            name: Template.currentData().name,
            title: Template.currentData().titleDialog
        }, $( 'body' )[0] );
    }
});
