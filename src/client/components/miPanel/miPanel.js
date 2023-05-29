/*
 * /src/client/components/miPanel/miPanel.js
 *
 * Display object informations
 * 
 * Parms:
 *  - name: a name to be displayed on the first row, defaulting to nothing
 *  - object: the object to be displayed
 */

import { pwixI18n as i18n } from 'meteor/pwix:i18n';

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
                }
            }
        }
    });

    // get the responsible of the last update
    self.autorun(() => {
        if( self.MI.handle.ready()){
            const obj = Template.currentData().object;
            if( obj && obj.updatedBy ){
                const user = Meteor.users.findOne({ _id: self.data.object.updatedBy });
                if( user ){
                    self.MI.updatedBy.set( user.emails[0].address );
                }
            }
        }
    });
});

Template.miPanel.helpers({
    createdAt(){
        return i18n.dateTime( this.object.createdAt );
    },
    createdBy(){
        return Template.instance().MI.createdBy.get();
    },
    hasCreatedAt(){
        return this.object.createdAt;
    },
    hasCreatedBy(){
        return this.object.createdBy && this.object.createdBy.length;
    },
    hasName(){
        return this.name && this.name.length;
    },
    hasUpdatedAt(){
        return this.object.updatedAt;
    },
    hasUpdatedBy(){
        return this.object.updatedBy && this.object.updatedBy.length;
    },
    id(){
        return this.object._id;
    },
    name(){
        return this.name;
    },
    namespace(){
        return miModalInfo.strings;
    },
    updatedAt(){
        return i18n.dateTime( this.object.updatedAt );
    },
    updatedBy(){
        return Template.instance().MI.updatedBy.get();
    }
});
