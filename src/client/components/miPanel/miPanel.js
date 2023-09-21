/*
 * /src/client/components/miPanel/miPanel.js
 *
 * Display object informations
 * 
 * Parms:
 *  - name: a name to be displayed on the first row, defaulting to nothing
 *  - object: the object to be displayed
 */

import { pwixI18n } from 'meteor/pwix:i18n';

import '../../../common/js/index.js';

import '../../stylesheets/mi_modal_info.less';

import './miPanel.html';

Template.miPanel.onCreated( function(){
    const self = this;

    self.MI = {
        createdBy: new ReactiveVar( null ),
        updatedBy: new ReactiveVar( null ),
        handle: self.subscribe( 'miUsers' )
    };

    // get the responsible of the creation
    self.autorun(() => {
        if( self.MI.handle.ready()){
            const obj = Template.currentData().object;
            if( obj && obj.createdBy ){
                const user = Meteor.users.findOne({ _id: obj.createdBy });
                if( user ){
                    self.MI.createdBy.set( user.emails[0].address );
                } else {
                    self.MI.createdBy.set( obj.createdBy );
                }
            }
        }
    });

    // get the responsible of the last update
    self.autorun(() => {
        if( self.MI.handle.ready()){
            const obj = Template.currentData().object;
            if( obj && obj.updatedBy ){
                const user = Meteor.users.findOne({ _id: obj.updatedBy });
                if( user ){
                    self.MI.updatedBy.set( user.emails[0].address );
                } else {
                    self.MI.updatedBy.set( obj.updatedBy );
                }
            }
        }
    });

    //console.debug( Template.currentData());
});

Template.miPanel.helpers({
    createdAt(){
        return pwixI18n.dateTime( this.object.createdAt );
    },
    createdBy(){
        return Template.instance().MI.createdBy.get();
    },
    hasCreatedAt(){
        return Object.keys( this.object ).includes( 'createdAt' );
    },
    hasCreatedBy(){
        return Object.keys( this.object ).includes( 'createdBy' );
    },
    hasName(){
        //console.debug( this );
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
        return Template.instance().MI.updatedBy.get();
    }
});
