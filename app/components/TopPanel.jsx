import React from 'react';


export default class TopPanel extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="toppanel">
				<div className="header"><h1>GAME OF LIFE</h1></div>
				<div><h3>Generations: {this.props.counter}</h3></div>
				<button onClick={this.props.onStart}>Start</button>
				<button onClick={this.props.onStop}>Stop</button>
				<button onClick={this.props.onClear}>Clear</button>
			</div>
		)
	}
} 