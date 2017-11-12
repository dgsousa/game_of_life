import React, {PropTypes} from "react";


const BottomPanel = ({onStart, onStop, onClear}) => {	
	return (
		<div className="bottompanel">
			<button onClick={onStart}>Start</button>
			<button onClick={onStop}>Stop</button>
			<button onClick={onClear}>Clear</button>
		</div>
	);	
};


React.propTypes = {
	onStart: PropTypes.func.isRequired,
	onStop: PropTypes.func.isRequired,
	onClear: PropTypes.func.isRequired
};

export default BottomPanel;