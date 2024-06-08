# pwix:modal-info

## ChangeLog

### 1.4.6-rc

    Release date: 

    - 

### 1.4.5

    Release date: 2024- 6- 8

    - Upgrade pwix:modal dependency
    - Add pwix:ui-fontawesome6 and pwix:ui-utils dependencies

### 1.4.4

    Release date: 2024- 5-25

    - miButton: have a fallback if provided data is empty
    - Meteor 3.0 ready
    - Update to new pwix:accounts-tools 2.0.0 API

### 1.4.3

    Release date: 2023-10-11

    - Fix the miButton title translation
    - Display the user identifier if the document is not found in users collection
    - No more publish 'users' collection, relying instead on pwix:accounts-tools package (todo #7)

### 1.4.2

    Release date: 2023- 9-18

    - Use 'this' instead of Template.currentData() in helpers and events
    - Bump pwix:modal requirement to v 1.8.0

### 1.4.1

    Release date: 2023- 9-12

    - Back to Meteor 2.9.0

### 1.4.0

    Release date: 2023- 9-11

    - Bump pwix:modal requirement to v 1.6.0
    - Rename ModalInfo global export to ModalInfo
    - Bump version requirements: Meteor to 2.13.2, pwix:i18n to 1.5, pwix:modal to 1.7
    - Define ModalInfo.i18n.namespace() (todo #4)
    - Define classButton parameter (todo #5)
    - Remove (useless) miDialog component
    - Fix not displayed name

### 1.3.0

    Release date: 2023- 5-29

    - Now relies on pwix:modal package (todo #2)

### 1.2.1

    Release date: 2023- 4-30

    - Be more tolerant about language specification
    - Add miDialog screenshot in README

### 1.2.0

    Release date: 2023- 1-31

    - Replace hardcoded NPM dependencies with tmeasday:check-npm-versions (runtime, development environment only)

### 1.1.0

    Release date: 2023- 1-30

    - make miDialog draggable if jQuery UI is present
    - rename global object to ModalInfo

### 1.0.0

    Release date: 2023- 1-29

    - Initial release

---
P. Wieser
- Last updated on 2024, Jun. 8th
