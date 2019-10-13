import { shallow } from 'enzyme';
import Card from './Card';
import React from 'react';

it('should render Card component', ()=> {
expect(shallow(<Card />)).toMatchSnapshot();
})