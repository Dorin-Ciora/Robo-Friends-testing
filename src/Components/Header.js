import React, { Component } from 'react';
import CounterButtons from './CounterButtons';

class Header extends Component {
    // shouldComponentUpdate(nextProps, nextState){
    //     return false;
    // }
    render() {
        console.log('Header')
        return (
        <div>
        <h1 className='f1'>RoboFriends</h1>
        <CounterButtons color={'red'}/>
        </div>
        );
    }
}

export default Header;