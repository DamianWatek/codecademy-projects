
// PART II 

/*const board = [
	[' ', ' ', ' '], 
	[' ', ' ', ' '], 
	[' ', ' ', ' ']
];*/


/*printBoard(board);

board[0][1] = '1';
board[2][2] = 'B';

printBoard(board);*/


/* PART III */

// Fukncja generowania planszy do gry
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	
	let board = [];
	
	for (let indexRows = 0; indexRows < numberOfRows; indexRows++) {
		let row = [];
		for (let indexColumn = 0;  indexColumn < numberOfColumns; indexColumn++) {
			row.push(' ');
		}
		board.push(row);
	}
	
	return board;
};

// Generowanie bomb 
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	let board = [];
	
	for (let indexRows = 0; indexRows < numberOfRows; indexRows++) {
		let row = [];
		for (let indexColumn = 0;  indexColumn < numberOfColumns; indexColumn++) {
			row.push(null);
		}
		board.push(row);
	}
	
	let numberOfBombsPlaced = 0;
	
	while (numberOfBombsPlaced < numberOfBombs) {
		
		let randomRowIndex = Math.floor(Math.random() * numberOfRows);
		let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
		board[randomRowIndex][randomColumnIndex] = 'B';
		numberOfBombsPlaced++
		// After Control flow fix potential bomb in the same place
	}
		
	return board;
};

// Rysowanie poprawnej planszy do gry 
const printBoard = board => {
	
	console.log(board.map(row => row.join(' | ')).join('\n'));
	
};


let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: '); 
console.log(printBoard(playerBoard));

console.log('Bomb Board: '); 
console.log(printBoard(bombBoard));















