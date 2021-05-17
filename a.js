const lib = require('./lib');

console.log(lib); // { methods: { test: [Function: test] } }

// destructuring
const { test } = lib.methods;

const res = test();

console.log(res); // 42
