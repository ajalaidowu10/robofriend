import React from 'react';

const SearchBox = ({ searchChange }) => {
	return(
			<div className="search-box">
				<input
					type="search" 
					placeholder="search for robots"
					onChange={ searchChange }
				/>
			</div>
		);
}
export default SearchBox;