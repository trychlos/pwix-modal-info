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

import { pwixI18n } from 'meteor/pwix:i18n';
import { Modal } from 'meteor/pwix:modal';

import '../../../common/js/index.js';

import '../miPanel/miPanel.js';

import './miDialog.html';

Template.miDialog.onCreated( function(){
    const self = this;

    self.MI = {
        title: new ReactiveVar( null ),
        name: new ReactiveVar( null ),
        object: new ReactiveVar( null ),

        setObject( name ){
            if( Object.keys( Template.currentData()).includes( name )){
                const value = Template.currentData()[name];
                self.MI[name].set( value );
            }
        },

        setString( name ){
            if( Object.keys( Template.currentData()).includes( name )){
                const value = Template.currentData()[name];
                if( value && ( typeof value === 'string' || value instanceof String )){
                    self.MI[name].set( value );
                }
            }
        }
    };

    // get title
    self.autorun(() => {
        self.MI.setString( 'title' );
    });
    // get name
    self.autorun(() => {
        self.MI.setString( 'name' );
    });
    // get object
    self.autorun(() => {
        self.MI.setObject( 'object' );
    });

    // and run the dialog
    Modal.run({
        mdTitle: self.MI.title.get() || pwixI18n.label( ModalInfo.strings, 'dialog.informations' ),
        mdBody: 'miPanel',
        mdButtons: [ Modal.C.Button.CLOSE ],
        // parameters targeting the miPanel component
        name: self.MI.name.get(),
        object: self.MI.object.get()
    });
});
