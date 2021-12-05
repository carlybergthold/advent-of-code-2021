const sonarSweeps = require('./input');

// Part 1
let increases = 0;

for (let index = 1; index < sonarSweeps.length; index++) {
    const isIncrease = sonarSweeps[index] > sonarSweeps[index - 1];
    if (isIncrease) increases++;
};

console.log('There are ' + increases + ' sonar sweeps that are larger than the previous measurement.')

// Part 2
let measurementIncreases = 0;

for (let index = 1; index < (sonarSweeps.length - 2); index++) {
    const lastMeasurementWindow = sonarSweeps[index - 1] + sonarSweeps[index] + sonarSweeps[index + 1];
    const measurementWindow = sonarSweeps[index] + sonarSweeps[index + 1] + sonarSweeps[index + 2];
    if (measurementWindow > lastMeasurementWindow) measurementIncreases++;
};

console.log('There are ' + measurementIncreases + ' three measurement windows that are larger than the previous window.')
