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

import { pwixI18n } from 'meteor/pwix:i18n';
import { ReactiveVar } from 'meteor/reactive-var';

import '../../../common/js/index.js';

import '../../stylesheets/mi_modal_info.less';

import './miPanel.html';

Template.miPanel.onCreated( function(){
    const self = this;

    self.MI = {
        object: new ReactiveVar( null ),

        // get the parms for ahPreferredLabel, considering the case where userId is zero (created by SAA)
        preferredParms( field ){
            let parms = {};
            const obj = self.MI.object.get();
            if( obj && Object.keys( obj ).includes( field )){
                if( obj[field] === 0 || obj[field] === '0' ){
                    parms = { ahUserLabel: ModalInfo.configure().label_zero };
                } else {
                    parms = { ahUserId: obj[field] };
                }
            }
            return parms;
        }
    };

    // get the target object
    self.autorun(() => {
        let obj = Template.currentData().object || null;
        Promise.resolve( obj )
            .then(() => {
                if( obj && typeof obj === 'function' ){
                    obj( Template.currentData()).then(( res ) => { obj = res; });
                }
            })
            .then(() => {
                self.MI.object.set( obj );
            });
    });
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
    hasCreatedAt(){
        const obj = Template.instance().MI.object.get();
        if( !obj ){
            return false;
        }
        return Object.keys( obj ).includes( 'createdAt' ) && obj.createdAt !== undefined;
    },
    hasCreatedBy(){
        const obj = Template.instance().MI.object.get();
        if( !obj ){
            return false;
        }
        return Object.keys( obj ).includes( 'createdBy' ) && obj.createdBy !== undefined;
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
        const res = Object.keys( obj ).includes( 'updatedAt' ) && obj.updatedAt !== undefined;
        return res;
    },
    hasUpdatedBy(){
        const obj = Template.instance().MI.object.get();
        if( !obj ){
            return false;
        }
        const res = Object.keys( obj ).includes( 'updatedBy' ) && obj.updatedBy !== undefined;
        return res;
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

    // parms for ahPreferredLabel
    parmsCreatedBy(){
        return Template.instance().MI.preferredParms( 'createdBy' );
    },

    // parms for ahPreferredLabel
    parmsUpdatedBy(){
        return Template.instance().MI.preferredParms( 'updatedBy' );
    },

    updatedAt(){
        const obj = Template.instance().MI.object.get();
        if( !obj ){
            return '';
        }
        if( this.stampFormat ){
            return strftime( this.stampFormat, obj.updatedAt );
        }
        // defaulting to Intl.DateTimeFormat for the current locale
        return pwixI18n.dateTime( obj.updatedAt );
    },
    updatedBy(){
        const obj = Template.instance().MI.object.get();
        return  obj && obj.updatedByRV ? obj.updatedByRV.get().label : '';
    }
});
