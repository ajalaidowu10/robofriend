import React from 'react';
import ReactDom from 'react-dom/client';
import CardList from './components/CardList';

const robots = [
	{id:1, name:'Ajala Idowu', email:'ajalaidowu10@gmail.com'},
	{id:2, name:'Omowumi Karema', email:'omowunmi@gmail.com'},
];

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<CardList robots={robots}/>)
