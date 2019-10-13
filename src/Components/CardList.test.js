import { shallow } from 'enzyme';
import CardList from './CardList';
import React from 'react';

it('should render CardList component', ()=> {
const mockRobot = [{
    id: 1,
    name: 'Dorin',
    username: 'DoDo', 
    email: 'Dorin@gmail.com'
}
]
expect(shallow(<CardList robots={mockRobot}/>)).toMatchSnapshot();
})