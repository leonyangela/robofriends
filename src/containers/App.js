import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component {
    constructor() {
        super();

        // state can't be changed and usually live on the component
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            }
        })
        
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
}

    onSearchChange = (e) => {
        // update the field on the searchfield state
        this.setState({ searchfield: e.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        if (!robots.length) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={ this.onSearchChange }/>
                    <Scroll>
                        <CardList robots = {filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;