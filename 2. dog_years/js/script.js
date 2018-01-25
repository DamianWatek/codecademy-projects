
function getDogYears() {
    // Name & age
    let name = document.getElementById('inputName').value;
    let age = document.getElementById('inputAge').value;

    // The first two human years of a dog's life count as 10.5 dog years each.
    let earlyYears = 2; 
    earlyYears = 2 * 10.5;
  
    // Human age -2 first dog years
    let laterYears = age - 2;
    
    // Dog years after two first years of dog life
    laterYears *= 4;

    // Human age in dog years
    let myAgeInDogYears = earlyYears + laterYears ;
    
    // function will make all letters in your name lowercase
    function capitalizeFirstLetter(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };
    
    // We put result in htdocument.getElementById('inputAge').value;ml
    let result = document.getElementById('result');
    result.innerHTML = `My name is ${capitalizeFirstLetter(name)}. I am ${myAgeInDogYears} years old in dog years.`;
};




const submitBtn = document.getElementById('get-value');
submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    
    getDogYears();
});








