import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15';
import {connect, Provider} from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import configureStore from 'redux-mock-store'
import Modal from '../components/Modal';

Enzyme.configure({ adapter: new Adapter() });


describe('<Modal />', () => {
    const onCloseSpy = jest.fn();
    const ReactComponent = () => (<Modal
        isOpen={true}
        openModal={ onCloseSpy }
    />);
    describe('state', () => {
        it('works', () => {
            const expectedState = {
                users: {
                    isModalOpen: true,
                }
            };
            const mockStore = configureStore();
            const store = mockStore(expectedState);
            const component = mount( <Provider store={store}><ReactComponent/></Provider> )
            console.log(component.find(Modal).debug());
            expect(component.prop('isOpen')).toEqual(expectedState.isOpen);
            expect(component.find(Modal).find("button").text()).toBe('Закрыть')
        });
    });
});