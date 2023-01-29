Package.describe({
    name: 'pwix:modal-info',
    version: '1.0.0',
    summary: 'A Bootstrap-based Meteor package which displays object informations in a modal dialog',
    git: 'https://github.com/trychlos/pwix-modal-info',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'pwiModalInfo'
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
    api.use( 'blaze-html-templates', 'client' );
    api.use( 'ecmascript' );
    api.use( 'less@4.0.0', 'client' );
    api.use( 'pwix:i18n' );
    api.addFiles( 'src/client/components/miButton/miButton.js', 'client' );
    api.addFiles( 'src/client/components/miDialog/miDialog.js', 'client' );
    api.addFiles( 'src/client/components/miPanel/miPanel.js', 'client' );
}

Npm.depends({
    'bootstrap': '5.2.1'
});
