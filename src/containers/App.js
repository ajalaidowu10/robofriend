import React, { Component } from 'react';
import './App.css'
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Header from '../components/Header';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => ({
 	 searchField: state.searchRobots.searchField,
 	 robots: state.requestRobots.robots,
 	 isPending: state.requestRobots.isPending,
 	 error: state.requestRobots.error
})
const mapDispatchToProps = dispatch => {
	return{
		onSearchChange: event => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component{
	componentDidMount(){
		this.props.onRequestRobots();
	}

	render(){
		const { onSearchChange, searchField, robots, isPending } = this.props;
		let filteredRobot = robots.filter( robot => robot.name.toLowerCase().includes(searchField.toLowerCase()) );
		
		return isPending 
		? (
				<div className="main">
					<h1>LOADING...</h1>
				</div>
			)
		: (
				<div className="main">
					<Header></Header>
					<SearchBox searchChange={ onSearchChange }/>
					<CardList robots={ filteredRobot }/>
				</div>
			
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);