import React from 'react';
import { mount , shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/providerMock';
import Header from '../../components/Header';
import { TestScheduler } from 'jest';

describe('<Header />', () =>{
    
    test('Render del componente header', () =>{
        const header = shallow(
            <ProviderMock>
                <Header></Header>
            </ProviderMock>
        );
        expect(header.length).toEqual(1);
    });
    test('Render del titulo',() => {
        const header = mount(
            <ProviderMock>
                <Header></Header>
            </ProviderMock>
        );
        expect(header.find(".Header-title").text()).toEqual("Platzi Store")
    })

});

describe('Header Snapshot', ()=>{
    test('Comprobar el header del snapshot', ()=>{
        const header = create(
            <ProviderMock>
                <Header>

                </Header>
            </ProviderMock>
        );
        expect(header.toJSON()).toMatchSnapshot();
    })
})