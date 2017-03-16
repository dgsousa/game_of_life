import React, {PropTypes} from 'react';


const BottomPanel = (props) => {	
	return (
		<div className="bottompanel">
			<button onClick={props.onStart}>Start</button>
			<button onClick={props.onStop}>Stop</button>
			<button onClick={props.onClear}>Clear</button>
		</div>
	)	
}


React.propTypes = {
	onStart: PropTypes.func.isRequired,
	onStop: PropTypes.func.isRequired,
	onClear: PropTypes.func.isRequired
}

export default BottomPanel;