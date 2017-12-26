import React, {PropTypes} from "react";


const Board = ({board, counter, addSquare, start, stop, clear}) =>
	
	<div className="main">
		<div className="toppanel">
			<div className="header"><h1>GAME OF LIFE</h1></div>
			<div><h3>Generations: {counter}</h3></div>
		</div>
		<div className="board">
			{board.map((row, rowIndex) => 
				row.map((tile, columnIndex) =>
					<div 
						className="tile"
						key={rowIndex*row.length + columnIndex}
						style={{top: rowIndex * 15, left: columnIndex * 15, background: tile || "transparent"}}
						onClick={()=> {addSquare(rowIndex, columnIndex);}}
					></div>
				)
			)}
		</div>
		<div className="bottompanel">
			<button onClick={start}>Start</button>
			<button onClick={stop}>Stop</button>
			<button onClick={clear}>Clear</button>
		</div>
	</div>;


export default Board;

React.propTypes = {
	board: PropTypes.arrayOf(React.PropTypes.number.isRequired),
	counter: PropTypes.number.isRequired,
	addSquare: PropTypes.func.isRequired,
	start: PropTypes.func.isRequired,
	stop: PropTypes.func.isRequired,
	clear: PropTypes.func.isRequired
};



