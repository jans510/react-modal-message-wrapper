import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import React, { cloneElement } from 'react';
import ReactDom, { findDOMNode } from 'react-dom';

import ModalMessage from '../src/jsx/modal';

function setupProps(fnNames) {
    let props = {};
    fnNames.forEach(property => props[property] = expect.createSpy()); // eslint-disable-line no-return-assign
    return props;
}

function setup(fnNames) {

    let props = Object.assign({},
        setupProps(fnNames),
        {
            primaryButton: 'OK'
        },
        {
            message: {
                title: 'Caution:',
                message: 'This is only a test'
            }
        }
    );

    let component = TestUtils.renderIntoDocument(<ModalMessage {...props}/>);

    return {
        props,
        component
    };
}

/**
 * Triggers a keyup event for a specific keycode.
 *
 * @param keycode The keycode of the pressed key
 */
function triggerKeyUpEvent(keycode) {
    let event = document.createEvent('HTMLEvents');
    event.initEvent('keyup', true, true);
    event.keyCode = keycode;
    let modal = document.getElementsByClassName('modal-content')[0];
    modal.dispatchEvent(event);
}

describe('ModalMessage', function() {

    afterEach(() => {
        let root = document.getElementById('content');
        root.removeChild(root.firstElementChild);
    });

    it('should render only the primary button if secondaryButtonClicked is omitted', function() {
        setup(['primaryButtonClicked']);
        let buttons = document.getElementsByTagName('button');
        expect(buttons.length).toBe(1);
        expect(buttons[0]).innerHTML = 'OK';
    });

    it('should render both buttons if secondaryButtonClicked is set', function() {
        setup(['primaryButtonClicked', 'secondaryButtonClicked']);
        let buttons = document.getElementsByTagName('button');
        expect(buttons.length).toBe(2);
        expect(buttons[1]).innerHTML = 'Cancel';
    });

    it('should trigger the primary button function on pressing the button', function() {
        const { props } = setup(['primaryButtonClicked']);
        let okButton = document.getElementsByTagName('button')[0];
        okButton.click();
        expect(props.primaryButtonClicked.calls.length).toBe(1);
    });

    it('should trigger the secondary button function on pressing the button', function() {
        const { props } = setup(['primaryButtonClicked', 'secondaryButtonClicked']);
        let cancelButton = document.getElementsByTagName('button')[1];
        cancelButton.click();
        expect(props.secondaryButtonClicked.calls.length).toBe(1);
    });

    it('should trigger the primary function on pressing enter', function() {
        const { props } = setup(['primaryButtonClicked']);
        triggerKeyUpEvent(13);
        expect(props.primaryButtonClicked.calls.length).toBe(1);
    });

    it('should trigger the secondary function on pressing escape', function() {
        const { props } = setup(['primaryButtonClicked', 'secondaryButtonClicked']);
        triggerKeyUpEvent(27);
        expect(props.secondaryButtonClicked.calls.length).toBe(1);
    })
});
