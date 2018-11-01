import validateRide from 'utils/validateRide';

const now = new Date();
const year = now.getFullYear();
const currentMonth = now.getMonth() + 1;
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

const formatDate = (year, month, day) => {
  let currentDate;

  if (month < 10 && day < 10) {
    currentDate = `${year}-0${month}-0${day}`;
  } else if (month < 10 && day > 9) {
    currentDate = `${year}-0${month}-${day}`;
  } else if (month > 9 && day < 10) {
    currentDate = `${year}-${month}-0${day}`;
  } else {
    currentDate = `${year}-${month}-${day}`;
  }

  return currentDate;
}


const mockRide = {
  destination: 'Okija',
  time: '09:00 PM',
  date: `${year}-${currentMonth}-${day}`,
  capacity: 5,
  takeOffVenue: 'mende'
}
const badData = {
  destination: '',
  time: '12:00 AM',
  date: '2018-08-06',
  capacity: 5,
  takeOffVenue: ''
}
const mockRide1 = {
  destination: 'Okija',
  time: '00:00 AM',
  date: formatDate(year, currentMonth, day),
  capacity: 5,
  takeOffVenue: 'mende'
}

const mockRide2 = {
  destination: 'Okija',
  time: `${hours}:00`,
  date: formatDate(year, currentMonth, day),
  capacity: 5,
  takeOffVenue: 'mende'
}
const mockRide3 = {
  destination: 'Okija',
  time: `${hours}:${minutes}`,
  date: formatDate(year, currentMonth, day),
  capacity: 5,
  takeOffVenue: 'mende'
}
const mockRide4 = {
  destination: 'Okija',
  time: `${hours}:${minutes + 21}`,
  date: formatDate(year, currentMonth, day),
  capacity: 5,
  takeOffVenue: 'mende'
}
const mockRide5 = {
  destination: 'Okija',
  time: `${hours + 1}:${minutes + 21}`,
  date: formatDate(year, currentMonth, day),
  capacity: 5,
  takeOffVenue: 'mende'
}
const mockRide6 = {
  destination: 'Okija',
  time: '',
  date: formatDate(year, currentMonth, day),
  capacity: 5,
  takeOffVenue: 'mende'
}
describe('VALIDATE RIDE TESTS', () => {
  test('it runs successfully with valid data', () => {
    expect(validateRide(mockRide).isValidData).toBe(true);
  })

  test('it fails with bad data', () => {
    expect(validateRide(badData).isValidData).toBe(false);
  });

  test('it fails when creating ride with the same date as today and past hour', () => {
    expect(validateRide(mockRide1).isValidData).toBe(false);
    expect(validateRide(mockRide1).errors.time).toBe('time is past');
  })

  test('it fails for same date, hour and past minute rides', () => {
    expect(validateRide(mockRide2).isValidData).toBe(false);
    expect(validateRide(mockRide2).errors.time).toBe('time is past');
  })

  test('it fails for same date, hour and minute less than 20 mins', () => {
    expect(validateRide(mockRide3).isValidData).toBe(false);
    expect(validateRide(mockRide3).errors.time).toBe('take off time is less than 20 mins');
  })

  test('successfully for same date, hour and minute > 20 rides', () => {
    expect(validateRide(mockRide4).isValidData).toBe(true);
    expect(validateRide(mockRide4).errors.time).toBe('');
  })

  test('successful for same date and futur hour(s) rides', () => {
    expect(validateRide(mockRide5).isValidData).toBe(true);
    expect(validateRide(mockRide5).errors.time).toBe('');
  })

  test('fails for same date and futur hour(s) rides', () => {
    expect(validateRide(mockRide6).isValidData).toBe(false);
    expect(validateRide(mockRide6).errors.time).toBe('* required');
  })
})
