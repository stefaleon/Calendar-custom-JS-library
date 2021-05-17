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

function countOfDaysPerMonth(year) {
  return [31, februaryDaysCount(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}

function firstDay(year, month) {
  const fd = new Date(year, month);
  return fd.getDay();
}

exports.data = { days, months };
exports.methods = { countOfDaysPerMonth, firstDay };
