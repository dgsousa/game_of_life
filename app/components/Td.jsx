import React from 'react';


export default class Td extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			status: "dead",
			age: 0
		}
	}

	componentWillMount() {
		var status = "";
		var age = 0;
		if(this.props.board[this.props.row][this.props.col] === true) {
			status = "newborn";
			age = 1;
		} else {
			status = "dead";
			age = 0;
		}
		this.setState({
			status: status,
			age: age
		})
	}

	componentWillReceiveProps(nextProps) {
		if(this.props !== nextProps) {
			var status = "";
			var age = this.state.age;
			if(nextProps.board[nextProps.row][nextProps.col] === true && age === 0) {
				status = "newborn";
				age++;
			} else if(nextProps.board[nextProps.row][nextProps.col] === true && age >= 1) {
				status = "alive";
				age++;
			} else {
				status = "dead";
				age = 0;
			}
			this.setState({
				status: status,
				age: age
			})
		}
	}

	render() {
		return (
			<td 
				className={this.state.status}
				onClick={function() {this.props.add(this.props.row, this.props.col)}.bind(this)}></td>
		)
	}	
}

React.propTypes = {
	key: React.PropTypes.number.isRequired,
	col: React.PropTypes.number.isRequired,
	row: React.PropTypes.number.isRequired,
	board: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.bool.isRequired)),
	add: React.PropTypes.func.isRequired
}










