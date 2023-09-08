/*
 * pwix:modal-info/src/common/js/strings.js
 */

ModalInfo.strings = {
    en_US: {
        button: {
            informations: 'Informations about "%s"'
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
            informations: 'Informations sur "%s"'
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
ModalInfo.strings.en = ModalInfo.strings.en_US;
ModalInfo.strings.fr = ModalInfo.strings.fr_FR;
