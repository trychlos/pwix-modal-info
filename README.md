# pwix:modal-info

## What is it ?

This is a Bootstrap-based Meteor package which displays standard informations about an object:

- maybe a name as a (centered) title
- created at
- created by
- last updated at
- last updated by
- identifier

## Configuration

None at the moment.

## What does it provide ?

### A global object

`miModalInfo`

### Blaze components

#### miButton

Just a button which will triggers the dialog opening with the attached object.

Accepted parameters are:
- titleButton: the title attached to the button, defaulting to 'Informations about &lt;name&gt;'
- titleDialog: the title of the to-be-opened dialog, defaulting to 'Informations'
- name: the name to be displayed at the top of the object informations, defaulting to nothing
- object: (mandatory) the object to be displayed.

#### miPanel

The display panel as an independant component. You are so able to integrate it into your own page.

Accepted parameters are:
- name: the name to be displayed at the top of the object informations, defaulting to nothing
- object: (mandatory) the object to be displayed.

#### miDialog

The modal dialog itself.

Accepted parameters are:
- title: the title of the dialog, defaulting to 'Informations'
- name: a name to be displayed on the first row, defaulting to an empty string
- object: (mandatory) the object to be displayed.

_Note_: the package is cool enough to destroy itself the Blaze created view on dialog close. So you don't have to take care about that.

![Informations](/maintainer/png/informations.png)

## Server-side

It could be useful to know that this package works by initializing a publication on `Meteor.users` collection for all records.

Only requested fields are:
- username
- emails
- createdAt
- createdBy
- updatedAt
- updatedBy

This is needed because we want display the email of the user responsible of the reaction (resp. the last update) of the displayed object.

## Draggable dialogs

This package can take advantage of the jQuery UI resources. If it happens that your application already has this jQuery UI dependency, then `pwix:modal-info` will benefit of that, and make the modal dialogs draggable. Isn't fun ?

## NPM peer dependencies

Starting with v 1.1.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`. 

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.3.0:
```
```
Each of these dependencies should be installed at application level:
```
    meteor npm install <package> --save
```

## Translations

New and updated translations are willingly accepted, and more than welcome. Just be kind enough to submit a PR on the [Github repository](https://github.com/trychlos/pwix-modal-info/pulls).

---
P. Wieser
- Last updated on 2023, May 29th
