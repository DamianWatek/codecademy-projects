
const getSleepHours = day => {
    const monVal = Number(document.getElementById('sleepVal-1').value);
    const tueVal = Number(document.getElementById('sleepVal-2').value);
    const wedVal = Number(document.getElementById('sleepVal-3').value);
    const thuVal = Number(document.getElementById('sleepVal-4').value);
    const friVal = Number(document.getElementById('sleepVal-5').value);
    const satVal = Number(document.getElementById('sleepVal-6').value);
    const sunVal = Number(document.getElementById('sleepVal-7').value);
    
    if (day === 'Monday') {
        return monVal;
      } else if (day === 'Tuesday') {
        return tueVal;
      } else if (day === 'Wednesday') {
        return wedVal;
      } else if (day === 'Thursday') {
        return thuVal;
      } else if (day === 'Friday') {
        return friVal;
      } else if (day === 'Saturday') {
        return satVal;
      } else if (day === 'Sunday') {
        return sunVal;
      } 
};


const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday'); 


const getIdealSleepHours = () => {
  const idealHours = Number(document.getElementById('idealVal').value);
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const result = document.getElementById('result');
    
  if (actualSleepHours === idealSleepHours) {
   result.innerHTML = 'I think you should be rested';
  } else if (actualSleepHours > idealSleepHours) {
    result.innerHTML = 'You need more sleep';
  } else if (actualSleepHours <  idealSleepHours) {
    result.innerHTML = 'Wake up! You sleep too long! :D';
  } 
};
  

const calcBtn = document.getElementById('get-value');
calcBtn.addEventListener('click', function(e){
    e.preventDefault();
    
    calculateSleepDebt();
});







