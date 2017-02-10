import React from 'react';


export default class BottomPanel extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="bottompanel">
				<button onClick={this.props.onStart}>Start</button>
				<button onClick={this.props.onStop}>Stop</button>
				<button onClick={this.props.onClear}>Clear</button>
			</div>
		)
	}
}



React.propTypes = {
	onStart: React.PropTypes.func.isRequired,
	onStop: React.PropTypes.func.isRequired,
	onClear: React.PropTypes.func.isRequired
}

