import React from 'react';
import Td from './Td.jsx';


export default class Tr extends React.Component{
	constructor(props) {
		super(props);
	}
		
	render() {
		let td = this.props.board[this.props.row].map((array, col)=> {
			return (
				<Td key={col} 
					col={col} 
					row={this.props.row} 
					board={this.props.board} 
					add={this.props.add}/>
			)
		})

		return (
			<tr>{td}</tr>
		) 
	}
}

React.propTypes = {
	key: React.PropTypes.number.isRequired,
	row: React.PropTypes.number.isRequired,
	board: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.bool.isRequired)),
	add: React.PropTypes.func.isRequired
}