import { shallow } from 'enzyme';
import CounterButtons from './CounterButtons';
import React from 'react';

it('should render CounterButton component', ()=> {
const mockColor = 'red'
expect(shallow(<CounterButtons color={mockColor}/>)).toMatchSnapshot();
})

it('correctly increments the count', ()=> {
    const mockColor = 'red'
    const wrapper = shallow(<CounterButtons color={mockColor}/>);

    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 1 });
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 });
})