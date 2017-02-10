import React from 'react';


import TopPanel from './TopPanel.jsx';
import Table from './Table.jsx';
import ButtonPanel from './ButtonPanel.jsx';



export default class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			board: [],
			interval: null,
			counter: 0
		}
	}

	componentWillMount() {
		this.createBoard(.7);
	}

	createBoard(initial) {
		let board = [];
		for(var i = 0; i < this.props.height; i++) {
			let row = [];
			for(var j = 0; j < this.props.width; j++) {
				let square = Math.random() >= initial;

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
				let square = false;
				let neighbors = this.getNeighbors(i, j);
				if(neighbors === 3) {
					row.push(true)
				} else if(this.state.board[i][j] && neighbors === 2) {
					row.push(true)
				} else {
					row.push(false);
				}
			}
			board.push(row);
		}
		this.setState({
			board: board,
			counter: this.state.counter + 1
		})
	}

	start() {
		this.state.interval = setInterval(this.update.bind(this), 100);
	}

	stop() {
		if(this.state.interval) {
			clearInterval(this.state.interval);
		}
	}

	clear() {
		this.createBoard(1);
	}

	getNeighbors(row, col) {
		let neighbors = 0;
		let width = this.props.width;
		let height = this.props.height;
		for(var k = (row - 1); k < (row + 2); k++) {
			for(var l = (col - 1); l < (col + 2); l++) {
				if(k >= 0 && k < height && l >= 0 && l < width) {
					if(this.state.board[k][l] && !(k === row && l === col)) {
						neighbors++;
					}	
				}
			}
		}
		return neighbors;
	}

	addSquare(row, col) {
		this.state.board[row][col] ? this.state.board[row][col] = false : this.state.board[row][col] = true;
		this.setState({
			board: this.state.board
		})
	}


	render() {
		return (
			<div className="main">
				<TopPanel 
					counter={this.state.counter}/>
				
				<Table 	
					board={this.state.board} 
					add={this.addSquare.bind(this)}/>
				<ButtonPanel 
					onStart={this.start.bind(this)}
					onStop={this.stop.bind(this)}
					onClear={this.clear.bind(this)}
					/>
			</div>
		)
	}
}


React.propTypes = {
	height: React.PropTypes.number.isRequired,
	width: React.PropTypes.number.isRequired
}








