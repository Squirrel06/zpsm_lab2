const _ = require('lodash');

function calculateAverage() {
  return _.mean(arguments);
}

console.log(calculateAverage(1, 3, 0, 9, 5));
console.log(calculateAverage(1, 7, 3, 2));