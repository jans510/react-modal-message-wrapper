import React from 'react';
import { Modal } from 'react-bootstrap';

import '../asset/less/modal.less';

/**
 * A modal displaying messages.
 */
class ModalMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: true,
            message: props.message
        };
        this.close = this.close.bind(this);
    }

    /**
     * Closes the modal and performs the action for pressing the cancel button.
     */
    close() {
        this.props.secondaryButtonClicked();
        this.setState({
            showModal: false
        });
    }

    render() {
        const cancelButton = (this.props.secondaryButtonClicked) ?
            <button className='btn btn-default' onClick={this.close}>Cancel</button> : null;
        return (
            <div>
                <Modal show={this.state.showModal}>
                    <Modal.Header>
                        <Modal.Title>{this.state.message.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.state.message.message}</Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-primary'
                                onClick={this.props.primaryButtonClicked}>{this.props.primaryButton}</button>
                        {cancelButton}
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}

ModalMessage.displayName = 'ModalMessage';
ModalMessage.propTypes = {
    message: React.PropTypes.object.isRequired,
    primaryButton: React.PropTypes.string.isRequired,
    primaryButtonClicked: React.PropTypes.func.isRequired,
    secondaryButtonClicked: React.PropTypes.func
};

export default ModalMessage;
