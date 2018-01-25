(function getHello() {
 
    // Name user 
    let userName = prompt('Your name:');
    let hello = document.getElementById('hello');

    // Condition with name
    if (userName === '') {
        hello.innerHTML = 'Hello!'; 
    } else {
        hello.innerHTML = `Hello, ${userName}!`;
    };
    
 })();

function getEightBall() {
    // User question
    let userQuestion = document.getElementById('inputQuestion').value;
    let answer = document.getElementById('answer');
    // Condition with random answerda
    let randomNumber = Math.floor(Math.random() * 7);
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
    answer.innerHTML = `Your question is: ${userQuestion} and The eight ball answered:   ${eightBall}`;
};


const submitBtn = document.getElementById('get-value');
submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    
    getEightBallDamian();
});

