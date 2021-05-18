const leap = (year) => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

const februaryDaysCount = (year) => {
  return leap(year) ? 29 : 28;
};

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/*
Arguments: 4 digit year
Return: an array of 12 numbers, each represents the
number of days for each month of the specific year
*/
function countOfDaysPerMonth(year) {
  return [31, februaryDaysCount(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}

/*
Returns the first day of the month 
Arguments: 4 digit year, Jan to Dec -> 0 to 11
Return: Sun to Sat -> 0 to 6
*/
function firstDay(year, month) {
  const fd = new Date(year, month);
  return fd.getDay();
}

/*
https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
Returns the number of days of the month 
Arguments: 4 digit year, Jan to Dec -> 0 to 11
Return: number indicating the count of days in the specific month
*/
function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

/*
Fill the monthly calendar array 
with 6 week arrays 
each containing the dates for each week
in the appropriate position for 
mapping: Sun to Sat -> 0 to 6
*/
function fill6x7(year, month) {
  const day1 = firstDay(year, month);
  const monthlyCalendar = [];
  let date = 1;

  for (let i = 0; i < 6; i++) {
    // create a week array
    let week = [];

    /*
    add dates to week
    fill with null values the date placeholders
    before the first day of the month
    and after the last day of the month
    */
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < day1) || date > daysInMonth(year, month)) {
        week.push(null);
      } else {
        week.push(date);
        date++;
      }
    }

    // add the week to the monthly calendar array
    monthlyCalendar.push(week);
  }

  return monthlyCalendar;
}

/*
Fill the monthly calendar array 
with a flat array of 42 dates
containing the dates for each week
in the appropriate position for 
mapping: Sun to Sat -> 0 to 6
*/
function fill42(year, month) {
  const day1 = firstDay(year, month);
  const monthlyCalendar = [];
  let date = 1;

  for (let i = 0; i < 42; i++) {
    /*
    add dates 
    fill with null values the date placeholders
    before the first day of the month
    and after the last day of the month
    */
    if (i < day1 || date > daysInMonth(year, month)) {
      monthlyCalendar.push(null);
    } else {
      monthlyCalendar.push(date);
      date++;
    }
  }

  return monthlyCalendar;
}

exports.data = { days, months };
exports.methods = {
  countOfDaysPerMonth,
  firstDay,
  daysInMonth,
  fill6x7,
  fill42,
};
