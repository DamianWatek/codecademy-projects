let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out', '- 2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
secretMessage.push('to', 'program ');
secretMessage['easily'] = 'right'; 
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(6, 5, 'know');


const secretMsg = document.getElementById('secretMsg');

secretMsg.addEventListener('click', function(e){
    e.preventDefault();
    
    const result = document.getElementById('result');
    result.innerHTML = secretMessage.join(' ');
});


