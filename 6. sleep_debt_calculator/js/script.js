const getSleepHours = day => {
  if (day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday') {
    return 8;
  } else if (day === 'Wednesday') {
    return 8;
  } else if (day === 'Thursday') {
  	return 8;
  } else if (day === 'Friday') {
    return 10;
  } else if (day === 'Saturday') {
    return 10;
  } else if (day === 'Sunday') {
    return 8;
  } 
};

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = () => {
  let idealHours = 10;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours ===  idealSleepHours) {
    console.log('yea? enough');
  } 

  if (actualSleepHours > idealSleepHours) {
    console.log('Ready to work!');
  } 

  if (actualSleepHours <  idealSleepHours) {
    console.log('Get some rest!');
  }

};
  


calculateSleepDebt();






