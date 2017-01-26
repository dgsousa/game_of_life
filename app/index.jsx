var React = require('react');
var ReactDOM = require('react-dom');
require('./scss/application.scss');


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
		<td className={this.state.status}></td>
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
					board={this.props.board} />
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
					board={this.props.board} />
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
			interval: null
		}
	}

	componentWillMount() {
		let board = [];
		for(var i = 0; i < this.props.height; i++) {
			let row = [];
			for(var j = 0; j < this.props.width; j++) {
				let square = Math.random() >= .7;
				row.push(square);
			}
			board.push(row);
		}
		this.setState({
			board: board
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
			board: board
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

	getNeighbors(row, col) {
		let neighbors = 0;
		let width = this.props.width;
		let height = this.props.height;
		for(var k = (row - 1); k < (row + 2); k++) {
			for(var l = (col - 1); l < (col + 2); l++) {
				if(k >= 0 && k < width && l >= 0 && l < width) {
					if(this.state.board[k][l] && !(k === row && l === col)) {
						neighbors++;
					}	
				}
			}
		}
		return neighbors;
	}

	render() {
		return (
			<div className="main">
				<div className="header">React Table</div>
				<Table 	
					board={this.state.board} />
				<button onClick={this.start.bind(this)}>Start</button>
				<button onClick={this.stop.bind(this)}>Stop</button>
			</div>
		)
	}
}


ReactDOM.render(<App width={50} height={50}>Hello World</App>, document.getElementById('app'))


