import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {Modal} from '../components/Modal.jsx';

describe('<Modal />', () => {
    it('Renders ModalComponent', () => {
        const onCloseSpy = jest.fn();
        const component = ReactTestUtils.renderIntoDocument(
            <Modal
                isOpen={ true }
                openModal={ onCloseSpy }
            />
        );
        const closeLink = ReactTestUtils.findRenderedDOMComponentWithTag(
            component, 'a'
        );
        ReactTestUtils.Simulate.click(closeLink);
        expect(closeLink.textContent).toBe("Закрыть");
        expect(onCloseSpy).toBeCalled();
    });
});