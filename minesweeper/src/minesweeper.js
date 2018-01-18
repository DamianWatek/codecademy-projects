
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
		
		if (board[randomRowIndex][randomColumnIndex] !== 'B') {
			
			board[randomRowIndex][randomColumnIndex] = 'B';
			numberOfBombsPlaced++;
			
		}
	}
		
	return board;
};

// Funkcja generujaca liczbe bomb obok
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
	
	const neighborOffsets = [
		[0, 1],
		[1, 1],
		[1, 0],
		[1, -1],
		[0, -1],
		[-1, -1],
		[-1, 0],
		[-1, 1]
	];
	const numberOfRows = bombBoard.length;
	const numberOfColumns = bombBoard[0].length;
	let numberOfBombs = 0;
	
	neighborOffsets.forEach(offset => {
		const neighborRowIndex = rowIndex + offset[0];
		const neighborColumnIndex = columnIndex + offset[1];
		
		if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
			if (bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
				numberOfBombs++							 
			};					 
		};
	});
	return numberOfBombs;
};

// Funkcja pokazująca plansze po odkryciu
const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
	// Jeśli miejsce na planszy gracza jest puste zwraca tekst
	if (playerBoard[rowIndex][columnIndex] !== ' ') { 
		
		return 'This tile has already been flipped!';
	// Jeśli na planszy bomb jest B zwraca B na plansze gracza	
	} else if (bombBoard[rowIndex][columnIndex] === 'B') {
		
		playerBoard[rowIndex][columnIndex] = 'B';

	} else {
		
		playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
		
	}
};

// Rysowanie poprawnej planszy do gry 
const printBoard = board => {
	
	console.log(board.map(row => row.join(' | ')).join('\n'));
	
};


const playerBoard = generatePlayerBoard(3, 3);
const bombBoard = generateBombBoard(3, 3, 4);

console.log('Player Board: '); 
printBoard(playerBoard);

console.log('Bomb Board: '); 
printBoard(bombBoard);
flipTile(playerBoard, bombBoard, 1, 1);

console.log('Updated Player Board: '); 
console.log(printBoard(playerBoard));















