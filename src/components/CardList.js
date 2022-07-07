import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	console.log('CardList');
	return (
			<div className="card-list">
				{
					robots.map((robot, i) => (
						<Card 
							key={ i } 
							id={ robot.id } 
							name={ robot.name } 
							email={ robot.email }
						/>)
					) 
				}
			</div>
		)
	
};

export default CardList;