// User chocie 
const getUserChoice = userInput => {
    
  userInput = prompt('Chose: Rock || Paper || Scissors');
  userInput.toLowerCase();
	if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    alert('Error message! Please choice Rock, Paper or Scissors');
  }
};
// Computer chocie 
const randomNumber = Math.floor(Math.random() * 3);
let getComputerChoice = '';

switch(randomNumber) {
  case 0:
    getComputerChoice = 'rock';
    break;
  case 1:
    getComputerChoice = 'paper';
    break;
  case 2:
    getComputerChoice = 'scissors';
    
};

// Winner is?
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
  	return 'tie, play again!'
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return ' The computer won!';
    } else {
      return ' You won!';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return ' The computer won!';
    } else {
      return ' You won!';
    }
	} else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return ' The computer won!';
    } else {
      return ' You won!';
    }
  } else if (userChoice === 'bomb') {
    	alert('BOOOOOOOOOOOOOM!!!');
  }
};

let playGame = () => {
  let userChoice = getUserChoice('');
  let computerChoice = getComputerChoice;
  let answer = document.getElementById('answer');
    
  answer.innerHTML = `You threw: ${userChoice} || The computer threw: ${computerChoice} || ${determineWinner(userChoice, computerChoice)}`;
 
};

playGame();