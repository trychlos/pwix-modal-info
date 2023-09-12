Package.describe({
    name: 'pwix:modal-info',
    version: '1.4.1-rc',
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
    api.versionsFrom( '2.9.0' );
    api.use( 'blaze-html-templates@2.0.0', 'client' );
    api.use( 'ecmascript' );
    api.use( 'less@4.0.0', 'client' );
    api.use( 'pwix:i18n@1.5.0', 'client' );
    api.use( 'pwix:modal@1.7.0', 'client' );
    api.use( 'tmeasday:check-npm-versions@1.0.2', 'server' );
    api.addFiles( 'src/client/components/miButton/miButton.js', 'client' );
    api.addFiles( 'src/client/components/miPanel/miPanel.js', 'client' );
}

// NPM dependencies are checked in /src/server/js/check_npms.js
// See also https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies
