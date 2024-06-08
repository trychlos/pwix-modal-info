/*
 * /src/client/components/miPanel/miPanel.js
 *
 * Display object informations
 * 
 * Parms:
 *  - name: a name to be displayed on the first row, defaulting to nothing
 *  - object: the object to be displayed
 */

import { AccountsTools } from 'meteor/pwix:accounts-tools';
import { pwixI18n } from 'meteor/pwix:i18n';

import '../../../common/js/index.js';

import '../../stylesheets/mi_modal_info.less';

import './miPanel.html';

Template.miPanel.onCreated( function(){
    const self = this;

    // get the responsible of the creation (resp. the last update)
    self.autorun(() => {
        const obj = Template.currentData().object;
        if( obj && obj.createdBy ){
            obj.createdByRV = AccountsTools.preferredLabelRV( obj.createdBy, AccountsTools.C.PreferredLabel.EMAIL_ADDRESS );
        }
        if( obj && obj.updatedBy ){
            obj.updatedByRV = AccountsTools.preferredLabelRV( obj.updatedBy, AccountsTools.C.PreferredLabel.EMAIL_ADDRESS );
        }
    });

    //console.debug( Template.currentData());
});

Template.miPanel.helpers({
    createdAt(){
        return pwixI18n.dateTime( this.object.createdAt );
    },
    createdBy(){
        return this.object.createdByRV.get().label;
    },
    hasCreatedAt(){
        return Object.keys( this.object ).includes( 'createdAt' );
    },
    hasCreatedBy(){
        return Object.keys( this.object ).includes( 'createdBy' );
    },
    hasId(){
        return Object.keys( this.object ).includes( '_id' );
    },
    hasName(){
        return Object.keys( this ).includes( 'name' );
    },
    hasUpdatedAt(){
        return Object.keys( this.object ).includes( 'updatedAt' );
    },
    hasUpdatedBy(){
        return Object.keys( this.object ).includes( 'updatedBy' );
    },
    i18n( arg ){
        return pwixI18n.label( I18N, arg.hash.key );
    },
    id(){
        return this.object._id;
    },
    name(){
        return this.name;
    },
    updatedAt(){
        return pwixI18n.dateTime( this.object.updatedAt );
    },
    updatedBy(){
        return this.object.updatedByRV.get().label;
    }
});
