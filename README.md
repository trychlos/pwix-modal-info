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

### miPanel

The display panel as an independant component. You are so able to integrate it into your own page.

### miDialog

The modal dialog itself.

_Note_: the package is cool enough to destroy itself the Blaze created view on dialog close. So you don't have to take care about that.

---
P. Wieser
- Last updated on 2023, Jan. 29th
