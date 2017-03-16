import React from 'react';



export default class Tile extends React.Component{
	constructor(props) {
		super(props);
	}
		
	render() {
		return (
			<div className="tile"
				 style={this.props.style}
				 onClick={()=> {this.props.add(this.props.row, this.props.column)}}>
			</div>
		) 
	}
}

// React.propTypes = {
// 	key: React.PropTypes.number.isRequired,
// 	row: React.PropTypes.number.isRequired,
// 	board: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.bool.isRequired)),
// 	add: React.PropTypes.func.isRequired
// }