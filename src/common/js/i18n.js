/*
 * pwix:modal-info/src/common/js/i18n.js
 */

import { pwixI18n } from 'meteor/pwix:i18n';

ModalInfo.i18n = {
    en_US: {
        button: {
            informations: 'Informations about "%s"',
            none: '<none>'
        },
        dialog: {
            close: 'Close',
            informations: 'Informations'
        },
        panel: {
            createdAt: 'Created at:',
            createdBy: 'by:',
            updatedAt: 'Last updated at:',
            updatedBy: 'by:',
            identifier: 'Identifier:'
        }
    },
    fr_FR: {
        button: {
            informations: 'Informations sur "%s"',
            none: '<néant>'
        },
        dialog: {
            close: 'Fermer',
            informations: 'Informations'
        },
        panel: {
            createdAt: 'Créé le:',
            createdBy: 'par:',
            updatedAt: 'Mis à jour le:',
            updatedBy: 'par:',
            identifier: 'Identifiant:'
        }
    }
};

// actually a package should only provide these short language fallbacks
ModalInfo.i18n.en = ModalInfo.i18n.en_US;
ModalInfo.i18n.fr = ModalInfo.i18n.fr_FR;

pwixI18n.namespace( I18N, ModalInfo.i18n );

/**
 * @returns {String} the i18n namespace of the package
 */
ModalInfo.i18n.namespace = function(){
    return I18N;
};
