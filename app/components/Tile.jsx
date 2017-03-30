import React, {PropTypes} from "react";



const Tile = (props) =>{	
	return (
		<div 
			className="tile"
			style={props.style}
			onClick={()=> {props.add(props.row, props.column);}}>
		</div>
	); 
};

React.propTypes = {
	key: PropTypes.number.isRequired,
	row: PropTypes.number.isRequired,
	column: PropTypes.number.isRequired,
	style: PropTypes.shape({
		top: PropTypes.number.isRequired,
		left: PropTypes.number.isRequired,
		background: PropTypes.string.isRequired
	}).isRequired,
	add: PropTypes.func.isRequired
};

export default Tile;