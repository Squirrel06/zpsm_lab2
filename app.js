const _ = require('lodash');

function calculateAverage() {
  return _.mean(arguments);
}

console.log(calculateAverage(1, 3, 0, 9, 5));
console.log(calculateAverage(1, 7, 3, 2));

function calculateMax() {
  return _.max(arguments);
}

function calculateMin() {
  return _.min(arguments);
}

console.log(calculateMax(1, 3, 0, 9, 5));
console.log(calculateMin(1, 7, 3, 2));