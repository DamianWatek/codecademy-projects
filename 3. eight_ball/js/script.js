// Name user 
let userName = prompt('Your name:');

// Condition with name
if (userName === '') {
  alert('Hello!'); 
} else {
  alert(`Hello, ${userName}!`);
}
// User question
let userQuestion = prompt('Your question:');

// Condition with random answer
const randomNumber = Math.floor(Math.random() * 7);
let eightBall = '';

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = "Don't count on it";
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
	case 7:
    eightBall = 'Signs point to yes';
    break;
};

// Answer 
alert(`Your question is: ${userQuestion} and The eight ball answered:   ${eightBall}`);