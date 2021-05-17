const lib = require('./lib');

// destructuring
const { days } = lib.data;
const { firstDay } = lib.methods;

console.log('getDay() day mapping: Sun to Sat -> 0 to 6');
console.log('getMonth() month mapping: Jan to Dec -> 0 to 11');
let res = firstDay(2021, 4); // month 4 is the fifth month of the year - May
console.log('May 2021 - First day is', res, 'which is a', days[res]);
res = firstDay(2021, 1); // month 1 February
console.log('Feb 2021 - First day is', res, 'which is a', days[res]);
res = firstDay(2021, 8); // month 8 september
console.log('Sep 2021 - First day is', res, 'which is a', days[res]);
