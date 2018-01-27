
function getNumber() {
    let raceNumber = Math.floor(Math.random()*1000);
    
    const result = document.getElementById('result');
    const runnerRegistred = document.getElementById('registred').value;
    const runnerAge = Number(document.getElementById('inputAge').value);

    if (runnerRegistred !== 'true') {
        raceNumber += 1000;
    } else {
        raceNumber;
    };
    

    if (runnerAge < 18 || runnerRegistred === 'true') {
        result.innerHTML = 'Race start at 9:30 am ' + raceNumber;
    } else if (runnerAge > 18 || runnerRegistred === 'false') {
        result.innerHTML = 'Race start at 11:00 am ' + raceNumber;
    } else {
        result.innerHTML =  'Please go to registration desk';
    }
    
    
} 


const subBtn = document.getElementById('get-value')
subBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    getNumber();
});