import { shallow } from 'enzyme';
import CounterButtons from './CounterButtons';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(()=> {
    const mockProps ={
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />)
})
it('renders MainPage without crash', ()=> {
expect(wrapper).toMatchSnapshot();
})

it('filter robots correctly', () => {
    expect(wrapper.instance().filterRobots([])).toEqual([])
})