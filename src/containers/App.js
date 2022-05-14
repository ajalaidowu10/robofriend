import React, { Component } from 'react';
import './App.css'
import CardList from '../components/CardList';

class App extends Component{
	constructor(){
		super();
		this.state = {
			robots: []
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			  .then(resp => resp.json())
			  .then(users => this.setState({robots:users}));
	}
	render(){
		return (<CardList robots={this.state.robots}/>)
	}
}

export default App;