
export class Board { 
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfRows * numberOfColumns;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }
    
    get playerBoard() { return this._playerBoard; }
    
    
    // Funkcja pokazująca plansze po odkryciu
    flipTile(rowIndex, columnIndex) {
        
        // Jeśli miejsce na planszy gracza jest puste zwraca tekst
        if (this._playerBoard[rowIndex][columnIndex] !== ' ') { 
            return 'This tile has already been flipped!';
        // Jeśli na planszy bomb jest B zwraca B na plansze gracza	
        } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
            this._playerBoard[rowIndex][columnIndex] = 'B';
        } else {
            this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        };
        
        this._numberOfTiles--;
    }
    
    // Funkcja generujaca liczbe bomb obok
    getNumberOfNeighborBombs(rowIndex, columnIndex) {
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
        this._numberOfRows = this._bombBoard.length;
        this._numberOfColumns = this._bombBoard[0].length;
        this._numberOfBombs = 0;

        neighborOffsets.forEach(offset => {
            const neighborRowIndex = rowIndex + offset[0];
            const neighborColumnIndex = columnIndex + offset[1];

            if (neighborRowIndex >= 0 && 
				neighborRowIndex < this._numberOfRows && 
				neighborColumnIndex >= 0 && 
				neighborColumnIndex < this._numberOfColumns) {
				
                if (this._bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
                    this._numberOfBombs++							 
                };					 
            };
		});
        return this._numberOfBombs;
    }
	
    // Metoda mowiaca o wygranej grze
    hasSafeTiles() { return this._numberOfTiles !== this._numberOfBombs; }
	
    // Rysowanie poprawnej planszy do gry 
    print() { console.log(this._playerBoard.map(row => row.join(' | ')).join('\n')); }
	
    // Fukncja generowania planszy do gry
    static generatePlayerBoard(numberOfRows, numberOfColumns) {

        let board = [];

        for (let indexRows = 0; indexRows < numberOfRows; indexRows++) {
            let row = [];
            for (let indexColumn = 0;  indexColumn < numberOfColumns; indexColumn++) {
                row.push(' ');
            }
            board.push(row);
        }

        return board;
    }
	
    // Generowanie bomb 
    static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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
};