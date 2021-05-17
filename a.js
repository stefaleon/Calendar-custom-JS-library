const lib = require('./lib');

// destructuring
const { days, months } = lib.data;
const { countOfDaysPerMonth } = lib.methods;

console.log(days);
console.log(months);

const res = countOfDaysPerMonth(2021);
console.log('number of days for each month of 2021', res);
