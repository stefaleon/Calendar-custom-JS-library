# Calendar - JS custom library

- Data and methods for a calendar app

## Methods

### countOfDaysPerMonth(year)

- Arguments: 4 digit year
- Return: an array of 12 numbers, each represents the
  number of days for each month of the specific year

```
countOfDaysPerMonth(2021) // [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
```

### firstDay(year, month)

- Returns the first day of the month
- Arguments: 4 digit year, Jan to Dec -> 0 to 11
- Return: Sun to Sat -> 0 to 6

```
// first day of February 2021
firstDay(2021, 1) // 1
// Monday
```

### daysInMonth(year, month)

- Returns the number of days of the month
- Arguments: 4 digit year, Jan to Dec -> 0 to 11
- Return: number indicating the count of days in the specific month

```
// number of days in February 2021
daysInMonth(2021, 1) // 28

// number of days in February 2020
daysInMonth(2020, 1) // 29
```

### fill6x7(year, month)

- Fills the monthly calendar array with 6 sub-arrays
  each containing the dates for each week
  in the appropriate position for mapping: Sun to Sat -> 0 to 6
- Fills with null values the date placeholders before the first day of the month and after the last day of the month
- Arguments: 4 digit year, Jan to Dec -> 0 to 11

```
// for April 2021
fill6x7(2021, 3)

// returns
/*
[
  [null, null, null, null, 1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, null],
  [null, null, null, null, null, null, null],
]
/*
```

### fill42(year, month)

- Fills the monthly calendar array with a flat array of 42 dates
- Fills with null values the date placeholders before the first day of the month and after the last day of the month
- Arguments: 4 digit year, Jan to Dec -> 0 to 11

```
// for April 2021
fill42(2021, 3)

// returns
/*
[
  null, null, null, null, 1, 2, 3,
  4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17,
  18, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 28, 29, 30, null,
  null, null, null, null, null, null, null
]
/*
```

### fill42pn(year, month)

- Fills the monthly calendar array with a flat array of 42 dates
- Fills with appropriate values the date placeholders before the first day of the month and after the last day of the month
- Arguments: 4 digit year, Jan to Dec -> 0 to 11

```
// for May 2021
fill42pn(2021, 4)

// returns
/*
[
  25, 26, 27, 28, 29, 30, 1,
  2, 3, 4, 5, 6, 7, 8,
  9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29,
  30, 31, 1, 2, 3, 4, 5
];
/*
```
