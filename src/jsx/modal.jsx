import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

/**
 * A modal displaying messages.
 */
class ModalMessage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: true
        };
        this.closeModal = this.closeModal.bind(this);
    }

    /**
     * Handles key events. If return is pressed, the modal will close, performing the primary function. If escape is
     * pressed, the secondary function is performed if provided, else the primary function
     *
     * @param event
     */
    closeModal(event) {
        let KEYCODE_ENTER = 13,
            KEYCODE_ESC = 27;

        switch (event.which) {
            case KEYCODE_ENTER:
                this.props.primaryButtonClicked();
                break;
            case KEYCODE_ESC:
                (this.props.secondaryButtonClicked) ? this.props.secondaryButtonClicked() : this.props.primaryButtonClicked();
                break;
        }
    }

    render() {
        const cancelButton = (this.props.secondaryButtonClicked) ?
            <button className='btn btn-default'
                    onClick={this.props.secondaryButtonClicked}>Cancel</button> : null;
        return (
            <div>
                <Modal onKeyUp={this.closeModal} show={this.state.showModal}>
                    <Modal.Header>
                        <Modal.Title>{this.props.message.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.message.message}</Modal.Body>
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
