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

`ModalInfo`

#### Functions

##### `ModalInfo.configure()`

    See [below](#configuration).

#### `ModalInfo.i18n.namespace()`

Returns the i18n namespace of the package.

### Blaze components

#### miButton

Just a button which will triggers the dialog opening with the attached object.

Known parameters are:

- `enabled`: whether the button should be enabled, defaulting to true, or a function which will receive these same parameters, and must return such a true|false value

- `classButton`: the classes to be set on the button instead of the `btn-sm btn-primary` default

- `stampFormat`: the strftime format to be used to display the date,
   defaulting to the `Intl.DateTimeFormat()` format corresponding to the current locale

- `titleButton`: the title attached to the button, defaulting to 'Informations about &lt;name&gt;'

- `titleDialog`: the title of the to-be-opened dialog, defaulting to 'Informations'

- `name`: the name to be displayed at the top of the object informations, defaulting to nothing

- `object`: (mandatory) the object to be displayed, or a function which returns such an object.

Please note that all the parameters will always be passed to the `Modal.run()` function, and then to the `miPanel` template. We are so able to add here as many `pwix:modal` parameters as you want.

#### miPanel

The display panel as an independant component. You are so able to integrate it into your own page.

Known parameters are:

- name: the name to be displayed at the top of the object informations, as a HTML string, defaulting to nothing

- object: (mandatory) the object to be displayed, or a function which returns such an object.

![Informations](/maintainer/png/informations.png)

The function has following prototype: `async fn( <Object>) : Object`, and is called with the current data context.

This package relies on `pwix:accounts-tools` to get the email address (resp. the username) of the creator/last updator of the provided object.

## Configuration

The package's behavior can be configured through a call to the `ModalInfo.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

Known configuration options are:

- `label_zero`

    Provides the label to be displayed when user identifier is zero, defaulting to `<System>`.

- `verbosity`

    Define the expected verbosity level.

    The accepted value can be any or-ed combination of following:

    - `ModalInfo.C.Verbose.NONE`

        Do not display any trace log to the console

    - `ModalInfo.C.Verbose.CONFIGURE`

        Trace `ModalInfo.configure()` calls and their result

    - `ModalInfo.C.Verbose.FUNCTIONS`

        Trace all functions calls

Please note that `ModalInfo.configure()` method should be called in the same terms both in client and server sides.

Remind too that Meteor packages are instanciated at application level. They are so only configurable once, or, in other words, only one instance has to be or can be configured. Addtionnal calls to `ModalInfo.configure()` will just override the previous one. You have been warned: **only the application should configure a package**.

`ModalInfo.configure()` is a reactive data source.

## NPM peer dependencies

Starting with v 1.1.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`.

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.9.0:
```
    'lodash': '^4.17.0',
    'strftime': '^0.10.0'
```
Each of these dependencies should be installed at application level:
```
    meteor npm install <package> --save
```

## Translations

New and updated translations are willingly accepted, and more than welcome. Just be kind enough to submit a PR on the [Github repository](https://github.com/trychlos/pwix-modal-info/pulls).

---
P. Wieser
- Last updated on 2024, Jul. 1st
