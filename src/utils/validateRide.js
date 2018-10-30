const validateRide = (rideData) => {
  const errors = {
    destination: '',
    date: '',
    time: '',
    takeOffVenue: '',
    capacity: ''
  };
  let isValidData = true;

  const now = new Date();
  const { time } = rideData;

  Object.entries(rideData).forEach(field => {
    const [ fieldName, fieldData ] = field;
    if (!fieldData) {
      errors[fieldName] = '* required!';
      isValidData = false;
    } else if (fieldName === 'date') {
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      let currentDate = '';

      if (month < 10 && day < 10) {
        currentDate = `${year}-0${month}-0${day}`;
      } else if (month < 10 && day > 9) {
        currentDate = `${year}-0${month}-${day}`;
      } else if (month > 9 && day < 10) {
        currentDate = `${year}-${month}-0${day}`;
      } else {
        currentDate = `${year}-${month}-${day}`;
      }
      
      if (currentDate > fieldData ) {
        errors[fieldName] = 'date is past';
        isValidData = false;
        // return true;
      } else if (currentDate === fieldData) {
        errors[fieldName] = '';
        if (time.length > 1) {
          const currentHour = now.getHours();
          const userInputedHour = parseInt(time);

          if (currentHour > userInputedHour) {
            errors['time'] = 'time is past';
            isValidData = false;
          } else if (currentHour === userInputedHour) {

            const userInputedMinutes = Number(time.split(':')[1]);
            const currentMinutes = (new Date()).getMinutes();

            if (currentMinutes > userInputedMinutes) {
              errors['time'] = 'time is past';
              isValidData = false;
            } else if (!((userInputedMinutes - currentMinutes) > 20)) {
              errors['time'] = 'take off time is less than 20 mins';
              isValidData = false;
            } else {
              errors['time'] = '';
            }
          } else {
            errors['time'] = '';
          }
        } else {
          errors['time'] = '* required';
          isValidData = false;
        }
      } else {
        errors[fieldName] = '';
      }
    } else if (fieldName === 'time') {
      return true;
    } else {
      errors[fieldName] = '';
    }
  });

  return ({
    isValidData,
    errors
  })
}

export default validateRide;