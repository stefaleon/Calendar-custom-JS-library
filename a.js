const lib = require('./lib');

// destructuring
const { days } = lib.data;
const { firstDay, daysInMonth } = lib.methods;

/*
Fill the monthly calendar array 
with 6 week arrays 
each containing the dates for each week
in the appropriate position for 
mapping: Sun to Sat -> 0 to 6
*/
function fillMonthlyCalendarPage(year, month) {
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

console.log(fillMonthlyCalendarPage(2021, 3)); // April 2021
