let raceNumber = Math.floor(Math.random()*1000);
let runnerRegistred = true;
let runnerAge = 25;

if (runnerRegistred != true) {
	raceNumber += 1000;
} else {
	raceNumber;
};

if (runnerAge < 18 || runnerRegistred === true) {
	console.log('Race start at 9:30 am ' + raceNumber);
} else if (runnerAge > 18 || runnerRegistred === false) {
  	console.log('Race start at 11:00 am ' + raceNumber);
} else {
	console.log('Please go to registration desk');
}
