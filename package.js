Package.describe({
    name: 'pwix:modal-info',
    version: '1.4.6-rc',
    summary: 'A Bootstrap-based Meteor package which displays object informations in a modal dialog',
    git: 'https://github.com/trychlos/pwix-modal-info',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'ModalInfo'
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
    api.mainModule( 'src/server/js/index.js', 'server' );
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:modal-info' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    api.versionsFrom([ '2.9.0', '3.0-rc.0' ]);
    api.use( 'blaze-html-templates@2.0.0 || 3.0.0-alpha300.0', 'client' );
    api.use( 'ecmascript' );
    api.use( 'less@4.0.0', 'client' );
    api.use( 'pwix:accounts-tools@2.0.0' );
    api.use( 'pwix:i18n@1.5.7' );
    api.use( 'pwix:modal@1.10.0 || 2.0.0' );
    api.use( 'pwix:ui-fontawesome6@1.0.0' );
    api.use( 'pwix:ui-utils@1.0.0' );
    api.use( 'tmeasday:check-npm-versions@1.0.2 || 2.0.0-beta.0', 'server' );
    api.addFiles( 'src/client/components/miButton/miButton.js', 'client' );
    api.addFiles( 'src/client/components/miPanel/miPanel.js', 'client' );
}

// NPM dependencies are checked in /src/server/js/check_npms.js
// See also https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies
