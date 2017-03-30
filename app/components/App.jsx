import React, {Component, PropTypes} from "react";
import TopPanel from "./TopPanel.jsx";
import Board from "./Board.jsx";
import ButtonPanel from "./ButtonPanel.jsx";



export default class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			board: [],
			counter: 0
		};
	}

	componentWillMount() {
		this.createBoard(.7);
	}

	createBoard(initial) {
		let board = [];
		for(let i = 0; i < this.props.height; i++) {
			let row = [];
			for(let j = 0; j < this.props.width; j++) {
				let square = Math.random() >= initial ? "pink" : "";
				row.push(square);
			}
			board.push(row);
		}
		this.setState({
			board: board,
			counter: 0
		});
	}

	update() {
		let board = [];
		for(let i = 0; i < this.props.height; i++) {
			let row = [];
			for(let j = 0; j < this.props.width; j++) {
				let neighbors = this.getNeighbors(i, j);
				if(this.state.board[i][j] && (neighbors === 2 || neighbors === 3)) {
					row.push("red");
				} else if(!this.state.board[i][j] && neighbors === 3) {
					row.push("pink");
				} else {
					row.push("");
				}
			}
			board.push(row);
		}
		this.setState({
			board: board,
			counter: this.state.counter + 1
		});
	}

	start() {
		this.interval = setInterval(this.update.bind(this), 100);
	}

	stop() {
		if(this.interval) {
			clearInterval(this.interval);
		}
	}

	clear() {
		this.createBoard(1);
	}

	getNeighbors(row, col) {
		let neighbors = 0;
		for(let k = -1; k < 2; k++) {
			for(let l = -1; l < 2; l++) {	
				if(this.state.board[row + k] && this.state.board[row + k][col + l] && (k != 0 || l != 0)) {
					neighbors++;
				}		
			}
		}
		return neighbors;
	}

	addSquare(row, col) {
		this.state.board[row][col] ? this.state.board[row][col] = "" : this.state.board[row][col] = "pink";
		this.setState({
			board: this.state.board
		});
	}


	render() {
		return (
			<div className="main">
				<TopPanel 
					counter={this.state.counter}/>
				<Board 	
					board={this.state.board} 
					add={this.addSquare.bind(this)}/>
				
				<ButtonPanel 
					onStart={this.start.bind(this)}
					onStop={this.stop.bind(this)}
					onClear={this.clear.bind(this)}
					/>
			</div>
		);
	}
}


React.propTypes = {
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired
};








