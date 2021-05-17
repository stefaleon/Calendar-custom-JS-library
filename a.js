const lib = require('./lib');

// destructuring
const { days } = lib.data;
const { daysInMonth } = lib.methods;

console.log('getDay() day mapping: Sun to Sat -> 0 to 6');
console.log('getMonth() month mapping: Jan to Dec -> 0 to 11');
let res = daysInMonth(2021, 4); // month 4 is the fifth month of the year - May
console.log('May 2021 has', res, 'days');
res = daysInMonth(2021, 1); // month 1 February
console.log('Feb 2021 has', res, 'days');
res = daysInMonth(2020, 1); // month 1 February, 2020 is a leap year
console.log('Feb 2020 has', res, 'days');
