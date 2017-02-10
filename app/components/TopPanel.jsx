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
			</div>
		)
	}
} 

React.propTypes = {
	counter: React.PropTypes.number.isRequired
}