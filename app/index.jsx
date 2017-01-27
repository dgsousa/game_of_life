import React from 'react';
import ReactDOM from 'react-dom';
import './scss/application.scss';

import TopPanel from './components/TopPanel.jsx'




class Td extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			status: "dead"
		}
	}

	componentWillMount() {
		var status = "";
		if(this.props.board[this.props.row][this.props.col] === true) {
			status = "alive";
		} else {
			status = "dead";
		}
		this.setState({
			status: status
		})
	}

	componentWillReceiveProps(nextProps) {
		if(this.props !== nextProps) {
			var status = "";
			if(nextProps.board[nextProps.row][nextProps.col] === true) {
				status = "alive";
			} else {
				status = "dead";
			}
			this.setState({
				status: status
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


class Tr extends React.Component{
	constructor(props) {
		super(props);
	}
		
	render() {
		var td = this.props.board[this.props.row].map(function(array, col) {
			return (
				<Td key={col} 
					col={col} 
					row={this.props.row} 
					board={this.props.board} 
					add={this.props.add}/>
			)
		}.bind(this))

		return (
			<tr>{td}</tr>
		) 
	}
}



class Table extends React.Component{
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



class App extends React.Component{
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
					onStart={this.start.bind(this)}
					onStop={this.stop.bind(this)}
					onClear={this.clear.bind(this)}
					counter={this.state.counter}/>
				
				<Table 	
					board={this.state.board} 
					add={this.addSquare.bind(this)}/>
			</div>
		)
	}
}


ReactDOM.render(<App width={60} height={40}>Hello World</App>, document.getElementById('app'))


