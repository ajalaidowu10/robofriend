import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return (
			<div>
				{
					robots.map((robot, i) => (<Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>)) 
				}
			</div>
		)
	
};

export default CardList;