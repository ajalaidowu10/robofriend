import React from 'react';

const Card = ({id, name, email}) => (
		<div className="card">
			<img src={ `https://robohash.org/${ id }?size=200x200` } alt="Robot"/>
			<div className="card-text">
				<h2>{ name }</h2>
				<p>{ email }</p>
			</div>
		</div>
	);

export default Card;