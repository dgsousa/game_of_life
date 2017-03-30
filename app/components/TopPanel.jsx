import React, {PropTypes} from "react";


const TopPanel = (props) => {
	return (
		<div className="toppanel">
			<div className="header"><h1>GAME OF LIFE</h1></div>
			<div><h3>Generations: {props.counter}</h3></div>
		</div>
	);
}; 

React.propTypes = {
	counter: PropTypes.number.isRequired
};

export default TopPanel;