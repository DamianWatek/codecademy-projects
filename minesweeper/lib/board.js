'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = exports.Board = function () {
    function Board(numberOfRows, numberOfColumns, numberOfBombs) {
        _classCallCheck(this, Board);

        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfRows * numberOfColumns;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    _createClass(Board, [{
        key: 'flipTile',


        // Funkcja pokazująca plansze po odkryciu
        value: function flipTile(rowIndex, columnIndex) {

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

    }, {
        key: 'getNumberOfNeighborBombs',
        value: function getNumberOfNeighborBombs(rowIndex, columnIndex) {
            var _this = this;

            var neighborOffsets = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
            this._numberOfRows = this._bombBoard.length;
            this._numberOfColumns = this._bombBoard[0].length;
            this._numberOfBombs = 0;

            neighborOffsets.forEach(function (offset) {
                var neighborRowIndex = rowIndex + offset[0];
                var neighborColumnIndex = columnIndex + offset[1];

                if (neighborRowIndex >= 0 && neighborRowIndex < _this._numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < _this._numberOfColumns) {
                    if (_this._bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
                        _this._numberOfBombs++;
                    };
                };
            });
            return this._numberOfBombs;
        }
        // Metoda mowiaca o wygranej grze

    }, {
        key: 'hasSafeTiles',
        value: function hasSafeTiles() {
            return this._numberOfTiles !== this._numberOfBombs;
        }
        // Rysowanie poprawnej planszy do gry 

    }, {
        key: 'print',
        value: function print() {

            console.log(this._playerBoard.map(function (row) {
                return row.join(' | ');
            }).join('\n'));
        }
    }, {
        key: 'playerBoard',
        get: function get() {
            return this._playerBoard;
        }
    }], [{
        key: 'generatePlayerBoard',

        // Fukncja generowania planszy do gry
        value: function generatePlayerBoard(numberOfRows, numberOfColumns) {

            var board = [];

            for (var indexRows = 0; indexRows < numberOfRows; indexRows++) {
                var row = [];
                for (var indexColumn = 0; indexColumn < numberOfColumns; indexColumn++) {
                    row.push(' ');
                }
                board.push(row);
            }

            return board;
        }
        // Generowanie bomb 

    }, {
        key: 'generateBombBoard',
        value: function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
            var board = [];

            for (var indexRows = 0; indexRows < numberOfRows; indexRows++) {
                var row = [];
                for (var indexColumn = 0; indexColumn < numberOfColumns; indexColumn++) {
                    row.push(null);
                }
                board.push(row);
            }

            var numberOfBombsPlaced = 0;

            while (numberOfBombsPlaced < numberOfBombs) {

                var randomRowIndex = Math.floor(Math.random() * numberOfRows);
                var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

                if (board[randomRowIndex][randomColumnIndex] !== 'B') {

                    board[randomRowIndex][randomColumnIndex] = 'B';
                    numberOfBombsPlaced++;
                }
            }

            return board;
        }
    }]);

    return Board;
}();

;