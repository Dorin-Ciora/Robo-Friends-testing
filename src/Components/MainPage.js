import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './MainPage.css';
import Header from '../Components/Header';


class MainPage extends Component {
    componentDidMount () {
        this.props.onRequestRobots();
    }

    filterRobots = robots => {
        return robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    })}

    render() {
         const { onSearchChange, robots, isPending } =this.props;
         return isPending ?
            <h1>Loading</h1> :
        (
            <div className='tc'>
           <Header />
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
            <CardList robots={this.filterRobots(robots)}/>
            </Scroll> 
            </div>
        );
        }
}
export default MainPage;