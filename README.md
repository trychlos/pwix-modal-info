# pwix:modal-info

## What is it ?

This is a Bootstra-based Meteor package which displays standard informations about an object:

- maybe a name as a (centerd) title
- created at
- created by
- last updated at
- last updated by
- identifier

## Configuration

None at the moment.

## What does it provide ?

`pwix:modal-info` essentially provides three Blaze components:

### miButton

Just a button which will triggers the dialog opening with the attached object.

Accepted parameters are:
- titleButton: the title attached to the button, defaulting to 'Informations'
- titleDialog: the title of the to-be-opened dialog, defaulting to 'Informations'
- name: the name to be displayed at the top of the object informations, defaulting to nothing
- object: (mandatory) the object to be displayed.


### miPanel

The display panel as an independant component. You are so able to integrate it into your own page.

Accepted parameters are:
- name: the name to be displayed at the top of the object informations, defaulting to nothing
- object: (mandatory) the object to be displayed.

### miDialog

The modal dialog itself.

Accepted parameters are:
- title: the title of the dialog, defaulting to 'Informations'
- name: a name to be displayed on the first row, defaulting to an empty string
- object: (mandatory) the object to be displayed.

_Note_: the package is cool enough to destroy itself the Blaze created view on dialog close. So you don't have to take care about that.

## Server-side

It could be useful to know that this package works by initializing a publication on `Meteor.users` collection for all records.

Only requested fields are:
- username
- emails
- createdAt
- createdBy
- updatedAt
- updatedBy

---
P. Wieser
- Last updated on 2023, Jan. 29th
