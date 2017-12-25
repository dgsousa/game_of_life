import React, {PropTypes} from "react";
import Tile from "./Tile.jsx";



const Board = ({board, add}) =>
	
	<div className="board">
		{board.map((row, rowIndex) => 
			row.map((tile, columnIndex) =>
				<Tile 
					key={rowIndex*row.length + columnIndex}
					style={{top: rowIndex * 15, left: columnIndex * 15, background: tile || "transparent"}}
					row={rowIndex}
					column={columnIndex}
					add={add} 
				/>
			)
		)}
	</div>;


export default Board;

React.propTypes = {
	board: PropTypes.arrayOf(React.PropTypes.number.isRequired),
	add: PropTypes.func.isRequired
};



