const team = {
  _games: [
    { opponent: 'Virtus', teamPoints: 42, opponentPoints: 27},
		{ opponent: 'Creative', teamPoints: 15, opponentPoints: 27},
    { opponent: 'Lincoln', teamPoints: 29, opponentPoints: 29}
  ],
  _players: [
    { firstName: 'Tom', lastName: 'Pool', age: '25' },
    { firstName: 'Damian', lastName: 'Wat', age: '27' },
    { firstName: 'Olga', lastName: 'Rock', age: '28' }
  ],
  
  // Getter method for games
  get games() { return this._games; },
	// Getter method for palyer
	get players() { return this._players; },
  // 
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    
    this.players.push(player);
  },
  
  addGame(opponentName, teamPoints, opponentPoints) {
    let game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    
    this.games.push(game);
  }
}; 

team.addPlayer('Steph', 'Curry', '28');
team.addPlayer('Lisa', 'Leslie', '44');
team.addPlayer('Bugs', 'Bunny', '76');

team.addGame("Titans", 100, 98);
team.addGame("Sony", 72, 89);
team.addGame("Samsung", 3, 4);

console.log(team.players);

console.log(team.games);