import React from 'react';

const Card = ({id, name, email}) => (
		<div className="card">
			<img src={ `https://robohash.org/${ id }?size=400x400` } alt="Robot" width="200" height="200"/>
			<div className="card-text">
				<h2>{ name }</h2>
				<p>{ email }</p>
			</div>
		</div>
	);

export default Card;