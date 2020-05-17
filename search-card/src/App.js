import React, { Component } from 'react';

import CardList from './Card/CardList';
import SearchBox from './searchBox';

import { robots } from './Card/robots';


class App extends Component {
    constructor() {
        super();

        // state can't be changed and usually live on the component
        this.state = {
            robots: robots,
            searchfield: ''
        };
    }

    onSearchChange = (e) => {
        // update the field on the searchfield state
        this.setState({ searchfield: e.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <SearchBox searchChange={ this.onSearchChange }/>
                <CardList robots = {filteredRobots} />
            </div>
        );
    }
}

export default App;