import React, { Component } from 'react';
import './App.css'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

class App extends Component{
	constructor(){
		super();
		this.state = {
			robots: [],
			searchField: '',
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			  .then(resp => resp.json())
			  .then(users => this.setState({ robots:users }));
	}
	onSearchChange = (event) => {
		this.setState({ searchField:event.target.value })
	}

	render(){
		let filteredRobot = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		return (
				<div className="main">
					<h1>ROBOFRIEND</h1>
					<SearchBox searchChange={ this.onSearchChange }/>
					<CardList robots={ filteredRobot }/>
				</div>
			
			)
	}
}

export default App;