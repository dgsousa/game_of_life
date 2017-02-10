import React from 'react';
import Tr from './Tr.jsx';



export default class Table extends React.Component{
	constructor(props) {
		super(props);
	}
	
	render() {			
		var tr = this.props.board.map(function(array, row) {
			return (
				<Tr key={row} 
					row={row} 
					board={this.props.board} 
					add={this.props.add}/>
			)
		}.bind(this))

		return (
			<table>
				<tbody>
					{tr}
				</tbody>
			</table>
		)
	}
}


React.propTypes = {
	board: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.bool.isRequired)),
	add: React.PropTypes.func.isRequired
}



