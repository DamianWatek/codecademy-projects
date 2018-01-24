
//Function getTemp 
function getTemp() {
    // temp get value from input
    let temp = document.getElementById('temp').value;
    
    // div where we put result
    let resultFahrenheit = document.getElementById('result-fahrenheit');
    let resultCelsius = document.getElementById('result-celsius');
    
    // calculations
    const celsius = temp - 273;
    const fahrenheit = celsius*(9/5) + 32;
    let resultFah = Math.floor(fahrenheit);
    
    // We put result in html
    resultCelsius.innerHTML = `The temperature is ${celsius} degrees celsius.`;
    resultFahrenheit.innerHTML = `The temperature is ${resultFah} degrees fahrenheit.`;
};

// 
const submitBtn = document.getElementById('get-value');
submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    
    getTemp();
});

