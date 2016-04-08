# reactjs-modal-message-wrapper

A thin wrapper around react-bootstraps modal to create modal messages shown to the user.
 
# Installation & Usage
 
You can install it with:
 
     npm install --save-dev zalando/reactjs-modal-message-wrapper

If you want to install a specific version, add the tag (e.g. #0.1.0) to the command

After this use the provided component:

```javascript

import React, { Component } from 'react';
import ModalMessage from 'reactjs-modal-message-wrapper';

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

