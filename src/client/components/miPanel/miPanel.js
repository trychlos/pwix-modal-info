/*
 * /src/client/components/miPanel/miPanel.js
 *
 * Display object informations
 *
 * Parms:
 *  - name: a name to be displayed on the first row, defaulting to nothing
 *  - object: the object to be displayed
 */

import strftime from 'strftime';

import { AccountsTools } from 'meteor/pwix:accounts-tools';
import { pwixI18n } from 'meteor/pwix:i18n';
import { ReactiveVar } from 'meteor/reactive-var';

import '../../../common/js/index.js';

import '../../stylesheets/mi_modal_info.less';

import './miPanel.html';

Template.miPanel.onCreated( function(){
    const self = this;

    self.MI = {
        object: new ReactiveVar( null )
    };

    // get the responsible of the creation (resp. the last update)
    self.autorun(() => {
        const obj = Template.currentData().object;
        let promises = [];
        if( obj && typeof obj === 'function' ){
            promises.push( obj( Template.currentData()).then(( res ) => { obj = res; return true; }));
        }
        Promise.allSettled( promises ).then(() => {
            if( obj && obj.createdBy ){
                obj.createdByRV = AccountsTools.preferredLabelRV( obj.createdBy, AccountsTools.C.PreferredLabel.EMAIL_ADDRESS );
            }
            if( obj && obj.updatedBy ){
                obj.updatedByRV = AccountsTools.preferredLabelRV( obj.updatedBy, AccountsTools.C.PreferredLabel.EMAIL_ADDRESS );
            }
            self.MI.object.set( obj );
        });
    });

    //console.debug( Template.currentData());
});

Template.miPanel.helpers({
    createdAt(){
        const obj = Template.instance().MI.object.get();
        if( !obj ){
            return '';
        }
        if( this.stampFormat ){
            return strftime( this.stampFormat, obj.createdAt );
        }
        // defaulting to Intl.DateTimeFormat for the current locale
        return pwixI18n.dateTime( obj.createdAt );
    },
    createdBy(){
        const obj = Template.instance().MI.object.get();
        if( !obj ){
            return '';
        }
        return obj.createdByRV.get().label;
    },
    hasCreatedAt(){
        const obj = Template.instance().MI.object.get();
        if( !obj ){
            return false;
        }
        return Object.keys( obj ).includes( 'createdAt' );
    },
    hasCreatedBy(){
        const obj = Template.instance().MI.object.get();
        if( !obj ){
            return false;
        }
        return Object.keys( obj ).includes( 'createdBy' );
    },
    hasId(){
        const obj = Template.instance().MI.object.get();
        if( !obj ){
            return false;
        }
        return Object.keys( obj ).includes( '_id' );
    },
    hasName(){
        return Object.keys( this ).includes( 'name' );
    },
    hasUpdatedAt(){
        const obj = Template.instance().MI.object.get();
        if( !obj ){
            return false;
        }
        return Object.keys( obj ).includes( 'updatedAt' );
    },
    hasUpdatedBy(){
        const obj = Template.instance().MI.object.get();
        if( !obj ){
            return false;
        }
        return Object.keys( obj ).includes( 'updatedBy' );
    },
    i18n( arg ){
        return pwixI18n.label( I18N, arg.hash.key );
    },
    id(){
        const obj = Template.instance().MI.object.get();
        if( !obj ){
            return '';
        }
        return obj._id;
    },
    name(){
        return this.name;
    },
    updatedAt(){
        const obj = Template.instance().MI.object.get();
        if( !obj ){
            return '';
        }
        if( this.stampFormat ){
            return strftime( this.stampFormat, obj.createdAt );
        }
        // defaulting to Intl.DateTimeFormat for the current locale
        return pwixI18n.dateTime( obj.updatedAt );
    },
    updatedBy(){
        const obj = Template.instance().MI.object.get();
        if( !obj ){
            return '';
        }
        return obj.updatedByRV.get().label;
    }
});
