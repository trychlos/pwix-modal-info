/*
 * pwix:modal-info/src/server/js/publish.js
 */

// return the list of registered users
Meteor.publish( 'miUsers', function(){
    return Meteor.users.find({},{
        fields: {
            username: true,
            emails: true,
            createdAt: true,
            createdBy: true,
            updatedAt: true,
            updatedBy: true
        }
    });
});
