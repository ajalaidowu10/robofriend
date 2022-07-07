import React , { Component } from 'react';

class Header extends Component{
	shouldComponentUpdate(nextProps, nextState){
		return false;
	}
	render(){
		console.log('Header');
		return <h1>ROBOFRIEND</h1>
	}
}

export default Header;