import React, { useState, useEffect } from 'react';
import './App.css'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

const App = () => {
	const [robots, setRobots] = useState([]);
	const [searchField, setSearchField] = useState('');
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			  .then(resp => resp.json())
			  .then(users => setRobots(users));
	}, [])
	const onSearchChange = (event) => {
		setSearchField(event.target.value);
	}
	const filteredRobot = robots.filter((robot) => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	})
		
	return (
			<div className="main">
				<h1>ROBOFRIEND</h1>
				<SearchBox searchChange={ onSearchChange }/>
				<CardList robots={ filteredRobot }/>
			</div>
		)
}

export default App;