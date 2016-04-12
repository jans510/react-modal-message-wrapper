# react-modal-message-wrapper

[![Build Status](https://travis-ci.org/zalando/react-modal-message-wrapper.svg?branch=master)](https://travis-ci.org/zalando/react-modal-message-wrapper) [![Coverage Status](https://coveralls.io/repos/github/zalando/react-modal-message-wrapper/badge.svg?branch=master)](https://coveralls.io/github/zalando/react-modal-message-wrapper?branch=master)

A thin wrapper around react-bootstraps modal to create modal messages shown to the user.
 
# Installation & Usage
 
You can install it with:
 
     npm install --save-dev zalando/react-modal-message-wrapper

If you want to install a specific version, add the tag (e.g. #0.2.0) to the command

After this use the provided component:

```javascript

import React, { Component } from 'react';
import ModalMessage from 'react-modal-message-wrapper';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { modalMessage, actions } = this.props;
        let displayMessage = (modalMessage) ? <ModalMessage key='modal-message' message={modalMessage} 
                                            primaryButton='OK' primaryButtonClicked={actions.resetMessage}/>
                                       : null;
        return (
            <div>
               {displayMessage}
               // enter the apps functionality here
            </div>
        );
    }
}
 
```

The component accepts the following parameters:

* **message**: An object with the following properties:

```javascript

{
    title: 'The title of the message',
    message: 'The message in detail'
}

```

* **primaryButtonClicked**: A function that is triggered on pressing the standard button. It is recommended to trigger the call of a `resetMessage` action, which should set the message object to null.
* **secondaryButtonClicked**: A function that is triggered when the secondary button is clicked, if this property is not used, no secondary button will be rendered.
* **primaryButton**: A string representing the text of the primary button.