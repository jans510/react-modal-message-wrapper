# react-modal-message-wrapper

[![Build Status](https://travis-ci.org/zalando/react-modal-message-wrapper.svg?branch=master)](https://travis-ci.org/zalando/react-modal-message-wrapper) [![Coverage Status](https://coveralls.io/repos/github/zalando/react-modal-message-wrapper/badge.svg?branch=master)](https://coveralls.io/github/zalando/react-modal-message-wrapper?branch=master)
[![Dependencies](https://david-dm.org/zalando/zappr.svg)](https://david-dm.org/zalando/react-modal-message-wrapper)

A thin wrapper around react-bootstraps modal to create modal messages shown to the user.
 
# Prerequisites 

This module needs the following modules installed in your project:

* **react**
* **react-bootstrap**

You can install them via `npm install --save react react-bootstrap`

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

# License

The MIT License (MIT) Copyright © [2016] Zalando SE, https://tech.zalando.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
