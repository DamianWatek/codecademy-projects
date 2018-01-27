


function getWhaleTalk() {
    
    const input = document.getElementById('inputSentence').value;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let resultArray = [];
    
    for ( let inputIndex = 0; inputIndex < input.length; inputIndex++) {
      for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
        if (input[inputIndex] === vowels[vowelsIndex]) {
            resultArray.push(input[inputIndex]);
        } 
      }

       if (input[inputIndex] === 'e' || input[inputIndex] === 'u') {
            resultArray.push(input[inputIndex]);  
      }

    }
    
    return resultArray.join('').toUpperCase();
};



const whaleTalk = document.getElementById('whaleTalk');
whaleTalk.addEventListener('click', function(e){
    e.preventDefault();
    
    const result = document.getElementById('result');
    result.innerHTML = getWhaleTalk();
});

