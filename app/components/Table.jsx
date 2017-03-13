import React from 'react';
import Tr from './Tr.jsx';



export default class Table extends React.Component{
	constructor(props) {
		super(props);
	}
	
	render() {			
		let tr = this.props.board.map((array, row)=> {
			return (
				<Tr key={row} 
					row={row} 
					board={this.props.board} 
					add={this.props.add}/>
			)
		})

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



